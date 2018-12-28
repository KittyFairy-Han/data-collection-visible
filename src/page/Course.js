import HeaderBar from "../components/HeaderBar";
import SwitchCard from "../components/SwitcCard";
import TableList from "../components/SwitchTable.vue"
import List from "../components/List.vue"
import {commonItemStyle, baseBar,baseBa1} from "../assets/baseChart"
import {reGroup} from "../utils/utils"
export default {
  components: {
    SwitchCard,
    HeaderBar,
    TableList,
    List
  },
  data() {
    return {
      gradeOption: {},
      difficultyOption: {},
      durationOption: {},
      hotData: [],
      popularData: [],
      listCol: [
        {
          key: 'name',
          value: '课程'
        },
        {
          key: 'rate',
          value: '本周热度'
        },
        {
          key: 'difficulty',
          value: '难度'
        },
        {
          key: 'totalTime',
          value: '时长'
        },
        {
          key: 'curriculumClassification',
          value: '方向'
        }
      ],
      switchGroup:[
        {
          label:'课程概况',
          name:'total',
          slot:'total'
        },
        {
          label:'学习最多',
          name:'hot',
          slot:'hot'
        },
        {
          label:'近期流行',
          name:'popular',
          slot:'popular'
        },
      ],
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    receivePageData(getGrade, getDif, getDur, getHot, getPopular) {
      getGrade().then(res => {
        let gradeData = res.grade;
        gradeData.category.data=['<6', '6-8', '8-9', '9-9.5', '9.5-10', '10'];
        this.gradeOption = this.makeBarChart(gradeData);
        let gradeChart = this.$echarts.init(document.getElementById('gradeChart'));
        gradeChart.setOption(this.gradeOption);
      });
      getDif().then(res => {
        let difficultyData = res.difficulty;
        difficultyData.category.data=['入门', '初级', '中级', '高级'];
        this.difficultyOption = this.makeBarChart(difficultyData);
        let difficultyChart = this.$echarts.init(document.getElementById('difficultyChart'));
        difficultyChart.setOption(this.difficultyOption);
      });
      getDur().then(res => {
        let durationData = res.duration;
        durationData.category.data=['<1','1-3', '3-6', '6-10', '10-15','15-20','20-30','>=30'];
        this.durationOption = this.makeBarChart(durationData);
        let durationChart = this.$echarts.init(document.getElementById('durationChart'));
        durationChart.setOption(this.durationOption)
      });
      getHot().then(res => {
        this.hotData = res;
      });
      getPopular().then(res => {
        this.popularData = res
      })
    },
    makeBarChart(chartData){
      let chartOption = {
        ...baseBar,
        title: {
          ...baseBar.title,
          text: chartData.title
        },
        legend: {
          data: reGroup(chartData.category,'name','values'),
          x: 'center',
          y: 'bottom',
          padding: 0
        },
        xAxis: [
          {
            type: 'category',
            data: chartData.category.data
          }
        ],
        series: this.makeSeries(chartData),
      };


      return chartOption
    },
    makeSeries(chartData) {
      let series = [];
      for (let i = 0; i < chartData.category.length; i++) {
        series[i] = {
          type: 'bar',
          name: chartData.category[i].name,
          data: chartData.category[i].values,
          itemStyle: commonItemStyle[i],
          barWidth: 10,
        }
      }
      return series;
    },

  }
};

