<template>
  <div class="tab-page-wrapper">
    <div class="tab-head">
      <!-- <div class="head-item isActive">tab1</div>
      <div class="head-item">tab2</div>
      <div class="head-item">tab3</div> -->
      <div
        class="head-item"
        v-bind:class="{ 'isActive': item.state}"
        @click="switchTab(item.name)"
        v-for="(item, index) in headList" :key="index">
        {{item.name}}
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      headList: [
        { name: 'tab1', state: true },
        { name: 'tab2', state: false },
        { name: 'tab3', state: false }
      ]
    }
  },

  methods: {
    switchTab: function (name) {
      for (const item of this.headList) {
        if (item.name === name) {
          item.state = true
        } else {
          item.state = false
        }
      }
    }
  }

}
</script>

<style scoped lang="sass">
.tab-page-wrapper
  width: 100vw
  // background-color: red
  border-bottom: 2px solid #efefef
  // padding-bottom: 2px

  .tab-head
    display: flex
    .head-item
      width: 120px
      height: 40px
      display: flex
      align-items: center
      justify-content: center
      color: #999999
      box-sizing: border-box

      // background-color: green
      &:hover
        background-color: #efefef
        border-bottom: 2px solid #efefef

        // opacity: 0.1
        cursor: pointer
    .isActive
      color: #2f52a2
      // border-bottom: 2px solid #2f52a2





</style>
