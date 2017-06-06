<style lang="sass" module>
@import "~styles/homepage.sass"
</style>

<template lang="pug">
    div
        //- 導航選單
        docs-navbar(:isHomepage="true")

        //- 主要板岩
        .ts.fluid.vertically.very.padded.slate(:class='$style.slate')
            div(:class="$style.slate_background", :style="{background: backgroundPattern}")

            .ts.inverted.center.aligned.header(:class='$style.slate_header')
                | Tocas UI 2.3
                .sub.header(:class='$style.slate_subHeader') 這裡迎來新世界

            //- 快速使用
            .ts.mini.top.attached.message(:class="$style.slate_importMessage")
                | 現在開始試用！將下列程式碼複製並貼上於 HTML 中。
            div(:class="$style.slate_importWrapper")
                pre.ts.attached.padded.segment(:class="$style.slate_import", html-code)
                    code.html.hljs#import {{ importCode }}
                button.ts.mini.circular.basic.inverted.positive.button(data-clipboard-target="#import")
                    i.copy.icon
                    | 複製

        //- 友情贊助
        div.tablet.or.large.device.only(:class="$style.donators")
            .ts.center.aligned.narrow.container
                strong 本網站由以下贊助者提供
                .ts.relaxed.three.column.stackable.grid(:class="$style.donators_grid")
                    .center.aligned.column(:class="$style.donators_primary")
                        img.ts.tiny.rounded.spaced.image(src='~images/donators/Sciuridae_Li.jpg')
                        | Sciuridae Li
                    .center.aligned.column(:class="$style.donators_primary")
                        img.ts.tiny.rounded.spaced.image(src='~images/donators/Mac_Taylor.jpg')
                        | Mac Taylor
                    .center.aligned.column(:class="$style.donators_primary")
                        img.ts.tiny.rounded.spaced.image(src='~images/donators/李政皇.jpg')
                        | 李政皇
                .ts.relaxed.four.column.stackable.grid(:class="$style.donators_grid")
                    .center.aligned.column(:class="$style.donators_secondary")
                        img.ts.mini.rounded.spaced.image(src='~images/donators/Yan-K.jpg')
                        | Yan-K
                    .center.aligned.column(:class="$style.donators_secondary")
                        img.ts.mini.rounded.spaced.image(src='~images/donators/Fan_Kangtai.jpg')
                        | Fan Kangtai
                    .center.aligned.column(:class="$style.donators_secondary")
                        img.ts.mini.rounded.spaced.image(src='~images/donators/SpaceTimeHalf.jpg')
                        | SpaceTimeHalf
                    .center.aligned.column(:class="$style.donators_secondary")
                        img.ts.mini.rounded.spaced.image(src='~images/donators/Sean_Wei.jpg')
                        | Sean Wei
            a(href='https://patreon.com/yamiodymel', target='_blank', :class="$style.donators_bePatreon") 成為贊助者

        //- 簡介大綱
        .ts.narrow.container(:class="$style.description")
            .ts.stackable.relaxed.grid
                //- 更有意義
                .eight.wide.column
                    .ts.header(:class="$style.description_header") 更有意義
                    p Tocas UI 以更有意義的方式來命名類別名稱，
                    p 就像是你直接稱呼這個元素一樣地親切。
                    p 程式已經夠枯燥乏味了，別再讓人生也繼續枯燥下去。

                .eight.wide.column
                    .ts.header(:class="$style.description_demoHeader") HTML
                    pre.ts.padded.segment(html-code)
                        code.html.hljs#import {{ buttonExample }}
                    .ts.fluid.buttons
                        button.ts.button 卡莉絲
                        button.ts.button 亞凡芽
                        button.ts.warning.button 橙希

                //- 分隔線
                .sixteen.wide.column
                    .ts.section.divider

                //- 更具結構性
                .sixteen.wide.column
                    .ts.header(:class="$style.description_header") 更具結構性
                    p 很多框架都是為了達到特殊外觀，
                    p 而新增了很多不必要的 HTML 結構，但在這裡將有所改善。
                    p 下列是一個簡單的導航欄選單，並與傳統 Bootstrap 4 比較。

                .eight.wide.column
                    .ts.header(:class="$style.description_compareHeader") Tocas UI
                    pre.ts.padded.segment(html-code)
                        code.html.hljs#import {{ navExample }}

                .eight.wide.column
                    .ts.header(:class="$style.description_compareHeader") Bootstrap 4
                    pre.ts.padded.segment(html-code)
                        code.html.hljs#import {{ navExampleBs }}

        div(:class="$style.components")
            .ts.narrow.container
                .ts.massive.center.aligned.icon.header(:class="$style.componentsHeader")
                    i.gift.icon
                    | 眾多搭配
                    .sub.header(:class="$style.componentsSubHeader") 元件除了可以單獨使用，還可以混搭著使用

                .ts.relaxed.stackable.grid
                    //- 左側展示欄位
                    .four.wide.column
                        //- 圖片卡片
                        .ts.header 圖片卡片
                        .ts.card
                            .image
                                img(src="~images/image_placeholder_4-3.png")
                            .content
                                .header iPhone 8 開賣！
                                .meta
                                    a(href="#!") 兩天前

                        //- 垂直選單
                        .ts.header 垂直選單
                        .ts.inverted.vertical.positive.menu
                            a.item(href="#!")
                                i.picture.icon
                                | 相片
                            a.item(href="#!")
                                i.users.icon
                                | 群組
                            a.item(href="#!")
                                i.star.icon
                                | 收藏

                        //- 標籤
                        .ts.header 標籤
                        .ts.label(:class="$style.componentsLabel")
                            i.gift.icon
                            | 標籤
                        .ts.image.label(:class="$style.componentsLabel")
                            img(src='~images/image_placeholder_user.png')
                            | Yami Odymel
                        .ts.image.label(:class="$style.componentsLabel")
                            img(src='~images/image_placeholder_user2.png')
                            | Xiaoan
                        .ts.image.label(:class="$style.componentsLabel")
                            img(src='~images/image_placeholder_user3.png')
                            | 卡莉絲
                            .detail 實況主
                        .ts.circular.primary.label(:class="$style.componentsLabel") 9
                        .ts.circular.info.label(:class="$style.componentsLabel") 14
                        .ts.warning.label(:class="$style.componentsLabel") 7
                        .ts.positive.label(:class="$style.componentsLabel") 13

                    //- 中間展示欄位
                    .eight.wide.column
                        //- 文章卡片
                        .ts.header 文章卡片
                        .ts.card
                            .content
                                .header Yami Odymel
                                .middoted.meta
                                    div @yamiodymel
                                    div 2 分鐘前
                                .description
                                    p 看似最重要的東西卻沒能被妥善利用，
                                    p 沒有人能發現這一點，因為他們早已活在過去，
                                    p 才剛開始的序章卻被放在頁尾。

                        //- 圖示選單
                        .ts.header 圖示選單
                        .ts.icon.inverted.info.borderless.menu
                            a.item
                                i.bell.icon
                            a.item
                                i.music.icon
                            a.item
                                i.search.icon

                        //- 按鈕群組
                        .ts.header 按鈕群組
                        .ts.fluid.buttons
                            button.ts.button 預設
                            button.ts.warning.button 警告
                            button.ts.negative.button 錯誤
                            button.ts.loading.primary.button 讀取

                        //- 表單
                        .ts.header 表單
                        .ts.segment
                            form.ts.form
                                .field
                                    label 真實姓名
                                    .two.fields
                                        .field
                                            input(type='text', placeholder="姓氏")
                                        .field
                                            input(type='text', placeholder="名字")
                                button.ts.button 送出

                    //- 右側展示欄位
                    .four.wide.column
                        //- 讀取中的段落
                        .ts.header 讀取中的段落
                        .ts.loading.segment
                            p &nbsp;
                            p &nbsp;
                            p &nbsp;

                        //- 浮起來的段落
                        h4.ts.header 浮起來的段落
                        .ts.raised.segment
                            blockquote.ts.quote
                                p 你將看見一個魔法師的日常生活，
                                p 只要你能夠單身三十年，
                                p 你也可以跟我一樣成為魔法師。

                        //- 留言
                        h4.ts.header 留言
                        .ts.segment: .ts.comments
                            .comment
                                a.avatar
                                    img(src='~images/image_placeholder_user.png')
                                .content
                                    a.author Mac Taylor
                                    .metadata
                                        div 2 天前
                                        div
                                            i.star.icon
                                            | 5 次收藏
                                    .text 如果你有去釣魚大賽，你可能會被禁止進入：「我們不歡迎職業選手」
                            .comment
                                a.avatar
                                    img(src='~images/image_placeholder_user2.png')
                                .content
                                    a.author Yami Odymel
                                    .metadata
                                        div 42 分鐘前
                                    .text 你很機車人

        //- 使用感言
        div(:class="$style.quotes")
            .ts.narrow.container
                .ts.massive.inverted.center.aligned.icon.header(:class="$style.quotesHeader")
                    i.smile.icon
                    | 看看用戶怎麼說
                    .sub.header 他們對 Tocas UI 的評價

                .ts.four.column.stackable.grid
                    //- Hiram Huang
                    .center.aligned.column
                        img.ts.bordered.small.circular.image(src="~images/users/hiram.png")
                        .ts.inverted.header(:class="$style.quoteBlockHeader") Hiram Huang
                        .ts.quote(:class="$style.quoteBlock")
                            p Gan 我快哭了
                            p 感動屎了
                            p 我的淚

                    //- Tsundere Chen
                    .center.aligned.column
                        img.ts.bordered.small.circular.image(src="~images/users/tsundere.png")
                        .ts.inverted.header(:class="$style.quoteBlockHeader") Tsundere Chen
                        .ts.quote(:class="$style.quoteBlock")
                            p 等很久了
                            p 請問什麼時候換 TeaMeow v1.0.0？

                    //- Sciuridae
                    .center.aligned.column
                        img.ts.bordered.small.circular.image(src="~images/users/sciuridae.png")
                        .ts.inverted.header(:class="$style.quoteBlockHeader") Sciuridae
                        .ts.quote(:class="$style.quoteBlock")
                            p 洨安都做好 Tocas UI 了
                            p 我們該開個洨安教
                            p 信洨安，得永生

                    //- Jasper Yu
                    .center.aligned.column
                        img.ts.bordered.small.circular.image(src="~images/users/jasper.png")
                        .ts.inverted.header(:class="$style.quoteBlockHeader") Jasper Yu
                        .ts.quote(:class="$style.quoteBlock")
                            p 潮爆了 所以我說那個始春呢

                    //- Chris
                    .center.aligned.column
                        img.ts.bordered.small.circular.image(src="~images/users/chris.png")
                        .ts.inverted.header(:class="$style.quoteBlockHeader") Chris
                        .ts.quote(:class="$style.quoteBlock")
                            p 哪時候 TeaMeow 的 Messenger 會出現

                    //- Sean
                    .center.aligned.column
                        img.ts.bordered.small.circular.image(src="~images/users/sean.png")
                        .ts.inverted.header(:class="$style.quoteBlockHeader") Sean
                        .ts.quote(:class="$style.quoteBlock")
                            p One Tocas UI a Page Keep the Designer away

                    //- Choukai
                    .center.aligned.column
                        img.ts.bordered.small.circular.image(src="~images/users/choukai.png")
                        .ts.inverted.header(:class="$style.quoteBlockHeader") Choukai
                        .ts.quote(:class="$style.quoteBlock")
                            p 快來用 Tocas UI
                            p 這真是，太潮惹！
                            p 三朝★身寸☆惹ㄦ

                    //- Henry Wu
                    .center.aligned.column
                        img.ts.bordered.small.circular.image(src="~images/users/henry.jpg")
                        .ts.inverted.header(:class="$style.quoteBlockHeader") Henry Wu
                        .ts.quote(:class="$style.quoteBlock")
                            p 希望2.0趕快出來

        //- 頁腳
        docs-footer
