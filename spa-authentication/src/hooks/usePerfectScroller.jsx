import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

export const usePerfectScrollbar = (options = {}) => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        if (!scrollContainerRef.current) return;
        const ps = new PerfectScrollbar(scrollContainerRef.current, options);

        const preventScrollPropagation = (e) => {
            const container = scrollContainerRef.current;
            if (!container) return;
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight;
            const clientHeight = container.clientHeight;
            const isAtTop = scrollTop === 0 && e.deltaY < 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight && e.deltaY > 0;
            if (isAtTop || isAtBottom) {
                e.preventDefault();
            }
        };

        const containerElement = scrollContainerRef.current;
        containerElement.addEventListener('wheel', preventScrollPropagation);

        return () => {
            ps.destroy();
            containerElement.removeEventListener('wheel', preventScrollPropagation);
        };
    }, [options]);

    return scrollContainerRef;
};
