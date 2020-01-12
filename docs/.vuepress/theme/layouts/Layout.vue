<template>
  <div
    class="overflow-hidden"
    flex
  >
    <!-- <TopNavBar /> -->
    <v-sheet
      id='main'
      style="height=100vh"
    >
      <SideBar />
      <v-container>

        <v-row>
          <v-col>
            <Crumb />
            <Page />
          </v-col>
        </v-row>
      </v-container>

    </v-sheet>
  </div>

</template>
<script>
export default {
  components: {
    Page: () => import("@theme/layouts/Page.vue"),
    Crumb: () => import("@theme/layouts/Crumb.vue")
  }
};
</script>

