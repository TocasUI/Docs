webpackJsonp([35],{

/***/ 57:
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
	"intro": "<p>複合功能選單不僅能用於電腦上的滑鼠右鍵，還可以在 Android、iOS 平板、智慧型手機上使用（透過長按畫面）。但複合功能選單是不被推薦使用的元件，原因是較不直覺。使用者通常不會按下右鍵查看是否有更多功能。建議僅用於偏向原生應用程式（如：文件編輯器）的頁面上。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "複合功能選單有不同的種類可供選擇。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的複合功能選單，這外觀與下拉式選單是一樣的。複合功能選單正常狀況下是隱藏的除非你按下右鍵或是長按螢幕為止。但為了範例的示範需求，我們修改了樣式將其保持常態顯示。",
					"code": "<div class=\"ts [[contextmenu]]\">\n    <div class=\"item\">\n        新增\n    </div>\n    <div class=\"item\">\n        重新命名\n        <span class=\"description\">Ctrl + R</span>\n    </div>\n    <div class=\"item\">\n        <i class=\"folder icon\"></i>\n        移動至\n    </div>\n    <div class=\"item\">\n        <i class=\"trash icon\"></i>\n        移至垃圾桶\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"item\">\n        下載為 ...\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "複合功能選單的內容由多種不同的結構組成。",
			"items": [
				{
					"title": "項目",
					"description": "項目是構成選單中最基本的一個部分。",
					"code": "<div class=\"ts contextmenu\">\n    <div class=\"[[item]]\">\n        新增\n    </div>\n    <div class=\"[[item]]\">\n        重新命名\n    </div>\n    <div class=\"[[item]]\">\n        下載並壓縮\n    </div>\n</div>\n"
				},
				{
					"title": "標題",
					"description": "選單中可以有標題。",
					"code": "<div class=\"ts contextmenu\">\n    <div class=\"[[header]]\">\n        <i class=\"tags {{icon}}\"></i>\n        由下列標籤篩選\n    </div>\n    <div class=\"item\">\n        已完成\n    </div>\n    <div class=\"item\">\n        進行中\n    </div>\n</div>\n"
				},
				{
					"title": "分隔線",
					"description": "選單中可以插入分隔線來劃分兩個區塊。",
					"code": "<div class=\"ts contextmenu\">\n    <div class=\"item\">\n        橙希\n    </div>\n    <div class=\"item\">\n        吳雨藍\n    </div>\n    <div class=\"[[divider]]\"></div>\n    <div class=\"item\">\n        羽田白音\n    </div>\n</div>\n"
				},
				{
					"subtitle": "區段分隔線",
					"description": "分隔線的間距可以更大，用以加強分隔區段。",
					"code": "<div class=\"ts contextmenu\">\n    <div class=\"item\">\n        橙希\n    </div>\n    <div class=\"item\">\n        吳雨藍\n    </div>\n    <div class=\"[[section divider]]\"></div>\n    <div class=\"item\">\n        羽田白音\n    </div>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "選單內可以有圖示點綴。",
					"code": "<div class=\"ts contextmenu\">\n    <div class=\"item\">\n        <i class=\"frown [[icon]]\"></i>\n        難過\n    </div>\n    <div class=\"item\">\n        <i class=\"meh [[icon]]\"></i>\n        喔\n    </div>\n    <div class=\"item\">\n        <i class=\"smile [[icon]]\"></i>\n        開心\n    </div>\n</div>\n"
				},
				{
					"title": "註釋",
					"description": "選單內的項目可以帶有註釋，用做詮釋項目的概要。",
					"code": "<div class=\"ts contextmenu\">\n    <div class=\"item\">\n        <span class=\"text\">圖片</span>\n        <span class=\"[[description]]\">今天上午</span>\n    </div>\n    <div class=\"item\">\n        <span class=\"text\">音樂</span>\n        <span class=\"[[description]]\">未曾變動</span>\n    </div>\n    <div class=\"item\">\n        <span class=\"text\">備份</span>\n        <span class=\"[[description]]\">一年前</span>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});