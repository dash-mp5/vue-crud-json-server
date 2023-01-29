import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
      { 
        path: '/', 
        name:"login",
        component: LoginPage 
      },
      {
        path : "/home",
        name: "home",
        component : HomePage,
        meta:{
          authRequired : true
        }
      }
    ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.authRequired && !token) {
    return next({ name: "login" });
  }

  if(!to.meta.authRequired && token){
    return next({ name: "home" });
  }
  next();
});

export default router;