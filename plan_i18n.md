为了实现多语言（英文默认 + 繁体中文）和更好的 SSR/SEO 支持，我们需要修改以下文件：

### 1. 核心架构变更 (Architecture)
- `package.json`: 已安装 `i18next`, `react-i18next`, `react-helmet-async`。
- `src/i18n.ts` (New): 初始化 i18n 配置，设置默认语言为 `en`。
- `src/main.tsx`: 注入 `I18nextProvider` 和 `HelmetProvider`。

### 2. 数据层重构 (Data Layer)
- `src/lib/tarot-data.ts`: 
  - 重构数据结构，支持多语言字段。
  - `name` (English), `name_cn` -> `name_zh` (Traditional Chinese)。
  - `meaning_upright` -> `meanings: { en: { upright: ... }, zh: { upright: ... } }`。

### 3. 组件层升级 (Components)
- `src/components/LanguageSwitcher.tsx` (New): 语言切换按钮组件。
- `src/components/SEO.tsx` (New): 封装 Meta 标签管理，支持动态 Title/Description。
- `src/components/TarotCard.tsx`: 更新为从 i18n 获取卡牌名称。
- `src/components/ReadingResult.tsx`: 支持多语言解读展示。

### 4. 页面层适配 (Pages)
- `src/App.tsx`: 添加 Header 区域放置 `LanguageSwitcher`。
- `src/pages/Home.tsx`: 全部文案替换为 `t('key')`，添加 SEO Meta。
- `src/pages/DailyTarot.tsx`: 逻辑适配多语言，本地存储增加语言字段。
- `src/pages/YesNoTarot.tsx`: 文案国际化。
- `src/pages/ThreeCardSpread.tsx`: 文案国际化。

### 5. 资源文件 (Locales)
- `src/locales/en.json` (New): 英文翻译包。
- `src/locales/zh-Hant.json` (New): 繁体中文翻译包。

现在开始执行代码修改。
