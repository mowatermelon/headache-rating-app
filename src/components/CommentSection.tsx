"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Rating } from '@/components/ui/Rating';

interface CommentSectionProps {
  comments: {
    id: string;
    author: string;
    content: string;
    date: string;
    rating?: number;
  }[];
  className?: string;
  onAddComment?: (content: string, rating?: number) => void;
}

const CommentSection = ({
  comments,
  className,
  onAddComment,
}: CommentSectionProps) => {
  const [newComment, setNewComment] = React.useState('');
  const [commentRating, setCommentRating] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setIsSubmitting(true);
      
      // 模拟提交评论的异步操作
      setTimeout(() => {
        onAddComment?.(newComment, commentRating);
        setNewComment('');
        setCommentRating(0);
        setIsSubmitting(false);
        setShowSuccess(true);
        
        // 3秒后隐藏成功消息
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }, 1000);
    }
  };
  
  return (
    <div className={cn('space-y-6', className)}>
      <h3 className="text-xl font-bold">用户评论</h3>
      
      {/* 评论列表 */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">{comment.author}</div>
                <div className="text-sm text-gray-500">{comment.date}</div>
              </div>
              {comment.rating !== undefined && (
                <div className="mb-2">
                  <Rating value={comment.rating} readOnly size="sm" />
                </div>
              )}
              <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
              
              {/* 评论互动按钮 */}
              <div className="mt-3 flex items-center space-x-4">
                <button className="text-sm text-gray-500 hover:text-purple-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  有用 (0)
                </button>
                <button className="text-sm text-gray-500 hover:text-purple-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2" />
                  </svg>
                  没有帮助 (0)
                </button>
                <button className="text-sm text-gray-500 hover:text-purple-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  回复
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">
            暂无评论，成为第一个评论的用户吧！
          </div>
        )}
      </div>
      
      {/* 添加评论表单 */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div>
          <label htmlFor="comment" className="block text-lg font-medium mb-2">
            添加评论
          </label>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">您的评分</label>
            <Rating 
              value={commentRating} 
              onChange={setCommentRating} 
              size="md"
            />
          </div>
          <textarea
            id="comment"
            rows={4}
            className="input-field"
            placeholder="分享您的体验和想法..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </div>
        
        {/* 成功提示 */}
        {showSuccess && (
          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-3 rounded-lg">
            评论提交成功！感谢您的分享。
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            请保持友善和尊重，不要发布违反社区规则的内容。
          </p>
          <Button 
            type="submit" 
            variant="primary"
            disabled={isSubmitting || newComment.trim() === ''}
          >
            {isSubmitting ? '提交中...' : '提交评论'}
          </Button>
        </div>
      </form>
      
      {/* 评论指南 */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-400">
        <h4 className="font-medium mb-2">评论指南：</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>分享您的真实体验和感受</li>
          <li>提供具体的信息，如使用时间、效果和副作用</li>
          <li>尊重他人的观点和体验</li>
          <li>避免使用医疗术语，使用简单易懂的语言</li>
        </ul>
      </div>
    </div>
  );
};

export { CommentSection };
