<template>
<div class="box-container" >
  <div class="box-wrapper">
    <input @change="update" type="checkbox" :id="id" :value="id" :checked="initState" />
    <label v-bind:class="{'checked': isChecked}" :for="id"></label>
  </div>
</div>

</template>

<script>
export default {
  props: ['id', 'initState'],

  data: function () {
    return {
      isChecked: false,
      data: []
    }
  },

  methods: {
    update: function (event) {
      // console.log(event.target.value)
      this.isChecked = !this.isChecked
      // this.$emit('input', { val: event.target.value, isChecked: this.isChecked })
      this.$emit('update', event.target.value)
    }

  },

  mounted: function () {
    this.isChecked = this.initState
    if (this.initState) {
      console.log('xxx')
      this.$emit('update', this.id)
    }
  }

}
</script>
