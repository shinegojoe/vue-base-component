<template>
  <div>
    <!-- <input type="checkbox" @input="yyy" value="1" /><label>我是複選框 1</label>

    <input type="checkbox" @input="yyy" value="2" /><label>我是複選框 2</label>

    <input type="checkbox" @input="yyy" value="3" /><label>我是複選框 3</label> -->

    <!-- <input type="checkbox" v-model="group" value="1" /><label>我是複選框 1</label>

    <input type="checkbox" v-model="group" value="2" /><label>我是複選框 2</label>

    <input type="checkbox" v-model="group" value="3" /><label>我是複選框 3</label> -->

    <div v-for="(item, index) in itemList" :key="index">
      <input type="checkbox" v-model="group" :value="item.val" :checked="item.isChecked" /><label>{{item.title}}</label>
      <input type="checkbox" v-model="group" :value="item.val" :checked="item.isChecked" /><label>{{item.title}}</label>

      <!-- <input type="checkbox" @input="yyy" :value="item.val" :checked="item.isChecked" /><label>{{item.title}}</label> -->
    </div>
    <!-- {{group}} -->
    <input type="checkbox" :checked="x" /><label>xxx</label>

  </div>
</template>

<script>
export default {
  props: ['itemList', 'value'],

  data: function () {
    return {
      group: [],
      aaa: [],
      x: true
    }
  },

  mounted: function () {
    for (const item of this.itemList) {
      if (item.isChecked) {
        this.group.push(item.val.toString())
      }
    }
    this.$emit('input', this.group)
    console.log('ggg', this.group)
  },
  watch: {
    // value: function (val) {
    //   this.group = val
    //   this.$emit('input', this.group)
    // },

    group: function () {
      console.log('watch')
      this.$emit('input', this.group)

    }
  },

  methods: {
    yyy: function (event) {
      // console.log('yyy', event.target)
      // // const valInt = parseInt()
      // const index = this.group.indexOf(event.target.value)
      // console.log('index', index)
      // if (index === -1) {
      //   this.group.push(event.target.value)
      // } else {
      //   this.group.splice(index, 1)
      // }
      // // this.$emit('input', this.group)
      console.log('this', this.group)
      this.$emit('input', this.group)
    },

    qq: function (event) {
      console.log(this.group)
      this.$emit('input', this.group)

    }
  }

}
</script>
