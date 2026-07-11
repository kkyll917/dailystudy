---
title: "React Hooks 核心原理笔记"
description: "深入理解 useState、useEffect、useCallback 等核心 Hooks 的工作原理。"
date: 2026-07-10
topic: "React"
tags: ["react", "hooks", "前端"]
draft: false
---

## useState 原理

`useState` 是 React 中最基础的 Hook，用于在函数组件中添加状态。

### 基本用法

```jsx
const [count, setCount] = useState(0);
```

### 实现原理（简化版）

```javascript
let memorizedStates = [];
let cursor = 0;

function useState(initialValue) {
  const currentCursor = cursor;
  
  // 首次渲染时初始化
  if (memorizedStates[currentCursor] === undefined) {
    memorizedStates[currentCursor] = initialValue;
  }
  
  const state = memorizedStates[currentCursor];
  
  const setState = (newValue) => {
    memorizedStates[currentCursor] = newValue;
    reRender(); // 触发重新渲染
  };
  
  cursor++;
  return [state, setState];
}
```

## useEffect 原理

`useEffect` 用于处理副作用，它在渲染完成后执行。

```jsx
useEffect(() => {
  // 副作用逻辑
  document.title = `点击了 ${count} 次`;
  
  // 清理函数
  return () => {
    document.title = "React App";
  };
}, [count]); // 依赖数组
```

### 关键概念

- **依赖数组为空 `[]`**：只在组件挂载时执行一次
- **不传依赖数组**：每次渲染后都会执行
- **返回清理函数**：在下次 effect 执行前或组件卸载时调用

## useCallback vs useMemo

| Hook | 缓存什么 | 使用场景 |
|------|---------|---------|
| `useMemo` | 计算结果 | 昂贵的计算 |
| `useCallback` | 函数引用 | 传给子组件的回调 |

```jsx
// useMemo: 缓存计算结果
const sortedList = useMemo(
  () => items.sort((a, b) => a.value - b.value),
  [items]
);

// useCallback: 缓存函数引用
const handleClick = useCallback(
  (id) => {
    setSelected(id);
  },
  []
);
```

## Hooks 规则

1. **只在组件顶层调用**，不能在循环、条件或嵌套函数中调用
2. **只在 React 函数组件或自定义 Hook 中调用**

> 这些规则确保了每次渲染时 Hooks 的调用顺序一致，这是 React 正确关联状态的关键。
