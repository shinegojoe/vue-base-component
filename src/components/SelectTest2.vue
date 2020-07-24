<template>
  <div>
    <div class="menu-btn" @click="menuClick" v-bind:style="menuColor()">
      <div class="menu-title">{{title}}</div>
      <div class="icon-wrapper" v-bind:class="{ 'icon-open': isOpen}">
        <i class="fas fa-sort-down"></i>
      </div>
    </div>

    <div class="item-list-wrapper" v-bind:class="{ 'menu-open': isOpen }">
      <div v-for="(item, index) in dataList" :key="index+'_'" >
          <div class="row-row"  @click="itemClick($event, item)">
            <div class="box-style" v-bind:class="{ 'box-checked': item.isChecked}"></div>
            <div class="item-text">{{item.name}}</div>
          </div>
      </div>

    </div>


    <!-- <div v-for="(item, index) of selectedList" :key="index">
      {{item}}
    </div> -->
  </div>
</template>

<script>
import { CloseOutsideManager } from '@/models/closeOutsideManager.js'

export default {
  props: ['testData', 'id'],
  data: function () {
    return {
      closeOutsideManager: undefined,
      title: 'open',
      isOpen: false,
      selectedList: undefined,
      maxLength: 20
    }
  },

  // watch: {
  //   testData: function () {
  //     console.log('www')
  //     this.selectedListInit()
  //   }
  // },

  methods: {
    menuColor: function () {
      if (this.isOpen) {
        return {
          'background-color': 'rgba(147, 255, 224, 0.2)'
        }
      } else {
        return {
          'background-color': 'white'
        }
      }
    },

    selectedListInit () {
      this.selectedList = new Map()
      for (const item of this.testData) {
        if (item.isChecked) {
          this.selectedList.set(item.name, item)
        }
      }
    },
    updateTitle: function () {
      this.title = ''
      for (const item of this.selectedList.values()) {
        if (item.isChecked) {
          const titleLength = this.title.length + item.name.length
          if (titleLength > this.maxLength) {
            this.title = this.title.slice(0, this.title.length - 2)
            this.title += ' .... '
            // this.title = this.title.slice(0, this.title.length - 2)
            break
          } else {
            this.title += item.name + ' , '
          }
        }
      }
      console.log('title', this.title.length)
      this.title = this.title.slice(0, this.title.length - 2)

      // if (this.title.length > this.maxLength) {
      //   this.title = this.title.slice(0, this.maxLength)
      //   this.title += ' ... '
      // } else {
      //   this.title = this.title.slice(0, this.title.length - 2)
      // }
    },

    menuClick: function (e) {
      this.isOpen = !this.isOpen
      this.closeOutsideManager.closeAll(this)
      e.stopPropagation()
    },

    itemClick: function (e, item) {
      console.log('item', item)
      item.isChecked = !item.isChecked
      // this.isOpen = false
      if (item.isChecked) {
        this.selectedList.set(item.name, item)
      } else {
        this.selectedList.delete(item.name)
      }
      this.title = item.name
      const data = {
        id: this.id,
        selectedList: this.selectedList.values()
      }
      this.$emit('selectUpdate', data)
      // this.$emit('selectUpdate', this.selectedList.values())
      e.stopPropagation()
    },

    closeOutside: function () {
      if (this.isOpen) {
        this.isOpen = false
      }
    }
  },

  computed: {
    dataList: {
      get: function () {
        this.selectedListInit()
        this.updateTitle()
        return this.testData
      }
    }
  },

  created: function () {
    this.closeOutsideManager = new CloseOutsideManager()
    this.selectedListInit()
    this.closeOutsideManager.registe(this)
    window.addEventListener('click', this.closeOutside)
  },

  beforeDestroy () {
    window.removeEventListener('click', this.closeOutside)
    this.closeOutsideManager.remove(this)
  }
}
</script>

<style lang="sass" scoped>
.multi-dropdown-wrapper
  .menu-btn
    width: 330px
    height: 26px
    border: 1px solid
    box-sizing: border-box
    display: flex
    align-items: center
    position: relative
    border-radius: 5px
    border: solid 1px #00a487
    transition: 0.3s
    // background-color: rgba(147, 255, 224, 0.2)
    // background-color: rgba(147, 255, 224, 0.2)

    .menu-title
      font-size: 12px
      color: #00a487
      margin-left: 16px

  .item-list-wrapper
    margin-top: 3px
    border-radius: 5px
    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.5)
    background-color: white
    width: 330px
    visibility: hidden
    position: absolute
    z-index: 2

  .menu-open
    visibility: visible

  .row-row
    width: 330px
    height: 26px
    display: flex
    align-items: center
    // justify-content: space-around
    // background-color: white
    // margin: 10px

    &:hover
      background-color: rgba(147, 255, 224, 0.2)
    // visibility: hidden
    .item-text
      margin-left: 16px
      display: flex
      align-items: center
      font-size: 12px
      color: #00a487

      justify-content: center

    .menu-open
      visibility: visible
    .box-style
      margin-left: 16px
      width: 10px
      height: 10px
      background-color: #00615d
      border: 1px solid #979797
      position: relative
      &::after
        content: ''
        width: 6px
        height: 3px
        position: absolute
        top: 2px
        left: 2px
        border: 1px solid white
        border-top: none
        border-right: none
        background: transparent
        opacity: 0
        transform: rotate(-45deg)
    .box-checked
      &::after
        opacity: 1
    .title
      // position: absolute
      // top: 0
      // left: 0
      // margin-left: -120px
  .icon-wrapper
    position: absolute
    left: 300px
    top: 1px
    display: flex
    align-items: center
    justify-content: flex-end
    // margin-left: 130px
    margin-bottom: 5px
    transform: rotate(0deg)
    transition: 0.5s
    color: #00a487
    // background-color: red
    // width: 100%

  .icon-open
    transform: rotate(180deg) translate(0%, -50%)


</style>
