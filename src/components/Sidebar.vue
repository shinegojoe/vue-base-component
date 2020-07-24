<template>
  <div id="side-bar">
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
        { path: '/', name: 'Home' },
        { path: 'about', name: 'Item2' },
        { path: 'test', name: 'Item4' },
        { path: 'tabPage', name: 'Tab' },
        { path: 'multiSelect', name: 'MultiSelect' },
        { path: 'rangeSlider', name: 'RangeSlider' },
        { path: 'i18n', name: 'I18n' }


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
.item
  display: flex
  justify-content: flex-start
  align-items: center
  height: 40px
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
