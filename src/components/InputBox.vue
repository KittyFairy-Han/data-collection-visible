<template>
  <div>
    <template v-if="selectNav.length>0">
      <el-radio-group v-model="moneyType" class="money-type">
        <el-radio-button  label="1" class="free">免费</el-radio-button>
        <el-radio-button  label="2" class="pay">付费</el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="category" class="cate">
        <el-radio-button v-for="item in selectNav" :key="item.id" :label="item.name"></el-radio-button>
      </el-radio-group>
    </template>

    <el-input v-model="keyWord" placeholder="请输入" clearable>
      <el-button slot="append" icon="el-icon-search"  @click="searchResult"></el-button>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    props: {
      selectNav:{
        type:Array,
        default:()=>[]
      }
    },
    data() {
      return {
        keyWord: '',
        category: '',
        moneyType:"2"
      }
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {
      searchResult(){
        this.$emit('inputBlur',{
          moneyType:this.moneyType,
          category:this.category,
          keyWord:this.keyWord,
        })
      }
    }

  }
</script>

<style lang="less" scoped>
  @import "../assets/resetStyle";
 .el-input{
   margin: 20px;
 }
</style>
