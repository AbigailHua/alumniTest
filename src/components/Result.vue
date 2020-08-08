<template>
  <div class="result-cardview">
    <div class="return-button">
      <el-button type="primary" icon="el-icon-arrow-left" @click="back">返回搜索页面</el-button>
    </div>
    <div class="iterate">
    <el-row :gutter="0">
      <!-- 左列卡片 -->
      <el-col :span="12">
        <el-card class="box-card" v-for="(item, idx) in evenFilter(AlumniInfo)">
          <!-- 卡片标题：校友名字 -->
          <div slot="header" class="clearfix">
            <div style="text-align: left; float: left; font-weight: 700; letter-spacing: 3px;">{{ item.name }}</div>
            
            <div style="text-align: right; float: right">
              <el-button class="modify" icon="el-icon-edit" v-if="isAdministrator" style="float: right; padding: 5px" @click="edit"></el-button>
            </div>

            <el-popconfirm
              confirmButtonText='是的'
              cancelButtonText='再想想'
              icon="el-icon-info"
              iconColor="red"
              title="确定删除吗？"
            >
              <el-button slot="reference" icon="el-icon-minus" v-if="isAdministrator" style="float: right; padding: 5px" class="modify"></el-button>
            </el-popconfirm>

            <div style="text-align: right; float: right">
              <el-button class="modify" icon="el-icon-plus" v-if="isAdministrator" style="float: right; padding: 5px" @click="add"></el-button>
            </div>
          </div>

          <!-- 卡片内容：校友信息 -->
          <div v-for="(value, key) in item" class="text item">
            <div class="detail" v-if="key!='id' && key!='name'">{{dict[key] + ": " +value}}</div>
          </div>
          <br>
        </el-card>
      </el-col>

      <!-- 左列卡片 -->
      <el-col :span="12">
        <el-card class="box-card" v-for="(item, idx) in oddFilter(AlumniInfo)">
         <!-- 卡片标题：校友名字 -->
          <div slot="header" class="clearfix">
            <div style="text-align: left; float: left; font-weight: 700; letter-spacing: 3px;">{{ item.name }}</div>
            
            <div style="text-align: right; float: right">
              <el-button class="modify" icon="el-icon-edit" v-if="isAdministrator" style="float: right; padding: 5px" @click="edit"></el-button>
            </div>

            <el-popconfirm
              confirmButtonText='是的'
              cancelButtonText='再想想'
              icon="el-icon-info"
              iconColor="red"
              title="确定删除吗？"
            >
              <el-button slot="reference" icon="el-icon-minus" v-if="isAdministrator" style="float: right; padding: 5px" class="modify"></el-button>
            </el-popconfirm>

            <div style="text-align: right; float: right">
              <el-button class="modify" icon="el-icon-plus" v-if="isAdministrator" style="float: right; padding: 5px" @click="add"></el-button>
            </div>
          </div>

          <!-- 卡片内容：校友信息 -->
          <div v-for="(value, key) in item" class="text item">
            <div class="detail" v-if="key!='id' && key!='name'">{{dict[key] + ": " +value}}</div>
          </div>
          <br>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div class="return-button">
      <el-button type="primary" icon="el-icon-arrow-left" @click="back">返回搜索页面</el-button>
  </div>
  </div>
</template>

<style>
  .return-button {
    margin-left: 50px;
    text-align: left;
  }
  .result-cardview {
    margin-top: 50px;
    margin-bottom: 50px;
    font-family: Microsoft YaHei;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix {
    margin-left: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
    width: 500px;
  }

  .detail {
    text-align: left;
    margin-left: 30px;
    letter-spacing: 1px;
  }

  .modify {
    border: 0px;
  }

  a:link{color:#409EFF;}

  a:visited{color:#409EFF;}
</style>

<script>

export default {
  data() {
    return {
      AlumniInfo: [
        { id: 1, name: "刘一", age: "45", mentor: "A"},
        { id: 2, name: "陈二", age: "29", mentor: "B"},
        { id: 3, name: "张三", age: "24", mentor: "C"},
        { id: 4, name: "李四", age: "84", mentor: "D"},
        { id: 5, name: "王五", age: "36", mentor: "E"},
        { id: 6, name: "赵六", age: "58", mentor: "F"}
      ],
      dict: {
        name: "姓名",
        age: "年龄",
        mentor: "导师"
      },
      isAdministrator: 1
    }
  },
  methods: {
    evenFilter: function(AlumniInfo) {
      return AlumniInfo.filter(function (item, idx) {
        return idx % 2 === 0
      })
    },
    oddFilter: function(AlumniInfo) {
      return AlumniInfo.filter(function (item, idx) {
        return idx % 2 === 1
      })
    },
    back(){
      this.$router.push('/Search')
    },
    edit(){
      this.$router.push('/Edit')
    },
    add(){
      this.$router.push('/Add')
    }
  }
}
</script>

