<template>
  <v-navigation-drawer
    class="nav-drawer"
    permanent
    right
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          {{ $site.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{$site.description}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <SearchBox />
    </v-list-item>
    <v-list>
      <v-list-item-group v-model="curPage">

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
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import SearchBox from "@SearchBox";

export default {
  name: "SideBar",
  components: { SearchBox },
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
    },
    curPage: {
      get() {
        return this.navs
          .map((nav, key) => {
            return new RegExp(`${nav.link}`).test(
              `${this.$page.regularPath || this.$page.path}`
            );
          })
          .reduce((preVal, curVal, curIndex) => {
            console.log(preVal, curVal, curIndex);
            if (curVal && curIndex) {
              return curIndex;
            } else {
              return preVal;
            }
          });
      },
      set() {
        return;
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
  }

  & .active {
  }
}
</style>