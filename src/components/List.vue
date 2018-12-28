<template>
  <div class="list-container">
    <el-table
      :data="listData"
      @row-click="toMooc"
      @selection-change="makeSelection"
      style="width: 100%"
      :highlight-current-row="true"
      :cell-class-name="makeCellClass"
      border
    >
      <el-table-column v-if="canSelect"
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column v-for="item in column"
                       :key="item.key"
                       :prop="item.key"
                       :label="item.value"
                       :min-width="item.value=='课程'?250:'105'"
                       :sortable="item.sortable"
      >
      </el-table-column>
      <el-table-column v-if="isPay"
                       prop="price"
                       label="价格"
                       sortable>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import {moduleTitle,makeCellStyle} from "../assets/commenVariable"

  export default {
    name: 'List',
    components: {},
    props: {
      column: {
        type: Array,
        default: () => [
          {
            key: 'name',
            value: '课程'
          },
        ]
      },
      listData: {
        type: Array,
        default: []
      },
      isPay: {
        type: Boolean,
        default: false
      },
      canSelect:{
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentClass: ''
      }
    },
    computed: {},
    created() {

    },
    mounted() {

    },
    methods: {
      toMooc(row) {
        this.$emit('clickRow',row);
      },
      makeCellClass({row,column}){
//        console.log("list:make cell class");
        let temp = makeCellStyle({row,column});
        return temp;
      },
      makeSelection(selection){
//        console.log('makeSelection',selection)
        this.$emit('selectRow',selection)
      }
    },
    watch: {}

  }
</script>

<style lang="less">
  @import "../assets/resetStyle";
  .list-container {
    width: 100%;
  }
</style>
