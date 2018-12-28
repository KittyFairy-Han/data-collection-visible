<template>
  <el-header style="text-align: right; font-size: 12px">
    <el-row>
      <el-col :span="17" class="title">{{title}}<span v-if="lessonName">--{{lessonName}}</span></el-col>
      <el-col :span="7" class="func">
        <el-button v-if="lessonName" type="warning" circle @click="toMooc">去慕课</el-button>
        <el-button type="info" icon="el-icon-refresh" circle></el-button>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>


  export default {
    name: "HeaderBar",
    data() {
      return {};
    },
    props: {
      title: {
        type: String,
        default: '主题'
      },
      lessonName: {
        type: String,
        default: ''
      }
    },
    mounted() {

    },
    methods: {
      toMooc(){
        this.$emit('clickMooc')
      }
    }
  };
</script>
<style lang="less">
  @import '../assets/base.less';
  .title {
    font-size: 20px;
    padding: 0 40px;
    text-align: left;
    line-height: 40px;
    color: @themBackground;
    span {
      font-size: 16px;
      color: @themColor;
    }
  }

  .func {
    padding: 0 40px;
  }
</style>
