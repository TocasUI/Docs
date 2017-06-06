webpackJsonp([6],{

/***/ 86:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "項目",
		"description": "用來陳列商品或者是一些項目都很不錯用。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "項目有多個種類。",
			"items": [
				{
					"title": "基本",
					"description": "最基本的項目群組。",
					"code": "<div class=\"ts [[items]]\">\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">吻仔魚</a>\n            <div class=\"meta\">\n                <span>$32 元</span>\n            </div>\n            <div class=\"description\">\n                一般可分為淡水魚魩仔魚與海水魚魩仔魚兩類。\n                根據臺灣大學王友慈博士指出，魩仔魚是單一種魚類，\n                是沙丁魚苗，若撈捕作業不正確有可能撈到數十至一百五十種類的魚苗。\n            </div>\n            <div class=\"extra\">\n                維基百科\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">芒果</a>\n            <div class=\"meta\">\n                <span>Mango</span>\n            </div>\n            <div class=\"description\">\n                是芒果屬的一種植物和果實，原產自北印度和馬來半島，\n                在梵語中叫作āmra，音譯為「菴羅」，或叫作āmalaka，\n                音譯為「菴摩勒」、「菴摩羅」、「阿摩落伽」。\n            </div>\n            <div class=\"extra\">\n                維基百科\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "項目能夠有不同的狀態。",
			"items": [
				{
					"title": "已啟用",
					"description": "項目能夠呈現正在使用、已經啟用的狀態。",
					"code": "<div class=\"ts segmented items\">\n    <div class=\"item\">\n        以西結\n    </div>\n    <div class=\"[[active]] item\">\n        伊波咲\n    </div>\n    <div class=\"item\">\n        栗宮希實\n    </div>\n</div>\n"
				},
				{
					"title": "已選擇",
					"description": "項目可以看起來像是被選擇、圈選的樣子。",
					"code": "<div class=\"ts segmented items\">\n    <div class=\"item\">\n        The Walking Dead\n    </div>\n    <div class=\"[[selected]] item\">\n        Breaking Bad\n    </div>\n    <div class=\"item\">\n        Love Actually\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "項目由多種不同構造的內容組成。",
			"items": [
				{
					"title": "圖片",
					"description": "項目可以包含圖片。",
					"code": "<div class=\"ts divided items\">\n    <div class=\"item\">\n        <div class=\"[[image]]\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"[[image]]\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "內容",
					"description": "項目中可以有內容來敘述項目。",
					"code": "<div class=\"ts divided items\">\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"[[content]]\">\n            臺灣，舊稱福爾摩沙，是位於亞洲東部、太平洋西北側的島嶼，\n            地處琉球群島與菲律賓群島之間，西隔臺灣海峽與歐亞大陸相望－維基百科。\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"[[content]]\">\n            「臺灣」之名的由來說法甚多，在明朝以後的文獻中，\n            臺灣亦寫作「大員」、「臺員」（三者臺語：同音：Tai-oan），\n            或是「雞籠山」、「雞籠」、「北港」、「東蕃」等－維基百科。\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "標題",
					"description": "項目中可以有標題。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            <div class=\"[[header]]\">\n                笨蛋測驗召喚獸\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            <div class=\"[[header]]\">\n                零之使魔\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "中繼資料",
					"description": "可以在項目中放入中繼資料。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"header\">\n                戳戳洨洨安\n            </div>\n            <div class=\"[[meta]]\">\n                <span>Android</span>\n                <span>免費下載</span>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "帶點中繼資料",
					"description": "中繼資料可以有「子彈點」或是「中點」來做區隔。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"header\">\n                電腦玩瞎咪\n            </div>\n            <div class=\"[[middoted]] meta\">\n                <span>Yami Odymel</span>\n                <span>台灣</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"header\">\n                希豹\n            </div>\n            <div class=\"[[bulleted]] meta\">\n                <span>Seadog007</span>\n                <span>台灣</span>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "同行中繼資料",
					"description": "中繼資料可以和標題是同一行。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"header\">\n                標題\n            </div>\n            <div class=\"[[inline]] meta\">\n                <span>同行</span>\n                <span>中繼資料</span>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "註釋",
					"description": "項目中可以帶有註釋來詮釋整個項目。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"header\">Macbook Air</div>\n            <div class=\"[[description]]\">\n                一台由賈伯斯從牛皮信封袋中拿出來的輕薄筆電，令人為之驚艷，嘆為觀止。省去 CD 光碟機的時代從這個時候開始。\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "動作",
					"description": "項目中可以擺有具功能性按鈕的區塊。",
					"code": "<div class=\"ts small single line items\">\n    <div class=\"item\">\n        <div class=\"ts mini {{image}}\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"header\">博麗靈夢</div>\n            <div class=\"meta\">\n                <div>@Hakurei_Reimu</div>\n            </div>\n        </div>\n        <div class=\"[[actions]]\">\n            <div class=\"ts button\">\n                加入好友\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts mini {{image}}\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"header\">東風谷早苗</div>\n            <div class=\"meta\">\n                <div>@Kochiya_Sanae</div>\n            </div>\n        </div>\n        <div class=\"[[actions]]\">\n            <div class=\"ts button\">\n                加入好友\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "項目中可以擺放一個區塊用來顯示單個項目的圖示。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <i class=\"large users [[icon]]\"></i>\n        <div class=\"content\">\n            <div class=\"header\">群眾會議</div>\n            <div class=\"extra\">\n                由大眾共同表決的決議會。\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <i class=\"large inverted info rounded announcement [[icon]]\"></i>\n        <div class=\"content\">\n            <div class=\"header\">系統公告</div>\n            <div class=\"extra\">\n                官方的主要消息。\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "連結",
					"description": "項目中可以有連結，如果你想讓整個項目變成連結請參考更下方的教學。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <[[a]] class=\"ts tiny {{image}}\">\n            <img src=\"!-user-!\">\n        </[[a]]>\n        <div class=\"content\">\n            <a class=\"header\">羽田白音</a>\n            <div class=\"description\">\n                來自日本，在台灣目睹一場飛機事故並在其中拯救了另一名乘客，但得到的回報卻不是感謝。\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <[[a]] class=\"ts tiny {{image}}\">\n            <img src=\"!-user3-!\">\n        </[[a]]>\n        <div class=\"content\">\n            <a class=\"header\">卡莉絲</a>\n            <div class=\"description\">\n                總是以玩樂為主的初中生，把大多數的時間都花在打理自己的外觀上，嘗試著讓自己成為能夠大受矚目的人物。\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "額外內容",
					"description": "你可以在項目中放入額外內容。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <div class=\"content\">\n            <div class=\"header\">廢除博愛座</div>\n            <div class=\"description\">\n                近年來，台灣一般民眾之文化水準已明顯提高，在公共運輸工具上讓座給有需要的人已經成為一個常見的行為。不僅僅局限於博愛座，一般座位也常見讓座這樣的行為。\n            </div>\n            <div class=\"[[extra]]\">\n                <i class=\"check {{icon}}\"></i>\n                121 個贊同\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "項目可以有不同的外觀點綴。",
			"items": [
				{
					"title": "分隔的",
					"description": "項目和另一個項目之間可以有分隔線做為區隔的界線。",
					"code": "<div class=\"ts [[divided]] items\">\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">吻仔魚</a>\n            <div class=\"meta\">\n                <span>$32 元</span>\n            </div>\n            <div class=\"description\">\n                一般可分為淡水魚魩仔魚與海水魚魩仔魚兩類。根據臺灣大學王友慈博士指出，魩仔魚是單一種魚類，是沙丁魚苗，若撈捕作業不正確有可能撈到數十至一百五十種類的魚苗。\n            </div>\n            <div class=\"extra\">\n                維基百科\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">芒果</a>\n            <div class=\"meta\">\n                <span>Mango</span>\n            </div>\n            <div class=\"description\">\n                是芒果屬的一種植物和果實，原產自北印度和馬來半島，在梵語中叫作āmra，音譯為「菴羅」，或叫作āmalaka，音譯為「菴摩勒」、「菴摩羅」、「阿摩落伽」。\n            </div>\n            <div class=\"extra\">\n                維基百科\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "片段的",
					"description": "項目可以看起來像片段那樣層層分明。",
					"code": "<div class=\"ts [[segmented]] items\">\n    <div class=\"item\">\n        <div class=\"ts mini {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            トリノライン\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts mini {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            ReLieF～親愛なるあなたへ～\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "可選擇的",
					"description": "項目可以在滑鼠移上去時出現可選擇的樣式。",
					"code": "<div class=\"ts [[selection]] items\">\n    <div class=\"item\">\n        <div class=\"ts mini {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            こんじきのやみ\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts mini {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            くろさき めあ\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "較寬鬆",
					"description": "項目和項目之間的間隙可以更為寬鬆。",
					"remove": "<br>",
					"code": "<div class=\"ts [[relaxed]] items\">\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            <div class=\"header\">\n                New Game!\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            <div class=\"header\">\n                Re:從零開始的異世界生活\n            </div>\n        </div>\n    </div>\n</div>\n<br>\n<div class=\"ts [[very relaxed]] items\">\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            <div class=\"header\">\n                Fate/kaleid liner 魔法少女☆伊莉雅3rei\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-1:1-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            <div class=\"header\">\n                這個美術社大有問題！\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "單行的",
					"description": "項目可以是禁止換行，保持單行且在文字溢出時顯示「⋯」隱藏。",
					"code": "<div class=\"ts [[single line]] items\">\n    <div class=\"item\">\n        <div class=\"content\">\n            <div class=\"header\">\n                支付系統？\n            </div>\n            <div class=\"description\">\n                在真正要做錢包之前先用了 PayPal 的項目還有 Tocas UI 稍微搭配了一下，感覺外觀還是不錯的。然後提到 PayPal 又讓我想起台灣阻擋第三方支付的事情⋯。\n            </div>\n            <div class=\"extra\">\n                2016 年 12 月 19 日\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"content\">\n            <div class=\"header\">\n                Tocas UI 2.1 新元素：板岩\n            </div>\n            <div class=\"description\">\n                板岩是聚焦看板的後繼者，板岩除了擁有作為頁面標題區塊的功能外，現在還可以當作一個預置區塊（Placeholder），例如一個空的購物車就可以用上板岩。\n            </div>\n            <div class=\"extra\">\n                2016 年 11 月 28 日\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "附著",
					"description": "片段的項目可以和其他元件附著在一塊。",
					"code": "<div class=\"ts [[top attached]] {{header}}\">\n    推薦影片\n</div>\n<div class=\"ts [[attached]] segmented items\">\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-16:9-!\">\n        </div>\n        <div class=\"content\">\n            【阿津】Inner Voices 恐怖遊戲 - 還可以啦(´;ω;`)\n        </div>\n    </div>\n</div>\n<div class=\"ts [[attached]] {{header}}\">\n    再看一次\n</div>\n<div class=\"ts [[bottom attached]] segmented items\">\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-16:9-!\">\n        </div>\n        <div class=\"content\">\n            INJUSTICE 2 HARLEY QUINN ENDING - Arcade Ladder Walkthrough Gameplay (Character Story)\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "連結項目",
					"description": "單個項目可以是一個連結。",
					"code": "<div class=\"ts [[link]] items\">\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            <div class=\"header\">\n                Lorem ipsum\n            </div>\n            <div class=\"description\">\n                Curabitur efficitur nisi vitae lorem bibendum pulvinar.\n                Nec risus ac tellus euismod varius.\n                Nullam commodo turpis lorem,\n                vitae luctus magna consequat sed.\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts tiny {{image}}\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"middle aligned content\">\n            <div class=\"header\">\n                Cum sociis\n            </div>\n            <div class=\"description\">\n                Quisque gravida dictum justo,\n                vitae dignissim est luctus a. Phasellus placerat,\n                nunc eget hendrerit dictum,\n                orci urna iaculis enim.\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "垂直對齊",
					"description": "你可以自訂項目內容的垂直對齊。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n        <div class=\"[[top aligned]] content\">\n            <div class=\"header\">\n                這個標題會貼齊上方\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n        <div class=\"[[middle aligned]] content\">\n            <div class=\"header\">\n                這會垂直置中\n            </div>\n        </div>\n        <div class=\"[[middle aligned]] actions\">\n            <div class=\"ts positive button\">\n                動作區塊也行\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n        <div class=\"[[bottom aligned]] content\">\n            <div class=\"header\">\n                然後這個會貼齊底部\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "浮動",
					"description": "項目的內容可以左右浮動。",
					"code": "<div class=\"ts items\">\n    <div class=\"item\">\n        <div class=\"ts small {{image}}\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"top aligned content\">\n            <div class=\"header\">\n                Lorem ipsum\n            </div>\n            <div class=\"description\">\n                Curabitur efficitur nisi vitae lorem bibendum pulvinar.\n                Nec risus ac tellus euismod varius.\n                Nullam commodo turpis lorem,\n                vitae luctus magna consequat sed.\n            </div>\n            <div class=\"extra\">\n                <div class=\"ts [[right floated]] {{button}}\">\n                    加入好友\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ts small {{image}}\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"top aligned content\">\n            <div class=\"header\">\n                Cum sociis\n            </div>\n            <div class=\"description\">\n                Quisque gravida dictum justo,\n                vitae dignissim est luctus a. Phasellus placerat,\n                nunc eget hendrerit dictum,\n                orci urna iaculis enim.\n            </div>\n            <div class=\"extra\">\n                <div class=\"ts [[right floated]] {{button}}\">\n                    加入好友\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});