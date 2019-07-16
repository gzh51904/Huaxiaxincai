<template>
  <div>
    <el-container>
      <el-main>
        <template>
          <el-button type="success" icon="el-icon-circle-plus-outline">添加</el-button>
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
                <el-form-item label="id">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="pid">
                  <span>{{ props.row.pid }}</span>
                </el-form-item>
                <el-form-item label="productName">
                  <span>{{ props.row.productName }}</span>
                </el-form-item>
                <el-form-item label="baseRate">
                  <span>{{ props.row.baseRate }}</span>
                </el-form-item>
                <el-form-item label="yearRate">
                  <span>{{ props.row.yearRate }}</span>
                </el-form-item>
                <el-form-item label="yearRateLow">
                  <span>{{ props.row.yearRateLow }}</span>
                </el-form-item>
                <el-form-item label="yearRateHigh">
                  <span>{{ props.row.yearRateHigh }}</span>
                </el-form-item>
                <el-form-item label="period">
                  <span>{{ props.row.period }}</span>
                </el-form-item>
                <el-form-item label="periodDay">
                  <span>{{ props.row.periodDay }}</span>
                </el-form-item>
                <el-form-item label="surplus">
                  <span>{{ props.row.surplus }}</span>
                </el-form-item>
                <el-form-item label="lastAmount">
                  <span>{{ props.row.lastAmount }}</span>
                </el-form-item>
                <el-form-item label="amount">
                  <span>{{ props.row.amount }}</span>
                </el-form-item>
                <el-form-item label="yearRateTotal">
                  <span>{{ props.row.yearRateTotal }}</span>
                </el-form-item>
                <el-form-item label="extAmount">
                  <span>{{ props.row.extAmount }}</span>
                </el-form-item>
                <el-form-item label="extAmountHigh">
                  <span>{{ props.row.extAmountHigh }}</span>
                </el-form-item>
                <el-form-item label="raiseWay">
                  <span>{{ props.row.raiseWay }}</span>
                </el-form-item>
                <el-form-item label="minAmount">
                  <span>{{ props.row.minAmount }}</span>
                </el-form-item>
                <el-form-item label="maxAmount">
                  <span>{{ props.row.maxAmount }}</span>
                </el-form-item>
                <el-form-item label="activityLabel">
                  <span>{{ props.row.activityLabel }}</span>
                </el-form-item>
                <el-form-item label="status">
                  <span>{{ props.row.status }}</span>
                </el-form-item>
                <el-form-item label="productBidName">
                  <span>{{ props.row.productBidName }}</span>
                </el-form-item>
                <el-form-item label="currPeriod">
                  <span>{{ props.row.currPeriod }}</span>
                </el-form-item>
                <el-form-item label="type">
                  <span>{{ props.row.type }}</span>
                </el-form-item>
                <el-form-item label="createTime">
                  <span>{{ props.row.createTime }}</span>
                </el-form-item>
                <el-form-item label="personCount">
                  <span>{{ props.row.personCount }}</span>
                </el-form-item>
                <el-form-item label="interestId">
                  <span>{{ props.row.interestId }}</span>
                </el-form-item>
                <el-form-item label="stampContents">
                  <span>{{ props.row.stampContents }}</span>
                </el-form-item>
                <el-form-item label="statusText">
                  <span>{{ props.row.statusText }}</span>
                </el-form-item>
                <el-form-item label="bidType">
                  <span>{{ props.row.bidType }}</span>
                </el-form-item>
                <el-form-item label="closurePeriod">
                  <span>{{ props.row.closurePeriod }}</span>
                </el-form-item>
                <el-form-item label="closurePeriodDay">
                  <span>{{ props.row.closurePeriodDay }}</span>
                </el-form-item>
                <el-form-item label="topRecommendProductName">
                  <span>{{ props.row.topRecommendProductName }}</span>
                </el-form-item>
                <el-form-item label="sign">
                  <span>{{ props.row.sign }}</span>
                </el-form-item>
                <el-form-item label="signName">
                  <span>{{ props.row.signName }}</span>
                </el-form-item>
                <el-form-item label="signDescribe">
                  <span>{{ props.row.signDescribe }}</span>
                </el-form-item>
                <el-form-item label="custType">
                  <span>{{ props.row.custType }}</span>
                </el-form-item>
                <el-form-item label="activeRate">
                  <span>{{ props.row.activeRate }}</span>
                </el-form-item>
                <el-form-item label="baseRateText">
                  <span>{{ props.row.baseRateText }}</span>
                </el-form-item>
                <el-form-item label="extAmountHighStr">
                  <span>{{ props.row.extAmountHighStr }}</span>
                </el-form-item>
                <el-form-item label="proportion">
                  <span>{{ props.row.proportion }}</span>
                </el-form-item>
                <el-form-item label="createTimeText">
                  <span>{{ props.row.createTimeText }}</span>
                </el-form-item>
                <el-form-item label="yearRateText">
                  <span>{{ props.row.yearRateText }}</span>
                </el-form-item>
                <el-form-item label="interestType">
                  <span>{{ props.row.interestType }}</span>
                </el-form-item>
                <el-form-item label="amountStr">
                  <span>{{ props.row.amountStr }}</span>
                </el-form-item>
                <el-form-item label="extAmountStr">
                  <span>{{ props.row.extAmountStr }}</span>
                </el-form-item>
                <el-form-item label="lastAmountStr">
                  <span>{{ props.row.lastAmountStr }}</span>
                </el-form-item>
                <el-form-item label="minAmountStr">
                  <span>{{ props.row.minAmountStr }}</span>
                </el-form-item>
                <el-form-item label="maxAmountStr">
                  <span>{{ props.row.maxAmountStr }}</span>
                </el-form-item>
                <el-form-item label="yearRateStr">
                  <span>{{ props.row.yearRateStr }}</span>
                </el-form-item>
                <el-form-item label="yearRateLowText">
                  <span>{{ props.row.yearRateLowText }}</span>
                </el-form-item>
                <el-form-item label="yearRateHighText">
                  <span>{{ props.row.yearRateHighText }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column type="selection" width="55" fixed></el-table-column>
          <el-table-column label="项目 ID" prop="id"></el-table-column>
          <el-table-column label="产品名称" prop="productBidName"></el-table-column>
          <el-table-column label="状态" prop="statusText"></el-table-column>
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
      // rows.splice(index, 1);
      console.log(this.tableData[index].id)

    }
  },
  async created() {
    let { data } = await this.$axios.get("/project");
    console.log(data);
    let arr = data.data;
    this.tableData = arr.filter(item => item.signName == "定信宝系列");
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

