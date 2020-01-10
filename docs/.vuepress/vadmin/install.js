// vadmin pure js admin backend
import vadminRouter from './router/index';

export default {
    install(Vue, options = {}) {

        //  注册admin路由
        options.router.addRoutes(vadminRouter);

        //  增加一个nav导航
        options.siteData.themeConfig.nav.push({
            text: "Admin",
            link: "/vadmin/"
        }, )

        //  登录拦截
        options.router.beforeEach((to, from, next) => {
            console.debug(`当前路由:${to.path}`);
            let authToken = Vue.$cookies.get('vadmin_auth_token') || false;
            console.log(`当前用户登录token${authToken}`);

            //  登录检查只对vadmin级别url生效
            if (new RegExp('^/vadmin').test(to.path)) {
                if (authToken) {
                    //  已经登录
                    next()
                } else if (new RegExp('^/vadmin/(?!login)').test(to.path) && (authToken === false)) {
                    //  需要登录
                    next('/vadmin/login');
                } else {
                    next();
                }
            }
            next();
        })
    }
}