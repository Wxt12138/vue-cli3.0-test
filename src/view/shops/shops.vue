<template>
  <div>
    <shops-head @search="searchVal"></shops-head>
    <shops-content :shopsList="shopsList"></shops-content>
  </div>
</template>

<script>
import shopsHead from './children/shopsHead'
import shopsContent from './children/shopsContent'
import { Toast } from 'vant'
export default {
  data () {
    return {
      shopsList: '',
    }
  },
  components: {
    shopsHead,
    shopsContent,
    [Toast.name]: Toast,
  },
  created () {
    this.$api.goodsList()
      .then((res) => {
        if (res.data.code == 200) {
          if (res.data.list != 0) {
            this.shopsList = res.data.list
          }
        } else {
          Toast('请求错误')
        }
      })
  },
  mounted () { },
  methods: {
    searchVal (data) {
      Toast('子组件传来的：' + data)
      this.vv = data
    },
  },
}
</script>

<style scoped></style>
