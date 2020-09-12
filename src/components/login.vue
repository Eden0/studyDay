<template>
  <div class="topBox">
    <div class="formbox">
      <el-avatar :size="100" :src="src"></el-avatar>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="clearInput">清空</el-button>
          <el-button @click="onSubmit" type="primary">登录</el-button>
          <el-button type="text">
            <router-link to="/register">
              <el-link href="javascript:;" type="primary">去注册</el-link>
            </router-link>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      src:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    };
  },
  computed: {
    str: function() {
      return this.$store.state.msg;
    }
  },
  created() {},
  methods: {
    async getGoodList() {
      const res = await this.$axios.get('/api/goodlist');
    },
    async onSubmit() {
      if (!this.form.username) {
        this.$message.warning({
          message: '用户名不能为空'
        });
      } else if (!this.form.password) {
        this.$message.warning({
          message: '密码不能为空'
        });
      } else {
        const result = await this.$axios.get('/api/login');
        const { status } = result;
        if (status === 200) {
          this.$message.success({
            message: '登录成功'
          });
          this.$router.push('/index');
        } else {
          this.$message.error({
            message: '登录失败'
          });
        }
      }
    },
    GoToRegister() {
      console.log(this.$route);
    },
    clearInput() {
      this.form.username = '';
      this.form.password = '';
    }
  }
};
</script>

<style lang="less" scoped>
.topBox {
  height: 100%;
  background-image: linear-gradient(to right, #7a88ff, #7affaf);
  position: relative;
  .formbox {
    padding: 20px;
    width: 40%;
    height: 45%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    // box-shadow: #f1f1f1 4px 4px 4px 4px;÷
  }
}
</style>
