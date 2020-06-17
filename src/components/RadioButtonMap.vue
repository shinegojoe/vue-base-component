<template>
  <div>
    <div v-for="(item, index) in itemList" :key="index">
      <input type="checkbox" @input="update(item)" :value="item.val" :checked="item.isChecked" /><label>{{item.title}}</label>
    </div>
    <!-- {{group}} -->
  </div>
</template>

<script>
export default {
  props: ['itemList'],

  data: function () {
    return {
      group: new Map()
    }
  },

  mounted: function () {
    for (const item of this.itemList) {
      if (item.isChecked) {
        const key = item.val
        this.group.set(key, item)
      }
    }
    this.$emit('input', this.group.values())
  },

  methods: {
    update: function (item) {
      console.log(item)
      // const key = event.target.value
      if (this.group.has(item.val)) {
        this.group.delete(item.val)
      } else {
        this.group.set(item.val, item)
      }
      this.$emit('input', this.group.values())
    }
  }

}
</script>
