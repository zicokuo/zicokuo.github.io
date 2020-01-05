// const webpackVuetify  = require('./config/webpackForVuetify')

const config = {
  title: "Zico.kuo",
  description: "a blog for github pages by VuePress",
  lastUpdated: true, // 最后更新时间
  displayAllHeaders: true, // 默认值：false
  // selectText: '选择语言',
  editLinkText: "编辑此页",
  postcss: [require('autoprefixer')],
  sass:{indentedSyntax:true},
  // ...webpackVuetify,
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/plugin-nprogress",
    "@vuepress/plugin-register-components",
    "@vuepress/plugin-back-to-top",
    "vuepress-plugin-baidu-autopush",
    "vuepress-plugin-social-share",
    "vuepress-plugin-alias",
    [
      "@vuepress/blog",
      {
        directories: [
          {
            // Unique ID of current classification
            id: "post",
            // Target directory
            dirname: "post",
            // Path of the `entry page` (or `list page`)
            path: "/",
            layout: "/post/theme/Layout",
            itemLayout: "MyPost",
            sitemap: {
              hostname: "https://zicokuo.github.io"
            }
          }
        ]
      }
    ]
  ],

  markdown: {
    anchor: {
      // permalink: true,
      // permalinkBefore: true,
      permalinkSymbol: "#"
    },
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3] }
  },

  themeConfig: {
    nav: [
      // 添加导航栏

      { text: "Home", link: "/" },
      { text: "Sets", link: "/sets/" },
      { text: "Post", link: "/post/" },
      { text: "About", link: "/about/" },
      {
        text: "Languages",
        items: [
          { text: "Chinese", link: "/language/chinese/" },
          { text: "Japanese", link: "/language/japanese/" }
        ]
      }
    ],
    // 添加侧边栏
    sidebar: "auto",
    sidebarDepth: 3
  }
};

module.exports = config;
