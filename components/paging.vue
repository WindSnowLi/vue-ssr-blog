<template>
  <b-pagination class="justify-content-center" v-model="currentPage" :total-rows="total" :per-page="limit" first-number last-number size="lg">
  </b-pagination>
</template>

<script>
  export default {
    name: 'paging',
    props: {
      jump: {
        type: Function,
        required: true
      },
      total: {
        type: Number,
        required: true
      },
      limit: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        currentPage: 1
      }
    },
    watch: {
      currentPage(newValue, oldValue) {
        this.jump(newValue)
      }
    }
  }
</script>
<style scoped>
  /deep/ .page-link {
    margin: 5px;
    border-radius: 5px;
    color: #b8039a;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
  }

  /deep/ .page-item.active .page-link {
    background-color: rgba(253, 33, 140, 0.5);
    border: none;
  }


  /deep/ .page-item.disabled .page-link {
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
  }

  /deep/ .page-item.active .page-link:hover {
    margin: 5px;
    color: rgba(253, 18, 30, 0.5);
    background-color: rgba(253, 18, 30, 0.5);
    border: none;
  }

  /deep/ span.page-item {
    background-color: rgba(253, 18, 30, 0.5);
  }

  /deep/ .page-link:hover {
    color: #b82578;
    background-color: rgba(255, 66, 240, 0.5);
  }
</style>
