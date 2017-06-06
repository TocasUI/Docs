webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Slate'
});

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".container[data-v-bcd52270]{margin-top:2.3em;padding-bottom:2.3em}.card .image[data-v-bcd52270]{border-bottom:1px solid #e9e9e9}.card .content .header[data-v-bcd52270]{color:#5d5d5d}.card .content .meta[data-v-bcd52270]{color:#a5a5a5}.card .content .description[data-v-bcd52270]{color:#888}.card .symbol .icon[data-v-bcd52270]:before{opacity:.4}", ""]);

// exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".ecc_0{font-size:1.7em!important;color:#646464!important;padding:1.8em 2em 3em!important}@media (max-width:767px){.ecc_0{padding:1em .5em 3em!important}}._4db_0{margin-bottom:.5em!important}._033_0{font-size:.8em!important;line-height:1.6em!important}._864_0._864_0._864_0._864_0._864_0._864_0{margin-bottom:-4em!important;width:100%!important}.ac9_0{margin-bottom:-5.1em!important;margin:3.1em 0 1.3em!important;width:100%!important}.ac9_0 a{flex:1;justify-content:center}.ac9_0 a:not(:last-child){margin-right:1em}", ""]);

// exports
exports.locals = {
	"slate": "ecc_0",
	"header": "_4db_0",
	"description": "_033_0",
	"tabGird": "_864_0",
	"tab": "ac9_0"
};

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(109)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  "data-v-bcd52270",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(110)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ts fluid vertically padded heading slate",
    class: _vm.$style.slate
  }, [_c('div', {
    staticClass: "ts narrow container"
  }, [_c('div', {
    staticClass: "header",
    class: _vm.$style.header
  }, [_vm._t("header")], 2), _c('div', {
    staticClass: "description",
    class: _vm.$style.description
  }, [_vm._t("description")], 2)]), (this.$slots.tab) ? _c('div', {
    staticClass: "ts narrow container relaxed grid",
    class: _vm.$style.tabGird
  }, [_c('div', {
    staticClass: "large device only four wide column"
  }), _c('div', {
    staticClass: "sixteen wide mobile twelve wide computer column"
  }, [_c('div', {
    staticClass: "ts bottom attached two item tabbed menu",
    class: _vm.$style.tab
  }, [_vm._t("tab")], 2)])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ts narrow container",
    staticStyle: {
      "min-height": "calc(100% - 483px)"
    }
  }, [_c('div', {
    staticClass: "ts doubling link cards",
    class: [{
      'stackable': _vm.isStackable
    }, _vm.columns]
  }, [_vm._l((_vm.items), function(item) {
    return [(!_vm.isExternal(item.link)) ? _c('router-link', {
      key: item.title,
      staticClass: "ts card",
      attrs: {
        "to": item.link
      }
    }, [(item.image) ? _c('div', {
      staticClass: "image"
    }, [_c('img', {
      attrs: {
        "src": item.image
      }
    })]) : _vm._e(), _c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "header"
    }, [_vm._v(_vm._s(item.title))]), (item.class) ? _c('div', {
      staticClass: "meta"
    }, [_c('div', [_vm._v(_vm._s(item.class))])]) : _vm._e(), _c('div', {
      staticClass: "description"
    }, [_vm._v(_vm._s(item.description))])]), _c('div', {
      staticClass: "symbol"
    }, [_c('i', {
      staticClass: "icon",
      class: item.symbol
    })])]) : _vm._e(), (_vm.isExternal(item.link)) ? _c('a', {
      key: item.title,
      staticClass: "ts card",
      attrs: {
        "href": item.link,
        "target": "_blank"
      }
    }, [(item.image) ? _c('div', {
      staticClass: "image"
    }, [_c('img', {
      attrs: {
        "src": item.image
      }
    })]) : _vm._e(), _c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "header"
    }, [_vm._v(_vm._s(item.title))]), (item.class) ? _c('div', {
      staticClass: "meta"
    }, [_c('div', [_vm._v(_vm._s(item.class))])]) : _vm._e(), _c('div', {
      staticClass: "description"
    }, [_vm._v(_vm._s(item.description))])]), _c('div', {
      staticClass: "symbol"
    }, [_c('i', {
      staticClass: "icon",
      class: item.symbol
    })])]) : _vm._e()]
  })], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("d0f9069c", content, true);

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("1dda356b", content, true);

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_slate__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_slate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_slate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_navbar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cards__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_cards__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_footer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(1);










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'List',
  data: function() {
    return {
      docs: {}
    };
  },
  created: function() {
    var that;
    that = this;
    return __WEBPACK_IMPORTED_MODULE_4__store__["default"].watch(function(state) {
      return state.docs;
    }, function(docs) {
      return that.docs = docs;
    });
  },
  components: {DocsSlate: __WEBPACK_IMPORTED_MODULE_0_components_slate___default.a, DocsNavbar: __WEBPACK_IMPORTED_MODULE_1_components_navbar___default.a, DocsCards: __WEBPACK_IMPORTED_MODULE_2_components_cards___default.a, DocsFooter: __WEBPACK_IMPORTED_MODULE_3_components_footer___default.a}
});


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "._39e_0{height:calc(100vh - 45px - 212px);display:flex;align-items:center;justify-content:center}", ""]);

