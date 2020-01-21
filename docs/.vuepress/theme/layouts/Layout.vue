<template>
  <div flex>
    <SideBar position='left' />
    <TopNavBar tag="#main" />
    <v-sheet id='main'>

      <v-container style="margin:auto;max-width:960px">
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
    // TopNav:()=>import("@theme/components/TopNavBar")
  }
};
</script>

