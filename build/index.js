"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import packages
// App
var app = (0, _express.default)();
app.use(_express.default.json());
app.use(_routes.default); // Starting server

var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log("listening at port ".concat(port, "...."));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map