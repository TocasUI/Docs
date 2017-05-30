<style lang="sass" module>
.container
    margin-top   : 4em !important
    margin-bottom: 4em !important

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

        docs-slate(v-if="!docs.slate")
            //- ███████████████
            template(slot="header") &nbsp;
            template(slot="description") &nbsp;

        div(:class="$style.loader", v-if="!docs.slate")
            .ts.inline.big.loader.active

        template(v-if="docs.slate")
            //- 文件板岩
            docs-slate(:tab="docs.tabs")
                template(slot="header")      {{ docs.slate.title       }}
                template(slot="description") {{ docs.slate.description }}
                template(slot="tab")
                    router-link.item(:class="{active: tab.to == $route.path}", v-for="tab in docs.tabs", :to="tab.to", key="tab.to")
                        | {{ tab.type == 'styles' ? '基本樣式' : 'JavaScript 模塊' }}

            //- 元素卡片
            .ts.narrow.container.relaxed.stackable.grid(:class="$style.container")
                //- 左側欄位
                .four.wide.column(:class="$style.listColumn", v-if="!docs.singleColumn")
                    //- 左側清單
                    .ts.borderless.secondary.relaxed.vertical.menu(:class="$style.listMenu")
                        template(v-for="styles in docs.styles", :class="$style.listCategory")
                            //- 分類標題
                            div.header(:class="$style.listHeader")
                                | {{ styles.category }}
                            //- 每個項目
                            a.item(v-for="item in styles.items", :class="$style.listItem", :href="'#'+item.title", v-if="item.title")
                                | {{ item.title }}

                //- 右側主要內容欄位
                .column(:class="{'twelve wide': !docs.singleColumn, 'sixteen wide': docs.singleColumn}")
                    //- 主要說明
                    template(v-if="docs.intro")
                        .ts.huge.dividing.header(:class="$style.introHeader") 說明
                        div(v-html="docs.intro")

                    //- 元件樣式
                    template(v-for="(styles, styleIndex) in docs.styles")
                        //- 主要分類
                        .ts.big.dividing.header(:class="$style.categoryHeader") {{ styles.category }}
                        //- 分類副標題
                        div(v-html="styles.description")

                        //- 此分類的所有樣式
                        docs-item(v-for="(item, index) in styles.items" :key="item.title" :item="item", :last="isLast(styles.items, index, docs.styles, styleIndex)")
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

export default
    name: 'Single'
    props:
        title:
            default: ''
    data: () ->
        docs: false

    methods:
        isLast: (array, index, styleArray, styleIndex) -> index is array.length - 1 and styleIndex is styleArray.length - 1

    created: () ->
        that     = @
        fullPath = @$route.fullPath
        path     = if @$route.path.substr(-1) isnt '/' then @$route.path + '/' else @$route.path

        replace = (content) ->
            # 將元件的內容替換成剛才延遲讀取的文件。
            that.docs = content
            # 在文件讀取完之後執行上色。
            highlight()
            # 然後如果有錨點的話跳到該錨點。
            if fullPath.indexOf('#') isnt -1
                id = fullPath.substring(fullPath.indexOf('#') + 1)
                setTimeout () ->
                    document.querySelector('.pusher').scrollTop = document.querySelector("##{id}").getBoundingClientRect().top
                , 1


        # 依照路徑決定應該要讀取哪個文件資料。
        switch path
            # Element
            when '/elements/button/'    then require ['docs/elements/button']   , replace
            when '/elements/divider/'   then require ['docs/elements/divider']  , replace
            when '/elements/header/'    then require ['docs/elements/header']   , replace
            when '/elements/input/'     then require ['docs/elements/input']    , replace
            when '/elements/image/'     then require ['docs/elements/image']    , replace
            when '/elements/label/'     then require ['docs/elements/label']    , replace
            when '/elements/list/'      then require ['docs/elements/list']     , replace
            when '/elements/loader/'    then require ['docs/elements/loader']   , replace
            when '/elements/quote/'     then require ['docs/elements/quote']    , replace
            when '/elements/segment/'   then require ['docs/elements/segment']  , replace
            when '/elements/slate/'     then require ['docs/elements/slate']    , replace
            when '/elements/step/'      then require ['docs/elements/step']     , replace
            when '/elements/container/' then require ['docs/elements/container'], replace
            when '/elements/icon/'      then require ['docs/elements/icon']     , replace
            # Collections
            when '/collections/breadcrumb/'         then require ['docs/collections/breadcrumb'], replace
            when '/collections/form/'               then require ['docs/collections/form']      , replace
            when '/collections/grid/'               then require ['docs/collections/grid']      , replace
            when '/collections/menu/'               then require ['docs/collections/menu']      , replace
            when '/collections/message/'            then require ['docs/collections/message']   , replace
            when '/collections/message/javascript/' then require ['docs/collections/message-js'], replace
            when '/collections/table/'              then require ['docs/collections/table']     , replace
            when '/collections/table/javascript/'   then require ['docs/collections/table-js']  , replace
            # Modules
            when '/modules/accordion/'           then require ['docs/modules/accordion']  , replace
            when '/modules/calendar/'            then require ['docs/modules/calendar']   , replace
            when '/modules/checkbox/'            then require ['docs/modules/checkbox']   , replace
            when '/modules/checkbox/javascript/' then require ['docs/modules/checkbox-js'], replace
            when '/modules/dimmer/'              then require ['docs/modules/dimmer']     , replace
            when '/modules/dropdown/'            then require ['docs/modules/dropdown']   , replace
            when '/modules/dropdown/javascript/' then require ['docs/modules/dropdown-js'], replace
            when '/modules/modal/'               then require ['docs/modules/modal']      , replace
            when '/modules/modal/javascript/'    then require ['docs/modules/modal-js']   , replace
            when '/modules/popup/'               then require ['docs/modules/popup']      , replace
            when '/modules/popup/javascript/'    then require ['docs/modules/popup-js']   , replace
            when '/modules/progress/'            then require ['docs/modules/progress']   , replace
            when '/modules/slider/'              then require ['docs/modules/slider']     , replace
            when '/modules/sidebar/'             then require ['docs/modules/sidebar']    , replace
            when '/modules/embed/'               then require ['docs/modules/embed']      , replace
            when '/modules/snackbar/'            then require ['docs/modules/snackbar']   , replace
            when '/modules/tab/'                 then require ['docs/modules/tab']        , replace
            when '/modules/contextmenu/'         then require ['docs/modules/contextmenu'], replace
            # Views
            when '/views/speeches/'  then require ['docs/views/speeches'] , replace
            when '/views/card/'      then require ['docs/views/card']     , replace
            when '/views/items/'     then require ['docs/views/items']    , replace
            when '/views/statistic/' then require ['docs/views/statistic'], replace
            when '/views/comment/'   then require ['docs/views/comment']  , replace
            when '/views/feed/'      then require ['docs/views/feed']     , replace
            # The Others
            when '/rwd/'             then require ['docs/pages/responsive']     , replace
            when '/about/'           then require ['docs/pages/about']          , replace
            when '/components/'      then require ['docs/pages/components']     , replace
            when '/getting-started/' then require ['docs/pages/getting-started'], replace
            when '/about/'           then require ['docs/pages/about']          , replace

    components: {
        DocsSlate,
        DocsNavbar,
        DocsCards,
        DocsItem,
        DocsFooter
    }
</script>