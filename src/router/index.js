import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Test from '@/components/Test';
import Point from '@/components/point';
import Select from '@/components/select';
import Author from '@/components/author';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'select',
      component: Select
    },
    {
      path: '/point',
      name: 'Point',
      component: Point
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
