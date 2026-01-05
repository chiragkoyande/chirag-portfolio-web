import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const main = document.querySelector('main');
            if (!main) return;

            const scrollTop = main.scrollTop;
            const scrollHeight = main.scrollHeight - main.clientHeight;
            const progressPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            setProgress(progressPercent);
        };

        const main = document.querySelector('main');
        main?.addEventListener('scroll', handleScroll);
        return () => main?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-14 md:top-16 left-0 w-full h-1 bg-black/50 z-40">
            <div
                className="h-full bg-gradient-to-r from-green-500 via-green-400 to-purple-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
