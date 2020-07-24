<template>
  <div>
    <button @click="open" class="btn-base">open</button>

    <Confirm v-show="isConfirmOn" v-model="isConfirmOn" v-on:confirm="ok">
      {{isConfirmOn}}
    </Confirm>
  </div>
</template>

<script>
import Confirm from '@/components/Confirm.vue'

export default {

  components: {
    Confirm
  },

  data: function () {
    return {
      isConfirmOn: false
    }
  },

  methods: {
    ok: function () {
      console.log('okok')
    },

    open: function () {
      this.isConfirmOn = true
    }
  }

}
</script>

<style>

</style>