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
</style>

<template lang="pug">
    .ts.fluid.vertically.padded.heading.slate(:class="$style.slate")
        .ts.narrow.container
            .header(:class="$style.header")
                slot(name="header")
            .description(:class="$style.description")
                slot(name="description")
</template>

<script>
export default {
    name: 'Slate'
}
</script>