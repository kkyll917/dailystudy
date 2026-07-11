// 网站基础路径（GitHub Pages 项目页需要加仓库名）
export const BASE = "/dailystudy";

export function siteUrl(path: string): string {
  return `${BASE}${path}`;
}
