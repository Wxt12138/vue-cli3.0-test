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
    this.$axios
      .get('/shops.json', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        this.shopsList = res.data.commodity
      })


    this.$axios
      .get('api/getList', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res)
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
