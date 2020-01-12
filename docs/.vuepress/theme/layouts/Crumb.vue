<template>
  <div>
    <v-breadcrumbs
      :items="items"
      divider=">"
    ></v-breadcrumbs>
  </div>
</template>
<script>
export default {
  name: "Crumb",
  computed: {
    items: {
      get() {
        return this.$page.path.split("/").map(k => {
          return {
            text: k
          };
        });
      }
    }
  }
};
</script>