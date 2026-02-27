const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 這裡我們模擬一個翻譯函數，實際執行時我會直接處理內容
async function translateContent(content) {
    // 這個函數將由 AI (我本人) 在執行過程中根據內容進行翻譯
    // 但為了自動化，我會分批次讀取並寫回
    return content; 
}

function updateLinks(content) {
    // 匹配 [text](path.md) 或 [text](path.mdx)
    // 排除 http/https 開頭的連結
    return content.replace(/\[([^\]]+)\]\((?!http|https|mailto|#)([^)]+)\.(mdx?)(#[^)]+)?\)/g, (match, text, filePath, ext, anchor) => {
        const newPath = `${filePath}_zh_TW.${ext}${anchor || ''}`;
        return `[${text}](${newPath})`;
    });
}

function processFile(filePath) {
    const ext = path.extname(filePath);
    const base = filePath.slice(0, -ext.length);
    const targetPath = `${base}_zh_TW${ext}`;

    if (fs.existsSync(targetPath)) {
        console.log(`Skipping ${filePath}, already translated.`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = updateLinks(content);
    
    // 這裡我將手動進行翻譯並寫入
    // 在目前的 CLI 環境中，我會讀取檔案內容後，直接在對話中生成翻譯內容並寫入
    console.log(`Processing ${filePath} -> ${targetPath}`);
}

// 取得待處理清單
const files = execSync('./scripts/list_md_files.sh').toString().trim().split('
');
files.forEach(processFile);
