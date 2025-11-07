import React from 'react';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps {
    level?: Level;
    className?: string;
    children: React.ReactNode;
    center?: boolean;
    gradient?: boolean;
}

const sizeMap: Record<Level, string> = {
    1: 'text-6xl sm:text-7xl',
    2: 'text-4xl sm:text-5xl py-6',
    3: 'text-2xl sm:text-3xl py-2',
    4: 'text-xl py-2',
    5: 'text-lg',
    6: 'text-base',
};

const weightMap: Record<Level, string> = {
    1: 'font-extrabold tracking-tight',
    2: 'font-bold tracking-tight',
    3: 'font-semibold',
    4: 'font-semibold',
    5: 'font-medium',
    6: 'font-medium',
};

const Title: React.FC<TitleProps> = ({
    level = 2,
    className = '',
    children,
    center = true,
    gradient,
}) => {
    // Use React.ElementType to avoid JSX type issues with dynamic tags
    const Tag: React.ElementType = `h${level}`;

    // Default gradient for top-level titles if not explicitly set
    const useGradient = typeof gradient === 'boolean' ? gradient : level <= 2;

    const gradientClasses = useGradient
        ? 'bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent'
        : 'text-white';

    const classes = [
        'font-main',
        sizeMap[level],
        weightMap[level],
        center ? 'text-center' : 'text-left',
        gradientClasses,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return React.createElement(Tag, { className: classes }, children);
};

export default Title;
