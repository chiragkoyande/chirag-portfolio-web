import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
            setIsHovering(!!isInteractive);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousemove', handleElementHover);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousemove', handleElementHover);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Hide on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <div
                className={`fixed pointer-events-none z-[200] transition-transform duration-75 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    left: position.x,
                    top: position.y,
                    transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
                }}
            >
                <div className={`w-3 h-3 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] transition-all duration-200 ${isHovering ? 'scale-0' : 'scale-100'}`} />
            </div>

            {/* Outer ring */}
            <div
                className={`fixed pointer-events-none z-[199] transition-all duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    left: position.x,
                    top: position.y,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
                }}
            >
                <div className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${isHovering ? 'border-green-400 bg-green-400/10' : 'border-green-500/30'}`} />
            </div>
        </>
    );
};

export default CustomCursor;
