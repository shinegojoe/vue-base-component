<template>
  <div>
    <div class="menu-btn" @click="menuClick">
      <div class="menu-title">{{title}}</div>
      <div class="icon-wrapper" v-bind:class="{ 'icon-open': isOpen}">
        <i class="fas fa-sort-down"></i>
      </div>
    </div>

    <div v-for="(item, index) in testData" :key="index+'_'" >
      <div class="checkbox-wrapperxx">
        <div class="test" v-bind:class="{ 'menu-open': isOpen }" @click="xxx($event, item)">
          <div class="zzz" v-bind:class="{ 'ccc': item.isChecked}"></div>
        </div>

      </div>
    </div>

    <div v-for="(item, index) of selectedList" :key="index">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['testData'],
  data: function () {
    return {
      title: 'open',
      isOpen: false,
      selectedList: undefined
    }
  },

  watch: {
    testData: function () {
      console.log('www')
      this.selectedListInit()
    }
  },

  methods: {

    selectedListInit () {
      this.selectedList = new Map()
      for (const item of this.testData) {
        if (item.isChecked) {
          this.selectedList.set(item.name, item)
        }
      }
    },

    menuClick: function (e) {
      this.isOpen = !this.isOpen
      e.stopPropagation()
    },

    xxx: function (e, item) {
      console.log('item', item)
      item.isChecked = !item.isChecked
      // this.isOpen = false
      if (item.isChecked) {
        this.selectedList.set(item.name, item)
      } else {
        this.selectedList.delete(item.name)
      }
      this.title = item.name
      this.$emit('selectUpdate', this.selectedList.values())
      e.stopPropagation()

    },

    closeOutside: function () {
      if (this.isOpen) {
        this.isOpen = false
      }
    }
  },

  created: function () {
    this.selectedListInit()
    window.addEventListener('click', this.closeOutside)
  },

  beforeDestroy () {
    window.removeEventListener('click', this.closeOutside)
  }
}
</script>

<style lang="sass" scoped>

.menu-btn
  width: 200px
  height: 40px
  border: 1px solid
  box-sizing: border-box
  display: flex
  align-items: center

.checkbox-wrapperxx
  .test
    display: flex
    align-items: center
    width: 200px
    height: 20px
    background-color: red
    visibility: hidden
  .menu-open
    visibility: visible
  .zzz
    width: 16px
    height: 16px
    // background-color: blue
    border: 1px solid
    position: relative
    &::after
      content: ''
      width: 9px
      height: 5px
      position: absolute
      top: 2px
      left: 2px
      border: 2px solid white
      border-top: none
      border-right: none
      background: transparent
      opacity: 0
      transform: rotate(-45deg)
  .ccc
    &::after
      opacity: 1
  .title
    // position: absolute
    // top: 0
    // left: 0
    // margin-left: -120px
.icon-wrapper
  display: flex
  align-items: center
  justify-content: flex-end
  margin-left: 130px
  margin-bottom: 5px
  transform: rotate(0deg)
  transition: 0.5s
  // background-color: red
  // width: 100%

.icon-open
  transform: rotate(180deg) translate(0%, -50%)


</style>
