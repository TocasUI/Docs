webpackJsonp([9],{

/***/ 77:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "卡片",
		"description": "隨心所欲，像漢堡一樣，拼湊出你喜歡的。"
	},
	"intro": "<p>卡片的內容可以是由各式各樣的元素組成，這一個特點請參考「內容」的介紹區塊。</p>\n<p>卡片和片段事實上外觀相同（它們來自同個樣式），但你不應該因為外觀一樣，就將原本應該用卡片顯示的內容以片段代替。</p>\n<p>請別忘記：雖然外觀一樣，但是內在卻不一樣。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "卡片具有不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的卡片。",
					"code": "<div class=\"ts [[card]]\">\n    <div class=\"image\">\n        <img src=\"!-4:3-!\">\n    </div>\n    <div class=\"content\">\n        <div class=\"header\">Tocas Collection</div>\n        <div class=\"meta\">\n            <a>@ts_collection</a>\n        </div>\n        <div class=\"description\">\n            <p>在同個屋簷下，做著那一成不變的事情，</p>\n            <p>就算沒有外星人來襲擊，</p>\n            <p>偶爾也會發生一些意想之外的事情。</p>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "語意",
					"description": "卡片可以有著不同的語意。",
					"code": "<div class=\"ts [[primary]] card\">\n    <div class=\"content\">\n        <div class=\"header\">Jajjimento</div>\n        <div class=\"description\">\n            Jajjimento（ジャッジメント）中文涵意是風紀委員，\n            這是用來驗證表單的 PHP 類別。\n        </div>\n    </div>\n</div>\n<div class=\"ts [[info]] card\">\n    <div class=\"content\">\n        <div class=\"header\">夏希</div>\n        <div class=\"description\">\n            夏希是一個基於 PHP 的時間類別，\n            用以取得現在的時間，或者是數天後的現在時刻。\n        </div>\n    </div>\n</div>\n<div class=\"ts [[warning]] card\">\n    <div class=\"content\">\n        <div class=\"header\">帝國</div>\n        <div class=\"description\">\n            帝國是一個基於 PHP 的權限管理系統，\n            建立一個帝國需要細心的規劃。\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "肯定和否定",
					"description": "卡片可以帶有肯定或否定的語氣。",
					"code": "<div class=\"ts [[positive]] card\">\n    <div class=\"content\">\n        <div class=\"header\">正面 :)</div>\n        <div class=\"description\">\n            這是一個比較正面的卡片。\n        </div>\n    </div>\n</div>\n<div class=\"ts [[negative]] card\">\n    <div class=\"content\">\n        <div class=\"header\">負面 :(</div>\n        <div class=\"description\">\n            我是一張比較負面的卡片。\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "反色語意",
					"description": "卡片的語意可以是反色的。",
					"code": "<div class=\"ts [[inverted]] card\">\n    <div class=\"content\">\n        <div class=\"header\">反色</div>\n        <div class=\"description\">\n            我是一張反色的卡片，喔耶！！\n        </div>\n    </div>\n</div>\n<div class=\"ts [[inverted]] [[primary]] card\">\n    <div class=\"content\">\n        <div class=\"header\">Jajjimento</div>\n        <div class=\"description\">\n            Jajjimento（ジャッジメント）中文涵意是風紀委員，\n            這是用來驗證表單的 PHP 類別。\n        </div>\n    </div>\n</div>\n<div class=\"ts [[inverted]] [[info]] card\">\n    <div class=\"content\">\n        <div class=\"header\">夏希</div>\n        <div class=\"description\">\n            夏希是一個基於 PHP 的時間類別，\n            用以取得現在的時間，或者是數天後的現在時刻。\n        </div>\n    </div>\n</div>\n<div class=\"ts [[inverted]] [[warning]] card\">\n    <div class=\"content\">\n        <div class=\"header\">帝國</div>\n        <div class=\"description\">\n            帝國是一個基於 PHP 的權限管理系統，\n            建立一個帝國需要細心的規劃。\n        </div>\n    </div>\n</div>\n<div class=\"ts [[inverted]] [[positive]] card\">\n    <div class=\"content\">\n        <div class=\"header\">正面 :)</div>\n        <div class=\"description\">\n            這是一個比較正面的卡片。\n        </div>\n    </div>\n</div>\n<div class=\"ts [[inverted]] [[negative]] card\">\n    <div class=\"content\">\n        <div class=\"header\">負面 :(</div>\n        <div class=\"description\">\n            我是一張比較負面的卡片。\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "多個卡片",
					"description": "卡片可以集成一個群組並有著相同的高度或是分享共同樣式。",
					"code": "<div class=\"ts [[cards]]\">\n    <div class=\"ts card\">\n        <div class=\"content\">\n            <div class=\"header\">\n                Yami Odymel\n            </div>\n            <div class=\"description\">\n                看似最重要的東西卻沒能被妥善利用，\n                沒有人能發現這一點，因為他們早已活在過去，\n                才剛開始的序章卻被放在頁尾。\n            </div>\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"content\">\n            <div class=\"header\">\n                小安網站\n            </div>\n            <div class=\"description\">\n                你將會在這裡看見一個魔法師的日常生活，\n                沒錯，只要你能夠單身三十年，\n                你也可以跟我一樣成為魔法師。\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "卡片是由多種內容所組成的，你可以在此任意挑選並組合搭配。",
			"items": [
				{
					"title": "內容",
					"description": "一個放置文字的區塊。",
					"code": "<div class=\"ts card\">\n    <div class=\"[[content]]\">\n        人的生命有兩次，一次是你沒發現的時候，一次是你發現的時候。\n    </div>\n</div>\n"
				},
				{
					"title": "標題",
					"description": "用以放置人名、標題、名稱的區塊。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"[[header]]\">嗶叭啦叭啦叭叭拉嗶嗶叭啦</div>\n        <div class=\"description\">\n            <p>這是來自地獄的智障骷髏智障骷髏小喇叭手。</p>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "副標題",
					"description": "你可以用副標題來詮釋你的大標題。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"header\">\n            三十公分\n            <div class=\"[[sub header]]\">人人都渴望的尺寸。</div>\n        </div>\n        <div class=\"description\">\n            <p>所謂的標準鄉民尺寸三十公分，</p>\n            <p>無論是誰都會想要擁有。</p>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "較小的標題",
					"description": "標題與其子標題可以稍微小一點。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"[[smaller header]]\">\n            電腦玩瞎咪\n            <div class=\"sub header\">關於電腦、日常生活、休閒的去處。</div>\n        </div>\n        <div class=\"description\">\n            <p>Event Store 是一個基於 CQRS 與 Event Sourcing 理念所衍生出來的新概念並由 C# 撰寫。這是一個微服務事件儲藏中心，這可能很難懂，但別緊張，這些都會在本文中得到答案。</p>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "圖片",
					"description": "一個用以放置圖片的區塊。",
					"code": "<div class=\"ts card\">\n    <div class=\"[[image]]\">\n        <img src=\"!-4:3-!\">\n    </div>\n    <div class=\"content\">\n        <p>你將會在這裡看見一個魔法師的日常生活，</p>\n        <p>沒錯，只要你能夠單身三十年，</p>\n        <p>你也可以跟我一樣成為魔法師。</p>\n    </div>\n</div>\n"
				},
				{
					"title": "影片",
					"description": "你可以在卡片中擺放 HTML5 影片，或是 YouTube、Vimeo 等外部影片。",
					"code": "<div class=\"ts card\">\n    <div class=\"[[video]]\">\n        <video src=\"http://html5demos.com/assets/dizzy.mp4\" autoplay muted loop></video>\n    </div>\n    <div class=\"content\">\n        貓咪轉啊轉，轉啊轉。像這樣放入一個 HTML5 的自訂影片。\n    </div>\n</div>\n<div class=\"ts card\">\n    <div class=\"[[video]]\">\n        <iframe src=\"https://www.youtube.com/embed/vbZBAC3WbTs\"></iframe>\n    </div>\n    <div class=\"content\">\n        透過 iframe 標籤你可以嵌入 YouTube 或 Vimeo 的影片，他們會自動貼合卡片的寬度。\n    </div>\n</div>\n<div class=\"ts card\">\n    <div class=\"[[video]]\">\n        <div class=\"ts 1:1 active {{embed}}\">\n            <video src=\"https://www.quirksmode.org/html5/videos/big_buck_bunny.webm\" autoplay muted loop></video>\n        </div>\n    </div>\n    <div class=\"content\">\n        你也可以透過 Tocas UI 的「嵌入物件」元件來自訂影片長寬比。這個範例嵌入了一個 1:1 正方形的影片。\n    </div>\n</div>\n"
				},
				{
					"title": "圖片、影片標題",
					"description": "圖片或是影片區塊內可以有標題與子標題。",
					"code": "<div class=\"ts card\">\n    <div class=\"image\">\n        <img src=\"!-4:3-!\">\n        <div class=\"[[header]]\">\n            三十公分\n            <div class=\"[[sub header]]\">人人都渴望的尺寸。</div>\n        </div>\n    </div>\n    <div class=\"content\">\n        <p>你將會在這裡看見一個魔法師的日常生活，</p>\n        <p>沒錯，只要你能夠單身三十年，</p>\n        <p>你也可以跟我一樣成為魔法師。</p>\n    </div>\n</div>\n"
				},
				{
					"title": "註釋",
					"description": "用來詮釋卡片內容的區塊。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"header\">文青短文精選</div>\n        <div class=\"[[description]]\">\n            <p>路，就是一條直直的。</p>\n            <p>哥 抽的不是菸 是筋。</p>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "中繼資料",
					"description": "放置時間、標籤、短資料的區塊。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"header\">小安網站</div>\n        <div class=\"[[meta]]\">\n            <a>@xiaoan</a>\n            <a>七月</a>\n        </div>\n        <div class=\"description\">\n            <p>你將會在這裡看見一個魔法師的日常生活，</p>\n            <p>沒錯，只要你能夠單身三十年，</p>\n            <p>你也可以跟我一樣成為魔法師。</p>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "帶點中繼資料",
					"description": "中繼資料可以有「子彈點」或是「中點」來做區隔。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"header\">小安網站</div>\n        <div class=\"[[bulleted]] meta\">\n            <a>@xiaoan</a>\n            <a>七月</a>\n        </div>\n    </div>\n</div>\n<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"header\">小安網站</div>\n        <div class=\"[[middoted]] meta\">\n            <a>@xiaoan</a>\n            <a>七月</a>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "動作",
					"description": "放置對卡片做出某種動作的按鈕區塊。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"[[actions]]\">\n            <div class=\"ts separated secondary icon {{buttons}}\">\n                <button class=\"ts {{button}}\">\n                    <i class=\"share {{icon}}\"></i>\n                </button>\n                <button class=\"ts {{button}}\">\n                    <i class=\"vertical ellipsis {{icon}}\"></i>\n                </button>\n            </div>\n        </div>\n        <div class=\"header\">甲帕里怕</div>\n        <div class=\"middoted meta\">\n            <div>作詞・作編曲：大石昌良</div>\n        </div>\n        <div class=\"description\">\n            <p>Welcome to ようこそジャパリパーク！</p>\n            <p>今日もドッタンバッタン大騒ぎ</p>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "連結",
					"description": "你可以將一些區塊轉換成連結，如果要讓整張卡成為卡片，請觀看下方「外觀」章節。",
					"code": "<div class=\"ts card\">\n    <[[a]] class=\"image\" href=\"#!\">\n        <img src=\"!-4:3-!\">\n    </[[a]]>\n    <div class=\"content\">\n        <[[a]] class=\"header\" href=\"#!\">iPhone 7 開賣！</[[a]]>\n        <div class=\"meta\">\n            <a href=\"#!\">兩天前</a>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "按鈕",
					"description": "你也可以把按鈕放入卡片中。",
					"code": "<div class=\"ts card\">\n    <div class=\"ts fluid [[top attached]] [[buttons]]\">\n        <button class=\"ts button\">編輯</button>\n    </div>\n    <div class=\"content\">\n        <div class=\"header\">Tocas Collection</div>\n        <div class=\"description\">\n            <p>在同個屋簷下，做著那一成不變的事情，</p>\n            <p>就算沒有外星人來襲擊，</p>\n            <p>偶爾也會發生一些意想之外的事情。</p>\n        </div>\n    </div>\n    <div class=\"ts fluid [[bottom attached]] [[buttons]]\">\n        <button class=\"ts button\">完成預覽</button>\n    </div>\n</div>\n"
				},
				{
					"title": "偏見按鈕",
					"description": "卡片中可以插入偏見按鈕來營造一個類似問答的卡片。",
					"code": "<div class=\"ts inverted primary card\">\n    <div class=\"content\">\n        <div class=\"header\">尺寸問題</div>\n        <div class=\"description\">\n            你有達到 30 公分，正所謂鄉民標準尺寸嗎？\n        </div>\n    </div>\n    <div class=\"ts fluid bottom attached buttons\">\n        <button class=\"ts [[opinion]] button\">有的</button>\n        <button class=\"ts [[secondary opinion]] button\">沒有</button>\n    </div>\n</div>\n"
				},
				{
					"title": "代表性符號",
					"description": "放入一個代表這張卡片性質的符號。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <p>任何已發布或是計畫中之產品及服務，</p>\n        <p>皆不得用來刻意偏頗大眾想法、喜好、甚至混淆視聽，</p>\n        <p>且該產品及服務不得擁有自我立場。</p>\n    </div>\n    <div class=\"[[symbol]]\">\n        <i class=\"caution circle icon\"></i>\n    </div>\n</div>\n"
				},
				{
					"title": "額外內容",
					"description": "一個與這個卡片有關連的額外內容。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"header\">絕園的暴風雨</div>\n        <div class=\"description\">\n            <p>正氣和狂氣，理性和知性，自信和確信，</p>\n            <p>在悲劇性的不合理世界，故事開始了。</p>\n        </div>\n    </div>\n    <div class=\"[[extra content]]\">\n        <i class=\"icon unhide\"></i> 934 次欣賞\n    </div>\n</div>\n"
				},
				{
					"subtitle": "額外內容發音方式",
					"description": "你可以用不同的發音方式來替額外內容做些點綴。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"header\">Zedd - Papercut (Audio) ft. Troye Sivan</div>\n        <div class=\"description\">\n            <p>Get “True Colors” on iTunes: http://smarturl.it/ZeddTrueColors</p>\n        </div>\n    </div>\n    <div class=\"[[extra content]]\">\n        <i class=\"icon unhide\"></i> 6,439,852 觀看次數\n    </div>\n    <div class=\"[[secondary]] extra content\">\n        <i class=\"icon thumbs up\"></i> 109,159 個喜歡\n    </div>\n    <div class=\"[[tertiary]] extra content\">\n        <i class=\"icon thumbs down\"></i> 1,077 個討厭\n    </div>\n</div>\n"
				},
				{
					"title": "重疊內容",
					"description": "內容可以重疊在整張卡片的上面。",
					"code": "<div class=\"ts card\">\n    <div class=\"image\">\n        <img style=\"opacity: 0.2\" src=\"!-4:3-!\">\n    </div>\n    <div class=\"[[overlapped content]]\">\n        <div class=\"description\">\n            <p>這是一個來自台灣的社群網站，</p>\n            <p>在這裡，我們並沒有「讚」，或是「已讀」。</p>\n            <p>取而代之的，是一個「星號」，</p>\n            <p>你可以假裝沒看見你朋友發給你的訊息，</p>\n            <p>或者——你可以按下「星號」，告訴對方你知道了。</p>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "自由排列",
					"description": "現在你學到了許多的內容結構，你可以透過自由排列的方式來達成不同的效果。",
					"remove": "<br>",
					"code": "<div class=\"ts [[card]]\">\n    <div class=\"content\">\n        <div class=\"header\">伊繁星最高協議</div>\n        <div class=\"meta\">\n            <div>@ce_laws</div>\n        </div>\n    </div>\n    <div class=\"image\">\n        <img src=\"!-4:3-!\">\n    </div>\n    <div class=\"content\">\n        <div class=\"description\">\n            <p>任何已發布或是計畫中之產品及服務，</p>\n            <p>皆不得用來刻意偏頗大眾想法、喜好、甚至混淆視聽，</p>\n            <p>且該產品及服務不得擁有自我立場。</p>\n        </div>\n    </div>\n</div>\n<br>\n<div class=\"ts [[card]]\">\n    <div class=\"secondary extra content\">\n        <div class=\"header\">你上次錯過了...</div>\n    </div>\n    <div class=\"content\">\n        <div class=\"description\">\n            Sed vitae egestas ex.\n            Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit.\n            Sed et felis eleifend,\n            molestie dolor in,\n            scelerisque sapien.\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "卡片具有不同的外觀。",
			"items": [
				{
					"title": "簡潔問答",
					"description": "一個將按鈕獨立擺放的問答。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"header\">請問</div>\n        <div class=\"description\">\n            <p>比起小明，您是否更喜歡小安？</p>\n        </div>\n    </div>\n    <div class=\"symbol\">\n        <i class=\"question circle icon\"></i>\n    </div>\n    <div class=\"right aligned secondary extra content\">\n        <button class=\"ts primary button\">是的</button>\n        <button class=\"ts button\">不是</button>\n    </div>\n</div>\n"
				},
				{
					"title": "文字對齊",
					"description": "文字可以靠左、右、甚至置中。",
					"code": "<div class=\"ts card\">\n    <div class=\"content\">\n        <div class=\"[[center aligned]] header\">\n            我置中\n        </div>\n        <div class=\"[[left aligned]] description\">\n            這置左\n        </div>\n    </div>\n    <div class=\"[[right aligned]] extra content\">\n        然後靠右\n    </div>\n</div>\n<div class=\"ts card\">\n    <div class=\"[[center aligned]] content\">\n        <div class=\"header\">\n            這種置中方式\n        </div>\n        <div class=\"description\">\n            可以一次置中多個元素。\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "置中卡片",
					"description": "卡片本身可以是置中的。",
					"code": "<div class=\"ts [[centered]] card\">\n    <div class=\"image\">\n        <img src=\"!-4:3-!\">\n    </div>\n    <div class=\"content\">\n        <a class=\"header\">Yami Odymel</a>\n    </div>\n</div>\n"
				},
				{
					"title": "抬舉",
					"description": "卡片可以看起來像是浮在空中，被抬舉一樣。",
					"code": "<div class=\"ts [[raised]] card\">\n    <div class=\"image\">\n        <img src=\"!-4:3-!\">\n    </div>\n    <div class=\"content\">\n        <a class=\"header\">Yami Odymel</a>\n    </div>\n</div>\n"
				},
				{
					"title": "輕巧版",
					"description": "使卡片依照內容作為寬度基準，而不是直接服貼父容器的寬度。",
					"code": "<div class=\"ts [[compact]] card\">\n    <div class=\"content\">\n        <a class=\"description\">這張卡片會依照內容來進行寬度伸縮。</a>\n    </div>\n</div>\n"
				},
				{
					"title": "增加內距",
					"description": "你可以增加卡片內容的內距。",
					"code": "<div class=\"ts card\">\n    <div class=\"secondary [[very padded]] extra content\">\n        <div class=\"ts icon {{header}}\">\n            <i class=\"file {{icon}}\"></i>\n        </div>\n    </div>\n    <div class=\"[[padded]] content\">\n        <div class=\"ts {{list}}\">\n            <div class=\"item\">\n                <i class=\"time {{icon}}\"></i>\n                <div class=\"content\">\n                    <div class=\"header\">最後開啟時間</div>\n                    <div class=\"description\">2017-06-13 12:36PM</div>\n                </div>\n            </div>\n            <div class=\"item\">\n                <i class=\"lock {{icon}}\"></i>\n                <div class=\"content\">\n                    <div class=\"header\">檔案驗證碼</div>\n                    <div class=\"description\">20838a8df7cc0babd745c7af4b7d94e2</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "連結卡片",
					"description": "整張卡片可以是一個連結。",
					"code": "<[[a]] class=\"ts card\" href=\"http://www.example.com\">\n    <div class=\"content\">\n        <div class=\"header\">關於我</div>\n        <div class=\"meta\">\n            <div>@Xiaoan</div>\n        </div>\n        <div class=\"description\">\n            你將會在這裡看見一個魔法師的日常生活，\n            沒錯，只要你能夠單身三十年，\n            你也可以跟我一樣成為魔法師。\n        </div>\n    </div>\n    <div class=\"extra content\">\n        <div class=\"right floated author\">\n            <img class=\"ts circular avatar image\" src=\"!-user-!\"> 小安\n        </div>\n    </div>\n</[[a]]>\n"
				},
				{
					"title": "平面化",
					"description": "卡片可以看起來是平的，沒有陰影。",
					"code": "<div class=\"ts [[flatted]] card\">\n    <div class=\"content\">\n        Lorem ipsum dolor sit amet,\n        consectetur adipiscing elit.\n        Sed et felis eleifend,\n        molestie dolor in, scelerisque sapien.\n    </div>\n</div>\n"
				},
				{
					"title": "卡片欄數",
					"description": "卡片群組可以設定欄位數量，並在超過時自動換行，允許的卡片數量從 <span class=\"ts horizontal label\">one</span> 至 <span class=\"ts horizontal label\">ten</span>。",
					"code": "<div class=\"ts [[four]] cards\">\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">Karen</a>\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">Caris</a>\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">Imperium</a>\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">Natsuki</a>\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">Avane</a>\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">Eneko</a>\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">Iknore</a>\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">Aira</a>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "自動層疊",
					"description": "卡片可以在行動裝置上自動層疊成一行。",
					"code": "<div class=\"ts [[stackable]] three cards\">\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "雙倍層疊",
					"description": "在行動裝置上卡片群組能夠以雙倍層疊的方式將卡片重新排序，假設卡片群組設定一排四張，那麼在行動裝置上將會變成一排兩張。",
					"code": "<div class=\"ts [[doubling]] four cards\">\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"image\">\n            <img src=\"!-4:3-!\">\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "瀑布流",
					"description": "卡片群組可以是呈現一個瀑布流的樣式，你可以透過 <span class=\"ts horizontal label\">one</span> 到 <span class=\"ts horizontal label\">ten</span> 指定瀑布流的排數。",
					"code": "<div class=\"ts [[three]] [[waterfall]] cards\">\n    <div class=\"ts card\">\n        <div class=\"content\">\n            Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit.\n            Sed et felis eleifend, molestie dolor in,\n            scelerisque sapien.\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"content\">\n            Nullam sed turpis vel purus consectetur elementum a sed ante.\n            In venenatis ligula nisl,\n            sed dapibus felis ultrices eu.\n            Curabitur finibus leo dolor,\n            eu euismod mi elementum ut.\n            Donec ac interdum urna.\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"content\">\n            Class aptent taciti sociosqu ad litora\n            torquent per conubia nostra,\n            per inceptos himenaeos.\n            Morbi rhoncus porta mi et finibus.\n            Pellentesque nisi massa,\n            imperdiet ac egestas ut,\n            ullamcorper sit amet urna.\n            Fusce maximus vitae orci vel hendrerit.\n            Pellentesque habitant morbi tristique senectus\n            et netus et malesuada fames ac turpis egestas.\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"content\">\n            Cras eget dui ut eros pulvinar euismod eget rutrum odio.\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"content\">\n            Curabitur vel arcu tortor.\n            Sed sed libero pellentesque,\n            venenatis justo a, lobortis velit.\n            Ut cursus, turpis nec sodales posuere,\n            libero orci maximus lectus,\n            sed tincidunt eros diam vel urna.\n        </div>\n    </div>\n    <div class=\"ts card\">\n        <div class=\"content\">\n            Pellentesque nisi massa,\n            imperdiet ac egestas ut,\n            ullamcorper sit amet urna.\n            Fusce maximus vitae orci vel hendrerit.\n            Pellentesque habitant morbi tristique\n            senectus et netus et malesuada fames ac turpis egestas.\n            Donec vel sagittis purus.\n            Morbi ultrices,\n            quam et feugiat dignissim\n        </div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});