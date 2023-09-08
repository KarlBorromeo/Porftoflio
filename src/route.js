import { createRouter, createWebHistory } from "vue-router";

import TheHome from './components/pages/TheHome.vue'
import TheAbout from './components/pages/TheAbout.vue'
import TheConsultation from './components/pages/TheConsultation.vue'
import TheGallery from './components/pages/TheGallery.vue'
import TheServices from './components/pages/TheServices.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect:'/home'},
        {path: '/home', component: TheHome},
        {path: '/about', component: TheAbout},
        {path: '/services', component: TheServices},
        {path: '/gallery', component: TheGallery},
        {path: '/consultation', component: TheConsultation},
    ],
    scrollBehavior(to, from, savedPosition) {
        // Scroll to the top of the page when navigating to a new route
        console.log(to,from,savedPosition)
        if(savedPosition){
            return savedPosition
        }else{
            return { left: 0, top: 0 };
        }
        
      },
})

export default router;