<template>
  <div>
    <TopNavBar tag="#main" />
    <SideBar position="left" />
    <v-container id="main" style="max-width:960px">
      <v-row>
        <v-col>
          <Crumb />
          <slot name="renderer">
            <p>渲染插槽</p>
          </slot>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
#main {
  margin-top: 120px;
}
</style>
