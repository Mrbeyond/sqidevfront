import { createRouter, createWebHistory } from 'vue-router';
import Home from './../views/Home.vue';
// import About from './../components/Homies/About/About.vue';
// import Landing from './../components/Homies/Landing/Landing.vue';
// import BasicUpdate from './../components/Homies/Auth/BasicUpdate.vue';
import NotFound from './../components/Homies/NotFound/NotFound.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  // {
  //   path: '',
  //   name: 'Landing',
  //   component: Landing,
  // }, 
  // {
  //   path: 'about',
  //   name: 'About',
  //   component: About,
  // },
  // {
  //   path: 'update-profile',
  //   name: 'BasciUpdate',
  //   component: BasicUpdate,
  // },
  // {
  //   path: '',
  //   name: 'Landing',
  //   component: Landing,
  // },
   

 

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },

  {
    path: '/:pathMatch(.*)', 
    name: 'NotFound', 
    component: NotFound 
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
