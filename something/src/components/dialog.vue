<template>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  size="tiny"
  :before-close="handleClose">
  <el-form label-width="50px" v-model="tableData[itemIndex]">
  <el-form-item label="名称">
    <el-input v-model="tableData[itemIndex].name"></el-input>
  </el-form-item>
  <el-form-item label="网址">
    <el-input v-model="tableData[itemIndex].url"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="hideDialog">取 消</el-button>
    <el-button type="primary" @click="update(tableData[itemIndex])">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    props:['itemIndex'],
    computed:mapState({
        dialogVisible:state=>state.dialogVisible,
        tableData:state=>state.tableData
    }),
    methods: {
      handleClose() {
        this.hideDialog()
      },
      update(item){
        let vm = this;
        vm.$http.put("http://localhost:8081/update",item).then(
          (res)=>{
            vm.updateItem(item);
            vm.hideDialog();
          },(err)=>{
            console.log(err)
          }
        )
      },
      ...mapActions([
          "hideDialog",
          "updateItem"
      ])
    }
  };
</script>