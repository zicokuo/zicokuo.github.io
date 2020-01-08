    import SideBar from './SideBar.vue'
    import TopNavBar from './TopNavBar.vue'

    const components = [SideBar, TopNavBar]




    const install = Vue => {
        components.forEach(comp => {
            Vue.component(comp.name, comp)
        })
    }

    export default {
        install
    }