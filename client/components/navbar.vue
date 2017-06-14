<style lang="sass" module>
.menu
    font-size: 16px !important

    &[is-homepage]
        background-color: #87bdd1 !important

.languageTag
    transition: opacity 600ms cubic-bezier(0.77, 0, 0.175, 1)
    opacity: 0
    //display: none

.languageTag[active]
    display: inline
    opacity: 1

.languageDefault
    transition: opacity 600ms cubic-bezier(0.77, 0, 0.175, 1)

.languageDefault[disabled]
    opacity: 0
</style>

<template lang="pug">
    .ts.fluid.top.attached.horizontally.scrollable.link.basic.menu(:class='[isHomepage?"inverted":"", $style.menu]', :is-homepage="isHomepage")
        .ts.narrow.container
            router-link.item(to='/') Tocas UI
            router-link.item(to='/starts') 從這開始
            router-link.item(to='/elements') 一般元素
            router-link.item(to='/collections') 聚合型
            router-link.item(to='/modules') 模塊
            router-link.item(to='/views') 視圖型
            router-link.item(to='/rwd') 響應式

            //- 右側選單
            .right.menu
                a.item
                    span(:class="$style.languageDefault")
                        i.globe.icon
                        | Languages
                a.item(href="//github.com/TeaMeow/TocasUI", target="_blank") GitHub
</template>

<script lang="coffee">
export default
    name : 'Navbar'
    props:
        isHomepage:
            default: false
    mounted: ->
        that = @
        setTimeout ->
            document.querySelector(".#{that.$style.languageDefault}").setAttribute("disabled", "disabled")
            setTimeout ->
                document.querySelector(".#{that.$style.languageDefault}").innerHTML = "<i class='globe icon'></i> 正體中文（台灣）"
                document.querySelector(".#{that.$style.languageDefault}").removeAttribute("disabled")
            , 600
        , 1000
</script>