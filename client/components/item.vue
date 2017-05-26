<style lang="sass" module>
.itemHeader, .itemSubHeader
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

.itemSourceButton
    font-size: .8rem !important

.demo
    margin-top: 28px !important

.code
    margin: 0 !important
    white-space: pre-wrap !important

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

<style lang="sass">
[demo] > .ts.card
    width: 285px !important

[demo] > .sidebar
    height: 400px !important
    position: relative !important

[demo] > .right.sidebar
    position: absolute !important
    top: 0

[demo] > .active.snackbar:not(.inline)
    position: relative !important
    top: 0 !important
    left: 0 !important
    bottom: 0 !important
    right: 0 !important
    display: inline-flex !important
    margin-top: 100px !important

    &.top.left
        position: absolute !important
        top: -79px !important
        bottom: auto !important
        right: auto !important
        left: 21px !important

    &.top.right
        position: absolute !important
        top: -79px !important
        bottom: auto !important
        right: 21px !important
        left: auto !important

    &.bottom.right
        position: absolute !important
        top: auto !important
        bottom: 21px !important
        right: 21px !important
        left: auto !important

[demo][bordered]
    border: 1px solid #e9e9e9 !important

[demo][bordered] + .segment
    border-top: 0 !important
</style>

<template lang="pug">
    div
        //- 標題
        .ts.header(:class="$style.itemHeader", v-if="item.title")
            | {{ item.title }}
            //- 檢視原始碼按鈕
            button.ts.right.floated.icon.labeled.button(v-if="!item.codeOnly", :class="[showingCode ? 'active' : '', $style.itemSourceButton]", @click="toggleCode")
                i.code.icon
                | 原始碼
        //- 副標題
        .ts.header(:class="$style.itemSubHeader", v-if="item.subtitle") {{ item.subtitle }}
        //- 詳細註釋
        div(v-html="item.description")

        //- Demo 區塊
        .ts.segments(:class="$style.demo")
            //- 實際範例
            .ts.padded.clearing.segment(demo, v-if="!item.codeOnly", :bordered="item.bordered" v-html="cleanMark(item.code)", :class="{'fitted basic': !showingCode && !item.secondary, 'fitted': !showingCode && item.secondary, 'fitted': item.fitted, 'secondary': item.secondary}")
            //- 程式碼區塊
            .ts.secondary.padded.segment(v-show="showingCode || item.codeOnly")
                pre(html-code, v-text="item.code", :class="$style.code")

        //- JavaScript 區塊
        .ts.header(:class="$style.itemSubHeader", v-if="item.javascript")
            | JavaScript
            //- 執行按鈕
            button.ts.inverted.right.floated.icon.labeled.button(v-if="!item.autoExecute", :class="$style.itemSourceButton")
                i.bug.icon
                | 執行
        //- 程式碼區塊
        .ts.secondary.padded.segment(v-if="item.javascript")
            pre(js-code, v-text="item.javascript", :class="$style.code")
</template>

<script>
// Images
import placeholder169   from 'images/image_placeholder_16-9.png'
import placeholder11    from 'images/image_placeholder_1-1.png'
import placeholder43    from 'images/image_placeholder_4-3.png'
import placeholderUser  from 'images/image_placeholder_user.png'
import placeholderUser2 from 'images/image_placeholder_user2.png'
import placeholderUser3 from 'images/image_placeholder_user3.png'
import placeholderKaren from 'images/videos/karen.png'
import placeholderVimeo from 'images/videos/vimeo.jpg'
import 'assets/tocas.dev.js'

export default {
    name : 'Item',
    props: {
        item: { }
    },
    data() {
        return {
            showingCode: false
        }
    },
    mounted(){
        ts('.ts.embed').embed()
        ts('.ts.dropdown:not(.basic)').dropdown();

        if(typeof this.item.autoExecute !== 'undefined' && this.item.autoExecute)
            eval(this.item.javascript)
    },
    methods: {
        cleanMark(code) {
            // 將程式碼裡的 [[]] 和 {{}} 標籤去除掉。
            code = code.replace(/\[\[(.*?)\]\]/g, "$1").replace(/{{(.*?)}}/g, "$1")
            // 將程式碼裡的 !--! 圖片標籤換成真的圖片路徑。
            code = code.replace(/!-(.*?)-!/g, (match, first) => {
                switch(first) {
                    case '16:9'       : return placeholder169
                    case '1:1'        : return placeholder11
                    case '4:3'        : return placeholder43
                    case 'user'       : return placeholderUser
                    case 'user2'      : return placeholderUser2
                    case 'user3'      : return placeholderUser3
                    case 'embed:karen': return placeholderKaren
                    case 'embed:vimeo': return placeholderVimeo
                }
            })
            return code
        },
        toggleCode() {
            this.showingCode = !this.showingCode
        }
    }
}
</script>