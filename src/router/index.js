import { createRouter, createWebHistory } from 'vue-router';
import Home from './../views/Home.vue';
// import About from './../components/Homies/About/About.vue';
// import Landing from './../components/Homies/Landing/Landing.vue';
// import BasicUpdate from './../components/Homies/Auth/BasicUpdate.vue';
import NotFound from './../components/Homies/NotFound/NotFound.vue';

// /**  */
// import Dashboard from './../views/Dashboard.vue';
// import Posts from './../components/DashBoard/Posts/Posts.vue'
// import Projects from './../components/DashBoard/Projects/Projects.vue'
// import Profile from './../components/DashBoard/Profile/Profile.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },  
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
  //   path: '/:student',
  //   name: 'Dashboard',
  //   component: Dashboard,
  //   children: [
  //     {
  //       path: '',
  //       name: 'Landing',
  //       component: Landing,
  //     },
  //     {
  //       path: 'posts',
  //       name: 'Posts',
  //       component: Posts,
  //     },
  //     {
  //       path: 'profile',
  //       name: 'PRofile',
  //       component: Profile,
  //     },
  //     {
  //       path: 'projects',
  //       name: 'Projects',
  //       component: Projects,
  //     },
  //     {
  //       path: '',
  //       name: 'Landing',
  //       component: Landing,
  //     },
      

  //   ]
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
