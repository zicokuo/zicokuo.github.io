<template>
  <div flex>
    <v-row algin="center">
      <v-col>
        <v-breadcrumbs
          :items="items"
          divider=">"
        >
        </v-breadcrumbs>
      </v-col>
      <v-col cols="auto">
        <v-btn
          @click="prevNav"
          right
        >back</v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>
<script>
export default {
  name: "Crumb",
  computed: {
    items: {
      get() {
        return this.$page.regularPath
          .split("/")
          .map((v, k) => {
            if (v.length > 0) {
              return {
                text: decodeURI(v.replace(/\..*?$/g, "")),
                href: this.$page.regularPath
                  .split("/")
                  .slice(0, k + 1)
                  .join("/")
              };
            } else {
              return false;
            }
          })
          .filter(k => k !== false);
      }
    }
  },
  methods: {
    prevNav: function() {
      this.$router.back(-1);
    }
  }
};
</script>
