<template>
  <div class="cart">
    <el-card class="box-card">
      <template #header>
        <div class="card-header"> {{title}}</div>
      </template>
        <div class="item">
          <slot></slot>
        </div>

    </el-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'cart',
    props:{
      title:{
        type:String,
        default:''
      }
    },
    components: {}
  })
</script>

<style lang="less" scoped>

  .box-card {
    &:deep(.el-card__header) {
      padding: 10px 20px !important;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
  }

  .item {
    margin-bottom: 10px;
    // border: 1px solid red;
  }
</style>
