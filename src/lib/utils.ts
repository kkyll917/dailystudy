/**
 * 格式化日期为 YYYY年MM月DD日
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * 获取文章阅读时间（分钟）
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 300; // 中文阅读速度
  const charCount = content.replace(/\s/g, "").length;
  return Math.max(1, Math.ceil(charCount / wordsPerMinute));
}
