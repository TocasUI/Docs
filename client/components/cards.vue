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
    .ts.narrow.container
        .ts.doubling.four.link.cards
            router-link.ts.card(:to="item.link", v-for="item in items", :key="item.title")
                .content
                    .header {{ item.title }}
                    .meta: div {{ item.class }}
                    .description {{ item.description }}
                .symbol
                    i.icon(:class="item.symbol")
</template>

<script>
export default {
    name: 'Cards',
    props: {
        items: { default: null }
    }
}
</script>