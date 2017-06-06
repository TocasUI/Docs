webpackJsonp([18],{

/***/ 68:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "點心條",
		"description": "附著在螢幕角落且帶有通知文字的點心棒。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/snackbar/"
		},
		{
			"type": "javascript",
			"to": "/modules/snackbar/javascript/"
		}
	],
	"intro": "<p>點心條和訊息不一樣的地方在於點心條是浮動在頁面角落、且較單調的。同時當多個通知發生時，點心條只會顯示最後一個通知且無法重疊。</p>\n<p>倘若出現多個通知是你期望的目標，試著使用清單元件，且謹記避免過度遮蔽螢幕畫面。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "點心條有不同種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的點心條會出現在螢幕左下角中。",
					"type": "snackbar",
					"code": "<div class=\"ts active [[snackbar]]\">\n    <div class=\"content\">\n        你已成功地還原檔案了。\n    </div>\n    <a class=\"primary action\">重新送出</a>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "點心條有不同的呈現狀態。",
			"items": [
				{
					"title": "已啟用",
					"description": "點心條預設並不會顯示，直到將其設置為已啟用。",
					"type": "snackbar",
					"code": "<div class=\"ts [[active]] snackbar\">\n    <div class=\"content\">\n        早安！我的朋友！這段話是在我凌晨五點沒睡覺時打的。\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "你能在點心條中放置不同的內容。",
			"items": [
				{
					"title": "內容",
					"description": "用以呈現通知的主要文字和訊息。",
					"type": "snackbar",
					"code": "<div class=\"ts active snackbar\">\n    <div class=\"[[content]]\">\n        澳門首家線上賭場上線啦！\n    </div>\n</div>\n"
				},
				{
					"title": "動作",
					"description": "針對通知所提供的動作按鈕。點心條上僅能有一個動作按鈕。",
					"type": "snackbar",
					"code": "<div class=\"ts active snackbar\">\n    <div class=\"content\">\n        這個檔案已經損毀了。\n    </div>\n    <a class=\"[[action]]\">移至回收桶</a>\n</div>\n"
				},
				{
					"subtitle": "動作語意",
					"description": "動作按鈕也能有不同的語意並以示其重要性。",
					"type": "snackbar",
					"code": "<div class=\"ts active snackbar\">\n    <a class=\"[[primary]] action\">主要</a>\n    <a class=\"[[info]] action\">資訊</a>\n    <a class=\"[[warning]] action\">警告</a>\n    <a class=\"[[positive]] action\">肯定</a>\n    <a class=\"[[negative]] action\">否定</a>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "點心條的外觀有所不同。",
			"items": [
				{
					"title": "同行",
					"description": "點心條預設是浮動在螢幕上的，但能夠使其成為同行點心條，和其他元素擺置在一塊。",
					"code": "<div class=\"ts active [[inline]] snackbar\">\n    <div class=\"content\">\n        你有五則訊息尚未讀取。\n    </div>\n</div>\n"
				},
				{
					"title": "位置",
					"description": "點心條在螢幕角落的浮動位置是可以更改的。",
					"type": "snackbar",
					"code": "<div class=\"ts active [[top left]] snackbar\">\n    <div class=\"content\">\n        上左\n    </div>\n</div>\n<div class=\"ts active [[top right]] snackbar\">\n    <div class=\"content\">\n        上右\n    </div>\n</div>\n<div class=\"ts active [[bottom left]] snackbar\">\n    <div class=\"content\">\n        下左\n    </div>\n</div>\n<div class=\"ts active [[bottom right]] snackbar\">\n    <div class=\"content\">\n        下右\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});