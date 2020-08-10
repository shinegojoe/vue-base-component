<template>
  <div id="app" >
    <Navbar id="nav" v-on:sidebarUpdate="upup" :isSidebarOpen="isSidebarOpen"></Navbar>
    <div class="view">
      <router-view/>
    </div>
    <Sidebar :isSidebarOpen="isSidebarOpen" ref="sidebar" class="side-bar"></Sidebar>
  </div>
</template>

<style lang="sass" src="@/sass/main.sass"></style>

<style scoped lang="sass">

#app
  // display: flex
  // flex-direction: column
  display: grid
  // grid-template-columns: 200px auto
  grid-template-areas: 'nav nav' 'side-bar view'
  background-color: #F7FAFF

  // width: 100vw
  // height: 100vh
  // background-color: #F7FAFF
  #nav
    grid-area: nav
    height: 100px
    background-color: rgb(0, 0, 10)

  .side-bar
    grid-area: side-bar
    width: 0px
    // visibility: hidden
    // opacity: 0
    height: calc( 100vh - 100px )
    background-color: gray
    transition: 0.5s
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5)
    background-color: white

    // animation-name: qqq
    // animation-duration: 0.5s
    // animation-direction: alternate
  // .side-bar-close
  //   grid-area: side-bar
  //   width: 0px
  //   height: calc( 100vh - 100px )
  //   // background-color: black
  //   animation-name: qq2
  //   animation-duration: 0.5s

  .view
    width: calc( 100vw - 240px )
    height: calc( 100vh - 100px )
    grid-area: view
    // display: flex
    // justify-content: center
    background-color: #F7FAFF

</style>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Sidebar,
    Navbar
  },
  data: function () {
    return {
      isSidebarOpen: false
        // sidebarRef: undefined
    }
  },

  methods: {
    upup: function (val) {
      this.isSidebarOpen = val
    }

  },

  mounted: function () {
    // const sidebarRef = this.$refs['sidebar']
    // console.log(sidebarRef.getElementById("side-bar"))
    // console.log('sss', sidebarRef)
    // this.$store.commit('sidebar/sidebarRef', sidebarRef)
  },

  // computed: {
  //   isSidebarOpen: {
  //     get: function () {
  //       return this.$store.getters['sidebar/isSidebarOpen']
  //     }
  //   }
  // }
}
</script>
