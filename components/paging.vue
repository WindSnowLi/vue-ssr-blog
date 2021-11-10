<template>
  <b-pagination v-model="currentPage" class="justify-content-center" :total-rows="total" :per-page="limit" first-number last-number size="lg" />
</template>

<script>
export default {
  name: 'Paging',
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
    color: #b8d1ee;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
  }

  /deep/ .page-item.active .page-link {
    background-color: rgba(33, 161, 253, 0.5);
    border: none;
  }

  /deep/ .page-item.disabled .page-link {
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
  }

  /deep/ .page-item.active .page-link:hover {
    margin: 5px;
    color: rgba(233, 242, 250, 0.5);
    background-color: rgba(18, 163, 253, 0.5);
    border: none;
  }

  /deep/ span.page-item {
    background-color: rgba(18, 182, 253, 0.5);
  }

  /deep/ .page-link:hover {
    color: #ffffff;
    background-color: rgba(66, 120, 255, 0.5);
  }
</style>
