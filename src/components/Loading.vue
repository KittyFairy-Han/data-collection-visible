<template>
<div class="loading" id="loading" v-show="isLoading">
  <img src="../assets/img/loading.gif"/>
</div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props:{
          isLoading:{
            default:false,
            type:Boolean
          },
//          parentDom:{
//            default:'',
//            type:String
//          }
        },
        data() {
            return {

            }
        },
        computed: {},
        created() {
        },
        mounted() {
        },
        methods: {},
//        watch:{
//          parentDom(curVal){
//            if(curVal){
//              document.getElementsByClassName(curVal)[0].appendChild(document.getElementById("loading"))
//            }
//          }
//        }

    }
</script>

<style lang="less" scoped>
   .loading{
     position: fixed;
     left: 40%;
     top:40%;
     right: 40%;
     bottom: 40%;
     background-color: #2dca93;
     img{
       width: 100%;
       height:auto;
     }
     opacity: 0.7;
   }
</style>
