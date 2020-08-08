<template>
  <div>
    <div style="display: flex;justify-content: center;margin-top: 130px">
      <el-card style="width: 350px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table>
          <tr style="height:50px">
            <td>用户名</td>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr style="height:50px">
            <td>密码</td>
            <td>
              <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
            </td>
          </tr>
          <tr style="height:50px">
            <td colspan="2">
              <el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        user:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      doLogin(){
        this.$router.push('/Search')
      }
    }
  }
</script>