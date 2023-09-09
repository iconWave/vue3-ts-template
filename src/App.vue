<template>
  <n-config-provider :locale="zhCN" :theme="darkTheme" :date-locale="dateZhCN">
    <router-view></router-view>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { darkTheme, dateZhCN, NConfigProvider, zhCN } from 'naive-ui'

export default defineComponent({
  name: 'App',
  components: { NConfigProvider },
  setup() {
    return {
      zhCN,
      dateZhCN,
      darkTheme,
    }
  },
})
</script>
