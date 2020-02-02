    import SideBar from './SideBar.vue'
    import TopNavBar from './TopNavBar.vue'
    import Crumb from './Crumb.vue'
    import PostTags from './PostTags.vue';

    const components = [SideBar, TopNavBar, Crumb, PostTags]

    const install = Vue => {
        components.forEach(comp => {
            Vue.component(comp.name, comp)
        })
    }

    export default {
        install
    }