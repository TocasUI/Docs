webpackJsonp([33],{

/***/ 59:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "下拉式選單",
		"description": "打開之後會顛覆你先前以為不能的想法。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/dropdown/"
		},
		{
			"type": "javascript",
			"to": "/modules/dropdown/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "下拉式選單有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "功能選單",
					"description": "一個用以呈現功能的下拉式功能選單",
					"code": "<div class=\"ts [[dropdown]]\">\n    <div class=\"text\">檔案</div>\n    <i class=\"caret down {{icon}}\"></i>\n    <div class=\"menu\">\n        <div class=\"item\">\n            新增\n        </div>\n        <div class=\"item\">\n            重新命名\n            <span class=\"description\">Ctrl + R</span>\n        </div>\n        <div class=\"item\">\n            <i class=\"folder {{icon}}\"></i>\n            移動至\n        </div>\n        <div class=\"item\">\n            <i class=\"trash {{icon}}\"></i>\n            移至垃圾桶\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"item\">\n            下載為 ...\n        </div>\n    </div>\n</div>\n",
					"javascript": "ts('.ts.dropdown:not(.basic)').dropdown();\n",
					"autoExecute": true
				}
			]
		}
	]
};

/***/ })

});