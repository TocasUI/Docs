<style lang="sass" module>
.menu
    font-size: 16px !important

    &[is-homepage]
        background-color: #87bdd1 !important
</style>

<template lang="pug">
    .ts.fluid.top.attached.link.basic.menu(:class='[isHomepage?"inverted":"", $style.menu]', :is-homepage="isHomepage")
        .ts.narrow.container
            router-link.item(to='/') Tocas UI
            router-link.item(to='/getting-started') 從這開始
            router-link.item(to='/elements') 一般元素
            router-link.item(to='/collections') 聚合型
            router-link.item(to='/modules') 模塊
            router-link.item(to='/views') 視圖型
            router-link.item(to='/rwd') 響應式

            //- 右側選單
            .right.menu
                a.item(href="//github.com/TeaMeow/TocasUI", target="_blank") GitHub
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        isHomepage: { default: false }
    }
}
</script>