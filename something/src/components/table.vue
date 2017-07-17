 <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="Name"
        label="名称"
        width="280">
      </el-table-column>
      <el-table-column
        prop="Category"
        label="类别"
        width="280">
      </el-table-column>
      <el-table-column
        prop="Price"
        label="价格"
        width="280">
      </el-table-column>
      <el-table-column
      label="操作" prop="Id">
      <template scope="scope">
        <el-button type="text" size="small" @click="del(scope.$index)">Delete</el-button>
      </template>
    </el-table-column>
    </el-table>
  </template>

<script>
import {mapState} from "vuex"
import {mapActions} from "vuex"
    export default {
      data() {
        return {
        }
      },
      computed:mapState({
          tableData:state=>state.tableData
      }),
      methods:{
        del(id){
          let vm = this;
          let _url = "http://localhost:56957/api/Products/"+id;
          // vm.$http.delete(_url,{method:"DELETE",emulateHTTP:true,emulateJSON:true}).then(
          //   (response)=>{
          //     vm.delItem(id);
          //   },(err)=>{
          //     console.log(err);
          //   }
          // )
          vm.delItem(id)
        },
        ...mapActions([
          "delItem"
        ])
      }
    }
  </script>