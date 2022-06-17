<template>
  <div class="chat">
    <h2>页面正在努力开发中~</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'chat',
  setup() {
    const store=useStore()
    store.dispatch('CharModule/getData',{
      pageName:'/moment/',
      pageInfo:{
        offset:0,
        size:10
      }
    })

    return {}
  }
})
</script>

<style scoped></style>
