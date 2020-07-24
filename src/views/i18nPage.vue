<template>
  <div id="i18n-container">
    <div class="head-wrapper">
      <div class="head-item"></div>
      <div class="head-item" v-for="(item, index) in langList" :key="index+'_'">
        {{item}}
      </div>
    </div>

    <div class="row-wrapper" v-for="(item, index) in testData" :key="index">
      <div class="item">{{item.text}}</div>
      <div class="item" v-for="(ln, lnIndex) in langList" :key="lnIndex">
        <!-- {{item[ln]}} -->
        <input class="text-input" type="text" v-model="item[ln]"  placeholder="placeholder">

      </div>
    </div>

    <button @click="addNewCol">add lang</button>
    <input type="text" v-model="newLang">
    <button @click="addNewRow">add row</button>
    <input type="text" v-model="newItem">

    <button class="btn-base" @click="save">add row</button>




  </div>
</template>

<script>
import { getProjects } from '@/apis/projects.js'
export default {
  data: function () {
    return {
      testData: [
        { text: 'saveBtn', en: 'save', ch: '存' },
        { text: 'cancelBtn', en: 'cancel', ch: '取消' }

      ],
      // langList: {
      //   1: 'en',
      //   2: 'ch'
      // },
      langList: ['en', 'ch'],

      newLang: '',
      newItem: '',
      index: 3
    }
  },

  // watch: {
  //   langList: function (val) {
  //     return val
  //   }
  // },

  methods: {
    save: function () {
      console.log(this.testData)
    },

    addNewCol: function () {
      console.log('xxx')
      this.langList.push(this.newLang)
      // this.langList[this.index] = this.newLang
      // this.index += 1
      // console.log('lang', this.langList)
      for (const item of this.testData) {
        item[this.newLang] = 'nn'
      }
      // this.testData = this.testData
    },

    addNewRow: function () {
      console.log('new col')
      // const data = { text: this.newItem, en: 'test', ch: 'test' }
      const data = {}
      for (const ln of this.langList) {
        data[ln] = 'test'
      }
      data.text = this.newItem
      this.testData.push(data)
    }
  },

  mounted: async function () {
    const res = await getProjects()
    console.log(res)
  }


}
</script>

<style scoped lang="sass">
#i18n-container
  .head-wrapper
    display: flex
    .head-item
      margin: 10px
      // border: 1px solid
      width: 100px
    
  .row-wrapper
    display: flex
    .item
      // border: 1px solid
      width: 100px
      margin: 10px

</style>

<style lang="sass" scoped>
  .text-input
    border: none
    border-bottom: 1px solid #dddddd
    outline: none
    transition: border-bottom-color 0.5s ease-in
    font-size: 14px
    color: #414141
    width: 100px
    // -webkit-box-sizing: border-box
    // -moz-box-sizing: border-box
    // box-sizing: border-box

    &:focus
      // background-color: red
      border-bottom-color: #00615d

      border-bottom-width: 1px
    &::placeholder
      // font-size: 30px
      text-transform: capitalize
      color: #848484

</style>