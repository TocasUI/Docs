<style lang="sass" scoped>
.container
    margin-top: 2.3em
    padding-bottom: 2.3em

.card
    .image
        border-bottom: 1px solid #e9e9e9
    .content
        .header
            color: #5d5d5d

        .meta
            color: #a5a5a5

        .description
            color: #888888

    .symbol .icon:before
        opacity: 0.4
</style>

<template lang="pug">
    .ts.narrow.container(style="min-height: calc(100% - 483px)")
        .ts.doubling.link.cards(:class="[{'stackable': isStackable}, columns]")
            //-
            template(v-for="item in items")
                //-
                router-link.ts.card(:to="item.link", :key="item.title", v-if="!isExternal(item.link)")
                    .image(v-if="item.image")
                        img(:src="item.image")
                    .content
                        .header {{ item.title }}
                        .meta(v-if="item.class"): div {{ item.class }}
                        .description {{ item.description }}
                    .symbol
                        i.icon(:class="item.symbol")

                //-
                a.ts.card(:href="item.link", target="_blank", :key="item.title", v-if="isExternal(item.link)")
                    .image(v-if="item.image")
                        img(:src="item.image")
                    .content
                        .header {{ item.title }}
                        .meta(v-if="item.class"): div {{ item.class }}
                        .description {{ item.description }}
                    .symbol
                        i.icon(:class="item.symbol")
</template>

<script lang="coffee">
export default
    name : 'Cards'
    props:
        columns:
            default: 'four'
        isStackable:
            default: false
        items:
            default: null
    methods:
        isExternal: (url) -> url.indexOf('//') isnt -1
        link: (url) ->
            if url.indexOf('//') isnt -1
                window.open url, '_blank'
            else
                @$router.push(url)
</script>