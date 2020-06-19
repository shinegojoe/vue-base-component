<template>
  <div class="home-container">

    <div class="card-wrapper">
      <caption class="title-wrapper">HotKey Setup</caption>
      <InputField v-model="text"></InputField>
      <div class="mb-30">{{text}}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InputField from '@/components/InputField.vue'

export default {
  name: 'Home',
  components: {
    InputField
  },

  data: function () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped lang="sass">
  .home-container
    background-color: #F7FAFF

    // padding-top: 100px
</style>
