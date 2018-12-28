<template>
  <el-container class="page-container">
    <header-bar :title="this.$attrs.title"></header-bar>
    <el-main id="home">
      <section class="part">
        <div class="card-container">
          <el-card shadow="always" class="card-item">
            <h4>付费课程</h4>
            <h2 class="number">{{lessonNum.pay}}<span class="smaller">个</span></h2>
            <h4>免费课程</h4>
            <h2 class="rank">{{lessonNum.free}}<span class="smaller">个</span></h2>
          </el-card>
          <el-card shadow="always" class="card-item">
            <h4>讲师</h4>
            <h2 class="number">{{lecturerNum}}<span class="smaller">位</span></h2>
          </el-card>
          <el-card shadow="always" class="card-item">
            <h4>评论</h4>
            <h2 class="number">{{commentNum}}<span class="smaller">条</span></h2>
          </el-card>
          <el-card shadow="always" class="card-item">
            <h4>学习方向</h4>
            <h2 class="number">{{classNum}}<span class="smaller">类</span></h2>
          </el-card>
        </div>
      </section>
    </el-main>
  </el-container>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import {getMoocOverview} from "../api/home"

  export default {
    name: "Home",
    components: {
      HeaderBar
    },
    data() {
      return {
        classNum:0,
        lessonNum:0,
        commentNum:0,
        lecturerNum:0,
      }
    },

    created() {
      this.cardData = getMoocOverview().then(res => {
        console.log('首页数据', res);
        this.classNum = res.classNum;
        this.lecturerNum = res.lecturerNum;
        this.lessonNum = res.lessonNum;
        this.commentNum = res.commentNum;
      });

    },
    mounted() {

    },
    methods: {

    }
  };
</script>

<style lang="less" scoped>
  @import "../assets/base";
  #home {
    position: absolute;
    top: 60px;
    width: 100%;
    height: 100%;
    padding: 20px 0 0 0;
    overflow: scroll;
    background-color: #f7f9fa;
    .part {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
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
            .smaller{
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
      }
    }
  }

  @media only screen and (max-width: 768px) {
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
      width: 45%;
    }

    .chart-item {
      width: 90%;
    }
  }


</style>
