<template>
  <div class="dropdown-wrapper">
    <div @click="menuBtnClick" class="menu-btn-wrapper">
      <button class="menu-btn"
        >{{title}}
      </button>
      <div class="icon-wrapper" v-bind:class="{'icon-open': isOpen}">
        <i class="fas fa-angle-double-down"></i>
      </div>

    </div>
    <div class="item-list-wrapper" v-if="isOpen">
      <div  v-for="(item, index) in itemList" :key="index">
        <div @click="itemClick(item)" class="item">
          {{item.title}}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      defalut: [1, 2, 5]
    }
  },

  data: function () {
    return {
      title: 'xxx',
      // itemList: [1, 23, 5],
      isOpen: false
    }
  },

  methods: {
    closeOutside: function () {
      if (this.isOpen) {
        this.isOpen = false
      }
    },

    menuBtnClick: function (el) {
      // if(!isEnter)
      // console.log('el')
      this.isOpen = !this.isOpen
      el.stopPropagation()
    },

    itemClick: function (item) {
      // console.log('item', item)
      this.title = item.title
      this.$emit('itemUpdate', item)
    },

    checkItemState: function () {
      for (const item of this.itemList) {
        if (item.isSelected) {
          return item.title
        }
      }
      return this.itemList[0].title
    }
  },

  mounted: function () {
    // console.log('this. itemlist', this.itemList)
    this.title = this.checkItemState()
    // for (const item of this.itemList) {
    //   if (item.isSelected) {
    //     this.title = item.title
    //     break
    //   }
    // }
    // this.title = this.itemList[0].item
    // window.onclick = function (event) {
    //   console.log('xxx', event)
    // }
    // document.onclick = function (event) {
    //   console.log('ccc', event.target)
    // }
  },

  created () {
    window.addEventListener('click', this.closeOutside)
  },

  beforeDestroy () {
    window.removeEventListener('click', this.closeOutside)
  }
}
</script>

<style lang='sass' scoped>
.dropdown-wrapper
  width: 200px
  // display: flex
  // flex-direction: column
  // position: relative
  .menu-btn-wrapper
    width: 100%
    display: grid
    grid-template-columns: minmax(20px, auto) 10px 10px minmax(5px, 10px)
    grid-template-rows: auto

    // justify-content: space-between
    .menu-btn

      width: 100%
      // height: 50px
      grid-column-start: 1
      grid-column-end: 5
      grid-row-start: 1
      grid-row-end: 2
      border: none
      border-bottom: 1px solid #dddddd
      background-color: transparent
      outline: none
      padding-bottom: 6px

      font-size: 14px
      font-weight: normal
      font-stretch: normal
      font-style: normal
      line-height: normal
      letter-spacing: normal
      color: #414141
      text-align: left

  .icon-wrapper
    // position: relative
    // left: -20px
    color: #414141
    grid-column-start: 3
    grid-column-end: 4
    grid-row-start: 1
    grid-row-end: 2

    display: flex
    align-items: center
    justify-content: center
    // transform: rotate(90deg)
    // background-color: red
    // margin-left: -20px
    transition: 0.5s

  .icon-open
    transition: 0.5s
    transform: rotate(180deg)
  .item-list-wrapper
    position: absolute
    background-color: white
    width: 200px
    border: 1px solid #dddddd
    border-top: none
    border-bottom-left-radius: 3px
    border-bottom-right-radius: 3px
    // position: absolute
    // width: 500px
    // display: flex
    // flex-direction: column

    z-index: 100

    .item
      // background-color: red
      // text-align: center
      // position: relative
      padding-top: 5px
      padding-bottom: 5px
      padding-left: 6px

      // border-bottom: 1px solid
      //box-sizing: border-box

      // &:nth-child(1)
      //   padding-top: 10px
      &:hover
        background-color: #dddddd

</style>
