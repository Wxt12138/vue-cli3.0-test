<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/shops" icon="home-o" name="shops">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search" name="search">
        搜索
      </van-tabbar-item>
      <van-tabbar-item
        v-if="goodsNum > 0"
        replace
        to="/car"
        icon="shopping-cart-o"
        :info="goodsNum"
        name="car"
      >
        购物车
      </van-tabbar-item>
      <van-tabbar-item
        v-else
        replace
        to="/car"
        icon="shopping-cart-o"
        name="car"
      >
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/home" icon="user-circle-o" name="home">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Button, Tabbar, TabbarItem } from 'vant'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      txt: '这是index文件',
    }
  },
  computed: {
    ...mapState(['goodsNum']),
  },
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
}
</script>

<style lang="scss" scoped>
@import 'vant/lib/icon/local';
.ws {
  font-size: 32px;
  width: auto;
  height: auto;
}
</style>
