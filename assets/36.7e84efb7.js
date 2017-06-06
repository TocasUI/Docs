webpackJsonp([36],{

/***/ 50:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "複合功能選單",
		"description": "像原生應用程式那樣地將多項功能納入右鍵、長按選單。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/contextmenu/"
		},
		{
			"type": "javascript",
			"to": "/modules/contextmenu/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "複合功能選單有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "初始化",
					"description": "你需要透過 JavaScript 初始化一個複合功能選單，同時需指定會觸發複合功能選單的容器，還有觸發的選單為何。",
					"code": "<div class=\"ts basic padded dashed slate\">\n    <i class=\"mouse pointer icon\"></i>\n    <span class=\"header\">在此點擊右鍵</span>\n    <span class=\"description\">在這個板岩上點擊右鍵可以呼叫出 Tocas UI 自訂的複合功能選單。</span>\n</div>\n<div class=\"ts [[contextmenu]]\">\n    <div class=\"item\">\n        新增\n    </div>\n    <div class=\"item\">\n        重新命名\n        <span class=\"description\">Ctrl + R</span>\n    </div>\n    <div class=\"item\">\n        <i class=\"folder icon\"></i>\n        移動至\n    </div>\n    <div class=\"item\">\n        <i class=\"trash icon\"></i>\n        移至垃圾桶\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"item\">\n        下載為 ...\n    </div>\n</div>\n",
					"javascript": "ts('.basic.dashed.slate').contextmenu({\n    menu: '.ts.contextmenu'\n});\n",
					"autoExecute": true
				}
			]
		}
	]
};

/***/ })

});