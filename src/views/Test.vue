<template>
  <div>
    <SelectTest v-on:selectUpdate="update" :id="1" :dataList="testData"></SelectTest>
    <SelectTest v-on:selectUpdate="update" :id="2" :dataList="testData"></SelectTest>
    <MultiSelect v-on:selectUpdate="test2Update" :dataList="testData2"></MultiSelect>
    <!-- <MultiSelect :dataList="testData3"></MultiSelect> -->

  </div>
</template>

<script>
import SelectTest from '@/components/SelectTest.vue'
import MultiSelect from '@/components/MultiSelect.vue'
import { CloseOutsideManager } from '@/models/closeOutsideManager.js'

export default {
  components: {
    SelectTest,
    MultiSelect
  },

  data: function () {
    return {
      testData: ['item1', 'item2', 'item3'],
      testData2: {
        title: 'xxx',
        data: [
          { title: 'item12', state: false },
          { title: 'item22', state: true },
          { title: 'item32', state: false }
        ]
      },

      testData3: {
        title: 'title3',
        data: [
          { title: 'item13', state: true },
          { title: 'item23', state: false },
          { title: 'item33', state: false }
        ]
      }

    }
  },

  methods: {
    update: function (data) {
      console.log(data)
    },

    test2Update: function (data) {
      console.log('data', data)
      let title = ''
      for (const item of data) {
        title += item
      }
      console.log('title', title)
      this.testData2.title = title
    }
  },

  mounted: function () {
    const t1 = new CloseOutsideManager()
    const t2 = new CloseOutsideManager()
    console.log(t1 === t2)
  }

}
</script>
