<template>
  <div>
    <van-search
      v-model="searchVal"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="quite">退出登录</div>
      </template>
    </van-search>
  </div>
</template>

<script>
import { Search, Toast } from 'vant'
import { removeStore } from '@/mutils/mutils'
export default {
  data() {
    return {
      searchVal: '',
    }
  },
  components: {
    [Search.name]: Search,
    [Toast.name]: Toast,
  },
  methods: {
    onSearch(value) {
      Toast(value)
      this.$emit('search', value)
      this.searchVal = ''
    },
    quite() {
      removeStore('login')
      this.$router.push({ path: '/login' })
    },
  },
}
</script>

<style scoped></style>
