<style lang="sass" module>
.wrapper
    position: fixed
    left: 0
    top: 47px
    right: 0
    bottom: 28px
    display: flex

.wrapper_oneColumn
    flex-direction: column

.label
    display: flex
    padding: .5em .5em
    background: #f1f1f1
    color: #7a7a7a
    border: 1px solid #e5e5e5
    border-left: 0
    border-right: 0

.code
    height: 100%
    flex: 1
    border-right: 1px solid #dfdfdf
    overflow: auto

.preview_wrapper
    height: 100%
    flex: 1
    overflow: auto

.preview
    padding: 1.5em
    position: absolute
    top: 28px
    bottom: 0
    left: 0
    right: 0
    overflow: auto

.editor
    position: absolute
    top: 28px
    right: 0
    bottom: 0px
    left: 0
    font-size: 13px
    line-height: 21px

    & *
        font-family: monospace !important

.toolbar
    position: fixed
    bottom: 0
    left: 0
    right: 0
    background: #f1f1f1
    border-top: 1px solid #e5e5e5

    div
        margin: 0 !important

    button
        border-radius: 0 !important
        border: 0 !important
        margin: 0 !important
</style>

<template lang="pug">
    div
        //- 導航選單
        docs-navbar

        div(:class="[!twoColumns ? $style.wrapper_oneColumn : '', $style.wrapper]")
            div(:class="$style.code", v-show="code")
                label(:class="$style.label") HTML (Tocas UI)
                #editor(:class="$style.editor") {{ html }}

            div(:class="$style.preview_wrapper", v-show="preview")
                label(:class="$style.label") 即時預覽
                div(:class="$style.preview")
                    div(v-html="html")

        div(:class="$style.toolbar")
            .ts.fitted.secondary.menu
                .item
                    button.ts.very.compact.small.icon.labeled.button(:class="{active: twoColumns}", @click="toggleColumns")
                        i.columns.icon
                        | 兩欄模式
                .item
                    button.ts.very.compact.small.icon.labeled.button(:class="{active: code}", @click="toggleCode")
                        i.code.icon
                        | 程式碼
                .item
                    button.ts.very.compact.small.icon.labeled.button(:class="{active: preview}", @click="togglePreview")
                        i.unhide.icon
                        | 即時預覽
                .right.menu
                    .item
                        button.ts.very.compact.small.icon.labeled.button#share(@click="share", :class="{'disabled': copied}")
                            i.share.icon
                            template(v-if="!copied")
                                | 分享
                            template(v-if="copied")
                                | 已複製！
                    .item
                        button.ts.very.compact.small.icon.labeled.button(@click="create", v-if="hasHTML")
                            i.plus.icon
                            | 建立新的
</template>

<script lang="coffee">
import DocsSlate        from 'components/slate'
import DocsNavbar       from 'components/navbar'
import DocsCards        from 'components/cards'
import DocsItem         from 'components/item'
import DocsFooter       from 'components/footer'
import placeholderKaren from 'images/videos/karen.png'

export default
    name: 'Try'
    data: ->
        html: """
            <!-- 標題 -->
            <div class="ts large header">
                <i class="top aligned smile icon"></i>
                <div class="content">
                    歡迎來到遊樂場！
                    <div class="sub header">你可以編輯這裡的所有文字。</div>
                </div>
            </div>
            <!-- / 標題 -->

            <!-- 說明 -->
            <p>透過上方的 <a href="https://ace.c9.io/">Ace Editor</a> 你能夠編輯 HTML 標籤，並開始嚐鮮試用 Tocas UI！而且有趣的是你所編輯的 HTML 標籤都會立即呈現在頁面的即時預覽上！</p>
            <!-- / 說明 -->

            <!-- 圖片 -->
            <img class="ts centered big image" src="#{placeholderKaren}">
            <!-- / 圖片 -->

            <p>我們已經幫你讀取好最新的 Tocas UI 樣式庫了，接下來你要做的就是去文件中，抓幾個範例丟來這裡試試看。</p>

            <!-- 引言 -->
            <div class="ts quote">
                <p>天阿！這真是太夭壽讚了！這裡還能夠擺放引言元件！</p>
                <cite>Tocas UI 作者如此說道</cite>
            </div>
            <!-- / 引言 -->
        """
        copied     : false
        hasHTML    : false
        twoColumns : true
        preview    : true
        code       : true
        editor     : null

    mounted: ->
        that    = @
        @editor = ace.edit 'editor'
        @editor.getSession().setMode 'ace/mode/html'
        @editor.getSession().setUseWrapMode true
        @editor.setShowPrintMargin false

        timer  = 0
        @editor.getSession().on 'change', (e) ->
            clearTimeout timer
            timer = setTimeout () ->
                that.html = that.editor.getValue()
            , 1

        if typeof @$route.query.html isnt 'undefined'
            @editor.setValue @$route.query.html.replace(/\\n/g, "\n")
            @hasHTML = true

        new Clipboard '#share', text: ->
            content = encodeURI that.editor.getValue().replace(/(?:\r\n|\r|\n)/g, '\\n')
            "https://#{location.host}#{location.pathname}?html=#{content}"

    methods:
        # togglePreview 會切換預覽模式。
        togglePreview: ->
            if @code is false and !@preview is false
                @code    = true
                @preview = false
                return
            @preview = !@preview

            setTimeout () ->
                ace.edit('editor').resize()
            , 1

        # togglePreview 會切換預覽模式。
        toggleCode: ->
            if @preview is false and !@code is false
                @preview = true
                @code    = false
                return
            @code = !@code
            setTimeout () ->
                ace.edit('editor').resize()
            , 1

        # toggleColumns 會切換多欄與單欄模式。
        toggleColumns: ->
            @twoColumns = !@twoColumns
            setTimeout () ->
                ace.edit('editor').resize()
            , 1

        # share 會暫時地將 `copied` 狀態切換成 True 已表示複製成功。
        share: (event) ->
            that    = @
            @copied = true
            setTimeout () ->
                that.copied = false
            , 2000

    components: {
        DocsSlate,
        DocsNavbar,
        DocsCards,
        DocsItem,
        DocsFooter
    }
</script>