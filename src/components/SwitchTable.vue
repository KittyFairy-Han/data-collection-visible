<template>
  <div class="list-container">
    <el-radio-group v-model="currentClass" v-if="currentData" fill="#2dca93">
      <el-radio-button v-for="(item,index) in classGroup" :key="index" :label="item"></el-radio-button>
    </el-radio-group>
    <el-table
      :data="currentData"
      :default-sort="{prop: 'studyNum', order: 'descending'}"
      @row-click="toDetail"
      style="width: 100%"
      border
      :cell-class-name="makeCellStyle"
    >
      <el-table-column
        prop="name"
        label="课程"
        min-width="250">
      </el-table-column>

      <el-table-column
        prop="studyNum"
        label="学习人数"
        min-width="105"
        sortable
      >
      </el-table-column>

      <el-table-column
        prop="difficulty"
        label="难度"
        min-width="105"
      >
      </el-table-column>

      <el-table-column
        prop="comprehensiveScore"
        label="综合评分"
        min-width="105"
        sortable
      >
      </el-table-column>

      <el-table-column
        prop="totalTime"
        label="时长"
        min-width="105"
        sortable
      >
      </el-table-column>

      <el-table-column v-if="isPay"
                       prop="price"
                       label="价格"
                       sortable
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {moduleTitle,makeCellStyle} from "../assets/commenVariable"
  import {reGroup} from "../utils/utils"

  export default {
    name: '',
    components: {},
    props: {
      tableData: {
        type: Array,
        default: []
      },
      isPay: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentClass: ''
      }
    },
    computed: {
      currentData() {
        if (this.tableData.length > 0) {
          let temp = [];
          this.tableData.map(ele => {
            if (ele.class == this.currentClass) {
              temp = ele.lesson
            }
          });
          if (temp.length == 0) {
            temp = this.tableData.reduce((allLesson, ele, index, array) => {
              return [...allLesson, ...(ele.lesson)]
            }, this.tableData[0].lesson);
          }
          return temp;
        }

      },
      classGroup() {
        if (this.tableData)
          return reGroup(this.tableData, 'class', 'lesson')
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      toDetail(row) {
        this.$emit('clickRow', row);
      },
      makeCellStyle({row,column}) {
//        console.log("switch list:make cell style");
        let temp = makeCellStyle({row,column});
        return temp;
      },
    },
    watch: {}

  }
</script>

<style lang="less">
  .list-container {
    width: 100%;
    .el-radio-group {
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .el-radio-group {
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    .el-radio-group {
      width: 75%;
    }
  }

  @media only screen and (min-width: 992px) {
    .el-radio-group {
      width: 60%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .el-radio-group {
      width: 100%;
    }

    .chart-item {
      width: 90%;
    }
  }
</style>
