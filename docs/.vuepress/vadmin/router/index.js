import Vue from 'vue';
import VueRouter from 'vue-router';
import Vadmin from '../layout/vadmin';

Vue.use(VueRouter);

export default [
    //  后台首页
    {path: '/vadmin/', component: () => import('../layout/vadmin')},
    {path: '/vadmin/login', component: () => import('../pages/login')}
]
