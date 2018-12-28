<template>
  <el-container class="page-container">
    <header-bar :title="this.$attrs.title"></header-bar>
    <el-main id="search">
      <section class="part">
        <input-box @inputBlur="receiveSearchResult"></input-box>
      </section>
      <section id="part1" class="part">
        <div class="card-item">
          <h2>
            {{percentData.effectiveLesson}}
            <span class="smaller">的课程相关性大</span>
          </h2>
          <h2>
            <span class="smaller">占据</span>
            {{percentData.effectiveComment}}
            <span class="smaller">的评论</span>
          </h2>
        </div>
        <el-card class="chart-item" id="lessonChart"></el-card>
      </section>
      <section v-show="resultData.length" class="part">
        <switch-list :column="listCol" :listData="resultData" category="lessonName" contentList="comment"
                     @clickRow="toLessonDetail"></switch-list>
      </section>
    </el-main>
    <loading :isLoading="loadingData"></loading>
  </el-container>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import InputBox from "../components/InputBox"
  import SwitchList from "../components/SwitchList"
  import Loading from "../components/Loading.vue"
  import {getCourseResult, getCommentResult, getCourseClass} from "../api/search"
  import {moduleTitle} from "../assets/commenVariable"
  import {basePie, commonItemStyle} from "../assets/baseChart"
  import {reGroup} from "../utils/utils"

  export default {
    name: 'SComment',
    data() {
      return {
        percentData: {},
        resultData: [],
        lessonOption: {},
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
        loadingData:false,
      }
    },
    components: {
      HeaderBar,
      SwitchList,
      InputBox,
      Loading
    },
    created() {

    },
    mounted(){
         document.getElementById("part1").style.opacity=0
    },
    methods: {
      toLessonDetail(row) {
        console.log("to lesson ", row);
        this.$router.push({
          path: 'lesson/' + row.lessonId, query: {
            lessonName: row.lessonName,
            id: row.lessonId,
            isPay:row.flag
          }
        });
      },
      receiveSearchResult(option) {
        this.loadingData=true;
        getCommentResult(option.keyWord).then(res => {
          console.log('receiveSearchResult', res);
          document.getElementById("part1").style.opacity=1;
          this.loadingData=false;
          let temp = this.formatResult(res);
          this.resultData = temp.target;
          this.percentData = temp.percent;
          this.lessonOption = {
            title: {
              show: false
            },
            tooltip: basePie.tooltip,
            legend: {
              ...basePie.legend,
              data: reGroup(this.resultData, 'lessonName', 'comment')
            },
            toolbox: basePie.toolbox,
            series: [
              {
                ...basePie.series[1],
                name: '课程比例',
                max: this.makeMax(this.resultData),
                data: this.makePieSerie(this.resultData)
              }
            ]
          };
          let lessonChart = this.$echarts.init(document.getElementById('lessonChart'));
          lessonChart.setOption(this.lessonOption);
        })

      },
      makeMax(pieData) {
        let temp = 0;
        for (let i = 0; i < pieData.length; i++) {
          temp = temp > pieData[i].comment.length ? temp : pieData[i].comment.length
        }
        return temp
      },
      makePieSerie(pieData) {
        let temp = [];
        temp = pieData.reduce((allGroup, ele, index) => {
          return [...allGroup, {
            name: ele.lessonName,
            value: ele.comment.length,
            itemStyle: {
              normal: commonItemStyle[index % 6 + 4].normal,
              emphasis: {
                ...commonItemStyle[index % 6 + 4].emphasis,
                label: {
                  show: true,
                  formatter: "{b}\n{d}%"
                }
              }
            }
          }]
        }, []);
        return temp;
      },
      formatResult(orign) {
        console.log('formatter');
        let temp = [];
        for (let i = 0; i < orign.length; i++) {
          let flag = 0;
          for (let j = 0; j < temp.length; j++) {
            if (orign[i].lessonId == temp[j].lessonId) {
              temp[j].comment.push(orign[i]);
              flag = 1;
              break;
            }
          }
          if (flag == 0) {
            temp.push({
              lessonId: orign[i].lessonId,
              lessonName: orign[i].lessonName,
              comment: [orign[i]]
            })
          }

        }
        let target = temp.filter(ele => ele.comment.length > 0.015 * orign.length);
        let targetCommentTotal = target.reduce((sum, ele) => {
//          console.log(ele.comment.length);
          return sum += ele.comment.length
        }, 0);
        console.log(target);
        let percent = {
          effectiveLesson: `${target.length}/${temp.length}`,
          effectiveComment: `${targetCommentTotal}/${orign.length}`,
        };
        console.log(percent);
        return {target, percent};
      }
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
      width: 90%;
      height: 70px;
      margin-bottom: 20px;
      border: 4px solid white;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
      background-color: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: nowrap;
      h2 {
        line-height: 50px;
        font-size: 30px;
        font-weight: 400;
        margin: 0;
        color: #378e79;
        .smaller {
          font-size: 20px;
          color: @themBackground;
        }
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
    .chart-item {
      width: 95%;
      height: 300px;
      margin-bottom: 20px;
      float: left;
    }
  }
</style>
