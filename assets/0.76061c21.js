webpackJsonp([0],Array(86).concat([
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(151)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(147),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),
/* 87 */
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
/* 88 */
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
/* 89 */
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
/* 90 */
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
/* 91 */
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
/* 92 */
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
/* 93 */
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
/* 94 */
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("795299a4", content, true);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("196abe32", content, true);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5e5e3a6.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/0c20de3.png";

/***/ }),
/* 99 */
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


/***/ }),
/* 100 */
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".container[data-v-bcd52270]{margin-top:2.3em;padding-bottom:2.3em}.card .image[data-v-bcd52270]{border-bottom:1px solid #e9e9e9}.card .content .header[data-v-bcd52270]{color:#5d5d5d}.card .content .meta[data-v-bcd52270]{color:#a5a5a5}.card .content .description[data-v-bcd52270]{color:#888}.card .symbol .icon[data-v-bcd52270]:before{opacity:.4}", ""]);

// exports


/***/ }),
/* 102 */
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/15d7510.png";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/8008365.png";

/***/ }),
/* 105 */
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
/* 106 */
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
/* 107 */
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
/* 108 */
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("d0f9069c", content, true);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("1dda356b", content, true);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2be077f.png";

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_images_image_placeholder_16_9_png__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_images_image_placeholder_16_9_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_images_image_placeholder_16_9_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_images_image_placeholder_1_1_png__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_images_image_placeholder_1_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_images_image_placeholder_1_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_images_image_placeholder_4_3_png__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_images_image_placeholder_4_3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_images_image_placeholder_4_3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_images_image_placeholder_user_png__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_images_image_placeholder_user_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_images_image_placeholder_user_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_images_image_placeholder_user2_png__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_images_image_placeholder_user2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_images_image_placeholder_user2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_images_image_placeholder_user3_png__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_images_image_placeholder_user3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_images_image_placeholder_user3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_images_videos_karen_png__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_images_videos_karen_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_images_videos_karen_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_images_videos_vimeo_jpg__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_images_videos_vimeo_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_images_videos_vimeo_jpg__);
