</template>

<script lang="coffee">
import DocsFooter from 'components/footer'
import DocsNavbar from 'components/navbar'
import pattern    from 'images/backgrounds/pattern.png'
import highlight  from 'client/highlight'

export default
    name   : 'Homepage'
    data   : ->
        backgroundPattern: "url(#{pattern})"
        importCode:
            """
            <!-- Tocas UI：CSS 與元件 -->
            <link rel="stylesheet" href="//cdn.rawgit.com/TeaMeow/TocasUI/2.3.1/dist/tocas.css">
            <!-- Tocas JS：模塊與 JavaScript 函式 -->
            <script src="//cdn.rawgit.com/TeaMeow/TocasUI/2.3.1/dist/tocas.js"><\/script>
            """
        buttonExample:
            """
            <div class="ts fluid buttons">
                <button class="ts button">卡莉絲</button>
                <button class="ts button">亞凡芽</button>
                <button class="ts warning button">橙希</button>
            </div>
            """
        navExample:
            """
            <nav class="ts menu">
                <a class="header item">商標</a>
                <a class="active item">首頁</a>
                <a class="item">特色</a>
                <a class="item">價格</a>
                <a class="item">關於</a>
            </nav>
            """
        navExampleBs:
            """
            <nav class="navbar navbar-light bg-faded">
                <a class="navbar-brand">商標</a>
                <ul class="nav navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link">首頁</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">特色</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">價格</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">關於</a>
                    </li>
                </ul>
            </nav>
            """
    mounted: ->
        clipboard = new Clipboard '[data-clipboard-target="#import"]'

        clipboard.on 'success', (e) ->
            document.querySelectorAll('[data-clipboard-target="#import"]').forEach (el) ->
                el.innerText  = '已成功複製！'
                el.className += ' disabled'

            e.clearSelection()

        highlight()

    components: {
        DocsFooter,
        DocsNavbar
    }
</script>