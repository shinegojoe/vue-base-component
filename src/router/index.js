import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/testPage',
    name: 'TestPage',
    component: () => import('../views/TestPage.vue')

  },

  {
    path: '/i18n',
    name: 'I18n',
    component: () => import('../views/i18nPage.vue')

  },

  {
    path: '/rangeSlider',
    name: 'RangeSlider',
    component: () => import('../views/RangeSlider.vue')

  },

  {
    path: '/multiSelect',
    name: 'multiSelect',
    component: () => import('../views/MultiSelectPage.vue')
  },

  {
    path: '/page/:id',
    name: 'Page',
    component: () => import('../views/Page.vue')
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },

  {
    path: '/tabPage',
    name: 'TabPage',
    component: () => import('../views/TabPage.vue'),
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'tab1',
        component: () => import('../views/Tab1.vue')
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'tab2',
        component: () => import('../views/Tab2.vue')

      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'tab3',
        component: () => import('../views/Tab3.vue')

      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
