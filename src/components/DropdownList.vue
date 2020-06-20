<template>
  <div>
    <div @click="menuBtnClick" class="menu-btn-wrapper">
      <button class="menu-btn"
        >{{listTitle}}
      </button>
      <!-- <div class="icon-wrapper" v-bind:class="{'icon-open': isOpen}">
        <i class="fas fa-angle-double-down"></i>
      </div> -->
      <IconWrapper
        class="icon-wrapper"
        v-bind:class="{'icon-open': isOpen}"
        id="arrow-down2" color="#414141" w="28" h="28">
      </IconWrapper>

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
      xx: undefined
    }
  },
  computed: {
    listTitle: {
      get: function () {
        return this.title
      }
      // set: function (val) {
      //   this.xx = this.checkItemState()
      // }
    }
  },
  // watch: {
  //   initTitle: function (val) {
  //     this.title = val
  //   }
  // },

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
      // this.title = item.title
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
    // this.title = this.checkItemState()
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
