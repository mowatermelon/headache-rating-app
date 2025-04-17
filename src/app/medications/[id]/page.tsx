"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';
import { CommentSection } from '@/components/CommentSection';
import Link from 'next/link';

// 模拟数据 - 药物详情
const medications = [
  {
    id: '1',
    name: '舒马曲坦',
    category: '曲坦类',
    description: '舒马曲坦是一种选择性5-羟色胺受体激动剂，主要用于治疗偏头痛急性发作。它通过收缩扩张的血管并抑制炎症神经肽的释放来缓解头痛。舒马曲坦有多种剂型，包括口服片剂、鼻喷剂和注射剂。',
    rating: 4.2,
    applicableHeadacheTypes: ['偏头痛'],
    sideEffects: ['头晕', '恶心', '疲劳', '胸闷', '喉咙不适', '面部潮红'],
    dosage: '在偏头痛发作开始时尽早服用。口服剂量通常为25-100mg，如果症状持续或复发，可在2小时后重复使用，但24小时内不应超过200mg。',
    precautions: '心血管疾病患者、高血压患者、肝功能不全患者应谨慎使用。不应与其他曲坦类药物或麦角胺类药物同时使用。',
    effectiveness: '约70%的患者在服用后2小时内会感到疼痛显著缓解。',
    interactions: '不应与单胺氧化酶抑制剂(MAOIs)、选择性5-羟色胺再摄取抑制剂(SSRIs)或5-羟色胺去甲肾上腺素再摄取抑制剂(SNRIs)同时使用，可能增加5-羟色胺综合征风险。'
  },
  {
    id: '4',
    name: '布洛芬',
    category: '非甾体抗炎药',
    description: '布洛芬是一种非甾体抗炎药(NSAID)，通过抑制前列腺素的合成来减轻疼痛、炎症和发热。它是一种常见的非处方止痛药，用于轻度至中度头痛，特别是紧张型头痛。',
    rating: 4.0,
    applicableHeadacheTypes: ['紧张型头痛', '偏头痛'],
    sideEffects: ['胃部不适', '消化不良', '轻微头晕', '胃溃疡风险', '肾功能损害风险'],
    dosage: '成人通常剂量为每次200-400mg，每4-6小时一次，每日总剂量不超过1200mg。应与食物一起服用以减少胃部不适。',
    precautions: '胃溃疡、胃肠出血史、肾功能不全、心力衰竭、高血压患者应谨慎使用。长期使用可能增加心血管事件风险。',
    effectiveness: '对轻度至中度头痛通常有效，但对重度偏头痛效果可能有限。',
    interactions: '与阿司匹林、其他NSAIDs、抗凝血药物、皮质类固醇、某些降压药物可能有相互作用。'
  },
  // 其他药物数据...
];

// 模拟用户评论数据
const comments = [
  {
    id: '1',
    author: '用户A',
    content: '舒马曲坦对我的偏头痛非常有效，通常在30分钟内就能感到缓解。唯一的缺点是有时会感到轻微的胸闷，但很快就会消失。',
    date: '2025-04-10',
    rating: 5
  },
  {
    id: '2',
    author: '用户B',
    content: '我使用舒马曲坦已经两年了，效果还不错，但不是每次都有效。有时需要第二剂才能完全缓解头痛。',
    date: '2025-04-05',
    rating: 4
  },
  {
    id: '3',
    author: '用户C',
    content: '对我来说效果一般，而且经常感到恶心和头晕的副作用。我正在寻找其他替代方案。',
    date: '2025-03-28',
    rating: 3
  }
];

export default function MedicationDetail({ params }: { params: { id: string } }) {
  const [userRating, setUserRating] = React.useState<number>(0);
  const medication = medications.find(m => m.id === params.id);
  
  if (!medication) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">未找到药物</h1>
          <p className="mb-8">抱歉，您查找的药物不存在。</p>
          <Button variant="primary">
            <Link href="/medications">返回药物列表</Link>
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium px-2 py-1 bg-white/20 rounded-full mr-3">
                  {medication.category}
                </span>
                <div className="flex items-center">
                  <Rating value={medication.rating} readOnly />
                  <span className="ml-2">{medication.rating.toFixed(1)}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{medication.name}</h1>
              <p className="text-xl max-w-3xl">{medication.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 详细信息 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>用法用量</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{medication.dosage}</p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>注意事项</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{medication.precautions}</p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>有效性</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{medication.effectiveness}</p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>药物相互作用</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{medication.interactions}</p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>适用于</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {medication.applicableHeadacheTypes.map((type, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-purple-500 mr-2">•</span>
                      {type}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>可能的副作用</CardTitle>
              </CardHeader>
              <CardContent>
                {medication.sideEffects.length > 0 ? (
                  <ul className="space-y-2">
                    {medication.sideEffects.map((effect, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-red-500 mr-2">•</span>
                        {effect}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>无已知副作用</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* 用户评分区域 */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">您的评分</span>
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <p className="mb-6 text-center">
              您对{medication.name}的药效满意吗？请分享您的用药体验，帮助其他用户。
            </p>
            <div className="flex flex-col items-center">
              <Rating 
                value={userRating} 
                size="lg" 
                onChange={setUserRating} 
                className="mb-6"
              />
              <Button variant="primary" disabled={userRating === 0}>
                提交评分
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 用户评论 */}
      <section className="py-16 px-4">
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
      
      {/* 相关药物 */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">相关药物</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {medications
              .filter(m => m.id !== medication.id && 
                      m.applicableHeadacheTypes.some(type => 
                        medication.applicableHeadacheTypes.includes(type)))
              .slice(0, 3)
              .map((relatedMedication) => (
                <Card key={relatedMedication.id} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{relatedMedication.name}</CardTitle>
                      <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {relatedMedication.category}
                      </span>
                    </div>
                    <CardDescription className="mt-2">
                      {relatedMedication.description.substring(0, 100)}...
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <Rating value={relatedMedication.rating} readOnly />
                      <span className="ml-2 text-gray-500">{relatedMedication.rating.toFixed(1)}</span>
                    </div>
                    <Button variant="secondary" className="w-full">
                      <Link href={`/medications/${relatedMedication.id}`}>查看详情</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
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
