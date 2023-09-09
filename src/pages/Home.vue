<template>
  <div class="container-name">用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <n-button>naive-ui</n-button>
  <img :src="VImage" />
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import VImage from '@/assets/vue.svg'
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()
const updateName = () => {
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
</script>

<style scoped lang="scss">
.container-name {
  background-color: aqua;
  font-size: larger;
}
</style>
