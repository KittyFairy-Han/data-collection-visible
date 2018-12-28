<template>
  <el-container class="page-container">
    <header-bar :title="this.$attrs.title"
                :lessonName="this.$route.query.lessonName"
                @clickMooc="toMooc"></header-bar>
    <el-main id="lesson">
      <switch-card :tabList="switchGroup" defaultTab="total">
        <section slot="total" class="part">
          <div>
            <el-collapse v-model="activeBoard" accordion>
              <el-collapse-item title="基本信息" name="baseInfo">
                <div class="base-info">
                  <h5><a :href="lesson.authorUrl">讲师 :<span>{{lesson.author}}</span></a></h5>
                  <h5>难度 :<span>{{lesson.difficulty}}</span></h5>
                  <h5>时长 :<span>{{lesson.totalTime}}</span></h5>
                  <h5>价格 :<span>{{lesson.price == '0.00' ? '免费' : lesson.price}}</span></h5>
                </div>
              </el-collapse-item>
              <el-collapse-item title="内容简介" name="introInfo">
                <div class="intro-info">{{lesson.introduction}}</div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <h3>与相同学习方向<span>【{{lesson.curriculumClassification}}】</span>的其余课程对比</h3>
          <div class="card-container">
            <el-card shadow="always" class="card-item">
              <h4>学习人数</h4>
              <h2 class="number">{{lesson.studyNum}}</h2>
              <h4>排名</h4>
              <h2 class="rank">{{lesson.studyRank}}/{{lesson.totalMember}}</h2>
            </el-card>
            <el-card shadow="always" class="card-item">
              <h4>评论人数</h4>
              <h2 class="number">{{lesson.commentNum}}</h2>
              <h4>排名</h4>
              <h2 class="rank">{{lesson.commentRank}}/{{lesson.totalMember}}</h2>
            </el-card>
            <el-card shadow="always" class="card-item">
              <h4>评分等级</h4>
              <h2 class="number">{{lesson.comprehensiveScore}}</h2>
              <h4>排名</h4>
              <h2 class="rank">{{lesson.scoreRank}}/{{lesson.totalMember}}</h2>
            </el-card>
          </div>
          <div>
            <div class="chart-item" id="studyChart"></div>
            <div class="chart-item" id="commentChart"></div>
            <div class="chart-item" id="scoreChart"></div>
            <div class="chart-item" id="lineChart"></div>
            <div class="chart-item" id="commentScoreChart"></div>
            <div class="chart-item" id="contentChart"></div>
          </div>
        </section>
        <section slot="comment" class="part">
          <div>
            <!--<div class="chart-item" id="commentScoreChart"></div>-->
            <!--<div class="chart-item" id="contentChart"></div>-->
          </div>
          <switch-list :listData="comment" :column="listCol" category="class" contentList="comment"
                       @clickRow="toMooc"></switch-list>
        </section>
      </switch-card>
    </el-main>
    <loading :isLoading="loadingData"></loading>
  </el-container>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import SwitchCard from "../components/SwitcCard";
  import SwitchList from "../components/SwitchList.vue"
  import Loading from "../components/Loading.vue"
  import {getDetail} from "../api/lesson"
  import {basePie, baseClock, baseLine, commonItemStyle, hiddenStyle} from "../assets/baseChart"
  import {reGroup} from "../utils/utils"

  export default {
    name: 'Lesson',
    components: {
      HeaderBar,
      SwitchCard,
      SwitchList,
      Loading
    },
    data() {
      return {
        //接口数据
        lesson: {
          studyRank: 0,
          commentRank: 0,
          scoreRank: 0,
          totalMember: 0,
          curriculumClassification: ''
        },
        score: {},
        comment: [],
        lineStudy: {},
        //图表选项
        studyOption: {},
        commentOption: {},
        scoreOption: {},
        lineOption: {},
        commentScoreOption: {},
        contentOption: {},
        //组件控制
        switchGroup: [
          {
            label: '课程概况',
            name: 'total',
            slot: 'total'
          },
          {
            label: '评论分析',
            name: 'comment',
            slot: 'comment'
          },
        ],
        activeBoard: 'baseInfo',
        listCol: [
          {
            key: 'content',
            value: '内容'
          },
          {
            key: 'score',
            value: '分数'
          },
        ],
        loadingData:false
      }
    },
    computed: {},
    created() {

    },
    mounted() {
      this.loadingData=true;
      this.lesson = this.$route.query.lesson || {};
      console.log('router', this.$route.query);
      let {id, isPay} = this.$route.query;
      getDetail(id, isPay).then(res => {
        this.loadingData=false;
        console.log('get课程详情 ', res);
        this.lesson = {...this.lesson, ...res};
        this.lineStudy = res.lastSevenDayInfo;
        this.comment = res.comment;
        this.score = res.score;
        //学习人数图表
        this.studyOption = this.makeClockChart('学习人数', 'studyRank', 'sameStudyNum');
        let studyChart = this.$echarts.init(document.getElementById('studyChart'));
        studyChart.setOption(this.studyOption);
        //评论人数图表
        this.commentOption = this.makeClockChart('评论条数', 'commentRank', 'sameCommentNum');
        let commentChart = this.$echarts.init(document.getElementById('commentChart'));
        commentChart.setOption(this.commentOption);
        //评分图表
        this.scoreOption = this.makeClockChart('评分', 'scoreRank', 'sameScoreNum');
        let scoreChart = this.$echarts.init(document.getElementById('scoreChart'));
        scoreChart.setOption(this.scoreOption);
        //时间变化
        this.lineOption = {
          ...baseLine,
          title: {
            text: '过去一周学习人数变化',
            textStyle: baseLine.title.textStyle
          },
          legend: {
            data: ['学习人数']
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: Object.keys(this.lineStudy)
            }
          ],
          series: [
            {
              ...baseLine.series[0],
              data: Object.values(this.lineStudy),
              itemStyle: commonItemStyle[5]
            }

          ]
        };
        let lineChart = this.$echarts.init(document.getElementById('lineChart'));
        lineChart.setOption(this.lineOption);
        //具体评分
        const commentScoreLegend = ['0分', '2分', '4分', '6分', '8分', '10分'];
        this.commentScoreOption = this.makePieChart('评分分布', commentScoreLegend, '各分数评价人数', this.score);
        let commentScoreChart = this.$echarts.init(document.getElementById('commentScoreChart'));
        commentScoreChart.setOption(this.commentScoreOption);
        //具体评价
        const commentLegend = reGroup(this.comment, 'class', 'comment');
        this.contentOption = this.makePieChart('评价内容分析', commentLegend, '评价内容', this.comment);
        let contentChart = this.$echarts.init(document.getElementById('contentChart'));
        contentChart.setOption(this.contentOption)

      });

    },
    methods: {
      toMooc() {
        console.log('click toMooc');
        window.location.href = this.lesson.url
      },
      //制作钟形图相关
      makeClockChart(text, rank, same) {
        return {
          title: {
            ...baseClock.title,
            text: text,
          },
          tooltip: baseClock.tooltip,
          legend: {
            ...baseClock.legend,
            data: this.makeLegend(text)
          },
          toolbox: baseClock.toolbox,
          series: [
            //更多
            {
              ...baseClock.series[2],
              name: this.makeLegend(text)[2],
              data: this.makeClockSerie(this.lesson[rank] - 1)
            },
            //同
            {
              ...baseClock.series[1],
              name: this.makeLegend(text)[1],
              data: this.makeClockSerie(this.lesson[same])
            },
            //更少
            {
              ...baseClock.series[0],
              name: this.makeLegend(text)[0],
              data: this.makeClockSerie(this.lesson.totalMember - this.lesson[rank] - this.lesson[same])
            },
          ]
        };
      },
      makeLegend(str) {
        let temp = [];
        temp[0] = `比本门课程 ${str}【更低】的课程`;
        temp[1] = `与本门课程 ${str}【差不多】的课程`;
        temp[2] = `比本门课程 ${str}【更高】的课程`;
        return temp
      },
      makeClockSerie(visibleNum) {
        let temp = [];
        let totalNum = this.lesson.totalMember;
        temp = [
          {
            value: visibleNum,
            name: '约占' + Math.ceil(100 * visibleNum / totalNum) + '%'
          },
          {
            value: totalNum - visibleNum,
            name: 'hidden',
            itemStyle: hiddenStyle
          }
        ];
        return temp
      },
      //制作饼形图相关
      makePieChart(titleText, legendData, serieName, chartData) {
        let chartOption = {
          title: {
            ...basePie.title,
            text: titleText,
          },
          tooltip: basePie.tooltip,
          legend: {
            ...basePie.legend,
            data: legendData
          },
          toolbox: basePie.toolbox,
          series: [
            {
              ...basePie.series[1],
              name: serieName,
              data: this.makePieSerie(chartData)
            }
          ]
        };
        return chartOption;
      },
      makePieSerie(pieData) {
        let temp = [];
        if (pieData instanceof Array) {
          temp = pieData.reduce((allGroup, ele, index) => {
            return [...allGroup, {
              name: ele.class,
              value: ele.comment.length,
              itemStyle: commonItemStyle[index % 6 + 4],
            }]
          }, []);
        } else {
          temp = [
            {
              value: pieData['0'],
              name: '0分',
              itemStyle: commonItemStyle[0]
            },
            {
              value: pieData['2'],
              name: '2分',
              itemStyle: commonItemStyle[1]
            },
            {
              value: pieData['4'],
              name: '4分',
              itemStyle: commonItemStyle[2]
            },
            {
              value: pieData['6'],
              name: '6分',
              itemStyle: commonItemStyle[4]
            },
            {
              value: pieData['8'],
              name: '8分',
              itemStyle: commonItemStyle[5]
            },
            {
              value: pieData['10'],
              name: '10分',
              itemStyle: commonItemStyle[6]
            },
          ];
        }

        return temp;
      },

    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/base";

  #lesson {
    position: absolute;
    top: 60px;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: #f7f9fa;
    .part {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      > div {
        width: 100%;
      }
      .el-collapse {
        background-color: white;
        box-shadow: 0 2px 11px 0 rgba(190, 202, 218, .17);
        padding: 20px;
        .base-info {
          display: flex;
          justify-content: space-around;
          h5 {
            margin: 0;
            width: 20%;
            font-size: 14px;
            span {
              margin-left: 10px;
              font-size: 16px;
            }
          }
          h5:nth-of-type(1) span {
            color: indianred;
          }
          h5:nth-of-type(2) span {
            color: #cdac70;
          }
          h5:nth-of-type(3) span {
            color: #42cd85;
          }
          h5:nth-of-type(4) span {
            color: #328acd;
          }
        }
        .intro-info {
          text-align: left;
          font-size: 14px;
        }
      }
      .card-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .card-item {
          height: 200px;
          margin-bottom: 20px;
          float: left;
          border: 4px solid white;
          text-align: left;
          h2 {
            line-height: 50px;
            font-size: 40px;
            font-weight: 400;
            margin: 0;
            color: #378e79;
          }
          h4 {
            line-height: 30px;
            font-weight: normal;
            margin: 0;
          }
        }
        .card-item:hover {
          border: 4px solid @themColor;
        }
      }
      .chart-item {
        min-width: 500px;
        height: 300px;
        margin-bottom: 20px;
        padding: 20px;
        background-color: white;
        box-shadow: 0 2px 11px 0 rgba(190, 202, 218, .17);
        border: 4px solid white;
        float: left;
        > div {
          width: 100% !important;
        }
      }
      .chart-item:hover {
        border: 4px solid @themColor;
      }
      h3 {
        width: 100%;
      }
    }
  }

  @media all and (max-width: 1300px) {
    .chart-item {
      width: 95%;
    }
  }

  @media all and (min-width: 1300px) {
    .chart-item {
      width: 45%;
    }
  }

  @media only screen and (max-width: 600px) {
    .card-item {
      width: 90%;
    }
  }

  @media only screen and (min-width: 600px) {
    .card-item {
      width: 90%;
    }
  }

  @media only screen and (min-width: 768px) {
    .card-item {
      width: 45%;
    }
  }

  @media only screen and (min-width: 992px) {
    .card-item {
      width: 30%;
    }
  }
</style>
