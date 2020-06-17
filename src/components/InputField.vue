<template>
  <div>
    <input class="text-input" v-model="text">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      text: ''
    }
  },

  watch: {
    text: function () {
      this.$emit('input', this.text)
    }
  }
}
</script>

<style lang="sass" scoped>
  .text-input
    padding: 6px 0
    border: none
    border-bottom: 1px solid #dddddd
    outline: none
    transition: border-bottom-color 0.5s ease-in
    font-size: 14px
    color: #414141
    width: 200px
    // -webkit-box-sizing: border-box
    // -moz-box-sizing: border-box
    // box-sizing: border-box

    &:focus
      // background-color: red
      border-bottom-color: #2f52a2
      border-bottom-width: 1px

</style>
