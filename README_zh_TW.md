# Lightdash 文件

歡迎來到 Lightdash 文件庫！此儲存庫包含所有 [Lightdash](https://www.lightdash.com) 的文件，使用 [Mintlify](https://mintlify.com) 構建。

## 🚀 快速開始

### 前置條件

- 已安裝 Node.js 18+
- 熟悉 Markdown/MDX

### 本地開發

安裝 [Mintlify CLI](https://www.npmjs.com/package/mintlify) 以在本地預覽文件更改：

```bash
# 安裝 Mintlify CLI
npm i -g mintlify

# 啟動本地開發伺服器
mintlify dev
```

### 故障排除

- Mintlify dev 未運行 - 執行 `mintlify install` 重新安裝依賴項
- 頁面載入為 404 - 確保您在包含 `mint.json` 的資料夾中運行

## 📁 文件結構

我們的文件遵循嚴格的資料夾結構，其中 **圖片鏡像頁面結構**：

```
docs/
├── get-started/          # 入門和設置指南
├── guides/               # 功能指南和操作說明
├── references/           # API 和功能參考文件
├── dbt-guides/           # dbt 相關指南
└── self-host/            # 自託管文件

images/
├── get-started/          # ✅ 鏡像 docs 結構
├── guides/
├── references/
└── ...
```

### 核心原則

1. **圖片與頁面並存**：位於 `guides/dashboard.mdx` 的頁面應使用 `images/guides/dashboard/` 中的圖片
2. **共享圖片放更高層級**：如果一張圖片被多個頁面使用，請將其放在最近的共同父資料夾中
3. **使用 kebab-case**：所有檔案和資料夾都使用 `kebab-case`（例如 `my-new-guide.mdx`，而不是 `my_new_guide.mdx`）

## ✍️ 貢獻

感謝您有興趣改進 Lightdash 的文件！

### 建立新頁面

1. **選擇正確的位置**：
   - **get-started/**：供新用戶設置 Lightdash 使用
   - **guides/**：針對特定任務的分步說明
   - **references/**：詳細的功能文件和 API 文件
   - **dbt-guides/**：dbt 特定內容

2. **建立 MDX 檔案** 並包含正確的 frontmatter：

```mdx
---
title: "您的頁面標題"
description: "簡短描述（SEO 建議在 160 字元以內）"
---

# 您的頁面標題

介紹段落，說明本頁面涵蓋的內容。

## 第 1 節

內容在此...
```

3. **新增至導覽** 於 `docs.json`：

```json
{
  "group": "您的組別名稱",
  "pages": [
    "path/to/your-new-page"
  ]
}
```

### 內容最佳實踐

#### 使用清晰、以行動為導向的標題
- ✅ **好**: "如何建立儀表板"
- ❌ **不好**: "儀表板"

#### 為您的受眾而寫
- **get-started/**：假設使用者先前不了解 Lightdash
- **guides/**：假設使用者有基本熟悉度
- **references/**：需要詳細資訊的技術用戶

#### 結構化您的內容
```mdx
# 頁面標題 (H1 - 每頁僅限一個)

簡短介紹（2-3 句話）

## 您將學到什麼 (H2)
- 亮點 1
- 亮點 2

## 前置條件 (H2)
- 必要的設置步驟
- 連結至其他文件

## 分步指南 (H2)

### 步驟 1：執行某操作 (H3)
詳細說明...

### 步驟 2：執行下一個操作 (H3)
更多說明...

## 後續步驟 (H2)
- 連結至相關指南
```

## 🖼️ 圖片指南

### 新增圖片

1. **建立與頁面匹配的資料夾**：
   ```
   guides/my-new-feature.mdx
   images/guides/my-new-feature/
   ```

2. **使用描述性檔名**：
   - ✅ **好**: `create-dashboard-button.png`
   - ❌ **不好**: `screenshot1.png`, `image.png`

3. **優化圖片**：
   - 包含文字的截圖使用 PNG
   - 照片使用 JPG
   - 使用 WebP 獲得最佳壓縮率（若支援）
   - 最大寬度：2000px
   - 提交前進行壓縮

4. **在 MDX 中新增圖片**：

```mdx
<Frame>
  <img src="/images/guides/my-feature/screenshot.png" alt="描述性替代文字"/>
</Frame>
```

### 圖片命名規範

- 使用 `kebab-case`: `my-feature-screenshot.png`
- 具備描述性: `dashboard-settings-modal.png` 而非 `modal.png`
- 若相關，請包含狀態: `button-hover-state.png`

### 無障礙輔助

始終包含有意義的替代文字（alt text）：
```mdx
<img src="/images/path/file.png" alt="顯示主題選擇器下拉選單的儀表板設置"/>
```

## 🔁 使用可重用代碼片段 (Snippets)

為了保持文件的一致性，我們對常見的標註和內容塊使用可重用代碼片段。

### 可用片段

#### 功能可用性標註

```mdx
<!-- 僅限企業版功能 -->
<Snippet file="snippets/callouts/enterprise-only_zh_TW.mdx" />

<!-- 僅限雲端版功能 -->
<Snippet file="snippets/callouts/cloud-only_zh_TW.mdx" />

<!-- 僅限自託管功能 -->
<Snippet file="snippets/callouts/self-hosted-only_zh_TW.mdx" />
```

#### 權限與存取標註

```mdx
<!-- 需要管理員權限 -->
<Snippet file="snippets/callouts/admin-only_zh_TW.mdx" />

<!-- Beta 功能 -->
<Snippet file="snippets/callouts/beta-feature_zh_TW.mdx" />
```

#### 常見設置章節

```mdx
<!-- dbt 前置條件（包含標題） -->
<Snippet file="snippets/setup/dbt-project-required_zh_TW.mdx" />

<!-- 支援管道（包含標題） -->
<Snippet file="snippets/common/support-channels_zh_TW.mdx" />
```

### 何時使用片段

- ✅ **對於出現在多個頁面的標準標註**，使用片段
- ✅ **對於重複的設置說明或前置條件**，使用片段
- ❌ **對於不會被重用的頁面特定內容**，不要使用片段

### 建立新片段

如果您注意到相同的內容在 3 個以上的頁面中重複出現：

1. 在 `/snippets/` 下適當的子目錄建立新的片段檔案
2. 使用描述性檔名：`enterprise-only.mdx` 而非 `callout1.mdx`
3. 在本節中記錄新片段
4. 更新現有頁面以使用該片段

## 🔄 提交變更

### 1. 建立分支

```bash
git checkout -b docs/your-feature-name
```

分支命名：
- `docs/new-feature-guide` - 新文件
- `docs/fix-typo-in-setup` - 修復
- `docs/update-api-reference` - 更新

### 2. 進行更改

- 編輯或建立 MDX 檔案
- 將圖片新增至正確的資料夾
- 根據需要更新 `docs.json` 導覽

### 3. 本地測試

```bash
mintlify dev
```

- 檢查所有連結是否有效
- 驗證圖片是否正確顯示
- 審查格式

#### 執行驗證腳本

在提交 PR 之前，執行這些驗證腳本以發現常見問題：

```bash
# 檢查損壞的內部連結和孤兒頁面
node scripts/check-links.js

# 檢查損壞的外部連結（可選，速度較慢）
node scripts/check-links.js --external

# 驗證圖片是否在正確的位置
node scripts/check-image-locations.js
```

**這些腳本檢查什麼：**

- **check-links.js** - 驗證所有內部 markdown 和 JSX 連結，驗證連結的檔案是否存在，並識別孤兒頁面（不在 `docs.json` 中）
- **check-image-locations.js** - 確保圖片鏡像頁面結構（例如 `guides/dashboard.mdx` → `images/guides/dashboard/`），檢查缺失的圖片並驗證副檔名

**自動化檢查：** 這些腳本會透過 GitHub Actions 在所有 PR 上自動運行。驗證工作流將在您的 PR 上發表評論，指出發現的任何問題（但不會阻止合併）。

#### 自動修復圖片位置問題

**機器人會自動修復圖片位置問題！** 當您建立 PR 時，文件機器人將：
- 檢測位置錯誤的圖片
- 自動將其移動到正確的目錄結構
- 更新所有 MDX 檔案引用
- 直接將修復提交到您的 PR 分支

您將看到類似以下的評論："✅ Fixed 2 misplaced images"

**手動修復（可選）：**
您也可以在本地執行修復腳本：

```bash
# 預覽將更改的內容
node scripts/fix-image-locations.js --dry-run

# 應用修復
node scripts/fix-image-locations.js
```

**常見問題排除：**

- **損壞的連結**：使用從根目錄開始的絕對路徑（例如 `/guides/my-guide` 而非 `../guides/my-guide`），且在連結中省略副檔名
- **位置錯誤的圖片**：執行 `node scripts/fix-image-locations.js` 以自動修復
- **共享圖片**：可以放置在最近的共同父目錄中

### 4. 提交您的變更

```bash
git add .
git commit -m "docs: add guide for custom metrics"
```

提交訊息格式：
- `docs: add [feature]` - 新內容
- `docs: fix [issue]` - 錯誤修復
- `docs: update [page]` - 更新
- `docs: remove [deprecated content]` - 移除

### 5. 推送並建立 PR

```bash
git push origin docs/your-feature-name
```

然後建立一個 Pull Request，包含：
- 描述變更的清晰標題
- 說明變更了什麼以及為什麼變更
- 若相關，提供截圖
- 連結至相關議題 (Issues)

## 📝 風格指南

### 語氣和風格

- **友善且平易近人**：寫作風格就像您在幫助同事一樣
- **清晰簡潔**：快速進入重點
- **主動語態**："點擊按鈕" 而非 "按鈕應該被點擊"
- **第二人稱**："您可以建立儀表板" 而非 "使用者可以建立儀表板"

### 格式化

#### 代碼塊

使用語法高亮：

```sql
SELECT
  user_id,
  COUNT(*) as event_count
FROM events
GROUP BY user_id
```

#### 標註

```mdx
<Note>
  有用的提示和額外背景資訊
</Note>

<Warning>
  關於潛在問題的重要警告
</Warning>

<Info>
  資訊性標註
</Info>
```

#### 連結

- 使用描述性連結文字：[建立新儀表板](/get-started/exploring-data/dashboards_zh_TW)
- 而非：點擊 [這裡](/get-started/exploring-data/dashboards_zh_TW)

#### 清單

對於順序步驟使用編號清單：
1. 先執行此操作
2. 然後執行此操作
3. 最後執行此操作

對於非順序項目使用項目符號：
- 功能 A
- 功能 B
- 功能 C

### 常見術語

保持一致性：
- **Lightdash** (大寫 L)
- **dbt** (小寫)
- **dashboard** (儀表板)
- **metric** (指標，在文件中不要使用 measure 或 KPI)
- **dimension** (維度，而非屬性或欄位)

## 🐛 報告問題

在文件中發現問題了嗎？

1. [檢查是否已存在相關議題](https://github.com/lightdash/mintlify-docs/issues)
2. 建立新議題並包含：
   - 清晰標題
   - 頁面 URL
   - 問題描述
   - 建議的修復方案（如果您有）

## ❓ 有疑問嗎？

- **Slack**: [#analytics-engineering](https://lightdash.slack.com/archives/C091T9LD2LC)（供團隊成員使用）
- **GitHub Discussions**: 供社群提問

## 🚀 發佈變更

在推送到 `main` 分支後，變更將透過我們的 GitHub App 整合自動部署到生產環境。
