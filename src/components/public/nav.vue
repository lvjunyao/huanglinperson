<template>
  <section class="snav">
    <div class="nav" v-for="(tem,key) in menus" :key="key">
      <router-link :to="topath(tem.path)">{{tem.text}}</router-link>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      i: 0,
      // 路由参数
      menus: [{
        text: '精选',
        path: '/select'
      }, {
        text: '话题',
        path: '/point'
      }, {
        text: '作者',
        path: '/author'
      }]
    }
  },
  methods: {
    topath (path) {
      // this.i = key
      return path
    }
  }
}
</script>
<style lang="stylus">
.snav{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  .nav{
    width: 33%;
    height: 100%;
    a{
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
      align-items: center;
      text-decoration: none;
      color: #666;
      font-size: 18px;
      text-align: center;
    }

  }
  div:nth-child(2) > a{
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
  .router-link-active{
    border-bottom:1px solid red;
  }
}
</style>

