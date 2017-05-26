<style lang="sass" module>
.container
    margin-top   : 4em !important
    margin-bottom: 4em !important

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

.categoryHeader
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

.categoryHeader
    font-size: 28px !important
    line-height: 1.5em !important
    border-bottom: 2px solid #d9d9d9 !important

    &:first-child
        margin-top: 0 !important
        line-height: .6 !important
        padding-bottom: 17px !important
</style>

<template lang="pug">
    div
        //- 導航選單
        docs-navbar

        //- 文件板岩
        docs-slate(:tab="$route.meta.tabs")
            template(slot="header")      {{ $route.meta.slate.title       }}
            template(slot="description") {{ $route.meta.slate.description }}
            template(slot="tab")
                router-link.item(:class="{active: tab.to == $route.path}", v-for="tab in $route.meta.tabs", :to="tab.to", key="tab.to")
                    | {{ tab.type == 'styles' ? '基本樣式' : 'JavaScript 模塊' }}

        //- 元素卡片
        .ts.narrow.container.relaxed.stackable.grid(:class="$style.container")
            //- 左側欄位
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

            //- 右側主要內容欄位
            .twelve.wide.column
                //- 主要說明
                template(v-if="$route.meta.intro")
                    .ts.huge.dividing.header(:class="$style.introHeader") 說明
                    div(v-html="$route.meta.intro")

                //- 元件樣式
                template(v-for="styles in $route.meta.styles")
                    //- 主要分類
                    .ts.big.dividing.header(:class="$style.categoryHeader") {{ styles.category }}
                    //- 分類副標題
                    div(v-html="styles.description")

                    //- 此分類的所有樣式
                    docs-item(v-for="item in styles.items" :key="item.title" :item="item")
        //- 頁腳
        docs-footer
</template>

<script>
import DocsSlate  from 'components/slate'
import DocsNavbar from 'components/navbar'
import DocsCards  from 'components/cards'
import DocsItem   from 'components/item'
import DocsFooter from 'components/footer'

export default {
    name: 'Single',
    components: {
        DocsSlate,
        DocsNavbar,
        DocsCards,
        DocsItem,
        DocsFooter
    }
}
</script>