<template>
  <div>
    <button @click="sidebarSwitch">open</button>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/test">New</router-link>

  </div>
</template>

<script>
export default {
  props: ['isSidebarOpen'],

  data: function () {
    return {
      // sidebar: undefined
    }
  },

  methods: {

    sidebarSwitch: function () {
      // const isSidebarOpen = this.$store.getters['sidebar/isSidebarOpen']
      // this.$store.commit('sidebar/isSidebarOpen', !isSidebarOpen)
      this.$emit('sidebarUpdate', !this.isSidebarOpen)
      // const sidebarRef = this.$store.getters['sidebar/sidebarRef']
      // console.log('sidebarRef', sidebarRef)
      // if (isSidebarOpen) {
      //   sidebarRef.style.width = "0px"
      //   sidebarRef.style.visibility = "hidden"
      //   sidebarRef.style.opacity = "0"
      // } else {
      //   sidebarRef.style.opacity = "1"
      //   sidebarRef.style.visibility = "visible"
      //   sidebarRef.style.width = "200px"
      // }
    }
  }

}
</script>

