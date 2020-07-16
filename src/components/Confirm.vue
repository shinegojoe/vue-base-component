<template>
    <div>
      <div class="title-wrapper">
        <slot></slot>
      </div>

      <div class="btn-wrapper">
        <button @click="cancel" class="btn-base">cancel</button>
        <button @click="confirm" class="btn-base">ok</button>
      </div>

    </div>
</template>

<script>
export default {

  methods: {
    cancel: function () {
      this.$emit('input', false)
    },

    confirm: function () {
      this.$emit('confirm')
    }
  }

}
</script>

<style lang="sass" scoped>
.confirm-wrapper
  display: flex
  flex-direction: column
  // justify-content: center
  align-items: center
  width: 300px
  // height: 120px
  background-color: #333333
  border-radius: 4px
  position: absolute
  bottom: 20px
  right: 20px
  color: white
  // text-align: center
  box-shadow: 0.5px 0.5px 5px 0 #333333
  .title-wrapper
    font-size: 30px
    margin: 30px 0
    // display: flex
  .btn-wrapper
    display: flex
    // background-color: red
    width: 100%
    justify-content: space-around
    margin-bottom: 20px

</style>