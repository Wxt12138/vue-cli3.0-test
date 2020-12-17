<template>
  <div id="demo">
    <shops-head @search="searchVal"></shops-head>
    <shops-content :shopsList="goodsList"></shops-content>
  </div>
</template>

<script>
import shopsHead from './children/shopsHead'
import shopsContent from './children/shopsContent'
import { Toast } from 'vant'
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {
    shopsHead,
    shopsContent,
    [Toast.name]: Toast,
  },
  activated() {
    //在activated生命周期内，从sessionStorage中读取高度值并设置到dom
    if (sessionStorage.getItem('scrollH')) {
      document.documentElement.scrollTop = sessionStorage.getItem('scrollH')
    }
  },
  beforeRouteLeave(to, form, next) {
    sessionStorage.setItem('scrollH', document.documentElement.scrollTop)
    next()
  },
  created() {
    if (this.goodsList.length == 0) {
      this.$api.goodsList().then((res) => {
        if (res.data.code == 200) {
          if (res.data.list != 0) {
            this.$store.state.goodsList = res.data.list
          }
        } else {
          Toast('请求错误')
        }
      })
    } else {
      // this.shopsList = this.$store.state.goodsList
    }
    console.log(444, this.goodsList)
  },
  mounted() {
    console.log('这是moutend调用')
  },
  computed: {
    ...mapState(['goodsList']),
  },
  methods: {
    searchVal(data) {
      Toast('子组件传来的：' + data)
      this.vv = data
    },
  },
}
</script>

<style scoped></style>
