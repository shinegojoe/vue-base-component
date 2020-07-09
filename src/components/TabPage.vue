<template>
 <div class="tab-wrapper">
   <div
     class="tab-head"
     @click="switchTab(item.name)"
     v-bind:class="{ 'isActivate': item.state}"
     v-for="(item, index) in headList" :key="index">
     <div class="item">
       <div>{{item.name}}</div>
       <div class="line" v-bind:class="{ 'a': item.state}"></div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  props: ['tabList'],

  data: function () {
    return {
      headList: undefined
      // headList: [
      //   { name: 'tab1', state: true },
      //   { name: 'tab2', state: false },
      //   { name: 'tab3', state: false }
      // ]
    }
  },

  methods: {
    headInit () {
      const headList = []
      for (const name of this.tabList) {
        const item = { name: name, state: false }
        headList.push(item)
      }
      headList[0].state = true
      return headList
    },

    switchTab: function (name) {
      for (const item of this.headList) {
        if (item.name === name) {
          item.state = true
        } else {
          item.state = false
        }
      }
      console.log('name', name)
      this.$emit('tabSwitch', name)

      // this.$router.push('/tabPage/' + name)
    }
  },

  mounted: function () {
    this.headList = this.headInit()
    this.$emit('tabSwitch', this.headList[0].name)
  }

}
</script>
 
<style lang="sass" scoped>
.tab-wrapper
  display: flex
  background-color: white
  width: 1000px
  justify-content: center
  // border-bottom: 5px solid

.tab-head
  width: 200px
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
  width: 200px
  border: 1px solid #efefef
.a
  border: 1px solid #00a487
 
</style>

