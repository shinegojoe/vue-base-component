<template>
  <div class="">
    <input @input="update" :name="name" type="radio" :id="id" :value="val" :checked="true">
    <!-- <label :for="id">Radio</label> -->
    <!-- <label :for="id"><span></span>Radio Button {{id}}</label> -->

  </div>
</template>

<script>
export default {
  props: ['id', 'val', 'name'],

  methods: {
    update: function (event) {
      // console.log(event.target.value)
      this.$emit('input', event.target.value)
    }
  }

}
</script>
