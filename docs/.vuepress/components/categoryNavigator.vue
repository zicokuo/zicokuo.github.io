<template>
  <div>
    <p>This Category has {{ $categoryRouter.length - 1 }} Posts</p>
    <div v-for="(route, index) in $categoryRouter" :key="index">
      <router-link :to="route.path" v-if="route.title">
        No.{{ index + 1 }} - {{ route.title }}
      </router-link>
    </div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">内容1</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容2</van-collapse-item>
      <van-collapse-item title="标题3" name="3" disabled
        >内容3</van-collapse-item
      >
    </van-collapse>
    <van-switch v-model="checked" />
  </div>
</template>

<script>
export default {
  name: "categoryNavigator",
  data() {
    return {
      activeNames: [1],
      checked: true
    };
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

<style></style>
