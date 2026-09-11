# MetaUSI 个人博客

面向中文阅读的静态个人博客。保留原站 MetaUSI / Manuel、上海和联系邮箱，继续使用 HTML、CSS、JavaScript，无构建依赖。

## 页面

- index.html：首页、选读、最近文章
- archive.html：文章归档
- about.html：作者介绍和联系
- posts/：三篇有完整正文的示例文章，页面均明确标注为演示内容
- 404.html：缺失页面

## 本地预览

在本站目录运行：

```bash
python -m http.server 5173
```

打开 http://localhost:5173。网站需要通过 HTTP 预览，根路径链接不适合双击 HTML。

## 发布

原仓库 gates0426/metausi.com 中的网站目录仍为 metausi.com/。沿用 Vercel 静态站设置：Root Directory 设为 metausi.com，Framework Preset 为 Other，Build Command 留空，Output Directory 为 .。保留现有自定义域名 www.metausi.com 配置。

本次改版不修改 DNS、不合并主分支、不切换线上网站。正式上线前请将三篇示例内容替换为作者文章，并核对关于页。

## 写新文章

1. 复制 posts/ 下的一篇 HTML，用稳定的英文文件名命名。
2. 更新标题、description、canonical、OG/Twitter 文案、日期、分类、目录锚点和正文，去掉示例标记。
3. 在首页和 archive.html 添加文章链接，在 sitemap.xml 添加正式 URL。
4. 更新上一篇/下一篇链接。

所有文章正文在 HTML 内，禁用 JavaScript 仍可阅读和导航。目录高亮只做渐进增强。

## 资源

assets/editorial.png 为本次生成的 AI 概念静物，用作设计文章配图；未将其当作作者实际作品。assets/og.png 与对应社交图片地址沿用原站资源。图标使用自有字母标记。无第三方字体、追踪器、订阅服务或运行时依赖。

资源缓存采用重新验证，避免覆盖同名 CSS/JS 后仍显示旧版。
