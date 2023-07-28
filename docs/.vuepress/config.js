import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SzMap 开发文档',
  description: '基于 Cesium 构建的 WebGis 开发引擎',
  theme: defaultTheme({
    navbar: [
      { text: '指南', link: '/guide/' },
      {
        text: '功能模块',
        children: [
          { text: '基础构成', link: '/base/' },
          { text: '地图地形', link: '/tile/' },
          { text: '业务图层', link: '/layer/' },
          { text: '覆盖元素', link: '/overlay/' },
          { text: '材质属性', link: '/material/' },
          { text: '效果动画', link: '/effect/' },
          { text: '实用工具', link: '/tools/' },
        ]
      },
    ]
  })
})
