webpackJsonp([8],{

/***/ 78:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "留言",
		"description": "如何引發網路戰爭？一，留言；二，等待。"
	},
	"intro": "<p>你可以變換留言中時間和文字的位置，這些在下面都有範例可供參考。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "留言具有不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的留言。",
					"code": "<div class=\"ts [[comments]]\">\n    <div class=\"[[comment]]\">\n        <a class=\"avatar\">\n            <img src=\"!-user-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Yami Odymel</a>\n            <div class=\"metadata\">\n                <div>2 天前</div>\n                <div>\n                    <i class=\"star {{icon}}\"></i>\n                    5 次收藏\n                </div>\n            </div>\n            <div class=\"description\">\n                你的思想不應該只屬於現在這個時間。\n            </div>\n        </div>\n    </div>\n    <div class=\"[[comment]]\">\n        <a class=\"avatar\">\n            <img src=\"!-user2-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Karisu</a>\n            <div class=\"metadata\">\n                <div>42 分鐘前</div>\n            </div>\n            <div class=\"description\">\n                有反對的聲音，世界才能中立。\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "留言包含了許多不同的內容。",
			"items": [
				{
					"title": "頭像",
					"description": "用以顯示發言者、圖片的一個內容區塊。",
					"code": "<div class=\"ts comments\">\n    <div class=\"comment\">\n        <div class=\"[[avatar]]\">\n            <img src=\"!-user3-!\">\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "作者",
					"description": "顯示發言者的名稱。",
					"code": "<div class=\"ts comments\">\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"[[author]]\">Yami Odymel</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "內容",
					"description": "擺放留言內容的區塊。",
					"code": "<div class=\"ts comments\">\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"author\">Karisu</a>\n            <div class=\"[[description]]\">發現自己做不到是進步過程中的一環。</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "中繼資料",
					"description": "用以擺放時間、一些有關連的小型資料。",
					"code": "<div class=\"ts comments\">\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"author\">亞凡芽</a>\n            <div class=\"[[metadata]]\">\n                <div> 42 分鐘前 </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "帶點中繼資料",
					"description": "中繼資料可以有「子彈點」或是「中點」來做區隔。",
					"code": "<div class=\"ts comments\">\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"author\">Yami Odymel</a>\n            <div class=\"[[bulleted metadata]]\">\n                <div>3 天前</div>\n                <div>5 個讚</div>\n            </div>\n        </div>\n    </div><br>\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"author\">比爾蓋飯</a>\n            <div class=\"[[middoted metadata]]\">\n                <div>1 月前</div>\n                <div>已收藏</div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "動作",
					"description": "一個可以擺放這個留言所可以執行動作的區塊。",
					"code": "<div class=\"ts comments\">\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"author\">吳雨藍</a>\n            <div class=\"metadata\">\n                <div>42 分鐘前</div>\n            </div>\n            <div class=\"description\">\n                成功的開始不在於創意，而是現在。\n            </div>\n            <div class=\"[[actions]]\">\n                <a>回覆</a>\n                <a>移除</a>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "帶點動作",
					"description": "動作可以有「子彈點」或是「中點」來做區隔。",
					"code": "<div class=\"ts comments\">\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"author\">Yami Odymel</a>\n            <div class=\"description\">輸的時候失去最多的就是理智。</div>\n            <div class=\"[[bulleted actions]]\">\n                <a>檢舉</a>\n                <a>編輯</a>\n                <a>移除</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"author\">Yami Odymel</a>\n            <div class=\"description\">對這個世界感到失望，是躍出舞台的第一步。</div>\n            <div class=\"[[middoted actions]]\">\n                <a>回覆</a>\n                <a>移除</a>\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "留言擁有一些不同的外觀。",
			"items": [
				{
					"title": "同列文字",
					"description": "留言的文字可以與作者名稱同列。",
					"code": "<div class=\"ts comments\">\n    <div class=\"comment\">\n        <a class=\"avatar\">\n            <img src=\"!-user3-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">橙希</a>\n            <div class=\"[[inline]] description\">\n                我的信仰是自己，你呢？\n            </div>\n            <div class=\"middoted actions\">\n                <a class=\"reply\">回應</a>\n                <a class=\"save\">收藏</a>\n                <a>\n                    <i class=\"expand {{icon}}\"></i>\n                    全尺寸檢視\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "主題性質",
					"description": "留言可以是一個主題性質，這將允許你的留言帶有層級制度，留言中可帶有子留言。",
					"code": "<div class=\"ts [[threaded]] comments\">\n    <div class=\"comment\">\n        <a class=\"avatar\">\n            <img src=\"!-user-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Yami Odymel</a>\n            <div class=\"description\">\n                準備向令一個平行世界的你道歉，因為你將在這個世界有所作為。\n            </div>\n        </div>\n        <div class=\"comments\">\n            <div class=\"comment\">\n                <div class=\"avatar\">\n                    <img src=\"!-user2-!\">\n                </div>\n                <div class=\"content\">\n                    <a class=\"author\">橙希</a>\n                    <div class=\"description\">\n                        早安！我的朋友！\n                    </div>\n                </div>\n                <div class=\"comment\">\n                    <div class=\"avatar\">\n                        <img src=\"!-user3-!\">\n                    </div>\n                    <div class=\"content\">\n                        <a class=\"author\">吳雨藍</a>\n                        <div class=\"description\">\n                            第一個覺得檸檬是食物的人一定是個被虐狂。\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "分隔的",
					"description": "留言可以帶有分隔線區分來和下一個留言做區分。",
					"code": "<div class=\"ts [[divided]] comments\">\n    <div class=\"comment\">\n        <a class=\"avatar\">\n            <img src=\"!-user-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Mac Taylor</a>\n            <div class=\"description\">\n                你是一個漁夫。\n            </div>\n        </div>\n    </div>\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"author\">Mac Taylor</a>\n            <div class=\"description\">\n                如果你有去釣魚大賽，你可能會被禁止進入：<br>\n                「我們不歡迎職業選手」\n            </div>\n        </div>\n    </div>\n    <div class=\"comment\">\n        <div class=\"avatar\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <a class=\"author\">Yami Odymel</a>\n            <div class=\"description\">\n                你很機車人\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "留言可以有不同的尺寸。",
					"code": "<div class=\"ts [[tiny]] comments\">\n    <div class=\"comment\">\n        <a class=\"avatar\">\n            <img src=\"!-user-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Mac Taylor</a>\n            <div class=\"inline description\">\n                你是一個漁夫。\n            </div>\n            <div class=\"middoted actions\">\n                <a class=\"reply\">回應</a>\n                <a class=\"save\">收藏</a>\n                <a>\n                    <i class=\"expand {{icon}}\"></i>\n                    全尺寸檢視\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[small]] comments\">\n    <div class=\"comment\">\n        <a class=\"avatar\">\n            <img src=\"!-user2-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Mac Taylor</a>\n            <div class=\"inline description\">\n                你是一個漁夫。\n            </div>\n            <div class=\"middoted actions\">\n                <a class=\"reply\">回應</a>\n                <a class=\"save\">收藏</a>\n                <a>\n                    <i class=\"expand {{icon}}\"></i>\n                    全尺寸檢視\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[medium]] comments\">\n    <div class=\"comment\">\n        <a class=\"avatar\">\n            <img src=\"!-user3-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Mac Taylor</a>\n            <div class=\"inline description\">\n                你是一個漁夫。\n            </div>\n            <div class=\"middoted actions\">\n                <a class=\"reply\">回應</a>\n                <a class=\"save\">收藏</a>\n                <a>\n                    <i class=\"expand {{icon}}\"></i>\n                    全尺寸檢視\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[large]] comments\">\n    <div class=\"comment\">\n        <a class=\"avatar\">\n            <img src=\"!-user-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Mac Taylor</a>\n            <div class=\"inline description\">\n                你是一個漁夫。\n            </div>\n            <div class=\"middoted actions\">\n                <a class=\"reply\">回應</a>\n                <a class=\"save\">收藏</a>\n                <a>\n                    <i class=\"expand {{icon}}\"></i>\n                    全尺寸檢視\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[big]] comments\">\n    <div class=\"comment\">\n        <a class=\"avatar\">\n            <img src=\"!-user2-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Mac Taylor</a>\n            <div class=\"inline description\">\n                你是一個漁夫。\n            </div>\n            <div class=\"middoted actions\">\n                <a class=\"reply\">回應</a>\n                <a class=\"save\">收藏</a>\n                <a>\n                    <i class=\"expand {{icon}}\"></i>\n                    全尺寸檢視\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[huge]] comments\">\n    <div class=\"comment\">\n        <a class=\"avatar\">\n            <img src=\"!-user3-!\">\n        </a>\n        <div class=\"content\">\n            <a class=\"author\">Mac Taylor</a>\n            <div class=\"inline description\">\n                你是一個漁夫。\n            </div>\n            <div class=\"middoted actions\">\n                <a class=\"reply\">回應</a>\n                <a class=\"save\">收藏</a>\n                <a>\n                    <i class=\"expand {{icon}}\"></i>\n                    全尺寸檢視\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});