#!/bin/bash
# 查找所有 .md 和 .mdx 檔案，排除 PROGRESS.md 和已經是 _zh_TW 的檔案
find . -type f \( -name "*.md" -o -name "*.mdx" \) \
    ! -name "PROGRESS.md" \
    ! -name "*_zh_TW.md" \
    ! -name "*_zh_TW.mdx" \
    ! -path "./.git/*" \
    ! -path "./node_modules/*"
