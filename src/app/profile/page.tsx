import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { CommentSection } from '@/components/CommentSection';
import Link from 'next/link';

export default function Profile() {
  // 模拟用户数据
  const user = {
    name: '用户123',
    email: 'user123@example.com',
    avatar: '👤',
    joinDate: '2025-01-15',
    ratings: [
      { id: '1', type: '药物', name: '舒马曲坦', rating: 4.5, date: '2025-04-10' },
      { id: '2', type: '治疗', name: '针灸疗法', rating: 3.8, date: '2025-04-05' },
      { id: '3', type: '药物', name: '布洛芬', rating: 4.0, date: '2025-03-28' }
    ],
    comments: [
      { 
        id: '1', 
        itemType: '药物', 
        itemName: '舒马曲坦', 
        content: '对我的偏头痛非常有效，通常在30分钟内就能感到缓解。', 
        date: '2025-04-10',
        rating: 4.5
      },
      { 
        id: '2', 
        itemType: '治疗', 
        itemName: '针灸疗法', 
        content: '刚开始有点疼，但几次治疗后确实感觉头痛频率降低了。', 
        date: '2025-04-05',
        rating: 3.8
      }
    ]
  };
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 头部区域 */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-5xl">
              {user.avatar}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{user.name}</h1>
              <p className="text-white/80">加入时间：{user.joinDate}</p>
              <p className="text-white/80">{user.email}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 用户评分历史 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="gradient-text">我的评分</span>
          </h2>
          
          {user.ratings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.ratings.map((rating) => (
                <Card key={rating.id} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{rating.name}</CardTitle>
                      <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {rating.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span 
                            key={i} 
                            className={`text-lg ${i < rating.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-500">{rating.rating.toFixed(1)}</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      评分日期：{rating.date}
                    </div>
                    <Button variant="secondary" size="sm" className="w-full">
                      <Link href={`/${rating.type === '药物' ? 'medications' : 'treatments'}/${rating.id}`}>
                        查看详情
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-xl text-gray-500 mb-4">您还没有评分记录</p>
              <Button variant="primary">
                <Link href="/headache-types">开始探索头痛类型</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* 用户评论历史 */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="gradient-text">我的评论</span>
          </h2>
          
          {user.comments.length > 0 ? (
            <div className="space-y-6">
              {user.comments.map((comment) => (
                <Card key={comment.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{comment.itemName}</CardTitle>
                      <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {comment.itemType}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span 
                            key={i} 
                            className={`text-lg ${i < comment.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-500">{comment.rating.toFixed(1)}</span>
                    </div>
                    <p className="mb-3 text-gray-700 dark:text-gray-300">{comment.content}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      评论日期：{comment.date}
                    </div>
                    <div className="flex justify-between">
                      <Button variant="secondary" size="sm">
                        <Link href={`/${comment.itemType === '药物' ? 'medications' : 'treatments'}/${comment.id}`}>
                          查看详情
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                        删除评论
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <p className="text-xl text-gray-500 mb-4">您还没有评论记录</p>
              <Button variant="primary">
                <Link href="/headache-types">开始探索头痛类型</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* 账户设置 */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="gradient-text">账户设置</span>
          </h2>
          
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    用户名
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-field"
                    defaultValue={user.name}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    电子邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    defaultValue={user.email}
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    新密码
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="input-field"
                    placeholder="输入新密码"
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                    确认新密码
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="input-field"
                    placeholder="再次输入新密码"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button variant="primary">
                    保存设置
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
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
