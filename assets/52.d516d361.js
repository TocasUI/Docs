webpackJsonp([52],{

/***/ 40:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "標題",
		"description": "那數公分的大小落差，就足以形容事態的嚴重。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "標題具有多個不同的種類。",
			"items": [
				{
					"title": "基本標題",
					"description": "基於 <span class=\"ts label\">h1</span> 到 <span class=\"ts label\">h6</span> 的標題，這個標題的大小依照頁面基準文字大小為主。",
					"code": "<h1 class=\"ts [[header]]\">標題 1</h1>\n<h2 class=\"ts [[header]]\">標題 2</h2>\n<h3 class=\"ts [[header]]\">標題 3</h3>\n<h4 class=\"ts [[header]]\">標題 4</h4>\n<h5 class=\"ts [[header]]\">標題 5</h5>\n<h6 class=\"ts [[header]]\">標題 6</h6>\n"
				},
				{
					"title": "內容標題",
					"description": "這種標題是基於父容器的文字大小為基準點，因此在不同文字大小的容器中，標題的大小也會有所不同。",
					"code": "<div class=\"ts [[massive]] header\">重量級</div>\n<div class=\"ts [[huge]] header\">巨大</div>\n<div class=\"ts [[big]] header\">大的</div>\n<div class=\"ts [[large]] header\">大型</div>\n<div class=\"ts [[medium]] header\">中等</div>\n<div class=\"ts [[small]] header\">小型</div>\n<div class=\"ts [[tiny]] header\">微小</div>\n<div class=\"ts [[mini]] header\">迷你</div>\n"
				},
				{
					"title": "副標題",
					"description": "比正常標題還要稍微小一號的副標題。",
					"code": "<h1 class=\"ts [[sub header]]\">副標題 1</h1>\n<h2 class=\"ts [[sub header]]\">副標題 2</h2>\n<h3 class=\"ts [[sub header]]\">副標題 3</h3>\n<h4 class=\"ts [[sub header]]\">副標題 4</h4>\n<h5 class=\"ts [[sub header]]\">副標題 5</h5>\n<h6 class=\"ts [[sub header]]\">副標題 6</h6>\n<div class=\"ts massive [[sub header]]\">重量級副標題</div>\n<div class=\"ts huge [[sub header]]\">巨大副標題</div>\n<div class=\"ts big [[sub header]]\">大的副標題</div>\n<div class=\"ts large [[sub header]]\">大型副標題</div>\n<div class=\"ts medium [[sub header]]\">中等副標題</div>\n<div class=\"ts small [[sub header]]\">小型副標題</div>\n<div class=\"ts tiny [[sub header]]\">微小副標題</div>\n<div class=\"ts mini [[sub header]]\">迷你副標題</div>\n"
				},
				{
					"title": "圖示標題",
					"description": "標題可以帶有圖示和部分說明。",
					"code": "<h3 class=\"ts center aligned [[icon header]]\">\n    <i class=\"gift {{icon}}\"></i>挑選禮物\n    <div class=\"sub header\">為你的女朋友，喔不，你沒有女朋友。</div>\n</h3>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "一些用以擺放在標題內不同的內容元素。",
			"items": [
				{
					"title": "標題中的副標題",
					"description": "用來詮釋主標題的副標題。",
					"code": "<div class=\"ts header\">\n    大標題\n    <div class=\"[[sub header]]\">然後我是子標題。</div>\n</div>\n"
				},
				{
					"subtitle": "同行副標題",
					"description": "標題內的副標題可以跟主標題同一行，而不是換到下一行。",
					"code": "<div class=\"ts header\">\n    大標題\n    <div class=\"[[inline]] sub header\">我是同行子標題，會跟大標題在一起。</div>\n</div>\n"
				},
				{
					"title": "圖片",
					"description": "標題中可以帶有圖片。",
					"code": "<h3 class=\"ts header\">\n    <img class=\"ts circular [[image]]\" src=\"!-user-!\">\n    帳號設定\n</h3>\n"
				},
				{
					"title": "圖示",
					"description": "標題中也可以帶有圖示。",
					"code": "<h3 class=\"ts header\">\n    <i class=\"plug [[icon]]\"></i>\n    <div class=\"content\">\n        99.9% 上線時間保證\n    </div>\n</h3>\n<h2 class=\"ts header\">\n    <i class=\"settings [[icon]]\"></i>\n    <div class=\"content\">\n        安全性設定\n        <div class=\"sub header\">管理好您的洨洨安，確保不受任何人詐騙。</div>\n    </div>\n</h2>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "你可以隨時透過樣式類別切換一個標題的狀態。",
			"items": [
				{
					"title": "已停用",
					"description": "用以顯示這個標題已經被停用。",
					"code": "<h3 class=\"ts [[disabled]] header\">已停用標題</h3>"
				}
			]
		},
		{
			"category": "外觀",
			"description": "你可以點綴標題的樣式。",
			"items": [
				{
					"title": "語氣",
					"description": "標題也具有不同的語氣。",
					"code": "<h3 class=\"ts [[primary]] header\">主要語氣</h3>\n<h3 class=\"ts [[info]] header\">提示語氣</h3>\n<h3 class=\"ts [[warning]] header\">警告語氣</h3>\n<h3 class=\"ts [[positive]] header\">正面語氣</h3>\n<h3 class=\"ts [[negative]] header\">否定語氣</h3>\n<div class=\"ts inverted {{segment}}\">\n    <h3 class=\"ts [[inverted]] header\">反色語氣</h3>\n</div>\n"
				},
				{
					"title": "分隔線",
					"description": "每個標題都可以在底下新增分隔線。",
					"code": "<h1 class=\"ts [[dividing]] header\">標題 1</h1>\n<h2 class=\"ts [[dividing]] header\">標題 2</h2>\n<h3 class=\"ts [[dividing]] header\">標題 3</h3>\n<h4 class=\"ts [[dividing]] header\">標題 4</h4>\n<h5 class=\"ts [[dividing]] header\">標題 5</h5>\n<h6 class=\"ts [[dividing]] header\">標題 6</h6>\n"
				},
				{
					"title": "對齊",
					"description": "標題可以置中、置左或者置右。",
					"code": "<h5 class=\"ts [[left aligned]] header\">我置左</h5>\n<h5 class=\"ts [[center aligned]] header\">我置中</h5>\n<h5 class=\"ts [[right aligned]] header\">我置障</h5>\n"
				},
				{
					"title": "浮動",
					"description": "標題可以置中、置左或者置右。",
					"code": "<h5 class=\"ts [[left floated]] header\">向左浮動</h5>\n<h5 class=\"ts [[right floated]] header\">向右浮動</h5>\n"
				},
				{
					"title": "區塊",
					"description": "標題能夠看起來像自己一個區塊。",
					"code": "<h4 class=\"ts [[block]] header\">我自己是一個區塊喔</h4>"
				},
				{
					"title": "吸附",
					"description": "標題能夠吸附在其他的元件上。",
					"code": "<h5 class=\"ts [[top attached]] header\">吸附在上部</h5>\n<div class=\"ts attached {{segment}}\">\n    在這寂靜的夜晚，我又想起了你。\n</div>\n<h5 class=\"ts [[attached]] header\">吸附於中間</h5>\n<div class=\"ts attached {{segment}}\">\n    頓時；一陣涼風吹過，而我——又射了。\n</div>\n<h5 class=\"ts [[bottom attached]] header\">吸附於底部</h5>\n"
				},
				{
					"title": "置上圖示",
					"description": "標題裡的圖示可以是置上而不是置中，當有子標題的時候圖示會對齊大標題。",
					"code": "<div class=\"ts large header\">\n    <i class=\"announcement [[top aligned]] {{icon}}\"></i>\n    <div class=\"content\">\n        官方公告\n        <div class=\"sub header\">叭啦叭叭批哩叭啦，有新公告啦！</div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});