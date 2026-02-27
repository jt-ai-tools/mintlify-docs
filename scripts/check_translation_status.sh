#!/bin/bash
# 檢查翻譯進度
total=$(./scripts/list_md_files.sh | wc -l)
translated=0
missing=0

while IFS= read -r file; do
    base="${file%.*}"
    ext="${file##*.}"
    target="${base}_zh_TW.${ext}"
    if [ -f "$target" ]; then
        translated=$((translated+1))
    else
        echo "Missing: $file"
        missing=$((missing+1))
    fi
done < <(./scripts/list_md_files.sh)

echo "-----------------------------------"
echo "總計待翻譯檔案: $total"
echo "已完成翻譯檔案: $translated"
echo "尚未完成檔案: $missing"
if [ "$missing" -eq 0 ]; then
    echo "恭喜！所有檔案皆已完成翻譯。"
else
    echo "進度: $(echo "scale=2; $translated * 100 / $total" | bc)%"
fi