// exports
exports.locals = {
	"loader": "_39e_0"
};

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('docs-navbar'), (!_vm.docs.slate) ? _c('docs-slate', [_c('template', {
    slot: "header"
  }, [_vm._v("      ")]), _c('template', {
    slot: "description"
  }, [_vm._v(" ")])], 2) : _vm._e(), (!_vm.docs.slate) ? _c('div', {
    class: _vm.$style.loader
  }, [_c('div', {
    staticClass: "ts inline big loader active"
  })]) : _vm._e(), (_vm.docs.slate) ? _c('docs-slate', [_c('template', {
    slot: "header"
  }, [_vm._v("     " + _vm._s(_vm.docs.slate.title))]), _c('template', {
    slot: "description"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.docs.slate.description)
    }
  })])], 2) : _vm._e(), _c('docs-cards', {
    attrs: {
      "items": _vm.docs.items,
      "columns": _vm.docs.columns,
      "isStackable": _vm.docs.isStackable
    }
  }), _c('docs-footer')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("019e0cbe", content, true);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(153)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(149),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Footer',
  methods: {
    toTop: function() {
      window.scrollTo(0, 0);
      return document.querySelector('.pusher').scrollTop = 0;
    }
  }
});


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Navbar',
    props: {
        isHomepage: { default: false }
    }
});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".cdf_0{font-size:16px!important}.cdf_0[is-homepage]{background-color:#87bdd1!important}", ""]);

// exports
exports.locals = {
	"menu": "cdf_0"
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "._74c_0{margin-top:1.5em;font-size:13px;color:#a0a0a0;min-height:196px!important}._059_0{margin-bottom:.6em!important}.cff_0:not(:last-child){margin-right:1.6em!important}._4ee_0{opacity:.7}._4ee_0 i{margin-right:.6em}", ""]);

// exports
exports.locals = {
	"footer": "_74c_0",
	"list": "_059_0",
	"item": "cff_0",
	"toTop": "_4ee_0"
};

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(96)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(95)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ts fluid top attached horizontally scrollable link basic menu",
    class: [_vm.isHomepage ? "inverted" : "", _vm.$style.menu],
    attrs: {
      "is-homepage": _vm.isHomepage
    }
  }, [_c('div', {
    staticClass: "ts narrow container"
  }, [_c('router-link', {
    staticClass: "item",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Tocas UI")]), _c('router-link', {
    staticClass: "item",
    attrs: {
      "to": "/starts"
    }
  }, [_vm._v("從這開始")]), _c('router-link', {
    staticClass: "item",
    attrs: {
      "to": "/elements"
    }
  }, [_vm._v("一般元素")]), _c('router-link', {
    staticClass: "item",
    attrs: {
      "to": "/collections"
    }
  }, [_vm._v("聚合型")]), _c('router-link', {
    staticClass: "item",
    attrs: {
      "to": "/modules"
    }
  }, [_vm._v("模塊")]), _c('router-link', {
    staticClass: "item",
    attrs: {
      "to": "/views"
    }
  }, [_vm._v("視圖型")]), _c('router-link', {
    staticClass: "item",
    attrs: {
      "to": "/rwd"
    }
  }, [_vm._v("響應式")]), _vm._m(0)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right menu"
  }, [_c('a', {
    staticClass: "item",
    attrs: {
      "href": "//github.com/TeaMeow/TocasUI",
      "target": "_blank"
    }
  }, [_vm._v("GitHub")])])
}]}

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ts bottom attached very padded horizontally fitted fluid secondary segment",
    class: _vm.$style.footer
  }, [_c('div', {
    staticClass: "ts narrow container"
  }, [_c('div', {
    staticClass: "ts horizontal link list",
    class: _vm.$style.list
  }, [_c('div', {
    staticClass: "item",
    class: _vm.$style.item
  }, [_c('a', {
    class: _vm.$style.toTop,
    attrs: {
      "href": "#!"
    },
    on: {
      "click": _vm.toTop
    }
  }, [_c('i', {
    staticClass: "arrow up icon"
  }), _vm._v("回到頂部")])]), _c('div', {
    staticClass: "item",
    class: _vm.$style.item
  }, [_c('a', {
    attrs: {
      "href": "//github.com/TeaMeow/TocasUI/",
      "target": "_blank"
    }
  }, [_vm._v("GitHub")])]), _c('div', {
    staticClass: "item",
    class: _vm.$style.item
  }, [_c('router-link', {
    attrs: {
      "to": "/examples/"
    }
  }, [_vm._v("實際範例")])], 1), _c('div', {
    staticClass: "item",
    class: _vm.$style.item
  }, [_c('router-link', {
    attrs: {
      "to": "/about/"
    }
  }, [_vm._v("關於")])], 1)]), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("由 "), _c('a', {
    attrs: {
      "href": "http://www.facebook.com/yamiodymel"
    }
  }, [_vm._v("Yami Odymel")]), _vm._v(" 所設計，還有"), _c('a', {
    attrs: {
      "href": "https://github.com/TeaMeow/TocasUI/graphs/contributors"
    }
  }, [_vm._v("貢獻者們")]), _vm._v("的愛心 ❤️。原始碼授權方式為 "), _c('a', {
    attrs: {
      "href": "https://github.com/TeaMeow/TocasUI/blob/master/LICENSE"
    }
  }, [_vm._v("MIT")]), _vm._v("，文件則為 "), _c('a', {
    attrs: {
      "href": "https://creativecommons.org/licenses/by/4.0/deed.zh_TW"
    }
  }, [_vm._v("CC BY 4.0")]), _vm._v("，還請盡情地使用和分享，或者是一同改進 :)")])
}]}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("795299a4", content, true);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("196abe32", content, true);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Cards',
  props: {
    columns: {
      default: 'four'
    },
    isStackable: {
      default: false
    },
    items: {
      default: null
    }
  },
  methods: {
    isExternal: function(url) {
      return url.indexOf('//') !== -1;
    },
    link: function(url) {
      if (url.indexOf('//') !== -1) {
        return window.open(url, '_blank');
      } else {
        return this.$router.push(url);
      }
    }
  }
});


/***/ })

});