import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Pay from '@/page/Pay'
import Free from '@/page/Free'
import SCourse from '@/page/SCourse'
import SComment from '@/page/SComment'
import Lesson from '@/page/Lesson'
import Lecturer from '@/page/Lecturer'
import Test from '@/page/Test'
import {moduleTitle} from '../assets/commenVariable'
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/home',
      props: {
        title: moduleTitle.home
      },
      component: Home,
    },
    {
      path: '/free',
      props: {
        title: moduleTitle.course.free
      },
      component: Free
    },
    {
      path: '/pay',
      props: {
        title: moduleTitle.course.pay
      },
      component: Pay
    },

    {
      path: '/lecturer',
      props: {
        title: moduleTitle.lecturer
      },
      component: Lecturer
    },
    {
      path: '/scourse',
      props: {
        title: moduleTitle.search.course
      },
      component: SCourse
    },
    {
      path: '/scomment',
      props: {
        title: moduleTitle.search.comment
      },
      component: SComment
    },
    {
      path: '/lesson/:id',
      props: {
        title: moduleTitle.detail
      },
      component: Lesson
    },
    {
      path: '/test',
      props: {
        title: '测试'
      },
      component: Test
    },
    {
      path: '/',
      props: {
        title: moduleTitle.home
      },
      component: Home,
    },
  ]
})
