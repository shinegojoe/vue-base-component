<template>
  <div class="home-container">

    <div class="card-wrapper">
      <caption class="title-wrapper">Vue base components</caption>
      <tr class="item">
        <td class="text-field">InputField</td>
        <td class="">
          <InputField
            v-model="text"
            type=""
            initText="xx"
            placeholder="place">
          </InputField>
        </td>
        <td>{{text}}</td>
      </tr>

      <tr class="item">
        <td class="text-field">Single Checkbox</td>
        <td><OptionSlider
          class="switch-wrapper"
          id="testId" v-model="singleCheckbox" :isChecked="singleCheckbox"></OptionSlider>
        </td>
        <td class="text-field">{{singleCheckbox}}</td>
      </tr>

      <tr class="item">
        <td class="text-field">MultiCheckbox</td>
        <button @click="selectAll" class="btn-base">All</button>
        <td v-for="(item, index) in multiBoxData" :key="index">
          <!-- <MultiCheckbox
            class="checkbox-wrapper"
            v-on:update="multiCheckboxUpdate"
            :id="item.id"
            :initState="item.state">
          </MultiCheckbox> -->
          <div class="checkbox-wrapper">
            <!-- {{item.state}} -->
            <input v-model="multiSelected" type="checkbox" :id="item.id" :value="item.id" :checked="item.state" />
          </div>

        </td>
        <td class="text-field">{{multiSelected}}</td>
      </tr>

      <tr class="item">
        <td class="text-field">Radiobox</td>
        <td v-for="(item, index) in radioBoxData" :key="index">
          <!-- <RadioButton
            class="radio-wrapper-square"
            v-model="radioSelected"
            name="xxx"
            :id="item.id"
            :val="item.id">
          </RadioButton> -->
          <div class="radio-wrapper-square">
            <input v-model="radioSelected" name="xxx" type="radio" :id="item.id" :value="item.id">
          </div>
        </td>
        <td class="text-field">{{radioSelected}}</td>
      </tr>

      <tr class="item">
        <td class="text-field">dropdownList</td>
        <td>
          <DropdownList
            class="text-field dropdown-wrapper"
            v-on:itemUpdate="dropListUpdate"
            :itemList="dropListData"
            :title="dropListTitle">
          </DropdownList>
        </td>

        <td class="text-field">{{dropListSelected}}</td>

      </tr>
        <tr class="item">
        <td class="text-field">Snackbar</td>
        <td>
          <button @click="showSnackbar" class="btn-base">snackbar</button>
        </td>

        <!-- <td class="text-field">{{dropListSelected}}</td> -->
      </tr>

      <tr class="item">
        <td class="text-field">Confirm</td>
        <td>
          <button @click="showConfirm" class="btn-base">confirm</button>
        </td>
        <!-- <td class="text-field">{{dropListSelected}}</td> -->
      </tr>

      <tr class="item">
        <td class="text-field">show cover</td>
        <td>
          <button @click="showCover" class="btn-base cover-btn">cover switch</button>
        </td>
      </tr>

      <tr class="item">
        <td class="text-field">multi dropdown</td>
        <td>
          <MultiSelectDropDown
            class="dropdown-wrapper"
            v-on:itemUpdate="multiDropUpdate"
            :itemList="multiDropData"
            :title="multiDropTitle"
          ></MultiSelectDropDown>
        </td>
      </tr>

<!-- 
      <tr class="item">
        <TabPage></TabPage>
      </tr> -->

      <!-- <DataTable
        :titleList="titleList"
        :tableData="tableData">
      </DataTable> -->



    </div>

    <button @click="toPage(1)">p1</button>
    <button @click="toPage(2)">p2</button>
    <Snackbar v-model="isSnackbarShow" :isShow="isSnackbarShow"></Snackbar>
    <Confirm v-model="isConfirm" :isShow="isConfirm" v-on:confirm="confirmFn">Are you sure?</Confirm>
    <!-- <div class="xx"></div> -->
    <div v-bind:class="{'bg-cover': isCoverOn}"></div>

  </div>
</template>

<script>
// @ is an alias to /src
import InputField from '@/components/InputField.vue'
import SingleCheckbox from '@/components/SingleCheckbox'
import MultiCheckbox from '@/components/MultiCheckbox'
import DropdownList from '@/components/DropdownList'
import CheckboxHelper from '@/models/checkboxHelper'
import RadioButton from '@/components/RadioButton'
import OptionSlider from '@/components/OptionSlider'
import Snackbar from '@/components/Snackbar'
import Confirm from '@/components/Confirm'
import DataTable from '@/components/DataTable.vue'
import TabPage from '@/components/TabPage.vue'
import MultiSelectDropDown from '@/components/MultiSelectDropDown.vue'

