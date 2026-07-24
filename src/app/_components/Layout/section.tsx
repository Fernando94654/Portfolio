import React from 'react';
import Title from '../Title/Title';

// Single source of truth for horizontal gutters and content width. Every section
// and the footer use it, so all content lines up on one vertical axis and stops
// stretching on ultrawide screens.
export const SECTION_CONTAINER =
    'mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12';

interface SectionProps {
    id: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({
    id,
    title,
    children,
    className = '',
}) => {
    return (
        <section
            id={id}
            className={`w-full scroll-mt-2 py-14 sm:py-20 font-code ${className}`}
        >
            <div className={SECTION_CONTAINER}>
                {title && (
                    <Title level={2} className="pt-0 pb-8">
                        {title}
                    </Title>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
