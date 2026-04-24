'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function HeritageSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-32 bg-[#FAF8F4] overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #2D6A4F 1px, transparent 0)`,
                backgroundSize: '48px 48px'
            }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#2D6A4F] uppercase tracking-[0.3em] text-xs font-bold">
                        {t('HERITAGE_LABEL')}
                    </span>
                    <h2 className="text-4xl md:text-5xl text-stone-900 font-playfair font-light mt-4 tracking-tight">
                        {t('HERITAGE_TITLE')}
                    </h2>
                    <div className="w-16 h-[2px] bg-[#2D6A4F]/40 mx-auto mt-6" />
                </motion.div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <p className="text-stone-600 text-lg leading-relaxed font-light">
                            {t('HERITAGE_P1')}
                        </p>
                        <p className="text-stone-600 text-lg leading-relaxed font-light">
                            {t('HERITAGE_P2')}
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="w-12 h-[1px] bg-[#2D6A4F]/30" />
                            <span className="text-[#2D6A4F] text-sm uppercase tracking-[0.2em] font-semibold">
                                Kaffa, Ethiopia
                            </span>
                        </div>
                    </motion.div>

                    {/* Image column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/kaldi-elevated.webp"
                                alt="Kaldi discovering coffee with his goats in Ethiopia"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
                        </div>

                        {/* Floating accent card */}
                        <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-stone-100">
                            <p className="text-[#2D6A4F] font-playfair text-2xl font-semibold">1,000+</p>
                            <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">Years of Heritage</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
