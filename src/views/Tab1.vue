<template>
  <div>
    tab1
    {{pageIndex}}
    <Pagination v-model="pageIndex"></Pagination>

  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data: function () {
    return {
      pageIndex: 1
    }
  }
  
}
</script>