/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Item',
  props: {
    item: {}
  },
  data: function () {
    return {
      sourceButton: '',
      demoSegment: '',
      code: this.clean(this.item.code),
      hasSource: this.item.type !== 'code' && typeof this.item.icons === 'undefined' && typeof this.item.code !== 'undefined',
      sourcing: false
    };
  },
  created: function () {
    this.sourceButton = this.$style.itemSourceButton;
    return this.demoClass();
  },
  mounted: function () {
    ts('.ts.embed').embed();
    ts('.ts.dropdown:not(.basic)').dropdown();
    if (document.querySelector('[data-clipboard-text]') !== null) {
      new Clipboard('[data-clipboard-text]');
    }
    if (typeof this.item.autoExecute !== 'undefined' && this.item.autoExecute) {
      return eval(this.item.javascript);
    }
  },
  methods: {
    clean: function (code) {
      if (typeof code === 'undefined') {
        return;
      }
      code = code.replace(/\[\[(.*?)\]\]/g, "$1").replace(/{{(.*?)}}/g, "$1");
      return code = code.replace(/!-(.*?)-!/g, function (match, first) {
        switch (first) {
          case '16:9':
            return __WEBPACK_IMPORTED_MODULE_0_images_image_placeholder_16_9_png___default.a;
          case '1:1':
            return __WEBPACK_IMPORTED_MODULE_1_images_image_placeholder_1_1_png___default.a;
          case '4:3':
            return __WEBPACK_IMPORTED_MODULE_2_images_image_placeholder_4_3_png___default.a;
          case 'user':
            return __WEBPACK_IMPORTED_MODULE_3_images_image_placeholder_user_png___default.a;
          case 'user2':
            return __WEBPACK_IMPORTED_MODULE_4_images_image_placeholder_user2_png___default.a;
          case 'user3':
            return __WEBPACK_IMPORTED_MODULE_5_images_image_placeholder_user3_png___default.a;
          case 'embed:karen':
            return __WEBPACK_IMPORTED_MODULE_6_images_videos_karen_png___default.a;
          case 'embed:vimeo':
            return __WEBPACK_IMPORTED_MODULE_7_images_videos_vimeo_jpg___default.a;
        }
      });
    },
    toggle: function () {
      this.sourcing = !this.sourcing;
      this.sourceButton = [this.$style.itemSourceButton, this.sourcing ? 'active' : void 0];
      return this.demoClass();
    },
    demoClass: function () {
      return this.demoSegment = {
        'fitted basic': !this.sourcing && this.item.type !== 'sidebar' && this.item.type !== 'snackbar',
        'bordered fitted tertiary': this.item.type === 'sidebar'
      };
    },
    execute: function () {
      return eval(this.item.javascript);
    },
    copied: function (event) {
      var column, label, name, target;
      target = event.target;
      column = target.classList.contains('icon') || target.tagName === 'LABEL' ? target.closest('.column') : target;
      label = column.querySelector('label');
      name = label.innerText;
      column.classList.add('copied');
      label.innerText = '已複製';
      return setTimeout(function () {
        column.classList.remove('copied');
        return label.innerText = name;
      }, 2500);
    }
  }
});

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]):before{position:absolute;top:calc(.44rem - 1px);bottom:calc(.44rem - 1px);left:calc(.44rem - 1px);right:calc(.44rem - 1px);z-index:1;content:\"\";border:1px solid #929292}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]).relaxed:before{left:calc(.88rem - 1px);right:calc(.88rem - 1px)}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .grid:before{border-width:2px}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .row:before{position:absolute;top:calc(.44rem - 1px);bottom:calc(.44rem - 1px);left:calc(.44rem - 1px);right:calc(.44rem - 1px);z-index:1;content:\"\";border:2px solid gray}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .column:not(.row):not(.grid){display:flex;align-content:center;flex-direction:column;height:5em;background:#e2e2e2;color:#909090;background-clip:content-box}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .column:not(.row):not(.grid):after{box-shadow:inset 0 0 0 1px #bfbfbf;content:\"\";display:block;position:absolute;top:.44rem;right:.4rem;bottom:.4rem;left:.37rem}[demo]>.ts.relaxed.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .column:not(.row):not(.grid):after{right:.8rem;left:.81rem}[demo]>.ts.relaxed.grid:not(.three) .column:not(.row):not(.grid):after{right:.75rem;left:.8rem}[demo]>.ts.grid .stretched.column,[demo]>.ts.grid .stretched.column+.column{justify-content:center;align-items:center}[demo]>.ts.grid.two>.column:not(.row):not(.grid):first-child{height:5em;background:transparent;background-clip:content-box}[demo]>.ts.fixed.menu{position:absolute!important}[demo]>.ts.contextmenu:only-child{position:relative!important;display:inline-block!important}[demo]>.ts.basic.fullscreen.modal{background:#5a5a5a!important}[demo]>.ts.card{width:285px!important}[demo]>.sidebar{height:400px!important;position:relative!important}[demo]>.right.sidebar{position:absolute!important;top:0}[demo]>.active.snackbar:not(.inline){position:relative!important;top:0!important;left:0!important;bottom:0!important;right:0!important;display:inline-flex!important;margin-top:100px!important}[demo]>.active.snackbar:not(.inline).top.left{position:absolute!important;top:-79px!important;bottom:auto!important;right:auto!important;left:21px!important}[demo]>.active.snackbar:not(.inline).top.right{position:absolute!important;top:-79px!important;bottom:auto!important;right:21px!important;left:auto!important}[demo]>.active.snackbar:not(.inline).bottom.right{position:absolute!important;top:auto!important;bottom:21px!important;right:21px!important;left:auto!important}[demo].bordered{border:1px solid #e9e9e9!important}[demo].bordered+.segment{border-top:0!important}[data-clipboard-text][data-clipboard-text][data-clipboard-text].copied{pointer-events:none;opacity:.5;color:green}[data-clipboard-text][data-clipboard-text][data-clipboard-text]:hover:not(.copied){color:#00adea;cursor:pointer}[data-clipboard-text][data-clipboard-text][data-clipboard-text]:active:not(.copied){color:#0087b7;cursor:pointer}[data-clipboard-text][data-clipboard-text][data-clipboard-text] i{margin-top:18px!important}[data-clipboard-text][data-clipboard-text][data-clipboard-text] label{display:block;margin-top:5px;line-height:16px;text-transform:capitalize;cursor:pointer}.sixteen.wide.column>div>.ts.header:before{display:none!important}mark>.hljs-tag>.hljs-attr,mark>.hljs-tag>.hljs-name,mark>.hljs-tag>.hljs-string{color:#fff!important}", ""]);

// exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "._4e4_0,._944_0{font-size:24px!important;color:#606060!important;margin-top:4.5em!important}._4e4_0:after,._944_0:after{content:\"\";position:absolute;left:-45px;width:2px;border:3px solid #fff;background:#a2a2a2;top:-2px;bottom:-2px}._4e4_0+div,._944_0+div{clear:both;position:relative;font-size:16px;line-height:28px;letter-spacing:.08px;color:#6f6e6e}._4e4_0{font-size:19px!important;margin-top:3em!important}._4e4_0:after{background:#c1c1c1}._817_0>table thead th{white-space:nowrap}@media (max-width:767px){._817_0>table tr{padding:0!important}._817_0>table td:empty:empty:empty:empty:empty:empty:empty{display:none!important}}._8f9_0{font-size:.8rem!important}._176_0{margin-top:28px!important}._6d5_0{margin:0!important;white-space:pre-wrap!important;font-size:14px!important}._6d5_0 mark{background-color:#52c6ca!important;padding:0 6px!important;display:inline-block;border-radius:4px!important;color:#fff!important}._6d5_0 a{padding:3px 4px;border-bottom:1px dashed #b5b5b5;color:#0683a5;margin-bottom:3px;line-height:1}._6d5_0 a:hover{border-bottom:1px solid #a8a8a8;color:#056f8c}", ""]);

// exports
exports.locals = {
	"itemHeader": "_944_0",
	"itemSubHeader": "_4e4_0",
	"itemDescription": "_817_0",
	"itemSourceButton": "_8f9_0",
	"demo": "_176_0",
	"code": "_6d5_0"
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/e1fffb5.png";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/af851d6.png";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/db467dd.jpg";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(121)
__webpack_require__(120)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(119),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.item.title) ? _c('div', {
    staticClass: "ts header",
    class: _vm.$style.itemHeader,
    attrs: {
      "id": _vm.item.title
    }
  }, [_vm._v(_vm._s(_vm.item.title)), (_vm.hasSource) ? _c('button', {
    staticClass: "ts right floated icon labeled button",
    class: _vm.sourceButton,
    on: {
      "click": _vm.toggle
    }
  }, [_c('i', {
    staticClass: "code icon"
  }), _vm._v("原始碼")]) : _vm._e()]) : _vm._e(), (_vm.item.subtitle) ? _c('div', {
    staticClass: "ts header",
    class: _vm.$style.itemSubHeader
  }, [_vm._v(_vm._s(_vm.item.subtitle)), (_vm.hasSource) ? _c('button', {
    staticClass: "ts right floated icon labeled button",
    class: _vm.sourceButton,
    on: {
      "click": _vm.toggle
    }
  }, [_c('i', {
    staticClass: "code icon"
  }), _vm._v("原始碼")]) : _vm._e()]) : _vm._e(), _c('div', {
    class: _vm.$style.itemDescription,
    domProps: {
      "innerHTML": _vm._s(_vm.item.description)
    }
  }), (_vm.item.icons) ? _vm._m(1) : _vm._e(), (_vm.item.code || _vm.item.css) ? _c('div', {
    staticClass: "ts segments",
    class: _vm.$style.demo
  }, [(_vm.item.type != 'code') ? _c('div', {
    staticClass: "ts padded clearing segment",
    class: _vm.demoSegment,
    attrs: {
      "demo": "demo"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.code)
    }
  }) : _vm._e(), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sourcing || _vm.item.type == 'code'),
      expression: "sourcing || item.type == 'code'"
    }],
    staticClass: "ts secondary padded segment"
  }, [_c('pre', {
    class: _vm.$style.code,
    attrs: {
      "html-code": _vm.item.code != null,
      "css-code": _vm.item.css != null
    },
    domProps: {
      "textContent": _vm._s(_vm.item.css ? _vm.item.css : _vm.item.code)
    }
  })])]) : _vm._e(), (_vm.item.javascript) ? _c('div', {
    staticClass: "ts header",
    class: _vm.$style.itemSubHeader
  }, [_vm._v("JavaScript"), (!_vm.item.autoExecute) ? _c('button', {
    staticClass: "ts inverted right floated icon labeled button",
    class: _vm.$style.itemSourceButton,
    on: {
      "click": _vm.execute
    }
  }, [_c('i', {
    staticClass: "bug icon"
  }), _vm._v("執行")]) : _vm._e()]) : _vm._e(), (_vm.item.javascript) ? _c('div', {
    staticClass: "ts secondary padded segment"
  }, [_c('pre', {
    class: _vm.$style.code,
    attrs: {
      "js-code": "js-code"
    },
    domProps: {
      "textContent": _vm._s(_vm.item.javascript)
    }
  })]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._l((_vm.item.icons), function(icon) {
    return _c('div', {
      key: icon,
      staticClass: "center aligned column",
      attrs: {
        "data-clipboard-text": icon
      },
      on: {
        "click": _vm.copied
      }
    }, [_c('i', {
      staticClass: "big fitted icon",
      class: icon
    }), _c('label', {
      domProps: {
        "textContent": _vm._s(icon)
      }
    })])
  })
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ts six column relaxed grid"
  }, _vm._m(0))
}]}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("2de11cee", content, true);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("5933bcde", content, true);

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_slate__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_slate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_slate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_navbar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cards__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_cards__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_item__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_footer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_images_videos_karen_png__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_images_videos_karen_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_images_videos_karen_png__);