export default {
  name: 'Home',
  components: {
    InputField,
    SingleCheckbox,
    MultiCheckbox,
    DropdownList,
    RadioButton,
    OptionSlider,
    Snackbar,
    Confirm,
    DataTable,
    TabPage,
    MultiSelectDropDown
  },

  data: function () {
    return {
      checkboxHelper: new CheckboxHelper(),

      text: '',
      singleCheckbox: false,

      multiBoxData: [
        { id: 'item1', state: true },
        { id: 'item2', state: false },
        { id: 'item3', state: false }
      ],

      /*
      v-model 不綁checked, 會綁已選的值
      */
      multiSelected: ['item1'],

      radioBoxData: [
        { id: 'qq1', state: false },
        { id: 'qq2', state: false },
        { id: 'qq3', state: false }
      ],
      radioSelected: 'qq1',

      dropListData: [
        { title: 'item1', val: 123 },
        { title: 'item2', val: 566 }
      ],
      dropListSelected: '',
      dropListTitle: 'defalut',

      /*
       checkbox id must be uniqe, here id is the value of title
      */
      multiDropData: [
        { title: 'item1xxx', val: 123 },
        { title: 'item2xxx', val: 566 },
        { title: 'item3xxx', val: 566 },
        { title: 'item4xxx', val: 566 },
        { title: 'item5xxx', val: 566 }
      ],
      multiDropSelected: '',
      multiDropTitle: 'defalut',

      isSnackbarShow: false,
      isConfirm: false,
      isCoverOn: false,

      titleList: [
        { name: 'no', isSelected: false },
        { name: 'status', isSelected: false },
        { name: 'ip', isSelected: false },
        { name: 'sn', isSelected: false },
        { name: 'name', isSelected: false },
        { name: 'type', isSelected: false },
        { name: 'auth', isSelected: false },
        { name: 'action', isSelected: false }
      ],
      tableData: [
        { id: 7, deviceId: 'dce2ac0163c2', model: 'hdc713', title: 'dce2ac0163c2', address: '192.168.2.226', auth: true, status: true },
        { id: 8, deviceId: 'dce2ac0163c3', model: 'hdc713', title: 'dce2ac0163c2', address: '192.168.2.227', auth: true, status: true },
        { id: 9, deviceId: 'dce2ac0163c4', model: 'hdc713', title: 'dce2ac0163c2', address: '192.168.2.228', auth: true, status: true },
        { id: 10, deviceId: 'dce2ac0163c6', model: 'hdc713', title: 'dce2ac0163c2', address: '192.168.2.229', auth: true, status: true }
      ]
    }
  },

  methods: {
    showCover: function () {
      this.isCoverOn = !this.isCoverOn
    },

    showSnackbar: function () {
      this.isSnackbarShow = true
    },

    showConfirm: function () {
      this.isConfirm = true
    },

    confirmFn: function () {
      this.isConfirm = false
      console.log('do something...')
    },

    multiCheckboxUpdate: function (item) {
      // console.log('item', item)
      // const index = parseInt(this.multiSelected.indexOf(item))
      // console.log('index', index)
      // if (index === -1) {
      //   this.multiSelected.push(item)
      // } else {
      //   this.multiSelected.splice(index, 1)
      // }
      this.multiSelected = this.checkboxHelper.multiCheckbox(item, this.multiSelected)
    },

    selectAll: function () {
      // this.multiBoxData = [
      //   { id: 'item1', state: true },
      //   { id: 'item2', state: true },
      //   { id: 'item3', state: true }
      // ]
      const res = this.multiBoxData.map((item, index, arr) => {
        const x = document.getElementById(item.id)
        console.log(x)
        // x.setAttribute('checked', true)
        // x.checked = true
        // console.log(x.checked)

        return item.id
      })
      console.log('res', res)
      this.multiSelected = res
    },

    radioboxUpdate: function (item) {
      console.log(item)
      const xx = this.radioBoxData.map((item, index, arr) => {
        return { id: item.id, state: false }
      })
      console.log(xx)
      this.radioBoxData = xx
      // this.radioSelected = item
      // for (const i in this.radioBoxData) {
      //   const item = this.radioBoxData[i]
      //   const newItem = {
      //     id: item.id,
      //     state: item.state
      //   }
      //   this.radioBoxData[i] = newItem
      // }

      // this.radioBoxData = []
    },

    dropListUpdate: function (item) {
      console.log(' droplist', item)
      this.dropListSelected = item
      this.dropListTitle = item.title
    },

    copy: function (arr, maxIndex) {
      let arrCopy = ''
      for (let i = 0; i < maxIndex; i++) {
        arrCopy += arr[i]
      }
      return arrCopy
    },

    multiDropUpdate: function (data) {
      console.log('multiDropUpdate', data)
      let title = ''
      for (const item of data) {
        title += item
        title += ','
      }
      if (title.length > 20) {
        title = this.copy(title, 20)
        title += '......'
      }

      this.multiDropTitle = title
    },

    toPage: function (id) {
      this.$router.push({
        path: `page/${id}`
      })
    }
  }
}
</script>

<style scoped lang="sass">

  .home-container
    background-color: #F7FAFF
    .item
      display: flex
      width: 800px
      justify-content: space-between
      align-items: center
      margin: 10px 0
    .cover-btn
      z-index: 101

    // padding-top: 100px
</style>
