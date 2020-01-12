<template>

  <div>
    <v-navigation-drawer
      fixed
      dark
      floating
      permanent
      mini-variant
      expand-on-hover
    >
      <v-list
        dense
        rounded
      >
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
  </div>
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
  & .active {
    background;
  }
}
</style>