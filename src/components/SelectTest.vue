<template>
  <div>


    <div class="box-wrapper">
      <select class="select-wrapper" @click="qqq" @focus="fff" v-model="selected" >
        <!-- <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option> -->

        <option v-for="(item, index) in dataList" :key="index">
          {{item}}
        </option>
      </select>

      <div class="icon-wrapper" v-bind:class="{ 'open': isOpen}">
        <i class="fas fa-sort-down"></i>
      </div>

    </div>
    {{selected}}
  </div>
</template>

<script>
export default {
  props: {
    dataList: {

    },
    id: {

    }
  },

  data: function () {
    return {
      isOpen: false,
      selected: []
    }
  },

  methods: {
    init: function () {
      this.yy = document.querySelector('select')
      console.log(this.yy)
    },

    qqq: function (e) {
      // console.log('clicked')
      // e.target.blur()
      this.isOpen = false
      this.$emit('selectUpdate', {
        id: this.id,
        selected: this.selected
      })
      // console.log('qqq', e.target.getAttribute(':focus'))
      // console.log('zzz', this.yy.getAttribute(':focus'))
    },

    fff: function (e) {
      // console.log('fff', e.target.focus())
      console.log('fff', e.target)

      this.isOpen = true
    },

    closeOutside: function () {
      if (this.isOpen) {
        this.isOpen = false
        this.yy.blur()
      }
    }
  },

  mounted: function () {
    this.init()
  },

  // created () {
  //   window.addEventListener('click', this.closeOutside)
  // },

  // beforeDestroy () {
  //   window.removeEventListener('click', this.closeOutside)
  // }

}
</script>

<style lang="sass" scoped>
.box-wrapper
  display: grid
  background-color: red
  width: 150px
  height: 30px
  grid-template-columns: 120px 30px
  justify-content: center
  align-items: center
  // position: relative
  // &::after
  //   content: 'xxx'
  .icon-wrapper
    display: flex
    align-items: center
    // justify-content: center
    margin: 0 10px
    margin-bottom: 5px
    transform: rotate(0deg)
    transition: 0.5s

  .open
    transform: rotate(180deg) translate(0%, -50%)

    // padding: 16px

  .select-wrapper
    // background-color: #0563af
    color: white
    // padding: 4px
    width: 150px
    height: 30px
    // width: 100%
    border: none
    font-size: 20px
    // box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2)
    -webkit-appearance: none
    -moz-appearance: none
    appearance: none
    outline: none

</style>
