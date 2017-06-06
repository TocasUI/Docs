webpackJsonp([29],{

/***/ 63:
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
	"styles": [
		{
			"category": "JavaScript",
			"description": "對話視窗有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "顯示與隱藏",
					"description": "如果你希望這個對話視窗能夠彈出並且遮蔽背景，那麼你就需要將其包含在一個 <span class=\"ts horizontal label\">.ts.modals.dimmer</span> 的淡化幕中。在淡化幕中的對話視窗預設是隱藏的，除非透過 JavaScript 呼叫該對話視窗才會顯示。\n<br>\n<table class=\"ts small stackable definition table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>show</td>\n            <td>顯示對話視窗。</td>\n        </tr>\n        <tr>\n            <td>hide</td>\n            <td>隱藏對話視窗。</td>\n        </tr>\n    </tbody>\n</table>\n",
					"code": "<div class=\"[[ts modals dimmer]]\">\n    <dialog id=\"modal\" class=\"ts basic modal\" open>\n        <i class=\"close {{icon}}\"></i>\n        <div class=\"ts icon {{header}}\">\n            <i class=\"smile {{icon}}\"></i>\n            您同意「合理使用條約」嗎\n        </div>\n        <div class=\"content\">\n            <p>保障任何人的著作權，其中包括二次創作，二次創作僅可在原作者未聲明否決下進行發佈和創作，在未經原作允許下衍生任何具有原作之內容，基於衍生理念與內容為判決要點，\n    原作必須基於合理使用之理念提出移除、上訴任何非符合合理使用概念的衍生內容，合理使用的理念如下：使用目的及性質其著重點在於內容是否有所轉化，如衍生創作另有新意，非僅複製原作內容。版權作品性質以真實、事實所闡述之作品較虛構作品來的能夠符合合理使用。使用版權作品的多寡引用少量的原創著作比起引用大量來要的符合合理使用，但倘若原創著作成為衍生著作之核心內容，即使少量的原創著作被引用，也較不可能符合合理使用之原則。使用行為對於版權作品的市場或價值之影響透過原創著作的內容而進行獲利並造成原創著作部分損害，較不符合合理使用之原則。</p>\n        </div>\n        <div class=\"actions\">\n            <button class=\"ts inverted basic deny {{button}}\">\n                不\n            </button>\n            <button class=\"ts inverted basic positive {{button}}\">\n                是的\n            </button>\n        </div>\n    </dialog>\n</div>\n",
					"javascript": "ts('#modal').modal(\"show\")\n"
				},
				{
					"title": "可關閉的",
					"description": "你可以讓使用者點擊周邊的淡化幕就關閉對話視窗。",
					"code": "<div class=\"ts modals dimmer\">\n    <dialog id=\"closableModal\" class=\"ts [[closable]] tiny modal\">\n        <div class=\"content\">\n            <p>點擊淡化幕也能夠關閉這個視窗，因為這是個 <span class=\"ts horizontal label\">closable</span> 對話視窗。</p>\n        </div>\n        <div class=\"actions\">\n            <button class=\"ts deny {{button}}\">\n                不\n            </button>\n            <button class=\"ts positive {{button}}\">\n                是的\n            </button>\n        </div>\n    </dialog>\n</div>\n",
					"javascript": "ts('#closableModal').modal(\"show\")\n"
				},
				{
					"title": "設置選項",
					"description": "在預設對話視窗行為中只要是類別名稱為 <span class=\"ts horizontal label\">.deny</span>、<span class=\"ts horizontal label\">.negative</span>、<span class=\"ts horizontal label\">.cancel</span> 的元素被按下都會呼叫<strong>取消回呼函式</strong>，而 <span class=\"ts horizontal label\">.approve</span>、<span class=\"ts horizontal label\">.positive</span>、<span class=\"ts horizontal label\">.ok</span> 則會呼叫<strong>成功回呼函式</strong>，你能夠在選項中自行改變這一點。\n<br>\n<table class=\"ts small stackable definition table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>approve</td>\n            <td>會呼叫同意回呼函式的元素選擇器（預設：<span class=\"ts horizontal label\">.approve, .positive, .ok</span>）</td>\n        </tr>\n        <tr>\n            <td>deny</td>\n            <td>會呼叫拒絕回呼函式的元素選擇器（預設：<span class=\"ts horizontal label\">.deny, .negative, .cancel</span>）</td>\n        </tr>\n        <tr>\n            <td>onApprove</td>\n            <td>同意時所被呼叫的函式，如果這個函式回傳 <span class=\"ts horizontal label\">false</span> 的話將不會關閉對話視窗。</td>\n        </tr>\n        <tr>\n            <td>onDeny</td>\n            <td>拒絕時所被呼叫的函式，如果這個函式回傳 <span class=\"ts horizontal label\">false</span> 的話將不會關閉對話視窗。</td>\n        </tr>\n    </tbody>\n</table>\n",
					"code": "<div class=\"ts modals dimmer\">\n    <dialog id=\"optionModal\" class=\"ts modal\">\n        <div class=\"header\">\n            逼啪拉畢叭啦霹拉吧\n        </div>\n        <div class=\"content\">\n            <p>到水的車風、天小望再，個院們著福！要清我個夫後於、說媽平神線連時該：光四報接。大親放書光？不議書組巴口保能近細，卻實到式石特約過。</p>\n            <p>代你是走是：路火改大兒地結後也傷車、明心沒教的童了共這英們點縣慢公早出光了得引多經！處技北夫們十是入就重得然親……法美機的義是小唱當解土量同吃，和樣做新機子他市很失吃出家。仍思老木海和部成是市的國兒生球要又辦中有對父色……形非帶海了。話安生當我球起。子立過財量展美義；那康自從遠飛心的一。</p>\n            <p>旅一的四課，開地還，的取理活數度青天化民家向的專自到及學，縣光自分個發：條越資大無庭；但進臺方隊的風斷此的小……一背書要西表靈：要藝太童汽也老天好住？兒沒生月路把時？不他謝、意強兩而一機，卻運持院是品的她腳。進和問半葉一所希知，景是育不、市音個在費我星國增成受呢來我子片易黃頭著，停可成人發才己金過位關長不一得主，好成引題於手魚，文指者價然、常首能國達另了石？且年養？好看了不、產行和越早反前門有，放轉國引環流的力是直算不福然。的館體後在利遠員我經現運懷況指正念像媽頭是中經！</p>\n        </div>\n        <div class=\"actions\">\n            <button class=\"ts deny {{button}}\">\n                不\n            </button>\n            <button class=\"ts positive {{button}}\">\n                是的\n            </button>\n        </div>\n    </dialog>\n</div>\n",
					"javascript": "ts('#optionModal').modal({\n    approve: '.positive, .approve, .ok',\n    deny  : '.negative, .deny, .cancel',\n    onDeny: function() {\n        alert(\"你一定要同意才行！\")\n        return false\n    },\n    onApprove: function() {\n        alert(\"太好了！\")\n    }\n}).modal(\"show\")\n"
				}
			]
		}
	]
};

/***/ })

});