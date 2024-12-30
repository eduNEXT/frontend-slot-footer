"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _frontendPluginFramework = require("@openedx/frontend-plugin-framework");
var _frontendComponentFooter = _interopRequireDefault(require("@edx/frontend-component-footer"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FooterSlot = () => /*#__PURE__*/(0, _jsxRuntime.jsx)(_frontendPluginFramework.PluginSlot, {
  id: "footer_slot",
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_frontendComponentFooter.default, {})
});
var _default = exports.default = FooterSlot;
//# sourceMappingURL=FooterSlot.js.map