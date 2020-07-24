<template>
 <div class="tab-wrapper">
   <div
     class="tab-head"
     @click="switchTab(item)"
     v-bind:class="{ 'isActivate': item.state}"
     v-for="(item, index) in headList" :key="index">
     <div class="item">
       <div>{{item.name}}</div>
       <div class="line" v-bind:class="{ 'a': item.state, 'last-line': item.name === ''}"></div>
     </div>

   </div>
 </div>
</template>

<script>
export default {
  props: ['tabList'],

  data: function () {
    return {
      tabMap: undefined,
      headList: [],
      currentPage: undefined
    }
  },

  methods: {
    headInit () {
      const dataMap = new Map()
      for (const item of this.tabList) {
        dataMap.set(item.name, item)
      }
      return dataMap
    },

    switchTab: function (page) {
      // console.log('name', page)
      if (page.name !== this.currentPage.name) {
        const newPage = this.tabMap.get(page.name)
        newPage.state = true
        this.currentPage.state = false
        // this.tabMap.set(this.currentPage.name, this.currentPage)
        // this.tabMap.set(newPage.name, newPage.name)
        this.headList = this.getMapValues()
        // console.log('current', this.currentPage)
        this.currentPage = newPage
        this.$emit('tabSwitch', this.currentPage)
      }
    },

    checkCurrentPage: function () {
      const headList = this.getMapValues()
      for (const item of headList) {
        console.log('item', item)
        if (item.state) {
          return item
        }
      }
    },

    getMapValues: function () {
      return this.tabMap.values()
    }
  },

  mounted: function () {
    this.tabMap = this.headInit()
    this.headList = this.getMapValues()
    this.currentPage = this.checkCurrentPage()
    this.$emit('tabSwitch', this.currentPage)
  }

}
</script>
 
 
<style lang="sass" scoped>
.tab-wrapper
  display: flex
  background-color: white
  width: 920px
  margin: 5px 15px
  
  // justify-content: center
  // border-bottom: 5px solid

.tab-head
  width: 150px
  height: 40px
  // background-color: green
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  color: #999999

  // box-sizing: border-box

  // border-bottom: 5px solid gray
  &:hover
    opacity: 0.5
    // height: 35px
    // background-color: rgb(203, 30, 30)
    // border-bottom: 2px solid white
  .item
    display: flex
    flex-direction: column
    align-items: center
    // justify-content: center
  &:last-child
    // background-color: red
    height: 64px
    width: 300px
    cursor: auto
    pointer-events: none

    &:hover
     opacity: 1
.isActivate
  // box-sizing: border-box
  transition: 0.4s
  transition-timing-function: linear
  // border-bottom: 2px solid blue
  color: #00a487 !important

  &:hover
    // background-color: green
    // border-bottom: 2px solid blue
//  .item
//    display: flex
//    flex-direction: column
//    align-items: center
//    color: red
//    // justify-content: center
.line
  position: relative
  top: 10px
  // width: 150px
  width: 150px
  border: 1px solid #efefef
.last-line
  // width: 150px
  width: 350px
.a
  border: 1px solid #00a487
 
</style>
