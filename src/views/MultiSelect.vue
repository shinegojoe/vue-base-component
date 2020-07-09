<template>
  <div class="table-container">
    <div class="header-wrapper">
      <div class="" @click="selectAllClick">
        <div class="box-style" v-bind:class="{ 'box-checked': isSelectAll}"></div>
      </div>
      <div v-for="(item, index) in headers" :key="index">
        <div class="head-text">{{item}}</div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="table-wrapper">

      <div class="row-wrapper"  v-for="(item, index) in qqq" :key="index">
        <div class="row-item-wrapper">
          <div class="checkbox-wrapperxx">
            <div class="" @click="itemClick(item, index)" >
                <div class="box-style" v-bind:class="{ 'box-checked': item.isChecked}"></div>
            </div>
          </div>
          <div class="item-text">
            {{item.deviceId}}
          </div>
            <div class="item-text">
              {{item.address}}
            </div>
          </div>

        </div>


    </div>
    <!-- <div v-for="(item, index) in dataMap.values()" :key="index">
      {{item}}
    </div> -->

  </div>
</template>

<script>
export default {
  props: ['testData'],
  data: function () {
    return {
      headers: [
        'device ID', 'address'
      ],
      dataMap: new Map(),
      isSelectAll: true
    }
  },

  // watch: {
  //   testData: function () {
  //     this.init()
  //   }
  // },

  methods: {
    init: function () {
      for (const item of this.testData) {
        this.dataMap.set(item.deviceId, item)
      }
      this.$emit('selectUpdate', this.dataMap.values())
    },

    checkSelectAll: function () {
      if (this.isSelectAll) {
        for (const item of this.testData) {
          if (!item.isChecked) {
            this.isSelectAll = false
            return
          }
        }
      } else {
        for (const item of this.testData) {
          if (!item.isChecked) {
            return
          }
        }
        this.isSelectAll = true
      }
    },

    xx: function () {
      for (const item of this.testData) {
        if (!item.isChecked) {
          return
        }
      }
      this.isSelectAll = true
    },

    itemClick: function (item, index) {
      this.testData[index].isChecked = !this.testData[index].isChecked
      if (this.testData[index].isChecked) {
        this.dataMap.set(item.deviceId, item)
      } else {
        this.dataMap.delete(item.deviceId)
      }
      // this.xx()
      this.checkSelectAll()
      this.$emit('selectUpdate', this.dataMap.values())
    },

    selectAllClick: function () {
      this.isSelectAll = !this.isSelectAll
      if (this.isSelectAll) {
        this.selectAll()
      } else {
        this.removeAll()
      }
      this.$emit('selectUpdate', this.dataMap.values())
    },

    selectAll: function () {
      for (const item of this.testData) {
        item.isChecked = true
        this.dataMap.set(item.deviceId, item)
      }
    },

    removeAll: function () {
      for (const item of this.testData) {
        item.isChecked = false
      }
      this.dataMap.clear()
      // this.dataMap = new Map()
    }
  },

  created: function () {
    this.init()
  },

  computed: {
    qqq: {
      get: function () {
        console.log('xxx')
        this.init()
        return this.testData
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.table-container
  width: 460px
  border-radius: 5px
  border: solid 1px #00615d
  background-color: white
  .divider
    border: 1px solid #00651d

  .header-wrapper
    display: grid
    grid-template-columns: 40px 200px 200px
    margin: 10px

    .head-text
      color: #4c4948
      font-size: 12px

  .box-style
    width: 10px
    height: 10px
    border: solid 2px #979797

    position: relative
    cursor: pointer
    &::after
      content: ''
      width: 6px
      height: 3px
      position: absolute
      top: 2px
      left: 1px
      border: 2px solid #00651d
      border-top: none
      border-right: none
      background: transparent
      opacity: 0
      transform: rotate(-45deg)
  .box-checked
    &::after
      opacity: 1
  .table-wrapper
    .row-wrapper
      border-bottom: 1px solid #efefef
      // margin: 10px
      &:last-child
       border-bottom: none
      &:hover
        background-color: rgba(147, 255, 224, 0.2)

      .row-item-wrapper
        display: grid
        grid-template-columns: 40px 200px 200px
        margin: 0px 10px
        padding: 10px 0
        // background-color: red
        align-items: center

    .item-text
      color: #4c4948
      font-size: 12px

</style>
