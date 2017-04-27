<style lang="sass">
</style>

<template lang="pug">
    div
        //- 導航選單
        docs-navbar

        //- 文件板岩
        docs-slate
            template(slot="header") {{ $route.meta.slate.title }}
            template(slot="description") {{ $route.meta.slate.description }}

        //- 元素卡片
        docs-cards(:items="$route.meta.items")

        //- 頁腳
        docs-footer
</template>

<script>
import DocsSlate  from 'components/slate'
import DocsNavbar from 'components/navbar'
import DocsCards  from 'components/cards'
import DocsFooter from 'components/footer'

export default {
    name: 'List',
    components: {
        DocsSlate,
        DocsNavbar,
        DocsCards,
        DocsFooter
    }
}
</script>