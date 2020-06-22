<template>
  <div class="home-container">

    <div class="card-wrapper">
      <caption class="title-wrapper">Vue base components</caption>
      <tr class="item">
        <td class="text-field">InputField</td>
        <td class=""><InputField v-model="text"></InputField></td>
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
        <td v-for="(item, index) in multiBoxData" :key="index">
          <MultiCheckbox
            class="checkbox-wrapper"
            v-on:update="multiCheckboxUpdate"
            :id="item.id"
            :initState="item.state">
          </MultiCheckbox>
        </td>
        <td class="text-field">{{multiSelected}}</td>
      </tr>

      <tr class="item">
        <td class="text-field">Radiobox</td>
        <td v-for="(item, index) in radioBoxData" :key="index">
          <RadioButton
            class="radio-wrapper-square"
            v-model="radioSelected"
            name="xxx"
            :id="item.id"
            :val="item.id">
          </RadioButton>
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
            title="item2">
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

    </div>

    <button @click="toPage(1)">p1</button>
    <button @click="toPage(2)">p2</button>
    <Snackbar v-model="isSnackbarShow" :isShow="isSnackbarShow"></Snackbar>
    <Confirm v-model="isConfirm" :isShow="isConfirm" v-on:confirm="confirmFn">Are you sure?</Confirm>

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
    Confirm
  },

  data: function () {
    return {
      checkboxHelper: new CheckboxHelper(),

      text: '',
      singleCheckbox: false,

      multiBoxData: [
        { id: 'item1', state: false },
        { id: 'item2', state: false },
        { id: 'item3', state: false }
      ],
      multiSelected: [],

      radioBoxData: [
        { id: 'qq1', state: false },
        { id: 'qq2', state: false },
        { id: 'qq3', state: false }
      ],
      radioSelected: '',

      dropListData: [
        { title: 'item1', val: 123 },
        { title: 'item2', val: 566 }
      ],
      dropListSelected: '',

      isSnackbarShow: false,
      isConfirm: false
    }
  },

  methods: {
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

    // padding-top: 100px
</style>
