<template>
  <div id="side-bar" v-bind:class="sidebarTransition()">
    <div class="qq-item" v-for="(item, index) in testData" :key="index">
      <div class="zzz" @click="toPage(item)">
        <div class="icon">
          <i class="fas fa-home"></i>
          <span class="title">{{item.name}}</span>
        </div>
      </div>

      
      <div v-bind:class="subPageTransition(item)">
        <div class="sub-page-item" v-for="(subPage, index) in item.subPages">
          <div class="sub-title">{{subPage.title}}</div>
        </div>
      </div>
      

    </div>

    
  </div>
</template>


<script>

export default {
  props: {
    isSidebarOpen: {
      default: false
    }
  },

  data: function () {
    return {
      qq: 123,

      testData: [
        { 
          path: '/', 
          name: 'Home',
          isOpen: true,
          subPages: []
        },
        { path: 'about', 
          name: 'Item2',
          isOpen: true,
          subPages: [
            {
              title: 'sub1'
            },
            {
              title: 'sub2'
            },
            {
              title: 'sub3'
            },
            {
              title: 'sub4'
            },
            {
              title: 'sub5'
            }
          ] 
        },
        { 
          path: 'test', 
          name: 'Item4',
          isOpen: true,
          subPages: [
            {
              title: 'sub1'
            },
            {
              title: 'sub2'
            }
          ] 
        },
        { 
          path: 'tabPage', 
          name: 'Tab',
          isOpen: false,
          subPages: []
        },
        { 
          path: 'multiSelect',
          name: 'MultiSelect',
          isOpen: false,
          subPages: []
        },
        { 
          path: 'rangeSlider', 
          name: 'RangeSlider' ,
          isOpen: false,
          subPages: []
        },
        { 
          path: 'i18n', 
          name: 'I18n',
          isOpen: false,
          subPages: []
        }

      ],

      currentPage: '/'
    }
  },

  methods: {
    closeOutside: function () {
      const isSidebarOpen = this.$store.getters['sidebar/isSidebarOpen']
      if (isSidebarOpen) {
        this.$store.commit('sidebar/isSidebarOpen', !isSidebarOpen)
      }
    },

    closeAll: function (name) {
      console.log('xxx', this.qq)
      for(const item of this.testData) {
        if(item.name !== name) {
          item.isOpen = false
        }
      }
    },

    toPage: function (item) {
      this.closeAll(item.name)
      item.isOpen = !item.isOpen
      console.log(item.isOpen)
      // if (this.currentPage !== item.path) {
      //   this.currentPage = item.path
      //   this.$router.push(item.path)
      // }
    },

    sidebarTransition: function () {
      if(this.isSidebarOpen) {
        return 'xx'
      } else {
        return 'yy'
      }
    },

    subPageTransition: function (item) {
      if(item.isOpen) {
        return "subIn"
      } else {
        return 'subOut'
      }
    }
  },

  mounted: function () {
    const sidebarRef = document.getElementById("side-bar")
    console.log('sss', sidebarRef)
    this.$store.commit('sidebar/sidebarRef', sidebarRef)
  },

  // computed: {
  //   isSidebarOpen: {
  //     get: function () {
  //       return this.$store.getters['sidebar/isSidebarOpen']
  //     }
  //   }
  // }

  // created () {
  //   window.addEventListener('click', this.closeOutside)
  // },

  // beforeDestroy () {
  //   window.removeEventListener('click', this.closeOutside)
  // }
}
</script>

<style scoped lang="sass">
@keyframes fadeIn
  from 
    // height: 0
    width: 0px
    opacity: 0
  to 
    // height: auto
    width: 240px
    opacity: 1

@keyframes fadeOut
  from 
    // height: 0
    width: 240px
    // opacity: 1
  to 
    // height: auto
    width: 0
    // opacity: 0

@keyframes subIn
  from 
    height: 0
    opacity: 0
    transform: scaleY(0)
    position: relative

  to 
    height: auto
    opacity: 1
    transform: scaleY(1)
    z-index: -1
    position: relative


@keyframes subOut
  from 
    height: auto
    opacity: 1
    position: relative

    // transform: scaleY(1)
  to 
    height: 0
    opacity: 0
    z-index: -1
    position: relative

    // transform: scaleY(0)
  
.xx
  animation: 0.3s fadeIn forwards

.yy
  opacity: 0
  animation: 0.3s fadeOut forwards

.subIn
  animation: 0.5s subIn forwards
  background-color: green
  opacity: 1

.subOut
  animation: 0.5s subOut forwards
  background-color: green
  opacity: 1


// .qq-item
//   // display: flex
  
//   // justify-content: flex-start
//   // align-items: center
//   height: 40px
//   width: 240px
//   background-color: red
//   color: #474594
//   cursor: pointer
//   &:hover
//     background-color: #f8f9ff
//   .icon
//     margin: 0 30px
//   .title
//     margin: 0 20px
.zzz
  position: relative
  z-index: 100
  background-color: green
.sub-page-item
  // height: 0px
  position: relative
  background-color: red
  z-index: 10

// .sub-page-item
//   // display: flex
//   // justify-content: flex-start
//   // align-items: center
//   // height: auto
//   height: 0
//   width: 100%
//   // padding: 0 70px
//   &:hover
//     // padding: 0 70px
//     background-color: red
//   .sub-title
//     margin-left: 68px



 

</style>
