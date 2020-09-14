"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLocale = exports.useLocale = exports.LocaleProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactLocalization = require("react-localization");

var _reactLocalization2 = _interopRequireDefault(_reactLocalization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocaleContext = (0, _react.createContext)({
  i18n: null,
  languageCode: "en",
  changeLanguage: function changeLanguage() {}
});

var LocaleProvider = exports.LocaleProvider = function LocaleProvider(_ref) {
  var resources = _ref.resources,
      children = _ref.children;

  var _useState = (0, _react.useState)("en"),
      _useState2 = _slicedToArray(_useState, 2),
      languageCode = _useState2[0],
      setLanguageCode = _useState2[1];

  var i18n = (0, _react.useMemo)(function () {
    return new _reactLocalization2.default(resources);
  }, [resources]);

  var changeLanguage = (0, _react.useCallback)(function (newLanguageCode) {
    setLanguageCode(newLanguageCode);
    i18n.setLanguage(newLanguageCode);
  }, [i18n]);

  return _react2.default.createElement(
    LocaleContext.Provider,
    {
      value: {
        i18n: i18n,
        languageCode: languageCode,
        changeLanguage: changeLanguage
      }
    },
    children
  );
};

var useLocale = exports.useLocale = function useLocale() {
  return (0, _react.useContext)(LocaleContext);
};

var getComponentName = function getComponentName(Component) {
  return (process.env.NODE_ENV !== "production" ? typeof Component === "string" && Component : false) || Component.displayName || Component.name || "Component";
};

var withLocale = exports.withLocale = function withLocale(WrappedComponent) {
  var WithLocaleComponent = _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(
      LocaleContext.Consumer,
      null,
      function (localeContext) {
        return _react2.default.createElement(WrappedComponent, _extends({}, localeContext, props, { ref: ref }));
      }
    );
  });

  WithLocaleComponent.displayName = "LocaleContext." + getComponentName(WrappedComponent);

  return WithLocaleComponent;
};