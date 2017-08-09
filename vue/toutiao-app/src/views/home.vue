<template>
  <div>
      <headerBar>
          <div slot="home" class="flex a-center header-bar">
              <i class="el-icon-message"></i>
              <span class="fg title">今日头条</span>
              <i class="el-icon-search"></i>
          </div>
      </headerBar>
      <div class="outerScroll">
        <ul class="head-nav-bar">
          <li v-for="(item,index) in navbar" :key="index" class="head-nav-item">
              <router-link :to="{path:item.url,query:{type:item.type}}" class="head-link">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
      <div v-show="loading" v-loading="loading" element-loading-text="拼命加载中" style="width: 100%" class="loading"></div>
      <el-alert v-show="!ifReturnMsg" class="newsLoadError" title="暂无更新..." type="error" description="此频道暂无更新，请先休息一下！" show-icon></el-alert>
      <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
          <ul class="listCon" v-show="!loading&&ifReturnMsg">
              <router-link
              v-for="(val,index) in listCon"
              :key="index"
              :to="{
                  name:'newsdetail',
                  params:{
                    id:val.tag_id,
                    title:val.title,
                    media_info:val.media_info,
                    media_name:val.media_name,
                    datetime:val.datetime,
                    abstract:val.abstract,
                    image_list:val.image_list,
                    repin_count:val.repin_count,
                    comment_count:val.comment_count,
                    keywords:val.keywords
                  }
              }"
              class='newsLink'
              >
              <p class="newsTitle">{{val.title}}</p>
              <div class="newsContent">
                  <img alt="加载出错" v-for="(img,index) in val.image_list" :key='index' v-lazy='img.url'>
                  <div class="newsTip flex a-center">
                    <span class="avIcon" v-show="val.label==='广告'">广告</span>
                    <span class="writer">{{val.media_name}}</span> &nbsp;&nbsp;
                    <span class="comment_count">评论&nbsp;{{val.comment_count}}</span>
                    <span class="datetime fg">{{val.datetime}}</span>
                  </div> 
              </div>
              </router-link>
              <div v-show='downLoadMore' class="downLoadMore" @click="pullDownMore({kind:first||$router.query.type,flag:downLoadMore})">加载更多</div>
          </ul>
      </transition>
      
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import headerBar from '../components/headerBar.vue'
import bottomBar from '../components/bottomBar.vue'
import * as type from '../store/mutation-types'
import {
    mapActions,
    mapGetters,
    mapState
} from 'vuex'
export default {
  components:{
      headerBar,
      bottomBar
  },
  computed:{
      ...mapGetters([
          'routerChange',
          'newsList',
          'list',
          'loading',
          'ifReturnMsg',
          'downLoadMore'
      ]),
      listCon:function(){
          if(this.$route.query.type){
              return this.list[this.$route.query.type]
          }else{
              return this.list[this.first]
          }
      }
  },
  beforeRouteUpdate(to,from,next){
      this.$store.commit(type.PULLDOWNBTN,true);
      next()
  },
  methods:{
      ...mapActions([
          'getNews',
          'pullDownMore'
      ])
  },
  mounted(){
      this.getNews({
          kind:this.first,
          flag:this.routerChange
      });
  },
  watch:{
      '$route':function(){
        //   this.$store.commit(type.CHANGE_LOADING_STATE,true);
          this.getNews({
              kind:this.$route.query.type,
              flag:this.routerChange
          });
          if (this.routerChange) {
                this.$store.commit(type.CHANGE_LOADING_STATE, true)
          } else {
                this.$store.commit(type.CHANGE_LOADING_STATE, false)
          }
          this.first = window.location.search.substring(6);//路由改变时更改query的值
      }

  },
  data(){
      return{
        navbar: [
            {
                text: '推荐',
                url: '/home/all',
                type: '__all__'
            },{
                text: '热点',
                url: '/home/hot',
                type: 'news_hot'
            },{
                text: '社会',
                url: '/home/society',
                type: 'news_society'
            },{
                text: '娱乐',
                url: '/home/entertainment',
                type: 'news_entertainment'
            },{
                text: '科技',
                url: '/home/tech',
                type: 'news_tech'
            },{
                text: '汽车',
                url: '/home/car',
                type: 'news_car'
            },{
                text: '体育',
                url: '/home/sports',
                type: 'news_sports'
            },{
                text: '财经',
                url: '/home/finance',
                type: 'news_finance'
            },{
                text: '军事',
                url: '/home/military',
                type: 'news_military'
            },{
                text: '国际',
                url: '/home/world',
                type: 'news_world'
            },{
                text: '时尚',
                url: '/home/fashion',
                type: 'news_fashion'
            }],
            first:window.location.search.substring(6)
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/setting.scss';
.header-bar{
    height: 44px;
    background: $mc;
    .title{
        text-align: center;
    }
    i{
        padding:0 10px;
    }
}
.outerScroll{
    overflow: hidden;
    height:50px;
    width: 100%;
    position: fixed;
    top:44px;
    left: 0;
    background: $bg;
    z-index: 1111;
}
.head-nav-bar{
    height: 70px;
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    text-align: center;
    line-height: 50px;
    .head-nav-item{
        display: inline-block;
        width: 60px;
        height:100%;
        .head-link{
            color:$fc;
        }
        .router-link-active{
            color:$mc;
            font-weight: bold;
        }
    }
}

.listCon{
    padding:94px 10px 60px 10px;
    .newsLink{
        color:#333;
        .newsTitle{
            font-weight: bold;
            padding: 5px 0;
            border-top: 1px solid $bg;
        }
        .newsContent{
            img{
                width: 32%;
            }
            & img:nth-child(2){
                margin: 0 2%;
            }
        }
        .newsTip{
            padding: 5px 0;
            .datetime{
                font-size: 12px;
                color:#666;
                text-align: right;
            }
        }
        .avIcon{
            border:1px solid $mc;
            padding:1px 3px;
            font-size: 12px;
            border-radius: 5px;
        }
    }
}

.loading{
    margin-top: 200px;
}
.newsLoadError{
    width: 85%;
    margin: 0 auto;
    margin-top: 150px;
}
.downLoadMore{
    text-align: center;
    padding: 10px 0;
    padding-bottom: 30px;
}
</style>


