webpackJsonp([17],{

/***/ 75:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "分頁籤",
		"description": "不換網頁卻能在多個內容之間作切換的好選擇。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/tab/"
		},
		{
			"type": "javascript",
			"to": "/modules/tab/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "分頁籤有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "初始化",
					"description": "<p>你需要透過 JavaScript 初始化分頁籤功能，初始化時有這些參數選項可供使用。透過 <span class=\"ts horizontal label\">[data-tab]</span> 替每個分頁命名，並記得在選單的項目中也加上相同的名稱，這樣才能夠令項目點擊時切換到指定分頁。</p>\n<p>有趣的是分頁名稱不一定要是英文，這讓你能夠使用自己國家的語言進行命名且更易於近人。</p>\n<table class=\"ts small celled stackable definition table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>參數</th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>onSwitch</td>\n            <td>tabName[<em>string</em>], groupName[<em>string|null</em>]</td>\n            <td>當分頁籤切換時所會呼叫的函式，函式會傳入兩個參數，分別是欲切換至的分頁與群組名稱。</td>\n        </tr>\n    </tbody>\n</table>\n",
					"code": "<div id=\"first\" class=\"ts top attached tabbed menu\">\n    <a class=\"active item\" [[data-tab]]=\"首要分頁\">首要</a>\n    <a class=\"item\" [[data-tab]]=\"次要分頁\">次要</a>\n</div>\n<div [[data-tab]]=\"首要分頁\" class=\"ts active bottom attached tab segment\">\n    第一個分頁內容！\n</div>\n<div [[data-tab]]=\"次要分頁\" class=\"ts bottom attached tab segment\">\n    然後這是第二個。\n</div>\n",
					"javascript": "ts('#first.tabbed.menu .item').tab({\n    onSwitch: (tabName, groupName) => {\n        alert(\"你切換到了「\" + tabName + \"」分頁，而群組是「\" + groupName + \"」。\");\n    }\n});\n",
					"autoExecute": true
				},
				{
					"title": "分頁群組",
					"description": "<p>你能夠在網頁中放入多層分頁，透過 <span class=\"ts horizontal label\">[data-tab-group]</span> 將有關連的分頁牽連起來成為群組並為其命名，一但依照群組區分之後，分頁的名稱可以和另一個群組的分頁相互重複而不起衝突。</p>\n<p>而分頁群組的名稱不一定要是英文，甚至也可以帶有符號。</p>\n",
					"code": "<div class=\"ts secondary menu\">\n    <a class=\"active item\" data-tab=\"首要\" [[data-tab-group]]=\"群組\">首要</a>\n    <a class=\"item\" data-tab=\"次要\" [[data-tab-group]]=\"群組\">次要</a>\n</div>\n<div data-tab=\"首要\" [[data-tab-group]]=\"群組\" class=\"ts active tab segment\">\n    <p>第一個分頁。</p>\n    <div class=\"ts top attached tabbed menu\">\n        <a class=\"active item\" data-tab=\"首要\" [[data-tab-group]]=\"群組/分頁1\">首要</a>\n        <a class=\"item\" data-tab=\"次要\" [[data-tab-group]]=\"群組/分頁1\">次要</a>\n    </div>\n    <div data-tab=\"首要\" [[data-tab-group]]=\"群組/分頁1\" class=\"ts active bottom attached tab segment\">\n        第一個分頁群組的第一個分頁。\n    </div>\n    <div data-tab=\"次要\" [[data-tab-group]]=\"群組/分頁1\" class=\"ts bottom attached tab segment\">\n        第一個分頁群組的第二個分頁。\n    </div>\n</div>\n<div data-tab=\"次要\" [[data-tab-group]]=\"群組\" class=\"ts tab segment\">\n    <p>第二個分頁。</p>\n    <div class=\"ts top attached tabbed menu\">\n        <a class=\"active item\" data-tab=\"首要\" [[data-tab-group]]=\"群組/分頁2\">首要</a>\n        <a class=\"item\" data-tab=\"次要\" [[data-tab-group]]=\"群組/分頁2\">次要</a>\n    </div>\n    <div data-tab=\"首要\" [[data-tab-group]]=\"群組/分頁2\" class=\"ts active bottom attached tab segment\">\n        第二個分頁群組的第一個分頁。\n    </div>\n    <div data-tab=\"次要\" [[data-tab-group]]=\"群組/分頁2\" class=\"ts bottom attached tab segment\">\n        第二個分頁群組的第二個分頁。\n    </div>\n</div>\n",
					"javascript": "ts('.secondary.menu .item').tab();\nts('.tabbed.menu .item').tab();\n",
					"autoExecute": true
				}
			]
		}
	]
};

/***/ })

});