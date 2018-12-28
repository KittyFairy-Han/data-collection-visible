<template>
  <el-container class="page-container">
    <header-bar :title="this.$attrs.title"></header-bar>
    <el-main id="lecturer">
      <div class="list-container">
        <list :listData="hotLecturer" :column="listCol" @clickRow="toMooc"></list>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import List from "../components/List.vue"
  import {getHot} from '../api/lecturer'

  export default {
    name: "Lecturer",
    components: {
      HeaderBar,
      List
    },
    data() {
      return {
        hotLecturer: [],
        listCol: [
          {
            key: 'name',
            value: '讲师'
          },
          {
            key: 'fans',
            value: '关注人数'
          },
          {
            key: 'freeLessonNumber',
            value: '免费课程数'
          },
          {
            key: 'payLessonNumber',
            value: '付费课程数'
          },
        ]
      }
    },
    created() {
      getHot().then(res => {
        console.log(res);
        this.hotLecturer = res;
      });
    },
    mounted() {

    },
    methods: {
      toMooc(row){
        console.log("to lecturer ",row);
        window.location.href = row.url;
      }
    }
  };
</script>

<style lang="less" scoped>
  #lecturer {
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
    }
    .card-item {
      height: 300px;
      margin-bottom: 20px;
      float: left;
    }
    .chart-item {
      height: 300px;
      margin-bottom: 20px;
      float: left;
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

    .chart-item {
      width: 90%;
    }
  }

  @media only screen and (min-width: 992px) {
    .card-item {
      width: 30%;
    }

    .chart-item {
      width: 90%;
    }
  }
</style>
