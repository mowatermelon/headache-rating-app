"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface HeadacheTypeCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
}

const HeadacheTypeCard = ({
  title,
  description,
  icon,
  className,
  onClick,
}: HeadacheTypeCardProps) => {
  return (
    <div 
      className={cn(
        'card p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105',
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mr-4">
            <span className="text-2xl">{icon}</span>
          </div>
        )}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export { HeadacheTypeCard };
