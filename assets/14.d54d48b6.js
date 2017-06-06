webpackJsonp([14],{

/***/ 72:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "元件理念",
		"description": "一個重要的按鈕，我們將它視為核彈按鈕般，精心設計和呵護。"
	},
	"styles": [
		{
			"category": "基本語意",
			"description": "Tocas UI 以更有意義的方式來命名類別名稱，就像是你直接稱呼這個元素一樣地親切。",
			"items": [
				{
					"title": "語氣渲染",
					"description": "在 Tocas UI 中我們並不以「顏色」稱呼我們對元件的著色，我們以「語氣」來表示這個元件的外觀，例如「正面的」、「負面的」、「主要的」等。\n<br><br>\n這麼做的好處是在更改主題顏色時，可以直接更換「正面的」顏色，設想一下你將一個按鈕命名成「綠色」，當你要統一更改綠色按鈕為紅色時，不就要將所有頁面上的「綠色」重新打成「紅色」嗎？\n",
					"code": "<p><strong>主流語氣</strong></p>\n<button class=\"ts {{button}}\">預設語氣</button>\n<button class=\"ts [[primary]] {{button}}\">主要語氣</button>\n<button class=\"ts [[info]] {{button}}\">提示語氣</button>\n<button class=\"ts [[warning]] {{button}}\">警告語氣</button>\n<br><br>\n<p><strong>抉擇語氣</strong></p>\n<button class=\"ts [[positive]] {{button}}\">肯定語氣</button>\n<button class=\"ts [[negative]] {{button}}\">否定語氣</button>\n<br><br>\n<p><strong>副語氣</strong></p>\n<button class=\"ts [[inverted]] {{button}}\">相反語氣</button>\n"
				},
				{
					"title": "發音方式",
					"description": "在部分的元件上你可以有不同的「發音方式」，實際上就是像「次要」，「較不重要」這樣的感覺。",
					"code": "<div class=\"ts {{segment}}\">一般發音方式</div>\n<div class=\"ts [[secondary]] {{segment}}\">次要發音方式</div>\n<div class=\"ts [[tertiary]] {{segment}}\">其次發音方式</div>\n"
				}
			]
		},
		{
			"category": "外觀調教",
			"description": "在 Tocas UI 有許多方式來變更元件的外觀。",
			"items": [
				{
					"title": "尺寸大小",
					"description": "除了語氣外，還支援八個尺寸，這比起其他的常見框架還要來得更多！也能夠讓你在設計外觀上更加地靈活。",
					"code": "<button class=\"ts [[mini]] {{button}}\">迷你</button>\n<button class=\"ts [[tiny]] {{button}}\">微小</button>\n<button class=\"ts [[small]] {{button}}\">小型</button>\n<button class=\"ts [[medium]] {{button}}\">中型</button>\n<button class=\"ts [[large]] {{button}}\">大型</button>\n<button class=\"ts [[big]] {{button}}\">稍大</button>\n<button class=\"ts [[huge]] {{button}}\">巨大</button>\n<button class=\"ts [[massive]] {{button}}\">重量級</button>\n"
				},
				{
					"title": "元件附著",
					"description": "你能夠讓不同的元件附著在一起，就像拼裝一樣地令不同的元件看起來像單個元件。",
					"code": "<div class=\"ts [[top attached]] {{header}}\">\n  頂部附著\n</div>\n<div class=\"ts [[attached]] {{segment}}\">\n  中間附著\n</div>\n<div class=\"ts [[bottom attached]] {{header}}\">\n  底部附著\n</div>\n"
				},
				{
					"title": "流動寬度",
					"description": "有些元件寬度是基於內容而定，但你可以讓他變成寬到符合父容器的寬度。",
					"code": "<button class=\"ts [[fluid]] {{button}}\">流動按鈕</button>\n<div class=\"ts [[fluid]] {{input}}\">\n  <input type=\"text\" placeholder=\"流動輸入欄位\">\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});