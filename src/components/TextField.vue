<template>
  <div class="text">
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      default: 'xxx'
    }
  }
}
</script>

<style lang="sass" scoped>
  .text
    color: #414141
    width: 200px
    border-bottom: 1px solid #dddddd
    padding-bottom: 2px

</style>
