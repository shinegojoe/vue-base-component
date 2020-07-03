<template>
  <div id="side-bar">
    xxxs
  </div>
</template>


<script>

export default {

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
}
</script>
