module.exports = {
    title: "李皮皮技术博客", // 设置网站标题
    base: "/blog/",
    description: "我的程序永远不会有bug，那些只是开发出来的随机的功能特征", //描述
    dest: "./dist", // 设置输出目录
    port: 8888, //端口
    themeConfig: {
        // 添加导航栏
        nav: [{
                text: "主页",
                link: "/",
            }, // 导航条
            {
                text: "了解更多",
                link: "/router/",
            },
            {
                text: "知识库",
                link: "/knowledge/",
            },
            {
                text: "github",
                link: "https://github.com/lgkang"
            },
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            "/router/": [{
                    title: "vue",
                    collapsable: true,
                    children: [
                        "vue/advance",
                        "vue/component",
                        {
                            title: "vue全家桶进阶使用及源码",
                            collapsable: true,
                            children: ["vue/vue-router", "vue/vuex", "vue/vue3.0"],
                        },
                        "vue/keng",
                    ],
                },
                {
                    title: "react",
                    collapsable: true,
                    children: [
                        "react/advance",
                        {
                            title: "react生态库",
                            collapsable: true,
                            children: ["react/react-router", "react/react-redux"],
                        },
                        {
                            title: "react组件",
                            collapsable: true,
                            children: [],
                        },
                        "react/keng",
                    ],
                },
                {
                    title: "react-native",
                    collapsable: true,
                    children: [
                        "react-native/advance",
                        {
                            title: "react其生态库的使用",
                            collapsable: true,
                            children: ["react-native/react-navigation"],
                        },
                        {
                            title: "react组件",
                            collapsable: true,
                            children: [],
                        },
                        "react/keng",
                    ],
                },
                {
                    title: "typeScript",
                    collapsable: true,
                    children: [
                        "ts/vue",
                        "ts/react",
                        "ts/advance",
                    ],
                },
                {
                    title: "webpack",
                    collapsable: true,
                    children: [
                        "webpack/vue-cli3",
                        "webpack/create-react-app"
                    ],
                },
                {
                    title: "自己轮子",
                    collapsable: true,
                    children: [
                        'self/verify',
                        'self/cache',
                        'self/vuex-keep-data'
                    ],
                },
                {
                    title: "优秀轮子进阶",
                    collapsable: true,
                    children: [
                        'other/mock',
                        'other/axios',
                    ],
                },
                'myComponent/ui'
            ],
            "/knowledge/": [{
                    title: "CSS知识库",
                    collapsable: false,
                    children: [],
                },
                {
                    title: "JS知识库",
                    collapsable: false,
                    children: [],
                },
                {
                    title: "node知识库",
                    collapsable: false,
                    children: [],
                },
                {
                    title: "vue知识库",
                    collapsable: false,
                    children: [],
                },
            ],
        },
    }
};