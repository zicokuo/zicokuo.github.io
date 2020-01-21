<template>
  <v-navigation-drawer
    class="nav-drawer"
    permanent
    fixed
    app
    height='640'
    :light="$themeConfig.darkMode===false"
  >
    <v-list dense>
      <v-list-item>
        Blog
      </v-list-item>
      <v-list-item
        color="blue"
        v-for="item in navs"
        :key="item.text"
        :href="item.link || '#'"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-dashboard", href: "/" },
        { title: "Sets", icon: "mdi-question_answer", href: "/Sets/" }
      ]
    };
  },
  props: {
    position: null
  },
  computed: {
    navs: {
      get() {
        return this.$themeConfig.nav;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.nav {
  height: 400px;
  width: 256px;

  &-drawer {
    height: 640px;
    position: fixed;
    margin-top: 220px;
  }

  & .active {
    background;
  }
}
</style>