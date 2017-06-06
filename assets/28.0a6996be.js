webpackJsonp([28],{

/***/ 64:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "對話視窗",
		"description": "請問大家知道你只有一公分嗎？「知道」、「不知道」。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/modal"
		},
		{
			"type": "javascript",
			"to": "/modules/modal/javascript"
		}
	],
	"intro": "<p>通常來說只有在你希望阻止、提醒、警告使用者的時候才該用上對話視窗，你不應該在為了省去自己的麻煩時直接用上對話視窗來進行相關動作，這是一個很不好的習慣。對話視窗在任何裝置上都非常的符合，所以毋需擔心有跑版的問題。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "一個對話視窗有多種類別。",
			"items": [
				{
					"title": "對話視窗",
					"description": "最基本的對話視窗。",
					"code": "<[[dialog]] class=\"ts fullscreen [[modal]]\" open>\n    <div class=\"header\">\n        逼啪拉畢叭啦霹拉吧\n    </div>\n    <div class=\"content\">\n        <p>到水的車風、天小望再，個院們著福！要清我個夫後於、說媽平神線連時該：光四報接。大親放書光？不議書組巴口保能近細，卻實到式石特約過。</p>\n        <p>代你是走是：路火改大兒地結後也傷車、明心沒教的童了共這英們點縣慢公早出光了得引多經！處技北夫們十是入就重得然親……法美機的義是小唱當解土量同吃，和樣做新機子他市很失吃出家。仍思老木海和部成是市的國兒生球要又辦中有對父色……形非帶海了。話安生當我球起。子立過財量展美義；那康自從遠飛心的一。</p>\n        <p>旅一的四課，開地還，的取理活數度青天化民家向的專自到及學，縣光自分個發：條越資大無庭；但進臺方隊的風斷此的小……一背書要西表靈：要藝太童汽也老天好住？兒沒生月路把時？不他謝、意強兩而一機，卻運持院是品的她腳。進和問半葉一所希知，景是育不、市音個在費我星國增成受呢來我子片易黃頭著，停可成人發才己金過位關長不一得主，好成引題於手魚，文指者價然、常首能國達另了石？且年養？好看了不、產行和越早反前門有，放轉國引環流的力是直算不福然。的館體後在利遠員我經現運懷況指正念像媽頭是中經！</p>\n    </div>\n    <div class=\"actions\">\n        <button class=\"ts deny button\">\n            不\n        </button>\n        <button class=\"ts positive button\">\n            是的\n        </button>\n    </div>\n</[[dialog]]>\n"
				},
				{
					"title": "基本",
					"description": "對話視窗也能夠看起來只有基本結構且背景是透明的（範例加上了反色背景避免看不見文字）。",
					"code": "<dialog class=\"ts basic fullscreen modal\" open>\n    <div class=\"ts icon header\">\n        <i class=\"smile icon\"></i>\n        您同意「合理使用條約」嗎\n    </div>\n    <div class=\"content\">\n        <p>保障任何人的著作權，其中包括二次創作，二次創作僅可在原作者未聲明否決下進行發佈和創作，在未經原作允許下衍生任何具有原作之內容，基於衍生理念與內容為判決要點，\n原作必須基於合理使用之理念提出移除、上訴任何非符合合理使用概念的衍生內容，合理使用的理念如下：使用目的及性質其著重點在於內容是否有所轉化，如衍生創作另有新意，非僅複製原作內容。版權作品性質以真實、事實所闡述之作品較虛構作品來的能夠符合合理使用。使用版權作品的多寡引用少量的原創著作比起引用大量來要的符合合理使用，但倘若原創著作成為衍生著作之核心內容，即使少量的原創著作被引用，也較不可能符合合理使用之原則。使用行為對於版權作品的市場或價值之影響透過原創著作的內容而進行獲利並造成原創著作部分損害，較不符合合理使用之原則。</p>\n    </div>\n    <div class=\"actions\">\n        <button class=\"ts inverted basic deny button\">\n            不\n        </button>\n        <button class=\"ts inverted basic positive button\">\n            是的\n        </button>\n    </div>\n</dialog>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "對話視窗可以有多種屬性的內容。",
			"items": [
				{
					"title": "標題",
					"description": "對話視窗的標題段落。",
					"code": "<dialog class=\"ts fullscreen modal\" open>\n    <div class=\"[[header]]\">\n        對話視窗標題\n    </div>\n</dialog>\n"
				},
				{
					"title": "內容",
					"description": "對話視窗的主要敘述都會被放在內容區塊中。",
					"code": "<dialog class=\"ts fullscreen modal\" open>\n    <div class=\"header\">\n        吃過早餐了嗎？\n    </div>\n    <div class=\"[[content]]\">\n        如果沒有，還請務必嚐嚐我們的招牌：「嘉明的味道」。\n    </div>\n</dialog>\n"
				},
				{
					"title": "圖片內容",
					"description": "對話視窗裡面可以有圖片內容。",
					"code": "<dialog class=\"ts fullscreen modal\" open>\n    <div class=\"header\">\n        這是你嗎？\n    </div>\n    <div class=\"[[image content]]\">\n        <div class=\"ts medium {{image}}\">\n            <img src=\"!-4:3-!\">\n        </div>\n        <div class=\"description\">\n            <div class=\"ts {{header}}\">我們在照片中偵測到了你。</div>\n            <p>這張照片看起來裡面包含著你的人像，如果你願意的話我們可以自動將該照片發佈至 <a href=\"https://www.gravatar.com\" target=\"_blank\">gravatar</a> 並替換你原先的頭像。</p>\n            <p>你希望這麼做嗎？</p>\n        </div>\n    </div>\n</dialog>\n"
				},
				{
					"title": "動作",
					"description": "對話視窗裡的動作區塊用來提供確認、取消的按鈕，令使用者在該區塊進行操作與回應。",
					"code": "<dialog class=\"ts fullscreen modal\" open>\n    <div class=\"header\">\n        確定檢舉嗎？\n    </div>\n    <div class=\"content\">\n        <p>你正打算要檢舉：「洨洨安萬萬歲⋯⋯」文章，如果你確定這篇文章違反伊繁星最高協議即可進行檢舉，倘若抱有任何遲疑的態度請在送出前再度確認是否有違反任何規範的嫌疑。</p>\n    </div>\n    <div class=\"[[actions]]\">\n        <button class=\"ts [[deny]] {{button}}\">\n            不\n        </button>\n        <button class=\"ts {{button}}\">\n            檢閱協議內容\n        </button>\n        <button class=\"ts [[positive]] {{button}}\">\n            是的\n        </button>\n    </div>\n</dialog>\n"
				},
				{
					"subtitle": "按鈕群組",
					"description": "你也能夠在動作區塊中擺放按鈕群組。",
					"code": "<dialog class=\"ts fullscreen modal\" open>\n    <div class=\"header\">\n      我是對話視窗！\n    </div>\n    <div class=\"content\">\n        <p>你打開了一個帶有按鈕群組的對話視窗，你還能讓這些按鈕還可以在手機版上自動層疊！真是夭壽讚！</p>\n    </div>\n    <div class=\"actions\">\n        <div class=\"ts fluid separated stackable [[buttons]]\">\n            <button class=\"ts deny {{button}}\">\n                不\n            </button>\n            <button class=\"ts positive {{button}}\">\n                好\n            </button>\n        </div>\n    </div>\n</dialog>\n"
				},
				{
					"title": "關閉按鈕",
					"description": "對話視窗可以帶有一個關閉按鈕，在手機版時這個按鈕會被放入視窗內。",
					"code": "<dialog class=\"ts fullscreen modal\" open>\n    <i class=\"[[close icon]]\"></i>\n    <div class=\"header\">\n        範例視窗\n    </div>\n    <div class=\"image content\">\n        <p>這個範例的關閉按鈕被遮住了，建議使用行動裝置觀看此範例。或者你也可以在下面的 JavaScript 範例中呼叫對話視窗來查看有關閉按鈕的範例。</p>\n    </div>\n    <div class=\"actions\">\n        <button class=\"ts deny {{button}}\">\n            不\n        </button>\n        <button class=\"ts {{button}}\">\n            檢閱協議內容\n        </button>\n        <button class=\"ts positive {{button}}\">\n            是的\n        </button>\n    </div>\n</dialog>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "對話視窗有著不同的狀態。",
			"items": [
				{
					"title": "顯示",
					"description": "帶有 <span class=\"ts horizontal label\">[open]</span> 元素標籤的對話視窗會被顯示出來。",
					"code": "<dialog class=\"ts fullscreen modal\" [[open]]>\n    <div class=\"content\">\n        <p>到水的車風、天小望再，個院們著福！要清我個夫後於、說媽平神線連時該：光四報接。大親放書光？不議書組巴口保能近細，卻實到式石特約過。</p>\n        <p>代你是走是：路火改大兒地結後也傷車、明心沒教的童了共這英們點縣慢公早出光了得引多經！處技北夫們十是入就重得然親……法美機的義是小唱當解土量同吃，和樣做新機子他市很失吃出家。仍思老木海和部成是市的國兒生球要又辦中有對父色……形非帶海了。話安生當我球起。子立過財量展美義；那康自從遠飛心的一。</p>\n        <p>旅一的四課，開地還，的取理活數度青天化民家向的專自到及學，縣光自分個發：條越資大無庭；但進臺方隊的風斷此的小……一背書要西表靈：要藝太童汽也老天好住？兒沒生月路把時？不他謝、意強兩而一機，卻運持院是品的她腳。進和問半葉一所希知，景是育不、市音個在費我星國增成受呢來我子片易黃頭著，停可成人發才己金過位關長不一得主，好成引題於手魚，文指者價然、常首能國達另了石？且年養？好看了不、產行和越早反前門有，放轉國引環流的力是直算不福然。的館體後在利遠員我經現運懷況指正念像媽頭是中經！</p>\n    </div>\n</dialog>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "你可以更改對話視窗的外觀點綴。",
			"items": [
				{
					"title": "全螢幕等寬",
					"description": "對話視窗的寬度可以直接符合螢幕最寬的寬度。",
					"code": "<dialog class=\"ts [[fullscreen]] modal\" open>\n    <div class=\"header\">\n        全螢幕等寬\n    </div>\n    <div class=\"content\">\n        這個對話視窗會是 100% 寬度喔。\n    </div>\n</dialog>\n"
				},
				{
					"title": "尺寸",
					"description": "對話視窗有不同的尺寸大小，這可以用來避免內容文字過多而撐寬對話視窗導致閱讀障礙，這些都能夠在行動裝置上良好地符合。沒有特別標注尺寸的對話視窗寬度會依照內容而定。",
					"code": "<dialog class=\"ts [[mini]] modal\" open>\n    <div class=\"header\">\n        迷你\n    </div>\n    <div class=\"content\">\n        內容內容內容內容內容內容內容內容內容內容內容內容內容內容\n        內容內容內容內容內容內容內容內容內容內容內容內容內容內容\n    </div>\n</dialog>\n<br>\n<dialog class=\"ts [[tiny]] modal\" open>\n    <div class=\"header\">\n        微小\n    </div>\n    <div class=\"content\">\n        內容內容內容內容內容內容內容內容內容內容內容內容內容內容\n        內容內容內容內容內容內容內容內容內容內容內容內容內容內容\n    </div>\n</dialog>\n<br>\n<dialog class=\"ts [[small]] modal\" open>\n    <div class=\"header\">\n        小的\n    </div>\n    <div class=\"content\">\n        內容內容內容內容內容內容內容內容內容內容內容內容內容內容\n        內容內容內容內容內容內容內容內容內容內容內容內容內容內容\n    </div>\n</dialog>\n<br>\n<dialog class=\"ts [[large]] modal\" open>\n    <div class=\"header\">\n        大的\n    </div>\n    <div class=\"content\">\n        內容內容內容內容內容內容內容內容內容內容內容內容內容內容\n        內容內容內容內容內容內容內容內容內容內容內容內容內容內容\n    </div>\n</dialog>\n"
				}
			]
		}
	]
};

/***/ })

});