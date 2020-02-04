<template>
  <v-row
    id="baseLayout"
    no-gutters
  >
    <v-col>
      <!-- <TopNavBar tag="#main" /> -->
      <Crumb />
      <slot name="renderer">
        <p>渲染插槽</p>
      </slot>
    </v-col>
    <v-col cols="auto">
      <SideBar />
    </v-col>

  </v-row>
</template>
<script>
export default {
  name: "BaseLayout"
};
</script>
<style lang="stylus">
body, html {
  // overflow: hidden;
}

#baseLayout {
  height: 100vh;
  overflow: hidden;

  & .side {
    overflow: hidden;
    height: 100vh;
  }
}

#main {
  display: block;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
