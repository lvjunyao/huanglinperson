<template>
  <footer class="foot">
    <img src="../../assets/head/logo.png"/>
    <div class="email">
      <p>联系我：wt_niu@163.com</p>
      <a href="https://github.com/daoket/vue.news"><p>Fork me on GitHub</p></a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'appfoot',
  data () {
    return {
      msg: '这是尾部'
    }
  }
}
</script>
<style lang="stylus">
  .foot{
    width: 100%;
    height: 100px;
    background-color: #262627;
    display: flex;
    justify-content : space-around;
    align-items: center;
    img{
      height: 20px;
    }
  }
</style>


