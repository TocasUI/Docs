webpackJsonp([40],{

/***/ 46:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "手風琴",
		"description": "叭啦叭叭叭叭，喔不好意思那是小喇叭。"
	},
	"intro": "<p>手風琴採用的是 HTML5 原生的標籤而不是 jQuery 或 TocasJS，樣式已經在所有瀏覽器上統一化了。手風琴內的下拉圖示會依照展開與否更換成不同的形態。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "在這裡瀏覽手風琴的種類。",
			"items": [
				{
					"title": "表格",
					"description": "最基本的手風琴。",
					"code": "<details class=\"ts [[accordion]]\" open>\n    <summary>\n        <i class=\"dropdown {{icon}}\"></i>\n        什麼是夏希？\n    </summary>\n    <div class=\"content\">\n        <p>夏希是一個基於 PHP 的時間類別，用以取得現在的時間，或者是數天後的現在時刻。</p>\n    </div>\n</details>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "手風琴的內部構造不僅一種。",
			"items": [
				{
					"title": "標題",
					"description": "手風琴的標題，作為欲展開內容的大鋼。",
					"code": "<details class=\"ts accordion\">\n    <[[summary]]>\n        <i class=\"dropdown {{icon}}\"></i>\n        我是標題，我永遠不會被收縮。\n    </[[summary]]>\n</details>\n"
				},
				{
					"title": "內容",
					"description": "擺放欲收縮和展開的內容容器。",
					"code": "<details class=\"ts accordion\" open>\n    <summary>\n        <i class=\"dropdown {{icon}}\"></i>\n        我是手風琴標題\n    </summary>\n    <div class=\"[[content]]\">\n        <p>按下標題可以收縮或是展開我。</p>\n    </div>\n</details>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "手風琴的外觀可以有所不同。",
			"items": [
				{
					"title": "反色",
					"description": "手風琴可以是反色的。",
					"code": "<div class=\"ts inverted {{segment}}\">\n    <details class=\"ts [[inverted]] accordion\" open>\n        <summary>\n            <i class=\"dropdown {{icon}}\"></i>\n            什麼是風紀委員？\n        </summary>\n        <div class=\"content\">\n            <p>Jajjimento（ジャッジメント）中文涵意是風紀委員，這是用來驗證表單的 PHP 類別。</p>\n        </div>\n    </details>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});