/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Try',
  props: {
    defaultHTML: {
      default: `<!-- 標題 -->\n<div class=\"ts large header\">\n    <i class=\"top aligned smile icon\"></i>\n    <div class=\"content\">\n        歡迎來到遊樂場！\n        <div class=\"sub header\">你可以編輯這裡的所有文字。</div>\n    </div>\n</div>\n<!-- / 標題 -->\n\n<!-- 說明 -->\n<p>透過上方的 <a href=\"https://ace.c9.io/\">Ace Editor</a> 你能夠編輯 HTML 標籤，並開始嚐鮮試用 Tocas UI！而且有趣的是你所編輯的 HTML 標籤都會立即呈現在頁面的即時預覽上！</p>\n<!-- / 說明 -->\n\n<!-- 圖片 -->\n<img class=\"ts centered big image\" src=\"${__WEBPACK_IMPORTED_MODULE_5_images_videos_karen_png___default.a}\">\n<!-- / 圖片 -->\n\n<p>我們已經幫你讀取好最新的 Tocas UI 樣式庫了，接下來你要做的就是去文件中，抓幾個範例丟來這裡試試看。</p>\n\n<!-- 引言 -->\n<div class=\"ts quote\">\n    <p>天阿！這真是太夭壽讚了！這裡還能夠擺放引言元件！</p>\n    <cite>Tocas UI 作者如此說道</cite>\n</div>\n<!-- / 引言 -->`
    }
  },
  data: function() {
    return {
      html: this.defaultHTML,
      copied: false,
      hasHTML: false,
      twoColumns: true,
      preview: true,
      code: true,
      editor: null
    };
  },
  mounted: function() {
    var that, timer;
    that = this;
    this.editor = ace.edit('editor');
    this.editor.getSession().setMode('ace/mode/html');
    this.editor.getSession().setUseWrapMode(true);
    this.editor.setShowPrintMargin(false);
    timer = 0;
    this.editor.getSession().on('change', function(e) {
      clearTimeout(timer);
      return timer = setTimeout(function() {
        return that.html = that.editor.getValue();
      }, 1);
    });
    if (typeof this.$route.query.html !== 'undefined') {
      this.editor.setValue(this.$route.query.html.replace(/\\n/g, "\n"));
      this.hasHTML = true;
    }
    return new Clipboard('#share', {
      text: function() {
        var content;
        content = encodeURI(that.editor.getValue().replace(/(?:\r\n|\r|\n)/g, '\\n'));
        return `${location.protocol}//${location.host}${location.pathname}?html=${content}`;
      }
    });
  },
  methods: {
    create: function() {
      this.editor.setValue(this.defaultHTML);
      this.html = this.defaultHTML;
      return window.history.pushState(null, null, `${location.protocol}//${location.host}${location.pathname}`);
    },
    togglePreview: function() {
      if (this.code === false && !this.preview === false) {
        this.code = true;
        this.preview = false;
        return;
      }
      this.preview = !this.preview;
      return setTimeout(function() {
        return ace.edit('editor').resize();
      }, 1);
    },
    toggleCode: function() {
      if (this.preview === false && !this.code === false) {
        this.preview = true;
        this.code = false;
        return;
      }
      this.code = !this.code;
      return setTimeout(function() {
        return ace.edit('editor').resize();
      }, 1);
    },
    toggleColumns: function() {
      this.twoColumns = !this.twoColumns;
      return setTimeout(function() {
        return ace.edit('editor').resize();
      }, 1);
    },
    share: function(event) {
      var that;
      that = this;
      this.copied = true;
      return setTimeout(function() {
        return that.copied = false;
      }, 2000);
    }
  },
  components: {DocsSlate: __WEBPACK_IMPORTED_MODULE_0_components_slate___default.a, DocsNavbar: __WEBPACK_IMPORTED_MODULE_1_components_navbar___default.a, DocsCards: __WEBPACK_IMPORTED_MODULE_2_components_cards___default.a, DocsItem: __WEBPACK_IMPORTED_MODULE_3_components_item___default.a, DocsFooter: __WEBPACK_IMPORTED_MODULE_4_components_footer___default.a}
});


