<template>
  <div id="tab-container">
    <!-- <div class="content-wrapper">

    </div> -->
    <Tab :tabList="tabList" v-on:tabSwitch="tabUpdate"></Tab>
    <router-view></router-view>

    <br>
    <br>
    <br>

    <!-- <Pagination></Pagination> -->
  </div>
</template>

<script>
// import Pagination from '@/components/Pagination.vue'
import Tab from '@/components/TabPage.vue'

export default {
  components: {
    // Pagination,
    Tab
  },

  data: function () {
    return {
      tabList: ['tab1', 'tab2', 'tab3']
    }
  },

  methods: {
    tabUpdate: function (page) {
      this.$router.push('/tabPage/' + page)
    }
  }

}
</script>

<style lang="sass" scoped>
#tab-container
  display: flex
  flex-direction: column
  // justify-content: center
  align-items: center
  .content-wrapper
    width: 1200px
    height: 620px
    // border: 1px solid
    margin: 50px 0
    border-radius: 3px
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.5)
    background-color: white
</style>