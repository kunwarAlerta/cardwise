"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProgressContext = _react["default"].createContext({
  ProgressStep: 1
});

var _default = ProgressContext;
exports["default"] = _default;