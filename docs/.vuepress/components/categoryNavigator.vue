<template>
  <div>
    <p>This Category has {{ $categoryRouter.length-1}} Posts</p>

    <div
      v-for="(route,index) in $categoryRouter"
      :key="index"
    >
      <router-link
        :to="route.path"
        v-if="route.title"
      >
        No.{{index+1}} - {{route.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoryNavigator",
  data() {
    return {};
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

<style>
</style>