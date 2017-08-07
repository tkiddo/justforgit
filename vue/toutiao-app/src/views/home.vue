<template>
  <div>
      <headerBar>
          <div slot="home" class="flex a-center header-bar">
              <i class="el-icon-message"></i>
              <span class="fg title">今日头条</span>
              <i class="el-icon-search"></i>
          </div>
      </headerBar>
      <ul class="head-nav-bar">
          <li v-for="(item,index) in navbar" :key="index" class="head-nav-item">
              <router-link :to="{path:item.url,query:{type:item.type}}" class="head-link">{{item.text}}</router-link>
          </li>
      </ul>
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import headerBar from '../components/headerBar.vue'
import bottomBar from '../components/bottomBar.vue'
export default {
  components:{
      headerBar,
      bottomBar
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
            }]
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
        padding:0 10px
    }
}
.head-nav-bar{
    height: 50px;
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    text-align: center;
    line-height: 50px;
    background: $bg;
    .head-nav-item{
        display: block;
        width: 60px;
        float: left;
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
</style>


