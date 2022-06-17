<template>
  <div class="menu">
    <page-content :contentTableConfig="contentTableConfig" pagename="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import {contentTableConfig} from './config/table-config'
export default defineComponent({
  name: 'xx-menu',
  components:{
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
