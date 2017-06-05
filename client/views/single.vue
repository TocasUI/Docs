<style lang="sass" module>
.container
    margin-top   : 4em !important
    margin-bottom: 4em !important

    @media (max-width: 767px)
        margin-top   : 1.5em !important
        margin-bottom: 1.5em !important

.loader
    height: calc(100vh - 45px - 212px)
    display: flex
    align-items: center
    justify-content: center

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

    @media (max-width: 767px)
        padding-right: .4rem !important

        &:after
            display: none !important

.listMenu
    margin: 0 !important

    @media (max-width: 767px)
        margin-bottom: 3em !important

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

        @media (max-width: 767px)
            table
                tr
                    padding: 0 !important
                td:empty:empty:empty:empty:empty:empty:empty
                    display: none !important

.disqusHeader
    margin-top: 3em !important
    margin-bottom: .5em !important
    color: #606060 !important
    font-size: 28px !important

    > div
        margin-top: .6em !important
        clear: both !important
        position: relative !important
        font-size: 16px !important
        line-height: 28px !important
        letter-spacing: .08px !important
        color: #6f6e6e !important

.disqus
    margin-bottom: 3em !important

    @media (max-width: 767px)
        margin-bottom: 1em !important

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

        //- 空白板岩
        docs-slate(v-if="!docs.slate")
            template(slot="header")      &nbsp;
            template(slot="description") &nbsp;
        //- 讀取指示器
        div(:class="$style.loader", v-if="!docs.slate")
            .ts.inline.big.loader.active

        template(v-if="docs.slate")
            //- 文件板岩
            docs-slate
                template(slot="header")      {{ docs.slate.title       }}
                template(slot="description") {{ docs.slate.description }}
                template(slot="tab", v-if="docs.tabs")
                    router-link.item(:class="{active: isCurrentTab(tab.to)}", v-for="tab in docs.tabs", :to="tab.to", key="tab.to")
                        | {{ tab.type == 'styles' ? '基本樣式' : 'JavaScript 模塊' }}

            //- 元素卡片
            .ts.narrow.container.relaxed.stackable.grid(:class="$style.container")
                //- 左側欄位
                .sixteen.wide.mobile.four.wide.computer.column(:class="$style.listColumn", v-if="!docs.singleColumn")
                    //- 左側清單
                    .ts.borderless.secondary.relaxed.vertical.menu(:class="$style.listMenu")
                        template(v-for="styles in docs.styles", :class="$style.listCategory")
                            //- 分類標題
                            div.header(:class="$style.listHeader", v-text="styles.category")
                            //- 每個項目
                            a.item(v-for="item in styles.items", :class="$style.listItem", :href="'#'+item.title", v-if="item.title", v-text="item.title")

                //- 右側主要內容欄位
                .sixteen.wide.mobile.column(:class="{'twelve wide computer': !docs.singleColumn, 'sixteen wide computer': docs.singleColumn}")
                    //- 主要說明
                    template(v-if="docs.intro")
                        .ts.huge.dividing.header(:class="$style.introHeader") 說明
                        div(v-html="docs.intro")

                    //- 元件樣式
                    template(v-for="(styles, styleIndex) in docs.styles")
                        //- 主要分類
                        .ts.big.dividing.header(:class="$style.categoryHeader", v-text="styles.category")
                        //- 分類副標題
                        div(v-html="styles.description")

                        //- 此分類的所有樣式
                        docs-item(v-for="(item, index) in styles.items" :key="item.title" :item="item")

        //-
        .ts.narrow.container
            .ts.big.header(:class="$style.disqusHeader")
                | 本頁留言
                .sub.header 你現在可以在這裡留言啦！如果有功能建議或是發現錯誤，可以到<a href="https://github.com/TeaMeow/TocasUI">這裡提出 Issue</a>。

            #disqus_thread(:class="$style.disqus")

        //- 頁腳
        docs-footer
</template>

<script lang="coffee">
import DocsSlate   from 'components/slate'
import DocsNavbar  from 'components/navbar'
import DocsCards   from 'components/cards'
import DocsItem    from 'components/item'
import DocsFooter  from 'components/footer'
import highlight   from 'client/highlight'
import store       from '../store'

export default
    name : 'Single'
    data : ->
        docs: {}
    mounted: ->
        # 讀取 Disqus
        do ->
            d = document
            s = d.createElement 'script'
            s.src = '//tocas-ui.disqus.com/embed.js'
            s.setAttribute 'data-timestamp', + new Date
            (d.head or d.body).appendChild s
    methods:
        isCurrentTab: (tabRoute) ->
            routerPath = if @$route.path.substr(-1) isnt '/' then "#{@$route.path}/" else @$route.path
            tabRoute   = if tabRoute.substr(-1)     isnt '/' then "#{tabRoute}/"     else tabRoute

            return routerPath is tabRoute

    created: ->
        that = @
        store.watch (state) ->
            state.docs
        , (docs) ->
            that.docs = docs
    components: {
        DocsSlate,
        DocsNavbar,
        DocsCards,
        DocsItem,
        DocsFooter
    }
</script>