import React, { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    viewKey: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, viewKey }) => {
    return (
        <div
            key={viewKey}
            className="animate-fadeSlideIn w-full h-full"
        >
            {children}
        </div>
    );
};

export default PageTransition;
