webpackJsonp([37],{

/***/ 55:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "核取方塊",
		"description": "好的。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/checkbox"
		},
		{
			"type": "javascript",
			"to": "/modules/checkbox/javascript"
		}
	],
	"styles": [
		{
			"category": "種類",
			"description": "核取方塊有不同的種類可供選擇。",
			"items": [
				{
					"title": "基本",
					"description": "最基本的核取方塊。",
					"code": "<div class=\"ts [[checkbox]]\">\n    <input type=\"checkbox\" id=\"thirdGender\">\n    <label for=\"thirdGender\">第三性</label>\n</div>\n"
				},
				{
					"title": "單選方塊",
					"description": "一個僅能夠在多個選項中核取其中一項的單選方塊。",
					"code": "<div class=\"ts [[radio]] checkbox\">\n    <input type=\"radio\" id=\"radio\">\n    <label for=\"radio\">男性</label>\n</div>\n"
				},
				{
					"title": "指撥開關",
					"description": "一個可供切換的指撥開關。",
					"code": "<div class=\"ts [[toggle]] checkbox\">\n    <input type=\"checkbox\" id=\"toggle\">\n    <label for=\"toggle\">暫離</label>\n</div>\n"
				}
			]
		},
		{
			"category": "群組",
			"description": "多個核取方塊可以組成一個群組。",
			"items": [
				{
					"title": "核取群組",
					"description": "核取方塊群組可以用來排列。",
					"code": "<div class=\"ts [[checkboxes]]\">\n    <div class=\"ts radio checkbox\">\n        <input type=\"radio\" name=\"gender\" id=\"male\">\n        <label for=\"male\">男性</label>\n    </div>\n    <div class=\"ts radio checkbox\">\n        <input type=\"radio\" name=\"gender\" id=\"female\">\n        <label for=\"female\">女性</label>\n    </div>\n    <div class=\"ts radio checkbox\">\n        <input type=\"radio\" name=\"gender\" id=\"third\">\n        <label for=\"third\">第三性</label>\n    </div>\n</div>\n"
				},
				{
					"title": "水平群組",
					"description": "群組可以是水平排列的。",
					"code": "<div class=\"ts [[horizontal]] checkboxes\">\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"blue\">\n        <label for=\"blue\">小藍</label>\n    </div>\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"seed\">\n        <label for=\"seed\">小芽</label>\n    </div>\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"orenji\">\n        <label for=\"orenji\">橙希</label>\n    </div>\n</div>\n"
				},
				{
					"title": "輕巧版",
					"description": "群組可以是依照內容為寬度基準，而不是一開始就服貼容器的寬度。",
					"code": "<div class=\"ts [[compact]] horizontal checkboxes\">\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"apple\">\n        <label for=\"apple\">蘋果</label>\n    </div>\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"polo\">\n        <label for=\"polo\">菠蘿</label>\n    </div>\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"bavone\">\n        <label for=\"bavone\">拔鳳梨</label>\n    </div>\n</div>\n"
				},
				{
					"title": "水平對齊",
					"description": "群組可以靠右、左、甚至置中。",
					"code": "<div class=\"ts [[left aligned]] compact horizontal checkboxes\">\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"lelia\">\n        <label for=\"lelia\">雷莉亞</label>\n    </div>\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"avane\">\n        <label for=\"avane\">亞凡芽</label>\n    </div>\n</div>\n<br><br>\n<div class=\"ts [[center aligned]] compact horizontal checkboxes\">\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"aoi\">\n        <label for=\"aoi\">吳雨藍</label>\n    </div>\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"shirone\">\n        <label for=\"shirone\">羽田白音</label>\n    </div>\n</div>\n<br><br>\n<div class=\"ts [[right aligned]] compact horizontal checkboxes\">\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"caris\">\n        <label for=\"caris\">卡莉絲</label>\n    </div>\n    <div class=\"ts checkbox\">\n        <input type=\"checkbox\" id=\"iknore\">\n        <label for=\"iknore\">依可諾爾</label>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "核取方塊有不同的狀態。",
			"items": [
				{
					"title": "已停用",
					"description": "一個核取方塊可以顯示已經被停用、不可使用的樣子。",
					"code": "<div class=\"ts [[disabled]] checkbox\">\n    <input type=\"checkbox\">\n    <label>你不能點擊我</label>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "核取方塊有不同的外觀。",
			"items": [
				{
					"title": "自動層疊",
					"description": "核取方塊群組可以在行動裝置上自動層疊，而不是保持水平排列。欲要觀看效果，你可能需要使用手機裝置瀏覽此範例。",
					"code": "<div class=\"ts horizontal [[stackable]] checkboxes\">\n    <div class=\"ts radio checkbox\">\n        <input type=\"radio\" name=\"os\" id=\"windows\">\n        <label for=\"windows\">Windows</label>\n    </div>\n    <div class=\"ts radio checkbox\">\n        <input type=\"radio\" name=\"os\" id=\"linux\">\n        <label for=\"linux\">Linux</label>\n    </div>\n    <div class=\"ts radio checkbox\">\n        <input type=\"radio\" name=\"os\" id=\"macos\">\n        <label for=\"macos\">macOS</label>\n    </div>\n</div>\n"
				},
				{
					"title": "反色",
					"description": "核取方塊可以是反色的。",
					"code": "<div class=\"ts inverted {{segment}}\">\n    <div class=\"ts [[inverted]] checkboxes\">\n        <div class=\"ts checkbox\">\n            <input type=\"checkbox\" id=\"xiaoan\">\n            <label for=\"xiaoan\">洨安</label>\n        </div>\n        <div class=\"ts checkbox\">\n            <input type=\"checkbox\" id=\"kataya\">\n            <label for=\"kataya\">卡特雅</label>\n        </div>\n        <div class=\"ts checkbox\">\n            <input type=\"checkbox\" id=\"pear\">\n            <label for=\"pear\">皮爾</label>\n        </div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});