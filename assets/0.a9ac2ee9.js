webpackJsonp([0],Array(92).concat([
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(158)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(154),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),
/* 93 */
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
/* 94 */
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".cdf_0{font-size:16px!important}.cdf_0[is-homepage]{background-color:#87bdd1!important}", ""]);

// exports
exports.locals = {
	"menu": "cdf_0"
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(102)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(100),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(101)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),
/* 99 */
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
/* 100 */
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("795299a4", content, true);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("196abe32", content, true);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5e5e3a6.png";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/0c20de3.png";

/***/ }),
/* 105 */
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
/* 106 */
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".container[data-v-bcd52270]{margin-top:2.3em;padding-bottom:2.3em}.card .image[data-v-bcd52270]{border-bottom:1px solid #e9e9e9}.card .content .header[data-v-bcd52270]{color:#5d5d5d}.card .content .meta[data-v-bcd52270]{color:#a5a5a5}.card .content .description[data-v-bcd52270]{color:#888}.card .symbol .icon[data-v-bcd52270]:before{opacity:.4}", ""]);

// exports


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/15d7510.png";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/8008365.png";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(115)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(114),
  /* scopeId */
  "data-v-bcd52270",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(116)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(113),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),
/* 113 */
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
/* 114 */
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("d0f9069c", content, true);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("1dda356b", content, true);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2be077f.png";

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_images_image_placeholder_16_9_png__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_images_image_placeholder_16_9_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_images_image_placeholder_16_9_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_images_image_placeholder_1_1_png__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_images_image_placeholder_1_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_images_image_placeholder_1_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_images_image_placeholder_4_3_png__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_images_image_placeholder_4_3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_images_image_placeholder_4_3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_images_image_placeholder_user_png__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_images_image_placeholder_user_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_images_image_placeholder_user_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_images_image_placeholder_user2_png__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_images_image_placeholder_user2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_images_image_placeholder_user2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_images_image_placeholder_user3_png__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_images_image_placeholder_user3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_images_image_placeholder_user3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_images_videos_karen_png__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_images_videos_karen_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_images_videos_karen_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_images_videos_vimeo_jpg__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_images_videos_vimeo_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_images_videos_vimeo_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_assets_tocas_dev_js__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_assets_tocas_dev_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_assets_tocas_dev_js__);


















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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Tocas, animationEnd, bindModalButtons, closeModal, contractDropdown, detectDropdown, expandDropdown, quadrant, slider_progressColor, slider_trackColor, z_dropdownActive, z_dropdownHovered, z_dropdownMenu;Tocas = function () {
  var compact, dropzoneNumber, emptyArray, filter, isArray, isEmptyOrWhiteSpace, isObject, queue, _slice, tocas, ts;ts = void 0;emptyArray = [];_slice = emptyArray.slice;filter = emptyArray.filter;queue = [];tocas = {};isArray = Array.isArray || function (obj) {
    return obj instanceof Array;
  };isObject = function isObject(obj) {
    return obj instanceof Object;
  };isEmptyOrWhiteSpace = function isEmptyOrWhiteSpace(str) {
    return str === null || str.match(/^\s*$/) !== null;
  };dropzoneNumber = 0;compact = function compact(array) {
    return filter.call(array, function (item) {
      return item !== null;
    });
  };tocas.init = function (selector, context) {
    var dom;dom = void 0;if (typeof selector === 'string') {
      if (selector[0] === '<') {
        return tocas.fragment(selector);
      }
      selector = selector.trim();if (typeof context !== 'undefined') {
        return ts(selector).find(context);
      }
      dom = tocas.select(document, selector);
    } else if (tocas.isTocas(selector)) {
      return selector;
    } else {
      if (isArray(selector)) {
        dom = compact(selector);
      } else if (isObject(selector)) {
        dom = [selector];selector = null;
      }
    }
    return tocas.Tocas(dom, selector);
  };tocas.fragment = function (selector) {
    var $element, attrObj, attrs, content, contentMatch, contentRegEx, hasAttr, hasContent, i, mainAll, mainAttrs, mainElement, match, noContent, regEx;noContent = /^<([^\/].*?)>$/;regEx = /(?:<)(.*?)( .*?)?(?:>)/;match = regEx.exec(selector);mainAll = match[0];mainElement = match[1];mainAttrs = match[2];hasAttr = typeof mainAttrs !== 'undefined';hasContent = !mainAll.match(noContent);if (hasContent) {
      contentRegEx = new RegExp(mainAll + '(.*?)(?:</' + mainElement + '>)$');contentMatch = contentRegEx.exec(selector);content = contentMatch[1];
    }
    if (hasAttr) {
      attrs = mainAttrs.split(/(?:\s)?(.*?)=(?:"|')(.*?)(?:"|')/).filter(Boolean);attrObj = {};i = 0;while (i < attrs.length) {
        if ((i + 2) % 2 === 0) {
          attrObj[attrs[i]] = attrs[i + 1];
        }
        i++;
      }
    }
    $element = ts(document.createElement(mainElement));if (hasAttr) {
      $element.attr(attrObj);
    }
    if (hasContent) {
      $element.html(content);
    }
    return $element;
  };tocas.isTocas = function (obj) {
    return obj instanceof tocas.Tocas;
  };tocas.select = function (element, selector) {
    var e;try {
      return _slice.call(element.querySelectorAll(selector));
    } catch (error) {
      e = error;console.log('TOCAS ERROR: Something wrong while selecting ' + selector + ' element.');
    }
  };tocas.Tocas = function (dom, selector) {
    dom = dom || [];dom.__proto__ = ts.fn;dom.selector = selector || '';return dom;
  };ts = function ts(selector, context) {
    if (typeof selector === 'function') {
      document.addEventListener('DOMContentLoaded', selector);
    } else {
      return tocas.init(selector, context);
    }
  };ts.fn = { each: function each(callback) {
      emptyArray.every.call(this, function (index, element) {
        return callback.call(index, element, index) !== false;
      });return this;
    }, slice: function slice() {
      return ts(_slice.apply(this, arguments));
    }, eq: function eq(index) {
      return this.slice(index, index + 1);
    } };if (!window.ts) {
    window.ts = ts;
  }
}(Tocas);ts.fn.on = function (eventName, selector, handler, once) {
  var hasSelector;once = once || false;hasSelector = true;if (typeof selector !== 'string') {
    hasSelector = false;handler = selector;
  }
  if (typeof handler !== 'function') {
    once = handler;
  }
  return this.each(function () {
    var data, event, eventHandler, events, i;if (typeof this.addEventListener === 'undefined') {
      console.log('TOCAS ERROR: Event listener is not worked with this element.');return false;
    }
    if (typeof this.ts_eventHandler === 'undefined') {
      this.ts_eventHandler = {};
    }
    events = eventName.split(' ');for (i in events) {
      event = events[i];if (typeof this.ts_eventHandler[event] === 'undefined') {
        this.ts_eventHandler[event] = { registered: false, list: [] };
      }
      if (this.ts_eventHandler[event].registered === false) {
        this.addEventListener(event, function (evt) {
          var e, inSelector;if (typeof this.ts_eventHandler[event] !== 'undefined') {
            for (e in this.ts_eventHandler[event].list) {
              if (typeof this.ts_eventHandler[event].list[e].selector !== 'undefined') {
                inSelector = false;ts(this.ts_eventHandler[event].list[e].selector).each(function (i, el) {
                  if (evt.target === el) {
                    inSelector = true;
                  }
                });if (!inSelector) {
                  return;
                }
              }
              this.ts_eventHandler[event].list[e].func.call(this, evt);if (this.ts_eventHandler[event].list[e].once) {
                delete this.ts_eventHandler[event].list[e];
              }
            }
          }
        });this.ts_eventHandler[event].registered = true;
      }
      eventHandler = this.ts_eventHandler[event].list;data = { func: handler, once: once };if (hasSelector) {
        data.selector = selector;
      }
      eventHandler.push(data);this.ts_eventHandler[event].list = eventHandler;
    }
  });
};ts.fn.one = function (eventName, selector, handler) {
  return this.each(function () {
    ts(this).on(eventName, selector, handler, true);
  });
};ts.fn.off = function (eventName, handler) {
  return this.each(function () {
    var e;if (typeof this.ts_eventHandler === 'undefined') {
      return;
    }
    if (typeof this.ts_eventHandler[eventName] === 'undefined') {
      return;
    }
    console.log(handler);if (typeof handler === 'undefined') {
      this.ts_eventHandler[eventName].list = [];return;
    }
    for (e in this.ts_eventHandler[eventName].list) {
      if (handler === this.ts_eventHandler[eventName].list[e].func) {
        delete this.ts_eventHandler[eventName].list[e];
      }
    }
  });
};ts.fn.css = function (property, value) {
  var css, cssObject, i;css = '';if (property !== null && value !== null) {
    css = property + ':' + value + ';';
  } else if ((typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' && !Array.isArray(property) && value === null) {
    for (i in property) {
      if (property.hasOwnProperty(i)) {
        css += i + ':' + property[i] + ';';
      }
    }
  } else if (Array.isArray(property) && value === null) {
    cssObject = {};this.each(function () {
      var i;for (i in property) {
        cssObject[property[i]] = ts(this).getCss(property[i]);
      }
    });return cssObject;
  } else if (property !== null && value === null) {
    return ts(this).getCss(property);
  }
  return this.each(function () {
    if (typeof this.style === 'undefined') {
      return;
    }
    this.style.cssText = this.style.cssText + css;
  });
};ts.fn.hasClass = function (classes) {
  if (0 in this) {
    if (this[0].classList) {
      return this[0].classList.contains(classes);
    } else {
      return new RegExp('(^| )' + classes + '( |$)', 'gi').test(this[0].className);
    }
  }
};ts.fn.classList = function () {
  var i;var classes, i;classes = [];if (0 in this) {
    if (this[0].classList) {
      i = 0;while (i < this[0].classList.length) {
        classes.push(this[0].classList[i]);i++;
      }
    } else {
      for (i in this[0].className.split(' ')) {
        classes.push(this[0].className.split(' ')[i]);
      }
    }
  }
  return classes;
};ts.fn.addClass = function (classes) {
  if (classes === null) {
    return;
  }
  return this.each(function () {
    var i, list;list = classes.split(' ');for (i in list) {
      if (list[i] === '') {
        i++;continue;
      }
      if (this.classList) {
        this.classList.add(list[i]);
      } else {
        this.className += ' ' + list[i];
      }
    }
  });
};ts.fn.removeClass = function (classes) {
  return this.each(function () {
    var i, list;if (!classes) {
      this.className = '';
    } else {
      list = classes.split(' ');for (i in list) {
        if (list[i] === '') {
          i++;continue;
        }
        if (this.classList) {
          this.classList.remove(list[i]);
        } else if (typeof this.className !== 'undefined') {
          this.className = this.className.replace(new RegExp('(^|\\b)' + classes.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }
    }
  });
};ts.fn.toggleClass = function (classes) {
  return this.each(function () {
    var i, index, list, objClassList;list = void 0;index = void 0;objClassList = void 0;list = classes.split(' ');for (i in list) {
      if (this.classList) {
        this.classList.toggle(list[i]);
      } else {
        objClassList = this.className.split(' ');index = list.indexOf(list[i]);if (index >= 0) {
          objClassList.splice(index, 1);
        } else {
          objClassList.push(list[i]);
        }
        this.className = list[i].join(' ');
      }
    }
  });
};ts.fn.getCss = function (property) {
  var err;try {
    if (0 in this) {
      return document.defaultView.getComputedStyle(this[0], null).getPropertyValue(property);
    } else {
      return null;
    }
  } catch (error) {
    err = error;return null;
  }
};ts.fn.remove = function () {
  return this.each(function () {
    this.parentNode.removeChild(this);
  });
};ts.fn.children = function () {
  var list;list = [];this.each(function (i, el) {
    list.push.apply(list, el.children);
  });return ts(list);
};ts.fn.find = function (selector) {
  var list;if (typeof selector !== 'string') {
    return null;
  }
  list = [];this.each(function (i, el) {
    list.push.apply(list, el.querySelectorAll(selector));
  });if (list.length) {
    return ts(list);
  } else {
    return null;
  }
};ts.fn.parent = function () {
  if (0 in this) {
    return ts(this[0].parentNode);
  } else {
    return null;
  }
};ts.fn.parents = function (selector) {
  var selector;var selector;var parents, that;that = this;selector = selector || null;parents = [];if (selector !== null) {
    selector = ts(selector);
  }
  while (that) {
    that = ts(that).parent()[0];if (!that) {
      break;
    }
    if (selector === null || selector !== null && Array.prototype.indexOf.call(selector, that) !== -1) {
      parents.push(that);
    }
  }
  return ts(parents);
};ts.fn.closest = function (selector) {
  var selector;var that;that = this;selector = ts(selector);while (true) {
    that = ts(that).parent()[0];if (!that) {
      return null;
    }
    if (Array.prototype.indexOf.call(selector, that) !== -1) {
      return ts(that);
    }
  }
};ts.fn.contains = function (wants) {
  var isTrue, selector;selector = ts(wants);isTrue = false;this.each(function (i, el) {
    var children, si;children = el.childNodes;si = 0;while (si < selector.length) {
      if (Array.prototype.indexOf.call(children, selector[si]) !== -1) {
        isTrue = true;
      }
      si++;
    }
  });return isTrue;
};ts.fn.attr = function (attr, value) {
  value = value === null ? null : value;if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) === 'object' && !value) {
    return this.each(function () {
      var i;for (i in attr) {
        this.setAttribute(i, attr[i]);
      }
    });
  } else if (attr !== null && typeof value !== 'undefined') {
    return this.each(function () {
      this.setAttribute(attr, value);
    });
  } else if (attr !== null && !value) {
    if (0 in this) {
      return this[0].getAttribute(attr);
    } else {
      return null;
    }
  }
};ts.fn.removeAttr = function (attr) {
  return this.each(function () {
    this.removeAttribute(attr);
  });
};animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';quadrant = function quadrant(el) {
  var height, heightHalf, position, width, widthHalf;position = el.getBoundingClientRect();width = window.innerWidth;widthHalf = width / 2;height = window.innerHeight;heightHalf = height / 2;if (position.left < widthHalf && position.top < heightHalf) {
    return 2;
  } else if (position.left < widthHalf && position.top > heightHalf) {
    return 3;
  } else if (position.left > widthHalf && position.top > heightHalf) {
    return 4;
  } else if (position.left > widthHalf && position.top < heightHalf) {
    return 1;
  }
};z_dropdownMenu = 9;z_dropdownActive = 10;z_dropdownHovered = 11;slider_trackColor = "#e9e9e9";slider_progressColor = "rgb(150, 150, 150)";expandDropdown = function expandDropdown(target) {
  return ts(target).css('z-index', z_dropdownActive).removeClass('hidden').addClass('visible').addClass('animating').one(animationEnd, function () {
    return ts(target).removeClass('animating');
  });
};contractDropdown = function contractDropdown(target) {
  return ts(target).css('z-index', z_dropdownMenu).removeClass('visible').addClass('hidden').addClass('animating').one(animationEnd, function () {
    return ts(target).removeClass('animating');
  });
};detectDropdown = function detectDropdown(target, event) {
  var hasDropdownParent, isDropdown, isDropdownIcon, isDropdownImage, isDropdownText, isItem, isTsMenuItem, parentIsItem, targetIsDropdown;isDropdown = ts(target).hasClass('dropdown');isDropdownText = ts(event.target).hasClass('text');isDropdownIcon = ts(event.target).hasClass('icon');isDropdownImage = ts(event.target).hasClass('image');hasDropdownParent = ts(event.target).parent().hasClass('dropdown');parentIsItem = ts(event.target).parent().hasClass('item');targetIsDropdown = ts(event.target).hasClass('dropdown');isItem = ts(event.target).hasClass('item');isTsMenuItem = ts(event.target).closest('.ts.menu');if (isTsMenuItem && isDropdown && parentIsItem && targetIsDropdown || isTsMenuItem && isDropdown && !parentIsItem && targetIsDropdown || isTsMenuItem && isDropdown && hasDropdownParent && parentIsItem) {
    return expandDropdown(target);
  } else if (isDropdown && isItem || isDropdown && parentIsItem) {
    return contractDropdown('.ts.dropdown.visible');
  } else if (isDropdown && isTsMenuItem) {
    return expandDropdown(target);
  } else if (isDropdown && targetIsDropdown) {
    return expandDropdown(target);
  } else if (isDropdown && isDropdownIcon && hasDropdownParent) {
    return expandDropdown(target);
  } else if (isDropdown && isDropdownImage && hasDropdownParent) {
    return expandDropdown(target);
  } else if (isDropdown && isDropdownText && hasDropdownParent) {
    return expandDropdown(target);
  }
};ts(document).on('click', function (event) {
  if (ts(event.target).closest('.dropdown:not(.basic)') === null && !ts(event.target).hasClass('dropdown')) {
    return contractDropdown('.ts.dropdown:not(.basic).visible');
  }
});ts.fn.dropdown = function (command) {
  return this.each(function () {
    return ts(this).on('click', function (e) {
      ts(this).removeClass('upward downward leftward rightward');if (quadrant(this) === 2) {
        ts(this).addClass('downward rightward');
      } else if (quadrant(this) === 3) {
        ts(this).addClass('upward rightward');
      } else if (quadrant(this) === 1) {
        ts(this).addClass('downward leftward');
      } else if (quadrant(this) === 4) {
        ts(this).addClass('upward leftward');
      }
      contractDropdown('.ts.dropdown.visible');return detectDropdown(this, e);
    });
  });
};ts.fn.checkbox = function () {
  return this.each(function () {
    return ts(this).on('click', function (e) {
      var isRadio, name, tsThis;isRadio = ts(this).hasClass('radio');if (isRadio) {
        tsThis = ts(this).find('input[type="radio"]');
      } else {
        tsThis = ts(this).find('input[type="checkbox"]');
      }
      if (tsThis === null) {} else if (isRadio) {
        name = tsThis.attr('name');ts('input[type=\'radio\'][name=\'' + name + '\']').removeAttr('checked');return tsThis.attr('checked', 'checked');
      } else {
        if (tsThis.attr('checked') === 'checked') {
          return tsThis.removeAttr('checked');
        } else {
          return tsThis.attr('checked', 'checked');
        }
      }
    });
  });
};ts.fn.tablesort = function () {
  return this.each(function () {
    var table;if (!ts(this).hasClass("sortable")) {
      return;
    }
    table = this;return ts(this).find("thead th").each(function (i) {
      return ts(this).on("click", function () {
        var isAsc, sortTable;isAsc = ts(this).hasClass('ascending');ts(this).closest('thead').find('th').removeClass('sorted ascending descending');sortTable = function sortTable(table, col, reverse) {
          var element, j, len, results, tb, tr;tb = table.tBodies[0];tr = Array.prototype.slice.call(tb.rows, 0);reverse = -(+reverse || -1);tr = tr.sort(function (a, b) {
            return reverse * a.cells[col].textContent.trim().localeCompare(b.cells[col].textContent.trim());
          });results = [];for (j = 0, len = tr.length; j < len; j++) {
            element = tr[j];results.push(tb.appendChild(element));
          }
          return results;
        };sortTable(table, i, isAsc);return ts(this).addClass(isAsc ? 'sorted descending' : 'sorted ascending');
      });
    });
  });
};closeModal = function closeModal(modal) {
  if (ts(modal).hasClass('opening') || ts(modal).hasClass('closing')) {
    return;
  }
  ts(modal).closest('.ts.modals.dimmer').addClass('closing').one(animationEnd, function () {
    var dimmer;dimmer = this;return setTimeout(function () {
      ts(dimmer).removeClass('closing').removeClass('active');return ts('body').removeAttr('data-modal-lock');
    }, 30);
  });return ts(modal).addClass('closing').one(animationEnd, function () {
    return ts(this).removeClass('closing').removeAttr('open');
  });
};bindModalButtons = function bindModalButtons(modal, approve, deny, approveCallback, denyCalback, overwrite) {
  var isset, tsApprove, tsDeny;tsApprove = ts(modal).find(approve);tsDeny = ts(modal).find(deny);isset = ts(modal).attr("data-modal-initialized") !== null;if (tsApprove !== null) {
    if (overwrite) {
      tsApprove.off('click');
    }
    if (overwrite || !isset && !overwrite) {
      tsApprove.on('click', function () {
        if (approveCallback.call(modal) !== false) {
          return closeModal(modal);
        }
      });
    }
  }
  if (tsDeny !== null) {
    if (overwrite) {
      tsDeny.off('click');
    }
    if (overwrite || !isset && !overwrite) {
      tsDeny.on('click', function () {
        if (denyCalback.call(modal) !== false) {
          return closeModal(modal);
        }
      });
    }
  }
  return ts(modal).attr('data-modal-initialized', 'true');
};ts.fn.modal = function (option) {
  return this.each(function (i) {
    var approve, closeBtn, deny, modal, onApprove, onDeny, tsDimmer, tsModal;if (i > 0 || typeof this === 'undefined') {
      return;
    }
    modal = this;tsModal = ts(this);tsDimmer = tsModal.closest('.ts.modals.dimmer');closeBtn = tsModal.find('.close.icon');if (tsDimmer === null) {
      return;
    }
    if (option === 'show') {
      ts('body').attr('data-modal-lock', 'true');tsDimmer.addClass('active').addClass('opening').one(animationEnd, function () {
        return ts(this).removeClass('opening');
      }).on('click', function (e) {
        if (ts(modal).hasClass('closable')) {
          if (e.target === this) {
            return closeModal(modal);
          }
        }
      });if (closeBtn !== null) {
        closeBtn.on('click', function () {
          return closeModal(modal);
        });
      }
      bindModalButtons(modal, '.positive, .approve, .ok', '.negative, .deny, .cancel', function () {
        return true;
      }, function () {
        return true;
      }, false);return tsModal.attr('open', 'open').addClass('opening').one(animationEnd, function () {
        return tsModal.removeClass('opening');
      });
    } else if (option === 'hide') {
      return closeModal(this);
    } else if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
      approve = option.approve || '.positive, .approve, .ok';deny = option.deny || '.negative, .deny, .cancel';onDeny = option.onDeny || function () {
        return true;
      };onApprove = option.onApprove || function () {
        return true;
      };modal = this;return bindModalButtons(modal, approve, deny, onApprove, onDeny, true);
    }
  });
};ts.fn.sidebar = function (options, selector, eventName) {
  var closable, closeVisibleSidebars, dimPage, exclusive, pusher, scrollLock;dimPage = (options != null ? options.dimPage : void 0) || false;exclusive = (options != null ? options.exclusive : void 0) || false;scrollLock = (options != null ? options.scrollLock : void 0) || false;closable = (options != null ? options.closable : void 0) || true;pusher = document.querySelector('.pusher');closeVisibleSidebars = function closeVisibleSidebars() {
    ts('.ts.sidebar.visible:not(.static)').addClass('animating').removeClass('visible').one(animationEnd, function () {
      return ts(this).removeClass('animating');
    });return ts('.pusher').removeClass('dimmed').removeAttr('data-pusher-lock');
  };if (pusher.getAttribute('data-closable-bind') !== 'true') {
    pusher.addEventListener('click', function (e) {
      if (pusher.getAttribute('data-sidebar-closing') !== 'true') {
        return closeVisibleSidebars();
      }
    });
  }
  pusher.setAttribute('data-closable-bind', true);return this.each(function () {
    var that;if (options === 'toggle' || options === 'hide' || options === 'show') {
      ts(this).addClass('animating');pusher.setAttribute('data-sidebar-closing', 'true');setTimeout(function () {
        return pusher.removeAttribute('data-sidebar-closing');
      }, 300);if (this.getAttribute('data-dim-page') === null) {
        this.setAttribute('data-dim-page', dimPage);
      }
      if (this.getAttribute('data-scroll-lock') === null) {
        this.setAttribute('data-scroll-lock', scrollLock);
      }
      if (!ts(this).hasClass('visible') && options === 'hide') {
        ts(this).removeClass('animating');
      }
      if (ts(this).hasClass('visible') && options === 'toggle' || options === 'hide') {
        ts('.pusher').removeClass('dimmed').removeAttr('data-pusher-lock');return ts(this).removeClass('visible').one(animationEnd, function () {
          return ts(this).removeClass('animating');
        });
      } else {
        if (this.getAttribute('data-exclusive') === 'true') {
          closeVisibleSidebars();
        }
        if (this.getAttribute('data-dim-page') === 'true') {
          ts('.pusher').addClass('dimmed');
        }
        if (this.getAttribute('data-scroll-lock') === 'true') {
          ts('.pusher').attr('data-pusher-lock', 'true');
        }
        return ts(this).addClass('visible').removeClass('animating');
      }
    } else if (options === 'attach events') {
      that = this;switch (eventName) {case 'show':
          return ts(selector).attr('data-sidebar-trigger', 'true').on('click', function () {
            return ts(that).sidebar('show');
          });case 'hide':
          return ts(selector).attr('data-sidebar-trigger', 'true').on('click', function () {
            return ts(that).sidebar('hide');
          });case 'toggle':
          return ts(selector).attr('data-sidebar-trigger', 'true').on('click', function () {
            return ts(that).sidebar('toggle');
          });}
    } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
      this.setAttribute('data-closable', closable);this.setAttribute('data-scroll-lock', scrollLock);this.setAttribute('data-exclusive', exclusive);return this.setAttribute('data-dim-page', dimPage);
    }
  });
};ts.fn.tab = function (option) {
  return this.each(function () {
    var onSwitch;onSwitch = (option != null ? option.onSwitch : void 0) || function () {};return ts(this).on('click', function () {
      var tabGroup, tabName;if (ts(this).hasClass('active')) {
        return;
      }
      tabName = ts(this).attr('data-tab');if (tabName === null) {
        return;
      }
      tabGroup = ts(this).attr('data-tab-group');onSwitch(tabName, tabGroup);if (tabGroup === null) {
        ts('[data-tab]:not(.tab):not([data-tab-group]').removeClass('active');ts('[data-tab]:not([data-tab-group]').removeClass('active');ts('.tab[data-tab=\'' + tabName + '\']:not([data-tab-group]').addClass('active');
      } else {
        ts('[data-tab-group=\'' + tabGroup + '\']:not(.tab)').removeClass('active');ts('.tab[data-tab-group=\'' + tabGroup + '\']').removeClass('active');ts('.tab[data-tab=\'' + tabName + '\'][data-tab-group=\'' + tabGroup + '\']').addClass('active');
      }
      return ts(this).addClass('active');
    });
  });
};ts.fn.popup = function () {
  return this.each(function () {
    var android, iOS, userAgent, winPhone;userAgent = navigator.userAgent || navigator.vendor || window.opera;winPhone = new RegExp("windows phone", "i");android = new RegExp("android", "i");iOS = new RegExp("iPad|iPhone|iPod", "i");if (winPhone.test(userAgent) || android.test(userAgent) || iOS.test(userAgent) && !window.MSStream) {
      return ts(this).addClass('untooltipped');
    }
  });
};ts.fn.slider = function (option) {
  var counter, modify, outerCounter;outerCounter = option != null ? option.outerCounter : void 0;counter = option != null ? option.counter : void 0;modify = function modify(sliderEl, inputEl, counter, outerCounter) {
    var counterEl, value;value = (inputEl.value - inputEl.getAttribute('min')) / inputEl.getAttribute('max' - inputEl.getAttribute('min'));if (value === Number.POSITIVE_INFINITY) {
      value = inputEl.value / 100;
    }
    if (counter != null) {
      counterEl = ts(sliderEl).find(counter);if (counterEl != null) {
        counterEl[0].innerText = inputEl.value;
      }
    }
    if (outerCounter != null) {
      ts(outerCounter).innerText = inputEl.value;
    }
    return ts(inputEl).css('background-image', '-webkit-gradient(linear,left top,right top,color-stop(' + value + ',' + slider_progressColor + '),color-stop(' + value + ',' + slider_trackColor + '))');
  };return this.each(function () {
    var inputEl, sliderEl;sliderEl = this;inputEl = ts(this).find('input[type="range"]');modify(this, inputEl[0], counter, outerCounter);return inputEl.on('input', function () {
      return modify(sliderEl, this, counter, outerCounter);
    });
  });
};ts.fn.editable = function (option) {
  var autoClose, autoReplace, inputWrapper, onEdit, onEdited;autoReplace = (option != null ? option.autoReplace : void 0) || true;onEdit = (option != null ? option.onEdit : void 0) || function () {};onEdited = (option != null ? option.onEdited : void 0) || function () {};autoClose = (option != null ? option.autoClose : void 0) || true;inputWrapper = this;if (autoClose) {
    ts(document).on('click', function (event) {
      if (ts(event.target).closest('.ts.input') === null) {
        return inputWrapper.each(function () {
          var contenteditable, input, text;input = ts(this).find('input');contenteditable = ts(this).find('[contenteditable]');text = ts(this).find('.text')[0];if (autoReplace) {
            if (input != null) {
              text.innerText = input[0].value;
            } else if (contenteditable != null) {
              text.innerText = contenteditable[0].value;
            }
          }
          onEdited(this);return ts(this).removeClass('editing');
        });
      }
    });
  }
  return this.each(function () {
    var contenteditable, input;input = ts(this).find('input');contenteditable = ts(this).find('[contenteditable]');return ts(this).on('click', function () {
      ts(this).addClass('editing');onEdit(this);if (input != null) {
        return input[0].focus();
      } else if (contenteditable != null) {
        return contenteditable[0].focus();
      }
    });
  });
};ts.fn.message = function () {
  return this.each(function () {
    return ts(this).find('i.close').on('click', function () {
      return ts(this).closest('.ts.message').addClass('hidden');
    });
  });
};ts.fn.snackbar = function (option) {
  var action, actionEmphasis, content, hoverStay, interval, onAction, onClose;content = (option != null ? option.content : void 0) || null;action = (option != null ? option.action : void 0) || null;actionEmphasis = (option != null ? option.actionEmphasis : void 0) || null;onClose = (option != null ? option.onClose : void 0) || function () {};onAction = (option != null ? option.onAction : void 0) || function () {};hoverStay = (option != null ? option.hoverStay : void 0) || false;interval = 3500;if (content === null) {
    return;
  }
  return this.each(function () {
    var ActionEl, close, contentEl, snackbar;snackbar = this;contentEl = ts(snackbar).find('.content');ActionEl = ts(snackbar).find('.action');ts(snackbar).removeClass('active animating').addClass('active animating').one(animationEnd, function () {
      return ts(this).removeClass('animating');
    }).attr('data-mouseon', 'false');contentEl[0].innerText = content;if (ActionEl != null) {
      ActionEl[0].innerText = action;
    }
    if (actionEmphasis != null && ActionEl != null) {
      ActionEl.removeClass('primary info warning negative positive').addClass(actionEmphasis);
    }
    close = function close() {
      ts(snackbar).removeClass('active').addClass('animating').one(animationEnd, function () {
        ts(this).removeClass('animating');return onClose(snackbar, content, action);
      });return clearTimeout(snackbar.snackbarTimer);
    };if (ActionEl != null) {
      ActionEl.off('click');ActionEl.on('click', function () {
        close();return onAction(snackbar, content, action);
      });
    }
    if (hoverStay) {
      ts(snackbar).on('mouseenter', function () {
        return ts(this).attr('data-mouseon', 'true');
      });ts(snackbar).on('mouseleave', function () {
        return ts(this).attr('data-mouseon', 'false');
      });
    }
    clearTimeout(snackbar.snackbarTimer);return snackbar.snackbarTimer = setTimeout(function () {
      var hoverChecker;if (hoverStay) {
        return hoverChecker = setInterval(function () {
          if (ts(snackbar).attr('data-mouseon') === 'false') {
            close();return clearInterval(hoverChecker);
          }
        }, 600);
      } else {
        return close();
      }
    }, interval);
  });
};ts.fn.contextmenu = function (option) {
  var menu;menu = (option != null ? option.menu : void 0) || null;ts(document).on('click', function (event) {
    return ts('.ts.contextmenu.visible').removeClass('visible').addClass('hidden animating').one(animationEnd, function () {
      return ts(this).removeClass('visible animating downward upward rightward leftward');
    });
  });return this.each(function () {
    return ts(this).on('contextmenu', function (e) {
      var h, r, w;event.preventDefault();ts(menu).addClass('visible');r = ts(menu)[0].getBoundingClientRect();ts(menu).removeClass('visible');w = window.innerWidth / 2;h = window.innerHeight / 2;ts(menu).removeClass('downward upward rightward leftward');if (e.clientX < w && e.clientY < h) {
        ts(menu).addClass('downward rightward').css('left', e.clientX + 'px').css('top', e.clientY + 'px');
      } else if (e.clientX < w && e.clientY > h) {
        ts(menu).addClass('upward rightward').css('left', e.clientX + 'px').css('top', e.clientY - r.height + 'px');
      } else if (e.clientX > w && e.clientY > h) {
        ts(menu).addClass('upward leftward').css('left', e.clientX - r.width + 'px').css('top', e.clientY - r.height + 'px');
      } else if (e.clientX > w && e.clientY < h) {
        ts(menu).addClass('downward leftward').css('left', e.clientX - r.width + 'px').css('top', e.clientY + 'px');
      }
      return ts(menu).removeClass('hidden').addClass('visible animating').one(animationEnd, function () {
        return ts(this).removeClass('animating');
      });
    });
  });
};ts.fn.embed = function (option) {
  return this.each(function () {
    var embedEl, icon, iconEl, id, options, placeholder, placeholderEl, query, source, url;source = this.getAttribute('data-source');url = this.getAttribute('data-url');id = this.getAttribute('data-id');placeholder = this.getAttribute('data-placeholder');options = this.getAttribute('data-options') || '';query = this.getAttribute('data-query') || '';icon = this.getAttribute('data-icon') || 'video play';embedEl = this;if (this.getAttribute('data-embed-actived')) {
      return;
    }
    if (query !== '') {
      query = '?' + query;
    }
    if (placeholder) {
      placeholderEl = document.createElement('img');placeholderEl.src = placeholder;placeholderEl.className = 'placeholder';this.appendChild(placeholderEl);
    }
    if (icon && (source || url || id)) {
      iconEl = document.createElement('i');iconEl.className = icon + ' icon';ts(iconEl).on('click', function () {
        var iframeEl, urlExtension, videoEl;urlExtension = url ? url.split('.').pop() : '';if (urlExtension.toUpperCase().indexOf('MOV') !== -1 || urlExtension.toUpperCase().indexOf('MP4') !== -1 || urlExtension.toUpperCase().indexOf('WEBM') !== -1 || urlExtension.toUpperCase().indexOf('OGG') !== -1) {
          videoEl = document.createElement('video');videoEl.src = url;if (options !== '') {
            options.split(',').forEach(function (pair) {
              var key, p, value;p = pair.split('=');key = p[0];value = p[1] || '';return videoEl.setAttribute(key.trim(), value.trim());
            });
          }
          ts(embedEl).addClass('active');return embedEl.appendChild(videoEl);
        } else {
          iframeEl = document.createElement('iframe');iframeEl.width = '100%';iframeEl.height = '100%';iframeEl.frameborder = '0';iframeEl.scrolling = 'no';iframeEl.setAttribute('webkitAllowFullScreen', '');iframeEl.setAttribute('mozallowfullscreen', '');iframeEl.setAttribute('allowFullScreen', '');if (source) {
            switch (source) {case 'youtube':
                iframeEl.src = 'https://www.youtube.com/embed/' + id + query;break;case 'vimeo':
                iframeEl.src = 'https://player.vimeo.com/video/' + id + query;}
          } else if (url) {
            iframeEl.src = url + query;
          }
          ts(embedEl).addClass('active');return embedEl.appendChild(iframeEl);
        }
      });this.appendChild(iconEl);
    }
    return this.setAttribute('data-embed-actived', 'true');
  });
};ts.fn.accordion = function () {};ts.fn.scrollspy = function (options) {
  var anchors, container, target, tsTarget;target = document.querySelector(options.target);tsTarget = ts(target);container = this[0];anchors = document.querySelectorAll('[data-scrollspy=\'' + target.id + '\']');if (this[0] === document.body) {
    container = document;
  }
  return Array.from(anchors).forEach(function (element, index, array) {
    var anchor, event, link;anchor = element;link = '[href=\'#' + anchor.id + '\']';event = function event() {
      var containerRect, containerTop, continerIsBottom, length, rect;rect = anchor.getBoundingClientRect();if (container === document) {
        containerRect = document.documentElement.getBoundingClientRect();continerIsBottom = document.body.scrollHeight - (document.body.scrollTop + window.innerHeight) === 0;
      } else {
        containerRect = container.getBoundingClientRect();continerIsBottom = container.scrollHeight - (container.scrollTop + container.clientHeight) === 0;
      }
      containerTop = containerRect.top < 0 ? 0 : containerRect.top;if (rect.top - containerTop < 10 || continerIsBottom && index === array.length - 1) {
        tsTarget.find(link).addClass('active');length = tsTarget.find('.active').length;return tsTarget.find('.active').each(function (index) {
          if (index !== length - 1) {
            return ts(this).removeClass('active');
          }
        });
      } else {
        return tsTarget.find(link).removeClass('active');
      }
    };event.call(this);container.addEventListener('scroll', event);return window.addEventListener('hashchange', event);
  });
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]):before{position:absolute;top:calc(.44rem - 1px);bottom:calc(.44rem - 1px);left:calc(.44rem - 1px);right:calc(.44rem - 1px);z-index:1;content:\"\";border:1px solid #929292}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]).relaxed:before{left:calc(.88rem - 1px);right:calc(.88rem - 1px)}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .grid:before{border-width:2px}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .row:before{position:absolute;top:calc(.44rem - 1px);bottom:calc(.44rem - 1px);left:calc(.44rem - 1px);right:calc(.44rem - 1px);z-index:1;content:\"\";border:2px solid gray}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .column:not(.row):not(.grid){display:flex;align-content:center;flex-direction:column;height:5em;background:#e2e2e2;color:#909090;background-clip:content-box}[demo]>.ts.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .column:not(.row):not(.grid):after{box-shadow:inset 0 0 0 1px #bfbfbf;content:\"\";display:block;position:absolute;top:.44rem;right:.4rem;bottom:.4rem;left:.37rem}[demo]>.ts.relaxed.grid:not(.three):not([class*=\"mobile reversed\"]):not([class*=\"tablet reversed\"]):not([class*=\"computer reversed\"]) .column:not(.row):not(.grid):after{right:.8rem;left:.81rem}[demo]>.ts.relaxed.grid:not(.three) .column:not(.row):not(.grid):after{right:.75rem;left:.8rem}[demo]>.ts.grid .stretched.column,[demo]>.ts.grid .stretched.column+.column{justify-content:center;align-items:center}[demo]>.ts.grid.two>.column:not(.row):not(.grid):first-child{height:5em;background:transparent;background-clip:content-box}[demo]>.ts.fixed.menu{position:absolute!important}[demo]>.ts.contextmenu:only-child{position:relative!important;display:inline-block!important}[demo]>.ts.basic.fullscreen.modal{background:#5a5a5a!important}[demo]>.ts.card{width:285px!important}[demo]>.sidebar{height:400px!important;position:relative!important}[demo]>.right.sidebar{position:absolute!important;top:0}[demo]>.active.snackbar:not(.inline){position:relative!important;top:0!important;left:0!important;bottom:0!important;right:0!important;display:inline-flex!important;margin-top:100px!important}[demo]>.active.snackbar:not(.inline).top.left{position:absolute!important;top:-79px!important;bottom:auto!important;right:auto!important;left:21px!important}[demo]>.active.snackbar:not(.inline).top.right{position:absolute!important;top:-79px!important;bottom:auto!important;right:21px!important;left:auto!important}[demo]>.active.snackbar:not(.inline).bottom.right{position:absolute!important;top:auto!important;bottom:21px!important;right:21px!important;left:auto!important}[demo].bordered{border:1px solid #e9e9e9!important}[demo].bordered+.segment{border-top:0!important}[data-clipboard-text][data-clipboard-text][data-clipboard-text].copied{pointer-events:none;opacity:.5;color:green}[data-clipboard-text][data-clipboard-text][data-clipboard-text]:hover:not(.copied){color:#00adea;cursor:pointer}[data-clipboard-text][data-clipboard-text][data-clipboard-text]:active:not(.copied){color:#0087b7;cursor:pointer}[data-clipboard-text][data-clipboard-text][data-clipboard-text] i{margin-top:18px!important}[data-clipboard-text][data-clipboard-text][data-clipboard-text] label{display:block;margin-top:5px;line-height:16px;text-transform:capitalize;cursor:pointer}.sixteen.wide.column>div>.ts.header:before{display:none!important}mark>.hljs-tag>.hljs-attr,mark>.hljs-tag>.hljs-name,mark>.hljs-tag>.hljs-string{color:#fff!important}", ""]);

// exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/e1fffb5.png";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/af851d6.png";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/db467dd.jpg";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
var cssModules = {}
cssModules["$style"] = __webpack_require__(128)
__webpack_require__(127)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(118),
  /* template */
  __webpack_require__(126),
  /* scopeId */
  null,
  /* cssModules */
  cssModules
)

module.exports = Component.exports


/***/ }),
/* 126 */
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("2de11cee", content, true);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("5933bcde", content, true);

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_slate__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_slate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_slate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_navbar__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cards__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_cards__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_item__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_footer__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_images_videos_karen_png__ = __webpack_require__(117);
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
/* 133 */,
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
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
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
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
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("83156482", content, true);

/***/ })
]));