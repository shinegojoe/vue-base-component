<template>
  <div>
    <div @click="menuBtnClick" class="menu-btn-wrapper">
      <button class="menu-btn"
        >{{title}}
      </button>

      <IconWrapper
        class="icon-wrapper"
        v-bind:class="{'icon-open': isOpen}"
        id="arrow-down2" color="#414141" w="28" h="28">
      </IconWrapper>

    </div>
    <div class="item-list-wrapper" v-if="isOpen">
      <div v-for="(item, index) in itemList" :key="index">
        <div @click="itemClick($event, item)" class="item checkbox-wrapper">
            <input type="checkbox" :id="item.title" :value="item.title" :checked="true" />
            <span class="text-field">{{item.title}}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import IconWrapper from '@/components/IconWrapper.vue'

export default {
  props: {
    itemList: {
      type: Array,
      defalut: [1, 2, 5]
    },
    title: {

    }
  },

  components: {
    IconWrapper
  },

  data: function () {
    return {
      // itemList: [1, 23, 5],
      isOpen: false,
      selectedList: []
    }
  },

  methods: {
    closeOutside: function () {
      if (this.isOpen) {
        this.isOpen = false
      }
    },

    init: function () {
      const selectedList = this.itemList.map((item, index, arr) => {
        return item.title
      })
      return selectedList
    },

    menuBtnClick: function (el) {
      // if(!isEnter)
      // console.log('el')
      this.isOpen = !this.isOpen
      el.stopPropagation()
    },

    itemClick: function (e, item) {
      console.log('item', item)
      const checkboxEle = document.querySelector(`#${item.title}`)
      // console.log('qq', checkboxEle)

      // console.log('qq', checkboxEle.checked)
      checkboxEle.checked = !checkboxEle.checked

      e.stopPropagation()
      this.selectedList = this.multiCheckbox(item.title, this.selectedList)
      this.$emit('itemUpdate', this.selectedList)
    },

    multiCheckbox (item, arr) {
      const index = parseInt(arr.indexOf(item))
      // console.log('index', index)
      if (index === -1) {
        arr.push(item)
      } else {
        arr.splice(index, 1)
      }
      return arr
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
    this.selectedList = this.init()
    this.$emit('itemUpdate', this.selectedList)

    // console.log('selectedList', this.selectedList)
  },

  created () {
    window.addEventListener('click', this.closeOutside)
  },

  beforeDestroy () {
    window.removeEventListener('click', this.closeOutside)
  }
}
</script>
