// const webpackVuetify  = require('./config/webpackForVuetify')

const config = {
  theme: "./theme",
  title: "Zico.kuo",
  description: "a blog for github pages by VuePress",
  lastUpdated: true, // 最后更新时间
  displayAllHeaders: true, // 默认值：false
  // selectText: '选择语言',
  editLinkText: "编辑此页",
  postcss: [require("autoprefixer")],
  sass: {
    indentedSyntax: true
  },
  // ...webpackVuetify,
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    //  头部导航高亮
    "@vuepress/active-header-links",
    //  页面进度条
    "@vuepress/plugin-nprogress",
    //  注册全局组件
    "@vuepress/plugin-register-components",
    //  百度SEO自动推送
    "vuepress-plugin-baidu-autopush",
    [
      '@vuepress/blog', {
        directories: [{
          // Unique ID of current classification
          id: "posts",
          // Target directory
          dirname: "posts",
          // Path of the `entry page` (or `list page`)
          path: "/posts/",
          keys: ['tag', 'category', 'tags', 'title', 'createdAt'],
          // itemPermalink: '/posts/:year/:month/:day/:slug',
          layout: "Category",
          // scopeLayout: 'Category',
          // itemLayout: "/_posts/theme/post",
          // sitemap: {
          //   hostname: "https://zicokuo.github.io"
          // }
        }]
      }
    ],

    [
      //  Vusue github 评论
      "@vssue/vuepress-plugin-vssue",
      {
        // set `platform` rather than `api`
        platform: "github-v4",

        // all other options of Vusue are allowed
        owner: "zicokuo",
        repo: "zicokuo.github.io",
        clientId: "81af7d13dd86404ee419",
        clientSecret: "19ac0f6a91528ed3ea1452d934b405595c640be7"
      }
    ],
    // require('./vadmin/index.js')
  ],

  //  markdown 编译
  markdown: {
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: "#"
    },
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3, 4, 5, 6]
    }
  },

  //  主题配置
  themeConfig: {
    nav: [
      // 添加导航栏
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Sets",
        link: "/sets/"
      },
      {
        text: "Post",
        link: "/posts/"
      },
      {
        text: "About",
        link: "/about/"
      },
      {
        text: "Languages",
        items: [{
            text: "Chinese",
            link: "/language/chinese/"
          },
          {
            text: "Japanese",
            link: "/language/japanese/"
          }
        ]
      }
    ],
    // 添加侧边栏
    sidebar: "auto",
    sidebarDepth: 3,
    darkMode: false,
  }
};

module.exports = config;