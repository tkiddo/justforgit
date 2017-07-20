<template>
<el-form label-width="50px" v-model="content" ref="content" :inline="true">
  <el-form-item label="名称">
    <el-input v-model="content.name"></el-input>
  </el-form-item>
  <el-form-item label="网址">
    <el-input v-model="content.url"></el-input>
  </el-form-item>
  <el-button @click="add(content)">Add</el-button>
  <el-button @click="search(content)">SearchByName</el-button>
</el-form>
</template>
<script>
import {mapActions} from "vuex"
  export default {
    data() {
      return {
        content:{
            _id:'',
            name:'',
            url:''
        }
      };
    },
    methods:{
        add(item){
          let vm = this;
          vm.$http.post("http://localhost:8081/add",item).then(
            (response)=>{
              vm.addItem(item);
              // vm.$router.go(0)
            },(err)=>{
              console.log(err)
            }
          )
      },
      search(item){
        let vm = this;
        console.log(item)
        vm.$http.get("http://localhost:8081/list/" + item.name).then(
                        (res)=> {
                            var list = [];
                            var result = {
                                _id: res.data[0]._id,
                                name: res.data[0].name,
                                url: res.data[0].url
                            };
                            list.push(result);
                            vm.getResult(list);
                        },
                        (err)=> {
                            console.log(err)
                        }
                    )

      },
      ...mapActions([
        "addItem",
        "getResult"
      ])
    }
  }
</script>