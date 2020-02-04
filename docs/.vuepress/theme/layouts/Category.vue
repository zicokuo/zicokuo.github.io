<template>
  <BaseLayout>
    <template v-slot:renderer>
      <v-card
        flat
        v-for="(postGroup, postGroupIndex) in postsList"
        :key="postGroupIndex"
        v-if="postGroup.length > 0"
        class="category-tagGroup-box"
      >
        <v-card-title class="headline">
          <v-row>
            <v-col>
              <v-chip
                label
                outlined
              >
                {{ postGroupIndex }}
              </v-chip>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-list-item
            v-for="(catePost, index) in postGroup"
            :key="index"
            :to="catePost.path"
          >
            <v-list-item-content>
              <v-list-item-title class="post-link">
                <router-link :to="catePost.path">{{
                  catePost.title
                }}</router-link>
              </v-list-item-title>
              <v-list-item-subtitle v-if="catePost.frontmatter.metaTitle">
                {{ catePost.frontmatter.metaTitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="catePost.frontmatter.createAt"></v-list-item-action-text>
              <template v-if="catePost.frontmatter.tags">
                <PostTags :tags="catePost.frontmatter.tags ?catePost.frontmatter.tags.split(','):''"></PostTags>
              </template>
            </v-list-item-action>
          </v-list-item>
          <v-row>
            <v-col></v-col>
            <v-col cols="auto">
              posts. {{ postGroup.length }} / {{ postGroup.length }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </template>
  </BaseLayout>
</template>
<script>
export default {
  name: "category",
  components: {
    BaseLayout: () => import("@theme/layouts/BaseLayout.vue")
  },
  computed: {
    postsList: {
      get() {
        let posts = this.$pagination.pages;
        let postsList = { default: [] };
        posts.forEach((v, i, a) => {
          console.log(v);
          if (v.frontmatter.category) {
            if (!Array.isArray(postsList[v.frontmatter.category])) {
              postsList[v.frontmatter.category] = [];
            }
            postsList[v.frontmatter.category].push(v);
          } else {
            postsList["default"].push(v);
          }
        });

        return postsList;
      }
    }
  }
};
</script>
<style lang="stylus" scope>
.category {
  &-tagGroup {
    &-box {
      margin-bottom: 24px;
    }
  }
}
</style>
