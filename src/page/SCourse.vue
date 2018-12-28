<template>
  <el-container class="page-container">
    <header-bar :title="this.$attrs.title"></header-bar>
    <el-main id="search">
      <section class="part">
        <input-box :selectNav="courseClass" @inputBlur="receiveSearchResult"></input-box>
      </section>
      <switch-card :tabList="switchGroup" :defaultTab="defaultCard" ref="switchCard" id="part1">
        <section class="part" slot="result">
          <list :isPay="moneyType" :canSelect="true" :column="listCol" :listData="resultData" @clickRow="toLessonDetail"
                @selectRow="changeData"></list>
          <el-button class="compare" @click="makeCompare">开始对比框选的条目</el-button>
        </section>
        <section class="part" slot="compare">
          <el-card class="chart-item" id="studyChart" shadow="always"></el-card>
          <el-card class="chart-item" id="commentChart" shadow="always"></el-card>
          <el-card class="chart-item" id="scoreChart" shadow="always"></el-card>
          <el-card class="chart-item" id="lineChart" shadow="always"></el-card>
        </section>
      </switch-card>
    </el-main>
    <loading :isLoading="loadingData"></loading>
  </el-container>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import InputBox from "../components/InputBox"
  import SwitchCard from "../components/SwitcCard.vue"
  import List from "../components/List"
  import Loading from "../components/Loading.vue"
  import {getCourseResult, getCommentResult, getCourseClass} from "../api/search"
  import {moduleTitle, themBackground, themColor} from "../assets/commenVariable"
  import {baseHBar, baseLine, commonItemStyle, commonClorList} from "../assets/baseChart"
  import {reGroup} from "../utils/utils"
  import {testData} from "../api/currentData"

  export default {
    name: 'SCourse',
    data() {
      return {
        resultData: [],
        currentData: [],
        courseClass: [],
        listCol: [
          {
            key: 'name',
            value: '课程',
            sortable: false,
          },
          {
            key: 'author',
            value: '讲师',
            sortable: false,
          },
          {
            key: 'difficulty',
            value: '难度',
            sortable: false,
          },
          {
            key: 'totalTime',
            value: '时长',
            sortable: true,
          },
          {
            key: 'rate',
            value: '本周热度',
            sortable: true,
          },
          {
            key: 'studyNum',
            value: '学习人数',
            sortable: true,
          },
          {
            key: 'commentNum',
            value: '评论条数',
            sortable: true,
          },
        ],
        studyOption: {},
        commentOption: {},
        scoreOption: {},
        lineOption: {},
        switchGroup: [
          {
            label: '课程列表',
            name: 'result',
            slot: 'result'
          },
          {
            label: '分析对比',
            name: 'compare',
            slot: 'compare'
          },
        ],
        defaultCard:"compare",
        loadingData: false,
        moneyType: false,
      }
    },
    components: {
      HeaderBar,
      SwitchCard,
      List,
      InputBox,
      Loading
    },
    created() {
      this.receiveCourseClass();
    },
    mounted(){
      document.getElementById("part1").style.opacity=0
    },
    methods: {
      toLessonDetail(row) {
        console.log("搜索课程 to lesson ", row);
        console.log(typeof row.id);
        this.$router.push({
          path: 'lesson/' + row.id, query: {
            lessonName: row.name,
            lesson: row,
            id: parseInt(row.id),
            isPay:row.flag
          }
        });
      },
      receiveCourseClass() {
        getCourseClass().then(res => {
          console.log('receiveCourseClass', res);
          this.courseClass = res;
        })
      },
      receiveSearchResult(option) {
        this.loadingData = true;
        this.moneyType = option.moneyType == 1 ? false : true;
        console.log('input传值：', option);
        getCourseResult(option).then(res => {
          console.log('receiveSearchResult', res);
          document.getElementById("part1").style.opacity=1;
          this.loadingData=false;
          this.loading = true;
          this.resultData = res;
          this.currentData = [this.resultData[0], this.resultData[1]];
          this.makeCompare()
        })
      },
      changeData(data) {
        console.log('select row', data);
        this.currentData = data;
        this.makeCompare();
      },
      makeCompare(e) {
        console.log('makeCompare');
        const nameGroup = reGroup(this.currentData, 'name', 'name');
        //学习人数对比
        this.studyOption = {
          ...baseHBar,
          title: {...baseHBar.title, text: '学习热度', subtext: '各课程学习的总人数对比'},
          xAxis: [{type: 'value', name: '学习人数'}],
          yAxis: this.makeCategory(nameGroup),
          series: this.makeSeries('学习人数', 'studyNum', 5),
        };
        let studyChart = this.$echarts.init(document.getElementById('studyChart'));
        studyChart.setOption(this.studyOption);
        //评论数目对比
        this.commentOption = {
          ...baseHBar,
          title: {...baseHBar.title, text: '评论热度', subtext: '各课程评论数对比'},
          xAxis: [{type: 'value', name: '评论数'}],
          yAxis: this.makeCategory(nameGroup),
          series: this.makeSeries('评论数', 'commentNum', 6)
        };
        let commentChart = this.$echarts.init(document.getElementById('commentChart'));
        commentChart.setOption(this.commentOption);
        //评分对比
        this.scoreOption = {
          ...baseHBar,
          title: {...baseHBar.title, text: '满意度', subtext: '各课程综合评分对比'},
          xAxis: [{type: 'value', name: '分数'}],
          yAxis: this.makeCategory(nameGroup),
          series: this.makeSeries('评分', 'comprehensiveScore', 7),
        };
        let scoreChart = this.$echarts.init(document.getElementById('scoreChart'));
        scoreChart.setOption(this.scoreOption);
        //时间
        this.lineOption = {
          ...baseLine,
          title: {text: '过去一周学习人数变化', textStyle: baseLine.title.textStyle},
          legend: {data: reGroup(this.currentData, 'name', 'name')},
          xAxis: [{type: 'category', data: Object.keys(this.currentData[0].timeLine)}],
          series: this.makeLineSeries()
        };
        let lineChart = this.$echarts.init(document.getElementById('lineChart'));
        lineChart.setOption(this.lineOption);
        if(e){
          this.$refs.switchCard.activeTab="compare";
        }
      },
      makeCategory(nameGroup) {
        return [
          {
            name: '课程',
            type: 'category',
            data: nameGroup,
            axisLabel: {
              color: themBackground
            }
          }
        ]
      },
      makeSeries(serieTitle, key, i) {
        let temp1 = reGroup(this.currentData, key, 'name');
        let temp2 = [];
        for (let i = 0; i < temp1.length; i++) {
          temp2[i] = {
            value: temp1[i],
            itemStyle: commonItemStyle[i % 6 + 4],
          }
        }
        return [
          {
            type: 'bar',
            name: serieTitle,
            data: temp2,
            barWidth: 15,

          }
        ]
      },
      makeLineSeries() {
        let temp = [];
        for (let i = 0; i < this.currentData.length; i++) {
          temp.push({
            ...baseLine.series[0],
            name: this.currentData[i].name,
            data: Object.values(this.currentData[i].timeLine),
            itemStyle: commonItemStyle[i]
          })

        }
//        console.log('push', temp)
        return temp
      },

    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/base";

  #search {
    position: absolute;
    top: 60px;
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: scroll;
    background-color: #f7f9fa;
    .part {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .card-item {
      width: 100%;
      height: 200px;
      margin-bottom: 20px;
      float: left;
    }
    .chart-item {
      min-width: 1000px;
      width: 95%;
      min-height: 400px;
      margin-bottom: 20px;
      padding: 20px;
      float: left;
    }
    .compare {
      width: 100%;
      background-color: @themColor;
      color: white;
      top: -40px;
      position: relative;
      z-index: 1000;
    }
  }
</style>
