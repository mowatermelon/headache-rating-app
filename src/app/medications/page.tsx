"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';
import Link from 'next/link';

// 模拟数据 - 药物
const medications = [
  {
    id: '1',
    name: '舒马曲坦',
    category: '曲坦类',
    description: '一种选择性5-羟色胺受体激动剂，用于治疗偏头痛急性发作。',
    rating: 4.2,
    applicableHeadacheTypes: ['偏头痛'],
    sideEffects: ['头晕', '恶心', '疲劳', '胸闷']
  },
  {
    id: '2',
    name: '丙戊酸钠',
    category: '预防药物',
    description: '一种抗癫痫药物，也用于预防偏头痛。',
    rating: 3.9,
    applicableHeadacheTypes: ['偏头痛'],
    sideEffects: ['嗜睡', '体重增加', '头晕', '恶心']
  },
  {
    id: '3',
    name: '普萘洛尔',
    category: '预防药物',
    description: '一种β受体阻滞剂，用于预防偏头痛。',
    rating: 3.7,
    applicableHeadacheTypes: ['偏头痛'],
    sideEffects: ['疲劳', '睡眠障碍', '低血压']
  },
  {
    id: '4',
    name: '布洛芬',
    category: '非甾体抗炎药',
    description: '一种常见的非处方止痛药，用于轻度至中度头痛。',
    rating: 4.0,
    applicableHeadacheTypes: ['紧张型头痛', '偏头痛'],
    sideEffects: ['胃部不适', '消化不良', '轻微头晕']
  },
  {
    id: '5',
    name: '对乙酰氨基酚',
    category: '非处方止痛药',
    description: '一种常见的非处方止痛药，用于轻度头痛。',
    rating: 3.5,
    applicableHeadacheTypes: ['紧张型头痛'],
    sideEffects: ['肝损伤（大剂量）']
  },
  {
    id: '6',
    name: '阿司匹林',
    category: '非甾体抗炎药',
    description: '一种常见的非处方止痛药，具有抗炎和抗血小板作用。',
    rating: 3.6,
    applicableHeadacheTypes: ['紧张型头痛'],
    sideEffects: ['胃部不适', '出血风险']
  },
  {
    id: '7',
    name: '维拉帕米',
    category: '预防药物',
    description: '一种钙通道阻滞剂，用于预防丛集性头痛。',
    rating: 4.0,
    applicableHeadacheTypes: ['丛集性头痛'],
    sideEffects: ['便秘', '头晕', '低血压']
  },
  {
    id: '8',
    name: '锂盐',
    category: '预防药物',
    description: '用于预防丛集性头痛的药物，也用于双相情感障碍。',
    rating: 3.8,
    applicableHeadacheTypes: ['丛集性头痛'],
    sideEffects: ['震颤', '口渴', '尿频', '认知障碍']
  },
  {
    id: '9',
    name: '甲强龙',
    category: '皮质类固醇',
    description: '一种强效抗炎药物，用于短期预防丛集性头痛。',
    rating: 4.1,
    applicableHeadacheTypes: ['丛集性头痛'],
    sideEffects: ['血糖升高', '情绪变化', '免疫抑制']
  },
  {
    id: '10',
    name: '托吡酯',
    category: '预防药物',
    description: '一种抗癫痫药物，也用于预防偏头痛。',
    rating: 3.6,
    applicableHeadacheTypes: ['偏头痛'],
    sideEffects: ['认知障碍', '感觉异常', '体重减轻']
  },
  {
    id: '11',
    name: '阿米替林',
    category: '三环类抗抑郁药',
    description: '一种抗抑郁药，也用于预防偏头痛和紧张型头痛。',
    rating: 3.7,
    applicableHeadacheTypes: ['偏头痛', '紧张型头痛'],
    sideEffects: ['嗜睡', '口干', '便秘', '体重增加']
  },
  {
    id: '12',
    name: '奥那波替林',
    category: '抗CGRP单抗',
    description: '一种新型生物制剂，通过阻断CGRP受体预防偏头痛。',
    rating: 4.3,
    applicableHeadacheTypes: ['偏头痛'],
    sideEffects: ['注射部位反应', '便秘']
  }
];

export default function Medications() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedHeadache, setSelectedHeadache] = React.useState('');
  
  // 提取所有药物类别和适用头痛类型用于筛选
  const medicationCategories = Array.from(
    new Set(medications.map(medication => medication.category))
  ).sort();
  
  const headacheTypes = Array.from(
    new Set(
      medications.flatMap(medication => medication.applicableHeadacheTypes)
    )
  ).sort();
  
  // 筛选药物
  const filteredMedications = medications.filter(medication => {
    const matchesSearch = medication.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         medication.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || medication.category === selectedCategory;
    
    const matchesHeadache = selectedHeadache === '' || 
                           medication.applicableHeadacheTypes.includes(selectedHeadache);
    
    return matchesSearch && matchesCategory && matchesHeadache;
  });
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 头部区域 */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">药物评分</h1>
          <p className="text-xl max-w-3xl mx-auto">
            探索各种头痛药物，查看用户评分和评论，分享您的用药体验
          </p>
        </div>
      </section>
      
      {/* 筛选区域 */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                placeholder="搜索药物..."
                className="input-field"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="input-field"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">按类别筛选</option>
                {medicationCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                className="input-field"
                value={selectedHeadache}
                onChange={(e) => setSelectedHeadache(e.target.value)}
              >
                <option value="">按适用头痛类型筛选</option>
                {headacheTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* 药物列表 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedications.length > 0 ? (
              filteredMedications.map((medication) => (
                <Card key={medication.id} className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{medication.name}</CardTitle>
                      <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {medication.category}
                      </span>
                    </div>
                    <CardDescription className="mt-2">
                      {medication.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">适用于:</div>
                      <div className="flex flex-wrap gap-2">
                        {medication.applicableHeadacheTypes.map((type, index) => (
                          <span 
                            key={index} 
                            className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <Rating value={medication.rating} readOnly />
                      <span className="ml-2 text-gray-500">{medication.rating.toFixed(1)}</span>
                    </div>
                    <Button variant="secondary" className="w-full">
                      <Link href={`/medications/${medication.id}`}>查看详情和评分</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">没有找到匹配的药物</p>
                <Button 
                  variant="secondary" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                    setSelectedHeadache('');
                  }}
                >
                  重置筛选
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* 信息区域 */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">关于药物评分</h2>
            <p className="mb-4">
              我们的药物评分系统汇集了用户的真实体验和反馈，帮助您了解不同药物的效果和可能的副作用。每种药物的评分基于用户对其有效性、副作用和整体满意度的评价。
            </p>
            <p className="mb-4">
              您可以查看详细的用户评论，了解其他人使用这些药物的经历，也可以分享您自己的体验，帮助更多的头痛患者。
            </p>
            <p className="text-sm text-gray-500">
              免责声明：本网站提供的信息仅供参考，不能替代专业医疗建议、诊断或治疗。在使用任何药物前，请咨询医疗专业人士。药物可能有副作用，请仔细阅读说明书或遵医嘱使用。
            </p>
          </div>
        </div>
      </section>
      
      {/* 页脚 */}
      <footer className="py-12 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold gradient-text">头痛评分</span>
              <p className="mt-2 text-gray-600 dark:text-gray-400">帮助缓解头痛，改善生活质量</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/headache-types" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                头痛类型
              </Link>
              <Link href="/treatments" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                治疗方法
              </Link>
              <Link href="/medications" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                药物评分
              </Link>
              <Link href="/profile" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                个人中心
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} 头痛评分互动平台. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
