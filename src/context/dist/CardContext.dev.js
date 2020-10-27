"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardContext = _react["default"].createContext({
  currentCard: null,
  points: null
});

var _default = CardContext;
exports["default"] = _default;