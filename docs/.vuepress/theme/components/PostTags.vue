<template>
  <div class="postTags">
    <v-chip
      v-for="(tag, tagIndex) in tags"
      v-if="tag"
      :key="tagIndex"
      small
      light
      :color="getTagColor(tag)"
      class="postTags-item"
    >
      {{ tag.toLowerCase().trim() }}
    </v-chip>
  </div>
</template>
<script>
import tagsColors from "@theme/mixins/tagsColors";
export default {
  name: "PostTags",
  mixins: [tagsColors],
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    colors: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    getTagColor(tagName = "") {
      return this.tagsColors[tagName.toLowerCase()] || "gray";
    }
  },
  computed: {
    tagsColors: {
      get() {
        return Object.assign({}, this.defaultTagsColors, this.colors);
      }
    }
  }
};
</script>
<style lang="stylus">
.postTags{
  &-item{
    margin:2px
  }
}
</style>
