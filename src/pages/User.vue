<template>
  <div>
    <el-container>
      <el-main>
        <template>
          <el-button type="success" icon="el-icon-circle-plus-outline" @click="goto()">添加</el-button>
          <el-button type="warning" icon="el-icon-delete">刪除</el-button>
        </template>
        <el-table
          :data="tableData"
          style="width: 100%"
          height="396"
          ref="multipleTable"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="phone">
                  <span>{{ props.row.phone }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column type="selection" width="55" fixed></el-table-column>
          <el-table-column label="用户手机号" prop="phone"></el-table-column>
          <!-- <el-table-column label="产品名称" prop="productBidName"></el-table-column>
          <el-table-column label="状态" prop="statusText"></el-table-column> -->
          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button type="primary" size="small">编辑</el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                size="mini"
                type="danger"
              >移除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: []
    };
  },
  components: {},
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    goto(){
      this.$router.replace({name:'Adduser'});

    }
  },
  async created() {
    let { data } = await this.$axios.get("/login");
    console.log(data);
    let arr = data.data;
    // console.log(arr)
    this.tableData = arr
    console.log(this.tableData)
  }
};
</script>
<style>
.demo-table-expand label {
    width: 140px;
    color: #99a9bf;
}
</style>

