<template>
  <div>
    tab1
    {{pageIndex}}
    <Pagination :endIndex="20" :maxLength="11" v-model="pageIndex"></Pagination>

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