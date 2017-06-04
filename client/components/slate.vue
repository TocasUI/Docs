<style lang="sass" module>
.slate
    font-size: 1.7em !important
    //background-color: #87bdd1 !important
    color: #646464 !important
    padding: 1.8em 2em 3em 2em !important

.header
    margin-bottom: .5em !important

.description
    font-size: .8em !important

.tabGird
    margin-bottom: -4em !important

.tab
    margin-bottom: -5.1em !important
    margin: 3.1em 0 1.3em 0 !important
    width: 100% !important

    a
        flex: 1
        justify-content: center
</style>

<template lang="pug">
    .ts.fluid.vertically.padded.heading.slate(:class="$style.slate")
        .ts.narrow.container
            .header(:class="$style.header")
                slot(name="header")
            .description(:class="$style.description")
                slot(name="description")
        .ts.narrow.container.relaxed.grid(:class="$style.tabGird", v-if="this.$slots.tab")
            .four.wide.column
            .twelve.wide.column
                .ts.bottom.attached.tabbed.menu(:class="$style.tab")
                    slot(name="tab")
</template>

<script>
export default {
    name: 'Slate'
}
</script>