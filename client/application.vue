<style lang="sass">
@import "~./assets/hightlight-js.css"
@import "~./assets/tocas.css"

body, html
    margin: 0
    height: 100%
</style>

<template lang="pug">
    div
        .ts.left.sidebar.inverted.vertical.menu
            a.item(href="#!") 首頁
            a.item(href="#!") 文件
            a.item(href="#!") 部落格
        .ts.left.sidebar
            .ts.header
                | 搭拉！
                .sub.header 你打開了秘密的側邊欄！
            .ts.segment
                | 你可以像這樣在側邊欄放置很多不同的元件。
        .pusher
            router-view
</template>

<script>
export default {
    name: 'Application'
}
</script>