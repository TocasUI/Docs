webpackJsonp([39],{

/***/ 47:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "日曆",
		"description": "哇，2016 始春。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "日曆有不同種類可供選擇。",
			"items": [
				{
					"title": "基本",
					"description": "最基本的日曆。",
					"code": "<div class=\"ts [[calendar]]\">\n    <div class=\"header\">七月</div>\n    <div class=\"content\">\n        <div class=\"date\">13</div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "日曆由多個不同的內容構造所組成。",
			"items": [
				{
					"title": "標題",
					"description": "日曆的標題，可以用來顯示月份或是當作主要標題。",
					"code": "<div class=\"ts calendar\">\n    <div class=\"[[header]]\">十二月</div>\n</div>\n"
				},
				{
					"title": "日期",
					"description": "日曆中的日期。",
					"code": "<div class=\"ts calendar\">\n    <div class=\"header\">九月</div>\n    <div class=\"[[content]]\">\n        <div class=\"date\">14</div>\n    </div>\n</div>\n"
				},
				{
					"title": "日期範圍",
					"description": "日期可以是一個範圍，而不是單一天。",
					"code": "<div class=\"ts calendar\">\n    <div class=\"header\">九月</div>\n    <div class=\"content\">\n        <div class=\"date [[range]]\">12 - 31</div>\n    </div>\n</div>\n"
				},
				{
					"title": "額外內容",
					"description": "日曆中可以擺放額外的內容。",
					"code": "<div class=\"ts calendar\">\n    <div class=\"header\">七月</div>\n    <div class=\"content\">\n        <div class=\"date\">13</div>\n        <div class=\"[[extra]]\">星期三</div>\n    </div>\n</div>\n"
				},
				{
					"title": "前後輟",
					"description": "日曆中的日期可以有前輟或是後輟。",
					"remove": "<br><br>",
					"code": "<div class=\"ts calendar\">\n    <div class=\"header\">十二月</div>\n    <div class=\"content\">\n        <div class=\"date\">\n            <span class=\"[[prefix]]\">第</span>\n            ?\n            <span class=\"[[suffix]]\">日</span>\n        </div>\n    </div>\n</div>\n<br><br>\n<div class=\"ts calendar\">\n    <div class=\"header\">十二月</div>\n    <div class=\"content\">\n        <div class=\"date\">\n            25\n            <span class=\"[[suffix]]\">日</span>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "日曆的外觀有所不同。",
			"items": [
				{
					"title": "圓角",
					"description": "日曆的邊角可以是稍微圓角的。",
					"code": "<div class=\"ts [[rounded]] calendar\">\n    <div class=\"header\">七月</div>\n    <div class=\"content\">\n        <div class=\"date\">13</div>\n    </div>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "日曆的尺寸可以改變。",
					"code": "<div class=\"ts [[mini]] calendar\">\n    <div class=\"header\">迷你</div>\n    <div class=\"content\">\n        <div class=\"date\">14</div>\n    </div>\n</div>\n<div class=\"ts [[tiny]] calendar\">\n    <div class=\"header\">微小</div>\n    <div class=\"content\">\n        <div class=\"date\">14</div>\n    </div>\n</div>\n<div class=\"ts [[small]] calendar\">\n    <div class=\"header\">小的</div>\n    <div class=\"content\">\n        <div class=\"date\">14</div>\n    </div>\n</div>\n<div class=\"ts [[medium]] calendar\">\n    <div class=\"header\">適中</div>\n    <div class=\"content\">\n        <div class=\"date\">14</div>\n    </div>\n</div>\n<div class=\"ts [[large]] calendar\">\n    <div class=\"header\">稍大</div>\n    <div class=\"content\">\n        <div class=\"date\">14</div>\n    </div>\n</div>\n<div class=\"ts [[big]] calendar\">\n    <div class=\"header\">大的</div>\n    <div class=\"content\">\n        <div class=\"date\">14</div>\n    </div>\n</div>\n<div class=\"ts [[huge]] calendar\">\n    <div class=\"header\">巨大</div>\n    <div class=\"content\">\n        <div class=\"date\">14</div>\n    </div>\n</div>\n<div class=\"ts [[massive]] calendar\">\n    <div class=\"header\">重量級</div>\n    <div class=\"content\">\n        <div class=\"date\">14</div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});