<template>
  <div id="side-bar" v-bind:class="sidebarTransition()">
    <div v-for="(item, index) in testData" :key="index">
      <div class="item" @click="toPage(item)">
        <div class="icon">
          <i class="fas fa-home"></i>
          <span class="title">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {

  data: function () {
    return {
      testData: [
        { 
          path: '/', 
          name: 'Home',
          isOpen: false,
          subPages: []
        },
        { path: 'about', 
          name: 'Item2',
          isOpen: false,
          subPages: [] 
        },
        { 
          path: 'test', 
          name: 'Item4',
          isOpen: false,
          subPages: [] 
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

    toPage: function (item) {
      if (this.currentPage !== item.path) {
        this.currentPage = item.path
        this.$router.push(item.path)
      }
    },

    sidebarTransition: function () {
      if(this.isSidebarOpen) {
        return 'xx'
      } else {
        return 'yy'
      }
    }
  },

  mounted: function () {
    const sidebarRef = document.getElementById("side-bar")
    console.log('sss', sidebarRef)
    this.$store.commit('sidebar/sidebarRef', sidebarRef)
  },

  computed: {
    isSidebarOpen: {
      get: function () {
        return this.$store.getters['sidebar/isSidebarOpen']
      }
    }
  }

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
.xx
  animation: 0.3s fadeIn forwards
.yy
  opacity: 0
  animation: 0.3s fadeOut forwards


.item
  display: flex
  justify-content: flex-start
  align-items: center
  height: 40px
  width: 240px
  // background-color: red
  color: #474594
  cursor: pointer
  &:hover
    background-color: #f8f9ff
  .icon
    margin: 0 40px
  .title
    margin: 0 20px

 

</style>
