<template>
  <div v-show="isShow" class="snackbar">
    <div class="msg-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isShow']
}
</script>

<style lang="sass" scoped>
.snackbar
  display: flex
  justify-content: center
  align-items: center
  width: 300px
  height: 80px
  background-color: #333333
  border-radius: 4px
  position: absolute
  bottom: 20px
  right: 20px
  color: white
  // text-align: center
  box-shadow: 0.5px 0.5px 5px 0 #333333
  .msg-wrapper
    font-size: 20px
    display: flex
    width: 100%
    height: 100%
    justify-content: flex-end
    align-items: flex-end
    padding-right: 30px
    padding-bottom: 30px

</style>
