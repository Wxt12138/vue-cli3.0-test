import { Toast } from 'vant'
const mixin = {
  methods:{
    tips(msg){
      Toast({
        message: msg,
        duration: 2000,
        forbidClick: true,
    }) 
  }
  }

}
export default mixin