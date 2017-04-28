<style lang="sass" module>
.container
    margin-top: 4em

.listColumn
    padding-right: 4rem !important

    &:after
        content: ""
        position: absolute
        top: 0
        right: 2em
        bottom: 0
        left: 0
        border-right: 2px solid rgba(0,0,0,.1)
        pointer-events: none

.listMenu
    margin: 0 !important

.listCategory


.listHeader
    padding-left: 0
    display: block
    font-size: 18px
    font-weight: 500
    color: #005f5f
    border-bottom: 1px dashed #b3ffff
    padding-bottom: .8em
    margin-bottom: .6em
    &:not(:first-child)
        margin-top: 1.4em !important

.listItem
    padding: 1.2em 0 1.2em 1.2em !important
    margin: 0 0 .4em 0 !important
    font-size: 15px
    color: #616161

.introHeader
    font-size: 32px !important
    line-height: 1 !important
    border-bottom: 2px solid #d9d9d9 !important
    color: #636262 !important
    padding-bottom: .6em !important
    margin-bottom: .6em !important

    & + div
        font-size: 16px

        p
            clear: both
            position: relative
            line-height: 28px
            letter-spacing: .01em
            color: #6f6e6e

.itemHeader, .itemSubHeader, .categoryHeader
    font-size: 24px !important
    color: #606060 !important
    margin-top: 4em !important

    & + div
        clear: both
        position: relative
        font-size: 16px
        line-height: 28px
        letter-spacing: .08px
        color: #6f6e6e

.itemSubHeader
    font-size: 19px !important
    margin-top: 3em !important

.categoryHeader
    font-size: 28px !important
    line-height: 1.5em !important
    border-bottom: 2px solid #d9d9d9 !important

    &:first-child
        margin-top: 0 !important
        line-height: .6 !important
        padding-bottom: 17px !important

.demo
    margin-top: 28px !important

.code
    margin: 0 !important

    mark
        background-color: #52c6ca
        padding: 3px 6px
        border-radius: 4px
        color: #fff !important

    a
        padding: 3px 4px
        border-bottom: 1px dashed #b5b5b5
        color: #0683a5
        margin-bottom: 3px
        line-height: 1

        &:hover
            border-bottom: 1px solid darken(#b5b5b5, 5%)
            color: darken(#0683a5, 5%)
</style>

<template lang="pug">
    div
        //- 導航選單
        docs-navbar

        //- 文件板岩
        docs-slate(:tab="$route.meta.tabs")
            template(slot="header") {{ $route.meta.slate.title }}
            template(slot="description") {{ $route.meta.slate.description }}
            template(slot="tab")
                router-link.item(:class="{active: tab.to == $route.path}", v-for="tab in $route.meta.tabs", :to="tab.to", key="tab.to")
                    | {{ tab.type == 'styles' ? '基本樣式' : 'JavaScript 模塊' }}

        //- 元素卡片
        .ts.narrow.container(:class="$style.container")
            .ts.relaxed.stackable.grid
                .four.wide.column(:class="$style.listColumn")
                    //- 左側清單
                    .ts.borderless.secondary.relaxed.vertical.menu(:class="$style.listMenu")
                        template(v-for="styles in $route.meta.styles", :class="$style.listCategory")
                            //- 分類標題
                            div.header(:class="$style.listHeader")
                                | {{ styles.category }}
                            //- 每個項目
                            div.item(v-for="item in styles.items", :class="$style.listItem", v-if="item.title")
                                | {{ item.title }}

                .twelve.wide.column

                    //- 主要說明
                    template(v-if="$route.meta.intro")
                        .ts.huge.dividing.header(:class="$style.introHeader") 說明
                        div(v-html="$route.meta.intro")

                    //-
                    template(v-for="styles in $route.meta.styles")
                        //-
                        .ts.big.dividing.header(:class="$style.categoryHeader")
                            | {{ styles.category }}
                        div(v-html="styles.description")

                        //-
                        template(v-for="item in styles.items")
                            .ts.header(:class="$style.itemHeader", v-if="item.title") {{ item.title }}
                            .ts.header(:class="$style.itemSubHeader", v-if="item.subtitle") {{ item.subtitle }}
                            div(v-html="item.description")
                            .ts.segments(:class="$style.demo")
                                .ts.padded.clearing.segment(v-html="cleanMark(item.code)")
                                .ts.secondary.padded.segment
                                    pre(html-code, v-text="item.code", :class="$style.code")

                            .ts.header(:class="$style.itemSubHeader", v-if="item.javascript") JavaScript
                            .ts.secondary.padded.segment
                                pre(js-code, v-text="item.javascript", :class="$style.code")
        //- 頁腳
        docs-footer
</template>

<script>
import DocsSlate  from 'components/slate'
import DocsNavbar from 'components/navbar'
import DocsCards  from 'components/cards'
import DocsFooter from 'components/footer'

export default {
    name: 'Single',
    components: {
        DocsSlate,
        DocsNavbar,
        DocsCards,
        DocsFooter
    },
    methods: {
        cleanMark(code) {
            return code.replace(/\[\[(.*?)\]\]/g, "$1").replace(/{{(.*?)}}/g, "$1")
        }
    }
}
</script>