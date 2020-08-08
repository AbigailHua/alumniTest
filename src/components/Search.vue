<template>
  <div style="margin-top: 170px">
    <div class="search-title">SJTU Alumni</div>
    <el-input placeholder="请输入内容" v-model="search_input" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option v-for="item in search_options" :key="item.value" :label="item.label" :value="item.value"/>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>
  </div>
</template>


<style>
  .search-title {
    margin-bottom: 40px;
    font-size: 50px;
    line-height: 1;
    font-family: "Helvetica Neue";
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select {
    width: 500px;
    background-color: #fff;
  }
  .el-input-group__prepend {
    width: 50px;
    background-color: #fff;
  }
</style>

<script>
export default {
  data() {
    return {
      search_options : [
        {
          value: 'class',
          label: '课程'
        },
        {
          value: 'name',
          label: '姓名'
        },
        {
          value: 'type',
          label: '学位'
        },
        {
          value: 'bachelor_school',
          label: '本科学校'
        },
        {
          value: 'bachelor_major',
          label: '本科专业'
        },
        {
          value: 'master_school',
          label: '硕士学校'
        },
        {
          value: 'master_major',
          label: '硕士专业'
        },
        {
          value: 'employer_type',
          label: '单位性质'
        },
        {
          value: 'mentor',
          label: '导师'
        }
      ],
      search_input: '',
      select: ''
    }
  },
  methods:{
    search(){
      this.$router.push('/Result')
    }
  }
}
</script>