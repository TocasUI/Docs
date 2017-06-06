webpackJsonp([48],{

/***/ 44:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "標籤",
		"description": "那個 5 元，然後這個——無價。"
	},
	"intro": "<p>標籤會在沒有內容的時候自動隱藏，這也很適合用來當作狀態指標，但對於色盲使用者而言，標籤不應以顏色來引導他人，而是應該以形狀來敘述狀態，例如：在線（圓形）、暫離（正方形）、離線（三角形）。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "標籤具有不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的標籤。",
					"code": "<div class=\"ts [[label]]\">\n    <i class=\"gift {{icon}}\"></i>\n    標籤\n</div>\n"
				},
				{
					"title": "圖片",
					"description": "一個帶有圖片的標籤。",
					"remove": "<br>",
					"code": "<div class=\"ts [[image]] label\">\n    <img src=\"!-user-!\">Yami Odymel\n</div>\n<div class=\"ts [[image]] label\">\n    <img src=\"!-user2-!\">Xiaoan\n</div>\n<div class=\"ts [[image]] label\">\n    <img src=\"!-user3-!\">卡莉絲\n    <div class=\"detail\">實況主</div>\n</div>\n"
				},
				{
					"title": "指向",
					"description": "標籤可以有看起來像是指向某個元素。",
					"code": "<div class=\"ts [[left pointing]] label\">\n    左邊\n</div>\n<div class=\"ts [[right pointing]] label\">\n    右邊\n</div>\n<div class=\"ts [[pointing top]] label\">\n    上面\n</div>\n<div class=\"ts [[pointing below]] label\">\n    下面\n</div>\n<div class=\"ts basic [[left pointing]] label\">\n    左邊\n</div>\n<div class=\"ts basic [[right pointing]] label\">\n    右邊\n</div>\n<div class=\"ts basic [[pointing top]] label\">\n    上面\n</div>\n<div class=\"ts basic [[pointing below]] label\">\n    下面\n</div>\n"
				},
				{
					"title": "語氣",
					"description": "標籤也可以擁有不同的語氣。",
					"code": "<div class=\"ts circular [[primary]] label\">9</div>\n<div class=\"ts circular [[info]] label\">14</div>\n<div class=\"ts [[warning]] label\">7</div>\n<div class=\"ts [[positive]] label\">13</div>\n<div class=\"ts [[inverted]] label\">1998</div>\n"
				},
				{
					"title": "吸附",
					"description": "吸附在某個容器的角落或是內容中。",
					"remove": "<p>&nbsp;</p>",
					"code": "<div class=\"ts segment\">\n    <p>&nbsp;</p>\n    <p>伊繁星最高協議，所有隸屬伊繁星旗下已發佈或是正於計劃中之產品皆須遵守此協議。</p>\n    <p>&nbsp;</p>\n    <div class=\"ts [[top right attached]] label\">右上標籤</div>\n    <div class=\"ts [[top left attached]] label\">左上標籤</div>\n    <div class=\"ts [[bottom right attached]] label\">右下標籤</div>\n    <div class=\"ts [[bottom left attached]] label\">左下標籤</div>\n</div>\n"
				},
				{
					"title": "水平",
					"description": "標籤可以是水平用來符合附近文字用的。",
					"code": "<div class=\"ts [[horizontal]] label\">這個標籤</div> 很適合和文字放在一起。\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "標籤具有不同的外觀。",
			"items": [
				{
					"title": "浮起附著",
					"description": "標籤可以浮起並附著在某個元素的角落。",
					"code": "<button class=\"ts primary {{button}}\">已讀所有\n    <div class=\"ts [[floating]] circular label\">7</div>\n</button>\n<button class=\"ts warning {{button}}\">檢視\n    <div class=\"ts [[floating]] label\">13</div>\n</button>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "標籤的內容具有不同的性質。",
			"items": [
				{
					"title": "詳細資料",
					"description": "用以詮釋標籤的內容。",
					"code": "<div class=\"ts label\">新郵件\n    <div class=\"[[detail]]\">689</div>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "在標籤內放置一些點綴或是具有功能的圖示。",
					"code": "<div class=\"ts [[left icon]] label\">\n    <i class=\"mail outline {{icon}}\"></i>\n    未讀郵件\n    <div class=\"detail\">142</div>\n</div>\n<div class=\"ts [[right icon]] label\">\n    吳雨藍\n    <i class=\"user {{icon}}\"></i>\n</div>\n"
				},
				{
					"title": "關閉按鈕",
					"description": "你可以在標籤內擺置一個關閉按鈕，使這個標籤看起來可供關閉或移除。",
					"code": "<div class=\"ts image label\">\n    <img src=\"!-user-!\">\n    Yami Odymel\n    <button class=\"[[ts small close button]]\"></button>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "標籤具有不同的外觀。",
			"items": [
				{
					"title": "基本結構",
					"description": "標籤可以只留下基本的結構。",
					"code": "<div class=\"ts [[basic]] label\">預設</div>\n<div class=\"ts [[basic]] positive label\">正面</div>\n<div class=\"ts [[basic]] negative label\">負面</div>\n<div class=\"ts [[basic]] info label\">資訊</div>\n<div class=\"ts [[basic]] primary label\">主要</div>\n<div class=\"ts [[basic]] warning label\">警告</div>\n"
				},
				{
					"title": "尺寸",
					"description": "標籤可以有不同的大小尺寸。",
					"code": "<div class=\"ts [[mini]] label\">迷你</div>\n<div class=\"ts [[tiny]] label\">微小</div>\n<div class=\"ts [[small]] label\">小型</div>\n<div class=\"ts label\">預設</div>\n<div class=\"ts [[medium]] label\">適中</div>\n<div class=\"ts [[large]] label\">大型</div>\n<div class=\"ts [[big]] label\">巨大</div>\n<div class=\"ts [[huge]] label\">超大</div>\n<div class=\"ts [[massive]] label\">重量級</div>\n"
				},
				{
					"title": "浮動",
					"description": "標籤可以靠左或靠右浮動。",
					"code": "<div class=\"ts [[left floated]] label\">靠左浮動</div>\n<div class=\"ts [[right floated]] label\">靠右浮動</div>\n"
				},
				{
					"title": "縮減",
					"description": "標籤內距可以縮減。",
					"remove": "<br>",
					"code": "<div class=\"ts [[compact]] label\">1,624</div>\n<div class=\"ts [[compact]] primary label\">315</div>\n"
				},
				{
					"title": "圓形",
					"description": "將標籤變成圓形。",
					"code": "<div class=\"ts [[circular]] label\">1</div>\n<div class=\"ts [[circular]] label\">99+</div>\n<div class=\"ts [[circular]] label\">1234567</div>\n"
				},
				{
					"title": "空的",
					"description": "一個空的標籤。",
					"code": "<div class=\"ts [[empty]] circular label\"></div>\n<div class=\"ts [[empty]] triangle label\"></div>\n<div class=\"ts [[empty]] square label\"></div>\n<div class=\"ts [[empty]] circular primary label\"></div>\n<div class=\"ts [[empty]] circular info label\"></div>\n<div class=\"ts [[empty]] square positive label\"></div>\n<div class=\"ts [[empty]] square negative label\"></div>\n<div class=\"ts [[empty]] triangle info label\"></div>\n<div class=\"ts [[empty]] triangle warning label\"></div>\n"
				}
			]
		}
	]
};

/***/ })

});