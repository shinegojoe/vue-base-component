<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="loadingSwitch" class="btn-base">loading</button>

    <button @click="closeOutside" class="btn-base">closeOutside</button>


    <div v-show="isLoading" class="loading-wrapper">
      <div class="lds-hourglass"></div>
    </div>

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
  </div>
</template>

<script>
import DropdownList from '@/components/DropdownList'

export default {
  components: {
    DropdownList
  },

  data: function () {
    return {
      isLoading: false,
      dropListData: [
        { title: 'item1', val: 123 },
        { title: 'item2', val: 566 }
      ],
      dropListSelected: '',
      dropListTitle: 'defalut'
    }
  },

  methods: {
    loadingSwitch: function () {
      this.isLoading = !this.isLoading
    },
    dropListUpdate: function () {

    },

    closeOutside: function () {
      const xx = this.$store.getters['closeOutside/menuList']
      for (const x of xx) {
        console.log(x)
        x.qq()
        console.log(x)

      }
    }
  }
}
</script>

