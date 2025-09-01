/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "arrify":
/*!*************************!*\
  !*** external "arrify" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("arrify");

/***/ }),

/***/ "fast-text-encoding":
/*!*************************************!*\
  !*** external "fast-text-encoding" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("fast-text-encoding");

/***/ }),

/***/ "google-p12-pem":
/*!*********************************!*\
  !*** external "google-p12-pem" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("google-p12-pem");

/***/ }),

/***/ "lru-cache":
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lru-cache");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(api)/../src/sheets.js":
/*!************************!*\
  !*** ../src/sheets.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(__webpack_require__(/*! dotenv */ \"(api)/../node_modules/dotenv/lib/main.js\").config)();\r\nconst { google } = __webpack_require__(/*! googleapis */ \"(api)/../node_modules/googleapis/build/src/index.js\");\r\nconst { GoogleAuth } = __webpack_require__(/*! google-auth-library */ \"(api)/../node_modules/google-auth-library/build/src/index.js\");\r\n\r\n// GOOGLE_CREDENTIALS をオブジェクトに変換\r\nconst googleCredentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);\r\n\r\n// private_key の改行を実際の改行に置換\r\ngoogleCredentials.private_key = googleCredentials.private_key.replace(/\\\\n/g, '\\n');\r\n\r\nconst auth = new GoogleAuth({\r\n  credentials: googleCredentials,\r\n  scopes: ['https://www.googleapis.com/auth/spreadsheets'],\r\n});\r\n\r\nconst sheets = google.sheets({ version: 'v4', auth });\r\n\r\nconst SPREADSHEET_ID = process.env.SPREADSHEET_ID;\r\nconst SHEET_NAME = process.env.SHEET_NAME || 'Sheet1';\r\n\r\nconst DATA_RANGE = `${SHEET_NAME}!A:E`; // timestamp, botName, userId, displayName, pictureUrl\r\n\r\n// ヘッダー行を保証\r\nasync function ensureHeaderRow() {\r\n  try {\r\n    const res = await sheets.spreadsheets.values.get({\r\n      spreadsheetId: SPREADSHEET_ID,\r\n      range: `${SHEET_NAME}!A1:E1`,\r\n    });\r\n\r\n    const values = res.data.values;\r\n    const expected = ['timestamp', 'botName', 'userId', 'displayName', 'pictureUrl'];\r\n\r\n    if (!values || !values[0] || values[0].length === 0 || values[0].join('') === '') {\r\n      await sheets.spreadsheets.values.update({\r\n        spreadsheetId: SPREADSHEET_ID,\r\n        range: `${SHEET_NAME}!A1:E1`,\r\n        valueInputOption: 'RAW',\r\n        requestBody: { values: [expected] },\r\n      });\r\n    }\r\n  } catch (e) {\r\n    throw e;\r\n  }\r\n}\r\n\r\n// ユーザープロファイルを追加または上書き\r\nasync function upsertUserProfile({ timestamp, botName, userId, displayName, pictureUrl }) {\r\n  const res = await sheets.spreadsheets.values.get({\r\n    spreadsheetId: SPREADSHEET_ID,\r\n    range: DATA_RANGE,\r\n  });\r\n\r\n  const rows = res.data.values || [];\r\n  let targetRow = -1;\r\n\r\n  for (let i = 1; i < rows.length; i++) {\r\n    // B列(botName)とC列(userId)でユニーク判定\r\n    if (rows[i][1] === botName && rows[i][2] === userId) {\r\n      targetRow = i + 1;\r\n      break;\r\n    }\r\n  }\r\n\r\n  const record = [[timestamp, botName, userId, displayName, pictureUrl]];\r\n\r\n  if (targetRow === -1) {\r\n    // 追記\r\n    await sheets.spreadsheets.values.append({\r\n      spreadsheetId: SPREADSHEET_ID,\r\n      range: DATA_RANGE,\r\n      valueInputOption: 'RAW',\r\n      insertDataOption: 'INSERT_ROWS',\r\n      requestBody: { values: record },\r\n    });\r\n  } else {\r\n    // 上書き\r\n    await sheets.spreadsheets.values.update({\r\n      spreadsheetId: SPREADSHEET_ID,\r\n      range: `${SHEET_NAME}!A${targetRow}:E${targetRow}`,\r\n      valueInputOption: 'RAW',\r\n      requestBody: { values: record },\r\n    });\r\n  }\r\n}\r\n\r\nmodule.exports = { ensureHeaderRow, upsertUserProfile };\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vc3JjL3NoZWV0cy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxzRkFBd0I7QUFDeEIsUUFBUSxTQUFTLEVBQUUsbUJBQU8sQ0FBQyx1RUFBWTtBQUN2QyxRQUFRLGFBQWEsRUFBRSxtQkFBTyxDQUFDLHlGQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsV0FBVyxPQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQyxPQUFPO0FBQ1A7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxREFBcUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckMsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsV0FBVyxJQUFJLFVBQVUsSUFBSSxVQUFVO0FBQ3ZEO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGluZS11c2VyLXRvLXNoZWV0cy8uLi9zcmMvc2hlZXRzLmpzPzhlN2YiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XHJcbmNvbnN0IHsgZ29vZ2xlIH0gPSByZXF1aXJlKCdnb29nbGVhcGlzJyk7XHJcbmNvbnN0IHsgR29vZ2xlQXV0aCB9ID0gcmVxdWlyZSgnZ29vZ2xlLWF1dGgtbGlicmFyeScpO1xyXG5cclxuLy8gR09PR0xFX0NSRURFTlRJQUxTIOOCkuOCquODluOCuOOCp+OCr+ODiOOBq+WkieaPm1xyXG5jb25zdCBnb29nbGVDcmVkZW50aWFscyA9IEpTT04ucGFyc2UocHJvY2Vzcy5lbnYuR09PR0xFX0NSRURFTlRJQUxTKTtcclxuXHJcbi8vIHByaXZhdGVfa2V5IOOBruaUueihjOOCkuWun+mam+OBruaUueihjOOBq+e9ruaPm1xyXG5nb29nbGVDcmVkZW50aWFscy5wcml2YXRlX2tleSA9IGdvb2dsZUNyZWRlbnRpYWxzLnByaXZhdGVfa2V5LnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKTtcclxuXHJcbmNvbnN0IGF1dGggPSBuZXcgR29vZ2xlQXV0aCh7XHJcbiAgY3JlZGVudGlhbHM6IGdvb2dsZUNyZWRlbnRpYWxzLFxyXG4gIHNjb3BlczogWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cyddLFxyXG59KTtcclxuXHJcbmNvbnN0IHNoZWV0cyA9IGdvb2dsZS5zaGVldHMoeyB2ZXJzaW9uOiAndjQnLCBhdXRoIH0pO1xyXG5cclxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSBwcm9jZXNzLmVudi5TUFJFQURTSEVFVF9JRDtcclxuY29uc3QgU0hFRVRfTkFNRSA9IHByb2Nlc3MuZW52LlNIRUVUX05BTUUgfHwgJ1NoZWV0MSc7XHJcblxyXG5jb25zdCBEQVRBX1JBTkdFID0gYCR7U0hFRVRfTkFNRX0hQTpFYDsgLy8gdGltZXN0YW1wLCBib3ROYW1lLCB1c2VySWQsIGRpc3BsYXlOYW1lLCBwaWN0dXJlVXJsXHJcblxyXG4vLyDjg5jjg4Pjg4Djg7zooYzjgpLkv53oqLxcclxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlSGVhZGVyUm93KCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gICAgICBzcHJlYWRzaGVldElkOiBTUFJFQURTSEVFVF9JRCxcclxuICAgICAgcmFuZ2U6IGAke1NIRUVUX05BTUV9IUExOkUxYCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IHJlcy5kYXRhLnZhbHVlcztcclxuICAgIGNvbnN0IGV4cGVjdGVkID0gWyd0aW1lc3RhbXAnLCAnYm90TmFtZScsICd1c2VySWQnLCAnZGlzcGxheU5hbWUnLCAncGljdHVyZVVybCddO1xyXG5cclxuICAgIGlmICghdmFsdWVzIHx8ICF2YWx1ZXNbMF0gfHwgdmFsdWVzWzBdLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZXNbMF0uam9pbignJykgPT09ICcnKSB7XHJcbiAgICAgIGF3YWl0IHNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLnVwZGF0ZSh7XHJcbiAgICAgICAgc3ByZWFkc2hlZXRJZDogU1BSRUFEU0hFRVRfSUQsXHJcbiAgICAgICAgcmFuZ2U6IGAke1NIRUVUX05BTUV9IUExOkUxYCxcclxuICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnUkFXJyxcclxuICAgICAgICByZXF1ZXN0Qm9keTogeyB2YWx1ZXM6IFtleHBlY3RlZF0gfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIOODpuODvOOCtuODvOODl+ODreODleOCoeOCpOODq+OCkui/veWKoOOBvuOBn+OBr+S4iuabuOOBjVxyXG5hc3luYyBmdW5jdGlvbiB1cHNlcnRVc2VyUHJvZmlsZSh7IHRpbWVzdGFtcCwgYm90TmFtZSwgdXNlcklkLCBkaXNwbGF5TmFtZSwgcGljdHVyZVVybCB9KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuZ2V0KHtcclxuICAgIHNwcmVhZHNoZWV0SWQ6IFNQUkVBRFNIRUVUX0lELFxyXG4gICAgcmFuZ2U6IERBVEFfUkFOR0UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvd3MgPSByZXMuZGF0YS52YWx1ZXMgfHwgW107XHJcbiAgbGV0IHRhcmdldFJvdyA9IC0xO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIELliJcoYm90TmFtZSnjgahD5YiXKHVzZXJJZCnjgafjg6bjg4vjg7zjgq/liKTlrppcclxuICAgIGlmIChyb3dzW2ldWzFdID09PSBib3ROYW1lICYmIHJvd3NbaV1bMl0gPT09IHVzZXJJZCkge1xyXG4gICAgICB0YXJnZXRSb3cgPSBpICsgMTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNvcmQgPSBbW3RpbWVzdGFtcCwgYm90TmFtZSwgdXNlcklkLCBkaXNwbGF5TmFtZSwgcGljdHVyZVVybF1dO1xyXG5cclxuICBpZiAodGFyZ2V0Um93ID09PSAtMSkge1xyXG4gICAgLy8g6L+96KiYXHJcbiAgICBhd2FpdCBzaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xyXG4gICAgICBzcHJlYWRzaGVldElkOiBTUFJFQURTSEVFVF9JRCxcclxuICAgICAgcmFuZ2U6IERBVEFfUkFOR0UsXHJcbiAgICAgIHZhbHVlSW5wdXRPcHRpb246ICdSQVcnLFxyXG4gICAgICBpbnNlcnREYXRhT3B0aW9uOiAnSU5TRVJUX1JPV1MnLFxyXG4gICAgICByZXF1ZXN0Qm9keTogeyB2YWx1ZXM6IHJlY29yZCB9LFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIOS4iuabuOOBjVxyXG4gICAgYXdhaXQgc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMudXBkYXRlKHtcclxuICAgICAgc3ByZWFkc2hlZXRJZDogU1BSRUFEU0hFRVRfSUQsXHJcbiAgICAgIHJhbmdlOiBgJHtTSEVFVF9OQU1FfSFBJHt0YXJnZXRSb3d9OkUke3RhcmdldFJvd31gLFxyXG4gICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnUkFXJyxcclxuICAgICAgcmVxdWVzdEJvZHk6IHsgdmFsdWVzOiByZWNvcmQgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IGVuc3VyZUhlYWRlclJvdywgdXBzZXJ0VXNlclByb2ZpbGUgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/../src/sheets.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fusers&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cusers.ts&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fusers&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cusers.ts&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_users_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\users.ts */ \"(api)/./pages/api/users.ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_users_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_users_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/users\",\n        pathname: \"/api/users\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_users_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnVzZXJzJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUN1c2Vycy50cyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUNtRDtBQUNuRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsZ0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLGdEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmUtdXNlci10by1zaGVldHMvPzIxMmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFwaVxcXFx1c2Vycy50c1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXJzXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnNcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fusers&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cusers.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/users.ts":
