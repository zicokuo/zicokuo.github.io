import Vue from 'vue';
import VueRouter from 'vue-router';
import VadminLayout from '../layout/vadmin';

Vue.use(VueRouter);

export default [
    //  后台首页
    { path: '/vadmin', component: () => import('../pages/dashboard') },
    { path: '/vadmin/login', component: () => import('../pages/login') }
]
