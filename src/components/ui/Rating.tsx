"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (value: number) => void;
  readOnly?: boolean;
  className?: string;
}

const Rating = ({
  value,
  max = 5,
  size = 'md',
  onChange,
  readOnly = false,
  className,
}: RatingProps) => {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const handleMouseEnter = (index: number) => {
    if (readOnly) return;
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverValue(null);
  };

  const handleClick = (index: number) => {
    if (readOnly) return;
    onChange?.(index);
  };

  return (
    <div className={cn('flex', className)}>
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        const isFilled = (hoverValue !== null ? hoverValue : value) >= starValue;
        
        return (
          <span
            key={index}
            className={cn(
              sizeClasses[size],
              'cursor-pointer transition-colors duration-200',
              isFilled ? 'text-yellow-500' : 'text-gray-300',
              !readOnly && 'hover:text-yellow-500'
            )}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export { Rating };
