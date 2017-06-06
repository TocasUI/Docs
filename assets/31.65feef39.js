webpackJsonp([31],{

/***/ 61:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "嵌入物件",
		"description": "把東西搬進來囉。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/embed/"
		},
		{
			"type": "javascript",
			"to": "/modules/embed/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "嵌入物件有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "初始化",
					"description": "你需要透過 JavaScript 初始化嵌入物件才能正常運作並載入正確的內容。",
					"code": "<div class=\"ts embed\" data-source=\"youtube\" data-id=\"I6hHkf9mIcU\" data-placeholder=\"!-embed:karen-!\"></div>\n",
					"javascript": "ts('.ts.embed').embed();\n",
					"autoExecute": true
				},
				{
					"title": "中繼選項",
					"description": "<p>你能夠透過中繼選項來變更嵌入物件的一些參數或是外觀。</p>\n<table class=\"ts small stackable definition table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>註釋</th>\n            <th>範例</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>data-placeholder</td>\n            <td>預置封面的圖片路徑，這個圖片會在嵌入物件尚未載入時出現。</td>\n            <td><span class=\"ts horizontal label\">data-placeholder=\"image.png\"</span></td>\n        </tr>\n        <tr>\n            <td>data-options</td>\n            <td>這會變動嵌入物件的標籤（Attributes），你亦能透過選項使影片自動播放、顯示影片控制元件等。選項可以是鍵值，並以逗點分隔。</td>\n            <td><span class=\"ts horizontal label\">data-options=\"controls, data-user-id=12345\"</span></td>\n        </tr>\n        <tr>\n            <td>data-query</td>\n            <td>你能夠手動指定網址參數，當請求遠端影片時，這段參數會被追加在請求網址之後。像是指定 YouTube 的自動播放時很好用。</td>\n            <td><span class=\"ts horizontal label\">data-query=\"autoplay=true\"</span></td>\n        </tr>\n        <tr>\n            <td>data-icon</td>\n            <td>影片尚未播放前的圖示是可以修改的，可用來表示此嵌入物件的型態。相關圖示名稱請參考圖示元件。</td>\n            <td><span class=\"ts horizontal label\">data-icon=\"map\"</span></td>\n        </tr>\n    </tbody>\n</table>\n",
					"code": "<div class=\"ts embed\" data-source=\"youtube\" data-id=\"I6hHkf9mIcU\" [[data-query]]=\"autoplay=true\" [[data-placeholder]]=\"!-16:9-!\"></div>\n"
				}
			]
		}
	]
};

/***/ })

});