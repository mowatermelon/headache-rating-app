"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeadacheTypeCard } from '@/components/HeadacheTypeCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// 模拟数据 - 头痛类型
const headacheTypes = [
  {
    id: '1',
    title: '偏头痛',
    description: '通常表现为一侧头部的搏动性疼痛，可能伴有恶心、呕吐和对光声敏感。',
    icon: '🤕',
    symptoms: ['单侧头痛', '搏动性疼痛', '恶心呕吐', '畏光畏声', '视觉先兆'],
    triggers: ['压力', '睡眠不足', '某些食物', '荷尔蒙变化', '天气变化']
  },
  {
    id: '2',
    title: '丛集性头痛',
    description: '剧烈的单侧头痛，常在眼睛周围，持续时间短但疼痛强度大。',
    icon: '😖',
    symptoms: ['眼睛周围剧痛', '单侧头痛', '流泪', '鼻塞', '眼睑下垂'],
    triggers: ['酒精', '强烈气味', '高海拔', '睡眠模式改变']
  },
  {
    id: '3',
    title: '紧张型头痛',
    description: '双侧头部的压迫感或紧绷感，通常与压力和肌肉紧张有关。',
    icon: '😣',
    symptoms: ['双侧头痛', '压迫感或紧绷感', '颈部和肩部肌肉紧张', '轻度至中度疼痛'],
    triggers: ['压力', '姿势不良', '眼睛疲劳', '脱水', '睡眠不足']
  },
  {
    id: '4',
    title: '颈源性头痛',
    description: '由颈部问题引起的头痛，通常从颈部开始并向上蔓延。',
    icon: '🧠',
    symptoms: ['颈部疼痛', '头痛从颈部开始', '颈部活动受限', '头部某些位置加重疼痛'],
    triggers: ['颈部姿势不良', '长时间保持一个姿势', '颈部损伤', '颈椎关节炎']
  },
  {
    id: '5',
    title: '药物过度使用头痛',
    description: '由于频繁使用止痛药而导致的慢性头痛。',
    icon: '💊',
    symptoms: ['几乎每天头痛', '早晨醒来时头痛', '止痛药效果减弱', '头痛频率和强度增加'],
    triggers: ['长期使用止痛药', '突然停止使用止痛药', '原发性头痛病史']
  },
  {
    id: '6',
    title: '鼻窦炎头痛',
    description: '由鼻窦感染或炎症引起的头痛，通常伴有鼻塞和面部压力感。',
    icon: '🤧',
    symptoms: ['面部压力感', '鼻塞', '浓稠鼻涕', '嗅觉减退', '牙痛'],
    triggers: ['过敏', '感冒', '鼻窦感染', '气压变化']
  },
  {
    id: '7',
    title: '眼睛疲劳头痛',
    description: '由长时间用眼或视力问题引起的头痛，通常在前额或眼睛周围。',
    icon: '👁️',
    symptoms: ['眼睛疲劳', '前额或眼睛周围疼痛', '视力模糊', '眼睛干涩'],
    triggers: ['长时间看屏幕', '阅读时间过长', '未矫正的视力问题', '光线不足']
  },
  {
    id: '8',
    title: '后枕神经痛',
    description: '后枕神经受压或刺激引起的头痛，通常在头部后部感到刺痛。',
    icon: '⚡',
    symptoms: ['头部后部刺痛', '一侧头皮疼痛', '触摸头皮加重疼痛', '头部活动加重疼痛'],
    triggers: ['颈部肌肉紧张', '颈部损伤', '姿势不良', '颈椎关节炎']
  }
];

export default function HeadacheTypes() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSymptom, setSelectedSymptom] = React.useState('');
  
  // 提取所有症状用于筛选
  const allSymptoms = Array.from(
    new Set(
      headacheTypes.flatMap(type => type.symptoms)
    )
  ).sort();
  
  // 筛选头痛类型
  const filteredHeadacheTypes = headacheTypes.filter(type => {
    const matchesSearch = type.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         type.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSymptom = selectedSymptom === '' || 
                          type.symptoms.some(s => s.toLowerCase().includes(selectedSymptom.toLowerCase()));
    
    return matchesSearch && matchesSymptom;
  });
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 头部区域 */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">头痛类型</h1>
          <p className="text-xl max-w-3xl mx-auto">
            了解不同类型的头痛，识别症状和触发因素，找到适合您的治疗方法
          </p>
        </div>
      </section>
      
      {/* 筛选区域 */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="搜索头痛类型..."
                className="input-field"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2">
              <select
                className="input-field"
                value={selectedSymptom}
                onChange={(e) => setSelectedSymptom(e.target.value)}
              >
                <option value="">按症状筛选</option>
                {allSymptoms.map((symptom, index) => (
                  <option key={index} value={symptom}>
                    {symptom}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* 头痛类型列表 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHeadacheTypes.length > 0 ? (
              filteredHeadacheTypes.map((type) => (
                <Link href={`/headache-types/${type.id}`} key={type.id}>
                  <HeadacheTypeCard
                    title={type.title}
                    description={type.description}
                    icon={type.icon}
                    className="h-full"
                  />
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">没有找到匹配的头痛类型</p>
                <Button 
                  variant="secondary" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSymptom('');
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
            <h2 className="text-2xl font-bold mb-4">了解头痛很重要</h2>
            <p className="mb-4">
              头痛是最常见的健康问题之一，全球约有50%的成年人每年至少经历一次头痛。正确识别头痛类型对于找到有效的治疗方法至关重要。
            </p>
            <p className="mb-4">
              如果您经常遭受头痛困扰，建议咨询医疗专业人士获取个性化的诊断和治疗建议。本网站提供的信息仅供参考，不能替代专业医疗建议。
            </p>
            <div className="mt-6">
              <Button variant="primary">
                <Link href="/treatments">探索治疗方法</Link>
              </Button>
            </div>
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
