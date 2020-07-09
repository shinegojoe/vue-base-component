<template>
  <div>
    <!-- <SelectTest v-on:selectUpdate="update" :id="1" :dataList="testData"></SelectTest> -->
    <!-- <SelectTest v-on:selectUpdate="update" :id="2" :dataList="testData"></SelectTest> -->
    <SelectTest2 v-on:selectUpdate="update" :id="2" :testData="testData4"></SelectTest2>

    <!-- <MultiSelect v-on:selectUpdate="test2Update" :dataList="testData2"></MultiSelect> -->
    <!-- <MultiSelect :dataList="testData3"></MultiSelect> -->

  </div>
</template>

<script>
import SelectTest from '@/components/SelectTest.vue'
import SelectTest2 from '@/components/SelectTest2.vue'

import MultiSelect from '@/components/MultiSelect.vue'
import { CloseOutsideManager } from '@/models/closeOutsideManager.js'

export default {
  components: {
    SelectTest,
    SelectTest2,
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
      },

      testData4: [
        { name: 'item1', isChecked: false },
        { name: 'item2', isChecked: true },
        { name: 'item3', isChecked: false }
      ],

      testData5: [
        { name: 'item111', isChecked: true },
        { name: 'item2222', isChecked: true },
        { name: 'item34444', isChecked: true },
        { name: 'zz', isChecked: false }

      ],

    }
  },

  methods: {
    update: function (data) {
      console.log(data)
      this.testData4 = this.testData5
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