/*!****************************!*\
  !*** ./pages/api/users.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _src_sheets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/sheets */ \"(api)/../src/sheets.js\");\n/* harmony import */ var _src_sheets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_sheets__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/users.ts\n\nasync function handler(req, res) {\n    try {\n        const users = await (0,_src_sheets__WEBPACK_IMPORTED_MODULE_0__.getUsers)();\n        res.status(200).json({\n            success: true,\n            users\n        });\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            success: false,\n            error: \"Failed to fetch spreadsheet\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCO0FBRTBCO0FBRWhDLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQzdFLElBQUk7UUFDRixNQUFNQyxRQUFRLE1BQU1KLHFEQUFRQTtRQUM1QkcsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU1IO1FBQU07SUFDOUMsRUFBRSxPQUFPSSxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDZEwsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU9HLE9BQU87UUFBOEI7SUFDOUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmUtdXNlci10by1zaGVldHMvLi9wYWdlcy9hcGkvdXNlcnMudHM/ODg3MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvdXNlcnMudHNcclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgZ2V0VXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3NoZWV0c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IGdldFVzZXJzKCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHVzZXJzIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHNwcmVhZHNoZWV0XCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRVc2VycyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VycyIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/googleapis","vendor-chunks/google-auth-library","vendor-chunks/uuid","vendor-chunks/googleapis-common","vendor-chunks/math-intrinsics","vendor-chunks/https-proxy-agent","vendor-chunks/es-errors","vendor-chunks/agent-base","vendor-chunks/whatwg-url","vendor-chunks/qs","vendor-chunks/jws","vendor-chunks/call-bind-apply-helpers","vendor-chunks/gaxios","vendor-chunks/json-bigint","vendor-chunks/get-proto","vendor-chunks/tr46","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/gcp-metadata","vendor-chunks/function-bind","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/dotenv","vendor-chunks/webidl-conversions","vendor-chunks/url-template","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/safe-buffer","vendor-chunks/node-fetch","vendor-chunks/jwa","vendor-chunks/is-stream","vendor-chunks/hasown","vendor-chunks/gtoken","vendor-chunks/get-intrinsic","vendor-chunks/extend","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/call-bound","vendor-chunks/buffer-equal-constant-time","vendor-chunks/bignumber.js","vendor-chunks/base64-js"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fusers&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cusers.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();