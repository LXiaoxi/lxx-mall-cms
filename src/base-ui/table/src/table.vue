<template>
  <div class="table">
<!--    头部-->

    <div class="header1">
        <slot name="header">
          <div class="title">{{title}}</div>
          <div class="header">
            <slot name="headerhandle"></slot>
          </div>
        </slot>
      </div>

<!--    列表-->
    <el-table :data="listData" border style="width: 100%" v-bind="childrenProps">
<!--      <el-table-column prop="name" label="用户名" min-width="180" />&lt;!&ndash;对应的表头&ndash;&gt;-->
      <el-table-column v-if="showSelectColumn" type="selection"></el-table-column>
<!--      序号列-->
      <el-table-column v-if="shouIndexColumn" type="index" label="序号" align="center" width="70"></el-table-column>

      <template v-for="propItem in propsList" :key="propItem.name">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
<!--              {{scope.row}}整一个对象-->
              {{scope.row[propItem.prop]}}
            </slot><!--动态设置插槽-->
          </template>
        </el-table-column>
      </template>
    </el-table>
<!--    尾部分页-->
    <div class="footer" v-if="showFooter">
      <slot name="footer"></slot>
      <el-pagination
        :currentPage="page.currentPage"
        :page-size="page.pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'table',
    props:{
      listData:{
        type:Array,
        required:true
      },
      listCount:{
        type:Number,
        default:0
      },
      propsList:{
        type:Array,
        required:true
      },
      shouIndexColumn:{
        type:Boolean,
        default:false
      },
      showSelectColumn:{
        type:Boolean,
        default:false
      },
      title:{
        type:String,
        default:"默认列表"
      },
      page:{
        type:Object,
        default:()=>({currentPage:0,pageSize:10})
      },
      childrenProps:{
        type:Object,
        default:()=>({})
      },
      showFooter:{
        type:Boolean,
        default:true
      }
    },
    components: {},
    emits:['update:page'],
    setup(props,{emit}){
      const handleSizeChange=(pageSize:number)=>{
        emit('update:page',{...props.page,pageSize})
      }
      const handleCurrentChange=(currentPage:number)=>{
        emit('update:page',{...props.page,currentPage})
      }
      return{
        handleSizeChange,
        handleCurrentChange
      }
    }
  })
</script>

<style lang="less">
  .header1{
    display: flex;
    justify-content:space-between;
    align-items: center;
    height:60px;
    padding: 0 10px;
  }
  .footer{
    display: flex;
    justify-content: right;
    margin:20px;
  }

</style>
