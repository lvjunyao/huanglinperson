<template>
  <div id="app">
    <!-- 导航菜单 -->
    <app-menu></app-menu>
    <div class="page">
      <!-- app头部 -->
      <app-head></app-head>
      <app-nav></app-nav>
      <!--keep-alive 切换路不会触发mounted-->
      <keep-alive><router-view class="leirong"></router-view></keep-alive>
      <app-foot></app-foot>
    </div>
  </div>
</template>

<script>
import AppHead from '@/components/public/head';
import AppFoot from '@/components/public/foot';
import AppNav from '@/components/public/nav';
import AppMenu from '@/components/public/menu';
export default {
  name: 'App',
  components: {
    'app-head': AppHead,
    'app-foot': AppFoot,
    'app-nav': AppNav,
    'app-menu': AppMenu
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
.leirong {
  background: #fff;
  min-height: 400px;
}
.page{
  position: relative;
  z-index: 99;
  transition: all 0.5s;
}
.toggle{
  transform: translateX(-120px);
}
</style>
