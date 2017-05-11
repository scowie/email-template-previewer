// 3rd party libraries
import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* App component */
import App from './components/App.vue'

const router = new VueRouter({
  base: '/dist/app',
  routes: [
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(['./components/Home.vue'], resolve)
      }
    },
    { path: '*', redirect: { name: 'home' } }

  ]
  
})

document.addEventListener('DOMContentLoaded', function(){ 
    new Vue({
      // Attach the Vue instance to the window,
      // so it's available globally.
      created: function () {
        window.Vue = this
      },
      router,
      render: h => h(App)
    }).$mount('#app')
});






