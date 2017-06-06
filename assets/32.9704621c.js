webpackJsonp([32],{

/***/ 60:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "下拉式選單",
		"description": "打開之後會顛覆你先前以為不能的想法。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/dropdown/"
		},
		{
			"type": "javascript",
			"to": "/modules/dropdown/javascript/"
		}
	],
	"styles": [
		{
			"category": "種類",
			"description": "下拉式選單有多個種類。",
			"items": [
				{
					"title": "基本",
					"description": "最基本的下拉式選單。",
					"code": "<select class=\"ts [[basic]] dropdown\">\n    <option>1998</option>\n    <option>1999</option>\n    <option>2000</option>\n</select>\n"
				},
				{
					"title": "語意",
					"description": "基本的下拉式選單有著不同的語意。",
					"code": "<select class=\"ts basic [[primary]] dropdown\">\n    <option>1998</option>\n</select>\n<select class=\"ts basic [[info]] dropdown\">\n    <option>1998</option>\n</select>\n<select class=\"ts basic [[warning]] dropdown\">\n    <option>1998</option>\n</select>\n<select class=\"ts basic [[inverted]] dropdown\">\n    <option>1998</option>\n</select>\n"
				},
				{
					"title": "肯定和否定",
					"description": "肯定和否定的語氣可以用在基本的下拉式選單。",
					"code": "<select class=\"ts basic [[positive]] dropdown\">\n    <option>1998</option>\n</select>\n<select class=\"ts basic [[negative]] dropdown\">\n    <option>1998</option>\n</select>\n"
				},
				{
					"title": "多選項",
					"description": "選單可以一次展現出多個選項。",
					"code": "<select class=\"ts basic dropdown\" [[size]]=\"3\">\n    <option>1998</option>\n    <option>1999</option>\n    <option>2000</option>\n    <option>2001</option>\n    <option>2002</option>\n</select>\n"
				},
				{
					"title": "複選",
					"description": "選單可以加上 <span class=\"ts horizontal label\">multiple</span> 來允許複選。",
					"code": "<select class=\"ts basic dropdown\" size=\"3\" [[multiple]]>\n    <option>蘋果</option>\n    <option>西瓜</option>\n    <option>香蕉</option>\n    <option>菠蘿</option>\n    <option>拔鳳梨</option>\n</select>\n"
				}
			]
		},
		{
			"category": "群組",
			"description": "下拉式選單可以是一個群組。",
			"items": [
				{
					"title": "下拉式選單群組",
					"description": "一個最基本的下拉式選單群組。",
					"code": "<div class=\"ts [[dropdowns]]\">\n    <select class=\"ts basic dropdown\">\n        <option>1998</option>\n    </select>\n    <select class=\"ts basic dropdown\">\n        <option>07</option>\n    </select>\n    <select class=\"ts basic dropdown\">\n        <option>13</option>\n    </select>\n</div>\n"
				},
				{
					"title": "分開的",
					"description": "下拉式選單群組裡的選單可以是分開的。",
					"code": "<div class=\"ts [[separated]] dropdowns\">\n    <select class=\"ts basic dropdown\">\n        <option>1998</option>\n    </select>\n    <select class=\"ts basic dropdown\">\n        <option>07</option>\n    </select>\n    <select class=\"ts basic dropdown\">\n        <option>13</option>\n    </select>\n</div>\n"
				},
				{
					"title": "較寬鬆",
					"description": "分開的下拉式選單群組間隙可以較為寬鬆。",
					"code": "<div class=\"ts fluid separated [[relaxed]] dropdowns\">\n    <select class=\"ts basic dropdown\">\n        <option>1998</option>\n    </select>\n    <select class=\"ts basic dropdown\">\n        <option>07</option>\n    </select>\n    <select class=\"ts basic dropdown\">\n        <option>13</option>\n    </select>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "下拉式選單的內容由多種不同的結構組成。",
			"items": [
				{
					"title": "項目",
					"description": "項目是構成選單中最基本的一個部分。",
					"code": "<div class=\"ts floating dropdown labeled icon {{button}}\">\n    <i class=\"caret down {{icon}}\"></i>\n    <span class=\"text\">更多功能</span>\n    <div class=\"menu\">\n        <div class=\"[[item]]\">\n            新增\n        </div>\n        <div class=\"[[item]]\">\n            重新命名\n        </div>\n        <div class=\"[[item]]\">\n            下載並壓縮\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "標題",
					"description": "選單中可以有標題。",
					"code": "<div class=\"ts floating dropdown labeled icon {{button}}\">\n    <i class=\"filter {{icon}}\"></i>\n    <span class=\"text\">篩選</span>\n    <div class=\"menu\">\n        <div class=\"[[header]]\">\n            <i class=\"tags {{icon}}\"></i>\n            由下列標籤篩選\n        </div>\n        <div class=\"item\">\n            已完成\n        </div>\n        <div class=\"item\">\n            進行中\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "分隔線",
					"description": "選單中可以插入分隔線來劃分兩個區塊。",
					"code": "<div class=\"ts floating dropdown labeled icon {{button}}\">\n    <i class=\"users {{icon}}\"></i>\n    <span class=\"text\">選擇人物</span>\n    <div class=\"menu\">\n        <div class=\"item\">\n            橙希\n        </div>\n        <div class=\"item\">\n            吳雨藍\n        </div>\n        <div class=\"[[divider]]\"></div>\n        <div class=\"item\">\n            羽田白音\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "區段分隔線",
					"description": "分隔線的間距可以更大，用以加強分隔區段。",
					"code": "<div class=\"ts floating dropdown labeled icon {{button}}\">\n    <i class=\"users {{icon}}\"></i>\n    <span class=\"text\">選擇人物</span>\n    <div class=\"menu\">\n        <div class=\"item\">\n            橙希\n        </div>\n        <div class=\"item\">\n            吳雨藍\n        </div>\n        <div class=\"[[section divider]]\"></div>\n        <div class=\"item\">\n            羽田白音\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "群組分隔線",
					"description": "下拉式選單群組也能在中間插入自定義分隔線。",
					"code": "<div class=\"ts separated dropdowns\">\n    <select class=\"ts basic dropdown\">\n        <option>1998</option>\n    </select>\n    <div class=\"[[divider]]\">年</div>\n    <select class=\"ts basic dropdown\">\n        <option>07</option>\n    </select>\n    <div class=\"[[divider]]\">月</div>\n    <select class=\"ts basic dropdown\">\n        <option>13</option>\n    </select>\n    <div class=\"[[divider]]\">日</div>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "選單內可以有圖示點綴。",
					"code": "<div class=\"ts floating dropdown {{button}}\">\n    <span class=\"text\">您的心情？</span>\n    <div class=\"menu\">\n        <div class=\"item\">\n            <i class=\"frown [[icon]]\"></i>\n            難過\n        </div>\n        <div class=\"item\">\n            <i class=\"meh [[icon]]\"></i>\n            喔\n        </div>\n        <div class=\"item\">\n            <i class=\"smile [[icon]]\"></i>\n            開心\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "註釋",
					"description": "選單內的項目可以帶有註釋，用做詮釋項目的概要。",
					"code": "<div class=\"ts floating dropdown labeled icon {{button}}\">\n    <i class=\"caret down {{icon}}\"></i>\n    <span class=\"text\">移至資料夾</span>\n    <div class=\"menu\">\n        <div class=\"item\">\n            <span class=\"text\">圖片</span>\n            <span class=\"[[description]]\">今天上午</span>\n        </div>\n        <div class=\"item\">\n            <span class=\"text\">音樂</span>\n            <span class=\"[[description]]\">未曾變動</span>\n        </div>\n        <div class=\"item\">\n            <span class=\"text\">備份</span>\n            <span class=\"[[description]]\">一年前</span>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "下拉式選單的外觀有所不同。",
			"items": [
				{
					"title": "浮動",
					"description": "下拉式功能選單可以看起來像是浮動的，離按鈕更遠，陰影更深。",
					"code": "<div class=\"ts [[floating]] dropdown labeled icon {{button}}\">\n    <i class=\"caret down {{icon}}\"></i>\n    <span class=\"text\">更多功能</span>\n    <div class=\"menu\">\n        <div class=\"item\">\n            新增\n        </div>\n        <div class=\"item\">\n            重新命名\n        </div>\n        <div class=\"item\">\n            下載並壓縮\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "基本的下拉式選單有多種尺寸。",
					"code": "<select class=\"ts basic [[mini]] dropdown\">\n    <option>迷你</option>\n</select>\n<select class=\"ts basic [[tiny]] dropdown\">\n    <option>微小</option>\n</select>\n<select class=\"ts basic [[small]] dropdown\">\n    <option>小的</option>\n</select>\n<select class=\"ts basic [[medium]] dropdown\">\n    <option>適中</option>\n</select>\n<select class=\"ts basic [[large]] dropdown\">\n    <option>大的</option>\n</select>\n<select class=\"ts basic [[big]] dropdown\">\n    <option>大型</option>\n</select>\n<select class=\"ts basic [[huge]] dropdown\">\n    <option>巨大</option>\n</select>\n<select class=\"ts basic [[massive]] dropdown\">\n    <option>重量級</option>\n</select>\n"
				},
				{
					"title": "動作",
					"description": "下拉式選單的左右可以帶有具動作性質的元素。",
					"code": "<div class=\"ts [[action]] dropdown\">\n    <select class=\"ts basic dropdown\">\n        <option>1 個</option>\n    </select>\n    <div class=\"ts button\">\n        購買\n    </div>\n</div>\n"
				},
				{
					"title": "流動",
					"description": "下拉式選單可以是流動寬度，填滿容器寬度。",
					"code": "<select class=\"ts [[fluid]] basic dropdown\">\n    <option>Kasendra</option>\n    <option>Larafel</option>\n    <option>Kake</option>\n</select>\n"
				},
				{
					"title": "自動層疊",
					"description": "下拉式選單群組能夠在手機上自動層疊，而不是保持水平排列。欲看見效果，你可能需要透過手機來查看這個範例。",
					"code": "<div class=\"ts [[stackable]] dropdowns\">\n    <select class=\"ts basic dropdown\">\n        <option>1998</option>\n    </select>\n    <select class=\"ts basic dropdown\">\n        <option>07</option>\n    </select>\n    <select class=\"ts basic dropdown\">\n        <option>13</option>\n    </select>\n</div>\n"
				},
				{
					"title": "無邊框",
					"description": "下拉式選單可以沒有邊框。",
					"code": "<select class=\"ts [[borderless]] basic dropdown\">\n    <option>1998</option>\n    <option>1999</option>\n    <option>2000</option>\n</select>\n"
				}
			]
		}
	]
};

/***/ })

});