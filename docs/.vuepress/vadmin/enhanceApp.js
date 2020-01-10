import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css';
import VueCookies from 'vue-cookies'
import Vadmin from "./install";

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    Vue.use(VueCookies);
    Vue.use(Vuetify);
    Vue.use(Vadmin, {
        router: router,
        siteData: siteData
    });
    options.vuetify = new Vuetify({
        icons: {
            iconfont: 'mdi', // default - only for display purposes
        },
    })
    // ...做一些其他的应用级别的优化
};