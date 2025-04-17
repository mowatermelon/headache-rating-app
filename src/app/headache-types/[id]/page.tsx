"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';
import { CommentSection } from '@/components/CommentSection';
import Link from 'next/link';

// 模拟数据 - 头痛类型详情
const headacheTypes = [
  {
    id: '1',
    title: '偏头痛',
    description: '偏头痛是一种常见的神经系统疾病，特点是反复发作的中度至重度头痛，通常表现为一侧头部的搏动性疼痛，可能伴有恶心、呕吐和对光声敏感。偏头痛可能持续数小时至数天，严重影响日常生活和工作。',
    icon: '🤕',
    symptoms: ['单侧头痛', '搏动性疼痛', '恶心呕吐', '畏光畏声', '视觉先兆'],
    triggers: ['压力', '睡眠不足', '某些食物', '荷尔蒙变化', '天气变化'],
    treatments: [
      { id: '1', name: '舒马曲坦', type: '药物', rating: 4.2 },
      { id: '2', name: '针灸疗法', type: '替代疗法', rating: 3.8 },
      { id: '3', name: '生物反馈', type: '行为疗法', rating: 4.0 }
    ],
    medications: [
      { id: '1', name: '舒马曲坦', category: '曲坦类', rating: 4.2 },
      { id: '4', name: '丙戊酸钠', category: '预防药物', rating: 3.9 },
      { id: '5', name: '普萘洛尔', category: '预防药物', rating: 3.7 }
    ]
  },
  {
    id: '2',
    title: '丛集性头痛',
    description: '丛集性头痛是一种罕见但极为剧烈的头痛类型，特点是在眼睛周围出现剧烈的单侧疼痛，常伴有同侧眼睛流泪、鼻塞或流涕、眼睑下垂等症状。疼痛通常持续15分钟至3小时，且在一段时间内每天发作一次或多次，然后可能会有数月的缓解期。',
    icon: '😖',
    symptoms: ['眼睛周围剧痛', '单侧头痛', '流泪', '鼻塞', '眼睑下垂'],
    triggers: ['酒精', '强烈气味', '高海拔', '睡眠模式改变'],
    treatments: [
      { id: '6', name: '氧气吸入', type: '急性治疗', rating: 4.5 },
      { id: '7', name: '舒马曲坦注射', type: '药物', rating: 4.3 },
      { id: '8', name: '大枕神经阻滞', type: '介入治疗', rating: 3.9 }
    ],
    medications: [
      { id: '9', name: '维拉帕米', category: '预防药物', rating: 4.0 },
      { id: '10', name: '锂盐', category: '预防药物', rating: 3.8 },
      { id: '11', name: '甲强龙', category: '短期预防', rating: 4.1 }
    ]
  },
  // 其他头痛类型数据...
];

// 模拟评论数据
const comments = [
  {
    id: '1',
    author: '用户A',
    content: '我经常遭受偏头痛困扰，尝试了很多方法。最近开始尝试定期锻炼和改善睡眠习惯，感觉有所改善。',
    date: '2025-04-10',
    rating: 4
  },
  {
    id: '2',
    author: '用户B',
    content: '我发现避免某些食物触发因素（如巧克力和红酒）后，偏头痛发作频率明显降低。',
    date: '2025-04-05',
    rating: 5
  },
  {
    id: '3',
    author: '用户C',
    content: '舒马曲坦对我的偏头痛很有效，但我更希望找到一些非药物的预防方法。',
    date: '2025-03-28',
    rating: 3
  }
];

export default function HeadacheTypeDetail({ params }: { params: { id: string } }) {
  const headacheType = headacheTypes.find(type => type.id === params.id);
  
  if (!headacheType) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">未找到头痛类型</h1>
          <p className="mb-8">抱歉，您查找的头痛类型不存在。</p>
          <Button variant="primary">
            <Link href="/headache-types">返回头痛类型列表</Link>
          </Button>
        </div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 头部区域 */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">{headacheType.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold">{headacheType.title}</h1>
          </div>
          <p className="text-xl max-w-3xl">{headacheType.description}</p>
        </div>
      </section>
      
      {/* 症状和触发因素 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>常见症状</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {headacheType.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    {symptom}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="h-full">
            <CardHeader>
              <CardTitle>常见触发因素</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {headacheType.triggers.map((trigger, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-cyan-500 mr-2">•</span>
                    {trigger}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* 推荐治疗方法 */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">推荐治疗方法</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {headacheType.treatments.map((treatment) => (
              <Card key={treatment.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{treatment.name}</CardTitle>
                    <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {treatment.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Rating value={treatment.rating} readOnly />
                    <span className="ml-2 text-gray-500">{treatment.rating.toFixed(1)}</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="secondary" size="sm">
                      <Link href={`/treatments/${treatment.id}`}>查看详情</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="primary">
              <Link href="/treatments">查看所有治疗方法</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* 推荐药物 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">推荐药物</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {headacheType.medications.map((medication) => (
              <Card key={medication.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{medication.name}</CardTitle>
                    <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {medication.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Rating value={medication.rating} readOnly />
                    <span className="ml-2 text-gray-500">{medication.rating.toFixed(1)}</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="secondary" size="sm">
                      <Link href={`/medications/${medication.id}`}>查看详情</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="primary">
              <Link href="/medications">查看所有药物</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* 用户评论 */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">用户评论</span>
          </h2>
          <CommentSection 
            comments={comments} 
            onAddComment={(content) => console.log('添加评论:', content)}
          />
        </div>
      </section>
      
      {/* 相关资源 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">相关资源</span>
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <p className="mb-4">
              如果您经常遭受{headacheType.title}困扰，建议咨询医疗专业人士获取个性化的诊断和治疗建议。以下是一些可能有用的资源：
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                中国头痛协会：提供头痛相关的教育和支持
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                国际头痛学会：提供最新的头痛研究和治疗指南
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                头痛日记应用：帮助记录和识别头痛模式和触发因素
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              免责声明：本网站提供的信息仅供参考，不能替代专业医疗建议、诊断或治疗。
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
