<template>
  <section class="menus">
    <p class="user" title="">{{userName}}</p>
    <ul class="aside">
      <li v-for='(m, index) in menus' :key='index'><a href="">{{m.text}}</a></li>
    </ul>
  </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      userName: state => state.MenuStore.userName,
      menus: state => state.MenuStore.menus
    })
  }
}
</script>
<style lang="stylus">
  .menus {
    position: fixed;
    top: 0;
    right: 0;
    color: #fff;
    width: 120px;
    height: 100%;
    background: #3C3C3D;
    z-index: 9;
    .user {
      height: 60px;
      line-height: 60px;
      background: #000;
      white-space: nowrap;
      text-align: center;
      width: 60%;
      padding: 0 20%;
      overflow: hidden;
      // 隐藏部分用三点显示
      text-overflow: ellipsis;
    }
    .aside li{
      height: 40px;
      width: 60%;
      padding: 0 20%;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      a{
        height: 100%;
        color: #FFFFFF;
        line-height: 40px;
        display: inline-block;
      }
    }
    .aside li:hover{
      background-color: #3E90E3;
    }
  }
</style>


