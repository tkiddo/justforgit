<template>
<el-form label-width="80px" v-model="content" ref="content">
  <el-form-item label="名称" style="margin-top:20px">
    <el-input v-model="content.Name"></el-input>
  </el-form-item>
  <el-form-item label="类别">
    <el-input v-model="content.Category"></el-input>
  </el-form-item>
  <el-form-item label="价格">
    <el-input v-model="content.Price"></el-input>
  </el-form-item>
  <el-button @click="add('content')">Add</el-button>
</el-form>
</template>
<script>
import {mapActions} from "vuex"
  export default {
    data() {
      return {
        content:{
            Name:'',
            Category:'',
            Price:''
        }
      };
    },
    methods:{
        add(formName){
          let vm = this;
          let data = vm.content;
          vm.$http.post("http://localhost:3000/api/Products",data,{emulateJSON: true}).then(
            (response)=>{
              vm.addItem(data);
              vm.$router.go(0)
            },(err)=>{
              console.log(err)
            }
          )
      },
      ...mapActions([
        "addItem"
      ])
    }
  }
</script>