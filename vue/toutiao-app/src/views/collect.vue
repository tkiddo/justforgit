<template>
  <div>
      <headerBar>
          <div slot='collect' class="flex a-center detail-head">
              <i class="el-icon-arrow-left" @click='goBack'></i>
              <div class="fg detail-top">我的收藏</div>
              <i class="el-icon-share"></i>
          </div>
      </headerBar>
      <div class="collectList">
          <div v-for="(item,index) in collectList" :key='index' class="flex collectItem a-center" @click="goRouter(item)">
              <div class="fg colText">
                  <h4>{{item.title}}</h4>
                  <p>{{item.source}}</p>
                  <p>{{item.datetime}}</p>
              </div>
              <div class="collectImg">
                  <img :src="img.url" alt="" v-for="(img,index) in item.image_list" :key="index" v-show="index===1">
              </div>
          </div>
      </div>
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import bottomBar from '../components/bottomBar.vue'
import headerBar from '../components/headerBar.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
    components:{
        bottomBar,
        headerBar
    },
    computed:{
        ...mapGetters([
            'collectList'
        ])
    },
    mounted(){
        this.getCollect();
        console.log(this.collectList)
    },
    methods:{
        ...mapActions([
            'getCollect'
        ]),
        goBack(){
            this.$router.go(-1);
        },
        goRouter(item){
            this.$router.push({name:'newsdetail',params:{
                            id:item.tag_id,
                            title:item.title,
                            media_info:item.media_info,
                            media_name:item.media_name,
                            datetime:item.datetime,
                            abstract:item.abstract,
                            image_list:item.image_list,
                            repin_count:item.repin_count,
                            comment_count:item.comment_count,
                            keywords:item.keywords,
                            collected:item.collected,}})
        }
    }

}
</script>

<style lang="scss">
@import '../assets/css/setting.scss';
.collectList{
    margin-top: 44px;
    padding: 5px 10px 60px 10px;
    .collectItem{
        padding: 10px 0;
        border-bottom: 1px solid $bg;
        .colText{
            h4{
                padding: 10px 0;
            }
            p{
                font-size: 14px;
                color:#444;
            }
        }
        .collectImg{
            img{
                width: 150px
            }
        }
    }
}
</style>



