import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-D35ckuRb.mjs';
import { inject, ref, h, getCurrentInstance, nextTick, reactive, defineComponent, createVNode, useSSRContext, onUpdated, onUnmounted, watch, computed, shallowRef, provide, Transition, watchEffect, Fragment, mergeProps, withCtx, unref, isVNode, Comment, Text, triggerRef, cloneVNode, withDirectives, createTextVNode, render, defineAsyncComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import _objectSpread$8 from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { generate as generate$1, blue } from '@ant-design/colors';
import { createTypes } from 'vue-types';
import ResizeObserver$1 from 'resize-observer-polyfill';
import { TinyColor } from '@ctrl/tinycolor';
import { serialize, compile, stringify } from 'stylis';
import { isEmpty } from 'lodash-es';
import isPlainObject from 'lodash-es/isPlainObject.js';

// This icon file is generated automatically.
var CloseCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
const CloseCircleFilledSvg = CloseCircleFilled$2;

var contextKey = Symbol('iconContext');
var useInjectIconContext = function useInjectIconContext() {
  return inject(contextKey, {
    prefixCls: ref('anticon'),
    rootClassName: ref(''),
    csp: ref()
  });
};

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function warning$2(valid, message) {
}


function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return h(node.tag, _objectSpread$7({
      key: key
    }, node.attrs), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return h(node.tag, _objectSpread$7({
    key: key
  }, rootProps, node.attrs), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";

var useInsertStyles = function useInsertStyles() {
  var _useInjectIconContext = useInjectIconContext(),
      prefixCls = _useInjectIconContext.prefixCls;
      _useInjectIconContext.csp;

  getCurrentInstance();
  var mergedStyleStr = iconStyles;

  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls.value);
  }

  nextTick(function () {
    {
      return;
    }
  });
};

var _excluded$1 = ["icon", "primaryColor", "secondaryColor"];

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var twoToneColorPalette = reactive({
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
});

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread$6({}, twoToneColorPalette);
}

var IconBase = function IconBase(props, context) {
  var _props$context$attrs = _objectSpread$6({}, props, context.attrs),
      icon = _props$context$attrs.icon,
      primaryColor = _props$context$attrs.primaryColor,
      secondaryColor = _props$context$attrs.secondaryColor,
      restProps = _objectWithoutProperties$1(_props$context$attrs, _excluded$1);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  warning$2(isIconDefinition(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread$6({}, target, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate(target.icon, "svg-".concat(target.name), _objectSpread$6({}, restProps, {
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  })); // },
};

IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = false;
IconBase.displayName = 'IconBase';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
const VueIcon = IconBase;

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return VueIcon.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = VueIcon.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

var InsertStyles = defineComponent({
  name: 'InsertStyles',
  setup: function setup() {
    useInsertStyles();
    return function () {
      return null;
    };
  }
});

var _excluded = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

setTwoToneColor(blue.primary);

var Icon = function Icon(props, context) {
  var _classObj;

  var _props$context$attrs = _objectSpread$5({}, props, context.attrs),
      cls = _props$context$attrs["class"],
      icon = _props$context$attrs.icon,
      spin = _props$context$attrs.spin,
      rotate = _props$context$attrs.rotate,
      tabindex = _props$context$attrs.tabindex,
      twoToneColor = _props$context$attrs.twoToneColor,
      onClick = _props$context$attrs.onClick,
      restProps = _objectWithoutProperties(_props$context$attrs, _excluded);

  var _useInjectIconContext = useInjectIconContext(),
      prefixCls = _useInjectIconContext.prefixCls,
      rootClassName = _useInjectIconContext.rootClassName;

  var classObj = (_classObj = {}, _defineProperty$5(_classObj, rootClassName.value, !!rootClassName.value), _defineProperty$5(_classObj, prefixCls.value, true), _defineProperty$5(_classObj, "".concat(prefixCls.value, "-").concat(icon.name), Boolean(icon.name)), _defineProperty$5(_classObj, "".concat(prefixCls.value, "-spin"), !!spin || icon.name === 'loading'), _classObj);
  var iconTabIndex = tabindex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return createVNode("span", _objectSpread$5({
    "role": "img",
    "aria-label": icon.name
  }, restProps, {
    "onClick": onClick,
    "class": [classObj, cls],
    "tabindex": iconTabIndex
  }), [createVNode(VueIcon, {
    "icon": icon,
    "primaryColor": primaryColor,
    "secondaryColor": secondaryColor,
    "style": svgStyle
  }, null), createVNode(InsertStyles, null, null)]);
};

Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Icon.displayName = 'AntdIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
const AntdIcon = Icon;

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseCircleFilled = function CloseCircleFilled(props, context) {
  var p = _objectSpread$4({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$4({}, p, {
    "icon": CloseCircleFilledSvg
  }), null);
};

CloseCircleFilled.displayName = 'CloseCircleFilled';
CloseCircleFilled.inheritAttrs = false;
const CloseCircleFilled$1 = CloseCircleFilled;

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// This icon file is generated automatically.
var SearchOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
const SearchOutlinedSvg = SearchOutlined$2;

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchOutlined = function SearchOutlined(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$3({}, p, {
    "icon": SearchOutlinedSvg
  }), null);
};

SearchOutlined.displayName = 'SearchOutlined';
SearchOutlined.inheritAttrs = false;
const SearchOutlined$1 = SearchOutlined;

// This icon file is generated automatically.
var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
const LoadingOutlinedSvg = LoadingOutlined$2;

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoadingOutlined = function LoadingOutlined(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": LoadingOutlinedSvg
  }), null);
};

LoadingOutlined.displayName = 'LoadingOutlined';
LoadingOutlined.inheritAttrs = false;
const LoadingOutlined$1 = LoadingOutlined;

// This icon file is generated automatically.
var EyeOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
const EyeOutlinedSvg = EyeOutlined$2;

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EyeOutlined = function EyeOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": EyeOutlinedSvg
  }), null);
};

EyeOutlined.displayName = 'EyeOutlined';
EyeOutlined.inheritAttrs = false;
const EyeOutlined$1 = EyeOutlined;

// This icon file is generated automatically.
var EyeInvisibleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };
const EyeInvisibleOutlinedSvg = EyeInvisibleOutlined$2;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EyeInvisibleOutlined = function EyeInvisibleOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": EyeInvisibleOutlinedSvg
  }), null);
};

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';
EyeInvisibleOutlined.inheritAttrs = false;
const EyeInvisibleOutlined$1 = EyeInvisibleOutlined;

const _sfc_main$5 = {
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    width: {
      type: String,
      default: "1px"
    },
    color: {
      type: String,
      default: "card"
    }
  },
  computed: {
    dividerClass() {
      return this.direction === "horizontal" ? "w-full" : "h-full";
    },
    dividerStyle() {
      return {
        backgroundColor: this.color.includes("-") ? `var(--tw-color-${this.color.replace("-", "-")})` : this.color,
        width: this.direction === "horizontal" ? "100%" : this.width,
        height: this.direction === "horizontal" ? this.width : "100%"
      };
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $options.dividerClass,
    style: $options.dividerStyle
  }, _attrs))}></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Divider/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Divider = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM7 5H6V7H7V5Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/BulletPoint.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0$1 = "" + buildAssetsURL("Logo.CTr6msrk.svg");
