import echarts from 'echarts'

this.$echarts = echarts;
import {themColor, themBackground,themLight} from "./commenVariable"
export const commonTitle = {
  textStyle: {
    color: themBackground,
    fontSize: 20,
  }
};
export const commonTool = {
  show: true,
  orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
  // 'horizontal' ¦ 'vertical'
  x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
  // 'center' ¦ 'left' ¦ 'right'
  // ¦ {number}（x坐标，单位px）
  y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
  // 'top' ¦ 'bottom' ¦ 'center'
  // ¦ {number}（y坐标，单位px）
  color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
  backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
  borderColor: '#ccc',       // 工具箱边框颜色
  borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
  padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
  showTitle: true,
  feature: {
    mark: {
      show: true,
      title: {
        mark: '辅助线-开关',
        markUndo: '辅助线-删除',
        markClear: '辅助线-清空'
      },
      lineStyle: {
        width: 1,
        color: '#1e90ff',
        type: 'dashed'
      }
    },
    dataZoom: {
      show: true,
      title: {
        dataZoom: '区域缩放',
        dataZoomReset: '区域缩放-后退'
      }
    },
    dataView: {
      show: false,
    },
    magicType: {
      show: true,
      title: {
        line: '动态类型切换-折线图',
        bar: '动态类型切换-柱形图',
        stack: '动态类型切换-堆积',
        tiled: '动态类型切换-平铺'
      },
      type: ['line', 'bar', 'stack', 'tiled']
    },
    restore: {
      show: true,
      title: '还原',
      color: 'black'
    },
    saveAsImage: {
      show: true,
      title: '保存为图片',
      type: 'jpeg',
      lang: ['点击本地保存']
    },
    myTool: {
      show: false,
    }
  }
};
export const commonItemStyle = [
  {
    normal: {
      // 系列级个性化，横向渐变填充
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#d55951'},
          {offset: 1, color: '#d87a80'}
        ]
      )
    },
    emphasis: {
      color: themColor,
    }

  },
  {
    normal: {
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#ffb980'},
          {offset: 1, color: '#efae63'}
        ]
      )
    },
    emphasis: {
      color: themColor
    },
  },
  {
    normal: {                   // 系列级个性化，横向渐变填充
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#f8fa96'},
          {offset: 1, color: '#efe957'}
        ]
      )
    },
    emphasis: {
      color: themColor
    }

  },
  {
    normal: {
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#fa91be'},
          {offset: 1, color: '#feccea'}
        ]
      ),
    },
    emphasis: {
      color: themColor
    },
  },
  {
    normal: {                   // 系列级个性化，横向渐变填充
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#adfeff'},
          {offset: 1, color: '#aafdff'},
        ]
      )
    },
    emphasis: {
      color: themColor
    }

  },
  {
    normal: {
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#5ab1ef'},
          {offset: 1, color: '#86d7fe'}
        ]
      ),
    },
    emphasis: {
      color: themColor
    },
  },
  {
    normal: {                   // 系列级个性化，横向渐变填充
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#af79fa'},
          {offset: 1, color: '#b6a2de'}
        ]
      )
    },
    emphasis: {
      color: themColor
    }

  },
  {
    normal: {
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#84aad6'},
          {offset: 1, color: '#769be7'}
        ]
      ),
    },
    emphasis: {
      color: themColor
    },
  },
  {
    normal: {                   // 系列级个性化，横向渐变填充
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#fa95f4'},
          {offset: 1, color: '#e47ffa'}
        ]
      )
    },
    emphasis: {
      color: themColor
    }

  },
  {
    normal: {
      borderRadius: 5,
      color: new this.$echarts.graphic.LinearGradient(
        1, 0, 0, 0,
        [
          {offset: 0, color: '#fa6019'},
          {offset: 1, color: '#fe903e'}
        ]
      ),
    },
    emphasis: {
      color: themColor
    },
  },
];
export const commonClorList = [
  '#C1232B',
  '#FE8463',
  '#E87C25',
  '#F3A43B',
  '#FCCE10',
  '#FAD860',
  '#9BCA63',
  '#26C0C0',
  '#60C0DD',
  '#7c7dd7',
];
export const hiddenStyle = {
  normal: {
    color: 'rgba(0,0,0,0)',
    label: {show: false},
    labelLine: {show: false}
  },
  emphasis: {
    color: 'rgba(0,0,0,0)'
  }
};
export const commonDataZoom =[
  {
    type: 'slider',
    show: true,
    dataBackground:{
      lineStyle:{

      },
      areaStyle:{

      }
    },
    fillerColor:themLight,
    backgroundColor:'white'
  },
];
//柱形图
export const baseBa1 = {
  title:{
    textStyle: {
      color: themBackground,
      fontSize: 20,
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
  },
  toolbox:commonTool,
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '直接访问',
      type: 'bar',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '邮件营销',
      type: 'bar',
      stack: '广告',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'bar',
      stack: '广告',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'bar',
      stack: '广告',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '搜索引擎',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      markLine: {
        itemStyle: {
          normal: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        data: [
          [{type: 'min'}, {type: 'max'}]
        ]
      }
    },
    {
      name: '百度',
      type: 'bar',
      barWidth: 5,
      stack: '搜索引擎',
      data: [620, 732, 701, 734, 1090, 1130, 1120]
    },
    {
      name: '谷歌',
      type: 'bar',
      stack: '搜索引擎',
      data: [120, 132, 101, 134, 290, 230, 220]
    },
    {
      name: '必应',
      type: 'bar',
      stack: '搜索引擎',
      data: [60, 72, 71, 74, 190, 130, 110]
    },
    {
      name: '其他',
      type: 'bar',
      stack: '搜索引擎',
      data: [62, 82, 91, 84, 109, 110, 120]
    }
  ]
};
export const baseBar =  {
  title:{
    textStyle:commonTitle
  },
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['最高','最低']
  },
  toolbox: commonTool,
  calculable : true,
  dataZoom : [{
    ...commonDataZoom[0],
    xAxisIndex: [0],
    start: 10,
    end: 90,
    top:'90%',
    bottom:'7%',
    left:'center'
  }],
  xAxis : [
    {
      type : 'category',
      boundaryGap : false,
      data : function (){
        var list = [];
        for (var i = 1; i <= 30; i++) {
          list.push('2013-03-' + i);
        }
        return list;
      }()
    }
  ],
  yAxis : [
    {
      type : 'value'
    }
  ],
  series : [
    {
      name:'最高',
      type:'line',
      data:function (){
        var list = [];
        for (var i = 1; i <= 30; i++) {
          list.push(Math.round(Math.random()* 30));
        }
        return list;
      }()
    },
    {
      name:'最低',
      type:'line',
      data:function (){
        var list = [];
        for (var i = 1; i <= 30; i++) {
          list.push(Math.round(Math.random()* 10));
        }
        return list;
      }()
    }
  ]
};
export const baseHBar = {
  title: {
    text: '世界人口总量',
    subtext: '数据来自网络',
    textStyle: commonTitle
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['2011年', '2012年']
  },
  toolbox: {
    ...commonTool,
    feature: {
      mark: {
        show: true,
        title: {
          mark: '辅助线-开关',
          markUndo: '辅助线-删除',
          markClear: '辅助线-清空'
        },
        lineStyle: {
          width: 1,
          color: '#1e90ff',
          type: 'dashed'
        }
      },
      dataZoom: {
        show: true,
        title: {
          dataZoom: '区域缩放',
          dataZoomReset: '区域缩放-后退'
        }
      },
      magicType: {
        show: true,
        title: {
          line: '动态类型切换-折线图',
          bar: '动态类型切换-柱形图',
        },
        type: ['line', 'bar']
      },
    }
  },
  grid: {
    x: 300,
    y: 50,
    x2: 100,
    y2: 50
  },
  dataZoom : [{
    ...commonDataZoom[0],
    top:'center',
    left:'300px',
    right:'1030px',
    yAxisIndex: [0],
    start: 25,
    end: 85,
  }],
  calculable: false,
  xAxis: [
    {
      type: 'value',
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    }
  ],
  series: [
    {
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230],
    },
    {
      name: '2012年',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807],
    }
  ]
};
//饼形图
export const basePie = {
  title: {
    text: '分析标题',
    textStyle: commonTitle
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    x: '20px',
    y: 'center',
    data: ['系列一', '系列二']
  },
  toolbox: {
    show: true,
    x: 'right',
    feature: {
      mark: {show: true},
      magicType: {show: true, type: ['pie', 'funnel']},
      restore: {show: true},
      saveAsImage: {show: true}
    }
  },
  calculable: false,
  series: [
    {
      name: '系列一',
      type: 'pie',
      radius: [0, 50],

      // for funnel
      x: '20%',
      width: '40%',
      funnelAlign: 'right',
      max: 679,
      label:{
        show:false,
      },
      itemStyle: {
        normal: {
          label: {
            position: 'inner'
          },
          labelLine: {
            show: false
          }
        }
      },
      data: [
        {value: 335, name: 'x1'},
        {value: 679, name: 'x2'},
      ]
    },
    {
      name: '系列二',
      type: 'pie',
      radius: [80, 120],//饼形图半径
      center : ['60%', '50%'],
      // for funnel
      x: '60%',
      width: '35%',
      funnelAlign: 'left',
      max: 335,

      data: [
        {value: 335, name: 'x1'},
        {value: 310, name: 'x2'},
      ],

      label:{
        show:false,
      },
    }
  ]
};
export const baseClock = {
    title: {
      text: '分析标题',
      x: 'center',
      y: 'center',
      textStyle: {
        color: themColor,
        fontFamily: '微软雅黑',
        fontSize: 28,
        fontWeight: 'bolder'
      }
    },
    tooltip: {
      show: true,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      y: 0,
      itemGap: 12,
      data: ['68%的人表示过的不错', '29%的人表示生活压力很大', '3%的人表示“我姓曾”']
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      x: 'right',
      y: 'top',
      feature: {
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    polar: {
      center: ['60%', '50%']
    },
    series: [
      {
        name: '1',
        type: 'pie',
        clockWise: false,
        radius: [90, 115],
        itemStyle: {
          normal: {
            ...commonItemStyle[0].normal,
            label: {show: false},
            labelLine: {show: false}
          },
          emphasis: commonItemStyle[0].emphasis
        },
        data: [
          {
            value: 68,
            name: '68%的人表示过的不错'
          },
          {
            value: 32,
            name: 'invisible',
            itemStyle: hiddenStyle
          }
        ]
      },
      {
        name: '2',
        type: 'pie',
        clockWise: false,
        radius: [65, 90],
        itemStyle: {
          normal: {
            ...commonItemStyle[1].normal,
            label: {show: false},
            labelLine: {show: false}
          },
          emphasis: commonItemStyle[1].emphasis
        },
        data: [
          {
            value: 29,
            name: '29%的人表示生活压力很大'
          },
          {
            value: 71,
            name: 'invisible',
            itemStyle: hiddenStyle
          }
        ]
      },
      {
        name: '3',
        type: 'pie',
        clockWise: false,
        radius: [40, 65],
        itemStyle: {
          normal: {
            ...commonItemStyle[2].normal,
            label: {show: false},
            labelLine: {show: false}
          },
          emphasis: commonItemStyle[2].emphasis
        },
        data: [
          {
            value: 50,
            name: '50%的人表示“我姓曾”'
          },
          {
            value: 50,
            name: 'invisible',
            itemStyle: hiddenStyle
          }
        ]
      }
    ]
  };
//折线图
export const baseLine = {
  title: {
    text: '过去一周学习人数变化',
    textStyle: commonTitle
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['学习人数']
  },
  toolbox: {
    show: true,
    feature: {
      mark: {show: true},
      dataView: {show: false, readOnly: false},
      magicType: {show: true, type: ['line', 'bar']},
      restore: {show: true},
      saveAsImage: {show: true}
    }
  },
  calculable: false,
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value',
    }
  ],
  grid: {
    x: 50,
    y: 100,
    x2: 50,
    y2: 50
  },
  series: [
    {
      name: '学习人数',
      type: 'line',
      smooth:true,
      data: [11, 11, 15, 13, 12, 13, 10],
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    },
  ]
};
//雷达图
export const radar = {
  title: {
    text: '罗纳尔多 vs 舍普琴科',
    subtext: '完全实况球员数据'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    x: 'center',
    data: ['罗纳尔多', '舍普琴科']
  },
  toolbox: {
    show: true,
    feature: {
      mark: {show: true},
      dataView: {show: true, readOnly: false},
      restore: {show: true},
      saveAsImage: {show: true}
    }
  },
  calculable: true,
  polar: [
    {
      indicator: [
        {text: '进攻', max: 100},
        {text: '防守', max: 100},
        {text: '体能', max: 100},
        {text: '速度', max: 100},
        {text: '力量', max: 100},
        {text: '技巧', max: 100}
      ],
      radius: 130
    }
  ],
  series: [
    {
      name: '完全实况球员数据',
      type: 'radar',
      itemStyle: {
        normal: {
          areaStyle: {
            type: 'default'
          }
        }
      },
      data: [
        {
          value: [97, 42, 88, 94, 90, 86],
          name: '舍普琴科'
        },
        {
          value: [97, 32, 74, 95, 88, 92],
          name: '罗纳尔多'
        }
      ]
    }
  ]
};





