<template>
  <div>
    <MS v-on:selectUpdate="update" :testData="testData"></MS>

    <div v-for="(item, index) in selectedList" :key="index">
      {{item}}
    </div>
  </div>

</template>

<script>
import MS from '@/views/MultiSelect.vue'
export default {
  components: {
    MS
  },

  data: function () {
    return {
      selectedList: new Map(),
      testData: []
    }
  },

  methods: {
    update: function (data) {
      console.log('upup', data)
      this.selectedList = data
    },

    getData: function () {
      const testData = [
        {
          xaddr: "http://192.168.2.226:8080/onvif/device_service",
          name: "HDC-713",
          deviceId: "dce2ac0163c2",
          model: "hdc713",
          address: "192.168.2.226",
          isChecked: true
        },
        {
          xaddr: "http://192.168.2.24:81/onvif/device_service",
          name: "ln",
          deviceId: "3972fc68fc91",
          model: "hdc715",
          address: "192.168.2.24",
          isChecked: true

        },
        {
          xaddr: "http://192.168.2.225:81/onvif/device_service",
          name: "ln",
          deviceId: "b8016fad2a47",
          model: "hdc715",
          address: "192.168.2.225",
          isChecked: true

        }
      ]
      return testData
    }
  },

  mounted: function () {
    setTimeout(() => {
      this.testData = this.getData()
    }, 2000)
  }

}
</script>