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
  data() {
    return {
      shopsList: '',
    }
  },
  components: {
    shopsHead,
    shopsContent,
    [Toast.name]: Toast,
  },
  created() {
    this.$axios
      .get('/shops.json', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        this.shopsList = res.data.commodity
      })
  },
  mounted() {
    this.$axios
      .post('/api/register', { name: '12356', password: '789466' })
      .then((res) => {
        console.log(res)
      })
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
