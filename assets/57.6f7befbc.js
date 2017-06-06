webpackJsonp([57],{

/***/ 35:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "表格",
		"description": "呈現統計資料的好方法。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/collections/table/"
		},
		{
			"type": "javascript",
			"to": "/collections/table/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "表格有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "可排序",
					"description": "使用者可以透過點擊欄位標頭來重新排序表格。排序的方式以系統語系設定為主，英文會以 A-Z 與 Z-A 作為排列，中文則是筆畫順序，俄文則是字母排序。",
					"code": "<table class=\"ts [[sortable]] table\">\n    <thead>\n        <tr>\n            <th>檔案名稱</th>\n            <th>中文分類</th>\n            <th>說明</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>endpoints.go</td>\n            <td>終端點</td>\n            <td>轉繼站會將收到的資訊轉換成終端點並進行下一個操作。</td>\n        </tr>\n        <tr>\n            <td>instrumenting.go</td>\n            <td>度量</td>\n            <td>將微服務中的函式處理時間整理成一定的格式並且傳送給 Prometheus 伺服器做統計視覺化整理。</td>\n        </tr>\n        <tr>\n            <td>logging.go</td>\n            <td>紀錄</td>\n            <td>觀察並且記錄微服務中所有函式的呼叫與流向。</td>\n        </tr>\n        <tr>\n            <td>main.go</td>\n            <td>主要</td>\n            <td>核心檔案，除了開發者外不應由其他人修改。</td>\n        </tr>\n    </tbody>\n</table>\n",
					"javascript": "ts('.ts.sortable.table').tablesort();\n",
					"autoExecute": true
				}
			]
		}
	]
};

/***/ })

});