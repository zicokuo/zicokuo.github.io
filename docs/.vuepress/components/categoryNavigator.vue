<template>
  <div>
    <p>This Category has {{ $categoryRouter.length-1}} Posts</p>
    
    
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
          return new RegExp(`^\/${catePath}`, "is").test(p.path);
        });
      }
    }
  }
};
</script>

<style>
</style>