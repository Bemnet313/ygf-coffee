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
            image: '/ygf-bags-optimized.webp',
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
            image: '/ygf-bags-optimized.webp',
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
            image: '/ygf-bags-optimized.webp',
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
            image: '/ygf-bags-optimized.webp',
            heroImage: '/harrar.jpg',
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

            {/* ── Comprehensive Export Grades Banner ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-5xl mx-auto px-4 mt-24 mb-10"
            >
                <div className="relative p-10 md:p-14 rounded-xl border border-[#8B5E34]/30 bg-[#F7F3EE] shadow-2xl overflow-hidden text-center group">
                    
                    {/* Background Highlight: The Bag */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.04] pointer-events-none">
                        <Image
                            src="/ygf-bags-optimized.webp"
                            alt="YGF Coffee Bag Background"
                            fill
                            className="object-contain scale-150 grayscale sepia brightness-50"
                        />
                    </div>

                    {/* Subtle paper/sack texture overlay */}
                    <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

                    {/* Top Pattern Border - More Brownish */}
                    <div className="absolute top-0 left-0 w-full h-3 flex opacity-50">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="flex-1 flex border-b border-r border-[#8B5E34]/30">
                                <div className="w-1/2 h-full bg-[#5C3A21]/20"></div>
                                <div className="w-1/2 h-full bg-[#D97706]/10"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Pattern Border */}
                    <div className="absolute bottom-0 left-0 w-full h-3 flex opacity-50 rotate-180">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="flex-1 flex border-b border-r border-[#8B5E34]/30">
                                <div className="w-1/2 h-full bg-[#5C3A21]/20"></div>
                                <div className="w-1/2 h-full bg-[#D97706]/10"></div>
                            </div>
                        ))}
                    </div>

                    {/* Rich Coffee Brown Glows */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#8B5E34]/[0.1] rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#5C3A21]/[0.08] rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                    
                    <div className="relative z-10">
                        {/* Cultural Icon (Coffee Bean style) */}
                        <div className="mx-auto mb-6 flex justify-center opacity-80">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8B5E34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" />
                                <path d="M12 2c0 10 0 10 0 20" />
                                <path d="M2.5 10.5c5 0 5 3 10 3s5-3 10-3" />
                            </svg>
                        </div>

                        <span className="text-[#8B5E34] text-[10px] uppercase tracking-[0.35em] font-bold mb-4 block">
                            Full Export Capabilities
                        </span>
                        
                        <h4 className="text-3xl md:text-4xl font-[family:var(--font-vintage)] italic text-[#3E2723] mb-6">
                            Comprehensive Grade Range
                        </h4>
                        
                        <div className="w-12 h-px bg-[#8B5E34]/40 mx-auto mb-6" />

                        <p className="text-[#5D4037] text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
                            While we highlight our SCA 90+ micro-lots above, YGF Global Coffee Collective provides a reliable supply of <strong className="text-[#3E2723] font-semibold border-b border-[#8B5E34]/40 pb-0.5">Grades 1 through 4 (Washed & Natural)</strong> across all major Ethiopian regions. We cater to wholesale partners requiring high-volume commercial lots without compromising on traceability and origin integrity.
                        </p>
                        
                        {/* Quick Specs List - More Brownish */}
                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-10 text-[11px] uppercase tracking-widest font-bold text-[#5D4037]">
                            <div className="flex items-center gap-2.5">
                                <div className="w-2.5 h-2.5 rounded-full border border-[#8B5E34]/50 bg-[#8B5E34]/20" />
                                <span>Grade 1 & 2 Specialty</span>
                            </div>
                            <div className="hidden md:block w-px h-4 bg-[#8B5E34]/20" />
                            <div className="flex items-center gap-2.5">
                                <div className="w-2.5 h-2.5 rounded-full border border-[#8B5E34]/50 bg-[#5C3A21]/20" />
                                <span>Grade 3 & 4 Commercial</span>
                            </div>
                            <div className="hidden md:block w-px h-4 bg-[#8B5E34]/20" />
                            <div className="flex items-center gap-2.5">
                                <div className="w-2.5 h-2.5 rounded-full border border-[#8B5E34]/50 bg-[#D97706]/10" />
                                <span>Washed & Natural Process</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
