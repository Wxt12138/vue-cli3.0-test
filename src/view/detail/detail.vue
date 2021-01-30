<template>
  <div>
    <van-row>
      <van-col span="24" class="img_show">
        <img :src="details.shop_img" alt="">
      </van-col>
      <van-col span="24" class="detail_content">
          <van-col span="24" class="price"><span class="price_sign">￥</span><span class="price_num">{{details.shop_price}}</span></van-col>
          <van-col span="24" class="main">{{details.dec}}</van-col>
          <van-col span="24" class="module_wrap">
              <van-col span="8">快递：{{details.send_price}}</van-col>
              <van-col class="tc" span="8">月销量：{{details.month_num}}</van-col>
              <van-col class="tr" span="8">{{details.addr}}</van-col>
          </van-col>
          <van-col span="24" class="module_wrap">
              <van-cell title="选择" is-link >
                  <template #title>
                    <span class="c_l">选择</span>
                    <span class="c_r">请选择参数颜色</span>
                  </template>
              </van-cell>
          </van-col>
          <van-col span="24" class="module_wrap">
              <van-cell title="参数" is-link >
                  <template #title>
                    <span class="c_l">参数</span>
                    <span class="c_r">品牌 型号</span>
                  </template>
              </van-cell>
          </van-col>
      </van-col>
      
    </van-row>
    <div class="bottom">
      <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickKefu" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickDianpu" />
      <van-goods-action-icon :icon="isShoucang?'star':'star-o'" text="已收藏" @click="onClickShoucang" :color="isShoucang?'#ff5000':''" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickCar"/>
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Col, Row, GoodsAction, GoodsActionIcon, GoodsActionButton ,Cell } from 'vant';
import {getName} from '@/mutils/mutils'
import { mapActions } from 'vuex'
import mixin from '@/mixin'
export default {
  data() {
    return {
     details:'',
     isShoucang:false
    }
  },
  mixins:[mixin],
  created(){
    let name = getName('name');
    console.log(name)
    let parmas = {"name":name}
    // let detail = this.$api.goodsDetail(name);
    // let detail = this.$api.goodsDetail(name);
    let detail = async() =>{
      let res = await this.$api.goodsDetail(parmas);
      this.details = res.data.list;
    }
    detail();
  },
  components:{
    [Col.name]:Col,
    [Row.name]:Row,
    [Cell.name]:Cell,
    [GoodsAction.name]:GoodsAction,
    [GoodsActionIcon.name]:GoodsActionIcon,
    [GoodsActionButton.name]:GoodsActionButton,
  },
  methods:{
    ...mapActions(['addcar']),
    onClickKefu(){
      this.tips("哪来的什么客服啊")
    },
    onClickDianpu(){
      this.tips("同样也没有什么店铺")
    },
    onClickShoucang(){
      this.isShoucang = !this.isShoucang
    },
    onClickButton(){
       this.tips("买不来了，加入购物车吧")
    },
    // 加入购物车
    onClickCar(){
      let data = JSON.parse(JSON.stringify(this.$data.details))
      this.addcar(data)
      // this.ADDCAR(this.details)
    }
  }
}
</script>

<style scoped lang="scss">
$shoucang:#ff5000;
 .tr{
      text-align: right;
    }
    .tc{
      text-align: center;
    }
.img_show{
  text-align: center;
  img{
    width: 100%;
  }
}
// 主体样式
.detail_content{
  padding: 5px 10px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  background-attachment: fixed;
  // background-color: rgb(185, 185, 185);
  .main{
    font-size: 14px;
    color: #051B28;
    line-height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    max-height: 63px;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    overflow: hidden;
    word-break: break-all;
  }
  div{
    background-color: #fff;
  }
  .van-cell{
    padding: 0;
  }
}
.price{
  color: #FF0036;
  .price_sign{
    font-size: 16px;
  }
  .price_num{
    font-size: 20px;
  }
}
.module_wrap{
    line-height: 30px;
    font-size: 12px;
    color: #999;
}
.c_l{
    float: left;
    width: 30px;
    height: auto;
    color: #999;
    overflow: hidden;
}
.c_r{
    margin-left: 6px;
    margin-right: 24px;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.active.shoucang{
  color:$shoucang;
}
</style>
