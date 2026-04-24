'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface CoffeeRegion {
    id: string;
    name: string;
    altitude: string;
    notes: string;
    grade?: string;
    role?: string;
    x: number;
    y: number;
    labelAnchor?: 'start' | 'middle' | 'end';
    labelDy?: number;
    labelDx?: number;
}

/* ── Region data ─────────────────────────────────────────────
   Coordinates are placed roughly on their real geographic
   position within the SVG viewBox (0-500). They don't need
   to be GPS-accurate — just recognisably "in the right area". */

const REGIONS: CoffeeRegion[] = [
    {
        id: 'addis',
        name: 'Addis Ababa',
        altitude: '2,355 m',
        notes: 'Central export hub and quality control center.',
        role: 'Headquarters & Cupping Lab',
        x: 202,
        y: 256,
        labelAnchor: 'start',
        labelDx: 10,
        labelDy: 2,
    },
    {
        id: 'harrar',
        name: 'Harrar',
        altitude: '1,500 – 2,100 m',
        notes: 'Blackberry, Cacao, Spice',
        grade: 'Grade 1 Natural',
        x: 302,
        y: 245,
        labelAnchor: 'start',
        labelDx: 10,
        labelDy: 2,
    },
    {
        id: 'sidamo',
        name: 'Sidamo',
        altitude: '1,800 – 2,100 m',
        notes: 'Blueberry, Dark Chocolate, Wine',
        grade: 'Grade 1 Natural',
        x: 191,
        y: 345,
        labelAnchor: 'end',
        labelDx: -10,
        labelDy: 2,
    },
    {
        id: 'yirgacheffe',
        name: 'Yirgacheffe',
        altitude: '1,900 – 2,200 m',
        notes: 'Jasmine, Bergamot, Earl Grey',
        grade: 'Grade 1 Washed',
        x: 186,
        y: 366,
        labelAnchor: 'end',
        labelDx: -10,
        labelDy: 2,
    },
    {
        id: 'guji',
        name: 'Guji',
        altitude: '2,000 – 2,300 m',
        notes: 'Peach, Honey, Vanilla',
        grade: 'Grade 1 Honey',
        x: 227,
        y: 374,
        labelAnchor: 'start',
        labelDx: 10,
        labelDy: 14,
    },
];

