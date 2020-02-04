<template>
  <BaseLayout>
    <template v-slot:renderer>
      <v-container class="main">
        <v-row>
          <v-col>
            <Page />
          </v-col>
        </v-row>
      </v-container>
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
  max-width: 960px;
  margin: auto;
}
</style>
