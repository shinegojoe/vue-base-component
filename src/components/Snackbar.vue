<template>
  <div v-show="isShow" class="snackbar">xxxx
    {{isShow}}
  </div>
</template>

<script>
export default {
  props: ['isShow'],
  watch: {
    isShow: function () {
      console.log('changed')
      setTimeout(() => {
        this.$emit('input', false)
      }, 2000)
    }
  }

  // data: function () {
  //   return {
  //     isShow: false
  //   }
  // },
  // methods: {
  //   open () {
  //     this.isShow = true
  //     setTimeout(() => {
  //       this.isShow = false
  //     }, 2000)
  //   }
  // }
}
</script>

<style lang="sass" scoped>
.snackbar
  display: flex
  justify-content: center
  align-items: center
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
