import { createApp } from 'vue'
import App from './App.vue'

import {createStore} from 'vuex'
import experiences_module from './store/module/experiences-module.js'

import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue'
import FormPage from './components/FormPage.vue'

const store = createStore({
    modules : {
        experiences_module : experiences_module
    }
})

const routes = [
    {
        path : '/',
        component : HomePage,
        beforeEnter: async (to, fromn, next) => {
            try{
                await store.dispatch('collectExperieneces')
                //console.log('store.modules.state.experiences', store.modules.state.experiences)
            }catch(error){
                console.log(error)
            }
            next()
        }
    },
    {
        path: '/experience/:id',
        name: 'experience',
        component: FormPage,
        beforeEnter: async (to) => {
            try{
                await store.dispatch('collectExperienceById', to.params.id)
            }catch(error){
                console.log(error)
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app= createApp(App)

app.use(store)
app.use(router)
app.mount('#app')

//createApp(App).mount('#app')
