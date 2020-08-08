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
          value: '课程',
          label: 'class'
        },
        {
          value: '姓名',
          label: 'name'
        },
        {
          value: '学位',
          label: 'type'
        },
        {
          value: '本科学校',
          label: 'bachelor_school'
        },
        {
          value: '本科专业',
          label: 'bachelor_major'
        },
        {
          value: '硕士学校',
          label: 'master_school'
        },
        {
          value: '硕士专业',
          label: 'master_major'
        },
        {
          value: '单位性质',
          label: 'employer_type'
        },
        {
          value: '导师',
          label: 'mentor'
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