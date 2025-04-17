"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Button } from '@/components/ui/Button';
import { HeadacheTypeCard } from '@/components/HeadacheTypeCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';
import Link from 'next/link';

// 模拟数据
const headacheTypes = [
  {
    id: '1',
    title: '偏头痛',
    description: '通常表现为一侧头部的搏动性疼痛，可能伴有恶心、呕吐和对光声敏感。',
    icon: '🤕'
  },
  {
    id: '2',
    title: '丛集性头痛',
    description: '剧烈的单侧头痛，常在眼睛周围，持续时间短但疼痛强度大。',
    icon: '😖'
  },
  {
    id: '3',
    title: '紧张型头痛',
    description: '双侧头部的压迫感或紧绷感，通常与压力和肌肉紧张有关。',
    icon: '😣'
  },
  {
    id: '4',
    title: '颈源性头痛',
    description: '由颈部问题引起的头痛，通常从颈部开始并向上蔓延。',
    icon: '🧠'
  }
];

const recentRatings = [
  {
    id: '1',
    type: '药物',
    name: '舒马曲坦',
    rating: 4.5,
    user: '用户123',
    date: '2025-04-15'
  },
  {
    id: '2',
    type: '治疗',
    name: '针灸疗法',
    rating: 3.8,
    user: '用户456',
    date: '2025-04-14'
  },
  {
    id: '3',
    type: '药物',
    name: '布洛芬',
    rating: 4.2,
    user: '用户789',
    date: '2025-04-13'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar transparent />
      
      {/* 英雄区域 */}
      <AnimatedBackground className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
          <span className="gradient-text">头痛评分互动平台</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          探索不同类型的头痛，分享治疗体验，查看药物评分，帮助更多人缓解头痛困扰
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="gradient" size="lg" className="pulsing-element">
            <Link href="/headache-types">探索头痛类型</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/treatments">查看治疗方法</Link>
          </Button>
        </div>
        
        {/* 浮动元素 */}
        <div className="w-full max-w-5xl mt-16 relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 floating-element"></div>
          <div className="absolute top-20 -right-10 w-16 h-16 bg-cyan-500 rounded-full opacity-20 floating-element" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-10 left-1/3 w-24 h-24 bg-pink-500 rounded-full opacity-20 floating-element" style={{ animationDelay: '2s' }}></div>
        </div>
      </AnimatedBackground>
      
      {/* 头痛类型部分 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">常见头痛类型</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {headacheTypes.map((type) => (
              <HeadacheTypeCard
                key={type.id}
                title={type.title}
                description={type.description}
                icon={type.icon}
                onClick={() => console.log(`Navigate to ${type.title}`)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary">
              <Link href="/headache-types">查看全部头痛类型</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* 功能介绍部分 */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">平台功能</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card gradient>
              <CardHeader>
                <CardTitle>治疗方法评分</CardTitle>
                <CardDescription>分享您的治疗体验，帮助他人找到有效方法</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 flex items-center justify-center text-6xl">
                  💊
                </div>
              </CardContent>
            </Card>
            
            <Card gradient>
              <CardHeader>
                <CardTitle>药物效果评价</CardTitle>
                <CardDescription>评价不同药物的效果和副作用，分享用药经验</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 flex items-center justify-center text-6xl">
                  💯
                </div>
              </CardContent>
            </Card>
            
            <Card gradient>
              <CardHeader>
                <CardTitle>用户评论互动</CardTitle>
                <CardDescription>与其他用户交流头痛管理经验，获取建议</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 flex items-center justify-center text-6xl">
                  💬
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* 最新评分部分 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">最新评分</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentRatings.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{item.name}</CardTitle>
                    <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <CardDescription>{item.user} · {item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Rating value={item.rating} readOnly />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary">
              <Link href="/ratings">查看更多评分</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* 号召行动部分 */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">加入我们的头痛评分社区</h2>
          <p className="text-xl mb-8">分享您的经验，帮助他人找到缓解头痛的方法</p>
          <Button variant="primary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link href="/profile">开始评分</Link>
          </Button>
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
