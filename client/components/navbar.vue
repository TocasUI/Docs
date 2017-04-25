<style lang="sass" module>
.menu
    font-size: 16px !important

    &[is-homepage]
        background-color: #87bdd1 !important
</style>

<template lang="pug">
    .ts.fluid.top.attached.pure.basic.menu(:class='[isHomepage?"inverted":"", $style.menu]', :is-homepage="isHomepage")
        .ts.narrow.container
            router-link.item(to='/getting-started') Tocas UI
            router-link.item(to='/getting-started') 從這開始
            router-link.item(to='/getting-started') 一般元素
            router-link.item(to='/getting-started') 聚合型
            router-link.item(to='/getting-started') 模塊
            router-link.item(to='/getting-started') 視圖型
            router-link.item(to='/getting-started') 響應式

            //- 右側選單
            .right.menu
                router-link.item(to='/getting-started') GitHub
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        isHomepage: { default: false }
    }
}
</script>