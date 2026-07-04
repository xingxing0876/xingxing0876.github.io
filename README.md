# MyselfBlog

基于 Astro 的个人站点，包含首页、简历页和作品集列表页，部署在 GitHub Pages。

线上地址：https://xingxing0876.github.io

## 页面

- `/` — 首页（简介、技能、精选作品）
- `/resume` — 在线简历
- `/projects` — 作品集列表（支持分类筛选）

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:4321/

## 修改内容

| 内容 | 文件位置 |
|------|----------|
| 个人信息、简历 | `src/data/resume.ts` |
| 项目作品 | `src/content/projects/*.md` |
| 头像 | `public/assets/avatar.svg` |
| 项目封面 | `public/assets/projects/` |

## 部署到 GitHub Pages

1. 推送代码到 `main` 分支
2. 仓库 Settings → Pages → Source 选择 **GitHub Actions**
3. push 后 Actions 会自动构建并部署

## 技术栈

- [Astro](https://astro.build/) — 静态站点生成
- Content Collections — Markdown 管理项目
- GitHub Actions — 自动部署
