webpackJsonp([13],{

/***/ 73:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "開始使用",
		"description": "人生已經很無聊了，別讓你的網頁也再無聊下去。"
	},
	"intro": "<p>Tocas UI 是一個基於 Semantic UI 的衍生分支，其傳承特色包括了獨具語意的寫法，同時也支援更彈性、多樣化的使用方式，並支援自動和手動響應式設計。</p>\n",
	"styles": [
		{
			"category": "引用檔案",
			"description": "你需要引用 Tocas UI 的檔案才能夠開始使用，這裡提供兩種方式讓你使用。",
			"items": [
				{
					"title": "透過線上 CDN",
					"type": "code",
					"description": "這是項免費服務並且提供夠快的服務速度，這使你不需要下載 Tocas UI，只需要將下列標籤放置於 HTML 中的 <span class=\"ts horizontal label\">&lt;head&gt; .. &lt;/head&gt;</span> 處即可，\n      缺點是我們並不保證該伺服器會 100% 處於上線狀態。\n",
					"code": "<link rel=\"stylesheet\" href=\"https://cdn.rawgit.com/TeaMeow/TocasUI/2.3.0/dist/tocas.css\">\n"
				},
				{
					"title": "自行下載 Tocas UI",
					"type": "code",
					"description": "你需要到 <a href=\"//github.com/TeaMeow/TocasUI\">我們的 Github 下載 Tocas UI</a>，然後取出其中的 <span class=\"ts horizontal label\">/dist</span> 資料夾，並像下面這樣引用 Tocas UI 檔案，如此的好處是你可以確保樣式不會因為遠端的伺服器離線而遺失。\n",
					"code": "<link rel=\"stylesheet\" href=\"tocas.css\">\n"
				}
			]
		},
		{
			"category": "全域注意事項",
			"description": "你需要注意你的 HTML 和設計上是否有達到這些要求。",
			"items": [
				{
					"title": "網頁字型",
					"description": "Tocas UI 2.2 之後的版本不再統一使用 Noto Sans CJK，因為其檔案量過大讀取費時。目前 Tocas UI 使用下列字型在各個系統（如：Ubuntu、macOS、Windows）上取得最相近且美觀的結果。",
					"type": "code",
					"code": "\"SF Pro TC\", \"SF Pro Text\", \"SF Pro Icons\", \"PingFang TC\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", \"Microsoft JhengHei\", wf_SegoeUI, \"Segoe UI\", Segoe, \"Segoe WP\", Tahoma, Verdana, Ubuntu, \"Bitstream Vera Sans\", \"DejaVu Sans\", Tahoma, 微軟正黑體, \"LiHei Pro\", \"WenQuanYi Micro Hei\", \"Droid Sans Fallback\", \"AR PL UMing TW\", Roboto, \"Helvetica Neue\", \"Hiragino Maru Gothic ProN\", メイリオ, \"ヒラギノ丸ゴ ProN W4\", Meiryo, \"Droid Sans\", sans-serif\n"
				},
				{
					"title": "HTML 5 宣告",
					"type": "code",
					"description": "請確定你有透過 <span class=\"ts horizontal label\">&lt;!DOCTYPE HTML&gt;</span> 將網頁宣告成 HTML5。",
					"code": "<!DOCTYPE HTML>\n<html>\n...\n</html>\n"
				},
				{
					"title": "響應式設計標籤",
					"type": "code",
					"description": "Tocas UI 支援響應式設計，為此你需要新增下列一段的標籤在你的 HTML 來告訴行動裝置你的網頁支援響應式設計，利用這個標籤還可以降低並解決行動裝置對於網頁的點擊延遲，請將這段放置於 HTML 中的 <span class=\"ts horizontal label\">&lt;head&gt; .. &lt;/head&gt;</span> 處。",
					"code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n"
				},
				{
					"title": "動態字體大小",
					"type": "code",
					"description": "Tocas UI 的所有元件字體大小是依賴著網頁基底而定。這意味著當你認為網頁字型太小時，你不需要變更每個元件的字型，你可以直接變更 <span class=\"ts horizontal label\">&lt;html&gt;</span> 中的字型大小設定。就像下面這樣。\n",
					"css": "html {\n    font-size: 32px;\n}\n"
				},
				{
					"title": "響應式字體大小",
					"type": "code",
					"description": "Tocas UI 預設並不會自動幫你在不同裝置上變更字體大小，不過自從所有字型大小皆依賴網頁基底，那麼你就可以在不同尺寸的裝置上變更基底字體大小。令字體大小更加地符合多種尺寸的裝置。\n",
					"css": "html {\n    font-size: 16px;\n}\n\n// 在行動裝置上將字體轉換成 `14px` 大小。\n@media (max-width: 768px) {\n    html {\n        font-size: 14px;\n    }\n}\n"
				}
			]
		},
		{
			"category": "與其他框架比較",
			"description": "這裡解釋著為什麼 Tocas UI 比起其他框架還要些卓越的部分。",
			"items": [
				{
					"title": "Bootstrap v4",
					"description": "Bootstrap 是一個十分常見的框架，但卻有個最為嚴重的問題，也是與 Tocas UI 所背馳的理念，就是太多雜亂的樣式名稱，並且不具有意義，\n像是這樣：<span class=\"ts horizontal label\">m-l-1</span>、<span class=\"ts horizontal label\">m-t-0</span>、<span class=\"ts horizontal label\">p-x-2</span>、<span class=\"ts horizontal label\">m-x-auto</span>、等，\n並不能夠一眼就看出這些樣式所具備的意義，相較之下 Tocas UI 的 <span class=\"ts horizontal label\">small</span>、<span class=\"ts horizontal label\">centered</span> 更具有意義。\n<br><br>\n此外，在 HTML 結構的部分 Bootstrap 常為了要補足某些缺陷或排列而新增過多不必要的結構，而 Tocas UI 則沒有這方面的問題。在元件的部分 Tocas UI 也較多元化並更具彈性。\n"
				},
				{
					"title": "Semantic UI",
					"description": "Semantic UI 即是 Tocas UI 的衍生來源，雖然 Semantic UI 具備自訂主題功能，但要改變主題你必須自行手動編譯，會這樣做的人少之又少，\n預設的 Semantic UI 主題看起來十分地沈重並仰賴過多地白色和黑色，這個問Tocas UI 則有所改善。\n<br><br>\n在元件的部分 Semantic UI 過度依賴非原生元件（如下拉式輸入欄位），TocasUI這部分則保留並美化了原生的元件，而不是另外做一個。\nTocas UI 還勝過 Semantic UI 一個優點，那就是元件更具有自訂性，舉例來說可具有陰影的卡片「扁平化」，或是其他更多外觀上的變動。\n"
				},
				{
					"title": "Amaze UI",
					"description": "Amaze UI 在外觀上較為生硬，和 Bootstrap 一樣不具有語意並擁有 <span class=\"ts horizontal label\">am-</span> 的類別前輟，樣式和元件也過於死板不具彈性，還有一些非直覺的動畫，例如「按鈕」按下時的緩慢感，Tocas UI 讓按鈕和回饋充滿動感，不會讓使用者感到遲鈍，並讓元件多樣化，外觀上也看起來更為簡約。\n"
				},
				{
					"title": "Kule Lazy",
					"description": "Kule Lazy 在一些結構上使用的是舊型的樣式，Tocas UI 則採用最新並具彈性的 Flexbox，在外觀的配色和陰影也比起 Kule Lazy 還要更加地輕盈，不會令人感到沈重，除此之外 Kule Lazy 的命名方式也和 Bootstrap 有著一樣的問題，且還不只如此， Kule Lazy 在用詞上也較為獨特使人不容易區分和上手，Tocas UI 在這方面則以直覺的方式稱呼元件讓人不感到困惑。\n"
				},
				{
					"title": "Foundation",
					"description": "Foundation 在外觀上較為生硬，過多的方形設計，按鈕也不具有回饋力，令人按下時感到鈍感，並且在元件樣式上過度依賴標籤選擇器，這將使得你在自訂部分元件時會有所衝突，上述的所有問題都有在 Tocas UI 獲得改善。\n"
				},
				{
					"title": "Tachyons",
					"description": "Tachyons 並沒有「元件觀念」，這意味著你將需要透過 Tachyons 內建的輔助樣式自行建立需要的元件，Tachyons 在樣式命名上有著與 Bootstrap 一樣厭垢並且更難以令人捉摸的問題，如 <span class=\"ts horizontal label\">mr3</span> 但其實是 <span class=\"ts horizontal label\">margin-right: 1rem;</span>，並且在元素上使用過多的樣式如：<span class=\"ts horizontal label\">fw6 f3 f2-ns lh-title mt0 mb3</span>，這些都將導致未來整合有所困難，同時也意味著當你需要重複使用元件時，你的原始碼大小也會急劇地增加。\n"
				}
			]
		}
	]
};

/***/ })

});