export default function SourcingMapSection() {
    const { t } = useLanguage();
    const [activeRegion, setActiveRegion] = useState<CoffeeRegion | null>(null);

    return (
        <section id="origins" className="relative w-full py-16 md:py-24 lg:py-32 bg-[#FAF8F4] border-t border-stone-200 overflow-hidden">
            
            {/* ── Background Image Layer ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/coffee-ceremony.jpg"
                    alt="Coffee Ceremony Background"
                    fill
                    className="object-cover opacity-[0.15] grayscale mix-blend-multiply"
                    priority
                />
                {/* Vignette & Gradient Overlays to blend the image seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4] via-transparent to-[#FAF8F4] opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4] via-transparent to-[#FAF8F4] opacity-80" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#2D6A4F] tracking-widest text-xs uppercase mb-4 block">
                        {t('NAV_ORIGINS') || 'Origins'}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-[0.1em] text-stone-900 font-[family:var(--font-vintage)] italic">
                        Where Our Coffee Grows
                    </h2>
                    <p className="text-stone-500 mt-4 max-w-md mx-auto text-sm tracking-wide">
                        Each region brings a unique character shaped by altitude, soil, and generations of tradition.
                    </p>
                </motion.div>

                {/* Map + Info */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* SVG Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative w-full max-w-lg"
                    >
                        <svg
                            viewBox="0 0 500 500"
                            className="w-full h-auto"
                            aria-label="Map of Ethiopian coffee regions"
                        >
                            <defs>
                                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="rgba(45,106,79,0.06)" />
                                    <stop offset="100%" stopColor="rgba(45,106,79,0)" />
                                </radialGradient>
                                {/* Pin-shaped marker */}
                                <symbol id="pinIcon" viewBox="0 0 24 24" overflow="visible">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                                        fill="currentColor"
                                    />
                                </symbol>
                            </defs>

                            {/* ── Ethiopia outline ────────────────────
                                Recognisable shape: pointed horn to the
                                east, broader west, narrower south-west.
                                Curved Béziers for organic feel. */}
                            <path
                                d="M176.9,30.0 L194.9,47.3 L212.3,38.3 L219.4,46.3 L239.8,46.8 L265.6,62.1 L273.2,75.2 L286.4,87.5 L298.6,109.8 L308.7,122.2 L298.3,139.0 L288.3,156.9 L290.6,167.5 L291.0,179.1 L307.6,179.7 L314.7,177.0 L321.3,183.8 L314.9,197.3 L325.8,218.3 L336.8,236.7 L348.1,250.3 L445.1,295.5 L470.0,295.3 L386.2,409.8 L347.6,411.4 L321.1,438.3 L302.1,439.0 L294.0,451.1 L273.7,451.0 L261.8,438.2 L234.7,454.1 L225.9,470.0 L206.1,467.0 L199.6,462.6 L192.6,463.7 L183.2,463.3 L145.7,430.9 L125.1,430.9 L114.9,418.3 L114.9,396.9 L99.5,390.5 L82.0,349.0 L68.4,340.2 L63.2,324.9 L48.2,306.3 L30.0,303.6 L40.1,281.9 L55.8,281.0 L60.3,269.3 L59.9,235.0 L68.7,195.1 L82.7,184.4 L85.7,168.8 L98.4,139.7 L116.3,120.8 L128.4,83.2 L133.1,50.5 L167.6,58.5 L176.9,30.0 Z"
                                fill="rgba(45,106,79,0.05)"
                                stroke="rgba(45,106,79,0.4)"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />

                            {/* ── Region markers ──────────────────── */}
                            {REGIONS.map((region) => {
                                const isActive = activeRegion?.id === region.id;
                                const isAddis = region.id === 'addis';
                                const pinColor = isAddis ? 'rgba(80,80,80,0.45)' : 'rgba(45,106,79,0.55)';
                                const pinActiveColor = isAddis ? 'rgba(30,30,30,0.85)' : '#2D6A4F';

                                return (
                                    <g
                                        key={region.id}
                                        className="cursor-pointer"
                                        onMouseEnter={() => setActiveRegion(region)}
                                        onClick={() => setActiveRegion(isActive ? null : region)}
                                    >
                                        {/* Outer pulse ring (idle) */}
                                        {!isActive && (
                                            <circle cx={region.x} cy={region.y} r="6" fill="none" stroke={pinColor} strokeWidth="0.5">
                                                <animate attributeName="r" from="6" to="12" dur="3s" repeatCount="indefinite" />
                                                <animate attributeName="opacity" from="0.5" to="0" dur="3s" repeatCount="indefinite" />
                                            </circle>
                                        )}

                                        {/* Active glow */}
                                        {isActive && (
                                            <circle cx={region.x} cy={region.y} r="14" fill={isAddis ? 'rgba(255,255,255,0.04)' : 'rgba(45,106,79,0.06)'} />
                                        )}

                                        {/* SVG Pin icon — small & elegant */}
                                        <use
                                            href="#pinIcon"
                                            x={region.x - 5}
                                            y={region.y - 12}
                                            width="10"
                                            height="12"
                                            color={isActive ? pinActiveColor : pinColor}
                                            className="transition-colors duration-300"
                                        />

                                        {/* Label */}
                                        <text
                                            x={region.x + (region.labelDx || 0)}
                                            y={region.y + (region.labelDy || 0)}
                                            textAnchor={region.labelAnchor || 'middle'}
                                             fill={isActive ? (isAddis ? 'rgba(30,30,30,0.9)' : '#2D6A4F') : 'rgba(80,60,40,0.45)'}
                                            fontSize="9"
                                            letterSpacing="0.15em"
                                            fontFamily="sans-serif"
                                            className="transition-all duration-300 pointer-events-none select-none"
                                            style={{ textTransform: 'uppercase' }}
                                        >
                                            {region.name}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>
                    </motion.div>

                    {/* Info Panel */}
                    <div className="w-full max-w-sm min-h-[260px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {activeRegion ? (
                                <motion.div
                                    key={activeRegion.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                    className="w-full p-8 rounded-2xl border border-stone-200 bg-stone-50 relative overflow-hidden"
                                >
                                    {/* Top accent line */}
                                    <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${activeRegion.id === 'addis'
                                        ? 'from-stone-200/0 via-stone-400/50 to-stone-200/0'
                                        : 'from-[#2D6A4F]/0 via-[#2D6A4F]/40 to-[#2D6A4F]/0'
                                        }`} />

                                    <span className={`${activeRegion.id === 'addis' ? 'text-white/50' : 'text-[#2D6A4F]'} text-xs uppercase tracking-[0.3em] font-bold block mb-2`}>
                                        {activeRegion.id === 'addis' ? 'Operations' : 'Origin'}
                                    </span>
                                    <h3 className="text-3xl text-stone-900 font-[family:var(--font-vintage)] italic tracking-wide mb-6">
                                        {activeRegion.name}
                                    </h3>

                                    <div className="space-y-4">
                                        {(activeRegion.grade || activeRegion.role) && (
                                            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                                                <span className="text-stone-400 text-xs uppercase tracking-widest">
                                                    {activeRegion.id === 'addis' ? 'Role' : 'Grade'}
                                                </span>
                                                <span className={`${activeRegion.id === 'addis' ? 'text-stone-600' : 'text-[#2D6A4F]'} font-light italic text-right pl-4`}>
                                                    {activeRegion.role || activeRegion.grade}
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                                            <span className="text-stone-400 text-xs uppercase tracking-widest">Altitude</span>
                                            <span className="text-stone-700 font-light">{activeRegion.altitude}</span>
                                        </div>
                                        <div className="flex justify-between items-start pt-1">
                                            <span className="text-stone-400 text-xs uppercase tracking-widest mt-1">
                                                {activeRegion.id === 'addis' ? 'Focus' : 'Notes'}
                                            </span>
                                            <span className="text-stone-700 font-light text-right max-w-[65%] leading-relaxed">
                                                {activeRegion.notes}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center w-full max-w-xs mx-auto p-8 rounded-2xl border border-stone-200 bg-stone-50"
                                >
                                    {/* Minimal SVG pin icon */}
                                    <div className="mx-auto mb-6 flex justify-center">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#2D6A4F]/40">
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-stone-700 font-[family:var(--font-vintage)] italic text-xl mb-3">
                                        Discover Our Origins
                                    </h4>
                                    <p className="text-stone-400 text-sm tracking-wide leading-relaxed">
                                        Select a region on the map to explore altitude, tasting notes, and export details.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
