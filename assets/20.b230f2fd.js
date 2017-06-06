webpackJsonp([20],{

/***/ 72:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "滑桿",
		"description": "省去手動輸入數值的麻煩。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/slider/"
		},
		{
			"type": "javascript",
			"to": "/modules/slider/javascript"
		}
	],
	"styles": [
		{
			"category": "種類",
			"description": "這裡是滑桿的種類。",
			"items": [
				{
					"title": "基本",
					"description": "最基本的滑桿。",
					"code": "<div class=\"ts [[slider]]\">\n    <input type=\"range\">\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "滑桿有不同的狀態。",
			"items": [
				{
					"title": "已停用",
					"description": "一個滑桿可以呈現出無法使用、已停用的狀態。",
					"code": "<div class=\"ts [[disabled]] slider\">\n    <input type=\"range\">\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "滑桿裡可以擺放不同的內容。",
			"items": [
				{
					"title": "標籤",
					"description": "滑桿的側邊可以擺放標籤用以標示與滑桿有關的數值。",
					"code": "<div class=\"ts slider\">\n    <div class=\"ts basic right pointing [[label]]\">32</div>\n    <input type=\"range\">\n    <div class=\"ts basic left pointing [[label]]\">96</div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "滑桿的外觀有所不同。",
			"items": [
				{
					"title": "流動",
					"description": "滑桿可以是流動且填滿整個容器的寬度。",
					"code": "<div class=\"ts [[fluid]] slider\">\n    <input type=\"range\">\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});