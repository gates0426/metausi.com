# MetaUSI 个人博客

面向中文阅读的静态个人博客。保留原站 MetaUSI / Manuel、上海和联系邮箱，继续使用 HTML、CSS、JavaScript，无构建依赖。

## 页面（v2 纸上编辑部，2026-10-05）

- index.html：首页、卷首语、本期选读、文章索引、笔记速览
- archive.html：文章归档（按年份的编号索引）
- notes.html：笔记流（短内容，示例笔记标注为演示内容）
- about.html：作者介绍和联系
- posts/：三篇有完整正文的示例文章，页面均明确标注为演示内容
- 404.html：缺失页面

设计语言：暖纸底色 + 单一蓝色点缀（#244bff），标题衬线 / 正文系统黑体 / 编号日期等宽；
深色模式由 [data-theme="dark"] 驱动，head 内联脚本在首次绘制前读取 localStorage（无闪烁）；
文章页带首字下沉、阅读进度条、目录高亮。写新文章时注意同步更新 JSON-LD BlogPosting、
首页索引、归档、sitemap lastmod；笔记只写 notes.html（不进 feed.xml）。

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
2. 更新标题、description、canonical、OG/Twitter 文案、日期、分类、目录锚点和正文，去掉示例标记；同步更新 `<script type="application/ld+json">` 里 BlogPosting 的 headline、description、datePublished、mainEntityOfPage。
3. 在首页和 archive.html 添加文章链接，在 sitemap.xml 添加带 lastmod 的正式 URL，在 feed.xml 顶部添加一篇 entry。
4. 更新上一篇/下一篇链接。
5. 配图：用 PIL/ffmpeg 生成 768/1200/1536w 的 WebP，参考 index.html 的 `<picture>` + srcset 写法；首屏大图保留 `fetchpriority="high"`，正文配图加 `loading="lazy"`。

所有文章正文在 HTML 内，禁用 JavaScript 仍可阅读和导航。目录高亮只做渐进增强。

## 资源

assets/editorial.png 为本次生成的 AI 概念静物，用作设计文章配图；未将其当作作者实际作品。另有 editorial-768w/1200w/1536w.webp 三档响应式版本（quality 80），页面通过 `<picture>` + srcset 按需加载，原 PNG 仅作旧浏览器兜底。assets/og.png 与对应社交图片地址沿用原站资源。图标使用自有字母标记。无第三方字体、追踪器、订阅服务或运行时依赖。

资源缓存采用重新验证，避免覆盖同名 CSS/JS 后仍显示旧版。
