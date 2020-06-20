<template>
<div class="box-container" >
  <div class="box-wrapper"
    v-bind:class="{'checked': res}"
   :before="beforeContent" :after="afterContent">
    <input @change="update" v-model="res" type="checkbox" :id="id" />
    <!-- <label v-bind:class="{'checked': res}" :for="id"></label> -->
    <label :for="id"></label>

  </div>
</div>

</template>

<script>
export default {
  props: ['id', 'isChecked'],

  data: function () {
    return {
      res: true,
      beforeContent: '',
      afterContent: ''
    }
  },

  methods: {
    checkContent: function (res) {
      if (res) {
        this.beforeContent = 'on'
        this.afterContent = ''
      } else {
        this.beforeContent = ''
        this.afterContent = 'off'
      }
    },

    update: function () {
      // console.log(this.res)
      this.checkContent(this.res)

      this.$emit('input', this.res)
    }
  },

  mounted: function () {
    this.res = this.isChecked
    this.checkContent(this.res)
  }

}
</script>

