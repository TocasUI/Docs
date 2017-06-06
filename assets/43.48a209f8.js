webpackJsonp([43],{

/***/ 49:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "板岩",
		"description": "雖然僅有一塊，但卻有著多種用途。"
	},
	"intro": "<p>板岩除了擁有作為頁面標題區塊的功能外，現在還可以當作一個預置區塊（Placeholder），例如一個空的購物車就可以用上板岩。此外，板岩現在也支援標題、註釋、動作按鈕。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "一個板岩具有多個不同的種類。",
			"items": [
				{
					"title": "板岩",
					"description": "一個正常的板岩。",
					"code": "<div class=\"ts [[slate]]\">\n    這是一塊普通的板岩，看起來十分無聊\n</div>\n"
				},
				{
					"title": "基本",
					"description": "板岩可以僅有基本的結構。",
					"code": "<div class=\"ts [[basic]] slate\">\n    這是僅有基本結構的板岩。\n</div>\n"
				},
				{
					"title": "標題板岩",
					"description": "板岩可以用來當作頁面標題區塊，這將使得文字預設向左對齊。",
					"code": "<div class=\"ts [[heading]] slate\">\n    <span class=\"header\">使用者設定</span>\n    <span class=\"description\">你可以在這裡變更帳號、密碼與個人資訊。</span>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "你可以隨時透過樣式類別切換一個板岩的狀態。",
			"items": [
				{
					"title": "已停用",
					"description": "顯示這個板岩已經被停用了。",
					"code": "<div class=\"ts [[disabled]] slate\">\n    別看這裡，我已經不重要了。\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "一個板岩可以有許多不同性質的內容。",
			"items": [
				{
					"title": "標題",
					"description": "板岩內可以有標題。",
					"code": "<div class=\"ts slate\">\n    <span class=\"[[header]]\">使用者設定</span>\n</div>\n"
				},
				{
					"title": "註釋",
					"description": "板岩內也可含有註釋用以詳細解說。",
					"code": "<div class=\"ts slate\">\n    <span class=\"header\">Tryment 計畫</span>\n    <span class=\"[[description]]\">模擬就學制度，協助在年者再次就職支援計劃。</span>\n</div>\n"
				},
				{
					"title": "背景圖片",
					"description": "板岩內能夠擺置圖片當作背景。",
					"code": "<div class=\"ts slate\">\n    <div class=\"[[image]]\">\n        <img src=\"!-16:9-!\">\n    </div>\n    <span class=\"header\">Tryment 計畫</span>\n    <span class=\"description\">模擬就學制度，協助在年者再次就職支援計劃。</span>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "圖示可以被放置於板岩內。",
					"code": "<div class=\"ts slate\">\n    <i class=\"setting [[icon]]\"></i>\n    <span class=\"header\">偏好設定</span>\n    <span class=\"description\">你可以在這裡改變你想改變的，但你還是沒女朋友。</span>\n</div>\n"
				},
				{
					"title": "代表性符號",
					"description": "板岩內的圖示可以被設置為此板岩的代表性符號。",
					"code": "<div class=\"ts basic padded dashed slate\">\n    <i class=\"upload [[symbol]] {{icon}}\"></i>\n    <span class=\"header\">上傳圖片或影音</span>\n    <span class=\"description\">將圖片拖拉至此處進行上傳。</span>\n</div>\n"
				},
				{
					"title": "淡化圖示",
					"description": "如果圖示不重要，也可以將其淡化。",
					"code": "<div class=\"ts slate\">\n    <i class=\"setting [[faded]] {{icon}}\"></i>\n    <span class=\"header\">偏好設定</span>\n    <span class=\"description\">你可以在這裡改變你想改變的，但你還是沒女朋友。</span>\n</div>\n"
				},
				{
					"title": "圖示群組",
					"description": "你也能夠將多個圖示一次放入板岩中。",
					"code": "<div class=\"ts slate\">\n    <div class=\"[[icons]]\">\n        <i class=\"file audio outline {{icon}}\"></i>\n        <i class=\"file text outline {{icon}}\"></i>\n        <i class=\"file word outline {{icon}}\"></i>\n    </div>\n    <span class=\"header\">行動辦公室</span>\n    <span class=\"description\">MeowWork 讓你到處都能夠辦公。</span>\n</div>\n"
				},
				{
					"title": "動作",
					"description": "板岩中可以有動作區塊，使人進行操作。",
					"code": "<div class=\"ts padded slate\">\n    <span class=\"header\">尚無文件</span>\n    <span class=\"description\">你目前沒有任何文件，按下下方按鈕建立新文件。</span>\n    <div class=\"[[action]]\">\n        <button class=\"ts primary button\">現在開始</button>\n    </div>\n</div>\n"
				},
				{
					"title": "底部附著選單",
					"description": "板岩內的底部可以附著一個選單。",
					"code": "<div class=\"ts fluid slate\">\n    <span class=\"header\">已收藏項目</span>\n    <span class=\"description\">這裡存放著你已經收藏的項目。</span>\n    <div class=\"ts [[bottom attached]] tabbed {{menu}}\">\n        <a class=\"item\" href=\"#!\">圖片</a>\n        <a class=\"active item\" href=\"#!\">文章</a>\n        <a class=\"item\" href=\"#!\">音樂</a>\n        <a class=\"item\" href=\"#!\">影片</a>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "你可以更改板岩的位置、大小、或者形狀。",
			"items": [
				{
					"title": "增加內距",
					"description": "你可以增加板岩的內距。",
					"code": "<div class=\"ts heading [[padded]] slate\">\n    <span class=\"header\">增加內距</span>\n    <span class=\"description\">這可以讓你的聚焦看板看起來不那麼壅擠。</span>\n</div>\n<br>\n<div class=\"ts heading [[very padded]] slate\">\n    <span class=\"header\">非常內距</span>\n    <span class=\"description\">可以，這很內距。</span>\n</div>\n<br>\n<div class=\"ts heading [[extra padded]] slate\">\n    <span class=\"header\">超級內距</span>\n    <span class=\"description\">如果你還不滿足的話還有這樣增加內距地方式。</span>\n</div>\n"
				},
				{
					"title": "指定方向增加內距",
					"description": "你還可以指定增加垂直或是水平的內距。",
					"code": "<div class=\"ts heading [[vertically padded]] slate\">\n    <span class=\"header\">垂直內距</span>\n    <span class=\"description\">僅增加垂直內距，水平內距維持預設。</span>\n</div>\n<br>\n<div class=\"ts heading [[horizontally very padded]] slate\">\n    <span class=\"header\">水平非常內距</span>\n    <span class=\"description\">這會增加水平的內距，但是垂直內距保持預設。</span>\n</div>\n"
				},
				{
					"title": "縮減",
					"description": "你可以移除所有內距、或水平和垂直內距。",
					"code": "<div class=\"ts heading [[fitted]] slate\">\n    <span class=\"header\">縮減全部</span>\n    <span class=\"description\">這將使的你的板岩完全沒有內距。</span>\n</div>\n<br>\n<div class=\"ts heading [[horizontally fitted]] slate\">\n    <span class=\"header\">水平縮減</span>\n    <span class=\"description\">板岩的左右內距將會消失。</span>\n</div>\n<br>\n<div class=\"ts heading [[vertically fitted]] slate\">\n    <span class=\"header\">垂直縮減</span>\n    <span class=\"description\">這樣做的話上下內距將會消失。</span>\n</div>\n"
				},
				{
					"title": "無框線",
					"description": "板岩可以不需要框線。",
					"code": "<div class=\"ts basic [[borderless]] slate\">\n    <span class=\"header\">無框線板岩</span>\n    <span class=\"description\">這個板岩沒有框線。</span>\n</div>\n"
				},
				{
					"title": "文字對齊",
					"description": "板岩內的文字可以靠左、右、甚至置中。",
					"code": "<div class=\"ts [[right aligned]] slate\">\n    <span class=\"header\">靠右置齊</span>\n    <span class=\"description\">這個看板的文字靠右。</span>\n</div>\n<br>\n<div class=\"ts [[left aligned]] slate\">\n    <span class=\"header\">靠左置齊</span>\n    <span class=\"description\">這個看板的文字靠左。</span>\n</div>\n<br>\n<div class=\"ts [[center aligned]] slate\">\n    <span class=\"header\">置中對齊</span>\n    <span class=\"description\">這個看板的文字置中。</span>\n</div>\n"
				},
				{
					"title": "流動",
					"description": "這種板岩適合用在需要貼齊容器左右的時候，因為沒有圓角。",
					"code": "<div class=\"ts [[fluid]] slate\">\n    <span class=\"header\">流動板岩</span>\n    <span class=\"description\">這個板岩沒有圓角，適合貼齊左右邊。</span>\n</div>\n"
				},
				{
					"title": "嵌入的",
					"description": "板岩可以有內嵌陰影，看起來像是被嵌入一般。",
					"code": "<div class=\"ts [[insetted]] slate\">\n    <span class=\"header\">嵌入板岩</span>\n    <span class=\"description\">仔細看，這個板岩有內部陰影。</span>\n</div>\n"
				},
				{
					"title": "虛線的",
					"description": "板岩可以有虛線框線。",
					"code": "<div class=\"ts basic [[dashed]] slate\">\n    <i class=\"upload {{icon}}\"></i>\n    <span class=\"header\">上傳圖片或影音</span>\n    <span class=\"description\">將圖片拖拉至此處進行上傳。</span>\n</div>\n"
				},
				{
					"title": "可點擊的",
					"description": "板岩可以對點擊動作進行回饋。",
					"code": "<div class=\"ts [[clickable]] slate\">\n    <i class=\"mouse pointer {{icon}}\"></i>\n    <span class=\"header\">點此看看</span>\n    <span class=\"description\">點擊此處會有相關的回饋效果。</span>\n</div>\n<br>\n<div class=\"ts [[clickable]] basic dashed slate\">\n    <i class=\"mouse pointer {{icon}}\"></i>\n    <span class=\"header\">點此看看</span>\n    <span class=\"description\">點擊此處會有相關的回饋效果。</span>\n</div>\n"
				},
				{
					"title": "輕巧版",
					"description": "板岩可以是基於內容來當作寬度基準，而不是直接服貼附容器寬度。",
					"code": "<div class=\"ts [[compact]] slate\">\n    <i class=\"text width {{icon}}\"></i>\n    <span class=\"header\">文字決定寬度</span>\n    <span class=\"description\">板岩內的文字越長，板岩的寬度就越寬。</span>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "板岩有多種尺寸。",
					"code": "<div class=\"ts [[mini]] heading slate\">\n    <span class=\"header\">迷你</span>\n    <span class=\"description\">這是一個迷你板岩。</span>\n</div>\n<br>\n<div class=\"ts [[tiny]] heading slate\">\n    <span class=\"header\">微小</span>\n    <span class=\"description\">這是一個微小板岩。</span>\n</div>\n<br>\n<div class=\"ts [[small]] heading slate\">\n    <span class=\"header\">小的</span>\n    <span class=\"description\">這是一個小的板岩。</span>\n</div>\n<br>\n<div class=\"ts heading slate\">\n    <span class=\"header\">適中</span>\n    <span class=\"description\">這是一個適中板岩。</span>\n</div>\n<br>\n<div class=\"ts [[large]] heading slate\">\n    <span class=\"header\">大的</span>\n    <span class=\"description\">這是一個大的板岩。</span>\n</div>\n<br>\n<div class=\"ts [[big]] heading slate\">\n    <span class=\"header\">較大</span>\n    <span class=\"description\">這是一個較大板岩。</span>\n</div>\n<br>\n<div class=\"ts [[huge]] heading slate\">\n    <span class=\"header\">巨大</span>\n    <span class=\"description\">這是一個巨大板岩。</span>\n</div>\n<br>\n<div class=\"ts [[massive]] heading slate\">\n    <span class=\"header\">重量級</span>\n    <span class=\"description\">這是一個重量級板岩。</span>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});