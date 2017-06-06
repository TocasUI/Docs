webpackJsonp([62],{

/***/ 30:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "表單",
		"description": "以最有條理的方式送出資料。"
	},
	"intro": "<p>表單也具有網格系統，對於這部分並不熟悉的使用者還請參閱網格系統的教學。</p>\n<p>這個元件的設計很自由化，因此使用方式可能對初心者來說過度複雜，可以參考實際範例中的註冊頁面。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "表單有不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "最普通的表單。",
					"remove": "<br><br>",
					"code": "<form class=\"ts [[form]]\">\n    <div class=\"field\">\n        <label>姓氏</label>\n        <input type=\"text\">\n    </div>\n    <div class=\"field\">\n        <label>名字</label>\n        <input type=\"text\">\n    </div>\n    <div class=\"field\">\n        <div class=\"ts {{checkbox}}\">\n            <input id=\"agree\" type=\"checkbox\">\n            <label for=\"agree\">我同意伊繁星最高協議。</label>\n        </div>\n    </div>\n    <button class=\"ts {{button}}\">送出</button>\n</form>\n<br><br>\n<form class=\"ts [[form]]\">\n    <div class=\"ts dividing {{header}}\">結帳資訊</div>\n    <div class=\"field\">\n        <label>真實姓名</label>\n        <div class=\"two fields\">\n            <div class=\"field\">\n                <input type=\"text\" placeholder=\"姓氏\">\n            </div>\n            <div class=\"field\">\n                <input type=\"text\" placeholder=\"名字\">\n            </div>\n        </div>\n    </div>\n    <div class=\"field\">\n        <label>帳單地址</label>\n        <div class=\"fields\">\n            <div class=\"twelve wide field\">\n                <input type=\"text\" placeholder=\"道路地址\">\n            </div>\n            <div class=\"four wide field\">\n                <input type=\"text\" placeholder=\"縣市名稱\">\n            </div>\n        </div>\n    </div>\n    <button class=\"ts {{button}}\">送出</button>\n</form>\n"
				},
				{
					"title": "水平表單",
					"description": "表單可以切分成兩欄並且水平排列每個欄位。",
					"code": "<div class=\"ts [[horizontal]] form\">\n    <div class=\"field\">\n        <label>真實姓名</label>\n        <input type=\"text\">\n    </div>\n    <div class=\"field\">\n        <label>自我介紹</label>\n        <textarea rows=\"4\"></textarea>\n    </div>\n    <div class=\"field\">\n        <label>性別</label>\n        <div class=\"ts checkboxes\">\n            <div class=\"ts radio checkbox\">\n                <input id=\"firstMale\" type=\"radio\" name=\"firstGender\">\n                <label for=\"firstMale\">男性</label>\n            </div>\n            <div class=\"ts radio checkbox\">\n                <input id=\"firstFemale\" type=\"radio\" name=\"firstGender\">\n                <label for=\"firstFemale\">女性</label>\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "表單內可以有許多不同種類的內容、欄位。",
			"items": [
				{
					"title": "欄位",
					"description": "欄位是組成表單的最基本元素，而其中可以帶有標籤用以命名該欄位。",
					"code": "<div class=\"ts form\">\n    <div class=\"[[field]]\">\n        <label>使用者輸入欄位</label>\n        <input type=\"text\">\n    </div>\n</div>\n"
				},
				{
					"title": "提醒",
					"description": "欄位中可以新增提醒字串。",
					"code": "<div class=\"ts form\">\n    <div class=\"field\">\n        <label>帳號</label>\n        <input type=\"text\">\n        <[[small]]>你未來將無法更改這項設定。</[[small]]>\n    </div>\n</div>\n"
				},
				{
					"title": "文字訊息",
					"description": "但文字訊息會隨著欄位狀態而變更顏色。且比起提醒，文字訊息也稍微大了一點，可用做錯誤、警告提示。",
					"code": "<div class=\"ts form\">\n    <div class=\"error field\">\n        <label>帳號</label>\n        <input type=\"text\">\n        <span class=\"[[message]]\">不好了，這個帳號已經被搶先使用！</span>\n        <small>你未來將無法更改這項設定。</small>\n    </div>\n    <div class=\"field\">\n        <label>暱稱</label>\n        <input type=\"text\">\n        <span class=\"[[message]]\">找個適合你且不與他人重複的暱稱吧！</span>\n        <small>暱稱的長度需在 6 到 32 個字之間。</small>\n    </div>\n</div>\n"
				},
				{
					"title": "欄位群組",
					"description": "多個欄位可以被規劃成群組，並自動均分寬度，在行動裝置上將會縮成一行。",
					"code": "<div class=\"ts form\">\n    <div class=\"[[fields]]\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>中間名</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "文字區塊",
					"description": "你可以在表單內放入文字區塊的欄位，搭配 HTML5 原生的 <span class=\"ts horizontal label\">rows</span> 可以指定文字區塊的預設高度。",
					"code": "<div class=\"ts form\">\n    <div class=\"field\">\n        <label>長篇文章</label>\n        <[[textarea]]></[[textarea]]>\n    </div>\n    <div class=\"field\">\n        <label>指定五行高度</label>\n        <[[textarea]] rows=\"5\"></[[textarea]]>\n    </div>\n    <div class=\"resizable field\">\n        <label>自由伸縮</label>\n        <[[textarea]]></[[textarea]]>\n    </div>\n</div>\n"
				},
				{
					"title": "核取方塊",
					"description": "你也可以將核取方塊做成一個欄位來使用。如果你希望省去 <span class=\"ts horizontal label\">[id=\"\"]</span> 和 <span class=\"ts horizontal label\">[for=\"\"]</span> 的困擾， 那麼你可以參考<a href=\"/modules/checkbox\">核取方塊章節</a>。",
					"code": "<div class=\"ts form\">\n    <div class=\"field\">\n        <div class=\"ts [[checkbox]]\">\n            <input id=\"adult\" type=\"checkbox\">\n            <label for=\"adult\">我已滿 18 歲。</label>\n        </div>\n    </div>\n    <div class=\"field\">\n        <div class=\"ts [[checkbox]]\">\n            <input id=\"thirty\" type=\"checkbox\">\n            <label for=\"thirty\">我有 30 公分。</label>\n        </div>\n    </div>\n    <div class=\"field\">\n        <div class=\"ts [[toggle]] [[checkbox]]\">\n            <input id=\"fastCharging\" type=\"checkbox\">\n            <label for=\"fastCharging\" >開啟快速充電。</label>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "單選核取方塊",
					"description": "理所當然地，單選核取方塊也能夠是欄位。",
					"code": "<div class=\"ts form\">\n    <div class=\"field\">\n        <label>您最喜愛的食物？</label>\n        <div class=\"ts compact horizontal [[checkboxes]]\">\n            <div class=\"ts [[radio]] checkbox\">\n                <input id=\"mango\" type=\"radio\" name=\"fruits\">\n                <label for=\"mango\">芒果</label>\n            </div>\n            <div class=\"ts [[radio]] checkbox\">\n                <input id=\"apple\" type=\"radio\" name=\"fruits\">\n                <label for=\"apple\">蘋果</label>\n            </div>\n            <div class=\"ts [[radio]] checkbox\">\n                <input id=\"guava\" type=\"radio\" name=\"fruits\">\n                <label for=\"guava\">芭樂</label>\n            </div>\n        </div>\n    </div>\n    <div class=\"field\">\n        <label>您最常搭乘的交通工具？</label>\n        <div class=\"ts [[checkboxes]]\">\n            <div class=\"ts [[radio]] checkbox\">\n                <input id=\"bus\" type=\"radio\" name=\"traffic\">\n                <label for=\"bus\">公車</label>\n            </div>\n            <div class=\"ts [[radio]] checkbox\">\n                <input id=\"motor\" type=\"radio\" name=\"traffic\">\n                <label for=\"motor\">機車</label>\n            </div>\n            <div class=\"ts [[radio]] checkbox\">\n                <input id=\"walk\" type=\"radio\" name=\"traffic\">\n                <label for=\"walk\">步行</label>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "下拉式選單",
					"description": "你也能夠在欄位中放入下拉式選單。",
					"code": "<div class=\"ts form\">\n    <div class=\"field\">\n        <label>您所使用的系統版本為何？</label>\n        <[[select]]>\n            <option>macOS</option>\n            <option>Windows</option>\n            <option>Linux</option>\n        </[[select]]>\n    </div>\n</div>\n"
				},
				{
					"title": "訊息元件",
					"description": "別忘記，你還可以在表單中帶入訊息元件。",
					"code": "<div class=\"ts form\">\n    <div class=\"ts [[message]]\">\n        <div class=\"header\">不好了！</div>\n        <ul class=\"ts {{list}}\">\n            <li>請輸入您的姓氏。</li>\n            <li>請輸入您的名字。</li>\n        </ul>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "表單具有不同性質的狀態。",
			"items": [
				{
					"title": "讀取中",
					"description": "表單可以出現一個讀取指示器告訴使用者正在進行讀取。",
					"code": "<div class=\"ts [[loading]] form\">\n    <div class=\"field\">\n        <label>電子郵件地址</label>\n        <input type=\"email\">\n    </div>\n    <div class=\"ts submit {{button}}\">送出</div>\n</div>\n"
				},
				{
					"title": "欄位錯誤",
					"description": "表單中的欄位可以呈現為一個錯誤狀態。",
					"code": "<div class=\"ts form\">\n    <div class=\"two fields\">\n        <div class=\"field [[error]]\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n    <div class=\"field [[error]]\">\n      <label>性別</label>\n      <select>\n            <option>男性</option>\n            <option>女性</option>\n            <option>第三性</option>\n      </select>\n    </div>\n    <div class=\"inline field [[error]]\">\n        <div class=\"ts {{checkbox}}\">\n            <input id=\"agree2\" type=\"checkbox\">\n            <label for=\"agree2\">我同意伊繁星最高協議。</label>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "欄位成功",
					"description": "欄位也可以呈現為一個成功狀態。",
					"code": "<div class=\"ts form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field [[success]]\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "欄位警告",
					"description": "你也可以讓欄位呈現一個警告的狀態。",
					"code": "<div class=\"ts form\">\n    <div class=\"two fields\">\n        <div class=\"field [[warning]]\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "基本欄位語意",
					"description": "欄位的狀態表現方式可以更加的簡潔、基本化。",
					"code": "<div class=\"ts form\">\n    <div class=\"field [[basic]] success\">\n        <label>姓氏</label>\n        <input type=\"text\">\n    </div>\n    <div class=\"field [[basic]] warning\">\n        <label>名字</label>\n        <input type=\"text\">\n    </div>\n    <div class=\"field [[basic]] error\">\n        <label>電子郵件地址</label>\n        <input type=\"text\">\n    </div>\n</div>\n"
				},
				{
					"title": "停用欄位",
					"description": "欄位可以呈現一個已經被停用、不可用的狀態。",
					"code": "<div class=\"ts form\">\n    <div class=\"two fields\">\n        <div class=\"[[disabled]] field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"[[disabled]] field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "表單外觀",
			"description": "你可以點綴表單的外觀。",
			"items": [
				{
					"title": "尺寸",
					"description": "表單可以有不同的尺寸。",
					"code": "<div class=\"ts [[mini]] form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n<div class=\"ts [[tiny]] form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n<div class=\"ts [[small]] form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n<div class=\"ts [[medium]] form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n<div class=\"ts [[large]] form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n<div class=\"ts [[big]] form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n<div class=\"ts [[huge]] form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n<div class=\"ts [[massive]] form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "欄位外觀",
			"description": "欄位也具有不同的外觀。",
			"items": [
				{
					"title": "同行欄位",
					"description": "欄位和標籤可以是同一行的。",
					"code": "<div class=\"ts form\">\n    <div class=\"[[inline]] field\">\n      <label>名字</label>\n      <input type=\"text\" placeholder=\"全名\">\n    </div>\n</div>\n"
				},
				{
					"title": "網格寬度",
					"description": "欄位的寬度也可以用網格系統來劃分。",
					"code": "<div class=\"ts form\">\n    <div class=\"fields\">\n        <div class=\"[[seven wide]] field\">\n            <label>電子信箱地址</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"[[four wide]] field\">\n            <label>真實姓名</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"[[five wide]] field\">\n            <label>暱稱</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "必填",
					"description": "欄位可以顯示一個必填的樣式。",
					"code": "<div class=\"ts form\">\n    <div class=\"[[required]] field\">\n        <label>使用者輸入欄位</label>\n        <input type=\"text\">\n    </div>\n    <div class=\"[[required]] field\">\n        <div class=\"ts {{checkbox}}\">\n            <input id=\"agree3\" type=\"checkbox\">\n            <label for=\"agree3\">我同意伊繁星最高協議。</label>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "群組組織",
			"description": "透過 <span class=\"ts horizontal label\">&lt;fieldset&gt;</span> 標籤你可以包覆一個欄位群組，並凸顯、說明其群組的用意。",
			"items": [
				{
					"title": "基本組織",
					"description": "一個最基本的群組組織。",
					"code": "<div class=\"ts form\">\n    <div class=\"fields\">\n        <div class=\"field\">\n            <label>申辦人姓名</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>監護人姓名</label>\n            <input type=\"text\">\n        </div>\n    </div>\n    <[[fieldset]]>\n      <[[legend]]>機密資料</[[legend]]>\n      <div class=\"fields\">\n          <div class=\"field\">\n              <label>信用卡卡號</label>\n              <input type=\"text\" placeholder=\"xxxx-xxxx-xxxx-xxxx\">\n          </div>\n          <div class=\"field\">\n              <label>到期日</label>\n              <input type=\"text\" placeholder=\"月月/年年\">\n          </div>\n          <div class=\"field\">\n              <label>安全碼</label>\n              <input type=\"text\">\n          </div>\n      </div>\n    </[[fieldset]]>\n</div>\n"
				},
				{
					"title": "組織語氣",
					"description": "不同的發音語氣也可以用在欄位組織上，用以呈現需注意的地方。",
					"code": "<div class=\"ts form\">\n    <fieldset class=\"[[secondary]]\">\n      <div class=\"fields\">\n          <div class=\"field\">\n              <label>暱稱</label>\n              <input type=\"text\">\n          </div>\n          <div class=\"field\">\n              <label>帳號</label>\n              <input type=\"text\">\n          </div>\n      </div>\n    </fieldset>\n    <fieldset class=\"[[tertiary]]\">\n      <legend>選填資料</legend>\n      <div class=\"fields\">\n          <div class=\"field\">\n              <input type=\"text\" placeholder=\"住址\">\n          </div>\n          <div class=\"field\">\n              <input type=\"text\" placeholder=\"興趣\">\n          </div>\n      </div>\n    </fieldset>\n</div>\n"
				}
			]
		},
		{
			"category": "群組外觀",
			"description": "群組也具有不同的外觀。",
			"items": [
				{
					"title": "平均劃分",
					"description": "群組中的欄位寬度可以被平均劃分，從 <span class=\"ts horizontal label\">one</span> 至 <span class=\"ts horizontal label\">ten</span>。",
					"code": "<div class=\"ts form\">\n    <div class=\"[[four fields]]\">\n        <div class=\"field\">\n            <label>姓氏</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>中間名</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>名字</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>暱稱</label>\n            <input type=\"text\">\n        </div>\n    </div>\n    <div class=\"[[three fields]]\">\n        <div class=\"field\">\n            <label>帳號</label>\n            <input type=\"text\">\n        </div>\n        <div class=\"field\">\n            <label>密碼</label>\n            <input type=\"password\">\n        </div>\n        <div class=\"field\">\n            <label>電子郵件地址</label>\n            <input type=\"text\">\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "同行欄位",
					"description": "群組中的欄位和標籤可以是同一行的。",
					"code": "<div class=\"ts form\">\n    <div class=\"[[inline]] fields\">\n        <div class=\"eight wide field\">\n            <label>名字</label>\n            <input type=\"text\" placeholder=\"姓氏\">\n        </div>\n        <div class=\"three wide field\">\n            <input type=\"text\" placeholder=\"中間名\">\n        </div>\n        <div class=\"five wide field\">\n            <input type=\"text\" placeholder=\"名字\">\n        </div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});