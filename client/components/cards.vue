<style lang="sass" scoped>
.container
    margin-top: 2.3em
    padding-bottom: 2.3em

.card
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
        .ts.doubling.link.cards(:class="columns")
            router-link.ts.card(:to="item.link", v-for="item in items", :key="item.title")
                .image(v-if="item.image")
                    img(:src="item.image")
                .content
                    .header {{ item.title }}
                    .meta(v-if="item.class"): div {{ item.class }}
                    .description {{ item.description }}
                .symbol
                    i.icon(:class="item.symbol")
</template>

<script>
export default {
    name: 'Cards',
    props: {
        columns: { default: 'four' },
        items  : { default: null }
    }
}
</script>