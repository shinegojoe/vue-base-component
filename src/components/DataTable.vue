<template>
 <div class="data-table-wrapper">
    <tr class="head-layout">
      <td class="xx">
        <div class="checkbox-wrapper">
          <input id="select-all-cbox" type="checkbox" @change="selectAll"/>
        </div>
      </td>

      <td v-for="(item, index) in titleList" :key="index"
        @click="sort(item)"
        class="title-text tab-head xx">{{item.name}}
        <!-- <IconWrapper
          v-bind:class="{ 'sort-clicked':item.isSelected}"
          class="icon"
          id="arrow-down" w="26" h="12" color="#575757">
        </IconWrapper> -->
      </td>
    </tr>

    <!-- <div v-if="!isScanDone" class="loading-wrapper">
      <div class="lds-ripple"><div></div><div></div></div>
      <div class="loading-text">loading ...</div>
    </div> -->

    <tr class="head-layout item-hover" v-for="(item, index) in tableData" :key="index">
      <td class="xx item-hover">
        <div class="checkbox-wrapper">
          <input type="checkbox" v-model="selectedList"
            @change="checkCheckbox"
            :id="item.deviceId" :value="item.deviceId"/>
        </div>
      </td>
      <td class="title-text xx">{{index+1}}</td>
      <td v-bind:class="{ 'text-online': item.status, 'text-offline': !item.status}"
        class="title-text xx">{{item.status}}
      </td>
      <td class="title-text xx">{{item.address}}</td>
      <td class="title-text xx">{{item.deviceId}}</td>
      <td class="title-text xx">{{item.title}}</td>
      <td class="title-text xx">{{item.model}}</td>
      <td
        v-bind:class="{ 'text-online': item.auth, 'text-offline': !item.auth}"
        class="title-text xx">{{item.auth}}
      </td>
      <td class="title-text xx">{{item.auth}}</td>

      <!-- <td class="action-wrapper">
        <ActionSection
          v-on:editSave="editDone"
          :deleteConfirmController="{}"
          :cameraSectionController="{}"
          :camInfo="item">
        </ActionSection>
      </td> -->
    </tr>
  </div>
</template>

<script>
// import IconWrapper from '@/components/Modules/IconWrapper.vue'

export default {
  props: ['titleList', 'tableData'],
  components: {
    // IconWrapper
  },

  data: function () {
    return {
      selectAllInput: undefined,
      selectedList: []
    }
  },

  watch: {
    selectedList: function (val) {
      // console.log('changed', val)
      this.checkCheckbox()
      this.$emit('input', val)
    }
  },

  methods: {
    sort: function (item) {
      console.log('do sort')
      this.titleList.forEach((obj, index, arr) => {
        if (obj.name === item.name) {
          obj.isSelected = !obj.isSelected
        } else {
          obj.isSelected = false
        }
      })
      // item.isSelected = !item.isSelected
    },

    selectAll: function (event) {
      // console.log('select all', event.target.checked)
      // const state = (event.target.checked === true)
      // console.log('state', state)
      if (event.target.checked) {
        this.selectedList = this.tableData.map((item, index, arr) => {
          return item.deviceId
        })
      } else {
        this.selectedList = []
      }
    },

    checkCheckbox: function () {
      if (this.selectedList.length === this.tableData.length) {
        this.selectAllInput.checked = true
      } else {
        this.selectAllInput.checked = false
      }
    }
  },

  mounted: function () {
    this.selectAllInput = document.getElementById('select-all-cbox')
  }

}
</script>
