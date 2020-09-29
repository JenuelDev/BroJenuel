import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        redirect: {
          name: 'Introduction'
        }
      },
      {
        path: 'introduction',
        name: 'Introduction',
        component: () => import(/* webpackChunkName: "introduction" */ './../views/Home/pages/introduction/introduction.vue')
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import(/* webpackChunkName: "overview" */ './../views/Home/pages/projects/projects.vue')
      },
      {
        path: 'challenge',
        name: 'challenge',
        component: () => import(/* webpackChunkName: "portfolio" */ './../views/Home/pages/Portfolio/Portfolio.vue')
      },
      {
        path: '/blog',
        component: () => import(/* webpackChunkName: "bloghome" */ './../views/blog/BlogHome.vue'),
        children: [
          {
            path: '',
            redirect: {
              name: 'Blog'
            }
          },
          {
            path: 'home',
            name: 'Blog',
            component: () => import(/* webpackChunkName: "blogitems" */ './../views/blog/pages/BlogHome/Blog.vue')
          },
          {
            path: 'view/:id',
            name: 'viewpost',
            component: () => import(/* webpackChunkName: "viewpost" */ './../views/blog/pages/ViewPost/ViewPost.vue')
          }
        ]
      },
    ]
  },
  
  {
    path: '*',
    component: () => import(/* webpackChunkName: "notfound" */ './../components/PageNotFound/PageNotFound.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router
