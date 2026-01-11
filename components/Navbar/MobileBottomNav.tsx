import React from 'react';
import { ViewState } from '../../types';
import { LayoutGrid, User, Briefcase, Mail, Database, Zap } from 'lucide-react';

interface NavItem {
    id: ViewState;
    label: string;
    icon: React.ElementType;
}

interface MobileBottomNavProps {
    currentView: ViewState;
    onNavigate: (view: ViewState) => void;
}

const navItems: NavItem[] = [
    { id: ViewState.HOME, label: 'Home', icon: LayoutGrid },
    { id: ViewState.ABOUT, label: 'About', icon: User },
    { id: ViewState.EXPERIENCE, label: 'Work', icon: Zap },
    { id: ViewState.PROJECTS, label: 'Projects', icon: Briefcase },
    { id: ViewState.RESOURCES, label: 'Tools', icon: Database },
    { id: ViewState.CONTACT, label: 'Contact', icon: Mail },
];

/**
 * Mobile Bottom Tab Bar Navigation
 * Instagram/Twitter-style bottom navigation for mobile devices
 * Much more intuitive than hamburger menus
 */
const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentView, onNavigate }) => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe-bottom">
            {/* Gradient fade above nav */}
            <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            {/* Glass container */}
            <div className="mx-3 mb-3 rounded-2xl overflow-hidden mobile-bottom-nav-glass">
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none noise-texture" />

                <div className="relative flex items-center justify-around px-2 py-2">
                    {navItems.map((item) => {
                        const isActive = currentView === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`relative flex flex-col items-center justify-center 
                  min-w-[52px] py-2 px-2 rounded-xl
                  transition-all duration-300 touch-manipulation
                  ${isActive
                                        ? 'text-green-400'
                                        : 'text-gray-500 active:text-gray-400'
                                    }`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {/* Active background glow */}
                                {isActive && (
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-green-500/20 to-cyan-500/10 animate-fadeIn" />
                                )}

                                {/* Icon container */}
                                <div className={`relative z-10 transition-all duration-300 ${isActive ? 'scale-110 -translate-y-0.5' : ''}`}>
                                    <item.icon
                                        size={22}
                                        strokeWidth={isActive ? 2.5 : 2}
                                        className={isActive ? 'drop-shadow-glow' : ''}
                                    />

                                    {/* Active indicator dot */}
                                    {isActive && (
                                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                                    )}
                                </div>

                                {/* Label */}
                                <span className={`relative z-10 text-[10px] font-medium mt-1 transition-all duration-300
                  ${isActive ? 'text-green-400 opacity-100' : 'opacity-70'}`}>
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default MobileBottomNav;
