# 头痛评分互动网站设计结构

## 页面结构

### 1. 首页 (/)
- 网站介绍和主要功能展示
- 头痛类型导航卡片
- 最新评分和评论展示
- 动画效果和交互元素

### 2. 头痛类型页面 (/headache-types)
- 所有头痛类型列表
- 每种类型的简要介绍和图标
- 筛选和搜索功能

### 3. 头痛类型详情页 (/headache-types/[type])
- 头痛类型详细介绍
- 症状描述
- 常见治疗方法列表
- 相关药物列表
- 用户评论区

### 4. 治疗方法页面 (/treatments)
- 所有治疗方法列表
- 分类展示（药物治疗、物理治疗、替代疗法等）
- 筛选和搜索功能

### 5. 治疗方法详情页 (/treatments/[id])
- 治疗方法详细介绍
- 适用的头痛类型
- 用户评分统计
- 用户评论区

### 6. 药物页面 (/medications)
- 所有药物列表
- 分类展示（预防药物、急性期药物等）
- 筛选和搜索功能

### 7. 药物详情页 (/medications/[id])
- 药物详细介绍
- 适用的头痛类型
- 副作用信息
- 用户评分统计
- 用户评论区

### 8. 用户个人中心 (/profile)
- 用户评分历史
- 用户评论历史
- 个人设置

## 组件结构

### 布局组件
- `RootLayout`: 全局布局组件
- `Navbar`: 导航栏组件
- `Footer`: 页脚组件
- `Container`: 内容容器组件

### UI组件
- `Button`: 按钮组件
- `Card`: 卡片组件
- `Input`: 输入框组件
- `Modal`: 模态框组件
- `Tabs`: 标签页组件
- `Badge`: 徽章组件

### 功能组件
- `RatingSystem`: 评分系统组件
- `CommentSection`: 评论区组件
- `SearchBar`: 搜索栏组件
- `Filter`: 筛选组件
- `Pagination`: 分页组件

### 动画组件
- `AnimatedBackground`: 动画背景组件
- `FloatingElement`: 浮动元素组件
- `GradientText`: 渐变文字组件
- `AnimatedCard`: 动画卡片组件

## 数据模型

### 头痛类型
```typescript
interface HeadacheType {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  commonTreatments: string[];
  relatedMedications: string[];
  imageUrl: string;
}
```

### 治疗方法
```typescript
interface Treatment {
  id: string;
  name: string;
  description: string;
  category: string;
  applicableHeadacheTypes: string[];
  effectivenessRating: number;
  sideEffects: string[];
  imageUrl: string;
}
```

### 药物
```typescript
interface Medication {
  id: string;
  name: string;
  description: string;
  category: string;
  applicableHeadacheTypes: string[];
  effectivenessRating: number;
  sideEffects: string[];
  dosage: string;
  imageUrl: string;
}
```

### 评分
```typescript
interface Rating {
  id: string;
  userId: string;
  itemId: string;
  itemType: 'treatment' | 'medication';
  score: number;
  comment: string;
  createdAt: Date;
}
```

### 评论
```typescript
interface Comment {
  id: string;
  userId: string;
  itemId: string;
  itemType: 'headacheType' | 'treatment' | 'medication';
  content: string;
  createdAt: Date;
}
```

### 用户
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  ratings: Rating[];
  comments: Comment[];
}
```
