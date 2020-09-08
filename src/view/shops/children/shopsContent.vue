<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index"
        ><img :src="`${publicPath}${item.imgsrc}`"
      /></van-swipe-item>
    </van-swipe>
    <!-- 主体内容 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-row gutter="10" class="s_box">
        <van-col
          span="12"
          v-for="(item, index) in shopsList"
          :key="'shops' + index"
          @click="toDetail(item.shop_name)"
        >
          <div class="s_son">
            <div class="s_l">
              <img :src="`${item.shop_img}`" alt="" />
            </div>
            <div class="s_r">
              <div class="int">{{ item.shop_int }}</div>
              <div class="price">
                <span>
                  <font class="p_l" color="red">￥</font>{{ item.shop_price }}
                </span>
                <van-icon
                  name="shopping-cart-o"
                  color="red"
                  @click="addOne(item.shop_id, index)"
                />
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </van-list>
  </div>
</template>

<script>
console.log(47, process.env.BASE_URL)
import { Swipe, SwipeItem, List, Col, Row, Stepper, Icon } from 'vant'
import { imgbasic } from '@/config/env'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      swiperList: [
        { imgsrc: 'image/1.jpg' },
        { imgsrc: 'image/2.jpg' },
        { imgsrc: 'image/3.jpg' },
        { imgsrc: 'image/4.jpg' },
      ],
      loading: false,
      finished: false,
      imgbasic,
      publicPath: process.env.BASE_URL,
    }
  },
  props: ['shopsList'],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [List.name]: List,
    [Col.name]: Col,
    [Row.name]: Row,
    [Stepper.name]: Stepper,
    [Icon.name]: Icon,
  },
  methods: {
    ...mapMutations(['ADDGOODNUM', 'ADDGOODLIST']),
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.shopsList.length >= 10) {
          this.finished = true
        }
      }, 2000)
    },
    addOne(id, index) {
      console.log(id)
      this.ADDGOODNUM()
      let obj = this.shopsList[index]
      console.log(obj, 78)
      this.ADDGOODLIST({ id: id, data: obj })
    },
    toDetail(name) {
      this.$router.push({
        path: '/details',
        query: { name: name },
      })
    },
  },
}
</script>
<style scoped lang="scss">
$tc: center;
.my-swipe .van-swipe-item {
  // text-align: center;
  text-align: $tc;
}
.my-swipe .van-swipe-item img {
  width: 100%;
}
.s_box {
  background: #ebebeb;
  padding: 10px;
}
.s_son {
  background: #fff;
  margin-bottom: 10px;

  .s_l {
    text-align: $tc;
  }
  .s_r {
    padding: 10px;
  }
}
.title {
  text-align: left;
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-top: 5px;
}
.p_l {
  color: red;
  font-size: 16px;
}
.int {
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
