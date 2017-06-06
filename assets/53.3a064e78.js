webpackJsonp([53],{

/***/ 39:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "分隔線",
		"description": "這裡開啟了另一個話題。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "分隔線具有不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的分隔線。",
					"code": "<p>我是微笑小安安，歡迎來到小安網站。</p>\n<div class=\"ts [[divider]]\"></div>\n<p>你將會在這裡看見一個魔法師的日常生活，</p>\n<p>沒錯，只要你能夠單身三十年，你也可以跟我一樣成為魔法師。</p>\n"
				},
				{
					"title": "段落",
					"description": "分隔線可以增加間距用以區分大型段落。",
					"code": "這裡是一個區段，然後下一行會是新世界。\n<div class=\"ts [[section]] divider\"></div>\n哈囉！世界！\n"
				},
				{
					"title": "水平分隔線",
					"description": "這種分隔線可以讓你在中間插入文字。",
					"code": "<p>嗶嗶嗶。</p>\n<div class=\"ts [[horizontal]] divider\">我是分隔線</div>\n<p>沒錯，你可以在分隔線中間插入一小段文字，</p>\n<p>而且只需要一個元素。</p>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "分隔線的外觀可以有所不同。",
			"items": [
				{
					"title": "隱藏",
					"description": "不可見的分隔線，但仍帶有分隔效果。",
					"code": "<p>嗶嗶嗶。</p>\n<div class=\"ts [[hidden]] divider\">我是分隔線</div>\n<p>你有看見中間的分隔線嗎？。</p>\n<p>很多人看不見。</p>\n<p>但是很多人不說。</p>\n"
				},
				{
					"title": "縮減",
					"description": "分隔線可以沒有間距。",
					"code": "這個分隔線會沒有間距，字看起來會跟分隔線黏在一起。\n<div class=\"ts [[fitted]] divider\"></div>\n當然這一行也不例外。\n"
				},
				{
					"title": "反色",
					"description": "分隔線的顏色是相反色。",
					"code": "<div class=\"ts inverted {{segment}}\">\n    下面的分隔線會和一般的分隔線顏色有所不同。\n    <div class=\"ts [[inverted]] divider\"></div>\n    看見了嗎！奇蹟啊！\n</div>\n"
				},
				{
					"title": "清理浮動",
					"description": "分隔線可以透過 <span class=\"ts label\">clear: both;</span> 清理上一個元素的浮動狀態。\n",
					"code": "月月，搭拉安！\n<div class=\"ts [[clearing]] divider\"></div>\n月月，搭拉安！\n"
				}
			]
		}
	]
};

/***/ })

});