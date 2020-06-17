<template>
  <div id="app" >
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="sass" src="@/sass/main.sass"></style>

<style scoped lang="sass">
#app
  display: flex
  flex-direction: column
  width: 100vw
  height: 100vh
  background-color: #F7FAFF
  
</style>