/***/ }),
/* 126 */,
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "._2ad_0{position:fixed;left:0;top:47px;right:0;bottom:28px;display:flex}.dc6_0{flex-direction:column}.c6e_0{display:flex;padding:.5em;background:#f1f1f1;color:#7a7a7a;border:1px solid #e5e5e5;border-left:0;border-right:0}.e7e_0{border-right:1px solid #dfdfdf}._6e2_0,.e7e_0{height:100%;flex:1;overflow:auto}._8b1_0{padding:1.5em;overflow:auto}._8b1_0,.c07_0{position:absolute;top:28px;bottom:0;left:0;right:0}.c07_0{font-size:13px;line-height:21px}.c07_0 *{font-family:monospace!important}._3b3_0{position:fixed;bottom:0;left:0;right:0;background:#f1f1f1;border-top:1px solid #e5e5e5}._3b3_0 button,._3b3_0 div{margin:0!important}._3b3_0 button{border-radius:0!important;border:0!important}", ""]);

// exports
exports.locals = {
	"wrapper": "_2ad_0",
	"wrapper_oneColumn": "dc6_0",
	"wrapperOneColumn": "dc6_0",
	"label": "c6e_0",
	"code": "e7e_0",
	"preview_wrapper": "_6e2_0",
	"previewWrapper": "_6e2_0",
	"preview": "_8b1_0",
	"editor": "c07_0",
	"toolbar": "_3b3_0"
};

/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('docs-navbar'), _c('div', {
    class: [!_vm.twoColumns ? _vm.$style.wrapper_oneColumn : '', _vm.$style.wrapper]
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.code),
      expression: "code"
    }],
    class: _vm.$style.code
  }, [_c('label', {
    class: _vm.$style.label
  }, [_vm._v("HTML (Tocas UI)")]), _c('div', {
    class: _vm.$style.editor,
    attrs: {
      "id": "editor"
    }
  }, [_vm._v(_vm._s(_vm.html))])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.preview),
      expression: "preview"
    }],
    class: _vm.$style.preview_wrapper
  }, [_c('label', {
    class: _vm.$style.label
  }, [_vm._v("即時預覽")]), _c('div', {
    class: _vm.$style.preview
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.html)
    }
  })])])]), _c('div', {
    class: _vm.$style.toolbar
  }, [_c('div', {
    staticClass: "ts fitted secondary menu"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('button', {
    staticClass: "ts very compact small icon labeled button",
    class: {
      active: _vm.twoColumns
    },
    on: {
      "click": _vm.toggleColumns
    }
  }, [_c('i', {
    staticClass: "columns icon"
  }), _vm._v("兩欄模式")])]), _c('div', {
    staticClass: "item"
  }, [_c('button', {
    staticClass: "ts very compact small icon labeled button",
    class: {
      active: _vm.code
    },
    on: {
      "click": _vm.toggleCode
    }
  }, [_c('i', {
    staticClass: "code icon"
  }), _vm._v("程式碼")])]), _c('div', {
    staticClass: "item"
  }, [_c('button', {
    staticClass: "ts very compact small icon labeled button",
    class: {
      active: _vm.preview
    },
    on: {
      "click": _vm.togglePreview
    }
  }, [_c('i', {
    staticClass: "unhide icon"
  }), _vm._v("即時預覽")])]), _c('div', {
    staticClass: "right menu"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('button', {
    staticClass: "ts very compact small icon labeled button",
    class: {
      'disabled': _vm.copied
    },
    attrs: {
      "id": "share"
    },
    on: {
      "click": _vm.share
    }
  }, [_c('i', {
    staticClass: "share icon"
  }), (!_vm.copied) ? [_vm._v("分享")] : _vm._e(), (_vm.copied) ? [_vm._v("已複製！")] : _vm._e()], 2)]), _c('div', {
    staticClass: "item"
  }, [(_vm.hasHTML) ? _c('button', {
    staticClass: "ts very compact small icon labeled button",
    on: {
      "click": _vm.create
    }
  }, [_c('i', {
    staticClass: "plus icon"
  }), _vm._v("建立新的")]) : _vm._e()])])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("83156482", content, true);

/***/ })
]));