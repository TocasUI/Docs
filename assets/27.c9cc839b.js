webpackJsonp([27],{

/***/ 65:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "彈出式訊息",
		"description": "砰！看看我！"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/popup/"
		},
		{
			"type": "javascript",
			"to": "/modules/popup/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "彈出式訊息有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "行動裝置禁用",
					"description": "彈出式訊息就算不用 JavaScript 也能運作，但這會令行動裝置使用者困擾。當他們按下按鈕時瀏覽器會誤以為是將游標移動到元素上，進而出現惱人的彈出式訊息而遮蔽了畫面。為了解決這個問題，你需要執行下列 JavaScript。",
					"code": "<button class=\"ts info labeled icon button\" data-tooltip=\"早安！我的朋友！你欠錢沒還！\">\n    <i class=\"mouse pointer icon\"></i>\n    行動裝置上點擊此按鈕不會有彈出式訊息\n</button>\n",
					"javascript": "ts('[data-tooltip]').popup();\n",
					"autoExecute": true
				}
			]
		}
	]
};

/***/ })

});