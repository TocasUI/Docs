<style lang="sass" module>
//
// Menu
//

.menu
    font-size: 16px !important
    background-color: #87bdd1 !important

//
// Slate
//

.slate
    padding-bottom: 0 !important
    background: linear-gradient(180deg, #5fafe8 5%, #cde5f7) !important
    overflow: hidden

.slate_background
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: url(http://i.imgur.com/Fk1Nsw1.png)
    opacity: 0.5

.slate_header
    font-size: 5rem !important

.slate_subHeader
    font-size: 2rem !important

.slate_description
    display: block
    margin-top: 4em !important
    color: #656565
    font-size: 16px

.slate_importMessage
    margin-top: 7em !important
    padding-left: 1.7em !important
    width: 100%
    max-width: 692px
    line-height: 1.9em !important
    font-size: .9em !important
    z-index: 2

.slate_import
    width: 100%
    max-width: 692px
    overflow: scroll
    line-height: 1.6em !important
    box-shadow: 1px -10px 12px 3px rgba(128, 128, 128, 0.17) !important
    border-radius: 0 !important
    border-bottom: 2px solid #f7faf5 !important
    padding-bottom: 6em !important
    z-index: 1

[data-clipboard-target="#import"]
    position: absolute !important
    right: 20px
    bottom: 20px

//
// Donators
//

.donators
    text-align: center
    opacity: 0.9
    padding-top: 4em
    padding-bottom: 4em
    margin-bottom: 4.3em
    border-bottom: 1px solid #f5f5f5;

    strong
        display: block
        margin-bottom: 3em
        color: #646464

.donators_grid:not(:last-of-type)
    margin-bottom: 1.3em !important

.donators_primary,
.donators_secondary
    color: #848484;
    font-size: 1.2em

    img
        max-width: 50px !important
        max-height: 50px !important
        min-width: 40px !important
        min-height: 40px !important
        margin-right: 2em !important
        margin-left: 0 !important

.donators_secondary
    font-size: 1em

.donators_bePatreon
    display: inline-block
    text-align: center
    padding: .7em 1.2em
    border-radius: 500em
    color: #777
    margin-top: 3em
    border: 1px solid #e6e6e6

    &:hover
        background-color: #e2e2e2
        color: #6f6f6f

//
// Description
//

.description
    padding-bottom: 6em

.description_header
    color: #646464
    font-size: 2.143rem !important
    margin-bottom: 1em !important

    & ~ p
        font-size: 16px
        color: #848181

.description_demoHeader,
.description_compareHeader
    font-size: 1.815rem !important
    color: #646464

.description_compareHeader
    margin-top: 1.2em !important

//
// Components
//

.components
    background-color: #fbfbfb
    padding-top: 6em

.componentsLabel
    margin-top: 4px !important
    margin-bottom: 4px !important

.componentsHeader
    font-size: 2.143rem !important
    margin-bottom: 2em !important

    i
        font-size: 128px !important

.componentsSubHeader
    color: #848181 !important
</style>

<template lang="pug">
    div
        //- 導航選單
        .ts.fluid.inverted.top.attached.pure.basic.menu(:class='$style.menu')
            .ts.narrow.container
                router-link.item(to='/getting-started') Tocas UI
                router-link.item(to='/getting-started') 從這開始
                router-link.item(to='/getting-started') 一般元素
                router-link.item(to='/getting-started') 聚合型
                router-link.item(to='/getting-started') 模塊
                router-link.item(to='/getting-started') 視圖型
                router-link.item(to='/getting-started') 響應式

                //- 右側選單
                .right.menu
                    router-link.item(to='/getting-started') GitHub

        //- 主要板岩
        .ts.fluid.vertically.very.padded.slate(:class='$style.slate')
            div(:class="$style.slate_background")

            .ts.inverted.center.aligned.header(:class='$style.slate_header')
                | Tocas UI 2.3
                .sub.header(:class='$style.slate_subHeader') 這裡迎來新世界

            //- 快速使用
            .ts.fluid.mini.top.attached.message(:class="$style.slate_importMessage")
                | 現在開始試用！將下列程式碼複製並貼上於 HTML 中。
            pre.ts.bottom.attached.padded.segment(:class="$style.slate_import")
                code.html.hljs.escaped#import.
                    &lt;!-- Tocas UI：CSS 與元件 --&gt;
                    &lt;link rel=&quot;stylesheet&quot; href=&quot;//cdn.rawgit.com/TeaMeow/TocasUI/latest/dist/tocas.css&quot;&gt;
                    &lt;!-- Tocas JS：模塊與 JavaScript 函式 --&gt;
                    &lt;script src=&quot;//cdn.rawgit.com/TeaMeow/TocasUI/latest/dist/tocas.js&quot;&gt;&lt;/script&gt;
                button.ts.mini.circular.basic.inverted.positive.button(data-clipboard-target="#import")
                    i.copy.icon
                    | 複製

        //- 友情贊助
        div(:class="$style.donators")
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
            .ts.relaxed.grid
                //- 更有意義
                .eight.wide.column
                    .ts.header(:class="$style.description_header") 更有意義
                    p Tocas UI 以更有意義的方式來命名類別名稱，
                    p 就像是你直接稱呼這個元素一樣地親切。
                    p 程式已經夠枯燥乏味了，別再讓人生也繼續枯燥下去。

                .eight.wide.column
                    .ts.header(:class="$style.description_demoHeader") HTML
                    pre.ts.padded.segment
                        code.html.hljs.
                            <div class="ts fluid buttons">
                                <button class="ts button">卡莉絲</button>
                                <button class="ts button">亞凡芽</button>
                                <button class="ts warning button">橙希</button>
                            </div>
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
                    pre.ts.padded.segment
                        code.html.hljs.
                            <nav class="ts menu">
                                <a class="header item">商標</a>
                                <a class="active item">首頁</a>
                                <a class="item">特色</a>
                                <a class="item">價格</a>
                                <a class="item">關於</a>
                            </nav>

                .eight.wide.column
                    .ts.header(:class="$style.description_compareHeader") Bootstrap 4
                    pre.ts.padded.segment
                        code.html.hljs.
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
                                .header
                                    | Yami Odymel
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
</template>

<script>
export default {
    name: 'Homepage',
    mounted() {
        var clipboard = new Clipboard('[data-clipboard-target="#import"]')

        clipboard.on('success', function(e) {
            document.querySelectorAll('[data-clipboard-target="#import"]').forEach((el) => {
                el.innerText = '已成功複製！'
                el.className += ' disabled'
            })

            e.clearSelection()
        })
    }
}
</script>