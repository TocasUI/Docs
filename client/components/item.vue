<style lang="sass" module>
.itemHeader, .itemSubHeader
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

.itemSourceButton
    font-size: .8rem !important

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
        //- 標題
        .ts.header(:class="$style.itemHeader", v-if="item.title")
            | {{ item.title }}
            //- 檢視原始碼按鈕
            button.ts.right.floated.icon.labeled.button(:class="[showingCode ? 'active' : '', $style.itemSourceButton]", @click="toggleCode")
                i.code.icon
                | 原始碼
        //- 副標題
        .ts.header(:class="$style.itemSubHeader", v-if="item.subtitle") {{ item.subtitle }}
        //- 詳細註釋
        div(v-html="item.description")

        //- Demo 區塊
        .ts.segments(:class="$style.demo")
            //- 實際範例
            .ts.padded.clearing.segment(v-html="cleanMark(item.code)", :class="{'fitted basic': !showingCode}")
            //- 程式碼區塊
            .ts.secondary.padded.segment(v-show="showingCode")
                pre(html-code, v-text="item.code", :class="$style.code")

        //- JavaScript 區塊
        .ts.header(:class="$style.itemSubHeader", v-if="item.javascript") JavaScript
        //- 程式碼區塊
        .ts.secondary.padded.segment(v-if="item.javascript")
            pre(js-code, v-text="item.javascript", :class="$style.code")
</template>

<script>
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
    methods: {
        cleanMark(code) {
            return code.replace(/\[\[(.*?)\]\]/g, "$1").replace(/{{(.*?)}}/g, "$1")
        },
        toggleCode() {
            this.showingCode = !this.showingCode
        }
    }
}
</script>