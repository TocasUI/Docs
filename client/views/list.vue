<style lang="sass" module>
.loader
    height: calc(100vh - 45px - 212px)
    display: flex
    align-items: center
    justify-content: center
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

        //- 文件板岩
        docs-slate(v-if="docs.slate")
            template(slot="header")      {{ docs.slate.title }}
            template(slot="description"): span(v-html="docs.slate.description")

        //- 元素卡片
        docs-cards(:items="docs.items", :columns="docs.columns", :isStackable="docs.isStackable")

        //- 頁腳
        docs-footer
</template>

<script lang="coffee">
import DocsSlate  from 'components/slate'
import DocsNavbar from 'components/navbar'
import DocsCards  from 'components/cards'
import DocsFooter from 'components/footer'
import store      from '../store'

export default
    name: 'List'
    data: ->
        docs: {}
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
        DocsFooter
    }
</script>