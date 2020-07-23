<template>
  <div class="topBox">
    {{ a }} {{ str }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 'xx'
    }
  },
  computed: {
    str: function() {
      console.log(this.$store);
      
      return this.$store.state.msg;
    }
  }
}
</script>

<style lang="less" scoped>
.topBox{
  height: 100%;
}
</style>