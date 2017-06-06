webpackJsonp([63],{

/***/ 23:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "麵包屑",
		"description": "留下導覽的痕跡。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "在這裡瀏覽麵包屑的種類。",
			"items": [
				{
					"title": "麵包屑",
					"description": "最基本的麵包屑。",
					"code": "<div class=\"ts [[breadcrumb]]\">\n    <a class=\"section\">首頁</a>\n    <div class=\"divider\"> / </div>\n    <a class=\"section\">商店</a>\n    <div class=\"divider\"> / </div>\n    <div class=\"active section\">T-Shirt</div>\n</div>\n"
				},
				{
					"title": "圖示分隔",
					"description": "麵包屑也能夠由圖示來當做分隔線。",
					"code": "<div class=\"ts [[breadcrumb]]\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right angle [[icon divider]]\"></i>\n    <a class=\"section\">商店</a>\n    <i class=\"right angle [[icon divider]]\"></i>\n    <div class=\"active section\">T-Shirt</div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "麵包屑由不同的內容所組成。",
			"items": [
				{
					"title": "分隔線",
					"description": "麵包屑可以帶有分隔線來表示其中的關係，這個分隔線可以是文字或是圖示。",
					"remove": "<br><br>",
					"code": "<div class=\"ts breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <span class=\"[[divider]]\">/</span>\n    <a class=\"section\">註冊程序</a>\n    <span class=\"[[divider]]\">/</span>\n    <div class=\"active section\">個人資料</div>\n</div>\n<br><br>\n<div class=\"ts breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right chevron icon [[divider]]\"></i>\n    <a class=\"section\">註冊程序</a>\n    <i class=\"right chevron icon [[divider]]\"></i>\n    <div class=\"active section\">個人資料</div>\n</div>\n"
				},
				{
					"title": "區塊",
					"description": "麵包屑可以包含區塊，能夠是連結或是純文字。",
					"code": "<div class=\"ts breadcrumb\">\n    <div class=\"[[section]]\">首頁</div>\n    <div class=\"divider\"> / </div>\n    <div class=\"active [[section]]\">搜尋</div>\n</div>\n"
				},
				{
					"title": "連結",
					"description": "區塊可以是連結，或者帶有連結文字。",
					"code": "<div class=\"ts breadcrumb\">\n    <[[a]] class=\"section\">首頁</[[a]]>\n    <div class=\"divider\"> / </div>\n    <div class=\"active section\">搜尋：<a href=\"#\">衛生紙</a></div>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "麵包屑有不同的狀態。",
			"items": [
				{
					"title": "已啟用",
					"description": "區塊可以表現出一個已被啟用的狀態。",
					"code": "<div class=\"ts breadcrumb\">\n    <a class=\"section\">商品</a>\n    <div class=\"divider\"> / </div>\n    <div class=\"[[active]] section\">衛生紙</div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "麵包屑有著不同的外觀點綴。",
			"items": [
				{
					"title": "尺寸",
					"description": "麵包屑有不同的尺寸可供選擇。",
					"code": "<div class=\"ts [[mini]] breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right chevron icon divider\"></i>\n    <a class=\"section\">註冊手續</a>\n    <i class=\"right chevron icon divider\"></i>\n    <div class=\"active section\">個人資料</div>\n</div>\n<br>\n<div class=\"ts [[tiny]] breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right chevron icon divider\"></i>\n    <a class=\"section\">註冊手續</a>\n    <i class=\"right chevron icon divider\"></i>\n    <div class=\"active section\">個人資料</div>\n</div>\n<br>\n<div class=\"ts [[small]] breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right chevron icon divider\"></i>\n    <a class=\"section\">註冊手續</a>\n    <i class=\"right chevron icon divider\"></i>\n    <div class=\"active section\">個人資料</div>\n</div>\n<br>\n<div class=\"ts [[medium]] breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right chevron icon divider\"></i>\n    <a class=\"section\">註冊手續</a>\n    <i class=\"right chevron icon divider\"></i>\n    <div class=\"active section\">個人資料</div>\n</div>\n<br>\n<div class=\"ts [[large]] breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right chevron icon divider\"></i>\n    <a class=\"section\">註冊手續</a>\n    <i class=\"right chevron icon divider\"></i>\n    <div class=\"active section\">個人資料</div>\n</div>\n<br>\n<div class=\"ts [[big]] breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right chevron icon divider\"></i>\n    <a class=\"section\">註冊手續</a>\n    <i class=\"right chevron icon divider\"></i>\n    <div class=\"active section\">個人資料</div>\n</div>\n<br>\n<div class=\"ts [[huge]] breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right chevron icon divider\"></i>\n    <a class=\"section\">註冊手續</a>\n    <i class=\"right chevron icon divider\"></i>\n    <div class=\"active section\">個人資料</div>\n</div>\n<br>\n<div class=\"ts [[massive]] breadcrumb\">\n    <a class=\"section\">首頁</a>\n    <i class=\"right chevron icon divider\"></i>\n    <a class=\"section\">註冊手續</a>\n    <i class=\"right chevron icon divider\"></i>\n    <div class=\"active section\">個人資料</div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});