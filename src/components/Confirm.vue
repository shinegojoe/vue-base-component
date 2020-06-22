<template>
    <div v-show="isShow" class="confirm-wrapper">
      <slot></slot>
      <button @click="cancel" class="btn-base">cancel</button>
      <button @click="confirm" class="btn-base">ok</button>

    </div>
</template>

<script>
export default {
  props: ['isShow'],

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
  justify-content: center
  align-items: flex-end
  width: 300px
  height: 120px
  background-color: #333333
  border-radius: 4px
  position: absolute
  bottom: 20px
  right: 20px
  color: white
  // text-align: center
  box-shadow: 0.5px 0.5px 5px 0 #333333

</style>