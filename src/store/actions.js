import {ADDCAR} from './mutation-types'
import requestGoods from '@/request/api/goodApi' 


export default {
  // 加入购物车
  addcar({commit,state},data){
    let result = state.carList.some((item)=>{
      if(item._id){
        return true
      }
    })
    if(result){
      let index = state.carList.findIndex((item)=>{return item._id === data._id})
      data.shop_num = state.carList[index].shop_num++;
    }else{
      data.shop_num++
    }
    requestGoods.goodsList(data).then((res)=>{
      console.log(res)
    })
    setTimeout(()=>{ commit(ADDCAR)},1000)
   
  }
}