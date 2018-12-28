<template>
  <div class="list-container">
    <el-radio-group v-model="currentClass" v-if="currentData" fill="#2dca93">
      <el-radio-button v-for="(item,index) in classGroup" :key="index" :label="item.label">
        {{item.label}}
        <span class="num">{{item.num}}</span>
      </el-radio-button>
    </el-radio-group>
    <el-table
      :data="currentData"
      :cell-class-name="makeCellStyle"
      @row-click="toMooc"
      style="width: 100%"
      border>
      <el-table-column v-for="item in column"
                       :key="item.key"
                       :prop="item.key"
                       :label="item.value"
                       :width="item.key=='score'?50:''"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {moduleTitle, makeCellStyle} from "../assets/commenVariable"
  import {reGroup2} from "../utils/utils"

  export default {
    name: 'SwitchList',
    components: {},
    props: {
      listData: {
        type: Array,
        default: []
      },
      column: {
        type: Array,
        default: () => [
          {
            key: 'content',
            value: '内容'
          },
        ]
      },
      category: {
        type: String,
        default: 'class'
      },
      contentList: {
        type: String,
        default: 'lesson'
      }
    },
    data() {
      return {
        currentClass: ''
      }
    },
    computed: {
      currentData() {
        if (this.listData.length > 0) {
          let temp = [];
          this.listData.map(ele => {
            if (ele[this.category] == this.currentClass) {
              temp = ele[this.contentList]
            }
          });
          if (temp.length == 0) {
            temp = this.listData.reduce((allComment, ele, index, array) => {
              return allComment.concat(ele[this.contentList])
            }, this.listData[0][this.contentList]);
          }
          return temp;
        }

      },
      classGroup() {
        if (this.listData.length){
//          console.log(this.listData)
          return reGroup2(this.listData, this.category, this.contentList);
        }

      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      toMooc(row) {
        this.$emit('clickRow', row);
//        console.log("click row", row);
      },
      makeCellStyle({row, column}) {
//        console.log("switch list:make cell style");
        let temp = makeCellStyle({row, column});
        return temp;
      },
      makeNum(lessonName) {
        let temp = this.listData.find(ele => ele.lessonName == lessonName)
        return temp[this.contentList].length;
      },
    },
    watch: {}

  }
</script>

<style lang="less">
  @import "../assets/base";
  @import "../assets/resetStyle";

  .list-container {
    width: 100%;
    .el-radio-group {
      margin-bottom: 30px;
      .num {
        color: white;
        background-color: @themColor;
        margin-left: 2px;
        border-radius: 2px;
        padding: 2px;
      }
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

  @media only screen and (min-width: 1200px) {
    .el-radio-group {
      width: 100%;
    }

    .chart-item {
      width: 90%;
    }
  }
</style>
