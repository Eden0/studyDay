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
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
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
      src:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  computed: {
    str: function() {
      return this.$store.state.msg;
    }
  },
  created() {
  },
  methods: {
    async getGoodList() {
      const res = await this.$axios.get('/api/goodlist')
    },
    onSubmit() {
        console.log('submit!');
      }
  }
}
</script>

<style lang="less" scoped>
.topBox{
  height: 100%;
  background-image: linear-gradient(to right , #7A88FF, #7AFFAF);
  position: relative;
  .formbox{
    padding: 20px;
    width: 40%;
    height: 45%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(255, 255, 255, .8);
    border-radius: 10px;
    // box-shadow: #f1f1f1 4px 4px 4px 4px;÷
  }
}
</style>