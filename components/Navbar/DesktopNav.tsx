import React, { useState, useRef, useEffect } from 'react';
import { ViewState } from '../../types';
import { LayoutGrid, User, Briefcase, Mail, Database, Zap } from 'lucide-react';

interface NavItem {
    id: ViewState;
    label: string;
    icon: React.ElementType;
}

interface DesktopNavProps {
    currentView: ViewState;
    onNavigate: (view: ViewState) => void;
}

const navItems: NavItem[] = [
    { id: ViewState.HOME, label: 'Home', icon: LayoutGrid },
    { id: ViewState.ABOUT, label: 'About', icon: User },
    { id: ViewState.EXPERIENCE, label: 'Experience', icon: Zap },
    { id: ViewState.PROJECTS, label: 'Projects', icon: Briefcase },
    { id: ViewState.RESOURCES, label: 'Resources', icon: Database },
    { id: ViewState.CONTACT, label: 'Contact', icon: Mail },
];

interface PillStyle {
    left: number;
    width: number;
    opacity: number;
}

/**
 * Desktop navigation with sliding pill indicator
 * Features: Animated pill that follows hover/active state
 */
const DesktopNav: React.FC<DesktopNavProps> = ({ currentView, onNavigate }) => {
    const navRef = useRef<HTMLDivElement>(null);
    const [pillStyle, setPillStyle] = useState<PillStyle>({ left: 0, width: 0, opacity: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Update pill position for active item
    useEffect(() => {
        if (!isHovering && navRef.current) {
            const activeButton = navRef.current.querySelector(`[data-view="${currentView}"]`) as HTMLElement;
            if (activeButton) {
                setPillStyle({
                    left: activeButton.offsetLeft,
                    width: activeButton.offsetWidth,
                    opacity: 1,
                });
            }
        }
    }, [currentView, isHovering]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        setIsHovering(true);
        setPillStyle({
            left: target.offsetLeft,
            width: target.offsetWidth,
            opacity: 1,
        });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        // Return to active item
        if (navRef.current) {
            const activeButton = navRef.current.querySelector(`[data-view="${currentView}"]`) as HTMLElement;
            if (activeButton) {
                setPillStyle({
                    left: activeButton.offsetLeft,
                    width: activeButton.offsetWidth,
                    opacity: 1,
                });
            }
        }
    };

    return (
        <div
            ref={navRef}
            className="hidden md:flex items-center gap-1 relative bg-white/5 rounded-full p-2 border border-white/10"
            onMouseLeave={handleMouseLeave}
        >
            {/* Sliding Pill Background */}
            <div
                className="absolute top-2 bottom-2 rounded-full transition-all duration-300 ease-out pointer-events-none"
                style={{
                    left: pillStyle.left,
                    width: pillStyle.width,
                    opacity: pillStyle.opacity,
                    background: isHovering
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(6, 182, 212, 0.15))',
                    boxShadow: !isHovering && currentView
                        ? '0 0 20px rgba(34, 197, 94, 0.2)'
                        : 'none',
                }}
            />

            {/* Nav Items */}
            {navItems.map((item) => (
                <button
                    key={item.id}
                    data-view={item.id}
                    onClick={() => onNavigate(item.id)}
                    onMouseEnter={handleMouseEnter}
                    className={`relative z-10 flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-colors duration-200
            ${currentView === item.id
                            ? 'text-green-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    <item.icon
                        size={16}
                        className={currentView === item.id ? 'animate-pulse' : ''}
                    />
                    <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                        {item.label}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default DesktopNav;
