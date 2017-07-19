<template>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  size="tiny"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="hideDialog">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        
      };
    },
    computed:mapState({
        dialogVisible:state=>state.dialogVisible
    }),
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      ...mapActions([
          "hideDialog"
      ])
    }
  };
</script>