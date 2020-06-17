import Vue from 'vue';
import LoginComponent from './components/Login';
import AboutComponent from './components/About';
import ListComponent from './components/List';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({

    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginComponent
        },
        {
            path: '/about',
            name: 'about',
            component: AboutComponent
        },
        {
            path: '/list',
            name: 'list',
            component: ListComponent
        },

    ]
})
