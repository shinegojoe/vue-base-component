<template>
  <div>
    <form>
      <div class="multiselect">
        <div class="selectBox" @click="show">
          <!-- <select>
            <option>Select an option</option>
          </select> -->
          <div class="overSelect">
            <div class="xx-title-wrapper">{{dataList.title}}</div>

            <div class="icon-wrapper" v-bind:class="{ 'open': expanded}">
              <i class="fas fa-sort-down"></i>
            </div>
          </div>
        </div>
        <div class="checkboxes"
          v-bind:class="{ 'open': expanded }"
          >
          <!-- <div @click="xxx" >
            <label for="one">
            <input type="checkbox" id="one" />First checkbox</label>
          </div>

          <div @click="xxx" >
            <label for="two">
            <input type="checkbox" id="two" />Second checkbox</label>
          </div>

          <div @click="xxx" >
            <label for="three">
            <input type="checkbox" id="three" />Third checkbox</label>
          </div> -->
          <div class="item" v-for="(item, index) in dataList.data" :key="index">
            <label :for="item.title">
              <div @click="xxx($event, item)" class="input-wrapper">
                <input type="checkbox" :id="item.title" :checked="item.state" />

              </div>
              <span class="name">{{item.title}}</span>
            </label>

          </div>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import { CloseOutsideManager } from '@/models/closeOutsideManager.js'

export default {
  props: ['dataList'],

  data: function () {
    return {
      expanded: false,
      selectList: []

    }
  },

  methods: {
    init: function () {
      const qq = []
      this.dataList.data.forEach((item, index, arr) => {
        // console.log('ii', item)
        if (item.state === true) {
          qq.push(item.title)
        }
      })
      this.selectList = qq
      console.log(' this.selectList', this.selectList)
      this.$emit('selectUpdate', this.selectList)
    },

    show: function (e) {
      // var checkboxes = document.getElementById("checkboxes")
      // if (!this.expanded) {
      //   // checkboxes.style.display = "block"
      //   this.expanded = true
      // } else {
      //   // checkboxes.style.display = "none"
      //   this.expanded = false
      // }
      this.expanded = !this.expanded
      console.log('isex', this.expanded)
      e.stopPropagation()
      this.closeManager.closeAll(this)

    },

    closeOutside: function () {
      console.log('xxx')
      // this.expanded = false

      if (this.expanded) {
        this.expanded = false
        // this.yy.blur()
      }
    },
    xxx: function (e, item) {
      console.log('e', e.target)
      e.stopPropagation()
      // this.selectList = this.multiCheckbox(item.title, this.selectList)
      // this.$emit('selectUpdate', this.selectList)
    },

    multiCheckbox (item, arr) {
      console.log('itemxxx', item)
      const index = parseInt(arr.indexOf(item))
      console.log('index', index)
      if (index === -1) {
        arr.push(item)
      } else {
        arr.splice(index, 1)
      }
      return arr
    }
  },

  created () {
    window.addEventListener('click', this.closeOutside)
    this.closeManager = new CloseOutsideManager()
    this.closeManager.registe(this)
  },

  mounted: function () {
    this.init()
  },

  beforeDestroy () {
    window.removeEventListener('click', this.closeOutside)
  }
}
</script>

<style lang="sass" scoped>
.multiselect
  width: 150px

.selectBox
  position: relative
  select
    width: 100%
    // font-weight: bold

.overSelect
  width: 150px
  background-color: green
  // position: absolute
  // left: 0
  // right: 0
  // top: 0
  // bottom: 0
  display: grid
  background-color: red
  width: 150px
  height: 30px
  grid-template-columns: 120px 30px
  justify-content: center
  align-items: center
  .xx-title-wrapper
    // display: flex
    text-align: center

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

.checkboxes
  // display: none
  // border: 1px #dadada solid
  position: absolute
  visibility: hidden
  z-index: 10
  background-color: red
  width: 150px
  transition: 0.5s
  opacity: 0

  label
    display: block
    width: 100%
  .item
    display: flex
    height: 30px
    align-items: center
    // justify-content: space-between
    background-color: gray
    &:hover
      opacity: 0.9
  .name
    margin-left: 10px
  .input-wrapper
    width: 100px
    background-color: yellow

.open
  // display: block
  visibility: visible
  opacity: 1



// #checkboxes label:hover
//   background-color: #1e90ff

</style>