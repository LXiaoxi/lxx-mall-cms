<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pagename="goods">
      <template #image="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        />
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/index'
import {contentTableConfig} from './config/table-config'
export default defineComponent({
  name: 'goods',
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
