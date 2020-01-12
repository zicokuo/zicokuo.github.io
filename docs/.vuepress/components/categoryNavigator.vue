<template>
  <div>
    <p>This Category has {{ $categoryRouter.length - 1 }} Posts</p>
    <div
      v-for="(route, index) in $categoryRouter"
      :key="index"
    >
      <router-link
        :to="route.path"
        v-if="route.title"
      >
        No.{{ index + 1 }} - {{ route.title }}
      </router-link>
    </div>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card
      class="pa-12"
      color="indigo darken-2"
      flat
    >
      <v-card
        elevation="12"
        width="256"
      >
        <v-navigation-drawer
          floating
          permanent
        >
          <v-list
            dense
            rounded
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "categoryNavigator",
  data() {
    return {
      activeNames: [1],
      checked: true,
      dialog: false,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "About", icon: "mdi-account" }
      ]
    };
  },
  computed: {
    $categoryRouter: {
      get() {
        let catePath = this.$page.path.split("/")[1];
        return this.$site.pages.filter(p => {
          return new RegExp(`^\/${catePath}`, "is").test(p.path) && p.title;
        });
      }
    }
  }
};
</script>

<style></style>
