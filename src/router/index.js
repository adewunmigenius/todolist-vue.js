import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import crtodo from '@/components/crtodo'
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: crtodo
    }
  ]
})
