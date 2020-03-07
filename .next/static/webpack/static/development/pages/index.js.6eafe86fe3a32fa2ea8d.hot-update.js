webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: queryid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryid", function() { return queryid; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);



var queryDocs = __webpack_require__(/*! ./constructors */ "./api/constructors.js");

var GRAPHQL_URL = 'http://localhost:3000/admin/api';

var queryCall = function queryCall(queryDoc, accessToken) {
  var payload, response, body;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function queryCall$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
            query: queryDoc
          });
          _context.prev = 1;
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: {
              // Authorization: `token ${accessToken}`,
              'Content-Type': 'application/json'
            },
            body: payload
          }));

        case 4:
          response = _context.sent;
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", {
            status: response.status,
            message: _context.t0.message,
            ok: false,
            body: {}
          });

        case 10:
          _context.prev = 10;
          _context.next = 13;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 13:
          body = _context.sent;
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t1 = _context["catch"](10);
          return _context.abrupt("return", {
            status: response.status,
            message: _context.t1.message,
            ok: response.ok,
            body: {}
          });

        case 19:
          if (response.ok) {
            _context.next = 21;
            break;
          }

          return _context.abrupt("return", {
            status: response.status,
            message: 0,
            ok: response.ok,
            body: {}
          });

        case 21:
          return _context.abrupt("return", body.data ? {
            status: response.status,
            message: 0,
            ok: response.ok,
            body: body.data
          } : {
            status: response.status,
            message: 0,
            ok: false,
            body: {}
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 7], [10, 16]]);
};

var queryid = function queryid(_ref, accessToken) {
  var id = _ref.id;
  return queryCall(queryDocs.queryAllUsers({
    id: id
  }, accessToken));
};

/***/ })

})
//# sourceMappingURL=index.js.6eafe86fe3a32fa2ea8d.hot-update.js.map