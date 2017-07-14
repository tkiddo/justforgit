<template>
<el-form label-width="80px" v-model="content" ref="content">
  <el-button @click="add('content')">Add</el-button>
  <el-button>Search</el-button>
  <el-form-item label="名称" style="margin-top:20px" prop="Name">
    <el-input v-model="content.Name"></el-input>
  </el-form-item>
  <el-form-item label="类别" prop="Category">
    <el-input v-model="content.Category"></el-input>
  </el-form-item>
  <el-form-item label="价格" prop="Price">
    <el-input v-model="content.Price"></el-input>
  </el-form-item>
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
        },
        _api:"http://localhost:56957/"
      };
    },
    methods:{
        add(formName){
          let data = this.content;
          let url = this._api+"api/Products";
          this.$refs[formName].validate((valid) => {
          if (valid) {
              this.addItem(data);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      ...mapActions([
        "addItem"
      ])
    }
  }
</script>