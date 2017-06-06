webpackJsonp([4],{

/***/ 88:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "統計數據",
		"description": "平均可能不超過 8 —— 公分。"
	},
	"intro": "<p>統計數據可以在數據下顯示一個說明標籤，用來敘述該數字的含意。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "統計數據具有不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的統計數據。",
					"code": "<div class=\"ts [[statistic]]\">\n    <div class=\"value\">42,689</div>\n    <div class=\"label\">拜訪次數</div>\n</div>\n"
				},
				{
					"title": "標籤於上",
					"description": "標籤也可以在統計數據的上方，你只需要變更順序。",
					"code": "<div class=\"ts statistic\">\n    <div class=\"[[label]]\">會員總數</div>\n    <div class=\"value\">999</div>\n</div>\n"
				},
				{
					"title": "語意",
					"description": "統計數據也可以帶有不同的語意。",
					"code": "<div class=\"ts [[primary]] statistic\">\n    <div class=\"value\">1,463</div>\n    <div class=\"label\">下載次數</div>\n</div>\n<div class=\"ts [[info]] statistic\">\n    <div class=\"value\">361</div>\n    <div class=\"label\">觀看次數</div>\n</div>\n<div class=\"ts [[warning]] statistic\">\n    <div class=\"value\">72%</div>\n    <div class=\"label\">負載頻率</div>\n</div>\n"
				},
				{
					"title": "肯定和否定",
					"description": "統計數據可以是肯定或是否定的。",
					"code": "<div class=\"ts [[positive]] statistic\">\n    <div class=\"value\">301+</div>\n    <div class=\"label\">正面</div>\n</div>\n<div class=\"ts [[negative]] statistic\">\n    <div class=\"value\">13</div>\n    <div class=\"label\">負面</div>\n</div>\n"
				},
				{
					"title": "反色",
					"description": "統計數據可以是反色的，用以呈現在不同的背景上。",
					"code": "<div class=\"ts inverted {{segment}}\">\n    <div class=\"ts [[inverted]] [[primary]] statistic\">\n        <div class=\"value\">1,463</div>\n        <div class=\"label\">下載次數</div>\n    </div>\n    <div class=\"ts [[inverted]] [[info]] statistic\">\n        <div class=\"value\">361</div>\n        <div class=\"label\">觀看次數</div>\n    </div>\n    <div class=\"ts [[inverted]] [[warning]] statistic\">\n        <div class=\"value\">72%</div>\n        <div class=\"label\">負載頻率</div>\n    </div>\n    <div class=\"ts [[inverted]] [[positive]] statistic\">\n        <div class=\"value\">301+</div>\n        <div class=\"label\">正面</div>\n    </div>\n    <div class=\"ts [[inverted]] [[negative]] statistic\">\n        <div class=\"value\">13</div>\n        <div class=\"label\">負面</div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "統計數據中包有不同性質的內容。",
			"items": [
				{
					"title": "數值",
					"description": "包含主要統計數據的數字、數值，其中也可以帶有圖示、文字或圖片。",
					"code": "<div class=\"ts statistics\">\n    <div class=\"statistic\">\n        <div class=\"[[value]]\">724</div>\n        <div class=\"label\">下載次數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"text [[value]]\">\n            三千六百<br>\n            八十萬\n        </div>\n        <div class=\"label\">檢視次數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"[[value]]\">\n            <i class=\"flag {{icon}}\"></i> 32\n        </div>\n        <div class=\"label\">已佔據</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"[[value]]\">\n            <img class=\"ts right spaced circular {{image}}\" src=\"!-user-!\">\n            Infinity-S\n        </div>\n        <div class=\"label\">人氣最高</div>\n    </div>\n</div>\n"
				},
				{
					"title": "異動",
					"description": "顯示與上次的差距、異動數值。",
					"code": "<div class=\"ts statistic\">\n    <div class=\"value\">\n        892\n        <div class=\"[[increment]]\">32</div>\n    </div>\n    <div class=\"label\">觀看次數</div>\n</div>\n<div class=\"ts statistic\">\n    <div class=\"value\">\n        18\n        <div class=\"[[decrement]]\">32</div>\n    </div>\n    <div class=\"label\">收藏次數</div>\n</div>\n<div class=\"ts statistic\">\n    <div class=\"value\">\n        1,725\n        <div class=\"[[fluctuation]]\">163+</div>\n    </div>\n    <div class=\"label\">購買次數</div>\n</div>\n"
				},
				{
					"title": "標籤",
					"description": "用來告訴使用者這個數據的含義。",
					"code": "<div class=\"ts statistic\">\n    <div class=\"value\">315</div>\n    <div class=\"[[label]]\">點擊次數</div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "你也可以更改統計數據的外觀。",
			"items": [
				{
					"title": "水平統計數據",
					"description": "讓統計數據以水平的方式擺放。",
					"code": "<div class=\"ts [[horizontal]] statistic\">\n    <div class=\"value\">315</div>\n    <div class=\"label\">點擊次數</div>\n</div>\n<div class=\"ts [[horizontal]] statistics\">\n    <div class=\"statistic\">\n        <div class=\"value\">724</div>\n        <div class=\"label\">下載次數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">916</div>\n        <div class=\"label\">檢視次數</div>\n    </div>\n</div>\n"
				},
				{
					"title": "分隔的",
					"description": "統計數據群組可以有分隔線劃分開每個統計項目。",
					"code": "<div class=\"ts [[divided]] statistics\">\n    <div class=\"statistic\">\n        <div class=\"value\">163</div>\n        <div class=\"label\">點擊數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">12</div>\n        <div class=\"label\">購買數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">2,847</div>\n        <div class=\"label\">評價數</div>\n    </div>\n</div>\n"
				},
				{
					"title": "均分寬度",
					"description": "統計數據的寬度可以平均劃分，從 <span class=\"ts horizontal label\">one</span> 到 <span class=\"ts horizontal label\">ten</span>。",
					"code": "<div class=\"ts [[three]] statistics\">\n    <div class=\"statistic\">\n        <div class=\"value\">1,463</div>\n        <div class=\"label\">下載次數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">361</div>\n        <div class=\"label\">觀看次數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">72%</div>\n        <div class=\"label\">負載頻率</div>\n    </div>\n</div>\n"
				},
				{
					"title": "流動寬度",
					"description": "如果你不想手動指定統計數據的寬度，你可以讓統計數據群組變成流動寬度，這會直接貼滿父容器的寬度並自動均分。",
					"code": "<div class=\"ts [[fluid]] divided statistics\">\n    <div class=\"statistic\">\n        <div class=\"value\">4,712</div>\n        <div class=\"label\">註冊人數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">1,394</div>\n        <div class=\"label\">昨日登入</div>\n    </div>\n</div>\n"
				},
				{
					"title": "垂直對齊",
					"description": "你可以變動統計數據中標籤的垂直對齊。",
					"code": "<div class=\"ts horizontal statistic\">\n    <div class=\"value\">4,126</div>\n    <div class=\"[[top aligned]] label\">置上對齊</div>\n</div>\n<div class=\"ts horizontal statistic\">\n    <div class=\"value\">8,973</div>\n    <div class=\"[[middle aligned]] label\">置中對齊</div>\n</div>\n<div class=\"ts horizontal statistic\">\n    <div class=\"value\">1,502</div>\n    <div class=\"[[bottom aligned]] label\">置下對齊</div>\n</div>\n"
				},
				{
					"title": "水平對齊",
					"description": "統計數據的水平對齊是可以變更的，例如對齊左邊而不是中間。",
					"code": "<div class=\"ts [[left aligned]] divided fluid statistics\">\n    <div class=\"statistic\">\n        <div class=\"value\">8,651</div>\n        <div class=\"label\">下載次數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">958</div>\n        <div class=\"label\">觀看次數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">16%</div>\n        <div class=\"label\">負載頻率</div>\n    </div>\n</div>\n"
				},
				{
					"title": "浮動",
					"description": "統計數據可以是浮動靠左或靠右。",
					"code": "<div class=\"ts segment\">\n    <div class=\"ts [[right floated]] statistic\">\n        <div class=\"value\">\n          2,204\n        </div>\n        <div class=\"label\">\n          觀看次數\n        </div>\n    </div>\n    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>\n    <div class=\"ts [[left floated]] statistic\">\n        <div class=\"value\">\n          2,204\n        </div>\n        <div class=\"label\">\n          觀看次數\n        </div>\n    </div>\n    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "統計數據有不同的尺寸可供選擇。",
					"code": "<div class=\"ts [[mini]] statistic\">\n    <div class=\"value\">42,689</div>\n    <div class=\"label\">迷你尺寸</div>\n</div>\n<div class=\"ts [[tiny]] statistic\">\n    <div class=\"value\">42,689</div>\n    <div class=\"label\">微小尺寸</div>\n</div>\n<div class=\"ts [[small]] statistic\">\n    <div class=\"value\">42,689</div>\n    <div class=\"label\">小型尺寸</div>\n</div>\n<div class=\"ts [[medium]] statistic\">\n    <div class=\"value\">42,689</div>\n    <div class=\"label\">一般尺寸</div>\n</div>\n<div class=\"ts [[large]] statistic\">\n    <div class=\"value\">42,689</div>\n    <div class=\"label\">稍大尺寸</div>\n</div>\n<div class=\"ts [[big]] statistic\">\n    <div class=\"value\">42,689</div>\n    <div class=\"label\">大型尺寸</div>\n</div>\n<div class=\"ts [[huge]] statistic\">\n    <div class=\"value\">42,689</div>\n    <div class=\"label\">巨大尺寸</div>\n</div>\n<div class=\"ts [[massive]] statistic\">\n    <div class=\"value\">42,689</div>\n    <div class=\"label\">重量級尺寸</div>\n</div>\n"
				}
			]
		},
		{
			"category": "群組",
			"description": "你能夠將多個統計數據放入單個容器成為一個群組。",
			"items": [
				{
					"title": "統計群組",
					"description": "一個最基本的統計數據群組。",
					"code": "<div class=\"ts [[statistics]]\">\n    <div class=\"statistic\">\n        <div class=\"value\">724</div>\n        <div class=\"label\">下載次數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">916</div>\n        <div class=\"label\">檢視次數</div>\n    </div>\n</div>\n"
				},
				{
					"title": "反色群組",
					"description": "你可以直接將統計群組設置為反色的，這樣就不需要替每個統計數據設置成反色。",
					"code": "<div class=\"ts inverted {{segment}}\">\n    <div class=\"ts [[inverted]] statistics\">\n        <div class=\"statistic\">\n            <div class=\"value\">1,948</div>\n            <div class=\"label\">已收藏</div>\n        </div>\n        <div class=\"statistic\">\n            <div class=\"value\">625</div>\n            <div class=\"label\">已分享</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "群組尺寸",
					"description": "統計群組可以擁有一個尺寸，省去替每個統計數據設置尺寸的困擾。",
					"code": "<div class=\"ts [[large]] statistics\">\n    <div class=\"statistic\">\n        <div class=\"value\">859</div>\n        <div class=\"label\">點擊次數</div>\n    </div>\n    <div class=\"statistic\">\n        <div class=\"value\">8,182</div>\n        <div class=\"label\">已觸及</div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});