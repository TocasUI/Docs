<style lang="sass" module>
//
// Menu
//

.menu
    font-size: 16px !important
    background-color: #e7eae3 !important

//
// Slate
//

.slate
    padding-bottom: 7em !important
    background: linear-gradient(180deg,#e7eae3 0,#f9fcf7) !important

.slate_header
    font-size: 5rem !important

.slate_subHeader
    font-size: 2rem !important

.slate_description
    display: block
    margin-top: 4em !important
    color: #656565
    font-size: 16px

.slate_import
    width: 100%
    max-width: 340px

    textarea
        white-space: nowrap
        line-height: 1.45em !important

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
</style>

<template lang="pug">
    div
        //- 導航選單
        .ts.top.attached.pure.basic.menu(:class='$style.menu')
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
        .ts.vertically.very.padded.slate(:class='$style.slate')
            .ts.center.aligned.header(:class='$style.slate_header')
                | Tocas UI 2
                .sub.header(:class='$style.slate_subHeader') 這裡迎來新世界

            //- 快速使用
            p(:class='$style.slate_description') 現在開始試用！
            .ts.fluid.input(:class='$style.slate_import')
                textarea(rows='2').
                    <link rel="stylesheet" href="//cdn.rawgit.com/TeaMeow/TocasUI/latest/dist/tocas.css">
                    <script src="//cdn.rawgit.com/TeaMeow/TocasUI/latest/dist/tocas.js"></script>
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
        .ts.narrow.container
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
</template>

<script>
export default {
    name: 'Homepage'
}
</script>