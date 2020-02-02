import Lodash from "lodash";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css';
import VueCookies from 'vue-cookies'
import AllComponents from './components/all';


export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    Vue.use(VueCookies);
    Vue.use(Vuetify);
    Vue.use({
        install: (Vue) => {
            Vue.$_ = Lodash
        }
    });
    options.vuetify = new Vuetify({
        breakpoint: {
            scrollBarWidth: 10,
        },
        icons: {
            iconfont: 'mdi', // default - only for display purposes
        },
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00',
            },
            dark: {
                primary: '#2196F3',
                secondary: '#424242',
                accent: '#FF4081',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00',
            },
        },
    });
    Vue.use(AllComponents);
    // ...做一些其他的应用级别的优化
};