require('dotenv').config();
const express = require('express');
const line = require('@line/bot-sdk');
const { ensureHeaderRow, upsertUserProfile } = require('./sheets');

const bots = [
  {
    id: process.env.WEBHOOK_PATH_1,
    name: '株式会社TETOTE',
    config: {
      channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN_1,
      channelSecret: process.env.CHANNEL_SECRET_1,
    },
  },
  {
    id: process.env.WEBHOOK_PATH_2,
    name: 'ニッカス美容外科',
    config: {
      channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN_2,
      channelSecret: process.env.CHANNEL_SECRET_2,
    },
  },
];

const app = express();

// raw body を保持して署名検証用に使う
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

// BotごとにWebhook URLを分ける
app.post('/webhook/:botId', async (req, res) => {
  const botId = req.params.botId;
  const bot = bots.find((b) => b.id === botId);
  if (!bot) return res.status(404).send('Bot not found');

  const signature = req.headers['x-line-signature'];
  if (!signature) return res.status(400).send('No X-Line-Signature header');

  // 署名検証
  try {
    line.validateSignature(req.rawBody, bot.config.channelSecret, signature);
    console.log(`[署名検証成功] Bot=${bot.name}`);
  } catch (e) {
    console.error(`[署名検証失敗] Bot=${bot.name}`, e.message);
    return res.status(403).send('Invalid signature');
  }

  const client = new line.Client(bot.config);
  const events = req.body.events || [];

  // LINEには必ず200を返す
  res.sendStatus(200);

  // 非同期でイベント処理
  (async () => {
    try {
      await ensureHeaderRow();
      await Promise.all(events.map((event) => handleEvent(event, client, bot.name)));
    } catch (e) {
      console.error('[webhook] async processing error:', e.stack || e);
    }
  })();
});

// 動作確認用
app.get('/health', (_req, res) => res.status(200).send('ok'));

// イベント処理
async function handleEvent(event, client, botName) {
  if (event.type !== 'follow' && event.type !== 'message') return;

  const userId = event?.source?.userId;
  if (!userId) return;

  try {
    const profile = await client.getProfile(userId);
    const displayName = profile.displayName || '';
    const pictureUrl = profile.pictureUrl || '';
    const role = '';
    const updatedAt = '';

    await upsertUserProfile({
      timestamp: new Date().toISOString(),
      botName,
      userId,
      displayName,
      pictureUrl,
      role,
      updatedAt,
    });

    console.log(`[${botName}] 友だちID: ${userId}, displayName: ${displayName}`);
  } catch (e) {
    console.error(`[handleEvent][${botName}] error:`, e);
  }
}

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
