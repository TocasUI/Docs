webpackJsonp([23],{

/***/ 63:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "側邊欄",
		"description": "從側邊滑出來，然後又滑回去了。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/sidebar/"
		},
		{
			"type": "javascript",
			"to": "/modules/sidebar/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "側邊欄有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "顯示切換",
					"description": "<p>你需要透過 JavaScript 才能夠切換側邊欄的出現與消失。</p>\n<table class=\"ts small stackable definition table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>show</td>\n            <td>顯示指定側邊欄。</td>\n        </tr>\n        <tr>\n            <td>hide</td>\n            <td>隱藏指定側邊欄。</td>\n        </tr>\n        <tr>\n            <td>toggle</td>\n            <td>切換側邊欄。當側邊欄是隱藏時會顯示、顯示時則隱藏。</td>\n        </tr>\n    </tbody>\n</table>\n",
					"type": "code",
					"code": "<div class=\"ts demo left sidebar inverted vertical menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">文件</a>\n    <a class=\"item\">部落格</a>\n</div>\n",
					"javascript": "ts('.left.inverted.sidebar').sidebar('toggle');\n"
				},
				{
					"title": "選項",
					"description": "<p>你能夠透過選項初始化並設置側邊欄的特性。</p>\n<table class=\"ts small celled stackable definition table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>預設值</th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>dimPage</td>\n            <td>false</td>\n            <td>是否要在側邊欄出現時將主畫面淡化。</td>\n        </tr>\n        <tr>\n            <td>exclusive</td>\n            <td>false</td>\n            <td>是否僅允許頁面上同時只會出現一個側邊欄，若為是，則會在開啟該側邊欄的同時關閉其他側邊欄。</td>\n        </tr>\n        <tr>\n            <td>scrollLock</td>\n            <td>false</td>\n            <td>是否要在側邊欄出現時鎖定螢幕捲軸的滾動。</td>\n        </tr>\n        <tr>\n            <td>closable</td>\n            <td>true</td>\n            <td>是否允許使用者點擊主畫面將側邊欄關閉。</td>\n        </tr>\n    </tbody>\n</table>\n",
					"type": "code",
					"code": "<div class=\"ts demo left sidebar\">\n    <div class=\"ts {{header}}\">\n        搭拉！\n        <div class=\"sub header\">你打開了秘密的側邊欄！</div>\n    </div>\n    <div class=\"ts {{segment}}\">\n        你可以像這樣在側邊欄放置很多不同的元件。\n    </div>\n</div>\n",
					"javascript": "ts('.left.sidebar:not(.inverted)').sidebar({\n    dimPage: true,\n    scrollLock: true\n}).sidebar('toggle');\n"
				}
			]
		}
	]
};

/***/ })

});