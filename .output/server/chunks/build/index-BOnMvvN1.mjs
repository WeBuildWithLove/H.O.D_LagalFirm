import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1$1, a as __nuxt_component_7, b as __nuxt_component_8, c as _imports_0$1$1, D as Divider, d as _imports_1$1, U as UZEZI_AMAWHE, G as GAMALIEL_WORLY, S as SARAH_HAROLD_UKU, F as FRANCIS_NWABUNWANNE, I as IKOPEMUGH_NENGIM, e as DAVID_OKOROGBA, f as __nuxt_component_1$1$1 } from './index-B-xXGpYQ.mjs';
import { defineComponent, useSSRContext, mergeProps, ref, createVNode, resolveDynamicComponent, withCtx, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, h } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { Marquee } from 'vue-fast-marquee';
import { u as useHead, a as useSeoMeta } from './index-DIUDACRG.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-D35ckuRb.mjs';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@babel/runtime/helpers/esm/extends';
import '@ant-design/colors';
import 'vue-types';
import 'resize-observer-polyfill';
import '@ctrl/tinycolor';
import 'stylis';
import 'lodash-es';
import 'lodash-es/isPlainObject.js';
import 'vue-router';

const _sfc_main$e = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1.79297 1.81152V10.7521L11.834 16.4693L1.95088 16.4991L29.8571 29.726L16.6289 1.82002L16.4154 11.6808L10.7035 1.81162H1.79297V1.81152ZM29.6307 10.8691C27.5005 10.8688 25.3861 11.234 23.3794 11.9487L24.1626 13.6009C24.6587 13.429 25.1627 13.2806 25.6728 13.1562L26.8021 15.3609C26.2622 15.4777 25.7294 15.6255 25.2064 15.8036L25.9916 17.4599C26.539 17.2831 27.0979 17.144 27.6643 17.0436L27.966 17.6326L28.3942 22.5281L29.4001 24.6498C29.4765 24.646 29.553 24.644 29.6296 24.6439C30.8449 24.6439 32.0603 25.1104 32.9927 26.043C33.436 26.4837 33.7878 27.0077 34.0279 27.5848C34.2679 28.162 34.3915 28.7809 34.3916 29.406C34.3916 30.0311 34.268 30.65 34.028 31.2271C33.7879 31.8043 33.4362 32.3283 32.9929 32.769C32.5521 33.2123 32.0281 33.5641 31.4509 33.8041C30.8738 34.0442 30.2548 34.1678 29.6297 34.1678C29.0046 34.1678 28.3857 34.0442 27.8085 33.8041C27.2314 33.5641 26.7073 33.2123 26.2666 32.769C25.3099 31.8122 24.8454 30.5577 24.8703 29.311L23.1223 28.4826C23.0893 28.714 23.0686 28.947 23.0603 29.1806L18.0077 29.6472L17.3103 29.432C17.3057 28.2561 17.4665 27.0854 17.7878 25.9543L16.1267 25.167C15.7593 26.3707 15.5509 27.6174 15.5068 28.8752L12.9519 28.0863C13.0609 26.7135 13.339 25.3594 13.78 24.0547L12.1257 23.2705C9.84736 29.7881 11.3097 37.3297 16.5127 42.5327C23.75 49.77 35.5114 49.77 42.7486 42.5329C49.9859 35.2956 49.9856 23.5343 42.7484 16.2972C39.1299 12.6786 34.3803 10.8692 29.6307 10.8692V10.8691ZM31.217 12.7578C34.9528 13.1123 38.593 14.7222 41.4582 17.5875C43.7019 19.8312 45.1754 22.55 45.8796 25.4176L43.8822 26.441C43.333 23.7984 42.0355 21.2818 39.988 19.2345C37.3593 16.6059 33.9574 15.212 30.5085 15.0528L31.217 12.7579V12.7578ZM29.9533 16.8519C33.1193 16.8802 36.2766 18.1038 38.6975 20.5247C40.6156 22.443 41.7802 24.8238 42.1963 27.3047L41.9377 27.4372L36.0485 27.9812C35.7883 26.7966 35.2009 25.6706 34.2831 24.7528C33.1604 23.6302 31.7271 22.9996 30.2553 22.8606L29.779 17.4159L29.9531 16.8517L29.9533 16.8519ZM41.7568 29.2865L42.3698 29.4757C42.3461 32.6479 41.123 35.8129 38.6975 38.2384C36.8124 40.1235 34.4803 41.281 32.0458 41.7153L31.8754 41.3827L31.3822 35.744C32.4459 35.4525 33.4502 34.8922 34.283 34.0595C35.4641 32.8782 36.0994 31.3527 36.1916 29.8005L41.7566 29.2865H41.7568ZM44.1696 30.0312L46.3137 30.6934C46.0202 34.5367 44.4021 38.2986 41.4582 41.2426C39.3162 43.3846 36.7414 44.8248 34.0172 45.5637L32.9068 43.3962C35.5033 42.8323 37.9729 41.5439 39.9879 39.5288C42.6212 36.8956 44.0143 33.4863 44.1695 30.0313L44.1696 30.0312ZM23.2483 30.9961C23.5335 32.156 24.1313 33.2156 24.9766 34.0596C26.2428 35.3258 27.9045 35.9652 29.5708 35.9801L30.0497 41.457L29.9095 41.9111C26.6829 41.9287 23.4511 40.7055 20.984 38.2383C19.1244 36.3787 17.973 34.0842 17.5252 31.6853L17.9073 31.4894L23.2481 30.9962L23.2483 30.9961ZM15.8477 32.5447C16.4224 35.1058 17.7037 37.5389 19.6936 39.5288C22.3679 42.2031 25.8424 43.5979 29.3524 43.7163L28.6119 46.1153C24.6787 45.8764 20.8131 44.2528 17.8029 41.2425C15.6506 39.0901 14.2069 36.5009 13.4713 33.762L15.8476 32.5448L15.8477 32.5447Z" fill="white"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/ArrowScope.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ArrowScope = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$d = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_46_682)"><path d="M26.2222 35.3333V35.0242C26.2222 32.7276 24.7893 30.7256 22.9953 29.2927C20.6538 27.4253 18.9506 24.8762 18.1215 21.9983C17.2924 19.1203 17.3784 16.0558 18.3676 13.2289C19.3568 10.402 21.2003 7.95242 23.6429 6.21931C26.0855 4.4862 29.0064 3.55522 32.0014 3.55522C34.9964 3.55522 37.9174 4.4862 40.36 6.21931C42.8026 7.95242 44.6461 10.402 45.6353 13.2289C46.6245 16.0558 46.7105 19.1203 45.8814 21.9983C45.0523 24.8762 43.3491 27.4253 41.0076 29.2927C39.2107 30.7284 37.7778 32.7276 37.7778 35.0242V35.3333M26.2222 35.3333V41.1111C26.2222 41.8773 26.5266 42.6121 27.0684 43.1539C27.6101 43.6956 28.3449 44 29.1111 44H34.8889C35.6551 44 36.3899 43.6956 36.9316 43.1539C37.4734 42.6121 37.7778 41.8773 37.7778 41.1111V35.3333M26.2222 35.3333H37.7778M55.1111 18H58M8.88889 18H6M32 -5.11111V-8M48.3424 1.65756L50.3849 -0.384889M15.6604 1.65756L13.6151 -0.384889M32 26.6667V20.8889" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_46_682"><rect width="50" height="50" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/HumbleiconsBulb.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const HumbleiconsBulb = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$c = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "64",
    height: "55",
    viewBox: "0 0 64 55",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1.5 5C1.5 3.067 3.067 1.5 5 1.5H27.8358C29.7688 1.5 31.3358 3.067 31.3358 5V53.5H5C3.067 53.5 1.5 51.933 1.5 50V5Z" stroke="white" stroke-width="3"></path><path d="M31.873 27.9851C31.873 26.0521 33.44 24.4851 35.373 24.4851H58.2089C60.1419 24.4851 61.7089 26.0521 61.7089 27.9851V50C61.7089 51.933 60.1419 53.5 58.2089 53.5H31.873V27.9851Z" stroke="white" stroke-width="3"></path><path d="M6.56641 10.8508C6.56641 10.2985 7.01412 9.85083 7.56641 9.85083H12.9545C13.5068 9.85083 13.9545 10.2985 13.9545 10.8508V12.9553C13.9545 13.5076 13.5068 13.9553 12.9545 13.9553H7.56641C7.01412 13.9553 6.56641 13.5076 6.56641 12.9553V10.8508Z" fill="white"></path><path d="M36.9395 32.1941C36.9395 31.6418 37.3873 31.1941 37.9395 31.1941H43.3276C43.8799 31.1941 44.3276 31.6418 44.3276 32.1941V34.2986C44.3276 34.8509 43.8799 35.2986 43.3276 35.2986H37.9395C37.3873 35.2986 36.9395 34.8509 36.9395 34.2986V32.1941Z" fill="white"></path><path d="M6.56641 21.5225C6.56641 20.9702 7.01412 20.5225 7.56641 20.5225H12.9545C13.5068 20.5225 13.9545 20.9702 13.9545 21.5225V23.627C13.9545 24.1792 13.5068 24.6269 12.9545 24.6269H7.56641C7.01412 24.6269 6.56641 24.1792 6.56641 23.6269V21.5225Z" fill="white"></path><path d="M36.9395 42.0449C36.9395 41.4926 37.3873 41.0449 37.9395 41.0449H43.3276C43.8799 41.0449 44.3276 41.4926 44.3276 42.0449V44.1493C44.3276 44.7016 43.8799 45.1493 43.3276 45.1493H37.9395C37.3873 45.1493 36.9395 44.7016 36.9395 44.1493V42.0449Z" fill="white"></path><path d="M6.56641 32.1941C6.56641 31.6418 7.01412 31.1941 7.56641 31.1941H12.9545C13.5068 31.1941 13.9545 31.6418 13.9545 32.1941V34.2986C13.9545 34.8509 13.5068 35.2986 12.9545 35.2986H7.56641C7.01412 35.2986 6.56641 34.8509 6.56641 34.2986V32.1941Z" fill="white"></path><path d="M6.56641 42.8658C6.56641 42.3135 7.01412 41.8658 7.56641 41.8658H12.9545C13.5068 41.8658 13.9545 42.3135 13.9545 42.8658V44.9702C13.9545 45.5225 13.5068 45.9702 12.9545 45.9702H7.56641C7.01412 45.9702 6.56641 45.5225 6.56641 44.9702V42.8658Z" fill="white"></path><path d="M18.8798 10.8508C18.8798 10.2985 19.3276 9.85083 19.8798 9.85083H25.2679C25.8202 9.85083 26.2679 10.2985 26.2679 10.8508V12.9553C26.2679 13.5076 25.8202 13.9553 25.2679 13.9553H19.8798C19.3276 13.9553 18.8798 13.5076 18.8798 12.9553V10.8508Z" fill="white"></path><path d="M49.253 32.1941C49.253 31.6418 49.7007 31.1941 50.253 31.1941H55.641C56.1933 31.1941 56.641 31.6418 56.641 32.1941V34.2986C56.641 34.8509 56.1933 35.2986 55.641 35.2986H50.253C49.7007 35.2986 49.253 34.8509 49.253 34.2986V32.1941Z" fill="white"></path><path d="M18.8798 21.5225C18.8798 20.9702 19.3276 20.5225 19.8798 20.5225H25.2679C25.8202 20.5225 26.2679 20.9702 26.2679 21.5225V23.627C26.2679 24.1792 25.8202 24.6269 25.2679 24.6269H19.8798C19.3276 24.6269 18.8798 24.1792 18.8798 23.6269V21.5225Z" fill="white"></path><path d="M49.253 42.0449C49.253 41.4926 49.7007 41.0449 50.253 41.0449H55.641C56.1933 41.0449 56.641 41.4926 56.641 42.0449V44.1493C56.641 44.7016 56.1933 45.1493 55.641 45.1493H50.253C49.7007 45.1493 49.253 44.7016 49.253 44.1493V42.0449Z" fill="white"></path><path d="M18.8798 32.1941C18.8798 31.6418 19.3276 31.1941 19.8798 31.1941H25.2679C25.8202 31.1941 26.2679 31.6418 26.2679 32.1941V34.2986C26.2679 34.8509 25.8202 35.2986 25.2679 35.2986H19.8798C19.3276 35.2986 18.8798 34.8509 18.8798 34.2986V32.1941Z" fill="white"></path><path d="M18.8798 42.8658C18.8798 42.3135 19.3276 41.8658 19.8798 41.8658H25.2679C25.8202 41.8658 26.2679 42.3135 26.2679 42.8658V44.9702C26.2679 45.5225 25.8202 45.9702 25.2679 45.9702H19.8798C19.3276 45.9702 18.8798 45.5225 18.8798 44.9702V42.8658Z" fill="white"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/ValuesIcon.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ValuesIcon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$b = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-brand relative flex flex-col overflow-hidden md:flex-row min-h-[550px] lg:py-20 py-10 lg:px-20 px-4 justify-center" }, _attrs))}><div class="absolute hidden md:block -bottom-2 left-0"><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Status of Liberty" class=""></div><div class="text-white items-center justify-center z-10 flex flex-col md:pace-y-4 space-y-7"><p class="text-sm md:text-4xl">Since 2011</p><div class="space-y-4 md:space-y-7"><div class="bg-white">`);
      _push(ssrRenderComponent(Divider, {
        direction: "horizontal",
        width: "2px"
      }, null, _parent));
      _push(`</div><p class="font-bold text-base text-center pt-serif-bold md:text-5xl"> BARRISTERS \u2022 SOLICITORS &amp; CONSULTANTS </p><div class="bg-white">`);
      _push(ssrRenderComponent(Divider, {
        direction: "horizontal",
        width: "2px"
      }, null, _parent));
      _push(`</div><p class="text-center"> H.O.D LEGAL is a full service law firm that was established to offer a broad range of legal service to its clients </p><div class="flex items-center justify-center"><a href="#attorneyFormSection" class="bg-card border-card py-2 px-4 rounded-lg border text-brand focus:outline-none focus:ring">GET A FREE CONSULTATION TODAY</a></div></div></div><div class="lg:absolute -bottom-2 lg:h-auto h-[311px] right-0"><img${ssrRenderAttr("src", _imports_1$1)}></div></section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/PageSections/Home.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$b;
const _sfc_main$a = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "108",
    height: "13",
    viewBox: "0 0 108 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M106.5 7.49999C107.052 7.49999 107.5 7.05228 107.5 6.49999C107.5 5.94771 107.052 5.49999 106.5 5.49999L106.5 7.49999ZM0.726497 6.5L6.5 12.2735L12.2735 6.5L6.5 0.726497L0.726497 6.5ZM106.5 5.49999L6.5 5.5L6.5 7.5L106.5 7.49999L106.5 5.49999Z" fill="#A70314"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/LeftPointer.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "108",
    height: "13",
    viewBox: "0 0 108 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1.5 5.5C0.947716 5.5 0.5 5.94772 0.5 6.5C0.5 7.05228 0.947716 7.5 1.5 7.5V5.5ZM107.274 6.5L101.5 0.726497L95.7265 6.5L101.5 12.2735L107.274 6.5ZM1.5 7.5L101.5 7.5V5.5L1.5 5.5V7.5Z" fill="#A70314"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/RightPointer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = "" + buildAssetsURL("StatueOfJustice.CWbudAA4.png");
const _imports_1 = "" + buildAssetsURL("ScaleOfJustice.DEHwv3f0.png");
const _imports_2 = "" + buildAssetsURL("Partnership.C6aNyrRu.png");
const _imports_3 = "" + buildAssetsURL("Gavel.BTs1tHMo.png");
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_UIIconLeftPointer = __nuxt_component_0$2;
  const _component_UIIconRightPointer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "lg:py-20 py-10 lg:px-20 px-4 container lg:!w-[80%] w-full"
  }, _attrs))}><div class="flex flex-col items-center justify-center space-y-3 md:space-y-76 font-medium text-2xl py-4"><div class="flex gap-4 items-center">`);
  _push(ssrRenderComponent(_component_UIIconLeftPointer, { class: "lg:w-[100px] w-[30%]" }, null, _parent));
  _push(`<p class="font-bold text-lg md:text-7xl">About us</p>`);
  _push(ssrRenderComponent(_component_UIIconRightPointer, { class: "lg:w-[100px] w-[30%]" }, null, _parent));
  _push(`</div><div class="space-y-4 md:space-y-7 text-[#3A3A38] leading-9"><p class="text-center lg:text-[30px] lg:leading-[50.25px] leading-[26.8px] text-[16px]"><b class="text-card">H.O.D LEGAL </b> is a full service law firm that was established to offer a broad range of legal services to it\u2019s clients. Through hard work, consistent dedication and disciplined professionalism, we have continued to grow as one of Nigeria\u2019s most reliable legal advisors. </p><p class="text-center lg:text-[30px] lg:leading-[50.25px] leading-[26.8px] text-[16px]"> We are a Harbor of Dynamic legal services providers built upon the core values of reliability, trustworthiness, business efficiency and transparency </p><p class="text-center lg:text-[30px] lg:leading-[50.25px] leading-[26.8px] text-[16px]"> With well-manned offices in Lagos and port Harcourt, Nigeria and making the best use of technology, we are able to serve the needs of our clientele comprises of individuals , business (startups and established brands) and not -for-profits. </p></div></div><div class="flex lg:flex-row flex-col justify-center gap-4"><img${ssrRenderAttr("src", _imports_0$1)} alt="Staue of Justice" class="lg:w-[358px] w-full object-cover"><div class="flex flex-col h-full gap-4"><img${ssrRenderAttr("src", _imports_1)} alt="scale of Justice" class="lg:h-[235px] object-cover w-full"><img${ssrRenderAttr("src", _imports_2)} alt="hands shaking" class="lg:h-[235px] object-cover w-full"></div><img${ssrRenderAttr("src", _imports_3)} alt="Gavel" class="lg:w-[358px] w-full object-cover"></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/PageSections/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "95",
    height: "44",
    viewBox: "0 0 95 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect x="21" y="18" width="7" height="7" fill="#A70314"></rect><line y1="26.5" x2="95" y2="26.5" stroke="#A70314"></line><line y1="16.5" x2="95" y2="16.5" stroke="#A70314"></line><line x1="29.5" y1="44" x2="29.5" y2="2.18557e-08" stroke="#A70314"></line><line x1="19.5" y1="44" x2="19.5" y2="2.18557e-08" stroke="#A70314"></line></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/ServiceIcon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const services = ref([
      {
        name: `Disputes Resolution ( Civil and Criminal Litigation; Arbitration;
            Mediation)`
      },
      {
        name: `Real Estate And Property law ( Acquisition; Transfer; Construction; Due
          Diligence; Finance)`
      },
      { name: "Company Secreterial and Corporate Governance." },
      { name: "Taxation Law" },
      { name: "Sports & Entertainment Law." },
      { name: "Capital Market and securities." },
      { name: "Intellectual Property law ( Patents; Designs; Trademarks\u2019 Copyrights)" },
      { name: "Energy & Natural Resources (Oil & Gas; Electricity)" },
      { name: "Banking, Finance & Insurance.<" },
      { name: "Employment And Labour Law ." },
      { name: "Business Recovery and Insolvency." },
      { name: "Data Protection and Privacy." }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIIconLeftPointer = __nuxt_component_0$2;
      const _component_UIIconRightPointer = __nuxt_component_1;
      const _component_UIIconServiceIcon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "bg-brand text-white space-y-20 lg:py-20 py-10 lg:px-20 px-4"
      }, _attrs))}><div class="flex flex-col items-center justify-center gap-8"><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_UIIconLeftPointer, { class: "lg:w-[100px] w-[30%]" }, null, _parent));
      _push(`<p class="font-bold text-lg md:text-[60px] text-center lg:leading-[93.17px] pt-serif-bold"> SERVICES AND PRACTICE AREAS </p>`);
      _push(ssrRenderComponent(_component_UIIconRightPointer, { class: "lg:w-[100px] w-[30%]" }, null, _parent));
      _push(`</div><div class="lg:text-[28px] text-[14px] lg:leading-[50.4px] text-center font-medium"> H.O.D LEGAL specialize primarily in commercial disputes resolution and corporate law practice. Whether we are representing clients in the courtroom, boardroom, negotiations, giving opinions on thorny legal issues, helping our clients obtain necessary regulatory permits? licenses or interfacing with government MDAs on their behalf, we are always guided by genuine concern for our client\u2019s interests. </div></div><div class="grid lg:grid-cols-3 grid-cols-1 gap-10"><!--[-->`);
      ssrRenderList(services.value, (item) => {
        _push(`<div class="flex gap-2"><div>`);
        _push(ssrRenderComponent(_component_UIIconServiceIcon, null, null, _parent));
        _push(`</div><p class="text-[14px] lg:text-[25px]">${ssrInterpolate(item.name)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/PageSections/Services.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "Ideology",
  __ssrInlineRender: true,
  setup(__props) {
    const services = ref([
      {
        icons: HumbleiconsBulb,
        title: "Our Vision ",
        name: `To be a Nigerian Firm of Choice for the provision of world-class legal  and business advisory services.`
      },
      {
        icons: ArrowScope,
        title: "Our Mission ",
        name: `To Clearly Understand the demands of our clients and approach every of their legal need with a good balance of human empathy and business efficiency.`
      },
      {
        icons: ValuesIcon,
        title: "Our Values ",
        name: "Our Core Values are Reliability, Trustworthiness, Business Efficiency, Transparency."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIIconLeftPointer = __nuxt_component_0$2;
      const _component_UIIconRightPointer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "ideology",
        class: "bg-white text-brand space-y-20 lg:py-20 py-10 lg:px-20 px-4"
      }, _attrs))}><div class="flex flex-col items-center justify-center gap-8"><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_UIIconLeftPointer, { class: "lg:w-[100px] w-[30%]" }, null, _parent));
      _push(`<p class="font-bold text-lg md:text-[60px] text-center lg:leading-[93.17px] pt-serif-bold"> CORE IDEOLOGY </p>`);
      _push(ssrRenderComponent(_component_UIIconRightPointer, { class: "lg:w-[100px] w-[30%]" }, null, _parent));
      _push(`</div><div class="lg:text-[28px] text-[14px] lg:leading-[50.4px] text-center font-medium"> H.O.D. Legal isn&#39;t just about navigating the complexities of commercial disputes and corporate law. We are driven by a core ideology that serves as our compass in every courtroom, boardroom, and negotiation. </div></div><div class="grid lg:grid-cols-3 grid-cols-1 container gap-8 lg:gap-[70px]"><!--[-->`);
      ssrRenderList(services.value, (item) => {
        _push(`<div class="flex flex-col bg-[#A70314] lg:p-10 p-6 lg:h-[390px] rounded-[5px] gap-2"><div class="flex gap-[10px] lg:min-h-[230px] flex-col"><p class="text-[14px] text-[#FFFFFF] pt-serif-bold lg:text-[35px] leading-[40.11px]">${ssrInterpolate(item.title)}</p><p class="text-[14px] lg:text-[20px] leading-[28px] text-white">${ssrInterpolate(item.name)}</p></div><hr><div class="py-2">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icons), null, null), _parent);
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/PageSections/Ideology.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$5;
const _sfc_main$4 = {
  name: "NuxtMarquee",
  emits: ["finish", "cycleComplete"],
  props: [
    "style",
    "class",
    "autoFill",
    "play",
    "pauseOnHover",
    "pauseOnClick",
    "direction",
    "speed",
    "delay",
    "loop",
    "gradient",
    "gradientColor",
    "gradientWidth"
  ],
  setup(props, { slots, emit }) {
    return () => h(
      Marquee,
      {
        ...props,
        onCycleComplete: () => emit("cycleComplete"),
        onFinish: () => emit("finish")
      },
      slots
    );
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$4;
const HAROLD_UKU = "" + buildAssetsURL("HAROLD_UKU.BCbHJ7LB.png");
const _sfc_main$3 = {
  __name: "Firm",
  __ssrInlineRender: true,
  setup(__props) {
    const services = ref([
      {
        icons: HAROLD_UKU,
        title: "Managing Partner ",
        name: "HAROLD UKU"
      },
      {
        icons: UZEZI_AMAWHE,
        title: " Partner ",
        name: "UZEZI AMAWHE"
      },
      {
        icons: GAMALIEL_WORLY,
        title: " Partner ",
        name: "GAMALIEL WORLY"
      },
      {
        icons: SARAH_HAROLD_UKU,
        title: "Of Counsel ",
        name: "SARAH HAROLD UKU"
      },
      {
        icons: FRANCIS_NWABUNWANNE,
        title: "Of Counsel ",
        name: "FRANCIS NWABUNWANNE"
      },
      {
        icons: IKOPEMUGH_NENGIM,
        title: "Of Counsel ",
        name: "IKOPEMUGH NENGIM"
      },
      {
        icons: DAVID_OKOROGBA,
        title: "Of Counsel ",
        name: "DAVID OKOROGBA"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtMarquee = __nuxt_component_0$1;
      const _component_UIButton = __nuxt_component_1$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "firm",
        class: "bg-[#1F2732] text-white space-y-20 lg:py-20 py-10 lg:px-20 px-4"
      }, _attrs))}><div class="flex flex-col items-center justify-center gap-4"><span class="lg:text-[30px] pt-serif-bold text-[14px] lg:leading-[38.82px] text-center !font-normal"> Our Firm </span><div class="flex gap-4 items-center"><p class="font-bold text-lg md:text-[60px] text-center lg:leading-[93.17px] pt-serif-bold"> Meet our Attorneys </p></div><div class="lg:text-[28px] text-[14px] lg:leading-[46.8px] w-[80%] text-center font-medium"> The Personnel of H.O.D LEGAL are drawn from a pool of drawn from a pool of seasonal human capital to meet the demanding responsibilities that accompany our varied services. Our workforce comprises adept professionals who bring their expertise to bear in different facts of legal practice. </div></div><div class="overflow-hidden hide-scrollbar flex flex-row w-full gap-10 mt-4 overflow-x-auto">`);
      _push(ssrRenderComponent(_component_NuxtMarquee, { speed: 100 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(services.value, (i) => {
              _push2(`<div class="rounded-[0px] flex flex-col gap-[27px] ml-3 relative overflow-hidden min-h-[450px] min-w-[300px] lg:min-w-[50%] xl:min-w-[376.66px] md:min-w-[60%]"${_scopeId}><div class="h-full"${_scopeId}><div class="col-span-2 h-full md:col-span-1 flex flex-col gap-[1px] justify-between"${_scopeId}><div class="flex flex-col gap-[15px]"${_scopeId}><div class="flex flex-col gap-[10px]"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="flex w-[376px] object-cover h-[451px] rounded-full"${_scopeId}><img${ssrRenderAttr("src", i.icons)} class="w-[376px] object-cover h-[451px]" alt=""${_scopeId}></div></div><h4 class="!font-normal text-[24px] leading-[31.06px] pt-serif-bold text-text-black-100"${_scopeId}>${ssrInterpolate(i.name)}</h4></div></div><div class="flex flex-col justify-between gap-2 h-full"${_scopeId}><div class="flex flex-col gap-[5px]"${_scopeId}><p class="leading-[23px] text-[#A70314] text-[14px] lg:text-[16px] font-normal"${_scopeId}>${ssrInterpolate(i.title)}</p></div></div></div></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(services.value, (i) => {
                return openBlock(), createBlock("div", {
                  key: i,
                  class: "rounded-[0px] flex flex-col gap-[27px] ml-3 relative overflow-hidden min-h-[450px] min-w-[300px] lg:min-w-[50%] xl:min-w-[376.66px] md:min-w-[60%]"
                }, [
                  createVNode("div", { class: "h-full" }, [
                    createVNode("div", { class: "col-span-2 h-full md:col-span-1 flex flex-col gap-[1px] justify-between" }, [
                      createVNode("div", { class: "flex flex-col gap-[15px]" }, [
                        createVNode("div", { class: "flex flex-col gap-[10px]" }, [
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("div", { class: "flex w-[376px] object-cover h-[451px] rounded-full" }, [
                              createVNode("img", {
                                src: i.icons,
                                class: "w-[376px] object-cover h-[451px]",
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ]),
                          createVNode("h4", { class: "!font-normal text-[24px] leading-[31.06px] pt-serif-bold text-text-black-100" }, toDisplayString(i.name), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col justify-between gap-2 h-full" }, [
                        createVNode("div", { class: "flex flex-col gap-[5px]" }, [
                          createVNode("p", { class: "leading-[23px] text-[#A70314] text-[14px] lg:text-[16px] font-normal" }, toDisplayString(i.title), 1)
                        ])
                      ])
                    ])
                  ])
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-center w-full items-center">`);
      _push(ssrRenderComponent(_component_UIButton, {
        onClick: ($event) => _ctx.$router.push("/attorneys"),
        class: "text-white text-[22px] !px-[72px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Meet Attorney`);
          } else {
            return [
              createTextVNode("Meet Attorney")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/PageSections/Firm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "95",
    height: "44",
    viewBox: "0 0 95 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><line y1="26.5" x2="95" y2="26.5" stroke="#A70314"></line><line y1="16.5" x2="95" y2="16.5" stroke="#A70314"></line><line x1="52.5" y1="44" x2="52.5" y2="2.18557e-08" stroke="#A70314"></line><line x1="42.5" y1="44" x2="42.5" y2="2.18557e-08" stroke="#A70314"></line><rect x="44.5" y="18.5" width="6" height="6" fill="#A70314" stroke="#A70314"></rect></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon/StandardsIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("businessman-male-lawyer-judge-consult-having-team-meeting-with-client.ByjJVjjB.png");
const _sfc_main$1 = {
  __name: "Operation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIIconStandardsIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "operation",
        class: ""
      }, _attrs))} data-v-05ce40b2><div class="flex w-full object-cover h-[156px] lg:h-[551px] rounded-full" data-v-05ce40b2><img${ssrRenderAttr("src", _imports_0)} class="w-[100%] object-cover h-[156px] lg:h-[551px]" alt="" data-v-05ce40b2></div><div class="flex flex-col items-center justify-center py-20 gap-4" data-v-05ce40b2><div class="flex gap-4 items-center" data-v-05ce40b2><p class="font-bold text-lg md:text-[60px] text-center lg:leading-[93.17px] pt-serif-bold" data-v-05ce40b2> Our Operating Standards </p></div><div data-v-05ce40b2>`);
      _push(ssrRenderComponent(_component_UIIconStandardsIcon, null, null, _parent));
      _push(`</div><div class="lg:text-[28px] text-[14px] lg:leading-[46.8px] w-[80%] text-center font-medium" data-v-05ce40b2> We will provide our service to you and your business with reasonable care in accordance with the highest professional standards expected of us and in a timely manner. The nature and content of any service carried out will necessarily reflect the specific scope and limitations of our engagement, the amount and accuracy of information provided to us and the timeline within which the service/advice is required </div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/PageSections/Operation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-05ce40b2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "HOD_LagalFirm - Home",
      meta: [{ name: "description", content: `` }],
      bodyAttrs: {
        class: "test"
      },
      script: [{ innerHTML: "" }]
    });
    useSeoMeta({
      title: "HOD_LagalFirm",
      ogTitle: "HOD_LagalFirm",
      description: ``,
      ogDescription: ``
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutNavBar = __nuxt_component_0$1$1;
      const _component_UIPageSectionsHome = __nuxt_component_1$1;
      const _component_UIPageSectionsAbout = __nuxt_component_2$1;
      const _component_UIPageSectionsServices = __nuxt_component_3;
      const _component_UIPageSectionsIdeology = __nuxt_component_4;
      const _component_UIPageSectionsFirm = __nuxt_component_5;
      const _component_UIPageSectionsOperation = __nuxt_component_6;
      const _component_UIPageSectionsAttorneyFormSection = __nuxt_component_7;
      const _component_LayoutFooter = __nuxt_component_8;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutNavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_UIPageSectionsHome, null, null, _parent));
      _push(ssrRenderComponent(_component_UIPageSectionsAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_UIPageSectionsServices, null, null, _parent));
      _push(ssrRenderComponent(_component_UIPageSectionsIdeology, null, null, _parent));
      _push(ssrRenderComponent(_component_UIPageSectionsFirm, null, null, _parent));
      _push(ssrRenderComponent(_component_UIPageSectionsOperation, null, null, _parent));
      _push(ssrRenderComponent(_component_UIPageSectionsAttorneyFormSection, null, null, _parent));
      _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BOnMvvN1.mjs.map
