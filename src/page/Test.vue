<template>
  <el-container class="page-container">
    <header-bar :title="this.$attrs.title"></header-bar>
    <el-main id="test">
      <section class="part">
        <div class="chart-item" id="gradeChart"></div>
        <div class="chart-item" id="difficultyChart"></div>
        <div class="chart-item" id="durationChart"></div>
      </section>
    </el-main>
  </el-container>
</template>

<script>
//  import {getPayOverview} from '../api/course'
  import course from './Course'
  import HeaderBar from "../components/HeaderBar";
  import {commonItemStyle, baseBar,basePie} from "../assets/baseChart"
  import {moduleTitle} from "../assets/commenVariable"

  export default {
    components: {
      HeaderBar,
    },
    data() {
      return {
        gradeOption: {},
        difficultyOption: {},
        durationOption: {},
        hotData: [],
        popularData: [],
      }
    },
    created() {

    },
    mounted() {
//      getPayOverview().then(res => {
//        const {grade: gradeData, difficulty: difficultyData, duration: durationData} = res;
//        this.gradeOption = {
//          ...baseBar,
//          title: {text: gradeData.title, subText: 'res-1'},
//          legend: {
//            data: this.getLegend(gradeData),
//            x: 'center',
//            y: 'bottom',
//            padding: 0
//          },
//          xAxis: [
//            {
//              type: 'category',
//              data: ['<6', '6-8', '8-9', '9-9.5', '9.5-10', '10']
//            }
//          ],
//          series: this.getSeries(gradeData),
//        };
//        this.gradeOption = basePie;
//        let gradeChart = this.$echarts.init(document.getElementById('gradeChart'));
//        gradeChart.setOption(this.gradeOption);
//        this.difficultyOption = {
//          ...baseBar,
//          title: {text: difficultyData.title, subText: 'res-2'},
//          legend: {
//            data: this.getLegend(difficultyData),
//            x: 'center',
//            y: 'bottom',
//            padding: 0
//          },
//          xAxis: [
//            {
//              type: 'category',
//              data: ['入门', '初级', '中级', '高级']
//            }
//          ],
//          series: this.getSeries(gradeData),
//        };
//        let difficultyChart = this.$echarts.init(document.getElementById('difficultyChart'));
//        difficultyChart.setOption(this.difficultyOption);
//        this.durationOption = {
//          ...baseBar,
//          title: {text: durationData.title, subText: 'res-1'},
//          legend: {
//            data: this.getLegend(durationData),
//            x: 'center',
//            y: 'bottom',
//            padding: 0
//          },
//          xAxis: [
//            {
//              type: 'category',
//              data: ['<8', '8-8.4', '8.5-8.9', '9-9.4', '9.5-9.7', '9.8-10']
//            }
//          ],
//          series: this.getSeries(durationData),
//        };
//        let durationChart = this.$echarts.init(document.getElementById('durationChart'));
//        durationChart.setOption(this.durationOption)
//      });
    },
    methods: {
      getSeries(chartData) {
        let temp = [];
        for (let i = 0; i < chartData.category.length; i++) {
          temp[i] = {
            type: 'bar',
            name: chartData.category[i].name,
            data: chartData.category[i].values,
            itemStyle: commonItemStyle[i],
            barWidth: 10,
          }
        }
        return temp;
      },
      getLegend(chartData) {
        let temp = [];
        for (let i = 0; i < chartData.category.length; i++) {
          temp.push(chartData.category[i].name)
        }
        return temp;
      },
    }
  };
</script>

<style lang="less" scoped>
  #test {
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
      .chart-item {
        min-width: 1000px;
        width: 95%;
        height: 300px;
        margin-bottom: 20px;
        float: left;
      }
    }

  }
</style>
