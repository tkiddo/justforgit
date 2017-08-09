<template>
  <div>
      <headerBar>
          <div slot='newsdetail' class="flex a-center detail-head">
              <i class="el-icon-arrow-left" @click='goBack'></i>
              <div class="fg detail-top">头条详情</div>
              <i class="el-icon-share"></i>
          </div>
      </headerBar>
      <div class="container">
          <div class="detail-title">{{routeInfo.title || ''}}</div>
          <div class="media_name flex a-center">
              <img src="../assets/imgs/head.jpg" alt="" class="head-icon">
              <div class="fg">
                  <p>{{routeInfo.media_name || ''}}</p>
                  <p>{{routeInfo.datetime || ''}}</p>
              </div>
          </div>
          <div class="contentNews">
              <div class="contentText">
                  {{routeInfo.abstract || ''}}
              </div>
              <div class="contentImg flex flex-column a-center">
                  <img :src="img.url" alt="" v-for="(img,index) in routeInfo.image_list" :key="index">
              </div>
          </div>
          <div class="keyWords">
              <div v-for="(word,index) in keyWords" :key="index">{{word}}</div>
          </div>
          <div class="zan flex j-center">
              <div>
                  <i class="el-icon-star-off"></i>
                  <span>赞{{routeInfo.repin_count || ''}}</span>
              </div>
              <div>
                  <i class="el-icon-delete2"></i>
                  <span>不喜欢</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import headerBar from '../components/headerBar.vue'
export default {
  computed:{
      routeInfo:function(){
          return this.$route.params;
      },
      keyWords:function(){
          var str = this.$route.params.keywords;
          if(str){
              return str.split(",")
          }else{
              return []
          }
      }
  },
  mounted(){
      console.log(this.routeInfo)
  },
  components:{
      headerBar
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
}
</script>

<style lang="scss">
@import '../assets/css/setting.scss';
.container{
    margin-top: 60px;
    padding: 0 15px;
    .detail-title{
        font-size: 25px;
        font-weight: bold;
    }
    .media_name{
        padding:10px;
        padding-top: 30px;
        .head-icon{
            width: 50px;
            height: 50px;
            border-radius: 25px;
            margin-right: 15px;
        }
        p{
            font-size: 14px;
            padding: 2px;
        }
    }
    .contentNews{
        .contentText{
            font-size: 16px;
            color:#222;
            line-height: 25px;
            text-indent: 2rem;
        }
        .contentImg{
            img{
                margin: 10px 0;
                width: 70%;
            }

        }
    }
    .keyWords{
        width: 100%;
        height: auto;
        div{
            border:1px solid $mc;
            padding:2px 5px;
            border-radius: 10px;
            font-size: 14px;
            display: inline-block;
            margin: 5px;
        }
    }
    .zan{
        padding:10px 0;
        margin-top: 10px;
        width: 100%;
        border-top: 1px solid $bg;
        div{
            padding:5px 10px;
            border:1px solid #888;
            border-radius: 10px;
            margin: 10px;
        }
    }
}
</style>



