<template>
  <div>
    1
    <Vssue :title="title||'Vssue Demo'" />
    <Comment />
  </div>
</template>

<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";
export default {
  components: {
    Comment
  },
  props: {
    title: null,
    
  }
};
</script>

<style lang="stylus">
// 先设置变量
// $vssue-theme-color = red;
$vssue-font-size = 12px;

// 引入 Vssue 的样式主文件和 github-markdown-css
@import '~vssue/src/styles/index';
@import '~github-markdown-css/github-markdown.css';
</style>