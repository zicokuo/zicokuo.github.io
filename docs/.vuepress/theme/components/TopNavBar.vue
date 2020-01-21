<template>
  <v-app-bar
    fixed
    elevate-on-scroll
    fade-img-on-scroll
    :scroll-target='tag'
    color="#43a047"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    shrink-on-scroll
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>{{$site.title}}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "TopNavBar",
  data: () => ({
    collapseOnScroll: true
  }),
  props: {
    tag: null
  }
};
</script>
