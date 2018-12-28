<template>
  <el-container class="page-container">
    <header-bar :title="this.$attrs.title"></header-bar>
    <el-main id="course">
      <switch-card  :tabList="switchGroup" defaultTab="total">
        <section slot="total" class="part">
          <el-card class="chart-item" id="durationChart" shadow="always" ></el-card>
          <el-card class="chart-item" id="difficultyChart"  shadow="always" ></el-card>
          <el-card class="chart-item" id="gradeChart"  shadow="always" ></el-card>
        </section>
        <section slot="hot" class="part">
          <table-list :isPay="false" :tableData="hotData" @clickRow="toDetail"></table-list>
        </section>
        <section slot="popular" class="part">
          <list :isPay="false" :column="listCol" :listData="popularData" @clickRow="toDetail"></list>
        </section>
      </switch-card>
    </el-main>
  </el-container>
</template>

<script>
  import {getFreeGrade, getFreeDifficulty, getFreeDuration, getFreeHot, getFreePopular} from '../api/course'
  import course from "./Course"
  export default {
    name: "Free",
    mixins: [course],
    data() {
      return {}
    },
    created() {
    },
    mounted() {
      this.receivePageData(getFreeGrade, getFreeDifficulty, getFreeDuration, getFreeHot, getFreePopular);
    },
    methods: {
      toDetail(row) {
        console.log("to lesson ", row);
        this.$router.push({
          path: 'lesson/' + row.id, query: {
            lessonName: row.name,
            lesson: row,
            id:row.id,
            isPay:1
          }
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "./Course";

</style>
