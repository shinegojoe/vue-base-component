<template>
  <div>
    {{zzz.x}}
    <!-- {{xx}} -->
    <div>
      <!-- {{qq}} -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['zzz'],

  data: function () {
    return {
      // mode: this.xx.mode
    }
  },

  // watch: {
  //   xx: function () {
  //     console.log('xx changed')
  //     this.mode = this.xx.mode
  //   }
  // },
  created: function () {
    console.log('created zzz', this.zzz)

  },

  mounted: function () {
    console.log('xx', this.xx)
    console.log('mounted zzz', this.zzz)
  },

  computed: {
    qq: {
      get: function () {
        return this.xx.mode
      }
    }
  }
}
</script>