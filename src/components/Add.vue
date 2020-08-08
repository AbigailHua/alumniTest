<template>
  <div class="add-view">
    <div class="return-button">
      <el-button type="primary" icon="el-icon-arrow-left" @click="back">返回搜索页面</el-button>
    </div>

    <el-card class="add-card">
      <div class="add-form">
      <el-form ref="form" :model="form" label-width="80px" label-position="right">
        <el-divider content-position="left">基本信息</el-divider><br>
        <el-row :gutter="100">
          <el-col :span="8">
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄">
              <el-input v-model="form.age"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-radio-group v-model="form.gender">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="12">
            <el-form-item label="电话">
              <el-input v-model="form.telephone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <br><el-divider content-position="left">学历信息</el-divider><br>
        <el-row :gutter="50">
          <el-col :span="6">
            <el-form-item label="毕业年份">
              <el-date-picker
                v-model="form.graduate_year"
                type="year"
                placeholder="选择年">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="18">
            <el-form-item label="学位类型">
              <el-radio-group v-model="form.type">
                <el-radio label="学硕"></el-radio>
                <el-radio label="专硕"></el-radio>
                <el-radio label="硕士"></el-radio>
                <el-radio label="学博"></el-radio>
                <el-radio label="专博"></el-radio>
                <el-radio label="博士"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="12">
            <el-form-item label="本科学校">
              <el-input v-model="form.bachelor_school"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="本科专业">
              <el-input v-model="form.bachelor_major"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="12">
            <el-form-item label="硕士学校">
              <el-input v-model="form.master_school"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="硕士专业">
              <el-input v-model="form.master_major"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="12">
            <el-form-item label="博士学校">
              <el-input v-model="form.doctor_school"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="博士专业">
              <el-input v-model="form.doctor_major"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <br><el-divider content-position="left">工作信息</el-divider><br>
        <el-row :gutter="50">
          <el-col :span="12">
            <el-form-item label="工作单位">
              <el-input v-model="form.employer"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单位性质">
              <el-input v-model="form.employer_type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="简介">
            <el-input type="textarea" v-model="form.information"></el-input>
          </el-form-item>
        </el-row>

        <br><el-divider content-position="left">课程相关</el-divider><br>
        <el-row :gutter="50">
          <el-col :span="12">
            <el-form-item label="标签">
              <el-input v-model="form.tag"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="课程">
              <el-input v-model="form.class"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <br><br>
        <el-row>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-row>
      </el-form>
      </div>
    </el-card>
  </div>
</template>


<style>
  .return-button {
    margin-left: 50px;
    text-align: left;
  }
  .add-form {
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 0px;
    text-align: center;
  }
  .add-card {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 120px;
    margin-right: 120px;
    width: 1000px;
  }
</style>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        gender: "",
        age: "",
        telephone: "",
        email: "",
        type: "",
        graduate_year: "",
        bachelor_school: "",
        bachelor_major: "",
        master_school: "",
        master_major: "",
        doctor_school: "",
        doctor_major: "",
        information: "",
        employer: "",
        employer_type: "",
        tag:"",
        class:""
      }
    }
  },
  methods:{
    back(){
      this.$router.push('/Search')
    },
    onSubmit() {
      alert("已成功添加！");
      this.$router.push('/Search')
    },
    reload(){
      location.reload()
    }
  }
}
</script>