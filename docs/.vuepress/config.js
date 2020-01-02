const config = {
    title: 'Zico.kuo',
    description: 'a blog for github pages by VuePress',

    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/plugin-nprogress',
        '@vuepress/plugin-register-components',
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-comment',
        {
          choosen: 'valine', 
          // options选项中的所有参数，会传给Valine的配置
          options: {
            el: '#valine-vuepress-comment',
            appId: 'Your own appId',
            appKey: 'Your own appKey'
          }
        }
    ],

    markdown: {
        anchor: {
            // permalink: true,
            // permalinkBefore: true,
            permalinkSymbol: '#',
        },
        lineNumbers: true,
        toc: { includeLevel: [1, 2, 3] },
    },

    themeConfig: {
        nav: [ // 添加导航栏

            { text: 'Home', link: '/' },
            { text: 'Sets', link: '/sets/' },
            { text: 'Post', link: '/post/' },
            { text: 'About', link: '/about/' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        // 添加侧边栏
        sidebar: 'auto',
        sidebarDepth: 3
    }

};

module.exports = config;