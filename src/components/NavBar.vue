<template>
  <div class="nav-bar">
    <el-radio-group v-model="isCollapse" :fill="themColor" textColor="white">
      <el-radio-button :label="false" v-show="isCollapse"><i class="el-icon-d-arrow-right"></i></el-radio-button>
      <el-radio-button :label="true" v-show="!isCollapse"><i class="el-icon-d-arrow-left"></i></el-radio-button>
    </el-radio-group>
    <el-menu class="el-menu-vertical-demo" :background-color="themBackground"
             text-color="#93a3b8" :active-text-color="themColor"
             :default-active="this.$router.options.routes[0].path" router
             :collapse="isCollapse">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">{{moduleTitle.home}}</span>
      </el-menu-item>
      <el-submenu index="/course">
        <div slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">{{moduleTitle.course.key}}</span>
        </div>
        <el-menu-item-group>
          <el-menu-item index="/pay">{{moduleTitle.course.pay}}</el-menu-item>
          <el-menu-item index="/free">{{moduleTitle.course.free}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/lecturer">
        <i class="el-icon-news"></i>
        <span slot="title">{{moduleTitle.lecturer}}</span>
      </el-menu-item>
      <el-submenu index="/search">
        <div slot="title">
          <i class="el-icon-search"></i>
          <span slot="title">{{moduleTitle.search.key}}</span>
        </div>
        <el-menu-item-group>
          <el-menu-item index="/scourse">{{moduleTitle.search.course}}</el-menu-item>
          <el-menu-item index="/scomment">{{moduleTitle.search.comment}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!--<el-menu-item index="/test">-->
        <!--<i class="el-icon-lego"></i>-->
        <!--<span slot="title">test</span>-->
      <!--</el-menu-item>-->
    </el-menu>


  </div>
</template>

<script>
  import {themBackground, themColor} from '../assets/commenVariable'
  import {moduleTitle} from '../assets/commenVariable'
  export default {
    name: "NavBar",
    data() {
      return {
        isCollapse: true,
        moduleTitle:[]
      };
    },
    created() {
//      console.log(this.$router.options.routes[0])
      this.themBackground = themBackground;
      this.themColor = themColor;
      this.moduleTitle = moduleTitle;
    },
    methods: {}
  };
</script>

<style lang="less">
  @import "../assets/base";
  @import "../assets/resetStyle";
  .nav-bar {
    padding-top: 20px;
    background-color: @themBackground;
    .el-menu {
      border: none;
      height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }

  .el-radio-button i {
    background-color: @themBackground;
    width: 50px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -25px;
    margin-top: -15px;
    line-height: 30px;
    color: white
  }


</style>
