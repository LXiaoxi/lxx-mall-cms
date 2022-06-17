<template>
  <div class="xx-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" :style="itemStyle" class="xx-el-form">
      <el-row>
        <template v-for="item in formItems" :key="item.label" >
          <el-col v-bind="spanWidth"  >
            <el-form-item :label="item.label" v-if="!item.isHidden">
              <tempalte v-if="item.type==='id'">
                <el-input :placeholder="item.id"  v-model="fromModule[`${item.field}`]" />
              </tempalte>
              <tempalte v-if="item.type==='input' || item.type==='password'">
                <el-input :placeholder="item.placeholder" :show-password="item.type==='password'"  v-model="fromModule[`${item.field}`]"/>
              </tempalte>
              <template v-else-if="item.type==='select'">
<!--                :model-value="fromModule[`${item.field}`]" @input="handleValueChange($event,item.field)"-->
                <el-select :placeholder="item.placeholder" v-model="fromModule[`${item.field}`]"   style="width: 100%"  v-bind="item.otherOptions">
                  <el-option v-for="option in item.options" :value="option.value" :key="option.value">{{option.title}}</el-option>
                </el-select>
              </template>
              <template v-else-if="item.type==='datepicker'">
                <el-date-picker v-bind="item.otherOptions" style="width:100%"   v-model="fromModule[`${item.field}`]">

                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>

    </el-form>
    <div class="foot">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent,PropType,ref,watch} from 'vue'
  import {IFormItem} from '@/base-ui/form'
  export default defineComponent({
    //接收的数据

    props:{
      modelValue:{
        type:Object,
        required:true
      },
      formItems:{
        type:Array as PropType<IFormItem[]>,
        default:()=>[]
      },
      labelWidth:{
        type:String,
        default:'100px'
      },
      itemStyle:{
        type:Object,
        default:()=>({
          padding:'10px 40px'
        })
      },
      spanWidth:{
        type:Object,
        default:()=>({
          xl: 6, // >1920px 4个
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24

        })
      }
    },
    emits:['update:modelValue'],
    setup(props,{emit}){
      const fromModule=ref({...props.modelValue})//浅拷贝
      watch(fromModule,(newValue)=>{
        console.log(newValue)
        emit('update:modelValue',newValue)
      },{deep:true})
      //方式二
      // const handleValueChange=(value:any,filed:string)=>{
      //   emit('update:modelValue',{...props.modelValue,[filed]:value})
      // }
      return{
        fromModule,
        // handleValueChange

      }
    }

  })
</script>

<style lang="less">
.xx-form{
  padding: 0 20px;
}

</style>
