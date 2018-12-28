<template>
  <el-container id="app" class="app-container">
    <nav-bar></nav-bar>
    <!--<keep-alive>-->
      <router-view/>
    <!--</keep-alive>-->
    <div class="mask" v-show="isShowMask">请将屏幕调整至大于768px<br/>(全屏最佳哦)</div>
  </el-container>
</template>

<script>
  import NavBar from "./components/NavBar";
  import HeaderBar from "./components/HeaderBar";

  export default {
    name: "App",
    components: {
      NavBar,
      HeaderBar
    },

    data() {
      return {
        isShowMask: false
      }
    },
    created() {
      $(window).resize(e => {
        if (e.target.innerWidth <= 768) {
          this.isShowMask = true
        } else {
          this.isShowMask = false
        }
      })
    }
  };
</script>

<style lang="less">
  @import "./assets/base";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .app-container {
    position: fixed;
    width: 100%;
    height: 100%;
    .el-aside {
      width: auto;
      background-color: #35404f;
      border-right: solid 1px #e6e6e6;
    }
    .el-header {
      width: 100%;
      padding: 10px;
      background-color: white;
      box-shadow: 0 1px 1px 0 rgba(166, 166, 166, 0.2);
    }

    .page-container {
      position: relative;
    }
    .mask {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(2, 2, 2, 0.9);
      font-size: 40px;
      text-align: center;
      text-overflow: ellipsis;
      color: white;
      line-height: 250px;
      z-index: 1000;
    }
  }

  body {
    margin: 0;
    a{
      text-decoration: none;
    }
  }
</style>
