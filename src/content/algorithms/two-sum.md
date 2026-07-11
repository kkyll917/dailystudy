---
title: "LeetCode 1. Two Sum —— 两数之和"
description: "经典哈希表入门题，详细讲解 Two Sum 的多种解法。"
date: 2026-07-09
category: "search"
difficulty: "easy"
tags: ["hashmap", "array", "leetcode"]
draft: false
---

## 题目描述

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。

- 每种输入只会对应一个答案
- 不能使用两次相同的元素

## 示例

```
输入: nums = [2, 7, 11, 15], target = 9
输出: [0, 1]
解释: nums[0] + nums[1] == 9
```

## 解法一：暴力枚举

最直观的思路 —— 枚举所有数对。

```python
def twoSum(nums: list[int], target: int) -> list[int]:
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

**复杂度分析：**
- 时间复杂度：$O(n^2)$
- 空间复杂度：$O(1)$

## 解法二：哈希表（最优）

遍历数组，用哈希表记录已遍历元素的值和下标。对于当前元素 `nums[i]`，查找 `target - nums[i]` 是否在哈希表中。

```python
def twoSum(nums: list[int], target: int) -> list[int]:
    seen = {}  # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
```

**复杂度分析：**
- 时间复杂度：$O(n)$ —— 只需一次遍历
- 空间复杂度：$O(n)$ —— 哈希表存储已遍历元素

## 思路总结

| 解法 | 时间 | 空间 | 核心思想 |
|------|------|------|---------|
| 暴力 | $O(n^2)$ | $O(1)$ | 枚举所有数对 |
| 哈希表 | $O(n)$ | $O(n)$ | 空间换时间 |

> 经典的空间换时间策略。遇到"查找"类问题，首先想到哈希表往往没错。
