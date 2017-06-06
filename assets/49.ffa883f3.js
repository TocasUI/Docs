webpackJsonp([49],{

/***/ 37:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "輸入欄位",
		"description": "再鍵入幾個字就是新的開始。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "輸入欄位具有多個不同的種類。",
			"items": [
				{
					"title": "輸入欄位",
					"description": "一個普通的基本欄位可以是正常的 <span class=\"ts horizontal label\">input</span> 或 <span class=\"ts horizontal label\">textarea</span> 甚至是任何 <span class=\"ts horizontal label\">[contenteditable]</span> 的元素。",
					"remove": "<br>",
					"code": "<div class=\"ts [[input]]\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n<br><br>\n<div class=\"ts [[input]]\">\n    <textarea placeholder=\"多行文字欄位\"></textarea>\n</div>\n<br><br>\n<div class=\"ts [[input]]\">\n    <div contenteditable>在這裡輸入一些文字</div>\n</div>\n"
				},
				{
					"title": "反色語意",
					"description": "輸入欄位具有多種語意並將其呈現於背景。",
					"remove": "<br>",
					"code": "<div class=\"ts [[inverted primary]] input\">\n    <input type=\"text\" placeholder=\"反色主要語氣\">\n</div>\n<br><br>\n<div class=\"ts [[inverted info]] input\">\n    <input type=\"text\" placeholder=\"反色提示語氣\">\n</div>\n<br><br>\n<div class=\"ts [[inverted warning]] input\">\n    <input type=\"text\" placeholder=\"反色警告語氣\">\n</div>\n<br><br>\n<div class=\"ts [[inverted positive]] input\">\n    <input type=\"text\" placeholder=\"反色正面語氣\">\n</div>\n<br><br>\n<div class=\"ts [[inverted negative]] input\">\n    <input type=\"text\" placeholder=\"反色否定語氣\">\n</div>\n<br><br>\n<div class=\"ts [[inverted]] input\">\n    <input type=\"text\" placeholder=\"反色語氣\">\n</div>\n"
				},
				{
					"title": "基本",
					"description": "輸入欄位可以只擁有基本的結構、背景透明。",
					"code": "<div class=\"ts [[basic]] input\">\n    <input type=\"text\" placeholder=\"這個背景是透明的\">\n</div>\n"
				},
				{
					"title": "發音方式",
					"description": "輸入欄位有不同的發音方式。",
					"remove": "<br><br>",
					"code": "<div class=\"ts [[secondary]] input\">\n    <input type=\"text\" placeholder=\"次要發音方式\">\n</div>\n<br><br>\n<div class=\"ts [[tertiary]] input\">\n    <input type=\"text\" placeholder=\"其次發音方式\">\n</div>\n"
				},
				{
					"title": "底線的",
					"description": "輸入欄位能夠僅有底線。",
					"code": "<div class=\"ts [[underlined]] input\">\n    <input type=\"text\" placeholder=\"僅有底線的輸入欄位\">\n</div>\n"
				}
			]
		},
		{
			"category": "群組",
			"description": "輸入欄位也具有群組。",
			"items": [
				{
					"title": "垂直群組",
					"description": "輸入欄位的群組擺放可以是垂直的。",
					"code": "<div class=\"ts [[vertical]] [[inputs]]\">\n    <div class=\"ts input\">\n        <input type=\"text\" placeholder=\"帳號\">\n    </div>\n    <div class=\"ts input\">\n        <input type=\"text\" placeholder=\"電子郵件地址\">\n    </div>\n    <div class=\"ts input\">\n        <input type=\"password\" placeholder=\"密碼\">\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "輸入欄位具有不同的狀態。",
			"items": [
				{
					"title": "聚焦中",
					"description": "輸入欄位可以看起來是正在被聚焦的。",
					"code": "<div class=\"ts [[focus]] input\">\n    <input type=\"text\" placeholder=\"聚焦中的輸入欄位\">\n</div>\n"
				},
				{
					"title": "讀取中",
					"description": "輸入欄位可以顯示正在讀取的圖示。",
					"remove": "<br>",
					"code": "<div class=\"ts [[left icon]] [[loading]] input\">\n    <input type=\"text\" placeholder=\"在此搜尋人、事、物\">\n    <i class=\"search {{icon}}\"></i>\n</div>\n<br><br>\n<div class=\"ts [[icon]] [[loading]] input\">\n    <input type=\"text\" placeholder=\"在此搜尋人、事、物\">\n    <i class=\"search {{icon}}\"></i>\n</div>\n"
				},
				{
					"title": "已停用",
					"description": "可以讓輸入欄位呈現一個被停用的狀態。",
					"code": "<div class=\"ts [[disabled]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n"
				},
				{
					"title": "錯誤",
					"description": "輸入欄位能夠顯示一個發生錯誤的狀態。",
					"remove": "<br>",
					"code": "<div class=\"ts [[error]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n<br><br>\n<div class=\"ts basic [[error]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n"
				},
				{
					"title": "警告",
					"description": "輸入欄位能夠處於一個警告或提示的狀態。",
					"remove": "<br>",
					"code": "<div class=\"ts [[warning]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n<br><br>\n<div class=\"ts basic [[warning]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n"
				},
				{
					"title": "成功",
					"description": "輸入欄位能夠處於成功的狀態。",
					"remove": "<br>",
					"code": "<div class=\"ts [[success]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n<br><br>\n<div class=\"ts basic [[success]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "輸入欄位可以有著不同的外觀點綴。",
			"items": [
				{
					"title": "圖示",
					"description": "你可以將圖示放入輸入欄位中。",
					"remove": "<br>",
					"code": "<div class=\"ts [[icon]] input\">\n    <input type=\"text\" placeholder=\"搜尋...\">\n    <i class=\"search {{icon}}\"></i>\n</div>\n<br><br>\n<div class=\"ts [[left icon]] input\">\n    <input type=\"text\" placeholder=\"搜尋使用者...\">\n    <i class=\"users {{icon}}\"></i>\n</div>\n"
				},
				{
					"title": "連結圖示",
					"description": "輸入欄位中的圖示也能是一種連結，或可供按下的。",
					"remove": "<br>",
					"code": "<div class=\"ts [[icon]] input\">\n    <input type=\"text\" placeholder=\"搜尋...\">\n    <i class=\"circular search [[link icon]]\"></i>\n</div>\n<br><br>\n<div class=\"ts [[icon]] input\">\n    <input type=\"text\" placeholder=\"搜尋...\">\n    <i class=\"inverted circular search [[link icon]]\"></i>\n</div>\n"
				},
				{
					"title": "帶標籤",
					"description": "輸入欄位可以帶有標籤元素。",
					"remove": "<br>",
					"code": "<div class=\"ts [[labeled]] input\">\n    <div class=\"ts {{label}}\">\n        http://\n    </div>\n    <input type=\"text\" placeholder=\"您的網址\">\n</div>\n<br><br>\n<div class=\"ts [[right labeled]] input\">\n    <div class=\"ts {{label}}\">\n        $\n    </div>\n    <input type=\"text\" placeholder=\"價格\">\n    <div class=\"ts basic {{label}}\">\n        .00\n    </div>\n</div>\n"
				},
				{
					"title": "動作",
					"description": "輸入欄位旁可以附帶具有動作性質的元素。",
					"remove": "<br>",
					"code": "<div class=\"ts [[action]] input\">\n    <input type=\"text\" placeholder=\"在這搜尋人、事、物\">\n    <button class=\"ts {{button}}\">搜尋</button>\n</div>\n<br><br>\n<div class=\"ts [[left action]] input\">\n    <button class=\"ts primary labeled icon {{button}}\">\n        <i class=\"cart icon\"></i>\n        結帳\n    </button>\n    <input type=\"text\" value=\"$52.03\">\n</div>\n<br><br>\n<div class=\"ts [[action]] input\">\n    <input type=\"text\" placeholder=\"搜尋網域名稱\">\n    <select class=\"ts basic {{dropdown}}\">\n        <option>.com</option>\n        <option>.org</option>\n        <option>.xxx</option>\n    </select>\n</div>\n<br><br>\n<div class=\"ts [[action]] input\">\n    <input type=\"text\" placeholder=\"書籍名稱\">\n    <select class=\"ts basic {{dropdown}}\">\n        <option>教育</option>\n        <option>娛樂休閒</option>\n        <option>經濟</option>\n    </select>\n    <button class=\"ts {{button}}\">搜尋</button>\n</div>\n"
				},
				{
					"title": "無邊框",
					"description": "輸入欄位可以沒有邊框，有時可以和基本樣式 <span class=\"ts horizontal label\">.basic</span> 一同搭配。",
					"code": "<div class=\"ts [[borderless]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n"
				},
				{
					"title": "流動",
					"description": "輸入欄位的寬度可以是流動的。",
					"code": "<div class=\"ts [[fluid]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n"
				},
				{
					"title": "圓形的",
					"description": "輸入欄位的圓角可以更圓。",
					"code": "<div class=\"ts [[circular]] input\">\n    <input type=\"text\" placeholder=\"文字欄位\">\n</div>\n"
				},
				{
					"title": "可伸縮的",
					"description": "輸入欄位可供使用者自由縮放。",
					"code": "<div class=\"ts [[resizable]] input\">\n    <textarea placeholder=\"文章內容...\"></textarea>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "輸入欄位的的尺寸有所不同。",
					"remove": "<br>",
					"code": "<div class=\"ts [[mini]] input\">\n    <input type=\"text\" placeholder=\"迷你\">\n</div>\n<br><br>\n<div class=\"ts [[tiny]] input\">\n    <input type=\"text\" placeholder=\"微小\">\n</div>\n<br><br>\n<div class=\"ts [[small]] input\">\n    <input type=\"text\" placeholder=\"小的\">\n</div>\n<br><br>\n<div class=\"ts [[medium]] input\">\n    <input type=\"text\" placeholder=\"適中\">\n</div>\n<br><br>\n<div class=\"ts [[large]] input\">\n    <input type=\"text\" placeholder=\"大的\">\n</div>\n<br><br>\n<div class=\"ts [[big]] input\">\n    <input type=\"text\" placeholder=\"更大\">\n</div>\n<br><br>\n<div class=\"ts [[huge]] input\">\n    <input type=\"text\" placeholder=\"巨大\">\n</div>\n<br><br>\n<div class=\"ts [[massive]] input\">\n    <input type=\"text\" placeholder=\"重量級\">\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});