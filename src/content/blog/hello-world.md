---
title: "Hello World —— 我的个人网站上线了"
description: "第一篇博客，记录这个个人网站的搭建过程和后续计划。"
date: 2026-07-11
tags: ["个人", "网站"]
draft: false
---

## 关于这个网站

这是一个用 [Astro](https://astro.build) 搭建的静态个人网站，主要用于：

- 📝 记录学习笔记
- 📊 整理算法题解
- ✍️ 写博客文章

## 技术栈

| 功能 | 技术 |
|------|------|
| 框架 | Astro |
| 样式 | Tailwind CSS |
| 代码高亮 | Shiki |
| 部署 | Vercel |
| 内容格式 | Markdown |

## 代码块测试

```python
def binary_search(nums: list[int], target: int) -> int:
    """二分查找"""
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

```typescript
interface User {
  name: string;
  age: number;
}

const greet = (user: User): string => {
  return `你好，${user.name}！`;
};
```

## 后续计划

1. 整理之前的算法笔记
2. 开始写系统设计相关学习笔记
3. 添加评论功能（Giscus）
4. 添加全文搜索（Pagefind）

## 引用测试

> 学习是一个持续的过程，记录是最好的思考方式。

感谢你的访问！🎉
