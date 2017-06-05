<style lang="sass" module>
.itemHeader,
.itemSubHeader
    font-size: 24px !important
    color: #606060 !important
    margin-top: 4.5em !important

    &:before
        content: ''
        position: absolute
        left: -45px
        width: 2px
        border: 3px solid #FFF
        background: #a2a2a2
        top: -2px
        bottom: -2px

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

    &:before
        background: #c1c1c1

.itemDescription > table
    @media (max-width: 767px)
        tr
            padding: 0 !important
        td:empty:empty:empty:empty:empty:empty:empty
            display: none !important

.itemSourceButton
    font-size: .8rem !important

.demo
    margin-top: 28px !important

.code
    margin: 0 !important
    white-space: pre-wrap !important
    //overflow: scroll
    font-size: 14px !important

    mark
        background-color: #52c6ca !important
        padding: 0px 6px !important
        display: inline-block
        border-radius: 4px !important
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

<style lang="sass">
@import "~styles/demo.sass"

.sixteen.wide.column > div > .ts.header:before
    display: none !important

mark > .hljs-tag > .hljs-attr,
mark > .hljs-tag > .hljs-string,
mark > .hljs-tag > .hljs-name
    color: #fff !important
</style>

<template lang="pug">
    div
        //- 標題
        .ts.header(:id="item.title", v-if="item.title", :class="$style.itemHeader")
            | {{ item.title }}
            //- 檢視原始碼按鈕
            button.ts.right.floated.icon.labeled.button(v-if="hasSource", @click="toggle", :class="sourceButton")
                i.code.icon
                | 原始碼
        //- 副標題
        .ts.header(:class="$style.itemSubHeader", v-if="item.subtitle")
            | {{ item.subtitle }}
            //- 檢視原始碼按鈕
            button.ts.right.floated.icon.labeled.button(v-if="hasSource", @click="toggle", :class="sourceButton")
                i.code.icon
                | 原始碼
        //- 詳細註釋
        div(v-html="item.description", :class="$style.itemDescription")

        //- 圖示網格
        .ts.six.column.relaxed.grid(v-if="item.icons", v-once)
            .center.aligned.column(v-for="icon in item.icons", v-once, :key="icon", :data-clipboard-text="icon", @click="copied")
                i.big.fitted.icon(:class="icon")
                label(v-text="icon")

        //- Demo 區塊
        .ts.segments(v-if="item.code || item.css", :class="$style.demo")
            //- 實際範例
            .ts.padded.clearing.segment(demo, v-if="item.type != 'code'", v-html="code", :class="demoSegment")
            //- 程式碼區塊
            .ts.secondary.padded.segment(v-show="sourcing || item.type == 'code'")
                pre(:html-code="item.code != null", :css-code="item.css != null", v-text="item.css ? item.css : item.code", :class="$style.code")

        //- JavaScript 區塊
        .ts.header(:class="$style.itemSubHeader", v-if="item.javascript")
            | JavaScript
            //- 執行按鈕
            button.ts.inverted.right.floated.icon.labeled.button(v-if="!item.autoExecute", :class="$style.itemSourceButton", @click="execute")
                i.bug.icon
                | 執行
        //- 程式碼區塊
        .ts.secondary.padded.segment(v-if="item.javascript")
            pre(js-code, v-text="item.javascript", :class="$style.code")
</template>

<script lang="babel-loader!coffee">
import placeholder169   from 'images/image_placeholder_16-9.png'
import placeholder11    from 'images/image_placeholder_1-1.png'
import placeholder43    from 'images/image_placeholder_4-3.png'
import placeholderUser  from 'images/image_placeholder_user.png'
import placeholderUser2 from 'images/image_placeholder_user2.png'
import placeholderUser3 from 'images/image_placeholder_user3.png'
import placeholderKaren from 'images/videos/karen.png'
import placeholderVimeo from 'images/videos/vimeo.jpg'
import 'assets/tocas.dev.js'

export default
    name : 'Item'
    props:
        item: { }

    data: ->
        return {
            sourceButton: ''
            demoSegment : ''
            code        : @clean @item.code
            hasSource   : @item.type isnt 'code' and typeof @item.icons is 'undefined' and typeof @item.code isnt 'undefined'
            sourcing    : false
        }

    created: ->
        @sourceButton = @$style.itemSourceButton
        @demoClass()

    mounted: ->
        ts('.ts.embed').embed()
        ts('.ts.dropdown:not(.basic)').dropdown()

        # 如果有元素需要剪貼功能，那麼就啟用剪貼板功能。
        if document.querySelector('[data-clipboard-text]') isnt null
            new Clipboard('[data-clipboard-text]')

        # 自動執行 JavaScript 範例如果當項目要求自動執行。
        if typeof @item.autoExecute isnt 'undefined' and @item.autoExecute
            eval @item.javascript

    methods:
        # clean 會清理程式碼，並將指定標籤替換掉。
        clean: (code) ->
            return if typeof code is 'undefined'

            # 將程式碼裡的 [[]] 和 {{}} 標籤去除掉。
            code = code.replace(/\[\[(.*?)\]\]/g, "$1").replace(/{{(.*?)}}/g, "$1")
            # 將程式碼裡的 !--! 圖片標籤換成真的圖片路徑。
            code = code.replace /!-(.*?)-!/g, (match, first) ->
                switch first
                    when '16:9'        then return placeholder169
                    when '1:1'         then return placeholder11
                    when '4:3'         then return placeholder43
                    when 'user'        then return placeholderUser
                    when 'user2'       then return placeholderUser2
                    when 'user3'       then return placeholderUser3
                    when 'embed:karen' then return placeholderKaren
                    when 'embed:vimeo' then return placeholderVimeo

        # toggle 會切換程式碼的可見度。
        toggle: ->
            # 在 True 和 False 之間進行切換。
            @sourcing = !@sourcing
            # 當 `sourcing` 是 True 的時候則將原始碼按鈕設為啟用樣式。
            @sourceButton = [@$style.itemSourceButton, if @sourcing then 'active']
            #
            @demoClass()

        #
        demoClass: ->
            @demoSegment =
                'fitted basic'            : !@sourcing and @item.type isnt 'sidebar' and @item.type isnt 'snackbar'
                'bordered fitted tertiary': @item.type is 'sidebar'

        #
        execute: ->
            eval(@item.javascript)

        # copied 會告訴使用者點擊的那個圖示已經被複製，並且在數秒後重設狀態。
        copied: (event) ->
            target = event.target
            # 如果點擊的圖示是 Div 或 .icon，那麼就取得他的父容器。
            column = if target.classList.contains('icon') or target.tagName is 'LABEL' then target.closest('.column') else target
            # 取得圖示標籤元素。
            label  = column.querySelector('label')
            # 先取得圖示原本的名稱，稍後被修改時才能還原。
            name   = label.innerText

            # 標記成「已複製」的狀態。
            column.classList.add 'copied'
            label.innerText = '已複製'

            # 在數秒後將其狀態恢復原狀。
            setTimeout ->
                column.classList.remove 'copied'
                label.innerText = name
            , 2500
</script>