webpackJsonp([26],{

/***/ 66:
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
	"intro": "<p>用上彈出式訊息通常是個不好的設計。此元件會在滑鼠移過某處時顯示一個氣泡訊息，這個訊息偏向提示，尚不打算增加過多豐富的功能。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "一個彈出式訊息具有多個不同的種類。",
			"items": [
				{
					"title": "彈出式訊息",
					"description": "一個正常的彈出式訊息，彈出式訊息的位置預設在元素下方。",
					"code": "<button class=\"ts info labeled icon {{button}}\" [[data-tooltip]]=\"早安！我的朋友！你欠錢沒還！\">\n    <i class=\"mouse pointer {{icon}}\"></i>\n    滑鼠移至此查看範例\n</button>\n"
				},
				{
					"title": "標籤",
					"description": "彈出式訊息可以看起來更像普通標籤，而不帶有指向某處的記號。",
					"code": "<button class=\"ts info labeled icon {{button}}\" [[data-tooltip-type]]=\"label\" data-tooltip=\"這個彈出式訊息沒有箭頭，像普通標籤。\">\n    <i class=\"mouse pointer {{icon}}\"></i>\n    滑鼠移至此查看範例\n</button>\n"
				},
				{
					"title": "附著於其他元素",
					"description": "彈出式訊息也可以套用在一般的文字或是連結甚至其他元素上，需要注意的是這依賴著 <span class=\"ts horizontal label\">:after</span> 與 <span class=\"ts horizontal label\">:before</span> 選擇器，任何不是「容器」的都不適用，如：文字欄位、圖示、影像等。\n<br><br>\n你需要有個額外的容器包覆這些不適用的元素，然後在容器上配置彈出式訊息，請參閱下面這個範例。\n",
					"code": "<a href=\"#!\" [[data-tooltip]]=\"這是洨洨安。\">\n    <img class=\"ts circular avatar {{image}}\" src=\"!-user-!\">\n</a>\n<a href=\"#!\" [[data-tooltip]]=\"這是我好朋友，長得跟洨洨安有點像。\">\n    <img class=\"ts circular avatar {{image}}\" src=\"!-user-!\">\n</a>\n<span>當然，你也能夠讓</span>\n<a href=\"#!\" [[data-tooltip]]=\"早安！朋友！\">\n    普通的連結\n</a>\n<span>有彈出式訊息。</span>\n<div class=\"ts {{input}}\" [[data-tooltip]]=\"請輸入您的帳號。\">\n    <input type=\"text\" placeholder=\"滑鼠移過來\">\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "彈出式訊息也具有狀態。",
			"items": [
				{
					"title": "無彈出式訊息",
					"description": "有些時候你可能已經有外掛、或是插件來協助你完成彈出式訊息的實作，倘若你的外掛、插件也使用到了 <span class=\"ts horizontal label\">[data-tooltip]</span> 屬性，這個時候可能會與 Tocas UI 有所衝突，為此，你可以在該元素上加上 <span class=\"ts horizontal label\">.untooltipped</span> 樣式即可停用 Tocas UI 的彈出式訊息。\n",
					"code": "<button class=\"ts info [[untooltipped]] button\" data-tooltip=\"早安！我的朋友！你欠錢沒還！\">\n    這個按鈕不會有彈出式訊息\n</button>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "你可以更改彈出式訊息的位置、大小。",
			"items": [
				{
					"title": "訊息位置",
					"description": "彈出式訊息出現的位置能夠被更改。",
					"code": "<button class=\"ts info button\" [[data-tooltip-position]]=\"top left\" data-tooltip=\"這是彈出式訊息。\">上面左邊</button>\n<button class=\"ts info button\" [[data-tooltip-position]]=\"top center\" data-tooltip=\"這是彈出式訊息。\">上面中間</button>\n<button class=\"ts info button\" [[data-tooltip-position]]=\"top right\" data-tooltip=\"這是彈出式訊息。\">上面右邊</button>\n<button class=\"ts info button\" [[data-tooltip-position]]=\"bottom left\" data-tooltip=\"這是彈出式訊息。\">下面左邊</button>\n<button class=\"ts info button\" [[data-tooltip-position]]=\"bottom center\" data-tooltip=\"這是彈出式訊息。\">下面中間</button>\n<button class=\"ts info button\" [[data-tooltip-position]]=\"bottom right\" data-tooltip=\"這是彈出式訊息。\">下面右邊</button>\n<button class=\"ts info button\" [[data-tooltip-position]]=\"left\" data-tooltip=\"這是彈出式訊息。\">左邊</button>\n<button class=\"ts info button\" [[data-tooltip-position]]=\"right\" data-tooltip=\"這是彈出式訊息。\">右邊</button>\n"
				},
				{
					"title": "出現延遲",
					"description": "你可以決定滑鼠移至元素上後要過多久才會出現彈出式訊息。",
					"code": "<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"disabled\">停用延遲</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"0.1\">0.1 秒</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"0.2\">0.2 秒</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"0.3\">0.3 秒</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"0.4\">0.4 秒</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"0.5\">0.5 秒</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"1\">1 秒</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"2\">2 秒</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"3\">3 秒</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"4\">4 秒</button>\n<button class=\"ts info button\" data-tooltip=\"這是彈出式訊息。\" [[data-tooltip-delay]]=\"5\">5 秒</button>\n"
				}
			]
		}
	]
};

/***/ })

});