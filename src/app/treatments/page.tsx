"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';
import Link from 'next/link';

// 模拟数据 - 治疗方法
const treatments = [
  {
    id: '1',
    name: '舒马曲坦',
    type: '药物',
    description: '一种选择性5-羟色胺受体激动剂，用于治疗偏头痛急性发作。',
    rating: 4.2,
    applicableHeadacheTypes: ['偏头痛'],
    sideEffects: ['头晕', '恶心', '疲劳', '胸闷']
  },
  {
    id: '2',
    name: '针灸疗法',
    type: '替代疗法',
    description: '通过刺激特定穴位来缓解头痛症状的传统中医疗法。',
    rating: 3.8,
    applicableHeadacheTypes: ['偏头痛', '紧张型头痛'],
    sideEffects: ['轻微疼痛', '瘀伤']
  },
  {
    id: '3',
    name: '生物反馈',
    type: '行为疗法',
    description: '通过监测和控制身体功能（如肌肉紧张度）来减轻头痛的技术。',
    rating: 4.0,
    applicableHeadacheTypes: ['偏头痛', '紧张型头痛'],
    sideEffects: []
  },
  {
    id: '4',
    name: '丙戊酸钠',
    type: '预防药物',
    description: '一种抗癫痫药物，也用于预防偏头痛。',
    rating: 3.9,
    applicableHeadacheTypes: ['偏头痛'],
    sideEffects: ['嗜睡', '体重增加', '头晕', '恶心']
  },
  {
    id: '5',
    name: '普萘洛尔',
    type: '预防药物',
    description: '一种β受体阻滞剂，用于预防偏头痛。',
    rating: 3.7,
    applicableHeadacheTypes: ['偏头痛'],
    sideEffects: ['疲劳', '睡眠障碍', '低血压']
  },
  {
    id: '6',
    name: '氧气吸入',
    type: '急性治疗',
    description: '高流量氧气吸入，特别适用于丛集性头痛的急性治疗。',
    rating: 4.5,
    applicableHeadacheTypes: ['丛集性头痛'],
    sideEffects: []
  },
  {
    id: '7',
    name: '舒马曲坦注射',
    type: '药物',
    description: '舒马曲坦的注射剂型，用于治疗丛集性头痛的急性发作。',
    rating: 4.3,
    applicableHeadacheTypes: ['丛集性头痛', '偏头痛'],
    sideEffects: ['注射部位反应', '头晕', '恶心']
  },
  {
    id: '8',
    name: '大枕神经阻滞',
    type: '介入治疗',
    description: '通过注射局部麻醉剂和/或皮质类固醇来阻断大枕神经，缓解头痛。',
    rating: 3.9,
    applicableHeadacheTypes: ['偏头痛', '丛集性头痛', '后枕神经痛'],
    sideEffects: ['注射部位疼痛', '感染风险']
  },
  {
    id: '9',
    name: '按摩疗法',
    type: '物理疗法',
    description: '通过按摩头部、颈部和肩部肌肉来缓解紧张型头痛。',
    rating: 4.1,
    applicableHeadacheTypes: ['紧张型头痛', '颈源性头痛'],
    sideEffects: []
  },
  {
    id: '10',
    name: '冷热敷',
    type: '家庭疗法',
    description: '在头痛部位使用冷敷或热敷来缓解疼痛。',
    rating: 3.6,
    applicableHeadacheTypes: ['偏头痛', '紧张型头痛'],
    sideEffects: []
  },
  {
    id: '11',
    name: '放松训练',
    type: '行为疗法',
    description: '学习肌肉放松技术和深呼吸来减轻头痛。',
    rating: 3.8,
    applicableHeadacheTypes: ['紧张型头痛', '偏头痛'],
    sideEffects: []
  },
  {
    id: '12',
    name: '认知行为疗法',
    type: '心理疗法',
    description: '通过改变思维模式和行为来管理头痛的心理治疗方法。',
    rating: 4.0,
    applicableHeadacheTypes: ['紧张型头痛', '偏头痛'],
    sideEffects: []
  }
];

export default function Treatments() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedType, setSelectedType] = React.useState('');
  const [selectedHeadache, setSelectedHeadache] = React.useState('');
  
  // 提取所有治疗类型和适用头痛类型用于筛选
  const treatmentTypes = Array.from(
    new Set(treatments.map(treatment => treatment.type))
  ).sort();
  
  const headacheTypes = Array.from(
    new Set(
      treatments.flatMap(treatment => treatment.applicableHeadacheTypes)
    )
  ).sort();
  
  // 筛选治疗方法
  const filteredTreatments = treatments.filter(treatment => {
    const matchesSearch = treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         treatment.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === '' || treatment.type === selectedType;
    
    const matchesHeadache = selectedHeadache === '' || 
                           treatment.applicableHeadacheTypes.includes(selectedHeadache);
    
    return matchesSearch && matchesType && matchesHeadache;
  });
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 头部区域 */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">治疗方法评分</h1>
          <p className="text-xl max-w-3xl mx-auto">
            探索各种头痛治疗方法，查看用户评分和评论，分享您的治疗体验
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
                placeholder="搜索治疗方法..."
                className="input-field"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="input-field"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">按类型筛选</option>
                {treatmentTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
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
      
      {/* 治疗方法列表 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.length > 0 ? (
              filteredTreatments.map((treatment) => (
                <Card key={treatment.id} className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{treatment.name}</CardTitle>
                      <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {treatment.type}
                      </span>
                    </div>
                    <CardDescription className="mt-2">
                      {treatment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">适用于:</div>
                      <div className="flex flex-wrap gap-2">
                        {treatment.applicableHeadacheTypes.map((type, index) => (
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
                      <Rating value={treatment.rating} readOnly />
                      <span className="ml-2 text-gray-500">{treatment.rating.toFixed(1)}</span>
                    </div>
                    <Button variant="secondary" className="w-full">
                      <Link href={`/treatments/${treatment.id}`}>查看详情和评分</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">没有找到匹配的治疗方法</p>
                <Button 
                  variant="secondary" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('');
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
            <h2 className="text-2xl font-bold mb-4">关于治疗方法评分</h2>
            <p className="mb-4">
              我们的治疗方法评分系统汇集了用户的真实体验和反馈，帮助您找到最适合自己的头痛治疗方案。每种治疗方法的评分基于用户对其有效性、副作用和整体满意度的评价。
            </p>
            <p className="mb-4">
              您可以查看详细的用户评论，了解其他人使用这些治疗方法的经历，也可以分享您自己的体验，帮助更多的头痛患者。
            </p>
            <p className="text-sm text-gray-500">
              免责声明：本网站提供的信息仅供参考，不能替代专业医疗建议、诊断或治疗。在尝试任何新的治疗方法前，请咨询医疗专业人士。
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
