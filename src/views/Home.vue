<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Vue3 + TypeScript App" />
    <van-button type="primary" size="large">大号按钮</van-button>
    <van-button type="primary" size="normal">普通按钮</van-button>
    <van-button type="primary" size="small">小型按钮</van-button>
    <van-button type="primary" size="mini">迷你按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { Button } from 'vant'
// import 'vant/lib/button/style/less'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    [Button.name]: Button
  }
})
</script>
