<template>
  <div>
    <div class="box">
      <van-form validate-first @failed="onFailed" @submit="onsubmit">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field v-model="value1" name="usename" placeholder="请输入用户名" />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="value2"
          type="password"
          name="psd"
          placeholder="请输入密码"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
      <div class="tips">
        已有账号，去<router-link style="color:blue;" :to="{ path: '/login' }"
          >登录</router-link
        >
      </div>
    </div>
    <div class="imgBox1"><img src="image/timg.jpg" alt="" /></div>
  </div>
</template>

<script>
import { Form, Field, Toast, Button } from 'vant'
import { mapMutations } from 'vuex'
// import { getStore } from '@/mutils/mutils'
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
    }
  },
  created() {},
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [Button.name]: Button,
  },
  methods: {
    ...mapMutations(['CHANGELOGIN']),
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val)
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...')

        setTimeout(() => {
          Toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo)
    },
    async onsubmit(values) {
      if (!values.usename) {
        Toast('请填写用户名')
        this.click = false
        return
      }
      if (!values.psd) {
        Toast('请填写密码')
        this.click = false
        return
      }
      let res = await this.$api.register({
        name: values.usename,
        password: values.psd,
      })
      if (res.status == 200) {
        if (res.data.code == 100010) {
          Toast(res.data.message)
        } else {
          Toast('注册成功')
          this.$router.push({ path: '/login' })
        }
      } else {
        this.click = false
        Toast('服务器错误')
      }
    },
  },
}
</script>

<style scoped>
.box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  width: 90%;
  opacity: 0.8;
  z-index: 100;
}
.imgBox1 > img {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 90;
}
.tips {
  text-align: center;
}
</style>
