'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

/* ── Animated counter hook ─────────────────────────────── */
function useCountUp(end: number, duration: number, inView: boolean) {
    const [count, setCount] = useState(0);
    const hasRun = useRef(false);

    useEffect(() => {
        if (!inView || hasRun.current) return;
        hasRun.current = true;

        const startTime = performance.now();
        const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic for a fast-then-slow feel
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [end, duration, inView]);

    return count;
}

/* ── Individual stat card ──────────────────────────────── */
function StatCard({
    endValue,
    suffix,
    label,
    index,
    inView,
}: {
    endValue: number;
    suffix: string;
    label: string;
    index: number;
    inView: boolean;
}) {
    const count = useCountUp(endValue, 2000, inView);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-4"
        >
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0A1A12] font-[family:var(--font-vintage)] mb-2">
                {endValue >= 1000
                    ? `${(count / 1000).toFixed(count >= endValue ? 0 : 1)}k`
                    : count}
                {suffix}
            </span>
            <span className="text-sm md:text-base text-[#0A1A12]/80 font-semibold tracking-widest uppercase">
                {label}
            </span>
        </motion.div>
    );
}

/* ── Main section ──────────────────────────────────────── */
const StatsSection = () => {
    const { t } = useLanguage();
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const stats = [
        { endValue: 15, suffix: '+', label: t('STATS_REGIONS_LABEL') },
        { endValue: 50, suffix: '+', label: t('STATS_STATIONS_LABEL') },
        { endValue: 10000, suffix: '+', label: t('STATS_TONS_LABEL') },
        { endValue: 100, suffix: '%', label: t('STATS_TRACEABLE_LABEL') },
    ];

    return (
        <section ref={ref} className="bg-[#2D6A4F] py-10 md:py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-black/20">
                    {stats.map((stat, i) => (
                        <StatCard
                            key={i}
                            endValue={stat.endValue}
                            suffix={stat.suffix}
                            label={stat.label}
                            index={i}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
