const config = {
    title: 'Zico.kuo',
    description: 'a blog for github pages by VuePress',themeConfig : {
        nav : [ // 添加导航栏
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
        sidebarDepth: 2
    }
}

module.exports = config;