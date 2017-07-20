 <template>
 <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="280">
      </el-table-column>
      <el-table-column
        prop="url"
        label="网址"
        width="280">
      </el-table-column>
      <el-table-column
      label="操作" prop="Id">
      <template scope="scope">
        <el-button type="text" size="small" @click="del(scope.$index)">Delete</el-button>
        <el-button type="text" size="small" @click="update(scope.$index)">Update</el-button>
      </template>
    </el-table-column>
    </el-table>
    <cDialog :itemIndex = 'updateIndex'></cDialog>
  </div>
    
  </template>

<script>
import {mapState} from "vuex"
import {mapActions} from "vuex"
import cDialog from "../components/dialog.vue"
    export default {
      data() {
        return {
          updateIndex:0
        }
      },
      computed:mapState({
          tableData:state=>state.tableData
      }),
      methods:{
        del(id){
          let vm = this;
          let _id = vm.tableData[id]._id;
          vm.$http.delete("http://localhost:8081/del?_id=" + _id).then(
            (response)=>{
              vm.delItem(id);
            },(err)=>{
              console.log(err);
            }
          )
        },
        update(item){
          let vm = this;
          vm.showDialog()
          vm.updateIndex = item;
        },
        ...mapActions([
          "delItem",
          "showDialog"
        ])
      },
      components:{
        cDialog
      }
    }
  </script>