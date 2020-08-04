

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

      <div class="row-wrapper"  v-for="(item, index) in tableData" :key="index">
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

  </div>
</template>

<script>

/*
use:
  <MS v-on:selectUpdate="update" :itemList="testData" :headers="headers"></MS>

  item.xxxx change the item.property in init() and itemClick()
  itemClick: function (item, index) {
      this.itemList[index].isChecked = !this.itemList[index].isChecked
      if (this.itemList[index].isChecked) {
        this.dataMap.set(item.xxxx, item)
      } else {
        this.dataMap.delete(item.xxxx)
      }
      this.checkSelectAll()
      this.$emit('selectUpdate', this.makeRes())

    },
  

props:
  itemList: '',
  headers: ['device ID', 'address', 'address']

emit: 
  selectUpdate


example:
const testData = [
        {
          xaddr: "http://192.168.2.226:8080/onvif/device_service",
          name: "HDC-713",
          deviceId: "dce2ac0163c2",
          model: "hdc713",
          address: "192.168.2.226",
          isChecked: true
        },
        {
          xaddr: "http://192.168.2.24:81/onvif/device_service",
          name: "ln",
          deviceId: "3972fc68fc91",
          model: "hdc715",
          address: "192.168.2.24",
          isChecked: true

        },
        {
          xaddr: "http://192.168.2.225:81/onvif/device_service",
          name: "ln",
          deviceId: "b8016fad2a47",
          model: "hdc715",
          address: "192.168.2.225",
          isChecked: true

        }
      ]
*/
export default {
  props: ['itemList', 'headers'],
  data: function () {
    return {
      dataMap: new Map(),
      isSelectAll: false
    }
  },

  // watch: {
  //   testData: function () {
  //     this.init()
  //   }
  // },

  methods: {
    init: function () {
      for (const item of this.itemList) {
        this.dataMap.set(item.deviceId, item)
      }
      this.checkSelectAll()
      // this.$emit('selectUpdate', this.dataMap.values())
      this.$emit('selectUpdate', this.makeRes())

    },

    checkSelectAll: function () {
      if (this.isSelectAll) {
        for (const item of this.itemList) {
          if (!item.isChecked) {
            this.isSelectAll = false
            return
          }
        }
      } else {
        if (this.itemList.length === 0) {
          this.isSelectAll = false
          return
        }
        for (const item of this.itemList) {
          if (!item.isChecked) {
            return
          }
        }
        this.isSelectAll = true
      }
    },

    itemClick: function (item, index) {
      this.itemList[index].isChecked = !this.itemList[index].isChecked
      if (this.itemList[index].isChecked) {
        this.dataMap.set(item.deviceId, item)
      } else {
        this.dataMap.delete(item.deviceId)
      }
      this.checkSelectAll()
      this.$emit('selectUpdate', this.makeRes())

      // this.$emit('selectUpdate', this.dataMap.values())
    },

    selectAllClick: function () {
      this.isSelectAll = !this.isSelectAll
      if (this.isSelectAll) {
        this.selectAll()
      } else {
        this.removeAll()
      }
      this.$emit('selectUpdate', this.makeRes())

      // this.$emit('selectUpdate', this.dataMap.values())
    },

    selectAll: function () {
      // for (const item of this.itemList) {
      //   item.isChecked = true
      //   this.dataMap.set(item.deviceId, item)
      // }
      for (const item of this.dataMap.values()) {
        item.isChecked = true
      }
    },

    removeAll: function () {
      // for (const item of this.itemList) {
      //   item.isChecked = false
      // }
      // this.dataMap.clear()
      // this.dataMap = new Map()
      for (const item of this.dataMap.values()) {
        item.isChecked = false
      }
      // this.$emit('selectUpdate', this.makeRes())
    },

    makeRes: function () {
      const resList = []
      for (const item of this.dataMap.values()) {
        if (item.isChecked) {
          resList.push(item)
        }
      }
      // const resList = this.dataMap.values().filter((item, index, arr) => {
      //   return item.isChecked
      // })
      return resList
    }
  },

  created: function () {
    this.init()
  },

  computed: {
    tableData: {
      get: function () {
        console.log('xxx')
        this.init()
        return this.itemList
      }
    }
  }
}
</script>

<style lang="sass" scoped src="@/sass/Components/_multi_selector_table.sass">

</style>
