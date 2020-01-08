<template>
  <v-container fluid>
    <TopNavBar />
    <v-row>
      <v-col>
        <SideBar />
      </v-col>
      <v-col>
        <Page />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  components: { Page: () => import("./Page") }
};
</script>
