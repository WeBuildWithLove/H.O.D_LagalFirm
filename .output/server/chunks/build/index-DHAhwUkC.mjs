import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-DYkmRf5E.mjs';
import { inject, ref, h, getCurrentInstance, nextTick, reactive, defineComponent, createVNode, useSSRContext, onUpdated, onUnmounted, watch, computed, shallowRef, provide, Transition, watchEffect, Fragment, mergeProps, withCtx, unref, isVNode, Comment, Text, triggerRef, cloneVNode, withDirectives, openBlock, createBlock, createCommentVNode, render, defineAsyncComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute, a as useRouter, b as useToast } from './server.mjs';
import { LoopingRhombusesSpinner } from 'epic-spinners';
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

const _sfc_main$7 = {
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $options.dividerClass,
    style: $options.dividerStyle
  }, _attrs))}></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Divider/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Divider = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM7 5H6V7H7V5Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/BulletPoint.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$2 = "" + buildAssetsURL("roundLogo.CmZvON0_.jpeg");
const _imports_1$1 = "" + buildAssetsURL("whiteLogo.QHmFGgiR.png");
const _imports_2$1 = "data:image/svg+xml,%3csvg%20width='43'%20height='26'%20viewBox='0%200%2043%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20y1='1'%20x2='42'%20y2='1'%20stroke='white'%20stroke-width='2'/%3e%3cline%20y1='13'%20x2='42'%20y2='13'%20stroke='white'%20stroke-width='2'/%3e%3cline%20y1='25'%20x2='42'%20y2='25'%20stroke='white'%20stroke-width='2'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='35'%20height='12'%20viewBox='0%200%2035%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.226497%206L6%2011.7735L11.7735%206L6%200.226497L0.226497%206ZM35%205H6V7H35V5Z'%20fill='%23A70314'/%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3csvg%20width='18'%20height='19'%20viewBox='0%200%2018%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.9678%2013.4791V15.8877C16.9687%2016.1113%2016.9229%2016.3327%2016.8333%2016.5375C16.7438%2016.7424%2016.6124%2016.9263%2016.4476%2017.0775C16.2828%2017.2286%2016.0883%2017.3437%2015.8765%2017.4154C15.6647%2017.487%2015.4402%2017.5136%2015.2175%2017.4935C12.7469%2017.225%2010.3737%2016.3808%208.28865%2015.0286C6.34875%2013.7959%204.70406%2012.1512%203.47136%2010.2113C2.11448%208.11679%201.27006%205.73206%201.00652%203.25036C0.986453%203.02834%201.01284%202.80457%201.084%202.5933C1.15515%202.38203%201.26952%202.1879%201.41981%202.02325C1.57011%201.85861%201.75304%201.72706%201.95696%201.63699C2.16088%201.54691%202.38132%201.50029%202.60425%201.50008H5.0129C5.40254%201.49624%205.78028%201.63422%206.07572%201.8883C6.37116%202.14237%206.56413%202.49521%206.61866%202.88103C6.72032%203.65185%206.90886%204.4087%207.18068%205.13713C7.2887%205.4245%207.31208%205.73682%207.24804%206.03707C7.18401%206.33732%207.03525%206.61292%206.81938%206.83121L5.79972%207.85087C6.94267%209.86092%208.60696%2011.5252%2010.617%2012.6682L11.6367%2011.6485C11.855%2011.4326%2012.1306%2011.2839%2012.4308%2011.2198C12.7311%2011.1558%2013.0434%2011.1792%2013.3308%2011.2872C14.0592%2011.559%2014.816%2011.7476%2015.5869%2011.8492C15.9769%2011.9042%2016.333%2012.1007%2016.5877%2012.4012C16.8423%2012.7017%2016.9776%2013.0853%2016.9678%2013.4791Z'%20stroke='%23A70314'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _imports_5 = "data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.3019%2017.8333C13.9042%2017.8333%2017.635%2014.1024%2017.635%209.50014C17.635%204.89787%2013.9042%201.16699%209.3019%201.16699C4.69963%201.16699%200.96875%204.89787%200.96875%209.50014C0.96875%2014.1024%204.69963%2017.8333%209.3019%2017.8333Z'%20stroke='%23A70314'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.30078%204.5V9.49989L12.634%2011.1665'%20stroke='%23A70314'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _imports_6 = "data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.3021%203.1665H1.96875V13.8332H15.3021V3.1665ZM13.9687%205.83317L8.63542%209.1665L3.30208%205.83317V4.49984L8.63542%207.83317L13.9687%204.49984V5.83317Z'%20fill='%23A70314'/%3e%3c/svg%3e";
const _sfc_main$5 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const isMenuOpen = ref(false);
    const currentHash = ref("");
    watch(currentHash, (newHash) => {
      console.log(`Hash changed to: ${newHash}`);
    });
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
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Logo" height="101.76px" width="95px" class="hidden lg:flex"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="Logo" height="38px" width="123px" class="flex lg:hidden"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$2,
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
          _push(`<img${ssrRenderAttr("src", _imports_2$1)} alt="Open Menu" class="h-8 w-8">`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_2$1)} alt="Close Menu" class="h-8 w-8">`);
        }
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "lg:hidden flex space-x-4 items-center my-2 lg:my-0"
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
      _push(`</div><div class="w-full lg:py-3"><div class="hidden lg:flex flex-wrap justify-between px-2"><div class="flex gap-3.5 px-4"><a href="tel: +234 803 292 8072" class="flex space-x-1"><img${ssrRenderAttr("src", _imports_4)} alt="Call-Icon" height="16px" width="16px"><p>+234 803 292 8072</p></a><div class="flex space-x-1"><img${ssrRenderAttr("src", _imports_5)} alt="Time-Icon" height="16px" width="16px"><p>MONDAY - FRIDAY - 8:00AM - 4:00PM</p></div><a href="mailto:contact@hodlegal.org " class="flex space-x-1"><img${ssrRenderAttr("src", _imports_6)} alt="Email-Icon" height="16px" width="16px"><p>contact@hodlegal.org</p></a></div><div>BARRISTERS | SOLICITORS | CORPORATE CONSULTANTS</div></div><div class="my-3 bg-card lg:flex hidden">`);
      _push(ssrRenderComponent(_component_UIDivider, {
        direction: "horizontal",
        width: "2px"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass(`flex-col lg:flex-row items-center  animate__animated w-full lg:w-auto lg:flex transition-all duration-500 ease-in-out transform ${isMenuOpen.value ? "animate__fadeInLeft -translate-x-[100%] animate__animated sticky z-20 lg:h-auto h-screen " : "hidden "}`)}"><div class="flex flex-col lg:flex-row lg:flex-wrap justify-between items-left w-full lg:px-2 text-white lg:text-[#3A3A38]"><div class="flex flex-col lg:flex-row lg:gap-4 gap-7 px-4">`);
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
      if (unref(route).name === "index") {
        _push(`<a href="#about" class="flex space-x-4 items-center my-2 lg:my-0">`);
        _push(ssrRenderComponent(_component_UIIconBulletPoint, {
          class: [{
            " !text-[#A70314] ": currentHash.value === "#about"
          }, "text-white lg:text-[#001025]"]
        }, null, _parent));
        _push(`<p class="${ssrRenderClass([{
          " !text-[#A70314] ": currentHash.value === "#about"
        }, "text-[16px] text-white lg:text-[#222222] font-medium"])}"> ABOUT </p></a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).name === "index") {
        _push(`<a href="#services" class="flex space-x-4 items-center my-2 lg:my-0">`);
        _push(ssrRenderComponent(_component_UIIconBulletPoint, {
          class: [{
            " !text-[#A70314] ": currentHash.value === "#services"
          }, "text-white lg:text-[#001025]"]
        }, null, _parent));
        _push(`<p class="${ssrRenderClass([{
          " !text-[#A70314] ": currentHash.value === "#services"
        }, "text-[16px] text-white lg:text-[#222222] font-medium"])}"> SERVICES </p></a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).name === "index") {
        _push(`<a href="#ideology" class="flex space-x-4 items-center my-2 lg:my-0">`);
        _push(ssrRenderComponent(_component_UIIconBulletPoint, {
          class: [{
            " !text-[#A70314] ": currentHash.value === "#ideology"
          }, "text-white lg:text-[#001025]"]
        }, null, _parent));
        _push(`<p class="${ssrRenderClass([{
          " !text-[#A70314] ": currentHash.value === "#ideology"
        }, "text-[16px] text-white lg:text-[#222222] font-medium"])}"> CORE IDEOLOGY </p></a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).name === "index") {
        _push(`<a href="#firm" class="flex space-x-4 items-center my-2 lg:my-0">`);
        _push(ssrRenderComponent(_component_UIIconBulletPoint, {
          class: [{
            " !text-[#A70314] ": currentHash.value === "#firm"
          }, "text-white lg:text-[#001025]"]
        }, null, _parent));
        _push(`<p class="${ssrRenderClass([{
          " !text-[#A70314] ": currentHash.value === "#firm"
        }, "text-[16px] text-white lg:text-[#222222] font-medium"])}"> OUR FIRM </p></a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).name === "index") {
        _push(`<a href="#attorneyFormSection" class="flex space-x-4 items-center my-2 lg:my-0">`);
        _push(ssrRenderComponent(_component_UIIconBulletPoint, {
          class: [{
            " !text-[#A70314] ": currentHash.value === "#attorneyFormSection"
          }, "text-white lg:text-[#001025]"]
        }, null, _parent));
        _push(`<p class="${ssrRenderClass([{
          " !text-[#A70314] ": currentHash.value === "#attorneyFormSection"
        }, "text-[16px] text-white lg:text-[#222222] font-medium"])}"> CONTACT </p></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><a href="#attorneyFormSection" class="text-light lg:flex hidden hover:bg-brand hover:text-white py-2 px-4 rounded-lg border border-[#E7E7E7]focus:outline-none focus:ring">FREE CONSULTATION</a></div></div></div></header>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/NavBar/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props2, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$5;
const _imports_0$1 = "" + buildAssetsURL("JusticeStatus.M8Ovtrko.svg");
const _imports_1 = "" + buildAssetsURL("AboutProfile.C7UIML1i.svg");
const _sfc_main$4 = {
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: [$options.buttonClass, "py-2 px-4 rounded-lg border border-[#E7E7E7] focus:outline-none focus:ring"],
    style: $options.buttonStyle
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Button/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const GAMALIEL_WORLY = "" + buildAssetsURL("GAMALIEL_WORLY.D57o7Cpg.jpeg");
const HAROLD_UKU = "" + buildAssetsURL("HAROLD_UKU.jz2IM-M1.jpeg");
const SARAH_HAROLD_UKU = "" + buildAssetsURL("SARAH_HAROLD_UKU.BfcygmeB.jpeg");
const UZEZI_AMAWHE = "" + buildAssetsURL("UZEZI_AMAWHE.B0SvnQic.jpeg");
const IKOPEMUGH_NENGIM = "" + buildAssetsURL("IKOPEMUGH_NENGIM.CEDtBBZ-.jpeg");
const FRANCIS_NWABUNWANNE = "" + buildAssetsURL("FRANCIS_NWABUNWANNE.Bx5HteLK.jpeg");
const DAVID_OKOROGBA = "" + buildAssetsURL("DAVID_OKOROGBA.nj1kjJ1g.jpeg");
const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Input/AuthInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
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
const _sfc_main$2 = {
  __name: "AttorneyFormSection",
  __ssrInlineRender: true,
  props: ["formData"],
  emits: ["closeModal", "formSubmitted"],
  setup(__props, { emit: __emit }) {
    useToast();
    const props = __props;
    const loading = ref(false);
    const formData = reactive({
      message: "",
      subject: "",
      name: "",
      email: "",
      number: ""
    });
    watch(props.formData, (newData) => {
      if (newData) {
        Object.assign(formData, newData);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIInputAuthInput = __nuxt_component_0$1;
      const _component_a_textarea = __nuxt_component_1;
      const _component_UIButton = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "attorneyFormSection",
        class: ""
      }, _attrs))} data-v-b115aeab><div style="${ssrRenderStyle({
        backgroundImage: `url(${unref(image)})`
      })}" class="flex w-full object-cover justify-center items-start h-auto py-20 lg:py-40" data-v-b115aeab><div class="bg-[#1F2732] container min-h-[349px] w-full p-4" data-v-b115aeab><form class="flex flex-col justify-between py-10 lg:px-40 gap-4" data-v-b115aeab><div class="flex lg:flex-row flex-col gap-4 w-full" data-v-b115aeab>`);
      _push(ssrRenderComponent(_component_UIInputAuthInput, {
        error: false,
        type: "text",
        label: "Full Name *",
        placeholder: "Full Name *",
        modelValue: formData.name,
        "onUpdate:modelValue": ($event) => formData.name = $event,
        id: "name",
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIInputAuthInput, {
        label: "Email Address *",
        placeholder: "Email Address *",
        error: false,
        type: "email",
        id: "email",
        modelValue: formData.email,
        "onUpdate:modelValue": ($event) => formData.email = $event,
        required: ""
      }, null, _parent));
      _push(`</div><div class="flex lg:flex-row flex-col gap-4 w-full" data-v-b115aeab>`);
      _push(ssrRenderComponent(_component_UIInputAuthInput, {
        label: "Phone Number *",
        placeholder: "Phone Number *",
        error: false,
        type: "tel",
        modelValue: formData.number,
        "onUpdate:modelValue": ($event) => formData.number = $event,
        id: "number",
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIInputAuthInput, {
        label: "Subject *",
        placeholder: "Subject *",
        error: false,
        type: "text",
        modelValue: formData.subject,
        "onUpdate:modelValue": ($event) => formData.subject = $event,
        id: "subject",
        required: ""
      }, null, _parent));
      _push(`</div><div class="w-full font-light font-Satoshi400 text-[18px] outline-none bg-transparent text-[#D7D7D7] border-b-[#3A4553] !py-2 border-b-[1px] opacity-[0.8029] text-sm" data-v-b115aeab>`);
      _push(ssrRenderComponent(_component_a_textarea, {
        class: "!w-full text-[18px] text-[#D7D7D7] font-medium placeholder:text-[#D7D7D7]",
        bordered: false,
        required: "",
        "auto-size": { minRows: 5, maxRows: 5 },
        placeholder: "Your Message *",
        value: formData.message,
        "onUpdate:value": ($event) => formData.message = $event,
        id: "message"
      }, null, _parent));
      _push(`</div><div class="flex justify-center" data-v-b115aeab>`);
      _push(ssrRenderComponent(_component_UIButton, {
        class: "text-[#1F2732] !bg-white text-[22px] !px-[45px]",
        disabled: loading.value,
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loading.value) {
              _push2(ssrRenderComponent(unref(LoopingRhombusesSpinner), {
                "animation-duration": 2500,
                "rhombus-size": 15,
                color: "#A70314"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!loading.value) {
              _push2(`<span data-v-b115aeab${_scopeId}> Get An Appointment</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              loading.value ? (openBlock(), createBlock(unref(LoopingRhombusesSpinner), {
                key: 0,
                "animation-duration": 2500,
                "rhombus-size": 15,
                color: "#A70314"
              })) : createCommentVNode("", true),
              !loading.value ? (openBlock(), createBlock("span", { key: 1 }, " Get An Appointment")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/PageSections/AttorneyFormSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b115aeab"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "1387",
    height: "35",
    viewBox: "0 0 1387 399",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M132.841 84.4791C129.142 90.5293 122.745 101.341 115.346 114.787C113.714 117.753 110.129 119.052 106.986 117.794C103.271 116.308 101.691 111.909 103.611 108.399L106.612 102.914C111.064 94.775 105.174 84.8387 95.8964 84.8387H20L115.181 244.497C120.983 254.23 135.069 254.262 140.915 244.554L236.484 85.8567C236.711 85.48 236.44 85 236 85H192.618C191.933 85 191.306 85.3871 191 86L145.607 162.748C143.828 165.755 140.098 166.984 136.88 165.622C132.979 163.972 131.436 159.256 133.606 155.619L179.136 79.314C181.842 74.7781 186.735 72 192.017 72H233.656C245.283 72 252.489 84.6564 246.555 94.6553L201.037 171.354C198.24 176.069 198.236 181.933 201.029 186.651L235.179 244.341C240.967 254.119 255.103 254.161 260.949 244.418L355.888 86.186C355.961 86.0643 356 85.925 356 85.7831C356 85.3506 355.649 85 355.217 85H313.093C312.393 85 311.722 85.278 311.227 85.7729C311.076 85.9237 310.944 86.0923 310.834 86.2749L264.669 162.736C263.633 164.452 261.775 165.5 259.772 165.5C257.484 165.5 255.416 164.136 254.514 162.033L254.311 161.559C253.488 159.638 253.638 157.439 254.715 155.648L300.629 79.2716C303.341 74.7598 308.22 72 313.484 72H367.105C369.533 72 371.794 73.2344 373.106 75.2763C374.572 77.5571 374.619 80.4718 373.227 82.7983L253.417 282.961C251.968 285.383 249.152 286.63 246.385 286.077C244.547 285.709 242.949 284.586 241.98 282.981L200.844 214.791C195.011 205.122 180.989 205.122 175.156 214.791L135.07 281.24C133.475 283.884 130.612 285.5 127.525 285.5C124.41 285.5 121.527 283.856 119.941 281.176L1.82736 81.5879C0.693316 79.6716 0.64541 77.3014 1.7011 75.3408C2.80907 73.2832 4.95735 72 7.29435 72H125.945C129.294 72 132.3 74.0559 133.513 77.1772C134.448 79.5811 134.187 82.2786 132.841 84.4791Z" fill="white"></path><mask id="path-2-outside-1_4437_37" maskUnits="userSpaceOnUse" x="319.5" y="59" width="1079" height="232" fill="black"><rect fill="white" x="319.5" y="59" width="1079" height="232"></rect><path d="M410.64 275.92C364.212 275.92 334.72 246.72 334.72 200.876C334.72 157.076 363.92 125.832 410.348 125.832C452.688 125.832 482.764 150.36 482.764 193.284C482.764 198.54 482.18 202.92 481.304 206.716H354.284C355.452 239.128 372.096 258.692 410.348 258.692C444.22 258.692 459.988 246.136 459.988 225.112V223.068H480.72V225.112C480.72 255.188 450.936 275.92 410.64 275.92ZM410.056 143.06C372.68 143.06 355.744 162.332 354.284 193.868H463.2C463.2 192.408 463.2 190.948 463.2 189.488C463.2 159.12 443.928 143.06 410.056 143.06ZM600.49 275.92C543.258 275.92 502.962 236.208 502.962 175.18C502.962 114.152 543.258 74.44 600.49 74.44C651.006 74.44 689.258 102.764 689.258 147.148V150.652H666.774V147.148C666.774 113.86 643.706 94.588 600.782 94.588C552.018 94.588 524.862 122.036 524.862 175.18C524.862 228.324 552.018 255.772 600.782 255.772C643.706 255.772 666.774 236.5 666.774 203.212V199.708H689.258V203.212C689.258 247.596 651.298 275.92 600.49 275.92ZM737.732 273H717V128.752H735.688V168.172H737.148C741.528 145.104 757.88 125.832 787.956 125.832C821.244 125.832 835.844 150.36 835.844 177.224V191.532H815.112V180.436C815.112 155.908 804.892 143.936 779.78 143.936C750.58 143.936 737.732 162.332 737.732 194.744V273ZM928.484 275.92C882.056 275.92 852.564 246.72 852.564 200.876C852.564 157.076 881.764 125.832 928.192 125.832C970.532 125.832 1000.61 150.36 1000.61 193.284C1000.61 198.54 1000.02 202.92 999.148 206.716H872.128C873.296 239.128 889.94 258.692 928.192 258.692C962.064 258.692 977.832 246.136 977.832 225.112V223.068H998.564V225.112C998.564 255.188 968.78 275.92 928.484 275.92ZM927.9 143.06C890.524 143.06 873.588 162.332 872.128 193.868H981.044C981.044 192.408 981.044 190.948 981.044 189.488C981.044 159.12 961.772 143.06 927.9 143.06ZM1104.61 275.92C1051.17 275.92 1018.18 257.232 1018.18 219.856C1018.18 195.62 1035.11 176.932 1067.23 170.508V168.464C1038.91 164.668 1023.43 147.44 1023.43 125.248C1023.43 95.172 1051.17 74.44 1104.61 74.44C1158.34 74.44 1185.79 95.172 1185.79 125.248C1185.79 147.44 1170.31 164.668 1141.99 168.464V170.508C1174.69 176.932 1191.04 195.62 1191.04 219.856C1191.04 257.232 1157.75 275.92 1104.61 275.92ZM1104.61 163.5C1146.07 163.5 1165.05 152.112 1165.05 129.044C1165.05 107.436 1150.45 94.296 1104.61 94.296C1059.06 94.296 1044.17 107.436 1044.17 129.044C1044.17 152.112 1063.15 163.5 1104.61 163.5ZM1104.61 256.064C1151.04 256.064 1170.02 244.384 1170.02 216.644C1170.02 191.24 1150.45 178.392 1104.61 178.392C1058.77 178.392 1039.2 191.24 1039.2 216.644C1039.2 244.384 1057.89 256.064 1104.61 256.064ZM1303.04 273H1282.31V96.34H1201.72V77.36H1383.34V96.34H1303.04V273Z"></path></mask><path d="M481.304 206.716V221.716H493.237L495.92 210.089L481.304 206.716ZM354.284 206.716V191.716H338.734L339.294 207.256L354.284 206.716ZM459.988 223.068V208.068H444.988V223.068H459.988ZM480.72 223.068H495.72V208.068H480.72V223.068ZM354.284 193.868L339.3 193.174L338.573 208.868H354.284V193.868ZM463.2 193.868V208.868H478.2V193.868H463.2ZM410.64 260.92C390.607 260.92 375.683 254.681 365.817 244.924C355.968 235.184 349.72 220.518 349.72 200.876H319.72C319.72 227.078 328.218 249.934 344.722 266.255C361.209 282.559 384.245 290.92 410.64 290.92V260.92ZM349.72 200.876C349.72 182.357 355.839 167.565 365.803 157.462C375.728 147.399 390.605 140.832 410.348 140.832V110.832C383.663 110.832 360.726 119.887 344.444 136.396C328.201 152.865 319.72 175.595 319.72 200.876H349.72ZM410.348 140.832C428.704 140.832 442.95 146.131 452.415 154.625C461.674 162.935 467.764 175.54 467.764 193.284H497.764C497.764 168.104 488.816 146.983 472.452 132.298C456.294 117.797 434.332 110.832 410.348 110.832V140.832ZM467.764 193.284C467.764 197.388 467.313 200.636 466.688 203.343L495.92 210.089C497.047 205.204 497.764 199.692 497.764 193.284H467.764ZM481.304 191.716H354.284V221.716H481.304V191.716ZM339.294 207.256C339.96 225.75 345.137 243.003 357.889 255.551C370.694 268.149 388.78 273.692 410.348 273.692V243.692C393.664 243.692 384.302 239.453 378.93 234.166C373.505 228.829 369.776 220.094 369.274 206.176L339.294 207.256ZM410.348 273.692C428.739 273.692 444.737 270.352 456.516 262.044C469.145 253.135 474.988 239.896 474.988 225.112H444.988C444.988 231.352 442.947 234.903 439.224 237.528C434.651 240.754 425.829 243.692 410.348 243.692V273.692ZM474.988 225.112V223.068H444.988V225.112H474.988ZM459.988 238.068H480.72V208.068H459.988V238.068ZM465.72 223.068V225.112H495.72V223.068H465.72ZM465.72 225.112C465.72 234.625 461.201 243.049 452.056 249.601C442.652 256.337 428.38 260.92 410.64 260.92V290.92C433.196 290.92 453.964 285.137 469.526 273.988C485.347 262.655 495.72 245.675 495.72 225.112H465.72ZM410.056 128.06C388.883 128.06 371.042 133.548 358.292 145.838C345.569 158.101 340.142 174.992 339.3 193.174L369.268 194.562C369.886 181.208 373.657 172.695 379.111 167.438C384.538 162.208 393.853 158.06 410.056 158.06V128.06ZM354.284 208.868H463.2V178.868H354.284V208.868ZM478.2 193.868C478.2 193.865 478.2 193.862 478.2 193.859C478.2 193.857 478.2 193.854 478.2 193.851C478.2 193.848 478.2 193.845 478.2 193.842C478.2 193.839 478.2 193.837 478.2 193.834C478.2 193.831 478.2 193.828 478.2 193.825C478.2 193.822 478.2 193.82 478.2 193.817C478.2 193.814 478.2 193.811 478.2 193.808C478.2 193.805 478.2 193.802 478.2 193.8C478.2 193.797 478.2 193.794 478.2 193.791C478.2 193.788 478.2 193.785 478.2 193.782C478.2 193.78 478.2 193.777 478.2 193.774C478.2 193.771 478.2 193.768 478.2 193.765C478.2 193.762 478.2 193.76 478.2 193.757C478.2 193.754 478.2 193.751 478.2 193.748C478.2 193.745 478.2 193.743 478.2 193.74C478.2 193.737 478.2 193.734 478.2 193.731C478.2 193.728 478.2 193.725 478.2 193.723C478.2 193.72 478.2 193.717 478.2 193.714C478.2 193.711 478.2 193.708 478.2 193.705C478.2 193.703 478.2 193.7 478.2 193.697C478.2 193.694 478.2 193.691 478.2 193.688C478.2 193.685 478.2 193.683 478.2 193.68C478.2 193.677 478.2 193.674 478.2 193.671C478.2 193.668 478.2 193.666 478.2 193.663C478.2 193.66 478.2 193.657 478.2 193.654C478.2 193.651 478.2 193.648 478.2 193.646C478.2 193.643 478.2 193.64 478.2 193.637C478.2 193.634 478.2 193.631 478.2 193.628C478.2 193.626 478.2 193.623 478.2 193.62C478.2 193.617 478.2 193.614 478.2 193.611C478.2 193.609 478.2 193.606 478.2 193.603C478.2 193.6 478.2 193.597 478.2 193.594C478.2 193.591 478.2 193.589 478.2 193.586C478.2 193.583 478.2 193.58 478.2 193.577C478.2 193.574 478.2 193.571 478.2 193.569C478.2 193.566 478.2 193.563 478.2 193.56C478.2 193.557 478.2 193.554 478.2 193.551C478.2 193.549 478.2 193.546 478.2 193.543C478.2 193.54 478.2 193.537 478.2 193.534C478.2 193.532 478.2 193.529 478.2 193.526C478.2 193.523 478.2 193.52 478.2 193.517C478.2 193.514 478.2 193.512 478.2 193.509C478.2 193.506 478.2 193.503 478.2 193.5C478.2 193.497 478.2 193.494 478.2 193.492C478.2 193.489 478.2 193.486 478.2 193.483C478.2 193.48 478.2 193.477 478.2 193.474C478.2 193.472 478.2 193.469 478.2 193.466C478.2 193.463 478.2 193.46 478.2 193.457C478.2 193.455 478.2 193.452 478.2 193.449C478.2 193.446 478.2 193.443 478.2 193.44C478.2 193.437 478.2 193.435 478.2 193.432C478.2 193.429 478.2 193.426 478.2 193.423C478.2 193.42 478.2 193.417 478.2 193.415C478.2 193.412 478.2 193.409 478.2 193.406C478.2 193.403 478.2 193.4 478.2 193.397C478.2 193.395 478.2 193.392 478.2 193.389C478.2 193.386 478.2 193.383 478.2 193.38C478.2 193.378 478.2 193.375 478.2 193.372C478.2 193.369 478.2 193.366 478.2 193.363C478.2 193.36 478.2 193.358 478.2 193.355C478.2 193.352 478.2 193.349 478.2 193.346C478.2 193.343 478.2 193.34 478.2 193.338C478.2 193.335 478.2 193.332 478.2 193.329C478.2 193.326 478.2 193.323 478.2 193.32C478.2 193.318 478.2 193.315 478.2 193.312C478.2 193.309 478.2 193.306 478.2 193.303C478.2 193.301 478.2 193.298 478.2 193.295C478.2 193.292 478.2 193.289 478.2 193.286C478.2 193.283 478.2 193.281 478.2 193.278C478.2 193.275 478.2 193.272 478.2 193.269C478.2 193.266 478.2 193.263 478.2 193.261C478.2 193.258 478.2 193.255 478.2 193.252C478.2 193.249 478.2 193.246 478.2 193.243C478.2 193.241 478.2 193.238 478.2 193.235C478.2 193.232 478.2 193.229 478.2 193.226C478.2 193.224 478.2 193.221 478.2 193.218C478.2 193.215 478.2 193.212 478.2 193.209C478.2 193.206 478.2 193.204 478.2 193.201C478.2 193.198 478.2 193.195 478.2 193.192C478.2 193.189 478.2 193.186 478.2 193.184C478.2 193.181 478.2 193.178 478.2 193.175C478.2 193.172 478.2 193.169 478.2 193.167C478.2 193.164 478.2 193.161 478.2 193.158C478.2 193.155 478.2 193.152 478.2 193.149C478.2 193.147 478.2 193.144 478.2 193.141C478.2 193.138 478.2 193.135 478.2 193.132C478.2 193.129 478.2 193.127 478.2 193.124C478.2 193.121 478.2 193.118 478.2 193.115C478.2 193.112 478.2 193.109 478.2 193.107C478.2 193.104 478.2 193.101 478.2 193.098C478.2 193.095 478.2 193.092 478.2 193.09C478.2 193.087 478.2 193.084 478.2 193.081C478.2 193.078 478.2 193.075 478.2 193.072C478.2 193.07 478.2 193.067 478.2 193.064C478.2 193.061 478.2 193.058 478.2 193.055C478.2 193.052 478.2 193.05 478.2 193.047C478.2 193.044 478.2 193.041 478.2 193.038C478.2 193.035 478.2 193.032 478.2 193.03C478.2 193.027 478.2 193.024 478.2 193.021C478.2 193.018 478.2 193.015 478.2 193.013C478.2 193.01 478.2 193.007 478.2 193.004C478.2 193.001 478.2 192.998 478.2 192.995C478.2 192.993 478.2 192.99 478.2 192.987C478.2 192.984 478.2 192.981 478.2 192.978C478.2 192.975 478.2 192.973 478.2 192.97C478.2 192.967 478.2 192.964 478.2 192.961C478.2 192.958 478.2 192.955 478.2 192.953C478.2 192.95 478.2 192.947 478.2 192.944C478.2 192.941 478.2 192.938 478.2 192.936C478.2 192.933 478.2 192.93 478.2 192.927C478.2 192.924 478.2 192.921 478.2 192.918C478.2 192.916 478.2 192.913 478.2 192.91C478.2 192.907 478.2 192.904 478.2 192.901C478.2 192.898 478.2 192.896 478.2 192.893C478.2 192.89 478.2 192.887 478.2 192.884C478.2 192.881 478.2 192.878 478.2 192.876C478.2 192.873 478.2 192.87 478.2 192.867C478.2 192.864 478.2 192.861 478.2 192.859C478.2 192.856 478.2 192.853 478.2 192.85C478.2 192.847 478.2 192.844 478.2 192.841C478.2 192.839 478.2 192.836 478.2 192.833C478.2 192.83 478.2 192.827 478.2 192.824C478.2 192.821 478.2 192.819 478.2 192.816C478.2 192.813 478.2 192.81 478.2 192.807C478.2 192.804 478.2 192.802 478.2 192.799C478.2 192.796 478.2 192.793 478.2 192.79C478.2 192.787 478.2 192.784 478.2 192.782C478.2 192.779 478.2 192.776 478.2 192.773C478.2 192.77 478.2 192.767 478.2 192.764C478.2 192.762 478.2 192.759 478.2 192.756C478.2 192.753 478.2 192.75 478.2 192.747C478.2 192.744 478.2 192.742 478.2 192.739C478.2 192.736 478.2 192.733 478.2 192.73C478.2 192.727 478.2 192.725 478.2 192.722C478.2 192.719 478.2 192.716 478.2 192.713C478.2 192.71 478.2 192.707 478.2 192.705C478.2 192.702 478.2 192.699 478.2 192.696C478.2 192.693 478.2 192.69 478.2 192.687C478.2 192.685 478.2 192.682 478.2 192.679C478.2 192.676 478.2 192.673 478.2 192.67C478.2 192.667 478.2 192.665 478.2 192.662C478.2 192.659 478.2 192.656 478.2 192.653C478.2 192.65 478.2 192.648 478.2 192.645C478.2 192.642 478.2 192.639 478.2 192.636C478.2 192.633 478.2 192.63 478.2 192.628C478.2 192.625 478.2 192.622 478.2 192.619C478.2 192.616 478.2 192.613 478.2 192.61C478.2 192.608 478.2 192.605 478.2 192.602C478.2 192.599 478.2 192.596 478.2 192.593C478.2 192.59 478.2 192.588 478.2 192.585C478.2 192.582 478.2 192.579 478.2 192.576C478.2 192.573 478.2 192.571 478.2 192.568C478.2 192.565 478.2 192.562 478.2 192.559C478.2 192.556 478.2 192.553 478.2 192.551C478.2 192.548 478.2 192.545 478.2 192.542C478.2 192.539 478.2 192.536 478.2 192.533C478.2 192.531 478.2 192.528 478.2 192.525C478.2 192.522 478.2 192.519 478.2 192.516C478.2 192.514 478.2 192.511 478.2 192.508C478.2 192.505 478.2 192.502 478.2 192.499C478.2 192.496 478.2 192.494 478.2 192.491C478.2 192.488 478.2 192.485 478.2 192.482C478.2 192.479 478.2 192.476 478.2 192.474C478.2 192.471 478.2 192.468 478.2 192.465C478.2 192.462 478.2 192.459 478.2 192.456C478.2 192.454 478.2 192.451 478.2 192.448C478.2 192.445 478.2 192.442 478.2 192.439C478.2 192.437 478.2 192.434 478.2 192.431C478.2 192.428 478.2 192.425 478.2 192.422C478.2 192.419 478.2 192.417 478.2 192.414C478.2 192.411 478.2 192.408 478.2 192.405C478.2 192.402 478.2 192.399 478.2 192.397C478.2 192.394 478.2 192.391 478.2 192.388C478.2 192.385 478.2 192.382 478.2 192.379C478.2 192.377 478.2 192.374 478.2 192.371C478.2 192.368 478.2 192.365 478.2 192.362C478.2 192.36 478.2 192.357 478.2 192.354C478.2 192.351 478.2 192.348 478.2 192.345C478.2 192.342 478.2 192.34 478.2 192.337C478.2 192.334 478.2 192.331 478.2 192.328C478.2 192.325 478.2 192.322 478.2 192.32C478.2 192.317 478.2 192.314 478.2 192.311C478.2 192.308 478.2 192.305 478.2 192.302C478.2 192.3 478.2 192.297 478.2 192.294C478.2 192.291 478.2 192.288 478.2 192.285C478.2 192.283 478.2 192.28 478.2 192.277C478.2 192.274 478.2 192.271 478.2 192.268C478.2 192.265 478.2 192.263 478.2 192.26C478.2 192.257 478.2 192.254 478.2 192.251C478.2 192.248 478.2 192.245 478.2 192.243C478.2 192.24 478.2 192.237 478.2 192.234C478.2 192.231 478.2 192.228 478.2 192.225C478.2 192.223 478.2 192.22 478.2 192.217C478.2 192.214 478.2 192.211 478.2 192.208C478.2 192.206 478.2 192.203 478.2 192.2C478.2 192.197 478.2 192.194 478.2 192.191C478.2 192.188 478.2 192.186 478.2 192.183C478.2 192.18 478.2 192.177 478.2 192.174C478.2 192.171 478.2 192.168 478.2 192.166C478.2 192.163 478.2 192.16 478.2 192.157C478.2 192.154 478.2 192.151 478.2 192.148C478.2 192.146 478.2 192.143 478.2 192.14C478.2 192.137 478.2 192.134 478.2 192.131C478.2 192.129 478.2 192.126 478.2 192.123C478.2 192.12 478.2 192.117 478.2 192.114C478.2 192.111 478.2 192.109 478.2 192.106C478.2 192.103 478.2 192.1 478.2 192.097C478.2 192.094 478.2 192.091 478.2 192.089C478.2 192.086 478.2 192.083 478.2 192.08C478.2 192.077 478.2 192.074 478.2 192.072C478.2 192.069 478.2 192.066 478.2 192.063C478.2 192.06 478.2 192.057 478.2 192.054C478.2 192.052 478.2 192.049 478.2 192.046C478.2 192.043 478.2 192.04 478.2 192.037C478.2 192.034 478.2 192.032 478.2 192.029C478.2 192.026 478.2 192.023 478.2 192.02C478.2 192.017 478.2 192.014 478.2 192.012C478.2 192.009 478.2 192.006 478.2 192.003C478.2 192 478.2 191.997 478.2 191.995C478.2 191.992 478.2 191.989 478.2 191.986C478.2 191.983 478.2 191.98 478.2 191.977C478.2 191.975 478.2 191.972 478.2 191.969C478.2 191.966 478.2 191.963 478.2 191.96C478.2 191.957 478.2 191.955 478.2 191.952C478.2 191.949 478.2 191.946 478.2 191.943C478.2 191.94 478.2 191.937 478.2 191.935C478.2 191.932 478.2 191.929 478.2 191.926C478.2 191.923 478.2 191.92 478.2 191.918C478.2 191.915 478.2 191.912 478.2 191.909C478.2 191.906 478.2 191.903 478.2 191.9C478.2 191.898 478.2 191.895 478.2 191.892C478.2 191.889 478.2 191.886 478.2 191.883C478.2 191.88 478.2 191.878 478.2 191.875C478.2 191.872 478.2 191.869 478.2 191.866C478.2 191.863 478.2 191.86 478.2 191.858C478.2 191.855 478.2 191.852 478.2 191.849C478.2 191.846 478.2 191.843 478.2 191.841C478.2 191.838 478.2 191.835 478.2 191.832C478.2 191.829 478.2 191.826 478.2 191.823C478.2 191.821 478.2 191.818 478.2 191.815C478.2 191.812 478.2 191.809 478.2 191.806C478.2 191.803 478.2 191.801 478.2 191.798C478.2 191.795 478.2 191.792 478.2 191.789C478.2 191.786 478.2 191.784 478.2 191.781C478.2 191.778 478.2 191.775 478.2 191.772C478.2 191.769 478.2 191.766 478.2 191.764C478.2 191.761 478.2 191.758 478.2 191.755C478.2 191.752 478.2 191.749 478.2 191.746C478.2 191.744 478.2 191.741 478.2 191.738C478.2 191.735 478.2 191.732 478.2 191.729C478.2 191.726 478.2 191.724 478.2 191.721C478.2 191.718 478.2 191.715 478.2 191.712C478.2 191.709 478.2 191.707 478.2 191.704C478.2 191.701 478.2 191.698 478.2 191.695C478.2 191.692 478.2 191.689 478.2 191.687C478.2 191.684 478.2 191.681 478.2 191.678C478.2 191.675 478.2 191.672 478.2 191.669C478.2 191.667 478.2 191.664 478.2 191.661C478.2 191.658 478.2 191.655 478.2 191.652C478.2 191.649 478.2 191.647 478.2 191.644C478.2 191.641 478.2 191.638 478.2 191.635C478.2 191.632 478.2 191.63 478.2 191.627C478.2 191.624 478.2 191.621 478.2 191.618C478.2 191.615 478.2 191.612 478.2 191.61C478.2 191.607 478.2 191.604 478.2 191.601C478.2 191.598 478.2 191.595 478.2 191.592C478.2 191.59 478.2 191.587 478.2 191.584C478.2 191.581 478.2 191.578 478.2 191.575C478.2 191.572 478.2 191.57 478.2 191.567C478.2 191.564 478.2 191.561 478.2 191.558C478.2 191.555 478.2 191.553 478.2 191.55C478.2 191.547 478.2 191.544 478.2 191.541C478.2 191.538 478.2 191.535 478.2 191.533C478.2 191.53 478.2 191.527 478.2 191.524C478.2 191.521 478.2 191.518 478.2 191.515C478.2 191.513 478.2 191.51 478.2 191.507C478.2 191.504 478.2 191.501 478.2 191.498C478.2 191.495 478.2 191.493 478.2 191.49C478.2 191.487 478.2 191.484 478.2 191.481C478.2 191.478 478.2 191.476 478.2 191.473C478.2 191.47 478.2 191.467 478.2 191.464C478.2 191.461 478.2 191.458 478.2 191.456C478.2 191.453 478.2 191.45 478.2 191.447C478.2 191.444 478.2 191.441 478.2 191.438C478.2 191.436 478.2 191.433 478.2 191.43C478.2 191.427 478.2 191.424 478.2 191.421C478.2 191.419 478.2 191.416 478.2 191.413C478.2 191.41 478.2 191.407 478.2 191.404C478.2 191.401 478.2 191.399 478.2 191.396C478.2 191.393 478.2 191.39 478.2 191.387C478.2 191.384 478.2 191.381 478.2 191.379C478.2 191.376 478.2 191.373 478.2 191.37C478.2 191.367 478.2 191.364 478.2 191.361C478.2 191.359 478.2 191.356 478.2 191.353C478.2 191.35 478.2 191.347 478.2 191.344C478.2 191.342 478.2 191.339 478.2 191.336C478.2 191.333 478.2 191.33 478.2 191.327C478.2 191.324 478.2 191.322 478.2 191.319C478.2 191.316 478.2 191.313 478.2 191.31C478.2 191.307 478.2 191.304 478.2 191.302C478.2 191.299 478.2 191.296 478.2 191.293C478.2 191.29 478.2 191.287 478.2 191.284C478.2 191.282 478.2 191.279 478.2 191.276C478.2 191.273 478.2 191.27 478.2 191.267C478.2 191.265 478.2 191.262 478.2 191.259C478.2 191.256 478.2 191.253 478.2 191.25C478.2 191.247 478.2 191.245 478.2 191.242C478.2 191.239 478.2 191.236 478.2 191.233C478.2 191.23 478.2 191.227 478.2 191.225C478.2 191.222 478.2 191.219 478.2 191.216C478.2 191.213 478.2 191.21 478.2 191.207C478.2 191.205 478.2 191.202 478.2 191.199C478.2 191.196 478.2 191.193 478.2 191.19C478.2 191.188 478.2 191.185 478.2 191.182C478.2 191.179 478.2 191.176 478.2 191.173C478.2 191.17 478.2 191.168 478.2 191.165C478.2 191.162 478.2 191.159 478.2 191.156C478.2 191.153 478.2 191.15 478.2 191.148C478.2 191.145 478.2 191.142 478.2 191.139C478.2 191.136 478.2 191.133 478.2 191.13C478.2 191.128 478.2 191.125 478.2 191.122C478.2 191.119 478.2 191.116 478.2 191.113C478.2 191.111 478.2 191.108 478.2 191.105C478.2 191.102 478.2 191.099 478.2 191.096C478.2 191.093 478.2 191.091 478.2 191.088C478.2 191.085 478.2 191.082 478.2 191.079C478.2 191.076 478.2 191.073 478.2 191.071C478.2 191.068 478.2 191.065 478.2 191.062C478.2 191.059 478.2 191.056 478.2 191.053C478.2 191.051 478.2 191.048 478.2 191.045C478.2 191.042 478.2 191.039 478.2 191.036C478.2 191.034 478.2 191.031 478.2 191.028C478.2 191.025 478.2 191.022 478.2 191.019C478.2 191.016 478.2 191.014 478.2 191.011C478.2 191.008 478.2 191.005 478.2 191.002C478.2 190.999 478.2 190.996 478.2 190.994C478.2 190.991 478.2 190.988 478.2 190.985C478.2 190.982 478.2 190.979 478.2 190.977C478.2 190.974 478.2 190.971 478.2 190.968C478.2 190.965 478.2 190.962 478.2 190.959C478.2 190.957 478.2 190.954 478.2 190.951C478.2 190.948 478.2 190.945 478.2 190.942C478.2 190.939 478.2 190.937 478.2 190.934C478.2 190.931 478.2 190.928 478.2 190.925C478.2 190.922 478.2 190.919 478.2 190.917C478.2 190.914 478.2 190.911 478.2 190.908C478.2 190.905 478.2 190.902 478.2 190.9C478.2 190.897 478.2 190.894 478.2 190.891C478.2 190.888 478.2 190.885 478.2 190.882C478.2 190.88 478.2 190.877 478.2 190.874C478.2 190.871 478.2 190.868 478.2 190.865C478.2 190.862 478.2 190.86 478.2 190.857C478.2 190.854 478.2 190.851 478.2 190.848C478.2 190.845 478.2 190.842 478.2 190.84C478.2 190.837 478.2 190.834 478.2 190.831C478.2 190.828 478.2 190.825 478.2 190.823C478.2 190.82 478.2 190.817 478.2 190.814C478.2 190.811 478.2 190.808 478.2 190.805C478.2 190.803 478.2 190.8 478.2 190.797C478.2 190.794 478.2 190.791 478.2 190.788C478.2 190.785 478.2 190.783 478.2 190.78C478.2 190.777 478.2 190.774 478.2 190.771C478.2 190.768 478.2 190.765 478.2 190.763C478.2 190.76 478.2 190.757 478.2 190.754C478.2 190.751 478.2 190.748 478.2 190.746C478.2 190.743 478.2 190.74 478.2 190.737C478.2 190.734 478.2 190.731 478.2 190.728C478.2 190.726 478.2 190.723 478.2 190.72C478.2 190.717 478.2 190.714 478.2 190.711C478.2 190.708 478.2 190.706 478.2 190.703C478.2 190.7 478.2 190.697 478.2 190.694C478.2 190.691 478.2 190.689 478.2 190.686C478.2 190.683 478.2 190.68 478.2 190.677C478.2 190.674 478.2 190.671 478.2 190.669C478.2 190.666 478.2 190.663 478.2 190.66C478.2 190.657 478.2 190.654 478.2 190.651C478.2 190.649 478.2 190.646 478.2 190.643C478.2 190.64 478.2 190.637 478.2 190.634C478.2 190.631 478.2 190.629 478.2 190.626C478.2 190.623 478.2 190.62 478.2 190.617C478.2 190.614 478.2 190.612 478.2 190.609C478.2 190.606 478.2 190.603 478.2 190.6C478.2 190.597 478.2 190.594 478.2 190.592C478.2 190.589 478.2 190.586 478.2 190.583C478.2 190.58 478.2 190.577 478.2 190.574C478.2 190.572 478.2 190.569 478.2 190.566C478.2 190.563 478.2 190.56 478.2 190.557C478.2 190.554 478.2 190.552 478.2 190.549C478.2 190.546 478.2 190.543 478.2 190.54C478.2 190.537 478.2 190.535 478.2 190.532C478.2 190.529 478.2 190.526 478.2 190.523C478.2 190.52 478.2 190.517 478.2 190.515C478.2 190.512 478.2 190.509 478.2 190.506C478.2 190.503 478.2 190.5 478.2 190.497C478.2 190.495 478.2 190.492 478.2 190.489C478.2 190.486 478.2 190.483 478.2 190.48C478.2 190.477 478.2 190.475 478.2 190.472C478.2 190.469 478.2 190.466 478.2 190.463C478.2 190.46 478.2 190.458 478.2 190.455C478.2 190.452 478.2 190.449 478.2 190.446C478.2 190.443 478.2 190.44 478.2 190.438C478.2 190.435 478.2 190.432 478.2 190.429C478.2 190.426 478.2 190.423 478.2 190.42C478.2 190.418 478.2 190.415 478.2 190.412C478.2 190.409 478.2 190.406 478.2 190.403C478.2 190.4 478.2 190.398 478.2 190.395C478.2 190.392 478.2 190.389 478.2 190.386C478.2 190.383 478.2 190.381 478.2 190.378C478.2 190.375 478.2 190.372 478.2 190.369C478.2 190.366 478.2 190.363 478.2 190.361C478.2 190.358 478.2 190.355 478.2 190.352C478.2 190.349 478.2 190.346 478.2 190.343C478.2 190.341 478.2 190.338 478.2 190.335C478.2 190.332 478.2 190.329 478.2 190.326C478.2 190.324 478.2 190.321 478.2 190.318C478.2 190.315 478.2 190.312 478.2 190.309C478.2 190.306 478.2 190.304 478.2 190.301C478.2 190.298 478.2 190.295 478.2 190.292C478.2 190.289 478.2 190.286 478.2 190.284C478.2 190.281 478.2 190.278 478.2 190.275C478.2 190.272 478.2 190.269 478.2 190.266C478.2 190.264 478.2 190.261 478.2 190.258C478.2 190.255 478.2 190.252 478.2 190.249C478.2 190.247 478.2 190.244 478.2 190.241C478.2 190.238 478.2 190.235 478.2 190.232C478.2 190.229 478.2 190.227 478.2 190.224C478.2 190.221 478.2 190.218 478.2 190.215C478.2 190.212 478.2 190.209 478.2 190.207C478.2 190.204 478.2 190.201 478.2 190.198C478.2 190.195 478.2 190.192 478.2 190.189C478.2 190.187 478.2 190.184 478.2 190.181C478.2 190.178 478.2 190.175 478.2 190.172C478.2 190.17 478.2 190.167 478.2 190.164C478.2 190.161 478.2 190.158 478.2 190.155C478.2 190.152 478.2 190.15 478.2 190.147C478.2 190.144 478.2 190.141 478.2 190.138C478.2 190.135 478.2 190.132 478.2 190.13C478.2 190.127 478.2 190.124 478.2 190.121C478.2 190.118 478.2 190.115 478.2 190.112C478.2 190.11 478.2 190.107 478.2 190.104C478.2 190.101 478.2 190.098 478.2 190.095C478.2 190.093 478.2 190.09 478.2 190.087C478.2 190.084 478.2 190.081 478.2 190.078C478.2 190.075 478.2 190.073 478.2 190.07C478.2 190.067 478.2 190.064 478.2 190.061C478.2 190.058 478.2 190.055 478.2 190.053C478.2 190.05 478.2 190.047 478.2 190.044C478.2 190.041 478.2 190.038 478.2 190.035C478.2 190.033 478.2 190.03 478.2 190.027C478.2 190.024 478.2 190.021 478.2 190.018C478.2 190.016 478.2 190.013 478.2 190.01C478.2 190.007 478.2 190.004 478.2 190.001C478.2 189.998 478.2 189.996 478.2 189.993C478.2 189.99 478.2 189.987 478.2 189.984C478.2 189.981 478.2 189.978 478.2 189.976C478.2 189.973 478.2 189.97 478.2 189.967C478.2 189.964 478.2 189.961 478.2 189.958C478.2 189.956 478.2 189.953 478.2 189.95C478.2 189.947 478.2 189.944 478.2 189.941C478.2 189.939 478.2 189.936 478.2 189.933C478.2 189.93 478.2 189.927 478.2 189.924C478.2 189.921 478.2 189.919 478.2 189.916C478.2 189.913 478.2 189.91 478.2 189.907C478.2 189.904 478.2 189.901 478.2 189.899C478.2 189.896 478.2 189.893 478.2 189.89C478.2 189.887 478.2 189.884 478.2 189.882C478.2 189.879 478.2 189.876 478.2 189.873C478.2 189.87 478.2 189.867 478.2 189.864C478.2 189.862 478.2 189.859 478.2 189.856C478.2 189.853 478.2 189.85 478.2 189.847C478.2 189.844 478.2 189.842 478.2 189.839C478.2 189.836 478.2 189.833 478.2 189.83C478.2 189.827 478.2 189.824 478.2 189.822C478.2 189.819 478.2 189.816 478.2 189.813C478.2 189.81 478.2 189.807 478.2 189.805C478.2 189.802 478.2 189.799 478.2 189.796C478.2 189.793 478.2 189.79 478.2 189.787C478.2 189.785 478.2 189.782 478.2 189.779C478.2 189.776 478.2 189.773 478.2 189.77C478.2 189.767 478.2 189.765 478.2 189.762C478.2 189.759 478.2 189.756 478.2 189.753C478.2 189.75 478.2 189.747 478.2 189.745C478.2 189.742 478.2 189.739 478.2 189.736C478.2 189.733 478.2 189.73 478.2 189.728C478.2 189.725 478.2 189.722 478.2 189.719C478.2 189.716 478.2 189.713 478.2 189.71C478.2 189.708 478.2 189.705 478.2 189.702C478.2 189.699 478.2 189.696 478.2 189.693C478.2 189.69 478.2 189.688 478.2 189.685C478.2 189.682 478.2 189.679 478.2 189.676C478.2 189.673 478.2 189.671 478.2 189.668C478.2 189.665 478.2 189.662 478.2 189.659C478.2 189.656 478.2 189.653 478.2 189.651C478.2 189.648 478.2 189.645 478.2 189.642C478.2 189.639 478.2 189.636 478.2 189.633C478.2 189.631 478.2 189.628 478.2 189.625C478.2 189.622 478.2 189.619 478.2 189.616C478.2 189.613 478.2 189.611 478.2 189.608C478.2 189.605 478.2 189.602 478.2 189.599C478.2 189.596 478.2 189.594 478.2 189.591C478.2 189.588 478.2 189.585 478.2 189.582C478.2 189.579 478.2 189.576 478.2 189.574C478.2 189.571 478.2 189.568 478.2 189.565C478.2 189.562 478.2 189.559 478.2 189.556C478.2 189.554 478.2 189.551 478.2 189.548C478.2 189.545 478.2 189.542 478.2 189.539C478.2 189.536 478.2 189.534 478.2 189.531C478.2 189.528 478.2 189.525 478.2 189.522C478.2 189.519 478.2 189.517 478.2 189.514C478.2 189.511 478.2 189.508 478.2 189.505C478.2 189.502 478.2 189.499 478.2 189.497C478.2 189.494 478.2 189.491 478.2 189.488H448.2C448.2 189.491 448.2 189.494 448.2 189.497C448.2 189.499 448.2 189.502 448.2 189.505C448.2 189.508 448.2 189.511 448.2 189.514C448.2 189.517 448.2 189.519 448.2 189.522C448.2 189.525 448.2 189.528 448.2 189.531C448.2 189.534 448.2 189.536 448.2 189.539C448.2 189.542 448.2 189.545 448.2 189.548C448.2 189.551 448.2 189.554 448.2 189.556C448.2 189.559 448.2 189.562 448.2 189.565C448.2 189.568 448.2 189.571 448.2 189.574C448.2 189.576 448.2 189.579 448.2 189.582C448.2 189.585 448.2 189.588 448.2 189.591C448.2 189.594 448.2 189.596 448.2 189.599C448.2 189.602 448.2 189.605 448.2 189.608C448.2 189.611 448.2 189.613 448.2 189.616C448.2 189.619 448.2 189.622 448.2 189.625C448.2 189.628 448.2 189.631 448.2 189.633C448.2 189.636 448.2 189.639 448.2 189.642C448.2 189.645 448.2 189.648 448.2 189.651C448.2 189.653 448.2 189.656 448.2 189.659C448.2 189.662 448.2 189.665 448.2 189.668C448.2 189.671 448.2 189.673 448.2 189.676C448.2 189.679 448.2 189.682 448.2 189.685C448.2 189.688 448.2 189.69 448.2 189.693C448.2 189.696 448.2 189.699 448.2 189.702C448.2 189.705 448.2 189.708 448.2 189.71C448.2 189.713 448.2 189.716 448.2 189.719C448.2 189.722 448.2 189.725 448.2 189.728C448.2 189.73 448.2 189.733 448.2 189.736C448.2 189.739 448.2 189.742 448.2 189.745C448.2 189.747 448.2 189.75 448.2 189.753C448.2 189.756 448.2 189.759 448.2 189.762C448.2 189.765 448.2 189.767 448.2 189.77C448.2 189.773 448.2 189.776 448.2 189.779C448.2 189.782 448.2 189.785 448.2 189.787C448.2 189.79 448.2 189.793 448.2 189.796C448.2 189.799 448.2 189.802 448.2 189.805C448.2 189.807 448.2 189.81 448.2 189.813C448.2 189.816 448.2 189.819 448.2 189.822C448.2 189.824 448.2 189.827 448.2 189.83C448.2 189.833 448.2 189.836 448.2 189.839C448.2 189.842 448.2 189.844 448.2 189.847C448.2 189.85 448.2 189.853 448.2 189.856C448.2 189.859 448.2 189.862 448.2 189.864C448.2 189.867 448.2 189.87 448.2 189.873C448.2 189.876 448.2 189.879 448.2 189.882C448.2 189.884 448.2 189.887 448.2 189.89C448.2 189.893 448.2 189.896 448.2 189.899C448.2 189.901 448.2 189.904 448.2 189.907C448.2 189.91 448.2 189.913 448.2 189.916C448.2 189.919 448.2 189.921 448.2 189.924C448.2 189.927 448.2 189.93 448.2 189.933C448.2 189.936 448.2 189.939 448.2 189.941C448.2 189.944 448.2 189.947 448.2 189.95C448.2 189.953 448.2 189.956 448.2 189.958C448.2 189.961 448.2 189.964 448.2 189.967C448.2 189.97 448.2 189.973 448.2 189.976C448.2 189.978 448.2 189.981 448.2 189.984C448.2 189.987 448.2 189.99 448.2 189.993C448.2 189.996 448.2 189.998 448.2 190.001C448.2 190.004 448.2 190.007 448.2 190.01C448.2 190.013 448.2 190.016 448.2 190.018C448.2 190.021 448.2 190.024 448.2 190.027C448.2 190.03 448.2 190.033 448.2 190.035C448.2 190.038 448.2 190.041 448.2 190.044C448.2 190.047 448.2 190.05 448.2 190.053C448.2 190.055 448.2 190.058 448.2 190.061C448.2 190.064 448.2 190.067 448.2 190.07C448.2 190.073 448.2 190.075 448.2 190.078C448.2 190.081 448.2 190.084 448.2 190.087C448.2 190.09 448.2 190.093 448.2 190.095C448.2 190.098 448.2 190.101 448.2 190.104C448.2 190.107 448.2 190.11 448.2 190.112C448.2 190.115 448.2 190.118 448.2 190.121C448.2 190.124 448.2 190.127 448.2 190.13C448.2 190.132 448.2 190.135 448.2 190.138C448.2 190.141 448.2 190.144 448.2 190.147C448.2 190.15 448.2 190.152 448.2 190.155C448.2 190.158 448.2 190.161 448.2 190.164C448.2 190.167 448.2 190.17 448.2 190.172C448.2 190.175 448.2 190.178 448.2 190.181C448.2 190.184 448.2 190.187 448.2 190.189C448.2 190.192 448.2 190.195 448.2 190.198C448.2 190.201 448.2 190.204 448.2 190.207C448.2 190.209 448.2 190.212 448.2 190.215C448.2 190.218 448.2 190.221 448.2 190.224C448.2 190.227 448.2 190.229 448.2 190.232C448.2 190.235 448.2 190.238 448.2 190.241C448.2 190.244 448.2 190.247 448.2 190.249C448.2 190.252 448.2 190.255 448.2 190.258C448.2 190.261 448.2 190.264 448.2 190.266C448.2 190.269 448.2 190.272 448.2 190.275C448.2 190.278 448.2 190.281 448.2 190.284C448.2 190.286 448.2 190.289 448.2 190.292C448.2 190.295 448.2 190.298 448.2 190.301C448.2 190.304 448.2 190.306 448.2 190.309C448.2 190.312 448.2 190.315 448.2 190.318C448.2 190.321 448.2 190.324 448.2 190.326C448.2 190.329 448.2 190.332 448.2 190.335C448.2 190.338 448.2 190.341 448.2 190.343C448.2 190.346 448.2 190.349 448.2 190.352C448.2 190.355 448.2 190.358 448.2 190.361C448.2 190.363 448.2 190.366 448.2 190.369C448.2 190.372 448.2 190.375 448.2 190.378C448.2 190.381 448.2 190.383 448.2 190.386C448.2 190.389 448.2 190.392 448.2 190.395C448.2 190.398 448.2 190.4 448.2 190.403C448.2 190.406 448.2 190.409 448.2 190.412C448.2 190.415 448.2 190.418 448.2 190.42C448.2 190.423 448.2 190.426 448.2 190.429C448.2 190.432 448.2 190.435 448.2 190.438C448.2 190.44 448.2 190.443 448.2 190.446C448.2 190.449 448.2 190.452 448.2 190.455C448.2 190.458 448.2 190.46 448.2 190.463C448.2 190.466 448.2 190.469 448.2 190.472C448.2 190.475 448.2 190.477 448.2 190.48C448.2 190.483 448.2 190.486 448.2 190.489C448.2 190.492 448.2 190.495 448.2 190.497C448.2 190.5 448.2 190.503 448.2 190.506C448.2 190.509 448.2 190.512 448.2 190.515C448.2 190.517 448.2 190.52 448.2 190.523C448.2 190.526 448.2 190.529 448.2 190.532C448.2 190.535 448.2 190.537 448.2 190.54C448.2 190.543 448.2 190.546 448.2 190.549C448.2 190.552 448.2 190.554 448.2 190.557C448.2 190.56 448.2 190.563 448.2 190.566C448.2 190.569 448.2 190.572 448.2 190.574C448.2 190.577 448.2 190.58 448.2 190.583C448.2 190.586 448.2 190.589 448.2 190.592C448.2 190.594 448.2 190.597 448.2 190.6C448.2 190.603 448.2 190.606 448.2 190.609C448.2 190.612 448.2 190.614 448.2 190.617C448.2 190.62 448.2 190.623 448.2 190.626C448.2 190.629 448.2 190.631 448.2 190.634C448.2 190.637 448.2 190.64 448.2 190.643C448.2 190.646 448.2 190.649 448.2 190.651C448.2 190.654 448.2 190.657 448.2 190.66C448.2 190.663 448.2 190.666 448.2 190.669C448.2 190.671 448.2 190.674 448.2 190.677C448.2 190.68 448.2 190.683 448.2 190.686C448.2 190.689 448.2 190.691 448.2 190.694C448.2 190.697 448.2 190.7 448.2 190.703C448.2 190.706 448.2 190.708 448.2 190.711C448.2 190.714 448.2 190.717 448.2 190.72C448.2 190.723 448.2 190.726 448.2 190.728C448.2 190.731 448.2 190.734 448.2 190.737C448.2 190.74 448.2 190.743 448.2 190.746C448.2 190.748 448.2 190.751 448.2 190.754C448.2 190.757 448.2 190.76 448.2 190.763C448.2 190.765 448.2 190.768 448.2 190.771C448.2 190.774 448.2 190.777 448.2 190.78C448.2 190.783 448.2 190.785 448.2 190.788C448.2 190.791 448.2 190.794 448.2 190.797C448.2 190.8 448.2 190.803 448.2 190.805C448.2 190.808 448.2 190.811 448.2 190.814C448.2 190.817 448.2 190.82 448.2 190.823C448.2 190.825 448.2 190.828 448.2 190.831C448.2 190.834 448.2 190.837 448.2 190.84C448.2 190.842 448.2 190.845 448.2 190.848C448.2 190.851 448.2 190.854 448.2 190.857C448.2 190.86 448.2 190.862 448.2 190.865C448.2 190.868 448.2 190.871 448.2 190.874C448.2 190.877 448.2 190.88 448.2 190.882C448.2 190.885 448.2 190.888 448.2 190.891C448.2 190.894 448.2 190.897 448.2 190.9C448.2 190.902 448.2 190.905 448.2 190.908C448.2 190.911 448.2 190.914 448.2 190.917C448.2 190.919 448.2 190.922 448.2 190.925C448.2 190.928 448.2 190.931 448.2 190.934C448.2 190.937 448.2 190.939 448.2 190.942C448.2 190.945 448.2 190.948 448.2 190.951C448.2 190.954 448.2 190.957 448.2 190.959C448.2 190.962 448.2 190.965 448.2 190.968C448.2 190.971 448.2 190.974 448.2 190.977C448.2 190.979 448.2 190.982 448.2 190.985C448.2 190.988 448.2 190.991 448.2 190.994C448.2 190.996 448.2 190.999 448.2 191.002C448.2 191.005 448.2 191.008 448.2 191.011C448.2 191.014 448.2 191.016 448.2 191.019C448.2 191.022 448.2 191.025 448.2 191.028C448.2 191.031 448.2 191.034 448.2 191.036C448.2 191.039 448.2 191.042 448.2 191.045C448.2 191.048 448.2 191.051 448.2 191.053C448.2 191.056 448.2 191.059 448.2 191.062C448.2 191.065 448.2 191.068 448.2 191.071C448.2 191.073 448.2 191.076 448.2 191.079C448.2 191.082 448.2 191.085 448.2 191.088C448.2 191.091 448.2 191.093 448.2 191.096C448.2 191.099 448.2 191.102 448.2 191.105C448.2 191.108 448.2 191.111 448.2 191.113C448.2 191.116 448.2 191.119 448.2 191.122C448.2 191.125 448.2 191.128 448.2 191.13C448.2 191.133 448.2 191.136 448.2 191.139C448.2 191.142 448.2 191.145 448.2 191.148C448.2 191.15 448.2 191.153 448.2 191.156C448.2 191.159 448.2 191.162 448.2 191.165C448.2 191.168 448.2 191.17 448.2 191.173C448.2 191.176 448.2 191.179 448.2 191.182C448.2 191.185 448.2 191.188 448.2 191.19C448.2 191.193 448.2 191.196 448.2 191.199C448.2 191.202 448.2 191.205 448.2 191.207C448.2 191.21 448.2 191.213 448.2 191.216C448.2 191.219 448.2 191.222 448.2 191.225C448.2 191.227 448.2 191.23 448.2 191.233C448.2 191.236 448.2 191.239 448.2 191.242C448.2 191.245 448.2 191.247 448.2 191.25C448.2 191.253 448.2 191.256 448.2 191.259C448.2 191.262 448.2 191.265 448.2 191.267C448.2 191.27 448.2 191.273 448.2 191.276C448.2 191.279 448.2 191.282 448.2 191.284C448.2 191.287 448.2 191.29 448.2 191.293C448.2 191.296 448.2 191.299 448.2 191.302C448.2 191.304 448.2 191.307 448.2 191.31C448.2 191.313 448.2 191.316 448.2 191.319C448.2 191.322 448.2 191.324 448.2 191.327C448.2 191.33 448.2 191.333 448.2 191.336C448.2 191.339 448.2 191.342 448.2 191.344C448.2 191.347 448.2 191.35 448.2 191.353C448.2 191.356 448.2 191.359 448.2 191.361C448.2 191.364 448.2 191.367 448.2 191.37C448.2 191.373 448.2 191.376 448.2 191.379C448.2 191.381 448.2 191.384 448.2 191.387C448.2 191.39 448.2 191.393 448.2 191.396C448.2 191.399 448.2 191.401 448.2 191.404C448.2 191.407 448.2 191.41 448.2 191.413C448.2 191.416 448.2 191.419 448.2 191.421C448.2 191.424 448.2 191.427 448.2 191.43C448.2 191.433 448.2 191.436 448.2 191.438C448.2 191.441 448.2 191.444 448.2 191.447C448.2 191.45 448.2 191.453 448.2 191.456C448.2 191.458 448.2 191.461 448.2 191.464C448.2 191.467 448.2 191.47 448.2 191.473C448.2 191.476 448.2 191.478 448.2 191.481C448.2 191.484 448.2 191.487 448.2 191.49C448.2 191.493 448.2 191.495 448.2 191.498C448.2 191.501 448.2 191.504 448.2 191.507C448.2 191.51 448.2 191.513 448.2 191.515C448.2 191.518 448.2 191.521 448.2 191.524C448.2 191.527 448.2 191.53 448.2 191.533C448.2 191.535 448.2 191.538 448.2 191.541C448.2 191.544 448.2 191.547 448.2 191.55C448.2 191.553 448.2 191.555 448.2 191.558C448.2 191.561 448.2 191.564 448.2 191.567C448.2 191.57 448.2 191.572 448.2 191.575C448.2 191.578 448.2 191.581 448.2 191.584C448.2 191.587 448.2 191.59 448.2 191.592C448.2 191.595 448.2 191.598 448.2 191.601C448.2 191.604 448.2 191.607 448.2 191.61C448.2 191.612 448.2 191.615 448.2 191.618C448.2 191.621 448.2 191.624 448.2 191.627C448.2 191.63 448.2 191.632 448.2 191.635C448.2 191.638 448.2 191.641 448.2 191.644C448.2 191.647 448.2 191.649 448.2 191.652C448.2 191.655 448.2 191.658 448.2 191.661C448.2 191.664 448.2 191.667 448.2 191.669C448.2 191.672 448.2 191.675 448.2 191.678C448.2 191.681 448.2 191.684 448.2 191.687C448.2 191.689 448.2 191.692 448.2 191.695C448.2 191.698 448.2 191.701 448.2 191.704C448.2 191.707 448.2 191.709 448.2 191.712C448.2 191.715 448.2 191.718 448.2 191.721C448.2 191.724 448.2 191.726 448.2 191.729C448.2 191.732 448.2 191.735 448.2 191.738C448.2 191.741 448.2 191.744 448.2 191.746C448.2 191.749 448.2 191.752 448.2 191.755C448.2 191.758 448.2 191.761 448.2 191.764C448.2 191.766 448.2 191.769 448.2 191.772C448.2 191.775 448.2 191.778 448.2 191.781C448.2 191.784 448.2 191.786 448.2 191.789C448.2 191.792 448.2 191.795 448.2 191.798C448.2 191.801 448.2 191.803 448.2 191.806C448.2 191.809 448.2 191.812 448.2 191.815C448.2 191.818 448.2 191.821 448.2 191.823C448.2 191.826 448.2 191.829 448.2 191.832C448.2 191.835 448.2 191.838 448.2 191.841C448.2 191.843 448.2 191.846 448.2 191.849C448.2 191.852 448.2 191.855 448.2 191.858C448.2 191.86 448.2 191.863 448.2 191.866C448.2 191.869 448.2 191.872 448.2 191.875C448.2 191.878 448.2 191.88 448.2 191.883C448.2 191.886 448.2 191.889 448.2 191.892C448.2 191.895 448.2 191.898 448.2 191.9C448.2 191.903 448.2 191.906 448.2 191.909C448.2 191.912 448.2 191.915 448.2 191.918C448.2 191.92 448.2 191.923 448.2 191.926C448.2 191.929 448.2 191.932 448.2 191.935C448.2 191.937 448.2 191.94 448.2 191.943C448.2 191.946 448.2 191.949 448.2 191.952C448.2 191.955 448.2 191.957 448.2 191.96C448.2 191.963 448.2 191.966 448.2 191.969C448.2 191.972 448.2 191.975 448.2 191.977C448.2 191.98 448.2 191.983 448.2 191.986C448.2 191.989 448.2 191.992 448.2 191.995C448.2 191.997 448.2 192 448.2 192.003C448.2 192.006 448.2 192.009 448.2 192.012C448.2 192.014 448.2 192.017 448.2 192.02C448.2 192.023 448.2 192.026 448.2 192.029C448.2 192.032 448.2 192.034 448.2 192.037C448.2 192.04 448.2 192.043 448.2 192.046C448.2 192.049 448.2 192.052 448.2 192.054C448.2 192.057 448.2 192.06 448.2 192.063C448.2 192.066 448.2 192.069 448.2 192.072C448.2 192.074 448.2 192.077 448.2 192.08C448.2 192.083 448.2 192.086 448.2 192.089C448.2 192.091 448.2 192.094 448.2 192.097C448.2 192.1 448.2 192.103 448.2 192.106C448.2 192.109 448.2 192.111 448.2 192.114C448.2 192.117 448.2 192.12 448.2 192.123C448.2 192.126 448.2 192.129 448.2 192.131C448.2 192.134 448.2 192.137 448.2 192.14C448.2 192.143 448.2 192.146 448.2 192.148C448.2 192.151 448.2 192.154 448.2 192.157C448.2 192.16 448.2 192.163 448.2 192.166C448.2 192.168 448.2 192.171 448.2 192.174C448.2 192.177 448.2 192.18 448.2 192.183C448.2 192.186 448.2 192.188 448.2 192.191C448.2 192.194 448.2 192.197 448.2 192.2C448.2 192.203 448.2 192.206 448.2 192.208C448.2 192.211 448.2 192.214 448.2 192.217C448.2 192.22 448.2 192.223 448.2 192.225C448.2 192.228 448.2 192.231 448.2 192.234C448.2 192.237 448.2 192.24 448.2 192.243C448.2 192.245 448.2 192.248 448.2 192.251C448.2 192.254 448.2 192.257 448.2 192.26C448.2 192.263 448.2 192.265 448.2 192.268C448.2 192.271 448.2 192.274 448.2 192.277C448.2 192.28 448.2 192.283 448.2 192.285C448.2 192.288 448.2 192.291 448.2 192.294C448.2 192.297 448.2 192.3 448.2 192.302C448.2 192.305 448.2 192.308 448.2 192.311C448.2 192.314 448.2 192.317 448.2 192.32C448.2 192.322 448.2 192.325 448.2 192.328C448.2 192.331 448.2 192.334 448.2 192.337C448.2 192.34 448.2 192.342 448.2 192.345C448.2 192.348 448.2 192.351 448.2 192.354C448.2 192.357 448.2 192.36 448.2 192.362C448.2 192.365 448.2 192.368 448.2 192.371C448.2 192.374 448.2 192.377 448.2 192.379C448.2 192.382 448.2 192.385 448.2 192.388C448.2 192.391 448.2 192.394 448.2 192.397C448.2 192.399 448.2 192.402 448.2 192.405C448.2 192.408 448.2 192.411 448.2 192.414C448.2 192.417 448.2 192.419 448.2 192.422C448.2 192.425 448.2 192.428 448.2 192.431C448.2 192.434 448.2 192.437 448.2 192.439C448.2 192.442 448.2 192.445 448.2 192.448C448.2 192.451 448.2 192.454 448.2 192.456C448.2 192.459 448.2 192.462 448.2 192.465C448.2 192.468 448.2 192.471 448.2 192.474C448.2 192.476 448.2 192.479 448.2 192.482C448.2 192.485 448.2 192.488 448.2 192.491C448.2 192.494 448.2 192.496 448.2 192.499C448.2 192.502 448.2 192.505 448.2 192.508C448.2 192.511 448.2 192.514 448.2 192.516C448.2 192.519 448.2 192.522 448.2 192.525C448.2 192.528 448.2 192.531 448.2 192.533C448.2 192.536 448.2 192.539 448.2 192.542C448.2 192.545 448.2 192.548 448.2 192.551C448.2 192.553 448.2 192.556 448.2 192.559C448.2 192.562 448.2 192.565 448.2 192.568C448.2 192.571 448.2 192.573 448.2 192.576C448.2 192.579 448.2 192.582 448.2 192.585C448.2 192.588 448.2 192.59 448.2 192.593C448.2 192.596 448.2 192.599 448.2 192.602C448.2 192.605 448.2 192.608 448.2 192.61C448.2 192.613 448.2 192.616 448.2 192.619C448.2 192.622 448.2 192.625 448.2 192.628C448.2 192.63 448.2 192.633 448.2 192.636C448.2 192.639 448.2 192.642 448.2 192.645C448.2 192.648 448.2 192.65 448.2 192.653C448.2 192.656 448.2 192.659 448.2 192.662C448.2 192.665 448.2 192.667 448.2 192.67C448.2 192.673 448.2 192.676 448.2 192.679C448.2 192.682 448.2 192.685 448.2 192.687C448.2 192.69 448.2 192.693 448.2 192.696C448.2 192.699 448.2 192.702 448.2 192.705C448.2 192.707 448.2 192.71 448.2 192.713C448.2 192.716 448.2 192.719 448.2 192.722C448.2 192.725 448.2 192.727 448.2 192.73C448.2 192.733 448.2 192.736 448.2 192.739C448.2 192.742 448.2 192.744 448.2 192.747C448.2 192.75 448.2 192.753 448.2 192.756C448.2 192.759 448.2 192.762 448.2 192.764C448.2 192.767 448.2 192.77 448.2 192.773C448.2 192.776 448.2 192.779 448.2 192.782C448.2 192.784 448.2 192.787 448.2 192.79C448.2 192.793 448.2 192.796 448.2 192.799C448.2 192.802 448.2 192.804 448.2 192.807C448.2 192.81 448.2 192.813 448.2 192.816C448.2 192.819 448.2 192.821 448.2 192.824C448.2 192.827 448.2 192.83 448.2 192.833C448.2 192.836 448.2 192.839 448.2 192.841C448.2 192.844 448.2 192.847 448.2 192.85C448.2 192.853 448.2 192.856 448.2 192.859C448.2 192.861 448.2 192.864 448.2 192.867C448.2 192.87 448.2 192.873 448.2 192.876C448.2 192.878 448.2 192.881 448.2 192.884C448.2 192.887 448.2 192.89 448.2 192.893C448.2 192.896 448.2 192.898 448.2 192.901C448.2 192.904 448.2 192.907 448.2 192.91C448.2 192.913 448.2 192.916 448.2 192.918C448.2 192.921 448.2 192.924 448.2 192.927C448.2 192.93 448.2 192.933 448.2 192.936C448.2 192.938 448.2 192.941 448.2 192.944C448.2 192.947 448.2 192.95 448.2 192.953C448.2 192.955 448.2 192.958 448.2 192.961C448.2 192.964 448.2 192.967 448.2 192.97C448.2 192.973 448.2 192.975 448.2 192.978C448.2 192.981 448.2 192.984 448.2 192.987C448.2 192.99 448.2 192.993 448.2 192.995C448.2 192.998 448.2 193.001 448.2 193.004C448.2 193.007 448.2 193.01 448.2 193.013C448.2 193.015 448.2 193.018 448.2 193.021C448.2 193.024 448.2 193.027 448.2 193.03C448.2 193.032 448.2 193.035 448.2 193.038C448.2 193.041 448.2 193.044 448.2 193.047C448.2 193.05 448.2 193.052 448.2 193.055C448.2 193.058 448.2 193.061 448.2 193.064C448.2 193.067 448.2 193.07 448.2 193.072C448.2 193.075 448.2 193.078 448.2 193.081C448.2 193.084 448.2 193.087 448.2 193.09C448.2 193.092 448.2 193.095 448.2 193.098C448.2 193.101 448.2 193.104 448.2 193.107C448.2 193.109 448.2 193.112 448.2 193.115C448.2 193.118 448.2 193.121 448.2 193.124C448.2 193.127 448.2 193.129 448.2 193.132C448.2 193.135 448.2 193.138 448.2 193.141C448.2 193.144 448.2 193.147 448.2 193.149C448.2 193.152 448.2 193.155 448.2 193.158C448.2 193.161 448.2 193.164 448.2 193.167C448.2 193.169 448.2 193.172 448.2 193.175C448.2 193.178 448.2 193.181 448.2 193.184C448.2 193.186 448.2 193.189 448.2 193.192C448.2 193.195 448.2 193.198 448.2 193.201C448.2 193.204 448.2 193.206 448.2 193.209C448.2 193.212 448.2 193.215 448.2 193.218C448.2 193.221 448.2 193.224 448.2 193.226C448.2 193.229 448.2 193.232 448.2 193.235C448.2 193.238 448.2 193.241 448.2 193.243C448.2 193.246 448.2 193.249 448.2 193.252C448.2 193.255 448.2 193.258 448.2 193.261C448.2 193.263 448.2 193.266 448.2 193.269C448.2 193.272 448.2 193.275 448.2 193.278C448.2 193.281 448.2 193.283 448.2 193.286C448.2 193.289 448.2 193.292 448.2 193.295C448.2 193.298 448.2 193.301 448.2 193.303C448.2 193.306 448.2 193.309 448.2 193.312C448.2 193.315 448.2 193.318 448.2 193.32C448.2 193.323 448.2 193.326 448.2 193.329C448.2 193.332 448.2 193.335 448.2 193.338C448.2 193.34 448.2 193.343 448.2 193.346C448.2 193.349 448.2 193.352 448.2 193.355C448.2 193.358 448.2 193.36 448.2 193.363C448.2 193.366 448.2 193.369 448.2 193.372C448.2 193.375 448.2 193.378 448.2 193.38C448.2 193.383 448.2 193.386 448.2 193.389C448.2 193.392 448.2 193.395 448.2 193.397C448.2 193.4 448.2 193.403 448.2 193.406C448.2 193.409 448.2 193.412 448.2 193.415C448.2 193.417 448.2 193.42 448.2 193.423C448.2 193.426 448.2 193.429 448.2 193.432C448.2 193.435 448.2 193.437 448.2 193.44C448.2 193.443 448.2 193.446 448.2 193.449C448.2 193.452 448.2 193.455 448.2 193.457C448.2 193.46 448.2 193.463 448.2 193.466C448.2 193.469 448.2 193.472 448.2 193.474C448.2 193.477 448.2 193.48 448.2 193.483C448.2 193.486 448.2 193.489 448.2 193.492C448.2 193.494 448.2 193.497 448.2 193.5C448.2 193.503 448.2 193.506 448.2 193.509C448.2 193.512 448.2 193.514 448.2 193.517C448.2 193.52 448.2 193.523 448.2 193.526C448.2 193.529 448.2 193.532 448.2 193.534C448.2 193.537 448.2 193.54 448.2 193.543C448.2 193.546 448.2 193.549 448.2 193.551C448.2 193.554 448.2 193.557 448.2 193.56C448.2 193.563 448.2 193.566 448.2 193.569C448.2 193.571 448.2 193.574 448.2 193.577C448.2 193.58 448.2 193.583 448.2 193.586C448.2 193.589 448.2 193.591 448.2 193.594C448.2 193.597 448.2 193.6 448.2 193.603C448.2 193.606 448.2 193.609 448.2 193.611C448.2 193.614 448.2 193.617 448.2 193.62C448.2 193.623 448.2 193.626 448.2 193.628C448.2 193.631 448.2 193.634 448.2 193.637C448.2 193.64 448.2 193.643 448.2 193.646C448.2 193.648 448.2 193.651 448.2 193.654C448.2 193.657 448.2 193.66 448.2 193.663C448.2 193.666 448.2 193.668 448.2 193.671C448.2 193.674 448.2 193.677 448.2 193.68C448.2 193.683 448.2 193.685 448.2 193.688C448.2 193.691 448.2 193.694 448.2 193.697C448.2 193.7 448.2 193.703 448.2 193.705C448.2 193.708 448.2 193.711 448.2 193.714C448.2 193.717 448.2 193.72 448.2 193.723C448.2 193.725 448.2 193.728 448.2 193.731C448.2 193.734 448.2 193.737 448.2 193.74C448.2 193.743 448.2 193.745 448.2 193.748C448.2 193.751 448.2 193.754 448.2 193.757C448.2 193.76 448.2 193.762 448.2 193.765C448.2 193.768 448.2 193.771 448.2 193.774C448.2 193.777 448.2 193.78 448.2 193.782C448.2 193.785 448.2 193.788 448.2 193.791C448.2 193.794 448.2 193.797 448.2 193.8C448.2 193.802 448.2 193.805 448.2 193.808C448.2 193.811 448.2 193.814 448.2 193.817C448.2 193.82 448.2 193.822 448.2 193.825C448.2 193.828 448.2 193.831 448.2 193.834C448.2 193.837 448.2 193.839 448.2 193.842C448.2 193.845 448.2 193.848 448.2 193.851C448.2 193.854 448.2 193.857 448.2 193.859C448.2 193.862 448.2 193.865 448.2 193.868H478.2ZM478.2 189.488C478.2 170.983 472.198 154.806 459.13 143.53C446.42 132.562 429.127 128.06 410.056 128.06V158.06C424.857 158.06 434.136 161.588 439.53 166.242C444.566 170.588 448.2 177.625 448.2 189.488H478.2ZM689.258 150.652V165.652H704.258V150.652H689.258ZM666.774 150.652H651.774V165.652H666.774V150.652ZM666.774 199.708V184.708H651.774V199.708H666.774ZM689.258 199.708H704.258V184.708H689.258V199.708ZM600.49 260.92C575.438 260.92 555.069 252.297 540.97 237.93C526.863 223.553 517.962 202.324 517.962 175.18H487.962C487.962 209.064 499.21 238.205 519.558 258.941C539.915 279.687 568.31 290.92 600.49 290.92V260.92ZM517.962 175.18C517.962 148.036 526.863 126.807 540.97 112.43C555.069 98.0632 575.438 89.44 600.49 89.44V59.44C568.31 59.44 539.915 70.6728 519.558 91.4185C499.21 112.155 487.962 141.296 487.962 175.18H517.962ZM600.49 89.44C623.074 89.44 641.769 95.7787 654.48 105.889C666.914 115.779 674.258 129.696 674.258 147.148H704.258C704.258 120.216 692.477 97.7792 673.155 82.4107C654.112 67.2633 628.422 59.44 600.49 59.44V89.44ZM674.258 147.148V150.652H704.258V147.148H674.258ZM689.258 135.652H666.774V165.652H689.258V135.652ZM681.774 150.652V147.148H651.774V150.652H681.774ZM681.774 147.148C681.774 126.755 674.525 108.996 659.292 96.7094C644.548 84.8176 624.221 79.588 600.782 79.588V109.588C620.268 109.588 632.937 113.994 640.458 120.061C647.489 125.732 651.774 134.253 651.774 147.148H681.774ZM600.782 79.588C573.626 79.588 550.198 87.2895 533.683 104.601C517.275 121.798 509.862 146.212 509.862 175.18H539.862C539.862 151.004 546.027 135.122 555.389 125.309C564.642 115.61 579.175 109.588 600.782 109.588V79.588ZM509.862 175.18C509.862 204.148 517.275 228.562 533.683 245.759C550.198 263.07 573.626 270.772 600.782 270.772V240.772C579.175 240.772 564.642 234.749 555.389 225.051C546.027 215.238 539.862 199.356 539.862 175.18H509.862ZM600.782 270.772C624.221 270.772 644.548 265.542 659.292 253.651C674.525 241.364 681.774 223.605 681.774 203.212H651.774C651.774 216.107 647.489 224.628 640.458 230.299C632.937 236.366 620.268 240.772 600.782 240.772V270.772ZM681.774 203.212V199.708H651.774V203.212H681.774ZM666.774 214.708H689.258V184.708H666.774V214.708ZM674.258 199.708V203.212H704.258V199.708H674.258ZM674.258 203.212C674.258 220.703 666.955 234.613 654.577 244.481C641.917 254.573 623.236 260.92 600.49 260.92V290.92C628.553 290.92 654.255 283.105 673.278 267.939C692.582 252.549 704.258 230.105 704.258 203.212H674.258ZM737.732 273V288H752.732V273H737.732ZM717 273H702V288H717V273ZM717 128.752V113.752H702V128.752H717ZM735.688 128.752H750.688V113.752H735.688V128.752ZM735.688 168.172H720.688V183.172H735.688V168.172ZM737.148 168.172V183.172H749.568L751.885 170.97L737.148 168.172ZM835.844 191.532V206.532H850.844V191.532H835.844ZM815.112 191.532H800.112V206.532H815.112V191.532ZM737.732 258H717V288H737.732V258ZM732 273V128.752H702V273H732ZM717 143.752H735.688V113.752H717V143.752ZM720.688 128.752V168.172H750.688V128.752H720.688ZM735.688 183.172H737.148V153.172H735.688V183.172ZM751.885 170.97C753.594 161.969 757.484 154.518 763.057 149.405C768.447 144.46 776.338 140.832 787.956 140.832V110.832C769.499 110.832 754.176 116.84 742.776 127.298C731.559 137.588 725.083 151.307 722.412 165.374L751.885 170.97ZM787.956 140.832C800.538 140.832 808.097 145.271 812.802 150.986C817.857 157.129 820.844 166.302 820.844 177.224H850.844C850.844 161.282 846.531 144.759 835.965 131.922C825.048 118.657 808.663 110.832 787.956 110.832V140.832ZM820.844 177.224V191.532H850.844V177.224H820.844ZM835.844 176.532H815.112V206.532H835.844V176.532ZM830.112 191.532V180.436H800.112V191.532H830.112ZM830.112 180.436C830.112 166.506 827.275 152.804 817.794 142.716C808.127 132.429 794.454 128.936 779.78 128.936V158.936C790.219 158.936 794.212 161.429 795.933 163.26C797.84 165.29 800.112 169.838 800.112 180.436H830.112ZM779.78 128.936C761.828 128.936 746.446 134.764 736.055 147.864C726.19 160.3 722.732 176.959 722.732 194.744H752.732C752.732 180.117 755.699 171.372 759.558 166.507C762.891 162.306 768.533 158.936 779.78 158.936V128.936ZM722.732 194.744V273H752.732V194.744H722.732ZM999.148 206.716V221.716H1011.08L1013.76 210.089L999.148 206.716ZM872.128 206.716V191.716H856.577L857.137 207.256L872.128 206.716ZM977.832 223.068V208.068H962.832V223.068H977.832ZM998.564 223.068H1013.56V208.068H998.564V223.068ZM872.128 193.868L857.144 193.174L856.417 208.868H872.128V193.868ZM981.044 193.868V208.868H996.044V193.868H981.044ZM928.484 260.92C908.451 260.92 893.526 254.681 883.661 244.924C873.812 235.184 867.564 220.518 867.564 200.876H837.564C837.564 227.078 846.062 249.934 862.566 266.255C879.053 282.559 902.088 290.92 928.484 290.92V260.92ZM867.564 200.876C867.564 182.357 873.682 167.565 883.647 157.462C893.572 147.399 908.449 140.832 928.192 140.832V110.832C901.506 110.832 878.57 119.887 862.288 136.396C846.045 152.865 837.564 175.595 837.564 200.876H867.564ZM928.192 140.832C946.547 140.832 960.793 146.131 970.259 154.625C979.518 162.935 985.608 175.54 985.608 193.284H1015.61C1015.61 168.104 1006.66 146.983 990.296 132.298C974.138 117.797 952.176 110.832 928.192 110.832V140.832ZM985.608 193.284C985.608 197.388 985.156 200.636 984.532 203.343L1013.76 210.089C1014.89 205.204 1015.61 199.692 1015.61 193.284H985.608ZM999.148 191.716H872.128V221.716H999.148V191.716ZM857.137 207.256C857.804 225.75 862.98 243.003 875.733 255.551C888.537 268.149 906.624 273.692 928.192 273.692V243.692C911.508 243.692 902.146 239.453 896.774 234.166C891.349 228.829 887.62 220.094 887.118 206.176L857.137 207.256ZM928.192 273.692C946.583 273.692 962.581 270.352 974.36 262.044C986.989 253.135 992.832 239.896 992.832 225.112H962.832C962.832 231.352 960.791 234.903 957.068 237.528C952.495 240.754 943.673 243.692 928.192 243.692V273.692ZM992.832 225.112V223.068H962.832V225.112H992.832ZM977.832 238.068H998.564V208.068H977.832V238.068ZM983.564 223.068V225.112H1013.56V223.068H983.564ZM983.564 225.112C983.564 234.625 979.045 243.049 969.899 249.601C960.496 256.337 946.224 260.92 928.484 260.92V290.92C951.039 290.92 971.807 285.137 987.37 273.988C1003.19 262.655 1013.56 245.675 1013.56 225.112H983.564ZM927.9 128.06C906.727 128.06 888.886 133.548 876.136 145.838C863.413 158.101 857.986 174.992 857.144 193.174L887.112 194.562C887.73 181.208 891.501 172.695 896.955 167.438C902.381 162.208 911.696 158.06 927.9 158.06V128.06ZM872.128 208.868H981.044V178.868H872.128V208.868ZM996.044 193.868C996.044 193.865 996.044 193.862 996.044 193.859C996.044 193.857 996.044 193.854 996.044 193.851C996.044 193.848 996.044 193.845 996.044 193.842C996.044 193.839 996.044 193.837 996.044 193.834C996.044 193.831 996.044 193.828 996.044 193.825C996.044 193.822 996.044 193.82 996.044 193.817C996.044 193.814 996.044 193.811 996.044 193.808C996.044 193.805 996.044 193.802 996.044 193.8C996.044 193.797 996.044 193.794 996.044 193.791C996.044 193.788 996.044 193.785 996.044 193.782C996.044 193.78 996.044 193.777 996.044 193.774C996.044 193.771 996.044 193.768 996.044 193.765C996.044 193.762 996.044 193.76 996.044 193.757C996.044 193.754 996.044 193.751 996.044 193.748C996.044 193.745 996.044 193.743 996.044 193.74C996.044 193.737 996.044 193.734 996.044 193.731C996.044 193.728 996.044 193.725 996.044 193.723C996.044 193.72 996.044 193.717 996.044 193.714C996.044 193.711 996.044 193.708 996.044 193.705C996.044 193.703 996.044 193.7 996.044 193.697C996.044 193.694 996.044 193.691 996.044 193.688C996.044 193.685 996.044 193.683 996.044 193.68C996.044 193.677 996.044 193.674 996.044 193.671C996.044 193.668 996.044 193.666 996.044 193.663C996.044 193.66 996.044 193.657 996.044 193.654C996.044 193.651 996.044 193.648 996.044 193.646C996.044 193.643 996.044 193.64 996.044 193.637C996.044 193.634 996.044 193.631 996.044 193.628C996.044 193.626 996.044 193.623 996.044 193.62C996.044 193.617 996.044 193.614 996.044 193.611C996.044 193.609 996.044 193.606 996.044 193.603C996.044 193.6 996.044 193.597 996.044 193.594C996.044 193.591 996.044 193.589 996.044 193.586C996.044 193.583 996.044 193.58 996.044 193.577C996.044 193.574 996.044 193.571 996.044 193.569C996.044 193.566 996.044 193.563 996.044 193.56C996.044 193.557 996.044 193.554 996.044 193.551C996.044 193.549 996.044 193.546 996.044 193.543C996.044 193.54 996.044 193.537 996.044 193.534C996.044 193.532 996.044 193.529 996.044 193.526C996.044 193.523 996.044 193.52 996.044 193.517C996.044 193.514 996.044 193.512 996.044 193.509C996.044 193.506 996.044 193.503 996.044 193.5C996.044 193.497 996.044 193.494 996.044 193.492C996.044 193.489 996.044 193.486 996.044 193.483C996.044 193.48 996.044 193.477 996.044 193.474C996.044 193.472 996.044 193.469 996.044 193.466C996.044 193.463 996.044 193.46 996.044 193.457C996.044 193.455 996.044 193.452 996.044 193.449C996.044 193.446 996.044 193.443 996.044 193.44C996.044 193.437 996.044 193.435 996.044 193.432C996.044 193.429 996.044 193.426 996.044 193.423C996.044 193.42 996.044 193.417 996.044 193.415C996.044 193.412 996.044 193.409 996.044 193.406C996.044 193.403 996.044 193.4 996.044 193.397C996.044 193.395 996.044 193.392 996.044 193.389C996.044 193.386 996.044 193.383 996.044 193.38C996.044 193.378 996.044 193.375 996.044 193.372C996.044 193.369 996.044 193.366 996.044 193.363C996.044 193.36 996.044 193.358 996.044 193.355C996.044 193.352 996.044 193.349 996.044 193.346C996.044 193.343 996.044 193.34 996.044 193.338C996.044 193.335 996.044 193.332 996.044 193.329C996.044 193.326 996.044 193.323 996.044 193.32C996.044 193.318 996.044 193.315 996.044 193.312C996.044 193.309 996.044 193.306 996.044 193.303C996.044 193.301 996.044 193.298 996.044 193.295C996.044 193.292 996.044 193.289 996.044 193.286C996.044 193.283 996.044 193.281 996.044 193.278C996.044 193.275 996.044 193.272 996.044 193.269C996.044 193.266 996.044 193.263 996.044 193.261C996.044 193.258 996.044 193.255 996.044 193.252C996.044 193.249 996.044 193.246 996.044 193.243C996.044 193.241 996.044 193.238 996.044 193.235C996.044 193.232 996.044 193.229 996.044 193.226C996.044 193.224 996.044 193.221 996.044 193.218C996.044 193.215 996.044 193.212 996.044 193.209C996.044 193.206 996.044 193.204 996.044 193.201C996.044 193.198 996.044 193.195 996.044 193.192C996.044 193.189 996.044 193.186 996.044 193.184C996.044 193.181 996.044 193.178 996.044 193.175C996.044 193.172 996.044 193.169 996.044 193.167C996.044 193.164 996.044 193.161 996.044 193.158C996.044 193.155 996.044 193.152 996.044 193.149C996.044 193.147 996.044 193.144 996.044 193.141C996.044 193.138 996.044 193.135 996.044 193.132C996.044 193.129 996.044 193.127 996.044 193.124C996.044 193.121 996.044 193.118 996.044 193.115C996.044 193.112 996.044 193.109 996.044 193.107C996.044 193.104 996.044 193.101 996.044 193.098C996.044 193.095 996.044 193.092 996.044 193.09C996.044 193.087 996.044 193.084 996.044 193.081C996.044 193.078 996.044 193.075 996.044 193.072C996.044 193.07 996.044 193.067 996.044 193.064C996.044 193.061 996.044 193.058 996.044 193.055C996.044 193.052 996.044 193.05 996.044 193.047C996.044 193.044 996.044 193.041 996.044 193.038C996.044 193.035 996.044 193.032 996.044 193.03C996.044 193.027 996.044 193.024 996.044 193.021C996.044 193.018 996.044 193.015 996.044 193.013C996.044 193.01 996.044 193.007 996.044 193.004C996.044 193.001 996.044 192.998 996.044 192.995C996.044 192.993 996.044 192.99 996.044 192.987C996.044 192.984 996.044 192.981 996.044 192.978C996.044 192.975 996.044 192.973 996.044 192.97C996.044 192.967 996.044 192.964 996.044 192.961C996.044 192.958 996.044 192.955 996.044 192.953C996.044 192.95 996.044 192.947 996.044 192.944C996.044 192.941 996.044 192.938 996.044 192.936C996.044 192.933 996.044 192.93 996.044 192.927C996.044 192.924 996.044 192.921 996.044 192.918C996.044 192.916 996.044 192.913 996.044 192.91C996.044 192.907 996.044 192.904 996.044 192.901C996.044 192.898 996.044 192.896 996.044 192.893C996.044 192.89 996.044 192.887 996.044 192.884C996.044 192.881 996.044 192.878 996.044 192.876C996.044 192.873 996.044 192.87 996.044 192.867C996.044 192.864 996.044 192.861 996.044 192.859C996.044 192.856 996.044 192.853 996.044 192.85C996.044 192.847 996.044 192.844 996.044 192.841C996.044 192.839 996.044 192.836 996.044 192.833C996.044 192.83 996.044 192.827 996.044 192.824C996.044 192.821 996.044 192.819 996.044 192.816C996.044 192.813 996.044 192.81 996.044 192.807C996.044 192.804 996.044 192.802 996.044 192.799C996.044 192.796 996.044 192.793 996.044 192.79C996.044 192.787 996.044 192.784 996.044 192.782C996.044 192.779 996.044 192.776 996.044 192.773C996.044 192.77 996.044 192.767 996.044 192.764C996.044 192.762 996.044 192.759 996.044 192.756C996.044 192.753 996.044 192.75 996.044 192.747C996.044 192.744 996.044 192.742 996.044 192.739C996.044 192.736 996.044 192.733 996.044 192.73C996.044 192.727 996.044 192.725 996.044 192.722C996.044 192.719 996.044 192.716 996.044 192.713C996.044 192.71 996.044 192.707 996.044 192.705C996.044 192.702 996.044 192.699 996.044 192.696C996.044 192.693 996.044 192.69 996.044 192.687C996.044 192.685 996.044 192.682 996.044 192.679C996.044 192.676 996.044 192.673 996.044 192.67C996.044 192.667 996.044 192.665 996.044 192.662C996.044 192.659 996.044 192.656 996.044 192.653C996.044 192.65 996.044 192.648 996.044 192.645C996.044 192.642 996.044 192.639 996.044 192.636C996.044 192.633 996.044 192.63 996.044 192.628C996.044 192.625 996.044 192.622 996.044 192.619C996.044 192.616 996.044 192.613 996.044 192.61C996.044 192.608 996.044 192.605 996.044 192.602C996.044 192.599 996.044 192.596 996.044 192.593C996.044 192.59 996.044 192.588 996.044 192.585C996.044 192.582 996.044 192.579 996.044 192.576C996.044 192.573 996.044 192.571 996.044 192.568C996.044 192.565 996.044 192.562 996.044 192.559C996.044 192.556 996.044 192.553 996.044 192.551C996.044 192.548 996.044 192.545 996.044 192.542C996.044 192.539 996.044 192.536 996.044 192.533C996.044 192.531 996.044 192.528 996.044 192.525C996.044 192.522 996.044 192.519 996.044 192.516C996.044 192.514 996.044 192.511 996.044 192.508C996.044 192.505 996.044 192.502 996.044 192.499C996.044 192.496 996.044 192.494 996.044 192.491C996.044 192.488 996.044 192.485 996.044 192.482C996.044 192.479 996.044 192.476 996.044 192.474C996.044 192.471 996.044 192.468 996.044 192.465C996.044 192.462 996.044 192.459 996.044 192.456C996.044 192.454 996.044 192.451 996.044 192.448C996.044 192.445 996.044 192.442 996.044 192.439C996.044 192.437 996.044 192.434 996.044 192.431C996.044 192.428 996.044 192.425 996.044 192.422C996.044 192.419 996.044 192.417 996.044 192.414C996.044 192.411 996.044 192.408 996.044 192.405C996.044 192.402 996.044 192.399 996.044 192.397C996.044 192.394 996.044 192.391 996.044 192.388C996.044 192.385 996.044 192.382 996.044 192.379C996.044 192.377 996.044 192.374 996.044 192.371C996.044 192.368 996.044 192.365 996.044 192.362C996.044 192.36 996.044 192.357 996.044 192.354C996.044 192.351 996.044 192.348 996.044 192.345C996.044 192.342 996.044 192.34 996.044 192.337C996.044 192.334 996.044 192.331 996.044 192.328C996.044 192.325 996.044 192.322 996.044 192.32C996.044 192.317 996.044 192.314 996.044 192.311C996.044 192.308 996.044 192.305 996.044 192.302C996.044 192.3 996.044 192.297 996.044 192.294C996.044 192.291 996.044 192.288 996.044 192.285C996.044 192.283 996.044 192.28 996.044 192.277C996.044 192.274 996.044 192.271 996.044 192.268C996.044 192.265 996.044 192.263 996.044 192.26C996.044 192.257 996.044 192.254 996.044 192.251C996.044 192.248 996.044 192.245 996.044 192.243C996.044 192.24 996.044 192.237 996.044 192.234C996.044 192.231 996.044 192.228 996.044 192.225C996.044 192.223 996.044 192.22 996.044 192.217C996.044 192.214 996.044 192.211 996.044 192.208C996.044 192.206 996.044 192.203 996.044 192.2C996.044 192.197 996.044 192.194 996.044 192.191C996.044 192.188 996.044 192.186 996.044 192.183C996.044 192.18 996.044 192.177 996.044 192.174C996.044 192.171 996.044 192.168 996.044 192.166C996.044 192.163 996.044 192.16 996.044 192.157C996.044 192.154 996.044 192.151 996.044 192.148C996.044 192.146 996.044 192.143 996.044 192.14C996.044 192.137 996.044 192.134 996.044 192.131C996.044 192.129 996.044 192.126 996.044 192.123C996.044 192.12 996.044 192.117 996.044 192.114C996.044 192.111 996.044 192.109 996.044 192.106C996.044 192.103 996.044 192.1 996.044 192.097C996.044 192.094 996.044 192.091 996.044 192.089C996.044 192.086 996.044 192.083 996.044 192.08C996.044 192.077 996.044 192.074 996.044 192.072C996.044 192.069 996.044 192.066 996.044 192.063C996.044 192.06 996.044 192.057 996.044 192.054C996.044 192.052 996.044 192.049 996.044 192.046C996.044 192.043 996.044 192.04 996.044 192.037C996.044 192.034 996.044 192.032 996.044 192.029C996.044 192.026 996.044 192.023 996.044 192.02C996.044 192.017 996.044 192.014 996.044 192.012C996.044 192.009 996.044 192.006 996.044 192.003C996.044 192 996.044 191.997 996.044 191.995C996.044 191.992 996.044 191.989 996.044 191.986C996.044 191.983 996.044 191.98 996.044 191.977C996.044 191.975 996.044 191.972 996.044 191.969C996.044 191.966 996.044 191.963 996.044 191.96C996.044 191.957 996.044 191.955 996.044 191.952C996.044 191.949 996.044 191.946 996.044 191.943C996.044 191.94 996.044 191.937 996.044 191.935C996.044 191.932 996.044 191.929 996.044 191.926C996.044 191.923 996.044 191.92 996.044 191.918C996.044 191.915 996.044 191.912 996.044 191.909C996.044 191.906 996.044 191.903 996.044 191.9C996.044 191.898 996.044 191.895 996.044 191.892C996.044 191.889 996.044 191.886 996.044 191.883C996.044 191.88 996.044 191.878 996.044 191.875C996.044 191.872 996.044 191.869 996.044 191.866C996.044 191.863 996.044 191.86 996.044 191.858C996.044 191.855 996.044 191.852 996.044 191.849C996.044 191.846 996.044 191.843 996.044 191.841C996.044 191.838 996.044 191.835 996.044 191.832C996.044 191.829 996.044 191.826 996.044 191.823C996.044 191.821 996.044 191.818 996.044 191.815C996.044 191.812 996.044 191.809 996.044 191.806C996.044 191.803 996.044 191.801 996.044 191.798C996.044 191.795 996.044 191.792 996.044 191.789C996.044 191.786 996.044 191.784 996.044 191.781C996.044 191.778 996.044 191.775 996.044 191.772C996.044 191.769 996.044 191.766 996.044 191.764C996.044 191.761 996.044 191.758 996.044 191.755C996.044 191.752 996.044 191.749 996.044 191.746C996.044 191.744 996.044 191.741 996.044 191.738C996.044 191.735 996.044 191.732 996.044 191.729C996.044 191.726 996.044 191.724 996.044 191.721C996.044 191.718 996.044 191.715 996.044 191.712C996.044 191.709 996.044 191.707 996.044 191.704C996.044 191.701 996.044 191.698 996.044 191.695C996.044 191.692 996.044 191.689 996.044 191.687C996.044 191.684 996.044 191.681 996.044 191.678C996.044 191.675 996.044 191.672 996.044 191.669C996.044 191.667 996.044 191.664 996.044 191.661C996.044 191.658 996.044 191.655 996.044 191.652C996.044 191.649 996.044 191.647 996.044 191.644C996.044 191.641 996.044 191.638 996.044 191.635C996.044 191.632 996.044 191.63 996.044 191.627C996.044 191.624 996.044 191.621 996.044 191.618C996.044 191.615 996.044 191.612 996.044 191.61C996.044 191.607 996.044 191.604 996.044 191.601C996.044 191.598 996.044 191.595 996.044 191.592C996.044 191.59 996.044 191.587 996.044 191.584C996.044 191.581 996.044 191.578 996.044 191.575C996.044 191.572 996.044 191.57 996.044 191.567C996.044 191.564 996.044 191.561 996.044 191.558C996.044 191.555 996.044 191.553 996.044 191.55C996.044 191.547 996.044 191.544 996.044 191.541C996.044 191.538 996.044 191.535 996.044 191.533C996.044 191.53 996.044 191.527 996.044 191.524C996.044 191.521 996.044 191.518 996.044 191.515C996.044 191.513 996.044 191.51 996.044 191.507C996.044 191.504 996.044 191.501 996.044 191.498C996.044 191.495 996.044 191.493 996.044 191.49C996.044 191.487 996.044 191.484 996.044 191.481C996.044 191.478 996.044 191.476 996.044 191.473C996.044 191.47 996.044 191.467 996.044 191.464C996.044 191.461 996.044 191.458 996.044 191.456C996.044 191.453 996.044 191.45 996.044 191.447C996.044 191.444 996.044 191.441 996.044 191.438C996.044 191.436 996.044 191.433 996.044 191.43C996.044 191.427 996.044 191.424 996.044 191.421C996.044 191.419 996.044 191.416 996.044 191.413C996.044 191.41 996.044 191.407 996.044 191.404C996.044 191.401 996.044 191.399 996.044 191.396C996.044 191.393 996.044 191.39 996.044 191.387C996.044 191.384 996.044 191.381 996.044 191.379C996.044 191.376 996.044 191.373 996.044 191.37C996.044 191.367 996.044 191.364 996.044 191.361C996.044 191.359 996.044 191.356 996.044 191.353C996.044 191.35 996.044 191.347 996.044 191.344C996.044 191.342 996.044 191.339 996.044 191.336C996.044 191.333 996.044 191.33 996.044 191.327C996.044 191.324 996.044 191.322 996.044 191.319C996.044 191.316 996.044 191.313 996.044 191.31C996.044 191.307 996.044 191.304 996.044 191.302C996.044 191.299 996.044 191.296 996.044 191.293C996.044 191.29 996.044 191.287 996.044 191.284C996.044 191.282 996.044 191.279 996.044 191.276C996.044 191.273 996.044 191.27 996.044 191.267C996.044 191.265 996.044 191.262 996.044 191.259C996.044 191.256 996.044 191.253 996.044 191.25C996.044 191.247 996.044 191.245 996.044 191.242C996.044 191.239 996.044 191.236 996.044 191.233C996.044 191.23 996.044 191.227 996.044 191.225C996.044 191.222 996.044 191.219 996.044 191.216C996.044 191.213 996.044 191.21 996.044 191.207C996.044 191.205 996.044 191.202 996.044 191.199C996.044 191.196 996.044 191.193 996.044 191.19C996.044 191.188 996.044 191.185 996.044 191.182C996.044 191.179 996.044 191.176 996.044 191.173C996.044 191.17 996.044 191.168 996.044 191.165C996.044 191.162 996.044 191.159 996.044 191.156C996.044 191.153 996.044 191.15 996.044 191.148C996.044 191.145 996.044 191.142 996.044 191.139C996.044 191.136 996.044 191.133 996.044 191.13C996.044 191.128 996.044 191.125 996.044 191.122C996.044 191.119 996.044 191.116 996.044 191.113C996.044 191.111 996.044 191.108 996.044 191.105C996.044 191.102 996.044 191.099 996.044 191.096C996.044 191.093 996.044 191.091 996.044 191.088C996.044 191.085 996.044 191.082 996.044 191.079C996.044 191.076 996.044 191.073 996.044 191.071C996.044 191.068 996.044 191.065 996.044 191.062C996.044 191.059 996.044 191.056 996.044 191.053C996.044 191.051 996.044 191.048 996.044 191.045C996.044 191.042 996.044 191.039 996.044 191.036C996.044 191.034 996.044 191.031 996.044 191.028C996.044 191.025 996.044 191.022 996.044 191.019C996.044 191.016 996.044 191.014 996.044 191.011C996.044 191.008 996.044 191.005 996.044 191.002C996.044 190.999 996.044 190.996 996.044 190.994C996.044 190.991 996.044 190.988 996.044 190.985C996.044 190.982 996.044 190.979 996.044 190.977C996.044 190.974 996.044 190.971 996.044 190.968C996.044 190.965 996.044 190.962 996.044 190.959C996.044 190.957 996.044 190.954 996.044 190.951C996.044 190.948 996.044 190.945 996.044 190.942C996.044 190.939 996.044 190.937 996.044 190.934C996.044 190.931 996.044 190.928 996.044 190.925C996.044 190.922 996.044 190.919 996.044 190.917C996.044 190.914 996.044 190.911 996.044 190.908C996.044 190.905 996.044 190.902 996.044 190.9C996.044 190.897 996.044 190.894 996.044 190.891C996.044 190.888 996.044 190.885 996.044 190.882C996.044 190.88 996.044 190.877 996.044 190.874C996.044 190.871 996.044 190.868 996.044 190.865C996.044 190.862 996.044 190.86 996.044 190.857C996.044 190.854 996.044 190.851 996.044 190.848C996.044 190.845 996.044 190.842 996.044 190.84C996.044 190.837 996.044 190.834 996.044 190.831C996.044 190.828 996.044 190.825 996.044 190.823C996.044 190.82 996.044 190.817 996.044 190.814C996.044 190.811 996.044 190.808 996.044 190.805C996.044 190.803 996.044 190.8 996.044 190.797C996.044 190.794 996.044 190.791 996.044 190.788C996.044 190.785 996.044 190.783 996.044 190.78C996.044 190.777 996.044 190.774 996.044 190.771C996.044 190.768 996.044 190.765 996.044 190.763C996.044 190.76 996.044 190.757 996.044 190.754C996.044 190.751 996.044 190.748 996.044 190.746C996.044 190.743 996.044 190.74 996.044 190.737C996.044 190.734 996.044 190.731 996.044 190.728C996.044 190.726 996.044 190.723 996.044 190.72C996.044 190.717 996.044 190.714 996.044 190.711C996.044 190.708 996.044 190.706 996.044 190.703C996.044 190.7 996.044 190.697 996.044 190.694C996.044 190.691 996.044 190.689 996.044 190.686C996.044 190.683 996.044 190.68 996.044 190.677C996.044 190.674 996.044 190.671 996.044 190.669C996.044 190.666 996.044 190.663 996.044 190.66C996.044 190.657 996.044 190.654 996.044 190.651C996.044 190.649 996.044 190.646 996.044 190.643C996.044 190.64 996.044 190.637 996.044 190.634C996.044 190.631 996.044 190.629 996.044 190.626C996.044 190.623 996.044 190.62 996.044 190.617C996.044 190.614 996.044 190.612 996.044 190.609C996.044 190.606 996.044 190.603 996.044 190.6C996.044 190.597 996.044 190.594 996.044 190.592C996.044 190.589 996.044 190.586 996.044 190.583C996.044 190.58 996.044 190.577 996.044 190.574C996.044 190.572 996.044 190.569 996.044 190.566C996.044 190.563 996.044 190.56 996.044 190.557C996.044 190.554 996.044 190.552 996.044 190.549C996.044 190.546 996.044 190.543 996.044 190.54C996.044 190.537 996.044 190.535 996.044 190.532C996.044 190.529 996.044 190.526 996.044 190.523C996.044 190.52 996.044 190.517 996.044 190.515C996.044 190.512 996.044 190.509 996.044 190.506C996.044 190.503 996.044 190.5 996.044 190.497C996.044 190.495 996.044 190.492 996.044 190.489C996.044 190.486 996.044 190.483 996.044 190.48C996.044 190.477 996.044 190.475 996.044 190.472C996.044 190.469 996.044 190.466 996.044 190.463C996.044 190.46 996.044 190.458 996.044 190.455C996.044 190.452 996.044 190.449 996.044 190.446C996.044 190.443 996.044 190.44 996.044 190.438C996.044 190.435 996.044 190.432 996.044 190.429C996.044 190.426 996.044 190.423 996.044 190.42C996.044 190.418 996.044 190.415 996.044 190.412C996.044 190.409 996.044 190.406 996.044 190.403C996.044 190.4 996.044 190.398 996.044 190.395C996.044 190.392 996.044 190.389 996.044 190.386C996.044 190.383 996.044 190.381 996.044 190.378C996.044 190.375 996.044 190.372 996.044 190.369C996.044 190.366 996.044 190.363 996.044 190.361C996.044 190.358 996.044 190.355 996.044 190.352C996.044 190.349 996.044 190.346 996.044 190.343C996.044 190.341 996.044 190.338 996.044 190.335C996.044 190.332 996.044 190.329 996.044 190.326C996.044 190.324 996.044 190.321 996.044 190.318C996.044 190.315 996.044 190.312 996.044 190.309C996.044 190.306 996.044 190.304 996.044 190.301C996.044 190.298 996.044 190.295 996.044 190.292C996.044 190.289 996.044 190.286 996.044 190.284C996.044 190.281 996.044 190.278 996.044 190.275C996.044 190.272 996.044 190.269 996.044 190.266C996.044 190.264 996.044 190.261 996.044 190.258C996.044 190.255 996.044 190.252 996.044 190.249C996.044 190.247 996.044 190.244 996.044 190.241C996.044 190.238 996.044 190.235 996.044 190.232C996.044 190.229 996.044 190.227 996.044 190.224C996.044 190.221 996.044 190.218 996.044 190.215C996.044 190.212 996.044 190.209 996.044 190.207C996.044 190.204 996.044 190.201 996.044 190.198C996.044 190.195 996.044 190.192 996.044 190.189C996.044 190.187 996.044 190.184 996.044 190.181C996.044 190.178 996.044 190.175 996.044 190.172C996.044 190.17 996.044 190.167 996.044 190.164C996.044 190.161 996.044 190.158 996.044 190.155C996.044 190.152 996.044 190.15 996.044 190.147C996.044 190.144 996.044 190.141 996.044 190.138C996.044 190.135 996.044 190.132 996.044 190.13C996.044 190.127 996.044 190.124 996.044 190.121C996.044 190.118 996.044 190.115 996.044 190.112C996.044 190.11 996.044 190.107 996.044 190.104C996.044 190.101 996.044 190.098 996.044 190.095C996.044 190.093 996.044 190.09 996.044 190.087C996.044 190.084 996.044 190.081 996.044 190.078C996.044 190.075 996.044 190.073 996.044 190.07C996.044 190.067 996.044 190.064 996.044 190.061C996.044 190.058 996.044 190.055 996.044 190.053C996.044 190.05 996.044 190.047 996.044 190.044C996.044 190.041 996.044 190.038 996.044 190.035C996.044 190.033 996.044 190.03 996.044 190.027C996.044 190.024 996.044 190.021 996.044 190.018C996.044 190.016 996.044 190.013 996.044 190.01C996.044 190.007 996.044 190.004 996.044 190.001C996.044 189.998 996.044 189.996 996.044 189.993C996.044 189.99 996.044 189.987 996.044 189.984C996.044 189.981 996.044 189.978 996.044 189.976C996.044 189.973 996.044 189.97 996.044 189.967C996.044 189.964 996.044 189.961 996.044 189.958C996.044 189.956 996.044 189.953 996.044 189.95C996.044 189.947 996.044 189.944 996.044 189.941C996.044 189.939 996.044 189.936 996.044 189.933C996.044 189.93 996.044 189.927 996.044 189.924C996.044 189.921 996.044 189.919 996.044 189.916C996.044 189.913 996.044 189.91 996.044 189.907C996.044 189.904 996.044 189.901 996.044 189.899C996.044 189.896 996.044 189.893 996.044 189.89C996.044 189.887 996.044 189.884 996.044 189.882C996.044 189.879 996.044 189.876 996.044 189.873C996.044 189.87 996.044 189.867 996.044 189.864C996.044 189.862 996.044 189.859 996.044 189.856C996.044 189.853 996.044 189.85 996.044 189.847C996.044 189.844 996.044 189.842 996.044 189.839C996.044 189.836 996.044 189.833 996.044 189.83C996.044 189.827 996.044 189.824 996.044 189.822C996.044 189.819 996.044 189.816 996.044 189.813C996.044 189.81 996.044 189.807 996.044 189.805C996.044 189.802 996.044 189.799 996.044 189.796C996.044 189.793 996.044 189.79 996.044 189.787C996.044 189.785 996.044 189.782 996.044 189.779C996.044 189.776 996.044 189.773 996.044 189.77C996.044 189.767 996.044 189.765 996.044 189.762C996.044 189.759 996.044 189.756 996.044 189.753C996.044 189.75 996.044 189.747 996.044 189.745C996.044 189.742 996.044 189.739 996.044 189.736C996.044 189.733 996.044 189.73 996.044 189.728C996.044 189.725 996.044 189.722 996.044 189.719C996.044 189.716 996.044 189.713 996.044 189.71C996.044 189.708 996.044 189.705 996.044 189.702C996.044 189.699 996.044 189.696 996.044 189.693C996.044 189.69 996.044 189.688 996.044 189.685C996.044 189.682 996.044 189.679 996.044 189.676C996.044 189.673 996.044 189.671 996.044 189.668C996.044 189.665 996.044 189.662 996.044 189.659C996.044 189.656 996.044 189.653 996.044 189.651C996.044 189.648 996.044 189.645 996.044 189.642C996.044 189.639 996.044 189.636 996.044 189.633C996.044 189.631 996.044 189.628 996.044 189.625C996.044 189.622 996.044 189.619 996.044 189.616C996.044 189.613 996.044 189.611 996.044 189.608C996.044 189.605 996.044 189.602 996.044 189.599C996.044 189.596 996.044 189.594 996.044 189.591C996.044 189.588 996.044 189.585 996.044 189.582C996.044 189.579 996.044 189.576 996.044 189.574C996.044 189.571 996.044 189.568 996.044 189.565C996.044 189.562 996.044 189.559 996.044 189.556C996.044 189.554 996.044 189.551 996.044 189.548C996.044 189.545 996.044 189.542 996.044 189.539C996.044 189.536 996.044 189.534 996.044 189.531C996.044 189.528 996.044 189.525 996.044 189.522C996.044 189.519 996.044 189.517 996.044 189.514C996.044 189.511 996.044 189.508 996.044 189.505C996.044 189.502 996.044 189.499 996.044 189.497C996.044 189.494 996.044 189.491 996.044 189.488H966.044C966.044 189.491 966.044 189.494 966.044 189.497C966.044 189.499 966.044 189.502 966.044 189.505C966.044 189.508 966.044 189.511 966.044 189.514C966.044 189.517 966.044 189.519 966.044 189.522C966.044 189.525 966.044 189.528 966.044 189.531C966.044 189.534 966.044 189.536 966.044 189.539C966.044 189.542 966.044 189.545 966.044 189.548C966.044 189.551 966.044 189.554 966.044 189.556C966.044 189.559 966.044 189.562 966.044 189.565C966.044 189.568 966.044 189.571 966.044 189.574C966.044 189.576 966.044 189.579 966.044 189.582C966.044 189.585 966.044 189.588 966.044 189.591C966.044 189.594 966.044 189.596 966.044 189.599C966.044 189.602 966.044 189.605 966.044 189.608C966.044 189.611 966.044 189.613 966.044 189.616C966.044 189.619 966.044 189.622 966.044 189.625C966.044 189.628 966.044 189.631 966.044 189.633C966.044 189.636 966.044 189.639 966.044 189.642C966.044 189.645 966.044 189.648 966.044 189.651C966.044 189.653 966.044 189.656 966.044 189.659C966.044 189.662 966.044 189.665 966.044 189.668C966.044 189.671 966.044 189.673 966.044 189.676C966.044 189.679 966.044 189.682 966.044 189.685C966.044 189.688 966.044 189.69 966.044 189.693C966.044 189.696 966.044 189.699 966.044 189.702C966.044 189.705 966.044 189.708 966.044 189.71C966.044 189.713 966.044 189.716 966.044 189.719C966.044 189.722 966.044 189.725 966.044 189.728C966.044 189.73 966.044 189.733 966.044 189.736C966.044 189.739 966.044 189.742 966.044 189.745C966.044 189.747 966.044 189.75 966.044 189.753C966.044 189.756 966.044 189.759 966.044 189.762C966.044 189.765 966.044 189.767 966.044 189.77C966.044 189.773 966.044 189.776 966.044 189.779C966.044 189.782 966.044 189.785 966.044 189.787C966.044 189.79 966.044 189.793 966.044 189.796C966.044 189.799 966.044 189.802 966.044 189.805C966.044 189.807 966.044 189.81 966.044 189.813C966.044 189.816 966.044 189.819 966.044 189.822C966.044 189.824 966.044 189.827 966.044 189.83C966.044 189.833 966.044 189.836 966.044 189.839C966.044 189.842 966.044 189.844 966.044 189.847C966.044 189.85 966.044 189.853 966.044 189.856C966.044 189.859 966.044 189.862 966.044 189.864C966.044 189.867 966.044 189.87 966.044 189.873C966.044 189.876 966.044 189.879 966.044 189.882C966.044 189.884 966.044 189.887 966.044 189.89C966.044 189.893 966.044 189.896 966.044 189.899C966.044 189.901 966.044 189.904 966.044 189.907C966.044 189.91 966.044 189.913 966.044 189.916C966.044 189.919 966.044 189.921 966.044 189.924C966.044 189.927 966.044 189.93 966.044 189.933C966.044 189.936 966.044 189.939 966.044 189.941C966.044 189.944 966.044 189.947 966.044 189.95C966.044 189.953 966.044 189.956 966.044 189.958C966.044 189.961 966.044 189.964 966.044 189.967C966.044 189.97 966.044 189.973 966.044 189.976C966.044 189.978 966.044 189.981 966.044 189.984C966.044 189.987 966.044 189.99 966.044 189.993C966.044 189.996 966.044 189.998 966.044 190.001C966.044 190.004 966.044 190.007 966.044 190.01C966.044 190.013 966.044 190.016 966.044 190.018C966.044 190.021 966.044 190.024 966.044 190.027C966.044 190.03 966.044 190.033 966.044 190.035C966.044 190.038 966.044 190.041 966.044 190.044C966.044 190.047 966.044 190.05 966.044 190.053C966.044 190.055 966.044 190.058 966.044 190.061C966.044 190.064 966.044 190.067 966.044 190.07C966.044 190.073 966.044 190.075 966.044 190.078C966.044 190.081 966.044 190.084 966.044 190.087C966.044 190.09 966.044 190.093 966.044 190.095C966.044 190.098 966.044 190.101 966.044 190.104C966.044 190.107 966.044 190.11 966.044 190.112C966.044 190.115 966.044 190.118 966.044 190.121C966.044 190.124 966.044 190.127 966.044 190.13C966.044 190.132 966.044 190.135 966.044 190.138C966.044 190.141 966.044 190.144 966.044 190.147C966.044 190.15 966.044 190.152 966.044 190.155C966.044 190.158 966.044 190.161 966.044 190.164C966.044 190.167 966.044 190.17 966.044 190.172C966.044 190.175 966.044 190.178 966.044 190.181C966.044 190.184 966.044 190.187 966.044 190.189C966.044 190.192 966.044 190.195 966.044 190.198C966.044 190.201 966.044 190.204 966.044 190.207C966.044 190.209 966.044 190.212 966.044 190.215C966.044 190.218 966.044 190.221 966.044 190.224C966.044 190.227 966.044 190.229 966.044 190.232C966.044 190.235 966.044 190.238 966.044 190.241C966.044 190.244 966.044 190.247 966.044 190.249C966.044 190.252 966.044 190.255 966.044 190.258C966.044 190.261 966.044 190.264 966.044 190.266C966.044 190.269 966.044 190.272 966.044 190.275C966.044 190.278 966.044 190.281 966.044 190.284C966.044 190.286 966.044 190.289 966.044 190.292C966.044 190.295 966.044 190.298 966.044 190.301C966.044 190.304 966.044 190.306 966.044 190.309C966.044 190.312 966.044 190.315 966.044 190.318C966.044 190.321 966.044 190.324 966.044 190.326C966.044 190.329 966.044 190.332 966.044 190.335C966.044 190.338 966.044 190.341 966.044 190.343C966.044 190.346 966.044 190.349 966.044 190.352C966.044 190.355 966.044 190.358 966.044 190.361C966.044 190.363 966.044 190.366 966.044 190.369C966.044 190.372 966.044 190.375 966.044 190.378C966.044 190.381 966.044 190.383 966.044 190.386C966.044 190.389 966.044 190.392 966.044 190.395C966.044 190.398 966.044 190.4 966.044 190.403C966.044 190.406 966.044 190.409 966.044 190.412C966.044 190.415 966.044 190.418 966.044 190.42C966.044 190.423 966.044 190.426 966.044 190.429C966.044 190.432 966.044 190.435 966.044 190.438C966.044 190.44 966.044 190.443 966.044 190.446C966.044 190.449 966.044 190.452 966.044 190.455C966.044 190.458 966.044 190.46 966.044 190.463C966.044 190.466 966.044 190.469 966.044 190.472C966.044 190.475 966.044 190.477 966.044 190.48C966.044 190.483 966.044 190.486 966.044 190.489C966.044 190.492 966.044 190.495 966.044 190.497C966.044 190.5 966.044 190.503 966.044 190.506C966.044 190.509 966.044 190.512 966.044 190.515C966.044 190.517 966.044 190.52 966.044 190.523C966.044 190.526 966.044 190.529 966.044 190.532C966.044 190.535 966.044 190.537 966.044 190.54C966.044 190.543 966.044 190.546 966.044 190.549C966.044 190.552 966.044 190.554 966.044 190.557C966.044 190.56 966.044 190.563 966.044 190.566C966.044 190.569 966.044 190.572 966.044 190.574C966.044 190.577 966.044 190.58 966.044 190.583C966.044 190.586 966.044 190.589 966.044 190.592C966.044 190.594 966.044 190.597 966.044 190.6C966.044 190.603 966.044 190.606 966.044 190.609C966.044 190.612 966.044 190.614 966.044 190.617C966.044 190.62 966.044 190.623 966.044 190.626C966.044 190.629 966.044 190.631 966.044 190.634C966.044 190.637 966.044 190.64 966.044 190.643C966.044 190.646 966.044 190.649 966.044 190.651C966.044 190.654 966.044 190.657 966.044 190.66C966.044 190.663 966.044 190.666 966.044 190.669C966.044 190.671 966.044 190.674 966.044 190.677C966.044 190.68 966.044 190.683 966.044 190.686C966.044 190.689 966.044 190.691 966.044 190.694C966.044 190.697 966.044 190.7 966.044 190.703C966.044 190.706 966.044 190.708 966.044 190.711C966.044 190.714 966.044 190.717 966.044 190.72C966.044 190.723 966.044 190.726 966.044 190.728C966.044 190.731 966.044 190.734 966.044 190.737C966.044 190.74 966.044 190.743 966.044 190.746C966.044 190.748 966.044 190.751 966.044 190.754C966.044 190.757 966.044 190.76 966.044 190.763C966.044 190.765 966.044 190.768 966.044 190.771C966.044 190.774 966.044 190.777 966.044 190.78C966.044 190.783 966.044 190.785 966.044 190.788C966.044 190.791 966.044 190.794 966.044 190.797C966.044 190.8 966.044 190.803 966.044 190.805C966.044 190.808 966.044 190.811 966.044 190.814C966.044 190.817 966.044 190.82 966.044 190.823C966.044 190.825 966.044 190.828 966.044 190.831C966.044 190.834 966.044 190.837 966.044 190.84C966.044 190.842 966.044 190.845 966.044 190.848C966.044 190.851 966.044 190.854 966.044 190.857C966.044 190.86 966.044 190.862 966.044 190.865C966.044 190.868 966.044 190.871 966.044 190.874C966.044 190.877 966.044 190.88 966.044 190.882C966.044 190.885 966.044 190.888 966.044 190.891C966.044 190.894 966.044 190.897 966.044 190.9C966.044 190.902 966.044 190.905 966.044 190.908C966.044 190.911 966.044 190.914 966.044 190.917C966.044 190.919 966.044 190.922 966.044 190.925C966.044 190.928 966.044 190.931 966.044 190.934C966.044 190.937 966.044 190.939 966.044 190.942C966.044 190.945 966.044 190.948 966.044 190.951C966.044 190.954 966.044 190.957 966.044 190.959C966.044 190.962 966.044 190.965 966.044 190.968C966.044 190.971 966.044 190.974 966.044 190.977C966.044 190.979 966.044 190.982 966.044 190.985C966.044 190.988 966.044 190.991 966.044 190.994C966.044 190.996 966.044 190.999 966.044 191.002C966.044 191.005 966.044 191.008 966.044 191.011C966.044 191.014 966.044 191.016 966.044 191.019C966.044 191.022 966.044 191.025 966.044 191.028C966.044 191.031 966.044 191.034 966.044 191.036C966.044 191.039 966.044 191.042 966.044 191.045C966.044 191.048 966.044 191.051 966.044 191.053C966.044 191.056 966.044 191.059 966.044 191.062C966.044 191.065 966.044 191.068 966.044 191.071C966.044 191.073 966.044 191.076 966.044 191.079C966.044 191.082 966.044 191.085 966.044 191.088C966.044 191.091 966.044 191.093 966.044 191.096C966.044 191.099 966.044 191.102 966.044 191.105C966.044 191.108 966.044 191.111 966.044 191.113C966.044 191.116 966.044 191.119 966.044 191.122C966.044 191.125 966.044 191.128 966.044 191.13C966.044 191.133 966.044 191.136 966.044 191.139C966.044 191.142 966.044 191.145 966.044 191.148C966.044 191.15 966.044 191.153 966.044 191.156C966.044 191.159 966.044 191.162 966.044 191.165C966.044 191.168 966.044 191.17 966.044 191.173C966.044 191.176 966.044 191.179 966.044 191.182C966.044 191.185 966.044 191.188 966.044 191.19C966.044 191.193 966.044 191.196 966.044 191.199C966.044 191.202 966.044 191.205 966.044 191.207C966.044 191.21 966.044 191.213 966.044 191.216C966.044 191.219 966.044 191.222 966.044 191.225C966.044 191.227 966.044 191.23 966.044 191.233C966.044 191.236 966.044 191.239 966.044 191.242C966.044 191.245 966.044 191.247 966.044 191.25C966.044 191.253 966.044 191.256 966.044 191.259C966.044 191.262 966.044 191.265 966.044 191.267C966.044 191.27 966.044 191.273 966.044 191.276C966.044 191.279 966.044 191.282 966.044 191.284C966.044 191.287 966.044 191.29 966.044 191.293C966.044 191.296 966.044 191.299 966.044 191.302C966.044 191.304 966.044 191.307 966.044 191.31C966.044 191.313 966.044 191.316 966.044 191.319C966.044 191.322 966.044 191.324 966.044 191.327C966.044 191.33 966.044 191.333 966.044 191.336C966.044 191.339 966.044 191.342 966.044 191.344C966.044 191.347 966.044 191.35 966.044 191.353C966.044 191.356 966.044 191.359 966.044 191.361C966.044 191.364 966.044 191.367 966.044 191.37C966.044 191.373 966.044 191.376 966.044 191.379C966.044 191.381 966.044 191.384 966.044 191.387C966.044 191.39 966.044 191.393 966.044 191.396C966.044 191.399 966.044 191.401 966.044 191.404C966.044 191.407 966.044 191.41 966.044 191.413C966.044 191.416 966.044 191.419 966.044 191.421C966.044 191.424 966.044 191.427 966.044 191.43C966.044 191.433 966.044 191.436 966.044 191.438C966.044 191.441 966.044 191.444 966.044 191.447C966.044 191.45 966.044 191.453 966.044 191.456C966.044 191.458 966.044 191.461 966.044 191.464C966.044 191.467 966.044 191.47 966.044 191.473C966.044 191.476 966.044 191.478 966.044 191.481C966.044 191.484 966.044 191.487 966.044 191.49C966.044 191.493 966.044 191.495 966.044 191.498C966.044 191.501 966.044 191.504 966.044 191.507C966.044 191.51 966.044 191.513 966.044 191.515C966.044 191.518 966.044 191.521 966.044 191.524C966.044 191.527 966.044 191.53 966.044 191.533C966.044 191.535 966.044 191.538 966.044 191.541C966.044 191.544 966.044 191.547 966.044 191.55C966.044 191.553 966.044 191.555 966.044 191.558C966.044 191.561 966.044 191.564 966.044 191.567C966.044 191.57 966.044 191.572 966.044 191.575C966.044 191.578 966.044 191.581 966.044 191.584C966.044 191.587 966.044 191.59 966.044 191.592C966.044 191.595 966.044 191.598 966.044 191.601C966.044 191.604 966.044 191.607 966.044 191.61C966.044 191.612 966.044 191.615 966.044 191.618C966.044 191.621 966.044 191.624 966.044 191.627C966.044 191.63 966.044 191.632 966.044 191.635C966.044 191.638 966.044 191.641 966.044 191.644C966.044 191.647 966.044 191.649 966.044 191.652C966.044 191.655 966.044 191.658 966.044 191.661C966.044 191.664 966.044 191.667 966.044 191.669C966.044 191.672 966.044 191.675 966.044 191.678C966.044 191.681 966.044 191.684 966.044 191.687C966.044 191.689 966.044 191.692 966.044 191.695C966.044 191.698 966.044 191.701 966.044 191.704C966.044 191.707 966.044 191.709 966.044 191.712C966.044 191.715 966.044 191.718 966.044 191.721C966.044 191.724 966.044 191.726 966.044 191.729C966.044 191.732 966.044 191.735 966.044 191.738C966.044 191.741 966.044 191.744 966.044 191.746C966.044 191.749 966.044 191.752 966.044 191.755C966.044 191.758 966.044 191.761 966.044 191.764C966.044 191.766 966.044 191.769 966.044 191.772C966.044 191.775 966.044 191.778 966.044 191.781C966.044 191.784 966.044 191.786 966.044 191.789C966.044 191.792 966.044 191.795 966.044 191.798C966.044 191.801 966.044 191.803 966.044 191.806C966.044 191.809 966.044 191.812 966.044 191.815C966.044 191.818 966.044 191.821 966.044 191.823C966.044 191.826 966.044 191.829 966.044 191.832C966.044 191.835 966.044 191.838 966.044 191.841C966.044 191.843 966.044 191.846 966.044 191.849C966.044 191.852 966.044 191.855 966.044 191.858C966.044 191.86 966.044 191.863 966.044 191.866C966.044 191.869 966.044 191.872 966.044 191.875C966.044 191.878 966.044 191.88 966.044 191.883C966.044 191.886 966.044 191.889 966.044 191.892C966.044 191.895 966.044 191.898 966.044 191.9C966.044 191.903 966.044 191.906 966.044 191.909C966.044 191.912 966.044 191.915 966.044 191.918C966.044 191.92 966.044 191.923 966.044 191.926C966.044 191.929 966.044 191.932 966.044 191.935C966.044 191.937 966.044 191.94 966.044 191.943C966.044 191.946 966.044 191.949 966.044 191.952C966.044 191.955 966.044 191.957 966.044 191.96C966.044 191.963 966.044 191.966 966.044 191.969C966.044 191.972 966.044 191.975 966.044 191.977C966.044 191.98 966.044 191.983 966.044 191.986C966.044 191.989 966.044 191.992 966.044 191.995C966.044 191.997 966.044 192 966.044 192.003C966.044 192.006 966.044 192.009 966.044 192.012C966.044 192.014 966.044 192.017 966.044 192.02C966.044 192.023 966.044 192.026 966.044 192.029C966.044 192.032 966.044 192.034 966.044 192.037C966.044 192.04 966.044 192.043 966.044 192.046C966.044 192.049 966.044 192.052 966.044 192.054C966.044 192.057 966.044 192.06 966.044 192.063C966.044 192.066 966.044 192.069 966.044 192.072C966.044 192.074 966.044 192.077 966.044 192.08C966.044 192.083 966.044 192.086 966.044 192.089C966.044 192.091 966.044 192.094 966.044 192.097C966.044 192.1 966.044 192.103 966.044 192.106C966.044 192.109 966.044 192.111 966.044 192.114C966.044 192.117 966.044 192.12 966.044 192.123C966.044 192.126 966.044 192.129 966.044 192.131C966.044 192.134 966.044 192.137 966.044 192.14C966.044 192.143 966.044 192.146 966.044 192.148C966.044 192.151 966.044 192.154 966.044 192.157C966.044 192.16 966.044 192.163 966.044 192.166C966.044 192.168 966.044 192.171 966.044 192.174C966.044 192.177 966.044 192.18 966.044 192.183C966.044 192.186 966.044 192.188 966.044 192.191C966.044 192.194 966.044 192.197 966.044 192.2C966.044 192.203 966.044 192.206 966.044 192.208C966.044 192.211 966.044 192.214 966.044 192.217C966.044 192.22 966.044 192.223 966.044 192.225C966.044 192.228 966.044 192.231 966.044 192.234C966.044 192.237 966.044 192.24 966.044 192.243C966.044 192.245 966.044 192.248 966.044 192.251C966.044 192.254 966.044 192.257 966.044 192.26C966.044 192.263 966.044 192.265 966.044 192.268C966.044 192.271 966.044 192.274 966.044 192.277C966.044 192.28 966.044 192.283 966.044 192.285C966.044 192.288 966.044 192.291 966.044 192.294C966.044 192.297 966.044 192.3 966.044 192.302C966.044 192.305 966.044 192.308 966.044 192.311C966.044 192.314 966.044 192.317 966.044 192.32C966.044 192.322 966.044 192.325 966.044 192.328C966.044 192.331 966.044 192.334 966.044 192.337C966.044 192.34 966.044 192.342 966.044 192.345C966.044 192.348 966.044 192.351 966.044 192.354C966.044 192.357 966.044 192.36 966.044 192.362C966.044 192.365 966.044 192.368 966.044 192.371C966.044 192.374 966.044 192.377 966.044 192.379C966.044 192.382 966.044 192.385 966.044 192.388C966.044 192.391 966.044 192.394 966.044 192.397C966.044 192.399 966.044 192.402 966.044 192.405C966.044 192.408 966.044 192.411 966.044 192.414C966.044 192.417 966.044 192.419 966.044 192.422C966.044 192.425 966.044 192.428 966.044 192.431C966.044 192.434 966.044 192.437 966.044 192.439C966.044 192.442 966.044 192.445 966.044 192.448C966.044 192.451 966.044 192.454 966.044 192.456C966.044 192.459 966.044 192.462 966.044 192.465C966.044 192.468 966.044 192.471 966.044 192.474C966.044 192.476 966.044 192.479 966.044 192.482C966.044 192.485 966.044 192.488 966.044 192.491C966.044 192.494 966.044 192.496 966.044 192.499C966.044 192.502 966.044 192.505 966.044 192.508C966.044 192.511 966.044 192.514 966.044 192.516C966.044 192.519 966.044 192.522 966.044 192.525C966.044 192.528 966.044 192.531 966.044 192.533C966.044 192.536 966.044 192.539 966.044 192.542C966.044 192.545 966.044 192.548 966.044 192.551C966.044 192.553 966.044 192.556 966.044 192.559C966.044 192.562 966.044 192.565 966.044 192.568C966.044 192.571 966.044 192.573 966.044 192.576C966.044 192.579 966.044 192.582 966.044 192.585C966.044 192.588 966.044 192.59 966.044 192.593C966.044 192.596 966.044 192.599 966.044 192.602C966.044 192.605 966.044 192.608 966.044 192.61C966.044 192.613 966.044 192.616 966.044 192.619C966.044 192.622 966.044 192.625 966.044 192.628C966.044 192.63 966.044 192.633 966.044 192.636C966.044 192.639 966.044 192.642 966.044 192.645C966.044 192.648 966.044 192.65 966.044 192.653C966.044 192.656 966.044 192.659 966.044 192.662C966.044 192.665 966.044 192.667 966.044 192.67C966.044 192.673 966.044 192.676 966.044 192.679C966.044 192.682 966.044 192.685 966.044 192.687C966.044 192.69 966.044 192.693 966.044 192.696C966.044 192.699 966.044 192.702 966.044 192.705C966.044 192.707 966.044 192.71 966.044 192.713C966.044 192.716 966.044 192.719 966.044 192.722C966.044 192.725 966.044 192.727 966.044 192.73C966.044 192.733 966.044 192.736 966.044 192.739C966.044 192.742 966.044 192.744 966.044 192.747C966.044 192.75 966.044 192.753 966.044 192.756C966.044 192.759 966.044 192.762 966.044 192.764C966.044 192.767 966.044 192.77 966.044 192.773C966.044 192.776 966.044 192.779 966.044 192.782C966.044 192.784 966.044 192.787 966.044 192.79C966.044 192.793 966.044 192.796 966.044 192.799C966.044 192.802 966.044 192.804 966.044 192.807C966.044 192.81 966.044 192.813 966.044 192.816C966.044 192.819 966.044 192.821 966.044 192.824C966.044 192.827 966.044 192.83 966.044 192.833C966.044 192.836 966.044 192.839 966.044 192.841C966.044 192.844 966.044 192.847 966.044 192.85C966.044 192.853 966.044 192.856 966.044 192.859C966.044 192.861 966.044 192.864 966.044 192.867C966.044 192.87 966.044 192.873 966.044 192.876C966.044 192.878 966.044 192.881 966.044 192.884C966.044 192.887 966.044 192.89 966.044 192.893C966.044 192.896 966.044 192.898 966.044 192.901C966.044 192.904 966.044 192.907 966.044 192.91C966.044 192.913 966.044 192.916 966.044 192.918C966.044 192.921 966.044 192.924 966.044 192.927C966.044 192.93 966.044 192.933 966.044 192.936C966.044 192.938 966.044 192.941 966.044 192.944C966.044 192.947 966.044 192.95 966.044 192.953C966.044 192.955 966.044 192.958 966.044 192.961C966.044 192.964 966.044 192.967 966.044 192.97C966.044 192.973 966.044 192.975 966.044 192.978C966.044 192.981 966.044 192.984 966.044 192.987C966.044 192.99 966.044 192.993 966.044 192.995C966.044 192.998 966.044 193.001 966.044 193.004C966.044 193.007 966.044 193.01 966.044 193.013C966.044 193.015 966.044 193.018 966.044 193.021C966.044 193.024 966.044 193.027 966.044 193.03C966.044 193.032 966.044 193.035 966.044 193.038C966.044 193.041 966.044 193.044 966.044 193.047C966.044 193.05 966.044 193.052 966.044 193.055C966.044 193.058 966.044 193.061 966.044 193.064C966.044 193.067 966.044 193.07 966.044 193.072C966.044 193.075 966.044 193.078 966.044 193.081C966.044 193.084 966.044 193.087 966.044 193.09C966.044 193.092 966.044 193.095 966.044 193.098C966.044 193.101 966.044 193.104 966.044 193.107C966.044 193.109 966.044 193.112 966.044 193.115C966.044 193.118 966.044 193.121 966.044 193.124C966.044 193.127 966.044 193.129 966.044 193.132C966.044 193.135 966.044 193.138 966.044 193.141C966.044 193.144 966.044 193.147 966.044 193.149C966.044 193.152 966.044 193.155 966.044 193.158C966.044 193.161 966.044 193.164 966.044 193.167C966.044 193.169 966.044 193.172 966.044 193.175C966.044 193.178 966.044 193.181 966.044 193.184C966.044 193.186 966.044 193.189 966.044 193.192C966.044 193.195 966.044 193.198 966.044 193.201C966.044 193.204 966.044 193.206 966.044 193.209C966.044 193.212 966.044 193.215 966.044 193.218C966.044 193.221 966.044 193.224 966.044 193.226C966.044 193.229 966.044 193.232 966.044 193.235C966.044 193.238 966.044 193.241 966.044 193.243C966.044 193.246 966.044 193.249 966.044 193.252C966.044 193.255 966.044 193.258 966.044 193.261C966.044 193.263 966.044 193.266 966.044 193.269C966.044 193.272 966.044 193.275 966.044 193.278C966.044 193.281 966.044 193.283 966.044 193.286C966.044 193.289 966.044 193.292 966.044 193.295C966.044 193.298 966.044 193.301 966.044 193.303C966.044 193.306 966.044 193.309 966.044 193.312C966.044 193.315 966.044 193.318 966.044 193.32C966.044 193.323 966.044 193.326 966.044 193.329C966.044 193.332 966.044 193.335 966.044 193.338C966.044 193.34 966.044 193.343 966.044 193.346C966.044 193.349 966.044 193.352 966.044 193.355C966.044 193.358 966.044 193.36 966.044 193.363C966.044 193.366 966.044 193.369 966.044 193.372C966.044 193.375 966.044 193.378 966.044 193.38C966.044 193.383 966.044 193.386 966.044 193.389C966.044 193.392 966.044 193.395 966.044 193.397C966.044 193.4 966.044 193.403 966.044 193.406C966.044 193.409 966.044 193.412 966.044 193.415C966.044 193.417 966.044 193.42 966.044 193.423C966.044 193.426 966.044 193.429 966.044 193.432C966.044 193.435 966.044 193.437 966.044 193.44C966.044 193.443 966.044 193.446 966.044 193.449C966.044 193.452 966.044 193.455 966.044 193.457C966.044 193.46 966.044 193.463 966.044 193.466C966.044 193.469 966.044 193.472 966.044 193.474C966.044 193.477 966.044 193.48 966.044 193.483C966.044 193.486 966.044 193.489 966.044 193.492C966.044 193.494 966.044 193.497 966.044 193.5C966.044 193.503 966.044 193.506 966.044 193.509C966.044 193.512 966.044 193.514 966.044 193.517C966.044 193.52 966.044 193.523 966.044 193.526C966.044 193.529 966.044 193.532 966.044 193.534C966.044 193.537 966.044 193.54 966.044 193.543C966.044 193.546 966.044 193.549 966.044 193.551C966.044 193.554 966.044 193.557 966.044 193.56C966.044 193.563 966.044 193.566 966.044 193.569C966.044 193.571 966.044 193.574 966.044 193.577C966.044 193.58 966.044 193.583 966.044 193.586C966.044 193.589 966.044 193.591 966.044 193.594C966.044 193.597 966.044 193.6 966.044 193.603C966.044 193.606 966.044 193.609 966.044 193.611C966.044 193.614 966.044 193.617 966.044 193.62C966.044 193.623 966.044 193.626 966.044 193.628C966.044 193.631 966.044 193.634 966.044 193.637C966.044 193.64 966.044 193.643 966.044 193.646C966.044 193.648 966.044 193.651 966.044 193.654C966.044 193.657 966.044 193.66 966.044 193.663C966.044 193.666 966.044 193.668 966.044 193.671C966.044 193.674 966.044 193.677 966.044 193.68C966.044 193.683 966.044 193.685 966.044 193.688C966.044 193.691 966.044 193.694 966.044 193.697C966.044 193.7 966.044 193.703 966.044 193.705C966.044 193.708 966.044 193.711 966.044 193.714C966.044 193.717 966.044 193.72 966.044 193.723C966.044 193.725 966.044 193.728 966.044 193.731C966.044 193.734 966.044 193.737 966.044 193.74C966.044 193.743 966.044 193.745 966.044 193.748C966.044 193.751 966.044 193.754 966.044 193.757C966.044 193.76 966.044 193.762 966.044 193.765C966.044 193.768 966.044 193.771 966.044 193.774C966.044 193.777 966.044 193.78 966.044 193.782C966.044 193.785 966.044 193.788 966.044 193.791C966.044 193.794 966.044 193.797 966.044 193.8C966.044 193.802 966.044 193.805 966.044 193.808C966.044 193.811 966.044 193.814 966.044 193.817C966.044 193.82 966.044 193.822 966.044 193.825C966.044 193.828 966.044 193.831 966.044 193.834C966.044 193.837 966.044 193.839 966.044 193.842C966.044 193.845 966.044 193.848 966.044 193.851C966.044 193.854 966.044 193.857 966.044 193.859C966.044 193.862 966.044 193.865 966.044 193.868H996.044ZM996.044 189.488C996.044 170.983 990.042 154.806 976.973 143.53C964.263 132.562 946.97 128.06 927.9 128.06V158.06C942.701 158.06 951.98 161.588 957.374 166.242C962.41 170.588 966.044 177.625 966.044 189.488H996.044ZM1067.23 170.508L1070.18 185.217L1082.23 182.805V170.508H1067.23ZM1067.23 168.464H1082.23V155.34L1069.23 153.597L1067.23 168.464ZM1141.99 168.464L1139.99 153.597L1126.99 155.34V168.464H1141.99ZM1141.99 170.508H1126.99V182.848L1139.09 185.227L1141.99 170.508ZM1104.61 260.92C1079.26 260.92 1060.87 256.422 1049.31 249.189C1038.67 242.525 1033.18 233.259 1033.18 219.856H1003.18C1003.18 243.829 1014.19 262.595 1033.4 274.619C1051.7 286.074 1076.53 290.92 1104.61 290.92V260.92ZM1033.18 219.856C1033.18 211.485 1036 204.545 1041.43 198.946C1047.04 193.157 1056.27 187.997 1070.18 185.217L1064.29 155.799C1046.07 159.443 1030.78 166.839 1019.89 178.059C1008.83 189.469 1003.18 203.991 1003.18 219.856H1033.18ZM1082.23 170.508V168.464H1052.23V170.508H1082.23ZM1069.23 153.597C1057.64 152.043 1050.02 147.939 1045.42 143.252C1040.94 138.679 1038.43 132.674 1038.43 125.248H1008.43C1008.43 140.014 1013.67 153.719 1024 164.257C1034.22 174.68 1048.51 181.089 1065.24 183.331L1069.23 153.597ZM1038.43 125.248C1038.43 115.554 1042.58 107.437 1052.22 101.103C1062.5 94.3516 1079.53 89.44 1104.61 89.44V59.44C1076.25 59.44 1052.7 64.8944 1035.75 76.0281C1018.16 87.5794 1008.43 104.866 1008.43 125.248H1038.43ZM1104.61 89.44C1129.85 89.44 1146.87 94.3578 1157.1 101.093C1166.67 107.397 1170.79 115.499 1170.79 125.248H1200.79C1200.79 104.921 1191.18 87.6191 1173.6 76.0383C1156.67 64.8882 1133.1 59.44 1104.61 59.44V89.44ZM1170.79 125.248C1170.79 132.674 1168.28 138.679 1163.8 143.252C1159.2 147.939 1151.58 152.043 1139.99 153.597L1143.98 183.331C1160.71 181.089 1175 174.68 1185.22 164.257C1195.55 153.719 1200.79 140.014 1200.79 125.248H1170.79ZM1126.99 168.464V170.508H1156.99V168.464H1126.99ZM1139.09 185.227C1153.3 188.017 1162.47 193.181 1167.96 198.898C1173.27 204.421 1176.04 211.346 1176.04 219.856H1206.04C1206.04 204.13 1200.63 189.593 1189.59 178.107C1178.74 166.815 1163.37 159.423 1144.88 155.789L1139.09 185.227ZM1176.04 219.856C1176.04 233.209 1170.52 242.491 1159.81 249.181C1148.2 256.427 1129.8 260.92 1104.61 260.92V290.92C1132.56 290.92 1157.38 286.069 1175.7 274.627C1194.92 262.629 1206.04 243.879 1206.04 219.856H1176.04ZM1104.61 178.5C1126.17 178.5 1144.5 175.636 1157.88 167.914C1164.83 163.901 1170.58 158.494 1174.51 151.518C1178.42 144.571 1180.05 136.902 1180.05 129.044H1150.05C1150.05 132.72 1149.31 135.125 1148.37 136.801C1147.44 138.448 1145.86 140.213 1142.88 141.931C1136.41 145.67 1124.51 148.5 1104.61 148.5V178.5ZM1180.05 129.044C1180.05 114.241 1174.66 100.217 1160.09 90.9222C1147.02 82.5789 1128.34 79.296 1104.61 79.296V109.296C1126.72 109.296 1138.27 112.583 1143.95 116.212C1148.15 118.889 1150.05 122.239 1150.05 129.044H1180.05ZM1104.61 79.296C1081 79.296 1062.35 82.5863 1049.26 90.908C1034.7 100.161 1029.17 114.147 1029.17 129.044H1059.17C1059.17 122.333 1061.08 118.945 1065.35 116.226C1071.1 112.576 1082.67 109.296 1104.61 109.296V79.296ZM1029.17 129.044C1029.17 136.902 1030.8 144.571 1034.71 151.518C1038.64 158.494 1044.39 163.901 1051.34 167.914C1064.72 175.636 1083.05 178.5 1104.61 178.5V148.5C1084.71 148.5 1072.81 145.67 1066.34 141.931C1063.36 140.213 1061.78 138.448 1060.85 136.801C1059.91 135.125 1059.17 132.72 1059.17 129.044H1029.17ZM1104.61 271.064C1128.39 271.064 1148.26 268.207 1162.49 259.587C1169.97 255.062 1175.85 248.97 1179.74 241.229C1183.55 233.627 1185.02 225.253 1185.02 216.644H1155.02C1155.02 221.905 1154.12 225.393 1152.92 227.783C1151.79 230.034 1150.03 232.064 1146.95 233.926C1140.09 238.081 1127.26 241.064 1104.61 241.064V271.064ZM1185.02 216.644C1185.02 199.248 1177.84 184.518 1162.24 175.137C1148.07 166.617 1128.37 163.392 1104.61 163.392V193.392C1126.7 193.392 1139.7 196.592 1146.78 200.846C1152.42 204.24 1155.02 208.636 1155.02 216.644H1185.02ZM1104.61 163.392C1080.85 163.392 1061.15 166.617 1046.98 175.137C1031.38 184.518 1024.2 199.248 1024.2 216.644H1054.2C1054.2 208.636 1056.8 204.24 1062.44 200.846C1069.52 196.592 1082.52 193.392 1104.61 193.392V163.392ZM1024.2 216.644C1024.2 225.222 1025.64 233.582 1029.42 241.18C1033.27 248.927 1039.12 255.035 1046.6 259.576C1060.81 268.213 1080.71 271.064 1104.61 271.064V241.064C1081.79 241.064 1068.98 238.075 1062.18 233.938C1059.14 232.091 1057.4 230.078 1056.29 227.832C1055.1 225.439 1054.2 221.936 1054.2 216.644H1024.2ZM1303.04 273V288H1318.04V273H1303.04ZM1282.31 273H1267.31V288H1282.31V273ZM1282.31 96.34H1297.31V81.34H1282.31V96.34ZM1201.72 96.34H1186.72V111.34H1201.72V96.34ZM1201.72 77.36V62.36H1186.72V77.36H1201.72ZM1383.34 77.36H1398.34V62.36H1383.34V77.36ZM1383.34 96.34V111.34H1398.34V96.34H1383.34ZM1303.04 96.34V81.34H1288.04V96.34H1303.04ZM1303.04 258H1282.31V288H1303.04V258ZM1297.31 273V96.34H1267.31V273H1297.31ZM1282.31 81.34H1201.72V111.34H1282.31V81.34ZM1216.72 96.34V77.36H1186.72V96.34H1216.72ZM1201.72 92.36H1383.34V62.36H1201.72V92.36ZM1368.34 77.36V96.34H1398.34V77.36H1368.34ZM1383.34 81.34H1303.04V111.34H1383.34V81.34ZM1288.04 96.34V273H1318.04V96.34H1288.04Z" fill="white" mask="url(#path-2-outside-1_4437_37)"></path><path d="M115 389.6H110.04V384.4H116.04C120.04 384.4 121.56 383.2 123.08 379.92L125 375.92L105.4 336.48H111.64L123.24 360L127.64 369.68H128.12L132.36 359.92L143.32 336.48H149.56L128.12 381.52C125.24 387.6 121.56 389.6 115 389.6ZM174.394 376.8C161.514 376.8 152.954 368.24 152.954 356.24C152.954 344.24 161.514 335.68 174.394 335.68C187.354 335.68 195.914 344.24 195.914 356.24C195.914 368.24 187.354 376.8 174.394 376.8ZM174.394 371.68C185.274 371.68 190.314 365.84 190.314 356.24C190.314 346.72 185.274 340.8 174.394 340.8C163.514 340.8 158.554 346.72 158.554 356.24C158.554 365.84 163.514 371.68 174.394 371.68ZM220.032 376.8C208.752 376.8 203.232 368.96 203.232 359.6V336.48H208.912V358.72C208.912 366.96 212.912 371.68 222.032 371.68C231.712 371.68 236.752 365.84 236.752 355.68V336.48H242.432V376H237.312V363.68H236.912C235.552 370.4 229.872 376.8 220.032 376.8ZM257.668 376H251.988V336.48H257.108V347.28H257.508C258.708 340.96 263.188 335.68 271.428 335.68C280.548 335.68 284.548 342.4 284.548 349.76V353.68H278.868V350.64C278.868 343.92 276.068 340.64 269.188 340.64C261.188 340.64 257.668 345.68 257.668 354.56V376ZM332.296 376H324.376L300.776 322.4H307.496L328.216 370.24H328.616L349.256 322.4H355.896L332.296 376ZM366.105 331.44H360.425V322.4H366.105V331.44ZM366.105 376H360.425V336.48H366.105V376ZM393.019 376.8C380.859 376.8 373.819 371.92 373.819 362.8V362.64H379.499V363.12C379.499 369.76 383.419 372.08 393.099 372.08C401.979 372.08 405.019 370 405.019 365.44C405.019 361.28 402.539 359.92 395.979 358.88L385.419 357.36C378.219 356.4 373.659 353.6 373.659 347.04C373.659 340.08 380.299 335.68 391.179 335.68C402.539 335.68 409.899 340.48 409.899 349.76V349.92H404.219V349.52C404.219 343.6 401.099 340.4 391.019 340.4C382.699 340.4 379.259 342.4 379.259 347.12C379.259 351.2 381.339 352.64 387.899 353.6L397.579 354.96C406.059 356.16 410.619 359.04 410.619 365.44C410.619 372.88 403.259 376.8 393.019 376.8ZM423.761 331.44H418.081V322.4H423.761V331.44ZM423.761 376H418.081V336.48H423.761V376ZM452.676 376.8C439.796 376.8 431.236 368.24 431.236 356.24C431.236 344.24 439.796 335.68 452.676 335.68C465.636 335.68 474.196 344.24 474.196 356.24C474.196 368.24 465.636 376.8 452.676 376.8ZM452.676 371.68C463.556 371.68 468.596 365.84 468.596 356.24C468.596 346.72 463.556 340.8 452.676 340.8C441.796 340.8 436.836 346.72 436.836 356.24C436.836 365.84 441.796 371.68 452.676 371.68ZM487.433 376H481.753V336.48H486.873V348.88H487.273C488.633 342.16 494.233 335.68 504.073 335.68C515.193 335.68 520.713 343.6 520.713 352.96V376H515.033V353.76C515.033 345.6 511.113 340.88 502.073 340.88C492.473 340.88 487.433 346.72 487.433 356.88V376ZM529.156 383.04H527.476V379.6H529.076C530.116 379.6 530.676 379.36 530.676 377.92V376H527.556V364.88H534.596V377.84C534.596 381.36 532.516 383.04 529.156 383.04ZM581.559 376.8C565.639 376.8 554.519 365.92 554.519 349.2C554.519 332.48 565.639 321.6 581.559 321.6C597.639 321.6 608.759 332.48 608.759 349.2C608.759 365.92 597.639 376.8 581.559 376.8ZM581.559 371.28C595.159 371.28 602.759 363.76 602.759 349.2C602.759 334.64 595.159 327.12 581.559 327.12C568.039 327.12 560.519 334.64 560.519 349.2C560.519 363.76 568.039 371.28 581.559 371.28ZM632.923 376.8C621.643 376.8 616.123 368.96 616.123 359.6V336.48H621.803V358.72C621.803 366.96 625.803 371.68 634.923 371.68C644.603 371.68 649.643 365.84 649.643 355.68V336.48H655.323V376H650.203V363.68H649.803C648.443 370.4 642.763 376.8 632.923 376.8ZM670.558 376H664.878V336.48H669.998V347.28H670.398C671.598 340.96 676.078 335.68 684.318 335.68C693.438 335.68 697.438 342.4 697.438 349.76V353.68H691.758V350.64C691.758 343.92 688.958 340.64 682.078 340.64C674.078 340.64 670.558 345.68 670.558 354.56V376ZM743.426 376.8C727.746 376.8 716.706 365.92 716.706 349.2C716.706 332.48 727.746 321.6 743.426 321.6C757.266 321.6 767.746 329.36 767.746 341.52V342.48H761.586V341.52C761.586 332.4 755.266 327.12 743.506 327.12C730.146 327.12 722.706 334.64 722.706 349.2C722.706 363.76 730.146 371.28 743.506 371.28C755.266 371.28 761.586 366 761.586 356.88V355.92H767.746V356.88C767.746 369.04 757.346 376.8 743.426 376.8ZM781.027 376H775.347V336.48H780.467V347.28H780.867C782.067 340.96 786.547 335.68 794.787 335.68C803.907 335.68 807.907 342.4 807.907 349.76V353.68H802.227V350.64C802.227 343.92 799.427 340.64 792.547 340.64C784.547 340.64 781.027 345.68 781.027 354.56V376ZM825.448 376.8C817.688 376.8 812.408 373.12 812.408 366.72C812.408 360.24 817.768 357.44 825.128 356.64L843.928 354.56V351.52C843.928 343.84 840.568 340.8 831.928 340.8C823.448 340.8 818.968 343.84 818.968 350.8V351.12H813.288V350.8C813.288 342.48 820.168 335.68 832.328 335.68C844.328 335.68 849.448 342.56 849.448 351.28V376H844.328V365.36H843.928C841.608 372.64 834.648 376.8 825.448 376.8ZM818.088 366.32C818.088 370.32 820.728 372.4 826.728 372.4C836.328 372.4 843.928 368.16 843.928 358.64V358.32L826.888 360.24C820.968 360.8 818.088 362.24 818.088 366.32ZM867.264 376H861.584V341.36H855.264V336.48H861.664C862.304 327.12 868.624 322.4 878.864 322.4H883.184V326.88H878.064C870.864 326.88 866.944 329.28 867.264 336.48H888.704V327.04H894.384V336.48H910.064V341.36H894.384V363.76C894.384 369.28 897.184 370.8 902.864 370.8H910.064V376H901.584C893.744 376 888.704 372.72 888.704 363.44V341.36H867.264V376Z" fill="#00FFFF"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/Wecr8tLogo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='456'%20height='44'%20viewBox='0%200%20456%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='455.527'%20y1='17.5'%20x2='-0.000762979'%20y2='17.5'%20stroke='%23A70314'/%3e%3cline%20x1='455.527'%20y1='27.5'%20x2='-0.000762979'%20y2='27.5'%20stroke='%23A70314'/%3e%3cline%20x1='408.004'%20y1='2.41459e-08'%20x2='408.004'%20y2='44'%20stroke='%23A70314'/%3e%3cline%20x1='417.064'%20y1='2.6411e-08'%20x2='417.064'%20y2='44'%20stroke='%23A70314'/%3e%3crect%20x='415.158'%20y='25.5'%20width='5.34266'%20height='6'%20transform='rotate(-180%20415.158%2025.5)'%20fill='%23A70314'%20stroke='%23A70314'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='457'%20height='44'%20viewBox='0%200%20457%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='0.527344'%20y1='26.5'%20x2='456.055'%20y2='26.5'%20stroke='%23A70314'/%3e%3cline%20x1='0.527344'%20y1='16.5'%20x2='456.055'%20y2='16.5'%20stroke='%23A70314'/%3e%3cline%20x1='48.0508'%20y1='44'%20x2='48.0508'%20y2='2.41208e-08'%20stroke='%23A70314'/%3e%3cline%20x1='38.9902'%20y1='44'%20x2='38.9902'%20y2='2.18557e-08'%20stroke='%23A70314'/%3e%3crect%20x='40.8965'%20y='18.5'%20width='5.34266'%20height='6'%20fill='%23A70314'%20stroke='%23A70314'/%3e%3c/svg%3e";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UIIconWecr8tLogo = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-card/100 text-white lg:pt-12 space-y-6 lg:space-y-32" }, _attrs))}><div class="flex flex-col items-center justify-center gap-6 lg:flex-row"><div><img${ssrRenderAttr("src", _imports_0)} alt="pointer" class="hidden lg:block"></div><div class="w-[194px] md:w-[221px] h-[59px] md:h-28"><img${ssrRenderAttr("src", _imports_1$1)} alt="logo"></div><div><img${ssrRenderAttr("src", _imports_2)} alt="pointer" class="hidden lg:block"></div></div><div class="flex flex-col lg:flex-row justify-between px-4 md:px-12 lg:px-40 space-y-8 lg:space-y-0 lg:space-x-8"><div class="space-y-8"><div><hr class="border-white"><p class="font-pt-serif text-xl lg:text-2xl font-bold py-2">Practice Area</p><hr class="border-white"></div><div class="text-[#D7D7D7]"><p>Disputes Resolution</p><p>Real Estate &amp; property</p><p>Corporate &amp; Estate</p><p>Banking, Finance &amp; Insurance</p><p>Taxation</p><p>Capital Market &amp; Securities</p><p>Transportation &amp; Logistics</p><p>Regulatory Compliance &amp; Government Relations</p><p>Intellectual Property</p><p>Energy &amp; Natural Resources</p><p>Sports &amp; Entertainment</p><p>Employment &amp; Labour</p><p>Business Recovert &amp; Insolvency</p><p>Data Protection &amp; Privacy</p></div></div><div class="space-y-8"><div><hr class="border-white"><p class="font-pt-serif text-xl lg:text-2xl font-bold py-2">Contact us</p><hr class="border-white"></div><div class="space-y-5 text-[#D7D7D7]"><div><p>(+234) 803 292 8072</p><p>(+234) 810 286 0630</p><p>(+234) 803 071 7860</p></div><div><p>contact@hodlegal.org</p></div></div></div><div class="w-full lg:w-[327px] space-y-8"><div><hr class="border-white"><p class="font-pt-serif text-xl lg:text-2xl font-bold py-2">Find Us</p><hr class="border-white"></div><div class="space-y-6 text-[#D7D7D7]"><p class="capitalize"><b>Lagos:</b> <br> Plot 1, Block 99, olori Muyibat Oyefusi street, off omorinre Johnson street, Lekki Phase 1, lagos state, Nigeria. </p><p class="capitalize"><b>Port Harcourt:</b><br> 11B, Birabi Street G.R.A.,Port Harcourt, Nigeria. </p></div></div></div><div class="px-4 md:px-12 bg-brand py-10 lg:px-24"><div class="font-lato flex flex-col md:flex-row justify-between py-4 space-y-4 lg:space-y-0"><div class="text-xs flex items-center gap-2 lg:text-xl"> Copyright \xA9 <span class="text-[#fff]">H.O.D Legal </span> | Built by: <a href="https://wecr8t.xyz/" target="_blank" class="lg:w-[10%] w-[40%]">`);
  _push(ssrRenderComponent(_component_UIIconWecr8tLogo, { class: "w-[100%]" }, null, _parent));
  _push(`</a></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Divider as D, FRANCIS_NWABUNWANNE as F, GAMALIEL_WORLY as G, HAROLD_UKU as H, IKOPEMUGH_NENGIM as I, SARAH_HAROLD_UKU as S, UZEZI_AMAWHE as U, __nuxt_component_0$2 as _, __nuxt_component_7 as a, __nuxt_component_8 as b, _imports_0$1 as c, _imports_1 as d, DAVID_OKOROGBA as e, __nuxt_component_1$1 as f };
//# sourceMappingURL=index-DHAhwUkC.mjs.map
