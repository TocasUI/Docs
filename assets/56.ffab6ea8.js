webpackJsonp([56],{

/***/ 36:
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
	"intro": "<p>表格不應用來當作網頁架構，而是用來呈現資料，如果你想要用類似的架構設計網頁，請參考格線系統。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "表格具有不同的種類。",
			"items": [
				{
					"title": "表格",
					"description": "一個最基本的表格。",
					"code": "<table class=\"ts [[table]]\">\n    <thead>\n        <tr>\n            <th>#</th>\n            <th>姓名</th>\n            <th>英文暱稱</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>1</td>\n            <td>卡莉絲</td>\n            <td>Caris</td>\n        </tr>\n        <tr>\n            <td>2</td>\n            <td>橙希</td>\n            <td>Orenji</td>\n        </tr>\n        <tr>\n            <td>3</td>\n            <td>吳雨藍</td>\n            <td>Aoi</td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <th colspan=\"3\">未到人數：3</th>\n        </tr>\n    </tfoot>\n</table>\n"
				},
				{
					"title": "網格的",
					"description": "表格可以看起來像是一個網格表格。",
					"code": "<table class=\"ts [[celled]] table\">\n    <thead>\n        <tr>\n            <th>#</th>\n            <th>姓名</th>\n            <th>英文暱稱</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>1</td>\n            <td>卡莉絲</td>\n            <td>Caris</td>\n        </tr>\n        <tr>\n            <td>2</td>\n            <td>橙希</td>\n            <td>Orenji</td>\n        </tr>\n        <tr>\n            <td>3</td>\n            <td>吳雨藍</td>\n            <td>Aoi</td>\n        </tr>\n    </tbody>\n</table>\n<br>\n<table class=\"ts very basic collapsing [[celled]] table\">\n    <thead>\n        <tr>\n            <th>員工</th>\n            <th>答對題數</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>\n                <h6 class=\"ts image {{header}}\">\n                    <img class=\"ts mini rounded {{image}}\" src=\"!-user-!\">\n                    <div class=\"content\">\n                        雷莉亞\n                        <div class=\"sub header\">科學家</div>\n                    </div>\n                </h6>\n            </td>\n            <td>\n                22\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <h6 class=\"ts image {{header}}\">\n                    <img class=\"ts mini rounded {{image}}\" src=\"!-user2-!\">\n                    <div class=\"content\">\n                        卡莉絲·伊繁特\n                        <div class=\"sub header\">初中生</div>\n                    </div>\n                </h6>\n            </td>\n            <td>\n                13\n            </td>\n        </tr>\n    </tbody>\n</table>\n<br>\n<table class=\"ts [[celled]] striped table\">\n    <thead>\n        <tr><th colspan=\"3\">\n            Git 倉庫\n        </th>\n    </tr></thead>\n    <tbody>\n        <tr>\n            <td class=\"collapsing\">\n                <i class=\"folder {{icon}}\"></i> node_modules\n            </td>\n            <td>第一次 Commit！</td>\n            <td class=\"right aligned collapsing\">10 小時前</td>\n        </tr>\n        <tr>\n            <td>\n                <i class=\"folder {{icon}}\"></i> test\n            </td>\n            <td>第一次 Commit！</td>\n            <td class=\"right aligned\">10 小時前</td>\n        </tr>\n        <tr>\n            <td>\n              <i class=\"folder {{icon}}\"></i> build\n            </td>\n            <td>第一次 Commit！</td>\n            <td class=\"right aligned\">10 小時前</td>\n        </tr>\n        <tr>\n            <td>\n                <i class=\"file outline {{icon}}\"></i> package.json\n            </td>\n            <td>第一次 Commit！</td>\n            <td class=\"right aligned\">10 小時前</td>\n        </tr>\n        <tr>\n            <td>\n                <i class=\"file outline {{icon}}\"></i> Gruntfile.js\n            </td>\n            <td>第一次 Commit！</td>\n            <td class=\"right aligned\">10 小時前</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "定義",
					"description": "表格中的第一個欄位都是該行的標題。",
					"remove": "<br>",
					"code": "<table class=\"ts [[definition]] table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>參數</th>\n            <th>說明</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>header()</td>\n            <td>title[<em>string</em>]</td>\n            <td>輸出網頁標頭。</td>\n        </tr>\n        <tr>\n            <td>footer()</td>\n            <td>path[<em>string</em>], name[<em>string</em>[<em>optional</em>]]</td>\n            <td>於網頁最底部輸出內容，可同時儲存內容至一個檔案。</td>\n        </tr>\n    </tbody>\n</table>\n<br>\n<table class=\"ts compact celled [[definition]] table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>真實姓名</th>\n            <th>註冊日期</th>\n            <th>電子郵件地址</th>\n            <th>高級會員</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td class=\"collapsing\">\n                <div class=\"ts toggle {{checkbox}}\">\n                    <input type=\"checkbox\" id=\"toggle1\">\n                    <label for=\"toggle1\"></label>\n                </div>\n            </td>\n            <td>吳雨藍</td>\n            <td>2014/12/24</td>\n            <td>aoi@misaka.net</td>\n            <td>否</td>\n        </tr>\n        <tr>\n            <td class=\"collapsing\">\n                <div class=\"ts toggle {{checkbox}}\">\n                    <input type=\"checkbox\" id=\"toggle2\">\n                    <label for=\"toggle2\"></label>\n                </div>\n            </td>\n            <td>橙希</td>\n            <td>2015/03/15</td>\n            <td>orenji@aoi.com</td>\n            <td>是</td>\n        </tr>\n        <tr>\n            <td class=\"collapsing\">\n                <div class=\"ts toggle {{checkbox}}\">\n                    <input type=\"checkbox\" id=\"toggle3\">\n                    <label for=\"toggle3\"></label>\n                </div>\n            </td>\n            <td>羽田白音</td>\n            <td>2016/01/20</td>\n            <td>shirone@yahoo.jp.com</td>\n            <td>是</td>\n        </tr>\n    </tbody>\n    <tfoot class=\"full-width\">\n        <tr>\n            <th></th>\n            <th colspan=\"4\">\n                <div class=\"ts right floated small primary labeled icon {{button}}\">\n                    <i class=\"user {{icon}}\"></i> 新增使用者\n                </div>\n                <div class=\"ts small {{button}}\">\n                    核准\n                </div>\n                <div class=\"ts small disabled {{button}}\">\n                    全部核准\n                </div>\n            </th>\n        </tr>\n    </tfoot>\n</table>\n"
				},
				{
					"title": "複雜結構",
					"description": "表格可以用來呈現更具複雜性的結構。",
					"code": "<table class=\"ts celled [[structured]] table\">\n    <thead>\n        <tr>\n            <th rowspan=\"2\">名稱</th>\n            <th rowspan=\"2\">種類</th>\n            <th rowspan=\"2\">檔案數量</th>\n            <th colspan=\"3\">程式語言</th>\n        </tr>\n        <tr>\n            <th>Ruby</th>\n            <th>JavaScript</th>\n            <th>Python</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Alpha 團隊</td>\n            <td>專案 1</td>\n            <td class=\"right aligned\">2</td>\n            <td class=\"center aligned\">\n                <i class=\"large positive checkmark {{icon}}\"></i>\n            </td>\n            <td></td>\n            <td></td>\n        </tr>\n        <tr>\n            <td rowspan=\"3\">Beta 團隊</td>\n            <td>專案 1</td>\n            <td class=\"right aligned\">52</td>\n            <td class=\"center aligned\">\n                <i class=\"large positive checkmark {{icon}}\"></i>\n            </td>\n            <td></td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>專案 2</td>\n            <td class=\"right aligned\">12</td>\n            <td></td>\n            <td class=\"center aligned\">\n                <i class=\"large positive checkmark {{icon}}\"></i>\n            </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>專案 3</td>\n            <td class=\"right aligned\">21</td>\n            <td class=\"center aligned\">\n                <i class=\"large positive checkmark {{icon}}\"></i>\n            </td>\n            <td></td>\n            <td></td>\n        </tr>\n    </tbody>\n</table>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "表格中的欄位可以具有不同的狀態。",
			"items": [
				{
					"title": "肯定和否定",
					"description": "欄位或一整行都可以具有肯定或否定的含義。",
					"code": "<table class=\"ts table\">\n    <thead>\n        <tr>\n            <th>名稱</th>\n            <th>英文名稱</th>\n            <th>計畫狀態</th>\n            <th>說明</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>可憐</td>\n            <td>Karen</td>\n            <td class=\"[[positive]]\"><i class=\"check {{icon}}\"></i> 已完成</td>\n            <td>多國語元支援的函式庫，協助網站跨國交際。</td>\n        </tr>\n        <tr class=\"[[positive]]\">\n            <td>美由紀</td>\n            <td>Miyuki</td>\n            <td><i class=\"check {{icon}}\"></i> 已完成</td>\n            <td>協助圖像處理的類別，必須要安裝 Imagick。</td>\n        </tr>\n        <tr>\n            <td>卡莉絲</td>\n            <td>Caris</td>\n            <td class=\"[[negative]]\"><i class=\"dont {{icon}}\"></i> 尚未完成</td>\n            <td>一個基於 HTML5 的遊戲引擎。</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "錯誤",
					"description": "錯誤和否定一樣，只是樣式名稱不同，適合用在錯誤的地方。",
					"code": "<table class=\"ts table\">\n    <thead>\n        <tr>\n            <th>工作區域</th>\n            <th>目前狀態</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>TeaMeow</td>\n            <td class=\"positive\"><i class=\"check {{icon}}\"></i>已完成</td>\n        </tr>\n        <tr class=\"error\">\n            <td>Safari</td>\n            <td><i class=\"close {{icon}}\"></i>已停止</td>\n        </tr>\n        <tr>\n            <td>Isuka</td>\n            <td class=\"[[error]]\"><i class=\"close {{icon}}\"></i>發生錯誤</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "警告",
					"description": "表格內可以有單個或是多個欄位呈現一個警告的狀態。",
					"code": "<table class=\"ts table\">\n    <thead>\n        <tr>\n            <th>工作區域</th>\n            <th>目前狀態</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Avane</td>\n            <td class=\"[[warning]]\"><i class=\"caution {{icon}}\"></i>需要初始化</td>\n        </tr>\n        <tr>\n            <td>Caris</td>\n            <td>尚未啟動</td>\n        </tr>\n        <tr class=\"[[warning]]\">\n            <td>Isuka</td>\n            <td><i class=\"caution {{icon}}\"></i>需要檢查</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "啟用中",
					"description": "顯示一行、欄位於啟用中，或是被選取的樣式。",
					"code": "<table class=\"ts table\">\n    <thead>\n        <tr>\n            <th>使用者名稱</th>\n            <th>電子郵件信箱</th>\n            <th>生日</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr class=\"[[active]]\">\n            <td>yamiodymel</td>\n            <td>yamiodymel@yamiodymel.com</td>\n            <td>1998/07/13</td>\n        </tr>\n        <tr>\n            <td>mac0017817</td>\n            <td>mac0017817@mac0017817.com</td>\n            <td>1998/07/13</td>\n        </tr>\n        <tr>\n            <td class=\"[[active]]\">shiroteacat</td>\n            <td>shiroteacat@shiroteacat.com</td>\n            <td>1998/07/13</td>\n        </tr>\n    </tbody>\n    <tbody></tbody>\n</table>\n"
				},
				{
					"title": "已停用",
					"description": "顯示一行、欄位已停用。",
					"code": "<table class=\"ts table\">\n    <thead>\n        <tr>\n            <th>使用者名稱</th>\n            <th>電子郵件信箱</th>\n            <th>生日</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr class=\"[[disabled]]\">\n            <td>yamiodymel</td>\n            <td>yamiodymel@yamiodymel.com</td>\n            <td>1998/07/13</td>\n        </tr>\n        <tr>\n            <td>mac0017817</td>\n            <td>mac0017817@mac0017817.com</td>\n            <td>1998/07/13</td>\n        </tr>\n        <tr>\n            <td class=\"[[disabled]]\">shiroteacat</td>\n            <td>shiroteacat@shiroteacat.com</td>\n            <td>1998/07/13</td>\n        </tr>\n    </tbody>\n    <tbody></tbody>\n</table>\n"
				},
				{
					"title": "指示的",
					"description": "你可以用特殊方式凸顯表格中的其中一行、欄。",
					"code": "<table class=\"ts celled table\">\n    <thead>\n        <tr>\n            <th>動畫名稱</th>\n            <th>放映起始日期</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>WorldEnd: What do you do at the end of the world? Are you busy? Will you save us?</td>\n            <td>Apr 11, 2017</td>\n        </tr>\n        <tr class=\"[[indicated]]\">\n            <td>Eromanga Sensei</td>\n            <td>Apr 09, 2017</td>\n        </tr>\n        <tr class=\"negative [[indicated]]\">\n            <td>Armed Girl's Machiavellism</td>\n            <td>Apr 05, 2017</td>\n        </tr>\n        <tr class=\"info [[indicated]]\">\n            <td>Grimoire of Zero</td>\n            <td class=\"positive [[indicated]]\">Apr 10, 2017</td>\n        </tr>\n        <tr>\n            <td class=\"primary [[indicated]]\">Attack on Titan Season 2</td>\n            <td>Apr 01, 2017</td>\n        </tr>\n        <tr class=\"warning [[indicated]]\">\n            <td>Akashic Records of Bastard Magic Instructor;</td>\n            <td>Apr 04, 2017</td>\n        </tr>\n    </tbody>\n</table>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "表格可以透過額外的樣式來強化外觀。",
			"items": [
				{
					"title": "語意",
					"description": "欄位或行都能有語意。",
					"code": "<table class=\"ts table\">\n    <thead>\n        <tr>\n            <th>工作區域</th>\n            <th>目前狀態</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Avane</td>\n            <td class=\"[[primary]]\">\n                <i class=\"unhide {{icon}}\"></i> 主要目的\n            </td>\n        </tr>\n        <tr class=\"[[info]]\">\n            <td>Iknore</td>\n            <td>\n                <i class=\"caution {{icon}}\"></i> 尚未確認\n            </td>\n        </tr>\n        <tr>\n            <td>Sana</td>\n            <td class=\"[[inverted]]\">\n                <i class=\"question {{icon}}\"></i> 反色\n            </td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "註釋",
					"description": "你可以透過 <span class=\"ts horizontal label\">&lt;caption&gt;</span> 來詮釋一個表格。",
					"code": "<table class=\"ts table\">\n    <thead>\n        <tr>\n            <th>姓名</th>\n            <th>電子郵件地址</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>卡莉絲</td>\n            <td>caris@gmail.com</td>\n        </tr>\n        <tr>\n            <td>橙希</td>\n            <td>orenji@gmail.com</td>\n        </tr>\n        <tr>\n            <td>吳雨藍</td>\n            <td>aoi@gmail.com</td>\n        </tr>\n    </tbody>\n    <[[caption]]>\n        這是個使用者清單列表與相關資料，請注意這屬於商業機密，不應該外露或公開給第三者得知。\n    </[[caption]]>\n</table>\n"
				},
				{
					"title": "單行",
					"description": "欄位可以保持單行而避免因擠壓而自動換行。",
					"code": "<table class=\"ts [[single line]] table\">\n    <thead>\n        <tr>\n            <th>使用者名稱</th>\n            <th>電子郵件信箱</th>\n            <th>生日</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>yamiodymel</td>\n            <td>yamiodymel@yamiodymel.com</td>\n            <td>1998/07/13</td>\n        </tr>\n        <tr>\n            <td>mac0017817</td>\n            <td>mac0017817@mac0017817.com</td>\n            <td>1998/07/13</td>\n        </tr>\n        <tr>\n            <td>shiroteacat</td>\n            <td>shiroteacat@shiroteacat.com</td>\n            <td>1998/07/13</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "固定",
					"description": "表格可以套用 <span class=\"ts horizontal label\">table-layout: fixed</span> 來讓表格內容有固定的寬度。\n",
					"code": "<table class=\"ts [[fixed]] table\">\n    <thead>\n        <tr>\n            <th>文章名稱</th>\n            <th>狀態</th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Lorem Ipsum</td>\n            <td>核准</td>\n            <td>Etiam aliquet pulvinar sapien, et venenatis orci placerat vitae. Sed posuere bibendum ante et porttitor. Fusce auctor.</td>\n        </tr>\n        <tr>\n            <td>Etiam aliquet</td>\n            <td>核准</td>\n            <td>Nulla sed ex eget ligula gravida condimentum non id dui. Donec rutrum accumsan augue vitae pretium.</td>\n        </tr>\n        <tr>\n            <td>Aliquam</td>\n            <td>拒絕</td>\n            <td>Curabitur volutpat tristique erat ut pulvinar. Aliquam varius, mi ut convallis rhoncus, nunc dolor feugiat mi.</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"subtitle": "和單行搭配的固定表格",
					"description": "這將會讓的欄位遇到該換行時不進行換行，並以 <span class=\"ts horizontal label\">...</span> 安插於文字後方。",
					"code": "<table class=\"ts [[fixed]] [[single line]] table\">\n    <thead>\n        <tr>\n            <th>文章名稱</th>\n            <th>狀態</th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Lorem Ipsum</td>\n            <td>核准</td>\n            <td>我是一個有點長的註釋，當我想要換行的時候卻會因為有了 \"single line\" 而不能換行，所以我的後面會顯示「...」。</td>\n        </tr>\n        <tr>\n            <td>Etiam aliquet</td>\n            <td>核准</td>\n            <td>這是一個比較短的註釋。</td>\n        </tr>\n        <tr>\n            <td>Aliquam</td>\n            <td>拒絕</td>\n            <td>短註釋。</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "無框線",
					"description": "一個表格可以沒有框線。",
					"code": "<table class=\"ts [[borderless]] table\">\n    <thead>\n        <tr>\n            <th>#</th>\n            <th>姓名</th>\n            <th>英文暱稱</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>1</td>\n            <td>卡莉絲</td>\n            <td>Caris</td>\n        </tr>\n        <tr>\n            <td>2</td>\n            <td>橙希</td>\n            <td>Orenji</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "自動重疊",
					"description": "表格可以在行動裝置上自動重疊。",
					"code": "<table class=\"ts [[stackable]] table\">\n    <thead>\n        <tr>\n            <th>文章名稱</th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Lorem Ipsum</td>\n            <td>Etiam aliquet pulvinar sapien, et venenatis orci placerat vitae. Sed posuere bibendum ante et porttitor. Fusce auctor.</td>\n        </tr>\n        <tr>\n            <td>Etiam aliquet</td>\n            <td>Nulla sed ex eget ligula gravida condimentum non id dui. Donec rutrum accumsan augue vitae pretium.</td>\n        </tr>\n        <tr>\n            <td>Aliquam</td>\n            <td>Curabitur volutpat tristique erat ut pulvinar. Aliquam varius, mi ut convallis rhoncus, nunc dolor feugiat mi.</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "可選擇行",
					"description": "表格中的「行」可以像是支援選擇一樣，讓滑鼠移到上面或是點擊時有效果。",
					"remove": "<br>",
					"code": "<table class=\"ts [[selectable]] table\">\n    <thead>\n        <tr>\n            <th>工作區域</th>\n            <th>目前狀態</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Safari</td>\n            <td>已停止</td>\n        </tr>\n        <tr>\n            <td>Isuka</td>\n            <td>發生錯誤</td>\n        </tr>\n        <tr>\n            <td>Karen</td>\n            <td>尚未確認</td>\n        </tr>\n    </tbody>\n</table>\n<br>\n<table class=\"ts inverted [[selectable]] table\">\n    <thead>\n        <tr>\n            <th>工作區域</th>\n            <th>目前狀態</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Safari</td>\n            <td>已停止</td>\n        </tr>\n        <tr>\n            <td>Isuka</td>\n            <td>發生錯誤</td>\n        </tr>\n        <tr>\n            <td>Karen</td>\n            <td>尚未確認</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "可選擇欄位",
					"description": "表格中的欄位可以被選擇或是提供點擊事件。",
					"code": "<table class=\"ts celled table\">\n    <thead>\n        <tr>\n            <th>名稱</th>\n            <th>狀態</th>\n            <th>編輯</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Yami</td>\n            <td>沒有動作</td>\n            <td class=\"[[selectable]]\">\n                <a href=\"#\">編輯</a>\n            </td>\n        </tr>\n        <tr>\n          <td>Jamie</td>\n          <td>已核准</td>\n          <td class=\"[[selectable]]\">\n            <a href=\"#\">編輯</a>\n          </td>\n        </tr>\n        <tr class=\"warning\">\n            <td>John</td>\n            <td>沒有動作</td>\n            <td class=\"[[selectable]] warning\">\n                <a href=\"#\">需要變更</a>\n            </td>\n        </tr>\n        <tr>\n            <td>Jamie</td>\n            <td class=\"positive\">已核准</td>\n            <td class=\"[[selectable]] positive\">\n                <a href=\"#\">核准</a>\n            </td>\n        </tr>\n        <tr>\n            <td>Jill</td>\n            <td class=\"negative\">已拒絕</td>\n            <td class=\"[[selectable]] negative\">\n                <a href=\"#\">移除</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "附著",
					"description": "表格可以與另一個表格或是元件附著在一起。",
					"code": "<table class=\"ts [[top attached]] table\">\n    <tbody>\n        <tr>\n            <td>Sciuridae Li</td>\n            <td>Mac Taylor</td>\n            <td>李政皇</td>\n        </tr>\n    </tbody>\n</table>\n<table class=\"ts celled [[attached]] table\">\n    <tbody>\n        <tr>\n            <td>Yan-K</td>\n            <td>Fan Kangtai</td>\n            <td>SpaceTimeHalf</td>\n        </tr>\n        <tr>\n            <td>Sean Wei</td>\n            <td>Hiram Huang</td>\n            <td>Tsundere Chen</td>\n        </tr>\n        <tr>\n            <td>Sciuridae</td>\n            <td>Jasper Yu</td>\n            <td>Chris</td>\n        </tr>\n    </tbody>\n</table>\n<table class=\"ts [[bottom attached]] table\">\n    <tbody>\n        <tr>\n            <td>Choukai</td>\n            <td>Henry Wu</td>\n            <td>Allen Chou</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "垂直對齊",
					"description": "你可以改變表格中欄位的文字垂直對齊。",
					"code": "<table class=\"ts striped table\">\n    <thead>\n        <tr>\n            <th>名稱</th>\n            <th>狀態</th>\n            <th>筆記</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr class=\"[[top aligned]]\">\n            <td>John</td>\n            <td>已核准</td>\n            <td class=\"[[top aligned]]\">\n                貼齊頂部<br>\n                貼齊頂部\n            </td>\n        </tr>\n        <tr>\n            <td>Jamie</td>\n            <td class=\"[[bottom aligned]]\">貼齊底部</td>\n            <td>\n                記事錄<br>\n                1<br>\n                2<br>\n            </td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "水平對齊",
					"description": "表格中欄位的文字水平對齊也可以被改變，例如靠左對齊、右，甚至置中。",
					"code": "<table class=\"ts striped table\">\n    <thead>\n        <tr>\n            <th>名稱</th>\n            <th>狀態</th>\n            <th class=\"[[right aligned]]\">筆記</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr class=\"[[center aligned]]\">\n            <td>Yami</td>\n            <td>置中</td>\n            <td class=\"[[right aligned]]\">我靠右</td>\n        </tr>\n        <tr>\n            <td>Jamie</td>\n            <td>已核准</td>\n            <td class=\"[[right aligned]]\">靠右</td>\n        </tr>\n        <tr>\n            <td>Jill</td>\n            <td class=\"[[left aligned]]\">靠左邊</td>\n            <td class=\"[[right aligned]]\">靠右</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "條紋",
					"description": "讓表格具有條紋感。",
					"code": "<table class=\"ts [[striped]] table\">\n    <thead>\n        <tr>\n            <th>檔案名稱</th>\n            <th>分類</th>\n            <th>說明</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>file.php</td>\n            <td>Controller</td>\n            <td>用來處理檔案相關程式。</td>\n        </tr>\n        <tr>\n            <td>star.php</td>\n            <td>Controller</td>\n            <td>處理星號程式。</td>\n        </tr>\n        <tr>\n            <td>favorite.php</td>\n            <td>Model</td>\n            <td>處理最愛的項目。</td>\n        </tr>\n        <tr>\n            <td>user.php</td>\n            <td>View</td>\n            <td>處理使用者頁面的模板視圖。</td>\n        </tr>\n        <tr>\n            <td>database.php</td>\n            <td>Model</td>\n            <td>和資料庫負責聯繫的模型。</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "基本",
					"description": "表格可以只剩下基本的構造線條。",
					"remove": "<br>",
					"code": "<table class=\"ts [[basic]] table\">\n    <thead>\n        <tr>\n            <th>檔案名稱</th>\n            <th>分類</th>\n            <th>說明</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>file.php</td>\n            <td>Controller</td>\n            <td>用來處理檔案相關程式。</td>\n        </tr>\n        <tr>\n            <td>star.php</td>\n            <td>Controller</td>\n            <td>處理星號程式。</td>\n        </tr>\n        <tr>\n            <td>favorite.php</td>\n            <td>Model</td>\n            <td>處理最愛的項目。</td>\n        </tr>\n    </tbody>\n</table>\n<br>\n<table class=\"ts [[very basic]] table\">\n    <thead>\n        <tr>\n            <th>檔案名稱</th>\n            <th>分類</th>\n            <th>說明</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>file.php</td>\n            <td>Controller</td>\n            <td>用來處理檔案相關程式。</td>\n        </tr>\n        <tr>\n            <td>star.php</td>\n            <td>Controller</td>\n            <td>處理星號程式。</td>\n        </tr>\n        <tr>\n            <td>favorite.php</td>\n            <td>Model</td>\n            <td>處理最愛的項目。</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "閉合欄位",
					"description": "欄位可以只占欄位內容需要的空間，而不是自動增寬留下過多的空白。",
					"code": "<table class=\"ts table\">\n    <tbody>\n        <tr>\n            <td class=\"[[collapsing]]\">\n              <i class=\"folder {{icon}}\"></i> node_modules\n            </td>\n            <td>第一次 Commit！</td>\n            <td>10 小時前</td>\n        </tr>\n        <tr>\n            <td>\n              <i class=\"folder {{icon}}\"></i> test\n            </td>\n            <td>第一次 Commit！</td>\n            <td>10 小時前</td>\n        </tr>\n        <tr>\n            <td>\n              <i class=\"folder {{icon}}\"></i> build\n            </td>\n            <td>第一次 Commit！</td>\n            <td>10 小時前</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "欄位均分",
					"description": "你可以從 <span class=\"ts horizontal label\">one</span> 至 <span class=\"ts horizontal label\">ten</span> 來選出你要將欄位自動均分為幾等分。",
					"code": "<table class=\"ts [[three column]] table\">\n    <thead>\n        <tr>\n            <th>#</th>\n            <th>姓名</th>\n            <th>英文暱稱</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>1</td>\n            <td>卡莉絲</td>\n            <td>Caris</td>\n        </tr>\n        <tr>\n            <td>2</td>\n            <td>橙希</td>\n            <td>Orenji</td>\n        </tr>\n        <tr>\n            <td>3</td>\n            <td>吳雨藍</td>\n            <td>Aoi</td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <th>3 個人</th>\n            <th>2 個核准</th>\n            <th></th>\n        </tr>\n    </tfoot>\n</table>\n"
				},
				{
					"title": "欄位網格",
					"description": "表格也可以利用像是網格系統一樣的功能來對欄位的寬度進行規劃。",
					"code": "<table class=\"ts table\">\n    <thead>\n        <tr>\n            <th class=\"[[ten wide]]\">名稱</th>\n            <th class=\"[[six wide]]\">狀態</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>John</td>\n            <td>已核准</td>\n        </tr>\n        <tr>\n            <td>Jamie</td>\n            <td>已核准</td>\n        </tr>\n        <tr>\n            <td>Jill</td>\n            <td>已否決</td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <th>3 個人</th>\n            <th>2 個核准</th>\n        </tr>\n    </tfoot>\n</table>\n"
				},
				{
					"title": "閉合表格",
					"description": "表格本身可以只占用最小寬度。",
					"code": "<table class=\"ts [[collapsing]] table\">\n    <thead>\n        <tr>\n            <th>#</th>\n            <th>姓名</th>\n            <th>英文暱稱</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>1</td>\n            <td>卡莉絲</td>\n            <td>Caris</td>\n        </tr>\n        <tr>\n            <td>2</td>\n            <td>橙希</td>\n            <td>Orenji</td>\n        </tr>\n        <tr>\n            <td>3</td>\n            <td>吳雨藍</td>\n            <td>Aoi</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "增加內距",
					"description": "你可以增加欄位的內距。",
					"code": "<table class=\"ts [[padded]] table\">\n    <thead>\n        <tr>\n            <th>文章名稱</th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Lorem Ipsum</td>\n            <td>Etiam aliquet pulvinar sapien, et venenatis orci placerat vitae. Sed posuere bibendum ante et porttitor. Fusce auctor.</td>\n        </tr>\n        <tr>\n            <td>Etiam aliquet</td>\n            <td>Nulla sed ex eget ligula gravida condimentum non id dui. Donec rutrum accumsan augue vitae pretium.</td>\n        </tr>\n        <tr>\n            <td>Aliquam</td>\n            <td>Curabitur volutpat tristique erat ut pulvinar. Aliquam varius, mi ut convallis rhoncus, nunc dolor feugiat mi.</td>\n        </tr>\n    </tbody>\n</table>\n<br>\n<table class=\"ts [[very padded]] table\">\n    <thead>\n        <tr>\n            <th>文章名稱</th>\n            <th>註釋</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Lorem Ipsum</td>\n            <td>Etiam aliquet pulvinar sapien, et venenatis orci placerat vitae. Sed posuere bibendum ante et porttitor. Fusce auctor.</td>\n        </tr>\n        <tr>\n            <td>Etiam aliquet</td>\n            <td>Nulla sed ex eget ligula gravida condimentum non id dui. Donec rutrum accumsan augue vitae pretium.</td>\n        </tr>\n        <tr>\n            <td>Aliquam</td>\n            <td>Curabitur volutpat tristique erat ut pulvinar. Aliquam varius, mi ut convallis rhoncus, nunc dolor feugiat mi.</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "縮減",
					"description": "表格的內距可以稍微縮減用以呈現更多的行數。",
					"code": "<table class=\"ts [[compact]] table\">\n    <thead>\n        <tr>\n            <th>檔案名稱</th>\n            <th>分類</th>\n            <th>說明</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>file.php</td>\n            <td>Controller</td>\n            <td>用來處理檔案相關程式。</td>\n        </tr>\n        <tr>\n            <td>star.php</td>\n            <td>Controller</td>\n            <td>處理星號程式。</td>\n        </tr>\n        <tr>\n            <td>favorite.php</td>\n            <td>Model</td>\n            <td>處理最愛的項目。</td>\n        </tr>\n        <tr>\n            <td>user.php</td>\n            <td>View</td>\n            <td>處理使用者頁面的模板視圖。</td>\n        </tr>\n        <tr>\n            <td>database.php</td>\n            <td>Model</td>\n            <td>和資料庫負責聯繫的模型。</td>\n        </tr>\n    </tbody>\n</table>\n"
				},
				{
					"title": "尺寸",
					"description": "表格有不同的尺寸可供選擇。",
					"code": "<table class=\"ts [[mini]] celled table\">\n    <tbody>\n        <tr>\n            <td>mini</td>\n            <td>迷你</td>\n            <td>這是一個迷你的表格。</td>\n        </tr>\n    </tbody>\n</table>\n<table class=\"ts [[tiny]] celled table\">\n    <tbody>\n        <tr>\n            <td>tiny</td>\n            <td>微小</td>\n            <td>這是一個微小的表格。</td>\n        </tr>\n    </tbody>\n</table>\n<table class=\"ts [[small]] celled table\">\n    <tbody>\n        <tr>\n            <td>small</td>\n            <td>小的</td>\n            <td>這是一個小的表格。</td>\n        </tr>\n    </tbody>\n</table>\n<table class=\"ts [[medium]] celled table\">\n    <tbody>\n        <tr>\n            <td>medium</td>\n            <td>適中</td>\n            <td>這是一個適中的表格。</td>\n        </tr>\n    </tbody>\n</table>\n<table class=\"ts [[large]] celled table\">\n    <tbody>\n        <tr>\n            <td>large</td>\n            <td>大的</td>\n            <td>這是一個大的表格。</td>\n        </tr>\n    </tbody>\n</table>\n<table class=\"ts [[big]] celled table\">\n    <tbody>\n        <tr>\n            <td>big</td>\n            <td>大型</td>\n            <td>這是一個大型的表格。</td>\n        </tr>\n    </tbody>\n</table>\n<table class=\"ts [[huge]] celled table\">\n    <tbody>\n        <tr>\n            <td>huge</td>\n            <td>巨大</td>\n            <td>這是一個巨大的表格。</td>\n        </tr>\n    </tbody>\n</table>\n"
				}
			]
		}
	]
};

/***/ })

});