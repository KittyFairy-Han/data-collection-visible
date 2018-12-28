<template>
  <div>
    <el-tabs v-model="activeTab" size="small">
      <el-tab-pane v-for="(item,index) in tabList" :label="item.label" :name="item.name" :key="index">
        <slot :name="item.slot"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    props: {
      tabList: {
        type: Array,
        default: () => [
          {
            label: '概况',
            name: 'total',
            slot: 'total'
          }
        ]
      },
      defaultTab: {
        type: String,
        default: 'total'
      }
    },
    data() {
        return{
          activeTab:'popular'
        }
    },
    created(){
      this.activeTab=this.defaultTab
    }
  }
</script>

<style lang="less">


</style>

