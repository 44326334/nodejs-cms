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


// import constructors from './constructors';
// const URL = 'http://localhost:3000/admin/api'
var domain = 'http://localhost';
var port = '3000';
var route = 'admin/api';

var queryDocs = __webpack_require__(/*! ./constructors */ "./api/constructors.js");

var GRAPHQL_URL = 'http://localhost:3000/admin/api';

var createCall = function createCall(queryDoc, accessToken) {
  var payload, response, body;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createCall$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
            query: queryDoc
          });
          console.log(payload);
          _context.prev = 2;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: {
              // Authorization: `token ${accessToken}`,
              'Content-Type': 'application/json'
            },
            body: payload
          }));

        case 5:
          response = _context.sent;
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](2);
          return _context.abrupt("return", {
            message: _context.t0.message,
            ok: false,
            body: {}
          });

        case 11:
          _context.prev = 11;
          _context.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 14:
          body = _context.sent;
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t1 = _context["catch"](11);
          return _context.abrupt("return", {
            message: _context.t1.message,
            ok: response.ok,
            body: {}
          });

        case 20:
          if (response.ok) {
            _context.next = 22;
            break;
          }

          return _context.abrupt("return", {
            status: response.status,
            ok: response.ok,
            body: {}
          });

        case 22:
          return _context.abrupt("return", body.data ? {
            status: response.status,
            ok: response.ok,
            body: body.data
          } : {
            status: response.status,
            ok: false,
            body: {}
          });

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 8], [11, 17]]);
};

var queryid = function queryid(_ref, accessToken) {
  var query = _ref.query;
  return createCall(queryDocs.queryAllUsers({
    query: query
  }, accessToken));
};

/***/ })

})
//# sourceMappingURL=index.js.3c8372ff9be98e5ec81c.hot-update.js.map