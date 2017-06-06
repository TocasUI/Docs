webpackJsonp([19],{

/***/ 73:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "點心條",
		"description": "附著在螢幕角落且帶有通知文字的點心棒。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/snackbar/"
		},
		{
			"type": "javascript",
			"to": "/modules/snackbar/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "點心條有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "選項",
					"description": "<p>呼叫點心條時有這些參數選項可供使用。</p>\n<table class=\"ts small celled stackable definition table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>預設值</th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>content</td>\n            <td></td>\n            <td>點心條的訊息內容。</td>\n        </tr>\n        <tr>\n            <td>action</td>\n            <td></td>\n            <td>點心條的動作按鈕文字。</td>\n        </tr>\n        <tr>\n            <td>actionEmphasis</td>\n            <td></td>\n            <td>動作按鈕的語意，如：<span class=\"ts horizontal label\">primary</span>、<span class=\"ts horizontal label\">info</span>、<span class=\"ts horizontal label\">warning</span>⋯等。</td>\n        </tr>\n        <tr>\n            <td>hoverStay</td>\n            <td>false</td>\n            <td>當滑鼠移至點心條上時是否要延長點心條的存在時間。</td>\n        </tr>\n        <tr>\n            <td>onClose</td>\n            <td></td>\n            <td>當點心條關閉時所呼叫的函式。</td>\n        </tr>\n        <tr>\n            <td>onAction</td>\n            <td></td>\n            <td>當點心條上的動作按鈕被按下時所會呼叫的函式。</td>\n        </tr>\n    </tbody>\n</table>\n",
					"type": "code",
					"code": "<div class=\"ts snackbar\">\n    <div class=\"content\"></div>\n    <a class=\"action\"></a>\n</div>\n",
					"javascript": "ts('.snackbar').snackbar({\n    content: '檔案已經成功地送出了。',\n    action: '還原',\n    actionEmphasis: 'negative',\n    onAction: () => {\n        alert('檔案已順利還原！');\n    }\n});\n"
				}
			]
		}
	]
};

/***/ })

});