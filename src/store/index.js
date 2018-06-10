import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import HeadStore from './HeadStore';
import MenuStore from './MenuStore';
export default new Vuex.Store({
  /**
   * // store数据存放在这里
   * */
  state: {
    slogan: '叩首为梦 码梦为生！',
    historyLength: 0
  },
  modules: {
    HeadStore,
	MenuStore
  }
})