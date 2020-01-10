<template>
  <div class="overflow-hidden">
    <TopNavBar />
    <v-sheet
      id='main'
      style="height=600px"
    >
      <v-row>
        <v-col>
          <SideBar />
        </v-col>
        <v-col>
          <Page />
        </v-col>
      </v-row>
    </v-sheet>
  </div>

</template>
<script>
export default {
  components: { Page: () => import("./Page") }
};
</script>
<style lang="stylus" scoped>
.overflow-hidden {
  height: 100vh;
  overflow: auto;
}
</style>
