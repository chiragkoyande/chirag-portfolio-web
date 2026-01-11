import { useState, useEffect, useCallback } from 'react';

type ScrollDirection = 'up' | 'down' | null;

interface ScrollState {
    direction: ScrollDirection;
    isAtTop: boolean;
    scrollY: number;
}

/**
 * Hook to detect scroll direction for smart navbar visibility
 * - Scroll down: Hide navbar
 * - Scroll up: Show navbar  
 * - At top: Transparent navbar
 */
export const useScrollDirection = (threshold: number = 10): ScrollState => {
    const [scrollState, setScrollState] = useState<ScrollState>({
        direction: null,
        isAtTop: true,
        scrollY: 0,
    });

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = scrollState.scrollY;

        // Determine direction with threshold to avoid jitter
        let direction: ScrollDirection = scrollState.direction;

        if (currentScrollY > previousScrollY + threshold) {
            direction = 'down';
        } else if (currentScrollY < previousScrollY - threshold) {
            direction = 'up';
        }

        setScrollState({
            direction,
            isAtTop: currentScrollY < 50,
            scrollY: currentScrollY,
        });
    }, [scrollState.scrollY, scrollState.direction, threshold]);

    useEffect(() => {
        // Use passive listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return scrollState;
};

export default useScrollDirection;
