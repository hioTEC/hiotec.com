# Design System — HioTEC

## Product Context
- **What this is:** DSE 教育工具品牌门户 + 工具集合
- **Who it's for:** 香港 DSE 学生和老师
- **Space/industry:** EdTech, exam preparation (Hong Kong DSE)
- **Project type:** Marketing site + product portal (Astro, CF Pages)

## Aesthetic Direction
- **Direction:** Warm Editorial
- **Decoration level:** Intentional — 微妙圆角、卡片微影、阴影区分层级
- **Mood:** Claude.ai 的暖质感（色系完全对齐）+ 小红书的精致感 + SaveMyExams 的功能清晰度。认真做工具的人，但不无聊。
- **Reference sites:** savemyexams.com, assessprep.com, claude.ai, Xiaohongshu

## Typography
- **Display/Hero:** Satoshi (900/700) — 几何感干净，成熟且有辨识度
- **Serif/Editorial:** Instrument Serif (400/italic) — 用于品牌标语、引用、装饰性标题。参考 Claude.com 的 Copernicus/Tiempos 用法
- **Body:** Plus Jakarta Sans (400/500/600/700) — SaveMyExams 验证的教育场景可读性，humanist 暖感
- **UI/Labels:** Plus Jakarta Sans 600
- **Data/Tables:** JetBrains Mono (tabular-nums) — 题号、分数、日期
- **Code:** JetBrains Mono
- **Loading:** Satoshi via Fontshare CDN, Instrument Serif + Plus Jakarta Sans + JetBrains Mono via Google Fonts
- **Scale:** 11px(label) / 13px(small) / 14px(body-sm) / 16px(body) / 18px(lead) / 24px(h3) / 32px(h2) / 48px(h1)

## Color

### Light Mode (Claude-aligned)
- **Approach:** Claude.ai 品牌色系对齐
- **Background:** `#f8f8f7` — Claude bg-000
- **Surface:** `#f4f3ee` — Claude bg-100 "Pampas" 奶油色
- **Surface hover:** `#f0eee5` — Claude bg-200
- **Border:** `#e7e4d7` / light: `#f0eee5` — Claude bg-300/200
- **Text:** primary `#0e0e0d` / secondary `#535045` / tertiary `#737063` — Claude text-000/300/500
- **Accent (terracotta):** `#C15F3C` / hover `#aa5234` / subtle `#C15F3C12` / light `#f2e0da`
- **Blue (secondary):** `#1b6bbb` / subtle `#1b6bbb14`
- **Semantic:** success `#1d9e75` / warning `#ba7517` / error `#a72419`

### Dark Mode (Claude-aligned)
- **Background:** `#1a1a19` — Claude gray-950
- **Surface:** `#242422` — Claude gray-850
- **Surface hover:** `#2c2c2a` — Claude gray-800
- **Border:** `#444441` / light: `#353532` — Claude gray-600/700
- **Text:** primary `#f8f8f7` / secondary `#888780` / tertiary `#6b6a64`
- **Accent (terracotta):** `#C46849` / hover `#d4795a`
- **Blue:** `#3f91e3`
- **Semantic:** success `#5dcaa5` / warning `#ef9f27` / error `#f09595`
- **Implementation:** `@media (prefers-color-scheme: dark)` in tokens.css

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64)

## Layout
- **Approach:** Grid-disciplined
- **Grid:** 1 col mobile / 2 col tablet / 3 col desktop (tool cards)
- **Max content width:** 960px
- **Border radius:** sm:8px, md:12px, lg:16px, full:9999px

## Motion
- **Approach:** Intentional
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms)
- **Patterns:** card hover translateY(-2px), page transitions fade-in, button press scale

## Interaction Patterns (ref: claude.com)
- **Floating nav:** 悬浮导航栏，滚动时 backdrop-filter blur + 微透明，不遮挡内容
- **Sibling dimming:** hover 某元素时，siblings 变 tertiary color (transition 300ms)，聚焦注意力
- **Quick-action pills:** 底部/卡片下方的快捷功能按钮，hover 时从 icon-only 展开到 icon+text (width transition 0.5s)
- **Premium easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) 用于展开/收起动画
- **Card hover:** translateY(-2px) + shadow-md，而非 border-color 变化
- **Serif accent:** 品牌标语和 pull quotes 用 Instrument Serif italic，和 sans-serif body 形成对比

## 设计约定（Landing Page）

| 约定 | 规则 |
|------|------|
| 对齐 | Container 居中 (960px)，内容左对齐。仅 Hero 居中 |
| 卡片 | 只用于平级并列（学科模块）。Feature 说明不套卡片 |
| 卡片风格 | 1px `--color-border-light`，无默认 shadow，hover `0 4px 20px rgba(0,0,0,0.04)` + sibling dimming（`:has()` 透明背景） |
| 截图占位 | 圆角 `radius-lg`，暖色 `--color-accent-light` 衬底 + dashed border，内含占位文字说明需要什么功能截图 |
| 间距节奏 | section 间 `3xl`(64px)，section 内 `2xl`(48px)，紧密元素 `md`(16px) |
| 字体层级 | Hero h1: Satoshi 900 / Section h2: Satoshi 700 / Feature 标题: PJS 700 / 副标题: Instrument Serif italic |
| 色彩使用 | Accent 只用于 CTA 和 badge 强调，不铺满。大面积用 bg/surface 暖色层次 |
| Section 分隔 | 1px `--color-border-light` top border，不用背景色切换 |
| Feature 展示 | 左文右图 2 列 grid，mobile 时图在上文在下 |

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-23 | Warm Editorial direction | 打破 DSE edtech 蓝白政务风，用暖色调建立品牌辨识度 |
| 2026-03-23 | Satoshi + Plus Jakarta Sans | Satoshi 几何感现代，PJS 已在 SaveMyExams 验证教育场景可读性 |
| 2026-03-23 | Dual color scheme (warm default + cool alt) | 暖色为品牌主调，蓝色保留为可切换的 fun variant |
| 2026-03-27 | Claude.ai 品牌色系对齐 | 全面对齐 Claude 设计 token——bg/surface/text/accent/semantic，含暗色模式。accent 从巧克力 #D2691E 转为珊瑚 #C15F3C |
| 2026-03-27 | 移除 Cool 色系 | 与 Claude 对齐后不再需要独立的 cool variant，简化维护 |
| 2026-03-23 | 12-16px border-radius | 小红书风格圆角，区别于 4px 政务风和 24px 卡通风 |
| 2026-03-23 | Instrument Serif for editorial accents | 参考 Claude.com 衬线体用法，用于标语和引用 |
| 2026-03-23 | Claude.com interaction patterns | floating nav, sibling dimming, quick-action pills, premium easing |
| 2026-03-27 | 落地页重设计 | 从工具集合页转为品牌落地页。mathqb 作为旗舰产品 showcase，加路线图和愿景。参考 claude.com/product/cowork |

## Previews
- Warm variant: `~/.gstack/demos/hiotec-design-system-preview.html`
- Cool variant: `~/.gstack/demos/hiotec-design-blue-variant.html`
- Live preview: `dash.hio.zone/#demos`
