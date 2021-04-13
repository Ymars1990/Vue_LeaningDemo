<template>
  <div>
    <h1>ElDemo</h1>

    <el-container>
      <el-header>我是头部2</el-header>
      <el-container>
        <el-aside> 功能栏 </el-aside>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column label="详情">
              <template slot-scope="scope">
                <el-link type="primary">{{ scope.row.detail }}</el-link>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  @click.native.prevent="editRow(scope.$index, scope.row)"
                  icon="el-icon-edit"
                  circle
                >
                </el-button></template
            ></el-table-column>
            <el-table-column label="开关"
              ><template slot-scope="scope">
                <el-radio-group
                  v-model="scope.row.radio"
                  @change="switchRow(scope.$index, scope.row)"
                >
                  <el-radio :label="false">关</el-radio>
                  <el-radio :label="true">开</el-radio>
                </el-radio-group>
              </template>
            </el-table-column>
            <el-table-column label="附加">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.checked1">备注1</el-checkbox>
                <el-checkbox v-model="scope.row.checked2">备注2</el-checkbox>
                <el-autocomplete
                  class="inline-input"
                  v-model="scope.row.state1"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入您要搜索的数据"
                  @select="handleSelect"
                ></el-autocomplete>
              </template>
            </el-table-column>
            <el-table-column label="数量">
              <template slot-scope="scope">
                <el-input-number
                  :max="100"
                  :min="1"
                  size="small"
                  v-model="scope.row.num"
                ></el-input-number>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import BaseVue from "./Base.vue";
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      detail: "查看",
      radio: false,
      checked1: true,
      checked2: false,
      state1: "",
      restaurants: [],
      num: 1,
    };
    return {
      tableData: Array(20)
        .fill(item)
        .map((item) => ({
          ...item,
        })),
      components_name: "ElDemo",
    };
  },
  methods: {
    editRow(index, data) {
      console.log("正在编辑:" + index);
      for (var i = 0; i < this.tableData.length; i++) {
        if (i == index) {
          this.tableData[index].name = "Mars" + i;
          this.$set(this.tableData, index, data);
          break;
        }
      }

      console.log(data);
    },
    switchRow(index, data) {
      console.log("正在修改:" + index);
      console.log(data.radio);
      this.tableData.map((item, index) => {
        console.log(index, item.radio);
      });
      // this.$set(this.tableData, index, data);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号",
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号",
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F",
        },
      ];
    },
  },
  updated() {
    console.log(this.tableData);
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    tableData: function (newQuestion, oldQuestion) {
      console.log("数据已被修改:" + newQuestion);
      console.log("数据已被修改:" + oldQuestion);
    },
  },
  extends: BaseVue,
};
</script>

<style>
.el-header {
  background-color: #3082ec;
  color: #ffffff;
  text-align: center;
  line-height: 100px;
}
.el-aside {
  background-color: #23eb3e;
  text-align: center;
  color: #ffffff;
}
.el-main {
  background-color: #7d63a7;
  text-align: center;
  color: #ffffff;
}
</style>