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

  data: function () {
    return {
      // sidebar: undefined
    }
  },

  methods: {
    sidebarSwitch: function () {
      const isSidebarOpen = this.$store.getters['sidebar/isSidebarOpen']
      this.$store.commit('sidebar/isSidebarOpen', !isSidebarOpen)
      const sidebarRef = this.$store.getters['sidebar/sidebarRef']
      console.log('xxx', sidebarRef)
      if (isSidebarOpen) {
        sidebarRef.style.width = "0px"
      } else {
        sidebarRef.style.width = "200px"
      }
    }
  }
}
</script>