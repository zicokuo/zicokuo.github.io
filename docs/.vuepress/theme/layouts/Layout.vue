<template>
  <BaseLayout>
    <template v-slot:renderer>
      <Page />
    </template>
  </BaseLayout>
</template>
<script>
export default {
  components: {
    BaseLayout: () => import("@theme/layouts/BaseLayout.vue"),
    Page: () => import("@theme/layouts/Page.vue")
  }
};
</script>
<style lang="stylus">
.main {
  margin-top: 120px;
}
</style>