const _imports_1$1 = "" + buildAssetsURL("MobileLogo.BzTKrmSN.svg");
const _imports_2 = "data:image/svg+xml,%3csvg%20width='43'%20height='26'%20viewBox='0%200%2043%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20y1='1'%20x2='42'%20y2='1'%20stroke='white'%20stroke-width='2'/%3e%3cline%20y1='13'%20x2='42'%20y2='13'%20stroke='white'%20stroke-width='2'/%3e%3cline%20y1='25'%20x2='42'%20y2='25'%20stroke='white'%20stroke-width='2'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='35'%20height='12'%20viewBox='0%200%2035%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.226497%206L6%2011.7735L11.7735%206L6%200.226497L0.226497%206ZM35%205H6V7H35V5Z'%20fill='%23A70314'/%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3csvg%20width='18'%20height='19'%20viewBox='0%200%2018%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.9678%2013.4791V15.8877C16.9687%2016.1113%2016.9229%2016.3327%2016.8333%2016.5375C16.7438%2016.7424%2016.6124%2016.9263%2016.4476%2017.0775C16.2828%2017.2286%2016.0883%2017.3437%2015.8765%2017.4154C15.6647%2017.487%2015.4402%2017.5136%2015.2175%2017.4935C12.7469%2017.225%2010.3737%2016.3808%208.28865%2015.0286C6.34875%2013.7959%204.70406%2012.1512%203.47136%2010.2113C2.11448%208.11679%201.27006%205.73206%201.00652%203.25036C0.986453%203.02834%201.01284%202.80457%201.084%202.5933C1.15515%202.38203%201.26952%202.1879%201.41981%202.02325C1.57011%201.85861%201.75304%201.72706%201.95696%201.63699C2.16088%201.54691%202.38132%201.50029%202.60425%201.50008H5.0129C5.40254%201.49624%205.78028%201.63422%206.07572%201.8883C6.37116%202.14237%206.56413%202.49521%206.61866%202.88103C6.72032%203.65185%206.90886%204.4087%207.18068%205.13713C7.2887%205.4245%207.31208%205.73682%207.24804%206.03707C7.18401%206.33732%207.03525%206.61292%206.81938%206.83121L5.79972%207.85087C6.94267%209.86092%208.60696%2011.5252%2010.617%2012.6682L11.6367%2011.6485C11.855%2011.4326%2012.1306%2011.2839%2012.4308%2011.2198C12.7311%2011.1558%2013.0434%2011.1792%2013.3308%2011.2872C14.0592%2011.559%2014.816%2011.7476%2015.5869%2011.8492C15.9769%2011.9042%2016.333%2012.1007%2016.5877%2012.4012C16.8423%2012.7017%2016.9776%2013.0853%2016.9678%2013.4791Z'%20stroke='%23A70314'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _imports_5 = "data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.3019%2017.8333C13.9042%2017.8333%2017.635%2014.1024%2017.635%209.50014C17.635%204.89787%2013.9042%201.16699%209.3019%201.16699C4.69963%201.16699%200.96875%204.89787%200.96875%209.50014C0.96875%2014.1024%204.69963%2017.8333%209.3019%2017.8333Z'%20stroke='%23A70314'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.30078%204.5V9.49989L12.634%2011.1665'%20stroke='%23A70314'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _imports_6 = "data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.3021%203.1665H1.96875V13.8332H15.3021V3.1665ZM13.9687%205.83317L8.63542%209.1665L3.30208%205.83317V4.49984L8.63542%207.83317L13.9687%204.49984V5.83317Z'%20fill='%23A70314'/%3e%3c/svg%3e";
const _sfc_main$3 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_UIDivider = Divider;
      const _component_UIIconBulletPoint = __nuxt_component_2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-full sticky top-0 z-30 flex flex-col lg:flex-row shadow-md bg-brand lg:bg-white text-light" }, _attrs))}><div class="flex justify-between items-center w-full lg:p-0 p-2 lg:w-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Logo" height="101.76px" width="95px" class="hidden lg:flex"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="Logo" height="38px" width="123px" class="flex lg:hidden"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Logo",
                height: "101.76px",
                width: "95px",
                class: "hidden lg:flex"
              }),
              createVNode("img", {
                src: _imports_1$1,
                alt: "Logo",
                height: "38px",
                width: "123px",
                class: "flex lg:hidden"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(route).name !== "attorneys") {
        _push(`<button class="lg:hidden p-2">`);
        if (!isMenuOpen.value) {
          _push(`<img${ssrRenderAttr("src", _imports_2)} alt="Open Menu" class="h-8 w-8">`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_2)} alt="Close Menu" class="h-8 w-8">`);
        }
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "flex space-x-4 items-center my-2 lg:my-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_3)} height="29px" width="29px"${_scopeId}><p class="text-[16px] text-white lg:text-[#222222] font-medium"${_scopeId}>HOME</p>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_3,
                  height: "29px",
                  width: "29px"
                }),
                createVNode("p", { class: "text-[16px] text-white lg:text-[#222222] font-medium" }, "HOME")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div><div class="bg-card">`);
      _push(ssrRenderComponent(_component_UIDivider, {
        direction: "vertical",
        width: "2px"
      }, null, _parent));
      _push(`</div><div class="w-full lg:py-3"><div class="hidden lg:flex justify-between px-2"><div class="flex gap-3.5 px-4"><a href="tel: +234 803 292 8072" class="flex space-x-1"><img${ssrRenderAttr("src", _imports_4)} alt="Call-Icon" height="16px" width="16px"><p>+234 803 292 8072</p></a><div class="flex space-x-1"><img${ssrRenderAttr("src", _imports_5)} alt="Time-Icon" height="16px" width="16px"><p>MONDAY - FRIDAY - 7:30AM - 6:30PM</p></div><a href="mailto:contact@hodlegal.org " class="flex space-x-1"><img${ssrRenderAttr("src", _imports_6)} alt="Email-Icon" height="16px" width="16px"><p>contact@hodlegal.org</p></a></div><div>BARRISTERS | SOLICITORS | CORPATE CONSULTANTS</div></div><div class="my-3 bg-card lg:flex hidden">`);
      _push(ssrRenderComponent(_component_UIDivider, {
        direction: "horizontal",
        width: "2px"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass(`flex-col lg:flex-row items-center w-full lg:w-auto lg:flex ${isMenuOpen.value ? "flex sticky z-20" : "hidden"}`)}"><div class="flex flex-col lg:flex-row justify-between items-left w-full lg:px-2 text-white lg:text-[#3A3A38]"><div class="flex flex-col lg:flex-row lg:gap-4 px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex space-x-4 items-center my-2 lg:my-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3)} height="29px" width="29px"${_scopeId}><p class="text-[16px] text-white lg:text-[#222222] font-medium"${_scopeId}>HOME</p>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3,
                height: "29px",
                width: "29px"
              }),
              createVNode("p", { class: "text-[16px] text-white lg:text-[#222222] font-medium" }, "HOME")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#about" class="flex space-x-4 items-center my-2 lg:my-0">`);
      _push(ssrRenderComponent(_component_UIIconBulletPoint, { class: "text-white lg:text-[#001025]" }, null, _parent));
      _push(`<p class="text-[16px] text-white lg:text-[#222222] font-medium">ABOUT</p></a><a href="#services" class="flex space-x-4 items-center my-2 lg:my-0">`);
      _push(ssrRenderComponent(_component_UIIconBulletPoint, { class: "text-white lg:text-[#001025]" }, null, _parent));
      _push(`<p class="text-[16px] text-white lg:text-[#222222] font-medium">SERVICES</p></a><a href="#ideology" class="flex space-x-4 items-center my-2 lg:my-0">`);
      _push(ssrRenderComponent(_component_UIIconBulletPoint, { class: "text-white lg:text-[#001025]" }, null, _parent));
      _push(`<p class="text-[16px] text-white lg:text-[#222222] font-medium"> OUR IDEOLOGYS </p></a><a href="#firm" class="flex space-x-4 items-center my-2 lg:my-0">`);
      _push(ssrRenderComponent(_component_UIIconBulletPoint, { class: "text-white lg:text-[#001025]" }, null, _parent));
      _push(`<p class="text-[16px] text-white lg:text-[#222222] font-medium">OUR FIRM</p></a><a href="#attorneyFormSection" class="flex space-x-4 items-center my-2 lg:my-0">`);
      _push(ssrRenderComponent(_component_UIIconBulletPoint, { class: "text-white lg:text-[#001025]" }, null, _parent));
      _push(`<p class="text-[16px] text-white lg:text-[#222222] font-medium">CONTACT</p></a></div><a href="#attorneyFormSection" class="text-light lg:flex hidden py-2 px-4 rounded-lg border border-[#E7E7E7]focus:outline-none focus:ring">FREE CONSULTATION</a></div></div></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/NavBar/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$3;
const _imports_0 = "" + buildAssetsURL("JusticeStatus.M8Ovtrko.svg");
const _imports_1 = "" + buildAssetsURL("AboutProfile.C7UIML1i.svg");
const _sfc_main$2 = {
  props: {
    width: {
      type: String,
      default: "auto"
    },
    color: {
      type: String,
      default: "black"
    },
    backgroundColor: {
      type: String,
      default: "blue-500"
    }
  },
  computed: {
    buttonClass() {
      return `bg-${this.backgroundColor} text-${this.color}`;
    },
    buttonStyle() {
      return {
        width: this.width
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: [$options.buttonClass, "py-2 px-4 rounded-lg border border-[#E7E7E7]focus:outline-none focus:ring"],
    style: $options.buttonStyle
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Button/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const GAMALIEL_WORLY = "" + buildAssetsURL("GAMALIEL_WORLY.B5JdF4rU.png");
const SARAH_HAROLD_UKU = "" + buildAssetsURL("SARAH_HAROLD_UKU.2MjDXyZ0.png");
const UZEZI_AMAWHE = "" + buildAssetsURL("UZEZI_AMAWHE.BnSEdfTt.png");
const IKOPEMUGH_NENGIM = "" + buildAssetsURL("IKOPEMUGH_NENGIM.CG_brGc7.png");
const FRANCIS_NWABUNWANNE = "" + buildAssetsURL("FRANCIS_NWABUNWANNE._mtFBO5v.png");
const DAVID_OKOROGBA = "" + buildAssetsURL("DAVID_OKOROGBA.DAku8Ext.png");
const _sfc_main$1 = {
  __name: "AuthInput",
  __ssrInlineRender: true,
  props: {
    modelValue: String | Number,
    type: String,
    placeholder: String,
    error: Boolean,
    errorsMsg: String,
    label: String,
    labelClasses: String,
    disabled: Boolean,
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    defineAsyncComponent(() => import('./Label-X9crbH09.mjs'));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [__props.error ? "border-b-[#DA5252]" : " border-b-[#3A4553]", "w-full font-medium flex flex-col text-[#D7D7D7] outline-none overflow-hidden bg-transparent border-b-[1px] opacity-[0.8029] text-[18px]"]
      }, _attrs))}><input class="${ssrRenderClass([__props.error ? "border-b-[#DA5252]" : " border-b-[#3A4553]", "w-full text-[20px] bg-transparent font-medium placeholder:text-[#D7D7D7] text-[#D7D7D7] !pl-2 outline-none !p-3"])}"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Input/AuthInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
function classNames() {
  const classes = [];
  for (let i = 0; i < arguments.length; i++) {
    const value = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (!value)
      continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray(value)) {
      for (let i2 = 0; i2 < value.length; i2++) {
        const inner = classNames(value[i2]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(" ");
}
const isValid$2 = (value) => {
  return value !== void 0 && value !== null && value !== "";
};
const initDefaultProps = (types, defaultProps) => {
  const propTypes = _extends({}, types);
  Object.keys(defaultProps).forEach((k) => {
    const prop = propTypes[k];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps[k];
      } else if (prop.def) {
        prop.def(defaultProps[k]);
      } else {
        propTypes[k] = {
          type: prop,
          default: defaultProps[k]
        };
      }
    } else {
      throw new Error(`not have ${k} prop`);
    }
  });
  return propTypes;
};
const skipFlattenKey = Symbol("skipFlatten");
const flattenChildren = function() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  let filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const temp = Array.isArray(children) ? children : [children];
  const res = [];
  temp.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty2));
    } else if (child && child.type === Fragment) {
      if (child.key === skipFlattenKey) {
        res.push(child);
      } else {
        res.push(...flattenChildren(child.children, filterEmpty2));
      }
    } else if (child && isVNode(child)) {
      if (filterEmpty2 && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty2) {
        res.push(child);
      }
    } else if (isValid$2(child)) {
      res.push(child);
    }
  });
  return res;
};
const findDOMNode = (instance) => {
  var _a;
  let node = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node;
};
function isEmptyElement(c) {
  return c && (c.type === Comment || c.type === Fragment && c.children.length === 0 || c.type === Text && c.children.trim() === "");
}
function filterEmpty() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const res = [];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if ((child === null || child === void 0 ? void 0 : child.type) === Fragment) {
      res.push(...filterEmpty(child.children));
    } else {
      res.push(child);
    }
  });
  return res.filter((c) => !isEmptyElement(c));
}
function isValidElement(element) {
  if (Array.isArray(element) && element.length === 1) {
    element = element[0];
  }
  return element && element.__v_isVNode && typeof element.type !== "symbol";
}
const ResizeObserver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const state = reactive({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    let currentElement = null;
    let resizeObserver = null;
    const destroyObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    const onResize = (entries) => {
      const {
        onResize: onResize2
      } = props;
      const target = entries[0].target;
      const {
        width,
        height
      } = target.getBoundingClientRect();
      const {
        offsetWidth,
        offsetHeight
      } = target;
      const fixedWidth = Math.floor(width);
      const fixedHeight = Math.floor(height);
      if (state.width !== fixedWidth || state.height !== fixedHeight || state.offsetWidth !== offsetWidth || state.offsetHeight !== offsetHeight) {
        const size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        _extends(state, size);
        if (onResize2) {
          Promise.resolve().then(() => {
            onResize2(_extends(_extends({}, size), {
              offsetWidth,
              offsetHeight
            }), target);
          });
        }
      }
    };
    const instance = getCurrentInstance();
    const registerObserver = () => {
      const {
        disabled
      } = props;
      if (disabled) {
        destroyObserver();
        return;
      }
      const element = findDOMNode(instance);
      const elementChanged = element !== currentElement;
      if (elementChanged) {
        destroyObserver();
        currentElement = element;
      }
      if (!resizeObserver && element) {
        resizeObserver = new ResizeObserver$1(onResize);
        resizeObserver.observe(element);
      }
    };
    onUpdated(() => {
      registerObserver();
    });
    onUnmounted(() => {
      destroyObserver();
    });
    watch(() => props.disabled, () => {
      registerObserver();
    }, {
      flush: "post"
    });
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
    };
  }
});
let raf = (callback) => setTimeout(callback, 16);
let caf = (num) => clearTimeout(num);
let rafUUID = 0;
const rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
function wrapperRaf(callback) {
  let times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  const id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      const realId = raf(() => {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
}
wrapperRaf.cancel = (id) => {
  const realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
const tuple = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
const withInstall = (comp) => {
  const c = comp;
  c.install = function(app) {
    app.component(c.displayName || c.name, comp);
  };
  return comp;
};
function eventType() {
  return {
    type: [Function, Array]
  };
}
function objectType(defaultVal) {
  return {
    type: Object,
    default: defaultVal
  };
}
function booleanType(defaultVal) {
  return {
    type: Boolean,
    default: defaultVal
  };
}
function anyType(defaultVal, required) {
  const type = {
    validator: () => true,
    default: defaultVal
  };
  return required ? type : type;
}
function arrayType(defaultVal) {
  return {
    type: Array,
    default: defaultVal
  };
}
function stringType(defaultVal) {
  return {
    type: String,
    default: defaultVal
  };
}
function someType(types, defaultVal) {
  return types ? {
    type: types,
    default: defaultVal
  } : anyType(defaultVal);
}
const defaultIconPrefixCls = "anticon";
const configProviderKey = Symbol("configProvider");
const defaultConfigProvider = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : "ant";
  },
  iconPrefixCls: computed(() => defaultIconPrefixCls),
  getPopupContainer: computed(() => () => (void 0).body),
  direction: computed(() => "ltr")
};
const useConfigContextInject = () => {
  return inject(configProviderKey, defaultConfigProvider);
};
const DisabledContextKey = Symbol("DisabledContextKey");
const useInjectDisabled = () => {
  return inject(DisabledContextKey, ref(void 0));
};
const enUS$1 = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
const locale$2 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const CalendarLocale = locale$2;
const locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const TimePicker = locale$1;
const locale = {
  lang: _extends({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePicker)
};
const enUS = locale;
const typeTemplate = "${label} is not a valid ${type}";
const localeValues = {
  locale: "en",
  Pagination: enUS$1,
  DatePicker: enUS,
  TimePicker,
  Calendar: enUS,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
};
const LocaleReceiver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const localeData = inject("localeData", {});
    const locale2 = computed(() => {
      const {
        componentName = "global",
        defaultLocale
      } = props;
      const locale3 = defaultLocale || localeValues[componentName || "global"];
      const {
        antLocale
      } = localeData;
      const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale3 === "function" ? locale3() : locale3), localeFromContext || {});
    });
    const localeCode = computed(() => {
      const {
        antLocale
      } = localeData;
      const localeCode2 = antLocale && antLocale.locale;
      if (antLocale && antLocale.exist && !localeCode2) {
        return localeValues.locale;
      }
      return localeCode2;
    });
    return () => {
      const children = props.children || slots.default;
      const {
        antLocale
      } = localeData;
      return children === null || children === void 0 ? void 0 : children(locale2.value, localeCode.value, antLocale);
    };
  }
});
const SPLIT = "%";
class Entity {
  constructor(instanceId) {
    this.cache = /* @__PURE__ */ new Map();
    this.instanceId = instanceId;
  }
  get(keys) {
    return this.cache.get(Array.isArray(keys) ? keys.join(SPLIT) : keys) || null;
  }
  update(keys, valueFn) {
    const path = Array.isArray(keys) ? keys.join(SPLIT) : keys;
    const prevValue = this.cache.get(path);
    const nextValue = valueFn(prevValue);
    if (nextValue === null) {
      this.cache.delete(path);
    } else {
      this.cache.set(path, nextValue);
    }
  }
}
const CacheEntity = Entity;
const ATTR_MARK = "data-css-hash";
function createCache() {
  const cssinjsInstanceId = Math.random().toString(12).slice(2);
  return new CacheEntity(cssinjsInstanceId);
}
const StyleContextKey = Symbol("StyleContextKey");
const getCache = () => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  let cache;
  if (instance && instance.appContext) {
    const globalCache = (_c = (_b = (_a = instance.appContext) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.globalProperties) === null || _c === void 0 ? void 0 : _c.__ANTDV_CSSINJS_CACHE__;
    if (globalCache) {
      cache = globalCache;
    } else {
      cache = createCache();
      if (instance.appContext.config.globalProperties) {
        instance.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = cache;
      }
    }
  } else {
    cache = createCache();
  }
  return cache;
};
const defaultStyleContext = {
  cache: createCache(),
  defaultCache: true,
  hashPriority: "low"
};
const useStyleInject = () => {
  const cache = getCache();
  return inject(StyleContextKey, shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache
  })));
};
const useStyleProvider = (props) => {
  const parentContext = useStyleInject();
  const context = shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache: createCache()
  }));
  watch([() => unref(props), parentContext], () => {
    const mergedContext = _extends({}, parentContext.value);
    const propsValue = unref(props);
    Object.keys(propsValue).forEach((key) => {
      const value = propsValue[key];
      if (propsValue[key] !== void 0) {
        mergedContext[key] = value;
      }
    });
    const {
      cache
    } = propsValue;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache && parentContext.value.defaultCache;
    context.value = mergedContext;
  }, {
    immediate: true
  });
  provide(StyleContextKey, context);
  return context;
};
const styleProviderProps = () => ({
  autoClear: booleanType(),
  /** @private Test only. Not work in production. */
  mock: stringType(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: objectType(),
  /** Tell children that this context is default generated context */
  defaultCache: booleanType(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: stringType(),
  /** Tell cssinjs where to inject style in */
  container: someType(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: booleanType(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: arrayType(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: arrayType()
});
withInstall(defineComponent({
  name: "AStyleProvider",
  inheritAttrs: false,
  props: styleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useStyleProvider(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
}));
function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
  const styleContext = useStyleInject();
  const fullPathStr = shallowRef("");
  const res = shallowRef();
  watchEffect(() => {
    fullPathStr.value = [prefix, ...keyPath.value].join("%");
  });
  const clearCache = (pathStr) => {
    styleContext.value.cache.update(pathStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      const nextCount = times - 1;
      if (nextCount === 0) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
        return null;
      }
      return [times - 1, cache];
    });
  };
  watch(fullPathStr, (newStr, oldStr) => {
    if (oldStr)
      clearCache(oldStr);
    styleContext.value.cache.update(newStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      let tmpCache = cache;
      const mergedCache = tmpCache || cacheFn();
      return [times + 1, mergedCache];
    });
    res.value = styleContext.value.cache.get(fullPathStr.value)[1];
  }, {
    immediate: true
  });
  return res;
}
function canUseDom() {
  return false;
}
const MARK_KEY = `vc-util-key`;
const containerCache = /* @__PURE__ */ new Map();
function getMark() {
  let {
    mark
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = (void 0).querySelector("head");
  return head || (void 0).body;
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter((node) => node.tagName === "STYLE");
}
function findExistNode(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const container = getContainer(option);
  return findStyles(container).find((node) => node.getAttribute(getMark(option)) === key);
}
function removeCSS(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const existNode = findExistNode(key, option);
  if (existNode) {
    const container = getContainer(option);
    container.removeChild(existNode);
  }
}
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
class ThemeCache {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(derivativeOption) {
    let updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let cache = {
      map: this.cache
    };
    derivativeOption.forEach((derivative2) => {
      var _a;
      if (!cache) {
        cache = void 0;
      } else {
        cache = (_a = cache === null || cache === void 0 ? void 0 : cache.map) === null || _a === void 0 ? void 0 : _a.get(derivative2);
      }
    });
    if ((cache === null || cache === void 0 ? void 0 : cache.value) && updateCallTimes) {
      cache.value[1] = this.cacheCallTimes++;
    }
    return cache === null || cache === void 0 ? void 0 : cache.value;
  }
  get(derivativeOption) {
    var _a;
    return (_a = this.internalGet(derivativeOption, true)) === null || _a === void 0 ? void 0 : _a[0];
  }
  has(derivativeOption) {
    return !!this.internalGet(derivativeOption);
  }
  set(derivativeOption, value) {
    if (!this.has(derivativeOption)) {
      if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
        const [targetKey] = this.keys.reduce((result, key) => {
          const [, callTimes] = result;
          if (this.internalGet(key)[1] < callTimes) {
            return [key, this.internalGet(key)[1]];
          }
          return result;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(targetKey);
      }
      this.keys.push(derivativeOption);
    }
    let cache = this.cache;
    derivativeOption.forEach((derivative2, index) => {
      if (index === derivativeOption.length - 1) {
        cache.set(derivative2, {
          value: [value, this.cacheCallTimes++]
        });
      } else {
        const cacheValue = cache.get(derivative2);
        if (!cacheValue) {
          cache.set(derivative2, {
            map: /* @__PURE__ */ new Map()
          });
        } else if (!cacheValue.map) {
          cacheValue.map = /* @__PURE__ */ new Map();
        }
        cache = cache.get(derivative2).map;
      }
    });
  }
  deleteByPath(currentCache, derivatives) {
    var _a;
    const cache = currentCache.get(derivatives[0]);
    if (derivatives.length === 1) {
      if (!cache.map) {
        currentCache.delete(derivatives[0]);
      } else {
        currentCache.set(derivatives[0], {
          map: cache.map
        });
      }
      return (_a = cache.value) === null || _a === void 0 ? void 0 : _a[0];
    }
    const result = this.deleteByPath(cache.map, derivatives.slice(1));
    if ((!cache.map || cache.map.size === 0) && !cache.value) {
      currentCache.delete(derivatives[0]);
    }
    return result;
  }
  delete(derivativeOption) {
    if (this.has(derivativeOption)) {
      this.keys = this.keys.filter((item) => !sameDerivativeOption(item, derivativeOption));
      return this.deleteByPath(this.cache, derivativeOption);
    }
    return void 0;
  }
}
ThemeCache.MAX_CACHE_SIZE = 20;
ThemeCache.MAX_CACHE_OFFSET = 5;
let warned = {};
function warning$1(valid, message) {
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$1, valid, message);
}
function noop$1() {
}
let warning = noop$1;
let uuid = 0;
class Theme {
  constructor(derivatives) {
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning(derivatives.length > 0);
    }
    uuid += 1;
  }
  getDerivativeToken(token) {
    return this.derivatives.reduce((result, derivative2) => derivative2(token, result), void 0);
  }
}
const cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}
const flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token) {
  let str = flattenTokenCache.get(token) || "";
  if (!str) {
    Object.keys(token).forEach((key) => {
      const value = token[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    flattenTokenCache.set(token, str);
  }
  return str;
}
function token2key(token, salt) {
  return murmur2(`${salt}_${flattenToken(token)}`);
}
function supportSelector(styleStr, handleElement, supportCheck) {
  return false;
}
let canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector();
  }
  return canLayer;
}
const EMPTY_OVERRIDE = {};
const hashPrefix = "css";
const tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
const TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  const tokenKeyList = Array.from(tokenKeys.keys());
  const cleanableKeyList = tokenKeyList.filter((key) => {
    const count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach((key) => {
      tokenKeys.delete(key);
    });
  }
}
const getComputedToken = (originToken, overrideToken, theme, format) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  let mergedDerivativeToken = _extends(_extends({}, derivativeToken), overrideToken);
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
function useCacheToken(theme, tokens) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ref({});
  const style = useStyleInject();
  const mergedToken = computed(() => _extends({}, ...tokens.value));
  const tokenStr = computed(() => flattenToken(mergedToken.value));
  const overrideTokenStr = computed(() => flattenToken(option.value.override || EMPTY_OVERRIDE));
  const cachedToken = useClientCache("token", computed(() => [option.value.salt || "", theme.value.id, tokenStr.value, overrideTokenStr.value]), () => {
    const {
      salt = "",
      override = EMPTY_OVERRIDE,
      formatToken: formatToken2,
      getComputedToken: compute
    } = option.value;
    const mergedDerivativeToken = compute ? compute(mergedToken.value, override, theme.value) : getComputedToken(mergedToken.value, override, theme.value, formatToken2);
    const tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    const hashId = `${hashPrefix}-${murmur2(tokenKey)}`;
    mergedDerivativeToken._hashId = hashId;
    return [mergedDerivativeToken, hashId];
  }, (cache) => {
    var _a;
    cleanTokenStyle(cache[0]._tokenKey, (_a = style.value) === null || _a === void 0 ? void 0 : _a.cache.instanceId);
  });
  return cachedToken;
}
const CSS_FILE_STYLE = "_FILE_STYLE__";
let cachePathMap;
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  const hash2 = cachePathMap[path];
  let styleStr = null;
  if (hash2 && canUseDom()) {
    {
      styleStr = CSS_FILE_STYLE;
    }
  }
  return [styleStr, hash2];
}
const isClientSide = canUseDom();
const SKIP_CHECK = "_skip_check_";
const MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  const serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return typeof value === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  const hashClassName = `.${hashId}`;
  const hashSelector = hashPriority === "low" ? `:where(${hashClassName})` : hashClassName;
  const keys = key.split(",").map((k) => {
    var _a;
    const fullPath = k.trim().split(/\s+/);
    let firstPath = fullPath[0] || "";
    const htmlElement = ((_a = firstPath.match(/^\w+/)) === null || _a === void 0 ? void 0 : _a[0]) || "";
    firstPath = `${htmlElement}${hashSelector}${firstPath.slice(htmlElement.length)}`;
    return [firstPath, ...fullPath.slice(1)].join(" ");
  });
  return keys.join(",");
}
const parseStyle = function(interpolation) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let {
    root,
    injectHash,
    parentSelectors
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: true,
    parentSelectors: []
  };
  const {
    hashId,
    layer,
    path,
    hashPriority,
    transformers = [],
    linters = []
  } = config;
  let styleStr = "";
  let effectStyle = {};
  function parseKeyframes(keyframes) {
    const animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      const [parsedStr] = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors
      });
      effectStyle[animationName] = `@keyframes ${keyframes.getName(hashId)}${parsedStr}`;
    }
  }
  function flattenList(list) {
    let fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach((item) => {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  const flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach((originStyle) => {
    const style = typeof originStyle === "string" && !root ? {} : originStyle;
    if (typeof style === "string") {
      styleStr += `${style}
`;
    } else if (style._keyframe) {
      parseKeyframes(style);
    } else {
      const mergedStyle = transformers.reduce((prev, trans) => {
        var _a;
        return ((_a = trans === null || trans === void 0 ? void 0 : trans.visit) === null || _a === void 0 ? void 0 : _a.call(trans, prev)) || prev;
      }, style);
      Object.keys(mergedStyle).forEach((key) => {
        var _a;
        const value = mergedStyle[key];
        if (typeof value === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          let subInjectHash = false;
          let mergedKey = key.trim();
          let nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          const [parsedStr, childEffectStyle] = parseStyle(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [...parentSelectors, mergedKey]
          });
          effectStyle = _extends(_extends({}, effectStyle), childEffectStyle);
          styleStr += `${mergedKey}${parsedStr}`;
        } else {
          let appendStyle = function(cssKey, cssValue) {
            const styleName = cssKey.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
            let formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = `${formatValue}px`;
            }
            if (cssKey === "animationName" && (cssValue === null || cssValue === void 0 ? void 0 : cssValue._keyframe)) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += `${styleName}:${formatValue};`;
          };
          const actualValue = (_a = value === null || value === void 0 ? void 0 : value.value) !== null && _a !== void 0 ? _a : value;
          if (typeof value === "object" && (value === null || value === void 0 ? void 0 : value[MULTI_VALUE]) && Array.isArray(actualValue)) {
            actualValue.forEach((item) => {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = `{${styleStr}}`;
  } else if (layer && supportLayer()) {
    const layerCells = layer.split(",");
    const layerName = layerCells[layerCells.length - 1].trim();
    styleStr = `@layer ${layerName} {${styleStr}}`;
    if (layerCells.length > 1) {
      styleStr = `@layer ${layer}{%%%:%}${styleStr}`;
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return murmur2(`${path.join("%")}${styleStr}`);
}
function useStyleRegister(info, styleFn) {
  const styleContext = useStyleInject();
  const tokenKey = computed(() => info.value.token._tokenKey);
  const fullPath = computed(() => [tokenKey.value, ...info.value.path]);
  useClientCache(
    "style",
    fullPath,
    // Create cache if needed
    () => {
      const {
        path,
        hashId,
        layer,
        nonce,
        clientOnly,
        order = 0
      } = info.value;
      const cachePath = fullPath.value.join("|");
      if (existPath(cachePath)) {
        const [inlineCacheStyleStr, styleHash] = getStyleAndHash(cachePath);
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey.value, styleHash, {}, clientOnly, order];
        }
      }
      const styleObj = styleFn();
      const {
        hashPriority,
        container,
        transformers,
        linters,
        cache
      } = styleContext.value;
      const [parsedStyle, effectStyle] = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer,
        path: path.join("-"),
        transformers,
        linters
      });
      const styleStr = normalizeStyle(parsedStyle);
      const styleId = uniqueHash(fullPath.value, styleStr);
      return [styleStr, tokenKey.value, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    (_ref, fromHMR) => {
      let [, , styleId] = _ref;
      if ((fromHMR || styleContext.value.autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    }
  );
  return (node) => {
    return node;
  };
}
const version = "4.1.2";
const genControlHeight = (token) => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    sizeXL: sizeUnit * (sizeStep + 4),
    sizeLG: sizeUnit * (sizeStep + 2),
    sizeMD: sizeUnit * (sizeStep + 1),
    sizeMS: sizeUnit * sizeStep,
    size: sizeUnit * sizeStep,
    sizeSM: sizeUnit * (sizeStep - 1),
    sizeXS: sizeUnit * (sizeStep - 2),
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}
const defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
const seedToken = _extends(_extends({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false
});
const defaultSeedToken = seedToken;
function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes: generateColorPalettes2,
    generateNeutralColorPalettes: generateNeutralColorPalettes2
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  return _extends(_extends({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return _extends({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius(borderRadius));
}
const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors = generate$1(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor$1(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
    colorFill: getAlphaColor$1(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}
const genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
function derivative(token) {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate$1(token[colorKey]);
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = _extends(_extends({}, prev), cur);
    return prev;
  }, {});
  return _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, token), colorPalettes), genColorMapToken(token, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken(token.fontSize)), genSizeMapToken(token)), genControlHeight(token)), genCommonMapToken(token));
}
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new TinyColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var __rest$5 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function formatToken(derivativeToken) {
  const {
    override
  } = derivativeToken, restToken = __rest$5(derivativeToken, ["override"]);
  const overrideTokens = _extends({}, override);
  Object.keys(defaultSeedToken).forEach((token) => {
    delete overrideTokens[token];
  });
  const mergedToken = _extends(_extends({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  const screenXXXL = 2e3;
  const aliasToken = _extends(_extends(_extends({}, mergedToken), {
    colorLink: mergedToken.colorInfoText,
    colorLinkHover: mergedToken.colorInfoHover,
    colorLinkActive: mergedToken.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    screenXXLMax: screenXXXL - 1,
    screenXXXL,
    screenXXXLMin: screenXXXL,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), overrideTokens);
  return aliasToken;
}
const resetComponent = (token) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token.fontFamily
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
const genLinkStyle = (token) => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${token.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: token.colorLinkHover
    },
    "&:active": {
      color: token.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
const genCommonStyle = (token, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [rootPrefixSelector]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
const genFocusOutline = (token) => ({
  outline: `${token.lineWidthBold}px solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
const genFocusStyle = (token) => ({
  "&:focus-visible": _extends({}, genFocusOutline(token))
});
function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return (_prefixCls) => {
    const prefixCls = computed(() => _prefixCls === null || _prefixCls === void 0 ? void 0 : _prefixCls.value);
    const [theme, token, hashId] = useToken();
    const {
      getPrefixCls,
      iconPrefixCls
    } = useConfigContextInject();
    const rootPrefixCls = computed(() => getPrefixCls());
    const sharedInfo = computed(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: ["Shared", rootPrefixCls.value]
      };
    });
    useStyleRegister(sharedInfo, () => [{
      // Link
      "&": genLinkStyle(token.value)
    }]);
    const componentInfo = computed(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: [component, prefixCls.value, iconPrefixCls.value]
      };
    });
    return [useStyleRegister(componentInfo, () => {
      const {
        token: proxyToken,
        flush
      } = statisticToken(token.value);
      const defaultComponentToken = typeof getDefaultToken === "function" ? getDefaultToken(proxyToken) : getDefaultToken;
      const mergedComponentToken = _extends(_extends({}, defaultComponentToken), token.value[component]);
      const componentCls = `.${prefixCls.value}`;
      const mergedToken = merge(proxyToken, {
        componentCls,
        prefixCls: prefixCls.value,
        iconCls: `.${iconPrefixCls.value}`,
        antCls: `.${rootPrefixCls.value}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId: hashId.value,
        prefixCls: prefixCls.value,
        rootPrefixCls: rootPrefixCls.value,
        iconPrefixCls: iconPrefixCls.value,
        overrideComponentToken: token.value[component]
      });
      flush(component, mergedComponentToken);
      return [genCommonStyle(token.value, prefixCls.value), styleInterpolation];
    }), hashId];
  };
}
const enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
let recording = true;
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return _extends({}, ...objs);
  }
  recording = false;
  const ret = {};
  objs.forEach((obj) => {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
function noop() {
}
function statisticToken(token) {
  let tokenKeys2;
  let proxy = token;
  let flush = noop;
  if (enableStatistic) {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys2.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      ({
        global: Array.from(tokenKeys2),
        component: componentToken
      });
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
}
const defaultTheme = createTheme(derivative);
const defaultConfig = {
  token: defaultSeedToken,
  hashed: true
};
const DesignTokenContextKey = Symbol("DesignTokenContext");
const globalDesignTokenApi = shallowRef();
const useDesignTokenProvider = (value) => {
  provide(DesignTokenContextKey, value);
  watch(value, () => {
    globalDesignTokenApi.value = unref(value);
    triggerRef(globalDesignTokenApi);
  }, {
    immediate: true,
    deep: true
  });
};
defineComponent({
  props: {
    value: objectType()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useDesignTokenProvider(computed(() => props.value));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
function useToken() {
  const designTokenContext = inject(DesignTokenContextKey, computed(() => globalDesignTokenApi.value || defaultConfig));
  const salt = computed(() => `${version}-${designTokenContext.value.hashed || ""}`);
  const mergedTheme = computed(() => designTokenContext.value.theme || defaultTheme);
  const cacheToken = useCacheToken(mergedTheme, computed(() => [defaultSeedToken, designTokenContext.value.token]), computed(() => ({
    salt: salt.value,
    override: _extends({
      override: designTokenContext.value.token
    }, designTokenContext.value.components),
    formatToken
  })));
  return [mergedTheme, computed(() => cacheToken.value[0]), computed(() => designTokenContext.value.hashed ? cacheToken.value[1] : "")];
}
const Empty$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token] = useToken();
    const themeStyle = computed(() => {
      const bgColor = new TinyColor(token.value.colorBgBase);
      if (bgColor.toHsl().l < 0.5) {
        return {
          opacity: 0.65
        };
      }
      return {};
    });
    return () => createVNode("svg", {
      "style": themeStyle.value,
      "width": "184",
      "height": "152",
      "viewBox": "0 0 184 152",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("g", {
      "transform": "translate(24 31.67)"
    }, [createVNode("ellipse", {
      "fill-opacity": ".8",
      "fill": "#F5F5F7",
      "cx": "67.797",
      "cy": "106.89",
      "rx": "67.797",
      "ry": "12.668"
    }, null), createVNode("path", {
      "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      "fill": "#AEB8C2"
    }, null), createVNode("path", {
      "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      "fill": "url(#linearGradient-1)",
      "transform": "translate(13.56)"
    }, null), createVNode("path", {
      "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      "fill": "#F5F5F7"
    }, null), createVNode("path", {
      "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      "fill": "#DCE0E6"
    }, null)]), createVNode("path", {
      "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      "fill": "#DCE0E6"
    }, null), createVNode("g", {
      "transform": "translate(149.65 15.383)",
      "fill": "#FFF"
    }, [createVNode("ellipse", {
      "cx": "20.654",
      "cy": "3.167",
      "rx": "2.849",
      "ry": "2.815"
    }, null), createVNode("path", {
      "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Empty$2.PRESENTED_IMAGE_DEFAULT = true;
const DefaultEmptyImg = Empty$2;
const Simple = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token] = useToken();
    const color = computed(() => {
      const {
        colorFill,
        colorFillTertiary,
        colorFillQuaternary,
        colorBgContainer
      } = token.value;
      return {
        borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexString(),
        shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexString(),
        contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexString()
      };
    });
    return () => createVNode("svg", {
      "width": "64",
      "height": "41",
      "viewBox": "0 0 64 41",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "transform": "translate(0 1)",
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("ellipse", {
      "fill": color.value.shadowColor,
      "cx": "32",
      "cy": "33",
      "rx": "32",
      "ry": "7"
    }, null), createVNode("g", {
      "fill-rule": "nonzero",
      "stroke": color.value.borderColor
    }, [createVNode("path", {
      "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), createVNode("path", {
      "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      "fill": color.value.contentColor
    }, null)])])]);
  }
});
Simple.PRESENTED_IMAGE_SIMPLE = true;
const SimpleEmptyImg = Simple;
const genSharedEmptyStyle = (token) => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      "&-normal": {
        marginBlock: marginXL,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: marginXS,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
const useStyle$4 = genComponentStyleHook("Empty", (token) => {
  const {
    componentCls,
    controlHeightLG
  } = token;
  const emptyToken = merge(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});
var __rest$4 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const defaultEmptyImg = createVNode(DefaultEmptyImg, null, null);
const simpleEmptyImg = createVNode(SimpleEmptyImg, null, null);
const emptyProps = () => ({
  prefixCls: String,
  imageStyle: objectType(),
  image: anyType(),
  description: anyType()
});
const Empty = defineComponent({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: emptyProps(),
  setup(props, _ref) {
    let {
      slots = {},
      attrs
    } = _ref;
    const {
      direction,
      prefixCls: prefixClsRef
    } = useConfigInject("empty", props);
    const [wrapSSR, hashId] = useStyle$4(prefixClsRef);
    return () => {
      var _a, _b;
      const prefixCls = prefixClsRef.value;
      const _c = _extends(_extends({}, props), attrs), {
        image: image2 = ((_a = slots.image) === null || _a === void 0 ? void 0 : _a.call(slots)) || defaultEmptyImg,
        description = ((_b = slots.description) === null || _b === void 0 ? void 0 : _b.call(slots)) || void 0,
        imageStyle,
        class: className = ""
      } = _c, restProps = __rest$4(_c, ["image", "description", "imageStyle", "class"]);
      return wrapSSR(createVNode(LocaleReceiver, {
        "componentName": "Empty",
        "children": (locale2) => {
          const des = typeof description !== "undefined" ? description : locale2.description;
          const alt = typeof des === "string" ? des : "empty";
          let imageNode = null;
          if (typeof image2 === "string") {
            imageNode = createVNode("img", {
              "alt": alt,
              "src": image2
            }, null);
          } else {
            imageNode = image2;
          }
          return createVNode("div", _objectSpread$8({
            "class": classNames(prefixCls, className, hashId.value, {
              [`${prefixCls}-normal`]: image2 === simpleEmptyImg,
              [`${prefixCls}-rtl`]: direction.value === "rtl"
            })
          }, restProps), [createVNode("div", {
            "class": `${prefixCls}-image`,
            "style": imageStyle
          }, [imageNode]), des && createVNode("p", {
            "class": `${prefixCls}-description`
          }, [des]), slots.default && createVNode("div", {
            "class": `${prefixCls}-footer`
          }, [filterEmpty(slots.default())])]);
        }
      }, null));
    };
  }
});
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
const Empty$1 = withInstall(Empty);
const DefaultRenderEmpty = (props) => {
  const {
    prefixCls
  } = useConfigInject("empty", props);
  const renderHtml = (componentName) => {
    switch (componentName) {
      case "Table":
      case "List":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE,
          "class": `${prefixCls.value}-small`
        }, null);
      default:
        return createVNode(Empty$1, null, null);
    }
  };
  return renderHtml(props.componentName);
};
const SizeContextKey = Symbol("SizeContextKey");
const useInjectSize = () => {
  return inject(SizeContextKey, ref(void 0));
};
const useConfigInject = (name, props) => {
  const sizeContext = useInjectSize();
  const disabledContext = useInjectDisabled();
  const configProvider = inject(configProviderKey, _extends(_extends({}, defaultConfigProvider), {
    renderEmpty: (name2) => h(DefaultRenderEmpty, {
      componentName: name2
    })
  }));
  const prefixCls = computed(() => configProvider.getPrefixCls(name, props.prefixCls));
  const direction = computed(() => {
    var _a, _b;
    return (_a = props.direction) !== null && _a !== void 0 ? _a : (_b = configProvider.direction) === null || _b === void 0 ? void 0 : _b.value;
  });
  const iconPrefixCls = computed(() => {
    var _a;
    return (_a = props.iconPrefixCls) !== null && _a !== void 0 ? _a : configProvider.iconPrefixCls.value;
  });
  const rootPrefixCls = computed(() => configProvider.getPrefixCls());
  const autoInsertSpaceInButton = computed(() => {
    var _a;
    return (_a = configProvider.autoInsertSpaceInButton) === null || _a === void 0 ? void 0 : _a.value;
  });
  const renderEmpty = configProvider.renderEmpty;
  const space = configProvider.space;
  const pageHeader = configProvider.pageHeader;
  const form = configProvider.form;
  const getTargetContainer = computed(() => {
    var _a, _b;
    return (_a = props.getTargetContainer) !== null && _a !== void 0 ? _a : (_b = configProvider.getTargetContainer) === null || _b === void 0 ? void 0 : _b.value;
  });
  const getPopupContainer = computed(() => {
    var _a, _b, _c;
    return (_b = (_a = props.getContainer) !== null && _a !== void 0 ? _a : props.getPopupContainer) !== null && _b !== void 0 ? _b : (_c = configProvider.getPopupContainer) === null || _c === void 0 ? void 0 : _c.value;
  });
  const dropdownMatchSelectWidth = computed(() => {
    var _a, _b;
    return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = configProvider.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
  });
  const virtual = computed(() => {
    var _a;
    return (props.virtual === void 0 ? ((_a = configProvider.virtual) === null || _a === void 0 ? void 0 : _a.value) !== false : props.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  const size = computed(() => props.size || sizeContext.value);
  const autocomplete = computed(() => {
    var _a, _b, _c;
    return (_a = props.autocomplete) !== null && _a !== void 0 ? _a : (_c = (_b = configProvider.input) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.autocomplete;
  });
  const disabled = computed(() => {
    var _a;
    return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
  });
  const csp = computed(() => {
    var _a;
    return (_a = props.csp) !== null && _a !== void 0 ? _a : configProvider.csp;
  });
  const wave = computed(() => {
    var _a, _b;
    return (_a = props.wave) !== null && _a !== void 0 ? _a : (_b = configProvider.wave) === null || _b === void 0 ? void 0 : _b.value;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp,
    iconPrefixCls,
    disabled,
    select: configProvider.select,
    wave
  };
};
function omit(obj, fields) {
  const shallowCopy = _extends({}, obj);
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
const PropTypes = createTypes({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: true,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: true,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: true,
  type: null
}]);
const devWarning = (valid, component, message) => {
  warningOnce(valid, `[ant-design-vue: ${component}] ${message}`);
};
function cloneElement(vnode) {
  let nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  let mergeRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  let ele = vnode;
  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0];
  }
  if (!ele) {
    return null;
  }
  const node = cloneVNode(ele, nodeProps, mergeRef);
  node.props = override ? _extends(_extends({}, node.props), nodeProps) : node.props;
  warning(typeof node.props.class !== "object");
  return node;
}
tuple("bottomLeft", "bottomRight", "topLeft", "topRight");
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  if (!e.target.composing)
    return;
  e.target.composing = false;
  trigger(e.target, "input");
}
function trigger(el, type) {
  const e = (void 0).createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
const antInput = {
  created(el, binding) {
    if (!binding.modifiers || !binding.modifiers.lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  }
};
const antInputDirective = antInput;
function useState(defaultStateValue) {
  const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  const innerValue = ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}
function createContext(defaultValue) {
  const contextKey = Symbol("contextKey");
  const useProvide = (props, newProps) => {
    const mergedProps = reactive({});
    provide(contextKey, mergedProps);
    watchEffect(() => {
      _extends(mergedProps, props, newProps || {});
    });
    return mergedProps;
  };
  const useInject = () => {
    return inject(contextKey, defaultValue) || {};
  };
  return {
    useProvide,
    useInject
  };
}
const ContextKey = Symbol("ContextProps");
const InternalContextKey = Symbol("InternalContextProps");
const defaultContext = {
  id: computed(() => void 0),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
};
const defaultInternalContext = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
};
const useInjectFormItemContext = () => {
  const internalContext = inject(InternalContextKey, defaultInternalContext);
  const formItemFieldKey = Symbol("FormItemFieldKey");
  const instance = getCurrentInstance();
  internalContext.addFormItemField(formItemFieldKey, instance.type);
  provide(InternalContextKey, defaultInternalContext);
  provide(ContextKey, defaultContext);
  return inject(ContextKey, defaultContext);
};
defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    provide(InternalContextKey, defaultInternalContext);
    provide(ContextKey, defaultContext);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const FormItemInputContext = createContext({});
const NoFormStatus = defineComponent({
  name: "NoFormStatus",
  setup(_, _ref2) {
    let {
      slots
    } = _ref2;
    FormItemInputContext.useProvide({});
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classNames({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
const genSpaceCompactStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
const genSpaceStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-space-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
};
const useStyle$3 = genComponentStyleHook("Space", (token) => [genSpaceStyle(token), genSpaceCompactStyle(token)]);
const spaceCompactItemProps = () => ({
  compactSize: String,
  compactDirection: PropTypes.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  isFirstItem: booleanType(),
  isLastItem: booleanType()
});
const SpaceCompactItemContext = createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = SpaceCompactItemContext.useInject();
  const compactItemClassnames = computed(() => {
    if (!compactItemContext || isEmpty(compactItemContext))
      return "";
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return classNames({
      [`${prefixCls.value}-compact${separator}item`]: true,
      [`${prefixCls.value}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls.value}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls.value}-compact${separator}item-rtl`]: direction.value === "rtl"
    });
  });
  return {
    compactSize: computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize),
    compactDirection: computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection),
    compactItemClassnames
  };
};
const NoCompactStyle = defineComponent({
  name: "NoCompactStyle",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    SpaceCompactItemContext.useProvide(null);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const spaceCompactProps = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: PropTypes.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  align: PropTypes.oneOf(tuple("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
});
const CompactItem = defineComponent({
  name: "CompactItem",
  props: spaceCompactItemProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    SpaceCompactItemContext.useProvide(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
defineComponent({
  name: "ASpaceCompact",
  inheritAttrs: false,
  props: spaceCompactProps(),
  setup(props, _ref3) {
    let {
      attrs,
      slots
    } = _ref3;
    const {
      prefixCls,
      direction: directionConfig
    } = useConfigInject("space-compact", props);
    const compactItemContext = SpaceCompactItemContext.useInject();
    const [wrapSSR, hashId] = useStyle$3(prefixCls);
    const clx = computed(() => {
      return classNames(prefixCls.value, hashId.value, {
        [`${prefixCls.value}-rtl`]: directionConfig.value === "rtl",
        [`${prefixCls.value}-block`]: props.block,
        [`${prefixCls.value}-vertical`]: props.direction === "vertical"
      });
    });
    return () => {
      var _a;
      const childNodes = flattenChildren(((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []);
      if (childNodes.length === 0) {
        return null;
      }
      return wrapSSR(createVNode("div", _objectSpread$8(_objectSpread$8({}, attrs), {}, {
        "class": [clx.value, attrs.class]
      }), [childNodes.map((child, i) => {
        var _a2;
        const key = child && child.key || `${prefixCls.value}-item-${i}`;
        const noCompactItemContext = !compactItemContext || isEmpty(compactItemContext);
        return createVNode(CompactItem, {
          "key": key,
          "compactSize": (_a2 = props.size) !== null && _a2 !== void 0 ? _a2 : "middle",
          "compactDirection": props.direction,
          "isFirstItem": i === 0 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
          "isLastItem": i === childNodes.length - 1 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
        }, {
          default: () => [child]
        });
      })]));
    };
  }
});
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n) => `&:${n} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: -token.lineWidth
    },
    "&-item": _extends(_extends({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: _extends(_extends({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}
const genWaveStyle = (token) => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${token.motionEaseOutCirc}`, `opacity 2s ${token.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        }
      }
    }
  };
};
const useStyle$2 = genComponentStyleHook("Wave", (token) => [genWaveStyle(token)]);
const WaveEffect = defineComponent({
  props: {
    target: objectType(),
    className: String
  },
  setup(props) {
    const divRef = shallowRef(null);
    const [color, setWaveColor] = useState(null);
    const [borderRadius, setBorderRadius] = useState([]);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [enabled, setEnabled] = useState(false);
    const removeDom = () => {
      var _a;
      const holder = (_a = divRef.value) === null || _a === void 0 ? void 0 : _a.parentElement;
      if (holder) {
        render(null, holder);
        if (holder.parentElement) {
          holder.parentElement.removeChild(holder);
        }
      }
    };
    const onTransitionend = (e) => {
      if (e.propertyName === "opacity") {
        removeDom();
      }
    };
    return () => {
      if (!enabled.value) {
        return null;
      }
      const waveStyle = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        width: `${width.value}px`,
        height: `${height.value}px`,
        borderRadius: borderRadius.value.map((radius) => `${radius}px`).join(" ")
      };
      if (color) {
        waveStyle["--wave-color"] = color.value;
      }
      return createVNode(Transition, {
        "appear": true,
        "name": "wave-motion",
        "appearFromClass": "wave-motion-appear",
        "appearActiveClass": "wave-motion-appear",
        "appearToClass": "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [createVNode("div", {
          "ref": divRef,
          "class": props.className,
          "style": waveStyle,
          "onTransitionend": onTransitionend
        }, null)]
      });
    };
  }
});
function showWaveEffect(node, className) {
  const holder = (void 0).createElement("div");
  holder.style.position = "absolute";
  holder.style.left = `0px`;
  holder.style.top = `0px`;
  node === null || node === void 0 ? void 0 : node.insertBefore(holder, node === null || node === void 0 ? void 0 : node.firstChild);
  render(createVNode(WaveEffect, {
    "target": node,
    "className": className
  }, null), holder);
}
function useWave(instance, className, wave) {
  function showWave() {
    var _a;
    const node = findDOMNode(instance);
    if (((_a = wave === null || wave === void 0 ? void 0 : wave.value) === null || _a === void 0 ? void 0 : _a.disabled) || !node) {
      return;
    }
    showWaveEffect(node, className.value);
  }
  return showWave;
}
const Wave = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const instance = getCurrentInstance();
    const {
      prefixCls,
      wave
    } = useConfigInject("wave", props);
    const [, hashId] = useStyle$2(prefixCls);
    useWave(instance, computed(() => classNames(prefixCls.value, hashId.value)), wave);
    return () => {
      var _a;
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
      return children;
    };
  }
});
const buttonProps = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: PropTypes.any,
  href: String,
  target: String,
  title: String,
  onClick: eventType(),
  onMousedown: eventType()
});
const getCollapsedWidth = (node) => {
  if (node) {
    node.style.width = "0px";
    node.style.opacity = "0";
    node.style.transform = "scale(0)";
  }
};
const getRealWidth = (node) => {
  nextTick(() => {
    if (node) {
      node.style.width = `${node.scrollWidth}px`;
      node.style.opacity = "1";
      node.style.transform = "scale(1)";
    }
  });
};
const resetStyle = (node) => {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
const LoadingIcon = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(props) {
    return () => {
      const {
        existIcon,
        prefixCls,
        loading
      } = props;
      if (existIcon) {
        return createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [createVNode(LoadingOutlined$1, null, null)]);
      }
      const visible = !!loading;
      return createVNode(Transition, {
        "name": `${prefixCls}-loading-icon-motion`,
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": (node) => {
          setTimeout(() => {
            getCollapsedWidth(node);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: () => [visible ? createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [createVNode(LoadingOutlined$1, null, null)]) : null]
      });
    };
  }
});
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle$1 = (token) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    colorPrimaryHover,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -lineWidth,
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          [`&:hover,
          &:focus,
          &:active`]: {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${componentCls}-icon-only`]: {
          fontSize
        }
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, colorPrimaryHover),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
    ]
  };
};
function compactItemVerticalBorder(token, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: -token.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = `${token.componentCls}-compact-vertical`;
  return {
    [compactCls]: _extends(_extends({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
  };
}
const genSharedButtonStyle = (token) => {
  const {
    componentCls,
    iconCls
  } = token;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: token.lineHeight,
      color: token.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": _extends({}, genFocusStyle(token)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -token.lineWidth,
            insetInlineStart: -token.lineWidth,
            display: "inline-block",
            width: token.lineWidth,
            height: `calc(100% + ${token.lineWidth * 2}px)`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -token.lineWidth,
              insetInlineStart: -token.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${token.lineWidth * 2}px)`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (hoverStyle, activeStyle) => ({
  "&:not(:disabled)": {
    "&:hover": hoverStyle,
    "&:active": activeStyle
  }
});
const genCircleButtonStyle = (token) => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
});
const genRoundButtonStyle = (token) => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2
});
const genDisabledStyle$1 = (token) => ({
  cursor: "not-allowed",
  borderColor: token.colorBorder,
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  boxShadow: "none"
});
const genGhostButtonStyle = (btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: _extends(_extends({
    color: textColor || void 0,
    backgroundColor: "transparent",
    borderColor: borderColor || void 0,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(_extends({
    backgroundColor: "transparent"
  }, hoverStyle), _extends({
    backgroundColor: "transparent"
  }, activeStyle))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: textColorDisabled || void 0,
      borderColor: borderColorDisabled || void 0
    }
  })
});
const genSolidDisabledButtonStyle = (token) => ({
  "&:disabled": _extends({}, genDisabledStyle$1(token))
});
const genSolidButtonStyle = (token) => _extends({}, genSolidDisabledButtonStyle(token));
const genPureDisabledButtonStyle = (token) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: token.colorTextDisabled
  }
});
const genDefaultButtonStyle = (token) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
  backgroundColor: token.colorBgContainer,
  borderColor: token.colorBorder,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends(_extends({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))
});
const genPrimaryButtonStyle = (token) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimary,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryHover
}, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends(_extends({
    backgroundColor: token.colorError,
    boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`
  }, genHoverActiveButtonStyle({
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))
});
const genDashedButtonStyle = (token) => _extends(_extends({}, genDefaultButtonStyle(token)), {
  borderStyle: "dashed"
});
const genLinkButtonStyle = (token) => _extends(_extends(_extends({
  color: token.colorLink
}, genHoverActiveButtonStyle({
  color: token.colorLinkHover
}, {
  color: token.colorLinkActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends({
    color: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))
});
const genTextButtonStyle = (token) => _extends(_extends(_extends({}, genHoverActiveButtonStyle({
  color: token.colorText,
  backgroundColor: token.colorBgTextHover
}, {
  color: token.colorText,
  backgroundColor: token.colorBgTextActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))
});
const genDisabledButtonStyle = (token) => _extends(_extends({}, genDisabledStyle$1(token)), {
  [`&${token.componentCls}:hover`]: _extends({}, genDisabledStyle$1(token))
});
const genTypeButtonStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token),
    [`${componentCls}-link`]: genLinkButtonStyle(token),
    [`${componentCls}-text`]: genTextButtonStyle(token),
    [`${componentCls}-disabled`]: genDisabledButtonStyle(token)
  };
};
const genSizeButtonStyle = function(token) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls,
    iconCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal
  } = token;
  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const paddingHorizontal = buttonPaddingHorizontal - lineWidth;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
    // Size
    {
      [`${componentCls}${sizePrefixCls}`]: {
        fontSize,
        height: controlHeight,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        borderRadius,
        [`&${iconOnlyCls}`]: {
          width: controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${componentCls}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${componentCls}-loading`]: {
          opacity: token.opacityLoading,
          cursor: "default"
        },
        [`${componentCls}-loading-icon`]: {
          transition: `width ${token.motionDurationSlow} ${token.motionEaseInOut}, opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`
        },
        [`&:not(${iconOnlyCls}) ${componentCls}-loading-icon > ${iconCls}`]: {
          marginInlineEnd: token.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token)
    },
    {
      [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token)
    }
  ];
};
const genSizeBaseButtonStyle = (token) => genSizeButtonStyle(token);
const genSizeSmallButtonStyle = (token) => {
  const smallToken = merge(token, {
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token.borderRadiusSM
  });
  return genSizeButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = (token) => {
  const largeToken = merge(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  });
  return genSizeButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%"
      }
    }
  };
};
const useStyle$1 = genComponentStyleHook("Button", (token) => {
  const {
    controlTmpOutline,
    paddingContentHorizontal
  } = token;
  const buttonToken = merge(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal
  });
  return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeSmallButtonStyle(buttonToken),
    genSizeBaseButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Group (type, ghost, danger, disabled, loading)
    genTypeButtonStyle(buttonToken),
    // Button Group
    genGroupStyle$1(buttonToken),
    // Space Compact
    genCompactItemStyle(token, {
      focus: false
    }),
    genCompactItemVerticalStyle(token)
  ];
});
const buttonGroupProps = () => ({
  prefixCls: String,
  size: {
    type: String
  }
});
const GroupSizeContext = createContext();
const ButtonGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: buttonGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("btn-group", props);
    const [, , hashId] = useToken();
    GroupSizeContext.useProvide(reactive({
      size: computed(() => props.size)
    }));
    const classes = computed(() => {
      const {
        size
      } = props;
      let sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          devWarning(!size, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-${sizeCls}`]: sizeCls,
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [hashId.value]: true
      };
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": classes.value
      }, [flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnBorderedButtonType(type) {
  return type === "text" || type === "link";
}
const Button = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(buttonProps(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit,
      expose
    } = _ref;
    const {
      prefixCls,
      autoInsertSpaceInButton,
      direction,
      size
    } = useConfigInject("btn", props);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const groupSizeContext = GroupSizeContext.useInject();
    const disabledContext = useInjectDisabled();
    const mergedDisabled = computed(() => {
      var _a;
      return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
    });
    const buttonNodeRef = shallowRef(null);
    const delayTimeoutRef = shallowRef(void 0);
    let isNeedInserted = false;
    const innerLoading = shallowRef(false);
    const hasTwoCNChar = shallowRef(false);
    const autoInsertSpace = computed(() => autoInsertSpaceInButton.value !== false);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const loadingOrDelay = computed(() => typeof props.loading === "object" && props.loading.delay ? props.loading.delay || true : !!props.loading);
    watch(loadingOrDelay, (val) => {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === "number") {
        delayTimeoutRef.value = setTimeout(() => {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    const classes = computed(() => {
      const {
        type,
        shape = "default",
        ghost,
        block,
        danger
      } = props;
      const pre = prefixCls.value;
      const sizeClassNameMap = {
        large: "lg",
        small: "sm",
        middle: void 0
      };
      const sizeFullname = compactSize.value || (groupSizeContext === null || groupSizeContext === void 0 ? void 0 : groupSizeContext.size) || size.value;
      const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
      return [compactItemClassnames.value, {
        [hashId.value]: true,
        [`${pre}`]: true,
        [`${pre}-${shape}`]: shape !== "default" && shape,
        [`${pre}-${type}`]: type,
        [`${pre}-${sizeCls}`]: sizeCls,
        [`${pre}-loading`]: innerLoading.value,
        [`${pre}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
        [`${pre}-two-chinese-chars`]: hasTwoCNChar.value && autoInsertSpace.value,
        [`${pre}-block`]: block,
        [`${pre}-dangerous`]: !!danger,
        [`${pre}-rtl`]: direction.value === "rtl"
      }];
    });
    const fixTwoCNChar = () => {
      const node = buttonNodeRef.value;
      if (!node || autoInsertSpaceInButton.value === false) {
        return;
      }
      const buttonText = node.textContent;
      if (isNeedInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    };
    const handleClick = (event) => {
      if (innerLoading.value || mergedDisabled.value) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };
    const handleMousedown = (event) => {
      emit("mousedown", event);
    };
    const insertSpace = (child, needInserted) => {
      const SPACE = needInserted ? " " : "";
      if (child.type === Text) {
        let text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return createVNode("span", null, [text]);
      }
      return child;
    };
    watchEffect(() => {
      devWarning(!(props.ghost && isUnBorderedButtonType(props.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    });
    onUpdated(fixTwoCNChar);
    const focus = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    return () => {
      var _a, _b;
      const {
        icon = (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props;
      const children = flattenChildren((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      isNeedInserted = children.length === 1 && !icon && !isUnBorderedButtonType(props.type);
      const {
        type,
        htmlType,
        href,
        title,
        target
      } = props;
      const iconType = innerLoading.value ? "loading" : icon;
      const buttonProps2 = _extends(_extends({}, attrs), {
        title,
        disabled: mergedDisabled.value,
        class: [classes.value, attrs.class, {
          [`${prefixCls.value}-icon-only`]: children.length === 0 && !!iconType
        }],
        onClick: handleClick,
        onMousedown: handleMousedown
      });
      if (!mergedDisabled.value) {
        delete buttonProps2.disabled;
      }
      const iconNode = icon && !innerLoading.value ? icon : createVNode(LoadingIcon, {
        "existIcon": !!icon,
        "prefixCls": prefixCls.value,
        "loading": !!innerLoading.value
      }, null);
      const kids = children.map((child) => insertSpace(child, isNeedInserted && autoInsertSpace.value));
      if (href !== void 0) {
        return wrapSSR(createVNode("a", _objectSpread$8(_objectSpread$8({}, buttonProps2), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]));
      }
      let buttonNode = createVNode("button", _objectSpread$8(_objectSpread$8({}, buttonProps2), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (!isUnBorderedButtonType(type)) {
        const _buttonNode = /* @__PURE__ */ function() {
          return buttonNode;
        }();
        buttonNode = createVNode(Wave, {
          "ref": "wave",
          "disabled": !!innerLoading.value
        }, {
          default: () => [_buttonNode]
        });
      }
      return wrapSSR(buttonNode);
    };
  }
});
Button.Group = ButtonGroup;
Button.install = function(app) {
  app.component(Button.name, Button);
  app.component(ButtonGroup.name, ButtonGroup);
  return app;
};
const genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
const genHoverStyle = (token) => ({
  borderColor: token.inputBorderHoverColor,
  borderInlineEndWidth: token.lineWidth
});
const genActiveStyle = (token) => ({
  borderColor: token.inputBorderHoverColor,
  boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`,
  borderInlineEndWidth: token.lineWidth,
  outline: 0
});
const genDisabledStyle = (token) => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": _extends({}, genHoverStyle(merge(token, {
    inputBorderHoverColor: token.colorBorder
  })))
});
const genInputLargeStyle = (token) => {
  const {
    inputPaddingVerticalLG,
    fontSizeLG,
    lineHeightLG,
    borderRadiusLG,
    inputPaddingHorizontalLG
  } = token;
  return {
    padding: `${inputPaddingVerticalLG}px ${inputPaddingHorizontalLG}px`,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
const genInputSmallStyle = (token) => ({
  padding: `${token.inputPaddingVerticalSM}px ${token.controlPaddingHorizontalSM - 1}px`,
  borderRadius: token.borderRadiusSM
});
const genStatusStyle = (token, parentCls) => {
  const {
    componentCls,
    colorError,
    colorWarning,
    colorErrorOutline,
    colorWarningOutline,
    colorErrorBorderHover,
    colorWarningBorderHover
  } = token;
  return {
    [`&-status-error:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorError,
      "&:hover": {
        borderColor: colorErrorBorderHover
      },
      "&:focus, &-focused": _extends({}, genActiveStyle(merge(token, {
        inputBorderActiveColor: colorError,
        inputBorderHoverColor: colorError,
        controlOutline: colorErrorOutline
      }))),
      [`${componentCls}-prefix`]: {
        color: colorError
      }
    },
    [`&-status-warning:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorWarning,
      "&:hover": {
        borderColor: colorWarningBorderHover
      },
      "&:focus, &-focused": _extends({}, genActiveStyle(merge(token, {
        inputBorderActiveColor: colorWarning,
        inputBorderHoverColor: colorWarning,
        controlOutline: colorWarningOutline
      }))),
      [`${componentCls}-prefix`]: {
        color: colorWarning
      }
    }
  };
};
const genBasicInputStyle = (token) => _extends(_extends({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${token.inputPaddingVertical}px ${token.inputPaddingHorizontal}px`,
  color: token.colorText,
  fontSize: token.fontSize,
  lineHeight: token.lineHeight,
  backgroundColor: token.colorBgContainer,
  backgroundImage: "none",
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: token.colorBorder,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`
}, genPlaceholderStyle(token.colorTextPlaceholder)), {
  "&:hover": _extends({}, genHoverStyle(token)),
  "&:focus, &-focused": _extends({}, genActiveStyle(token)),
  "&-disabled, &[disabled]": _extends({}, genDisabledStyle(token)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    height: "auto",
    minHeight: token.controlHeight,
    lineHeight: token.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${token.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": _extends({}, genInputLargeStyle(token)),
  "&-sm": _extends({}, genInputSmallStyle(token)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
});
const genInputGroupStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    [`&[class*='col-']`]: {
      paddingInlineEnd: token.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: _extends({}, genInputLargeStyle(token)),
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: _extends({}, genInputSmallStyle(token)),
    [`> ${componentCls}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      [`&-addon, &-wrap`]: {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${token.inputPaddingHorizontal}px`,
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.fontSize,
        textAlign: "center",
        backgroundColor: token.colorFillAlter,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `-${token.inputPaddingVertical + 1}px -${token.inputPaddingHorizontal}px`,
          [`&${antCls}-select-single:not(${antCls}-select-customize-input)`]: {
            [`${antCls}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${token.lineWidth}px ${token.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${antCls}-select-selector`]: {
              color: token.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px -${token.inputPaddingHorizontal}px`,
          backgroundColor: "transparent",
          [`${antCls}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${componentCls}`]: {
      float: "inline-start",
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${componentCls}-search &`]: {
          borderStartStartRadius: token.borderRadius,
          borderEndStartRadius: token.borderRadius
        }
      },
      [`&:not(:first-child), ${componentCls}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: _extends(_extends({
      display: "block"
    }, clearFix()), {
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: token.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        borderRadius: 0
      },
      [`& > ${componentCls}-affix-wrapper`]: {
        display: "inline-flex"
      },
      [`& > ${antCls}-picker-range`]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: -token.lineWidth,
        borderInlineEndWidth: token.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${componentCls}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${antCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${antCls}-select:first-child > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      },
      [`& > *:last-child,
      & > ${antCls}-select:last-child > ${antCls}-select-selector,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: "top"
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: -token.lineWidth,
        [`${componentCls}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${componentCls}-group-wrapper:not(:last-child)`]: {
        [`&${componentCls}-search > ${componentCls}-group`]: {
          [`& > ${componentCls}-group-addon > ${componentCls}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${componentCls}`]: {
            borderStartStartRadius: token.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: token.borderRadius
          }
        }
      }
    }),
    [`&&-sm ${antCls}-btn`]: {
      fontSize: token.fontSizeSM,
      height: token.controlHeightSM,
      lineHeight: "normal"
    },
    [`&&-lg ${antCls}-btn`]: {
      fontSize: token.fontSizeLG,
      height: token.controlHeightLG,
      lineHeight: "normal"
    },
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&&-lg ${antCls}-select-single ${antCls}-select-selector`]: {
      height: `${token.controlHeightLG}px`,
      [`${antCls}-select-selection-item, ${antCls}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${token.controlHeightLG - 2}px`
      },
      [`${antCls}-select-selection-search-input`]: {
        height: `${token.controlHeightLG}px`
      }
    },
    [`&&-sm ${antCls}-select-single ${antCls}-select-selector`]: {
      height: `${token.controlHeightSM}px`,
      [`${antCls}-select-selection-item, ${antCls}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${token.controlHeightSM - 2}px`
      },
      [`${antCls}-select-selection-search-input`]: {
        height: `${token.controlHeightSM}px`
      }
    }
  };
};
const genInputStyle = (token) => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth
  } = token;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = (controlHeightSM - lineWidth * 2 - FIXED_CHROME_COLOR_HEIGHT) / 2;
  return {
    [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), genBasicInputStyle(token)), genStatusStyle(token, componentCls)), {
      '&[type="color"]': {
        height: token.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      }
    })
  };
};
const genAllowClearStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${token.motionDurationSlow}`,
      "&:hover": {
        color: token.colorTextTertiary
      },
      "&:active": {
        color: token.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${token.inputAffixPadding}px`
      }
    },
    // ======================= TextArea ========================
    "&-textarea-with-clear-btn": {
      padding: "0 !important",
      border: "0 !important",
      [`${componentCls}-clear-icon`]: {
        position: "absolute",
        insetBlockStart: token.paddingXS,
        insetInlineEnd: token.paddingXS,
        zIndex: 1
      }
    }
  };
};
const genAffixStyle = (token) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token;
  return {
    [`${componentCls}-affix-wrapper`]: _extends(_extends(_extends(_extends(_extends({}, genBasicInputStyle(token)), {
      display: "inline-flex",
      [`&:not(${componentCls}-affix-wrapper-disabled):hover`]: _extends(_extends({}, genHoverStyle(token)), {
        zIndex: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }),
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${componentCls}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${componentCls}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${componentCls}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: token.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: colorTextDescription
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: token.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          marginInlineStart: inputAffixPadding
        }
      }
    }), genAllowClearStyle(token)), {
      // password
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        "&:hover": {
          color: colorIconHover
        }
      }
    }), genStatusStyle(token, `${componentCls}-affix-wrapper`))
  };
};
const genGroupStyle = (token) => {
  const {
    componentCls,
    colorError,
    colorSuccess,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [`${componentCls}-group`]: _extends(_extends(_extends({}, resetComponent(token)), genInputGroupStyle(token)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG
          }
        },
        "&-sm": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Status
        "&-status-error": {
          [`${componentCls}-group-addon`]: {
            color: colorError,
            borderColor: colorError
          }
        },
        "&-status-warning": {
          [`${componentCls}-group-addon:last-child`]: {
            color: colorSuccess,
            borderColor: colorSuccess
          }
        }
      }
    })
  };
};
const genSearchInputStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  const searchPrefixCls = `${componentCls}-search`;
  return {
    [searchPrefixCls]: {
      [`${componentCls}`]: {
        "&:hover, &:focus": {
          borderColor: token.colorPrimaryHover,
          [`+ ${componentCls}-group-addon ${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            borderInlineStartColor: token.colorPrimaryHover
          }
        }
      },
      [`${componentCls}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${componentCls}-lg`]: {
        lineHeight: token.lineHeightLG - 2e-4
      },
      [`> ${componentCls}-group`]: {
        [`> ${componentCls}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${searchPrefixCls}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: token.borderRadius,
            borderEndEndRadius: token.borderRadius,
            borderEndStartRadius: 0
          },
          [`${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            color: token.colorTextDescription,
            "&:hover": {
              color: token.colorPrimaryHover
            },
            "&:active": {
              color: token.colorPrimaryActive
            },
            [`&${antCls}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${searchPrefixCls}-button`]: {
        height: token.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${searchPrefixCls}-button`]: {
        height: token.controlHeightLG
      },
      [`&-small ${searchPrefixCls}-button`]: {
        height: token.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${componentCls}-compact-item`]: {
        [`&:not(${componentCls}-compact-last-item)`]: {
          [`${componentCls}-group-addon`]: {
            [`${componentCls}-search-button`]: {
              marginInlineEnd: -token.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${componentCls}-compact-first-item)`]: {
          [`${componentCls},${componentCls}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${componentCls}-group-addon ${componentCls}-search-button,
        > ${componentCls},
        ${componentCls}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${componentCls}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
function initInputToken(token) {
  return merge(token, {
    inputAffixPadding: token.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((token.controlHeightLG - token.fontSizeLG * token.lineHeightLG) / 2 * 10) / 10 - token.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((token.controlHeightSM - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 0),
    inputPaddingHorizontal: token.paddingSM - token.lineWidth,
    inputPaddingHorizontalSM: token.paddingXS - token.lineWidth,
    inputPaddingHorizontalLG: token.controlPaddingHorizontal - token.lineWidth,
    inputBorderHoverColor: token.colorPrimaryHover,
    inputBorderActiveColor: token.colorPrimaryHover
  });
}
const genTextAreaStyle = (token) => {
  const {
    componentCls,
    inputPaddingHorizontal,
    paddingLG
  } = token;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    [textareaPrefixCls]: {
      position: "relative",
      [`${textareaPrefixCls}-suffix`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: inputPaddingHorizontal,
        bottom: 0,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        margin: "auto"
      },
      [`&-status-error,
        &-status-warning,
        &-status-success,
        &-status-validating`]: {
        [`&${textareaPrefixCls}-has-feedback`]: {
          [`${componentCls}`]: {
            paddingInlineEnd: paddingLG
          }
        }
      },
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${componentCls}`]: {
          height: "100%"
        },
        "&::after": {
          color: token.colorTextDescription,
          whiteSpace: "nowrap",
          content: "attr(data-count)",
          pointerEvents: "none",
          float: "right"
        }
      },
      "&-rtl": {
        "&::after": {
          float: "left"
        }
      }
    }
  };
};
const useStyle = genComponentStyleHook("Input", (token) => {
  const inputToken = initInputToken(token);
  return [
    genInputStyle(inputToken),
    genTextAreaStyle(inputToken),
    genAffixStyle(inputToken),
    genGroupStyle(inputToken),
    genSearchInputStyle(inputToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(inputToken)
  ];
});
const isValid$1 = (value) => {
  return value !== void 0 && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
function hasPrefixSuffix(propsAndSlots) {
  return isValid$1(propsAndSlots.prefix) || isValid$1(propsAndSlots.suffix) || isValid$1(propsAndSlots.allowClear);
}
function hasAddon$1(propsAndSlots) {
  return isValid$1(propsAndSlots.addonBefore) || isValid$1(propsAndSlots.addonAfter);
}
function fixControlledValue(value) {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return String(value);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  const event = e;
  if (e.type === "click") {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    const currentTarget = target.cloneNode(true);
    event.target = currentTarget;
    event.currentTarget = currentTarget;
    currentTarget.value = "";
    onChange(event);
    return;
  }
  if (targetValue !== void 0) {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    event.target = target;
    event.currentTarget = target;
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element)
    return;
  element.focus(option);
  const {
    cursor
  } = option || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
const commonInputProps = () => {
  return {
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
    clearIcon: PropTypes.any,
    affixWrapperClassName: String,
    groupClassName: String,
    wrapperClassName: String,
    inputClassName: String,
    allowClear: {
      type: Boolean,
      default: void 0
    }
  };
};
const baseInputProps = () => {
  return _extends(_extends({}, commonInputProps()), {
    value: {
      type: [String, Number, Symbol],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Symbol],
      default: void 0
    },
    inputElement: PropTypes.any,
    prefixCls: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    triggerFocus: Function,
    readonly: {
      type: Boolean,
      default: void 0
    },
    handleReset: Function,
    hidden: {
      type: Boolean,
      default: void 0
    }
  });
};
const inputProps$1 = () => _extends(_extends({}, baseInputProps()), {
  id: String,
  placeholder: {
    type: [String, Number]
  },
  autocomplete: String,
  type: stringType("text"),
  name: String,
  size: {
    type: String
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  lazy: {
    type: Boolean,
    default: true
  },
  maxlength: Number,
  loading: {
    type: Boolean,
    default: void 0
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  showCount: {
    type: [Boolean, Object]
  },
  htmlSize: Number,
  onPressEnter: Function,
  onKeydown: Function,
  onKeyup: Function,
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  onInput: Function,
  "onUpdate:value": Function,
  onCompositionstart: Function,
  onCompositionend: Function,
  valueModifiers: Object,
  hidden: {
    type: Boolean,
    default: void 0
  },
  status: String
});
const BaseInput = defineComponent({
  name: "BaseInput",
  inheritAttrs: false,
  props: baseInputProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const containerRef = ref();
    const onInputMouseDown = (e) => {
      var _a;
      if ((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        const {
          triggerFocus: triggerFocus2
        } = props;
        triggerFocus2 === null || triggerFocus2 === void 0 ? void 0 : triggerFocus2();
      }
    };
    const getClearIcon = () => {
      var _a;
      const {
        allowClear,
        value,
        disabled,
        readonly,
        handleReset,
        suffix = slots.suffix,
        prefixCls
      } = props;
      if (!allowClear) {
        return null;
      }
      const needClear = !disabled && !readonly && value;
      const className = `${prefixCls}-clear-icon`;
      const iconNode = ((_a = slots.clearIcon) === null || _a === void 0 ? void 0 : _a.call(slots)) || "*";
      return createVNode("span", {
        "onClick": handleReset,
        "onMousedown": (e) => e.preventDefault(),
        "class": classNames({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        "role": "button",
        "tabindex": -1
      }, [iconNode]);
    };
    return () => {
      var _a, _b;
      const {
        focused,
        value,
        disabled,
        allowClear,
        readonly,
        hidden,
        prefixCls,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        addonAfter = slots.addonAfter,
        addonBefore = slots.addonBefore,
        inputElement,
        affixWrapperClassName,
        wrapperClassName,
        groupClassName
      } = props;
      let element = cloneElement(inputElement, {
        value,
        hidden
      });
      if (hasPrefixSuffix({
        prefix,
        suffix,
        allowClear
      })) {
        const affixWrapperPrefixCls = `${prefixCls}-affix-wrapper`;
        const affixWrapperCls = classNames(affixWrapperPrefixCls, {
          [`${affixWrapperPrefixCls}-disabled`]: disabled,
          [`${affixWrapperPrefixCls}-focused`]: focused,
          [`${affixWrapperPrefixCls}-readonly`]: readonly,
          [`${affixWrapperPrefixCls}-input-with-clear-btn`]: suffix && allowClear && value
        }, !hasAddon$1({
          addonAfter,
          addonBefore
        }) && attrs.class, affixWrapperClassName);
        const suffixNode = (suffix || allowClear) && createVNode("span", {
          "class": `${prefixCls}-suffix`
        }, [getClearIcon(), suffix]);
        element = createVNode("span", {
          "class": affixWrapperCls,
          "style": attrs.style,
          "hidden": !hasAddon$1({
            addonAfter,
            addonBefore
          }) && hidden,
          "onMousedown": onInputMouseDown,
          "ref": containerRef
        }, [prefix && createVNode("span", {
          "class": `${prefixCls}-prefix`
        }, [prefix]), cloneElement(inputElement, {
          style: null,
          value,
          hidden: null
        }), suffixNode]);
      }
      if (hasAddon$1({
        addonAfter,
        addonBefore
      })) {
        const wrapperCls = `${prefixCls}-group`;
        const addonCls = `${wrapperCls}-addon`;
        const mergedWrapperClassName = classNames(`${prefixCls}-wrapper`, wrapperCls, wrapperClassName);
        const mergedGroupClassName = classNames(`${prefixCls}-group-wrapper`, attrs.class, groupClassName);
        return createVNode("span", {
          "class": mergedGroupClassName,
          "style": attrs.style,
          "hidden": hidden
        }, [createVNode("span", {
          "class": mergedWrapperClassName
        }, [addonBefore && createVNode("span", {
          "class": addonCls
        }, [addonBefore]), cloneElement(element, {
          style: null,
          hidden: null
        }), addonAfter && createVNode("span", {
          "class": addonCls
        }, [addonAfter])])]);
      }
      return element;
    };
  }
});
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const VcInput = defineComponent({
  name: "VCInput",
  inheritAttrs: false,
  props: inputProps$1(),
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const stateValue = shallowRef(props.value === void 0 ? props.defaultValue : props.value);
    const focused = shallowRef(false);
    const inputRef = shallowRef();
    const rootRef = shallowRef();
    watch(() => props.value, () => {
      stateValue.value = props.value;
    });
    watch(() => props.disabled, () => {
      if (props.disabled) {
        focused.value = false;
      }
    });
    const focus = (option) => {
      if (inputRef.value) {
        triggerFocus(inputRef.value, option);
      }
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const setSelectionRange = (start, end, direction) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction);
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: inputRef,
      stateValue,
      setSelectionRange,
      select
    });
    const triggerChange = (e) => {
      emit("change", e);
    };
    const setValue = (value, callback) => {
      if (stateValue.value === value) {
        return;
      }
      if (props.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(() => {
          var _a;
          if (inputRef.value.value !== stateValue.value) {
            (_a = rootRef.value) === null || _a === void 0 ? void 0 : _a.$forceUpdate();
          }
        });
      }
      nextTick(() => {
        callback && callback();
      });
    };
    const handleChange = (e) => {
      const {
        value,
        composing
      } = e.target;
      if ((e.isComposing || composing) && props.lazy || stateValue.value === value)
        return;
      const newVal = e.target.value;
      resolveOnChange(inputRef.value, e, triggerChange);
      setValue(newVal);
    };
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        emit("pressEnter", e);
      }
      emit("keydown", e);
    };
    const handleFocus = (e) => {
      focused.value = true;
      emit("focus", e);
    };
    const handleBlur = (e) => {
      focused.value = false;
      emit("blur", e);
    };
    const handleReset = (e) => {
      resolveOnChange(inputRef.value, e, triggerChange);
      setValue("", () => {
        focus();
      });
    };
    const getInputElement = () => {
      var _a, _b;
      const {
        addonBefore = slots.addonBefore,
        addonAfter = slots.addonAfter,
        disabled,
        valueModifiers = {},
        htmlSize,
        autocomplete,
        prefixCls,
        inputClassName,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        allowClear,
        type = "text"
      } = props;
      const otherProps = omit(props, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        "defaultValue",
        "size",
        "bordered",
        "htmlSize",
        "lazy",
        "showCount",
        "valueModifiers",
        "showCount",
        "affixWrapperClassName",
        "groupClassName",
        "inputClassName",
        "wrapperClassName"
      ]);
      const inputProps2 = _extends(_extends(_extends({}, otherProps), attrs), {
        autocomplete,
        onChange: handleChange,
        onInput: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeydown: handleKeyDown,
        class: classNames(prefixCls, {
          [`${prefixCls}-disabled`]: disabled
        }, inputClassName, !hasAddon$1({
          addonAfter,
          addonBefore
        }) && !hasPrefixSuffix({
          prefix,
          suffix,
          allowClear
        }) && attrs.class),
        ref: inputRef,
        key: "ant-input",
        size: htmlSize,
        type
      });
      if (valueModifiers.lazy) {
        delete inputProps2.onInput;
      }
      if (!inputProps2.autofocus) {
        delete inputProps2.autofocus;
      }
      const inputNode = createVNode("input", omit(inputProps2, ["size"]), null);
      return withDirectives(inputNode, [[antInputDirective]]);
    };
    const getSuffix = () => {
      var _a;
      const {
        maxlength,
        suffix = (_a = slots.suffix) === null || _a === void 0 ? void 0 : _a.call(slots),
        showCount,
        prefixCls
      } = props;
      const hasMaxLength = Number(maxlength) > 0;
      if (suffix || showCount) {
        const valueLength = [...fixControlledValue(stateValue.value)].length;
        const dataCount = typeof showCount === "object" ? showCount.formatter({
          count: valueLength,
          maxlength
        }) : `${valueLength}${hasMaxLength ? ` / ${maxlength}` : ""}`;
        return createVNode(Fragment, null, [!!showCount && createVNode("span", {
          "class": classNames(`${prefixCls}-show-count-suffix`, {
            [`${prefixCls}-show-count-has-suffix`]: !!suffix
          })
        }, [dataCount]), suffix]);
      }
      return null;
    };
    return () => {
      const {
        prefixCls,
        disabled
      } = props, rest = __rest$3(props, ["prefixCls", "disabled"]);
      return createVNode(BaseInput, _objectSpread$8(_objectSpread$8(_objectSpread$8({}, rest), attrs), {}, {
        "ref": rootRef,
        "prefixCls": prefixCls,
        "inputElement": getInputElement(),
        "handleReset": handleReset,
        "value": fixControlledValue(stateValue.value),
        "focused": focused.value,
        "triggerFocus": focus,
        "suffix": getSuffix(),
        "disabled": disabled
      }), slots);
    };
  }
});
const inputProps = () => {
  return omit(inputProps$1(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]);
};
const textAreaProps = () => _extends(_extends({}, omit(inputProps(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
  rows: Number,
  autosize: {
    type: [Boolean, Object],
    default: void 0
  },
  autoSize: {
    type: [Boolean, Object],
    default: void 0
  },
  onResize: {
    type: Function
  },
  onCompositionstart: eventType(),
  onCompositionend: eventType(),
  valueModifiers: Object
});
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const Input = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInput",
  inheritAttrs: false,
  props: inputProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const inputRef = ref();
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props.status));
    const {
      direction,
      prefixCls,
      size,
      autocomplete
    } = useConfigInject("input", props);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const mergedSize = computed(() => {
      return compactSize.value || size.value;
    });
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const disabled = useInjectDisabled();
    const focus = (option) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus(option);
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const setSelectionRange = (start, end, direction2) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction2);
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: inputRef,
      setSelectionRange,
      select
    });
    const removePasswordTimeoutRef = ref([]);
    const removePasswordTimeout = () => {
      removePasswordTimeoutRef.value.push(setTimeout(() => {
        var _a, _b, _c, _d;
        if (((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.value) === null || _b === void 0 ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.value) === null || _c === void 0 ? void 0 : _c.input.hasAttribute("value"))) {
          (_d = inputRef.value) === null || _d === void 0 ? void 0 : _d.input.removeAttribute("value");
        }
      }));
    };
    const handleBlur = (e) => {
      removePasswordTimeout();
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    const handleFocus = (e) => {
      removePasswordTimeout();
      emit("focus", e);
    };
    const triggerChange = (e) => {
      emit("update:value", e.target.value);
      emit("change", e);
      emit("input", e);
      formItemContext.onFieldChange();
    };
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const {
        hasFeedback,
        feedbackIcon
      } = formItemInputContext;
      const {
        allowClear,
        bordered = true,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        addonAfter = (_c = slots.addonAfter) === null || _c === void 0 ? void 0 : _c.call(slots),
        addonBefore = (_d = slots.addonBefore) === null || _d === void 0 ? void 0 : _d.call(slots),
        id = (_e = formItemContext.id) === null || _e === void 0 ? void 0 : _e.value
      } = props, rest = __rest$2(props, ["allowClear", "bordered", "prefix", "suffix", "addonAfter", "addonBefore", "id"]);
      const suffixNode = (hasFeedback || suffix) && createVNode(Fragment, null, [suffix, hasFeedback && feedbackIcon]);
      const prefixClsValue = prefixCls.value;
      const inputHasPrefixSuffix = hasPrefixSuffix({
        prefix,
        suffix
      }) || !!hasFeedback;
      const clearIcon = slots.clearIcon || (() => createVNode(CloseCircleFilled$1, null, null));
      return wrapSSR(createVNode(VcInput, _objectSpread$8(_objectSpread$8(_objectSpread$8({}, attrs), omit(rest, ["onUpdate:value", "onChange", "onInput"])), {}, {
        "onChange": triggerChange,
        "id": id,
        "disabled": (_f = props.disabled) !== null && _f !== void 0 ? _f : disabled.value,
        "ref": inputRef,
        "prefixCls": prefixClsValue,
        "autocomplete": autocomplete.value,
        "onBlur": handleBlur,
        "onFocus": handleFocus,
        "prefix": prefix,
        "suffix": suffixNode,
        "allowClear": allowClear,
        "addonAfter": addonAfter && createVNode(NoCompactStyle, null, {
          default: () => [createVNode(NoFormStatus, null, {
            default: () => [addonAfter]
          })]
        }),
        "addonBefore": addonBefore && createVNode(NoCompactStyle, null, {
          default: () => [createVNode(NoFormStatus, null, {
            default: () => [addonBefore]
          })]
        }),
        "class": [attrs.class, compactItemClassnames.value],
        "inputClassName": classNames({
          [`${prefixClsValue}-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-rtl`]: direction.value === "rtl",
          [`${prefixClsValue}-borderless`]: !bordered
        }, !inputHasPrefixSuffix && getStatusClassNames(prefixClsValue, mergedStatus.value), hashId.value),
        "affixWrapperClassName": classNames({
          [`${prefixClsValue}-affix-wrapper-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-affix-wrapper-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-affix-wrapper-rtl`]: direction.value === "rtl",
          [`${prefixClsValue}-affix-wrapper-borderless`]: !bordered
        }, getStatusClassNames(`${prefixClsValue}-affix-wrapper`, mergedStatus.value, hasFeedback), hashId.value),
        "wrapperClassName": classNames({
          [`${prefixClsValue}-group-rtl`]: direction.value === "rtl"
        }, hashId.value),
        "groupClassName": classNames({
          [`${prefixClsValue}-group-wrapper-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-group-wrapper-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-group-wrapper-rtl`]: direction.value === "rtl"
        }, getStatusClassNames(`${prefixClsValue}-group-wrapper`, mergedStatus.value, hasFeedback), hashId.value)
      }), _extends(_extends({}, slots), {
        clearIcon
      })));
    };
  }
});
const Group = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputGroup",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction,
      getPrefixCls
    } = useConfigInject("input-group", props);
    const formItemInputContext = FormItemInputContext.useInject();
    FormItemInputContext.useProvide(formItemInputContext, {
      isFormItemInput: false
    });
    const inputPrefixCls = computed(() => getPrefixCls("input"));
    const [wrapSSR, hashId] = useStyle(inputPrefixCls);
    const cls = computed(() => {
      const pre = prefixCls.value;
      return {
        [`${pre}`]: true,
        [hashId.value]: true,
        [`${pre}-lg`]: props.size === "large",
        [`${pre}-sm`]: props.size === "small",
        [`${pre}-compact`]: props.compact,
        [`${pre}-rtl`]: direction.value === "rtl"
      };
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("span", _objectSpread$8(_objectSpread$8({}, attrs), {}, {
        "class": classNames(cls.value, attrs.class)
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const Search = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputSearch",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps()), {
    inputPrefixCls: String,
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: PropTypes.any,
    onSearch: {
      type: Function
    }
  }),
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const inputRef = shallowRef();
    const composedRef = shallowRef(false);
    const focus = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    const onChange = (e) => {
      emit("update:value", e.target.value);
      if (e && e.target && e.type === "click") {
        emit("search", e.target.value, e);
      }
      emit("change", e);
    };
    const onMousedown = (e) => {
      var _a;
      if ((void 0).activeElement === ((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input)) {
        e.preventDefault();
      }
    };
    const onSearch = (e) => {
      var _a, _b;
      emit("search", (_b = (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.stateValue, e);
    };
    const onPressEnter = (e) => {
      if (composedRef.value || props.loading) {
        return;
      }
      onSearch(e);
    };
    const handleOnCompositionStart = (e) => {
      composedRef.value = true;
      emit("compositionstart", e);
    };
    const handleOnCompositionEnd = (e) => {
      composedRef.value = false;
      emit("compositionend", e);
    };
    const {
      prefixCls,
      getPrefixCls,
      direction,
      size
    } = useConfigInject("input-search", props);
    const inputPrefixCls = computed(() => getPrefixCls("input", props.inputPrefixCls));
    return () => {
      var _a, _b, _c, _d;
      const {
        disabled,
        loading,
        addonAfter = (_a = slots.addonAfter) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots)
      } = props, restProps = __rest$1(props, ["disabled", "loading", "addonAfter", "suffix"]);
      let {
        enterButton = (_d = (_c = slots.enterButton) === null || _c === void 0 ? void 0 : _c.call(slots)) !== null && _d !== void 0 ? _d : false
      } = props;
      enterButton = enterButton || enterButton === "";
      const searchIcon = typeof enterButton === "boolean" ? createVNode(SearchOutlined$1, null, null) : null;
      const btnClassName = `${prefixCls.value}-button`;
      const enterButtonAsElement = Array.isArray(enterButton) ? enterButton[0] : enterButton;
      let button;
      const isAntdButton = enterButtonAsElement.type && isPlainObject(enterButtonAsElement.type) && enterButtonAsElement.type.__ANT_BUTTON;
      if (isAntdButton || enterButtonAsElement.tagName === "button") {
        button = cloneElement(enterButtonAsElement, _extends({
          onMousedown,
          onClick: onSearch,
          key: "enterButton"
        }, isAntdButton ? {
          class: btnClassName,
          size: size.value
        } : {}), false);
      } else {
        const iconOnly = searchIcon && !enterButton;
        button = createVNode(Button, {
          "class": btnClassName,
          "type": enterButton ? "primary" : void 0,
          "size": size.value,
          "disabled": disabled,
          "key": "enterButton",
          "onMousedown": onMousedown,
          "onClick": onSearch,
          "loading": loading,
          "icon": iconOnly ? searchIcon : null
        }, {
          default: () => [iconOnly ? null : searchIcon || enterButton]
        });
      }
      if (addonAfter) {
        button = [button, addonAfter];
      }
      const cls = classNames(prefixCls.value, {
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [`${prefixCls.value}-${size.value}`]: !!size.value,
        [`${prefixCls.value}-with-button`]: !!enterButton
      }, attrs.class);
      return createVNode(Input, _objectSpread$8(_objectSpread$8(_objectSpread$8({
        "ref": inputRef
      }, omit(restProps, ["onUpdate:value", "onSearch", "enterButton"])), attrs), {}, {
        "onPressEnter": onPressEnter,
        "onCompositionstart": handleOnCompositionStart,
        "onCompositionend": handleOnCompositionEnd,
        "size": size.value,
        "prefixCls": inputPrefixCls.value,
        "addonAfter": button,
        "suffix": suffix,
        "onChange": onChange,
        "class": cls,
        "disabled": disabled
      }), slots);
    };
  }
});
const isValid = (value) => {
  return value !== void 0 && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
function hasAddon(propsAndSlots) {
  return isValid(propsAndSlots.addonBefore) || isValid(propsAndSlots.addonAfter);
}
const ClearableInputType = ["text", "input"];
const ClearableLabeledInput = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ClearableLabeledInput",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    inputType: PropTypes.oneOf(tuple("text", "input")),
    value: anyType(),
    defaultValue: anyType(),
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: anyType(),
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: anyType(),
    prefix: anyType(),
    addonBefore: anyType(),
    addonAfter: anyType(),
    readonly: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: true
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean,
    status: String,
    hashId: String
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const statusContext = FormItemInputContext.useInject();
    const renderClearIcon = (prefixCls) => {
      const {
        value,
        disabled,
        readonly,
        handleReset,
        suffix = slots.suffix
      } = props;
      const needClear = !disabled && !readonly && value;
      const className = `${prefixCls}-clear-icon`;
      return createVNode(CloseCircleFilled$1, {
        "onClick": handleReset,
        "onMousedown": (e) => e.preventDefault(),
        "class": classNames({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        "role": "button"
      }, null);
    };
    const renderTextAreaWithClearIcon = (prefixCls, element) => {
      const {
        value,
        allowClear,
        direction,
        bordered,
        hidden,
        status: customStatus,
        addonAfter = slots.addonAfter,
        addonBefore = slots.addonBefore,
        hashId
      } = props;
      const {
        status: contextStatus,
        hasFeedback
      } = statusContext;
      if (!allowClear) {
        return cloneElement(element, {
          value,
          disabled: props.disabled
        });
      }
      const affixWrapperCls = classNames(`${prefixCls}-affix-wrapper`, `${prefixCls}-affix-wrapper-textarea-with-clear-btn`, getStatusClassNames(`${prefixCls}-affix-wrapper`, getMergedStatus(contextStatus, customStatus), hasFeedback), {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        // className will go to addon wrapper
        [`${attrs.class}`]: !hasAddon({
          addonAfter,
          addonBefore
        }) && attrs.class
      }, hashId);
      return createVNode("span", {
        "class": affixWrapperCls,
        "style": attrs.style,
        "hidden": hidden
      }, [cloneElement(element, {
        style: null,
        value,
        disabled: props.disabled
      }), renderClearIcon(prefixCls)]);
    };
    return () => {
      var _a;
      const {
        prefixCls,
        inputType,
        element = (_a = slots.element) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props;
      if (inputType === ClearableInputType[0]) {
        return renderTextAreaWithClearIcon(prefixCls, element);
      }
      return null;
    };
  }
});
const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`;
const SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"];
const computedStyleCache = {};
let hiddenTextarea;
function calculateNodeStyling(node) {
  let useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  const style = (void 0).getComputedStyle(node);
  const boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  const paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  const sizingStyle = SIZING_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  let useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  let maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = (void 0).createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    (void 0).body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  const {
    paddingSize,
    borderSize,
    boxSizing,
    sizingStyle
  } = calculateNodeStyling(uiTextNode, useCache);
  hiddenTextarea.setAttribute("style", `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  let minHeight = void 0;
  let maxHeight = void 0;
  let overflowY;
  let height = hiddenTextarea.scrollHeight;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  const style = {
    height: `${height}px`,
    overflowY,
    resize: "none"
  };
  if (minHeight) {
    style.minHeight = `${minHeight}px`;
  }
  if (maxHeight) {
    style.maxHeight = `${maxHeight}px`;
  }
  return style;
}
const RESIZE_START = 0;
const RESIZE_MEASURING = 1;
const RESIZE_STABLE = 2;
const ResizableTextArea = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ResizableTextArea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup(props, _ref) {
    let {
      attrs,
      emit,
      expose
    } = _ref;
    const textAreaRef = ref();
    const textareaStyles = ref({});
    const resizeStatus = ref(RESIZE_STABLE);
    const fixFirefoxAutoScroll = () => {
      try {
        if ((void 0).activeElement === textAreaRef.value) {
          const currentStart = textAreaRef.value.selectionStart;
          const currentEnd = textAreaRef.value.selectionEnd;
          const scrollTop = textAreaRef.value.scrollTop;
          textAreaRef.value.setSelectionRange(currentStart, currentEnd);
          textAreaRef.value.scrollTop = scrollTop;
        }
      } catch (e) {
      }
    };
    const minRows = ref();
    const maxRows = ref();
    watchEffect(() => {
      const autoSize = props.autoSize || props.autosize;
      if (autoSize) {
        minRows.value = autoSize.minRows;
        maxRows.value = autoSize.maxRows;
      } else {
        minRows.value = void 0;
        maxRows.value = void 0;
      }
    });
    const needAutoSize = computed(() => !!(props.autoSize || props.autosize));
    const startResize = () => {
      resizeStatus.value = RESIZE_START;
    };
    watch([() => props.value, minRows, maxRows, needAutoSize], () => {
      if (needAutoSize.value) {
        startResize();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const autoSizeStyle = ref();
    watch([resizeStatus, textAreaRef], () => {
      if (!textAreaRef.value)
        return;
      if (resizeStatus.value === RESIZE_START) {
        resizeStatus.value = RESIZE_MEASURING;
      } else if (resizeStatus.value === RESIZE_MEASURING) {
        const textareaStyles2 = calculateAutoSizeStyle(textAreaRef.value, false, minRows.value, maxRows.value);
        resizeStatus.value = RESIZE_STABLE;
        autoSizeStyle.value = textareaStyles2;
      } else {
        fixFirefoxAutoScroll();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const instance = getCurrentInstance();
    const resizeRafRef = ref();
    const cleanRaf = () => {
      wrapperRaf.cancel(resizeRafRef.value);
    };
    const onInternalResize = (size) => {
      if (resizeStatus.value === RESIZE_STABLE) {
        emit("resize", size);
        if (needAutoSize.value) {
          cleanRaf();
          resizeRafRef.value = wrapperRaf(() => {
            startResize();
          });
        }
      }
    };
    const resizeTextarea = () => {
      startResize();
    };
    expose({
      resizeTextarea,
      textArea: textAreaRef,
      instance
    });
    warning(props.autosize === void 0);
    const renderTextArea = () => {
      const {
        prefixCls,
        disabled
      } = props;
      const otherProps = omit(props, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "lazy", "maxlength", "valueModifiers"]);
      const cls = classNames(prefixCls, attrs.class, {
        [`${prefixCls}-disabled`]: disabled
      });
      const mergedAutoSizeStyle = needAutoSize.value ? autoSizeStyle.value : null;
      const style = [attrs.style, textareaStyles.value, mergedAutoSizeStyle];
      const textareaProps = _extends(_extends(_extends({}, otherProps), attrs), {
        style,
        class: cls
      });
      if (resizeStatus.value === RESIZE_START || resizeStatus.value === RESIZE_MEASURING) {
        style.push({
          overflowX: "hidden",
          overflowY: "hidden"
        });
      }
      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }
      if (textareaProps.rows === 0) {
        delete textareaProps.rows;
      }
      return createVNode(ResizeObserver, {
        "onResize": onInternalResize,
        "disabled": !needAutoSize.value
      }, {
        default: () => [withDirectives(createVNode("textarea", _objectSpread$8(_objectSpread$8({}, textareaProps), {}, {
          "ref": textAreaRef
        }), null), [[antInputDirective]])]
      });
    };
    return () => {
      return renderTextArea();
    };
  }
});
const ResizableTextArea$1 = ResizableTextArea;
function fixEmojiLength(value, maxLength) {
  return [...value || ""].slice(0, maxLength).join("");
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  let newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if ([...preValue || ""].length < triggerValue.length && [...triggerValue || ""].length > maxLength) {
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
const __nuxt_component_1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATextarea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup(props, _ref) {
    let {
      attrs,
      expose,
      emit
    } = _ref;
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props.status));
    const stateValue = shallowRef(props.value === void 0 ? props.defaultValue : props.value);
    const resizableTextArea = shallowRef();
    const mergedValue = shallowRef("");
    const {
      prefixCls,
      size,
      direction
    } = useConfigInject("input", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const disabled = useInjectDisabled();
    const showCount = computed(() => {
      return props.showCount === "" || props.showCount || false;
    });
    const hasMaxLength = computed(() => Number(props.maxlength) > 0);
    const compositing = shallowRef(false);
    const oldCompositionValueRef = shallowRef();
    const oldSelectionStartRef = shallowRef(0);
    const onInternalCompositionStart = (e) => {
      compositing.value = true;
      oldCompositionValueRef.value = mergedValue.value;
      oldSelectionStartRef.value = e.currentTarget.selectionStart;
      emit("compositionstart", e);
    };
    const onInternalCompositionEnd = (e) => {
      var _a;
      compositing.value = false;
      let triggerValue = e.currentTarget.value;
      if (hasMaxLength.value) {
        const isCursorInEnd = oldSelectionStartRef.value >= props.maxlength + 1 || oldSelectionStartRef.value === ((_a = oldCompositionValueRef.value) === null || _a === void 0 ? void 0 : _a.length);
        triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.value, triggerValue, props.maxlength);
      }
      if (triggerValue !== mergedValue.value) {
        setValue(triggerValue);
        resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      }
      emit("compositionend", e);
    };
    const instance = getCurrentInstance();
    watch(() => props.value, () => {
      var _a;
      if ("value" in instance.vnode.props || {}) {
        stateValue.value = (_a = props.value) !== null && _a !== void 0 ? _a : "";
      }
    });
    const focus = (option) => {
      var _a;
      triggerFocus((_a = resizableTextArea.value) === null || _a === void 0 ? void 0 : _a.textArea, option);
    };
    const blur = () => {
      var _a, _b;
      (_b = (_a = resizableTextArea.value) === null || _a === void 0 ? void 0 : _a.textArea) === null || _b === void 0 ? void 0 : _b.blur();
    };
    const setValue = (value, callback) => {
      if (stateValue.value === value) {
        return;
      }
      if (props.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(() => {
          var _a, _b, _c;
          if (resizableTextArea.value.textArea.value !== mergedValue.value) {
            (_c = (_a = resizableTextArea.value) === null || _a === void 0 ? void 0 : (_b = _a.instance).update) === null || _c === void 0 ? void 0 : _c.call(_b);
          }
        });
      }
      nextTick(() => {
        callback && callback();
      });
    };
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        emit("pressEnter", e);
      }
      emit("keydown", e);
    };
    const onBlur = (e) => {
      const {
        onBlur: onBlur2
      } = props;
      onBlur2 === null || onBlur2 === void 0 ? void 0 : onBlur2(e);
      formItemContext.onFieldBlur();
    };
    const triggerChange = (e) => {
      emit("update:value", e.target.value);
      emit("change", e);
      emit("input", e);
      formItemContext.onFieldChange();
    };
    const handleReset = (e) => {
      resolveOnChange(resizableTextArea.value.textArea, e, triggerChange);
      setValue("", () => {
        focus();
      });
    };
    const handleChange = (e) => {
      const {
        composing
      } = e.target;
      let triggerValue = e.target.value;
      compositing.value = !!(e.isComposing || composing);
      if (compositing.value && props.lazy || stateValue.value === triggerValue)
        return;
      if (hasMaxLength.value) {
        const target = e.target;
        const isCursorInEnd = target.selectionStart >= props.maxlength + 1 || target.selectionStart === triggerValue.length || !target.selectionStart;
        triggerValue = setTriggerValue(isCursorInEnd, mergedValue.value, triggerValue, props.maxlength);
      }
      resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      setValue(triggerValue);
    };
    const renderTextArea = () => {
      var _a, _b;
      const {
        class: customClass
      } = attrs;
      const {
        bordered = true
      } = props;
      const resizeProps = _extends(_extends(_extends({}, omit(props, ["allowClear"])), attrs), {
        class: [{
          [`${prefixCls.value}-borderless`]: !bordered,
          [`${customClass}`]: customClass && !showCount.value,
          [`${prefixCls.value}-sm`]: size.value === "small",
          [`${prefixCls.value}-lg`]: size.value === "large"
        }, getStatusClassNames(prefixCls.value, mergedStatus.value), hashId.value],
        disabled: disabled.value,
        showCount: null,
        prefixCls: prefixCls.value,
        onInput: handleChange,
        onChange: handleChange,
        onBlur,
        onKeydown: handleKeyDown,
        onCompositionstart: onInternalCompositionStart,
        onCompositionend: onInternalCompositionEnd
      });
      if ((_a = props.valueModifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
        delete resizeProps.onInput;
      }
      return createVNode(ResizableTextArea$1, _objectSpread$8(_objectSpread$8({}, resizeProps), {}, {
        "id": (_b = resizeProps === null || resizeProps === void 0 ? void 0 : resizeProps.id) !== null && _b !== void 0 ? _b : formItemContext.id.value,
        "ref": resizableTextArea,
        "maxlength": props.maxlength
      }), null);
    };
    expose({
      focus,
      blur,
      resizableTextArea
    });
    watchEffect(() => {
      let val = fixControlledValue(stateValue.value);
      if (!compositing.value && hasMaxLength.value && (props.value === null || props.value === void 0)) {
        val = fixEmojiLength(val, props.maxlength);
      }
      mergedValue.value = val;
    });
    return () => {
      var _a;
      const {
        maxlength,
        bordered = true,
        hidden
      } = props;
      const {
        style,
        class: customClass
      } = attrs;
      const inputProps2 = _extends(_extends(_extends({}, props), attrs), {
        prefixCls: prefixCls.value,
        inputType: "text",
        handleReset,
        direction: direction.value,
        bordered,
        style: showCount.value ? void 0 : style,
        hashId: hashId.value,
        disabled: (_a = props.disabled) !== null && _a !== void 0 ? _a : disabled.value
      });
      let textareaNode = createVNode(ClearableLabeledInput, _objectSpread$8(_objectSpread$8({}, inputProps2), {}, {
        "value": mergedValue.value,
        "status": props.status
      }), {
        element: renderTextArea
      });
      if (showCount.value || formItemInputContext.hasFeedback) {
        const valueLength = [...mergedValue.value].length;
        let dataCount = "";
        if (typeof showCount.value === "object") {
          dataCount = showCount.value.formatter({
            value: mergedValue.value,
            count: valueLength,
            maxlength
          });
        } else {
          dataCount = `${valueLength}${hasMaxLength.value ? ` / ${maxlength}` : ""}`;
        }
        textareaNode = createVNode("div", {
          "hidden": hidden,
          "class": classNames(`${prefixCls.value}-textarea`, {
            [`${prefixCls.value}-textarea-rtl`]: direction.value === "rtl",
            [`${prefixCls.value}-textarea-show-count`]: showCount.value,
            [`${prefixCls.value}-textarea-in-form-item`]: formItemInputContext.isFormItemInput
          }, `${prefixCls.value}-textarea-show-count`, customClass, hashId.value),
          "style": style,
          "data-count": typeof dataCount !== "object" ? dataCount : void 0
        }, [textareaNode, formItemInputContext.hasFeedback && createVNode("span", {
          "class": `${prefixCls.value}-textarea-suffix`
        }, [formItemInputContext.feedbackIcon])]);
      }
      return wrapSSR(textareaNode);
    };
  }
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const ActionMap = {
  click: "onClick",
  hover: "onMouseover"
};
const defaultIconRender = (visible) => visible ? createVNode(EyeOutlined$1, null, null) : createVNode(EyeInvisibleOutlined$1, null, null);
const Password = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputPassword",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps()), {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: "click"
    },
    visibilityToggle: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    "onUpdate:visible": Function,
    iconRender: Function
  }),
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const visible = shallowRef(false);
    const onVisibleChange = () => {
      const {
        disabled
      } = props;
      if (disabled) {
        return;
      }
      visible.value = !visible.value;
      emit("update:visible", visible.value);
    };
    watchEffect(() => {
      if (props.visible !== void 0) {
        visible.value = !!props.visible;
      }
    });
    const inputRef = shallowRef();
    const focus = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    const getIcon = (prefixCls2) => {
      const {
        action,
        iconRender = slots.iconRender || defaultIconRender
      } = props;
      const iconTrigger = ActionMap[action] || "";
      const icon = iconRender(visible.value);
      const iconProps = {
        [iconTrigger]: onVisibleChange,
        class: `${prefixCls2}-icon`,
        key: "passwordIcon",
        onMousedown: (e) => {
          e.preventDefault();
        },
        onMouseup: (e) => {
          e.preventDefault();
        }
      };
      return cloneElement(isValidElement(icon) ? icon : createVNode("span", null, [icon]), iconProps);
    };
    const {
      prefixCls,
      getPrefixCls
    } = useConfigInject("input-password", props);
    const inputPrefixCls = computed(() => getPrefixCls("input", props.inputPrefixCls));
    const renderPassword = () => {
      const {
        size,
        visibilityToggle
      } = props, restProps = __rest(props, ["size", "visibilityToggle"]);
      const suffixIcon = visibilityToggle && getIcon(prefixCls.value);
      const inputClassName = classNames(prefixCls.value, attrs.class, {
        [`${prefixCls.value}-${size}`]: !!size
      });
      const omittedProps = _extends(_extends(_extends({}, omit(restProps, ["suffix", "iconRender", "action"])), attrs), {
        type: visible.value ? "text" : "password",
        class: inputClassName,
        prefixCls: inputPrefixCls.value,
        suffix: suffixIcon
      });
      if (size) {
        omittedProps.size = size;
      }
      return createVNode(Input, _objectSpread$8({
        "ref": inputRef
      }, omittedProps), slots);
    };
    return () => {
      return renderPassword();
    };
  }
});
Input.Group = Group;
Input.Search = Search;
Input.TextArea = __nuxt_component_1;
Input.Password = Password;
Input.install = function(app) {
  app.component(Input.name, Input);
  app.component(Input.Group.name, Input.Group);
  app.component(Input.Search.name, Input.Search);
  app.component(Input.TextArea.name, Input.TextArea);
  app.component(Input.Password.name, Input.Password);
  return app;
};
const image = "" + buildAssetsURL("Photo2.xdkD7xhW.png");
const _sfc_main = {
  __name: "AttorneyFormSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIInputAuthInput = __nuxt_component_0;
      const _component_a_textarea = __nuxt_component_1;
      const _component_UIButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "attorneyFormSection",
        class: ""
      }, _attrs))} data-v-ff0ad268><div style="${ssrRenderStyle({
        backgroundImage: `url(${unref(image)})`
      })}" class="flex w-full object-cover justify-center items-start h-auto py-20 lg:py-40" data-v-ff0ad268><div class="bg-[#1F2732] container min-h-[349px] w-full p-4" data-v-ff0ad268><div class="flex flex-col justify-between py-10 lg:px-40 gap-4" data-v-ff0ad268><div class="flex lg:flex-row flex-col gap-4 w-full" data-v-ff0ad268>`);
      _push(ssrRenderComponent(_component_UIInputAuthInput, {
        error: false,
        type: "text",
        label: "Full Name *",
        placeholder: "Full Name *",
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIInputAuthInput, {
        label: "Email Address *",
        placeholder: "Email Address *",
        error: false,
        type: "email",
        required: ""
      }, null, _parent));
      _push(`</div><div class="flex lg:flex-row flex-col gap-4 w-full" data-v-ff0ad268>`);
      _push(ssrRenderComponent(_component_UIInputAuthInput, {
        label: "Phone Number *",
        placeholder: "Phone Number *",
        error: false,
        type: "tel",
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIInputAuthInput, {
        label: "Subject *",
        placeholder: "Subject *",
        error: false,
        type: "text",
        required: ""
      }, null, _parent));
      _push(`</div><div class="w-full font-light font-Satoshi400 text-[18px] outline-none bg-transparent text-[#D7D7D7] border-b-[#3A4553] !py-2 border-b-[1px] opacity-[0.8029] text-sm" data-v-ff0ad268>`);
      _push(ssrRenderComponent(_component_a_textarea, {
        class: "!w-full text-[18px] text-[#D7D7D7] font-medium placeholder:text-[#D7D7D7]",
        bordered: false,
        required: "",
        "auto-size": { minRows: 5, maxRows: 5 },
        placeholder: "Your Message *"
      }, null, _parent));
      _push(`</div><div class="flex justify-center" data-v-ff0ad268>`);
      _push(ssrRenderComponent(_component_UIButton, { class: "text-[#1F2732] bg-white text-[22px] !px-[45px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get An Appoinment `);
          } else {
            return [
              createTextVNode(" Get An Appoinment ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/PageSections/AttorneyFormSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff0ad268"]]);

export { Divider as D, FRANCIS_NWABUNWANNE as F, GAMALIEL_WORLY as G, IKOPEMUGH_NENGIM as I, SARAH_HAROLD_UKU as S, UZEZI_AMAWHE as U, __nuxt_component_0$2 as _, __nuxt_component_7 as a, _imports_0 as b, _imports_1 as c, DAVID_OKOROGBA as d, __nuxt_component_0$1 as e };
//# sourceMappingURL=AttorneyFormSection-A1mL90XW.mjs.map
