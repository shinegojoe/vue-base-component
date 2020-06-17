<template>
<div class="box-container" >
  <div class="box-wrapper">
    <input @change="update" v-model="res" type="checkbox" :id="id" />
    <label v-bind:class="{'checked': res}" :for="id"></label>
  </div>
</div>

</template>

<script>
export default {
  props: ['id', 'isChecked'],

  data: function () {
    return {
      res: true
    }
  },

  methods: {
    update: function () {
      // console.log(this.res)
      this.$emit('input', this.res)
    }
  },

  mounted: function () {
    this.res = this.isChecked
  }

}
</script>

