<template>
  <div>
    <input class="text-input" :type="type" :value="initText" @input="update" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  // props: ['initText', 'placeholder'],
  props: {
    initText: {
      default: ''
    },
    placeholder: {
      default: ''
    },
    type: {
      default: 'text'
    }
  },

  data: function () {
    return {
      text: ''
    }
  },

  methods: {
    update: function (event) {
      this.text = event.target.value
      this.$emit('input', this.text)
    }
  }
}
</script>

<style lang="sass" scoped>
  .text-input
    border: none
    border-bottom: 1px solid #dddddd
    outline: none
    transition: border-bottom-color 0.5s ease-in
    font-size: 14px
    color: #414141
    width: 360px
    // -webkit-box-sizing: border-box
    // -moz-box-sizing: border-box
    // box-sizing: border-box

    &:focus
      // background-color: red
      border-bottom-color: #00615d

      border-bottom-width: 1px
    &::placeholder
      // font-size: 30px
      text-transform: capitalize
      color: #848484

</style>
