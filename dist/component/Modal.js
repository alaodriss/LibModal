"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../style/App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalBackground"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContainer"
  }, children));
}
var _default = Modal;
exports.default = _default;