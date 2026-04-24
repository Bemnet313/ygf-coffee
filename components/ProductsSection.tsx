'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import MagneticButton from './ui/MagneticButton';
import TasteRadarChart, { TasteProfile } from './ui/TasteRadarChart';
import { Leaf, Scale, Sprout, Plane, Star } from 'lucide-react';
import React, { useRef, useState } from 'react';

interface Product {
    region: string;
    grade: string;
    notes: string;
    altitude: string;
    price: string;
    image: string;
    heroImage: string;
    tasteProfile: TasteProfile[];
    scaScore: number;
    processColor: string;
}

/* ── Parallax tilt card wrapper ── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 200, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 200, damping: 30 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={(e) => {
                if (!ref.current) return;
                const { left, top, width, height } = ref.current.getBoundingClientRect();
                mouseX.set((e.clientX - left) / width);
                mouseY.set((e.clientY - top) / height);
            }}
            onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
            style={{ rotateX, rotateY, transformPerspective: 800 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function ProductsSection() {
    const { t } = useLanguage();
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const products: Product[] = [
        {
            region: t('PRODUCT_YIRGACHEFFE'),
            grade: t('PRODUCT_GRADE_WASHED'),
            notes: 'Jasmine, Bergamot, Earl Grey',
            altitude: '1,900 – 2,200 MASL',
            price: '1,450 ETB / kg',
            image: '/yirgacheffe.jpg',
            heroImage: '/images/gallery/washing-station.jpg',
            scaScore: 90,
            processColor: '#3B82F6',
            tasteProfile: [
                { subject: 'Floral', value: 95 },
                { subject: 'Acidity', value: 88 },
                { subject: 'Sweetness', value: 78 },
                { subject: 'Body', value: 60 },
                { subject: 'Fruit', value: 85 },
            ],
        },
        {
            region: t('PRODUCT_SIDAMO'),
            grade: t('PRODUCT_GRADE_NATURAL'),
            notes: 'Blueberry, Dark Chocolate, Wine',
            altitude: '1,800 – 2,100 MASL',
            price: '1,380 ETB / kg',
            image: '/images/beans.png',
            heroImage: '/images/gallery/hand-sorting.png',
            scaScore: 87,
            processColor: '#D97706',
            tasteProfile: [
                { subject: 'Floral', value: 50 },
                { subject: 'Acidity', value: 70 },
                { subject: 'Sweetness', value: 90 },
                { subject: 'Body', value: 85 },
                { subject: 'Fruit', value: 95 },
            ],
        },
        {
            region: t('PRODUCT_GUJI'),
            grade: t('PRODUCT_GRADE_HONEY'),
            notes: 'Peach, Honey, Vanilla',
            altitude: '2,000 – 2,300 MASL',
            price: '1,500 ETB / kg',
            image: '/guji.jpg',
            heroImage: '/images/gallery/highland-mist.png',
            scaScore: 91,
            processColor: '#F59E0B',
            tasteProfile: [
                { subject: 'Floral', value: 70 },
                { subject: 'Acidity', value: 65 },
                { subject: 'Sweetness', value: 92 },
                { subject: 'Body', value: 75 },
                { subject: 'Fruit', value: 80 },
            ],
        },
        {
            region: t('PRODUCT_HARRAR'),
            grade: t('PRODUCT_GRADE_NATURAL'),
            notes: 'Blackberry, Cacao, Spice',
            altitude: '1,500 – 2,100 MASL',
            price: '1,350 ETB / kg',
            image: '/harrar.jpg',
            heroImage: '/images/gallery/cupping.jpg',
            scaScore: 88,
            processColor: '#D97706',
            tasteProfile: [
                { subject: 'Floral', value: 40 },
                { subject: 'Acidity', value: 75 },
                { subject: 'Sweetness', value: 70 },
                { subject: 'Body', value: 95 },
                { subject: 'Fruit', value: 88 },
            ],
        },
    ];

    return (
        <section id="products" className="w-full py-20 md:py-36 relative bg-background z-10">

            {/* ── Section Header ── */}
            <div className="max-w-6xl mx-auto px-6 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-primary tracking-[0.3em] text-[11px] font-bold uppercase mb-5 block">
                        {t('PRODUCTS_LABEL')}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-light tracking-[0.04em] text-heading font-serif italic">
                        {t('PRODUCTS_HERITAGE_TITLE')}
                    </h3>

                    {/* ── Gold foil decorative divider ── */}
                    <div className="flex items-center gap-3 mt-8">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/60" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-accent/70" />
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/60" />
                    </div>
                </motion.div>

                {/* ── Trust Badges ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center items-center gap-3 md:gap-5 mt-10"
                >
                    {[
                        { Icon: Leaf, label: 'Organic Certified' },
                        { Icon: Scale, label: 'Fair Trade' },
                        { Icon: Sprout, label: 'Rainforest Alliance' },
                        { Icon: Plane, label: 'Export Ready' },
                    ].map((badge) => (
                        <motion.div
                            key={badge.label}
                            whileHover={{ y: -2, boxShadow: '0 8px 25px rgba(6,78,59,0.08)' }}
                            className="flex items-center gap-2.5 px-5 py-2.5 border border-primary/10 rounded-full bg-white/60 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors duration-300 hover:border-primary/25"
                        >
                            <badge.Icon className="w-3.5 h-3.5 text-primary" />
                            <span className="text-primary/90 text-[10px] uppercase tracking-[0.15em] font-bold">
                                {badge.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* ── Featured Product (Yirgacheffe) — Full Width Hero ── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-7xl mx-auto px-4 md:px-6 mb-4"
            >
                <div
                    className="group relative w-full overflow-hidden bg-[#1a1a18] cursor-pointer"
                    onMouseEnter={() => setActiveCard(0)}
                    onMouseLeave={() => setActiveCard(null)}
                >
                    {/* Background hero image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={products[0].heroImage}
                            alt={products[0].region}
                            fill
                            sizes="100vw"
                            className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b0e]/90 via-[#0d1b0e]/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b0e]/70 via-transparent to-transparent" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 p-8 md:p-16 lg:p-20">
                        {/* Left: Product Info */}
                        <div className="flex-1 min-w-0">
                            {/* SCA Score badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm mb-6"
                            >
                                <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                                <span className="text-accent text-xs font-bold tracking-[0.15em] uppercase">
                                    SCA {products[0].scaScore}+
                                </span>
                            </motion.div>

                            <h4 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif tracking-[0.06em] mb-3 transition-transform duration-700 group-hover:-translate-y-1">
                                {products[0].region}
                            </h4>

                            {/* Processing method pill */}
                            <div className="flex items-center gap-3 mb-6">
                                <span
                                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] border"
                                    style={{
                                        color: products[0].processColor,
                                        borderColor: `${products[0].processColor}50`,
                                        backgroundColor: `${products[0].processColor}15`,
                                    }}
                                >
                                    {products[0].grade}
                                </span>
                                <span className="text-white/40 text-xs">|</span>
                                <span className="text-white/50 text-xs tracking-widest uppercase">{products[0].altitude}</span>
                            </div>

                            <p className="text-white/70 text-sm md:text-base max-w-md leading-relaxed mb-4 font-light">
                                A legendary lot from the birthplace of coffee. Ethereal florals with sparkling acidity, prized by specialty roasters worldwide.
                            </p>

                            {/* Notes */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {products[0].notes.split(', ').map((note) => (
                                    <span
                                        key={note}
                                        className="px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] font-semibold rounded-full bg-white/8 border border-white/10 text-white/70 backdrop-blur-sm"
                                    >
                                        {note}
                                    </span>
                                ))}
                            </div>

                            {/* CTA with liquid hover */}
                            <MagneticButton className="relative overflow-hidden px-8 py-4 border border-white/25 text-white uppercase tracking-[0.18em] text-[11px] font-bold group/btn hover:border-accent/50 transition-colors duration-500">
                                <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-[#0d1b0e]">
                                    {t('PRODUCT_SAMPLE')}
                                </span>
                                <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                            </MagneticButton>
                        </div>

                        {/* Right: Product Image + Radar Chart */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-6">
                            <TiltCard className="relative w-56 h-56 md:w-72 md:h-72 drop-shadow-2xl">
                                <Image
                                    src={products[0].image}
                                    alt={products[0].region}
                                    fill
                                    sizes="(max-width: 768px) 224px, 288px"
                                    className="object-contain"
                                />
                            </TiltCard>

                            {/* Radar chart */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="w-44 md:w-52"
                            >
                                <p className="text-white/30 font-bold text-[9px] uppercase tracking-[0.25em] text-center mb-1">Taste Profile</p>
                                <TasteRadarChart data={products[0].tasteProfile} variant="light" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ── Remaining Products — 3-Column Grid ── */}
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.slice(1).map((product, index) => (
                        <motion.div
                            key={product.region}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                            className="group relative overflow-hidden bg-[#1a1a18] cursor-pointer"
                            onMouseEnter={() => setActiveCard(index + 1)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Background hero image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={product.heroImage}
                                    alt={product.region}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover opacity-30 group-hover:opacity-45 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b0e]/95 via-[#0d1b0e]/50 to-[#0d1b0e]/30" />
                            </div>

                            <div className="relative z-10 flex flex-col items-center p-8 md:p-10">

                                {/* SCA Score Badge */}
                                <div className="self-start mb-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
                                    <Star className="w-3 h-3 text-accent fill-accent" />
                                    <span className="text-accent text-[10px] font-bold tracking-[0.12em]">
                                        SCA {product.scaScore}+
                                    </span>
                                </div>

                                {/* Product Image with Parallax Tilt */}
                                <TiltCard className="relative w-40 h-40 md:w-48 md:h-48 mb-6 drop-shadow-xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105">
                                    <Image
                                        src={product.image}
                                        alt={product.region}
                                        fill
                                        sizes="(max-width: 768px) 160px, 192px"
                                        className="object-contain"
                                    />
                                </TiltCard>

                                {/* Name + Grade */}
                                <h4 className="text-2xl md:text-3xl text-white font-serif tracking-[0.08em] mb-2 text-center transition-transform duration-700 group-hover:-translate-y-1">
                                    {product.region}
                                </h4>

                                <span
                                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] border mb-5"
                                    style={{
                                        color: product.processColor,
                                        borderColor: `${product.processColor}40`,
                                        backgroundColor: `${product.processColor}12`,
                                    }}
                                >
                                    {product.grade}
                                </span>

                                {/* Radar Chart — reveals on hover */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: activeCard === index + 1 ? 'auto' : 0,
                                        opacity: activeCard === index + 1 ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-full overflow-hidden"
                                >
                                    <div className="w-36 mx-auto mb-4">
                                        <TasteRadarChart data={product.tasteProfile} variant="light" />
                                    </div>
                                </motion.div>

                                {/* Tasting Notes Pills */}
                                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                                    {product.notes.split(', ').map((note) => (
                                        <span
                                            key={note}
                                            className="px-2.5 py-1 text-[9px] uppercase tracking-[0.1em] font-semibold rounded-full bg-white/8 border border-white/10 text-white/60"
                                        >
                                            {note}
                                        </span>
                                    ))}
                                </div>

                                {/* Altitude */}
                                <p className="text-white/35 text-[10px] tracking-widest uppercase mb-6">
                                    {product.altitude}
                                </p>

                                {/* CTA with liquid fill hover */}
                                <MagneticButton className="relative overflow-hidden w-full py-3.5 border border-white/15 text-white uppercase tracking-[0.15em] text-[10px] font-bold group/btn hover:border-accent/40 transition-colors duration-500">
                                    <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-[#0d1b0e]">
                                        {t('PRODUCT_SAMPLE')}
                                    </span>
                                    <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                                </MagneticButton>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
