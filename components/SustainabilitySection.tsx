'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Users2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SustainabilitySection = () => {
    const { t } = useLanguage();

    const values = [
        {
            icon: Leaf,
            title: t('SUSTAINABILITY_S1_TITLE'),
            description: t('SUSTAINABILITY_S1_DESC')
        },
        {
            icon: ShieldCheck,
            title: t('SUSTAINABILITY_S2_TITLE'),
            description: t('SUSTAINABILITY_S2_DESC')
        },
        {
            icon: Users2,
            title: t('SUSTAINABILITY_S3_TITLE'),
            description: t('SUSTAINABILITY_S3_DESC')
        },
        {
            icon: Award,
            title: t('SUSTAINABILITY_S4_TITLE'),
            description: t('SUSTAINABILITY_S4_DESC')
        }
    ];

    return (
        <section id="values" className="bg-[#FAF8F5] py-16 md:py-24 lg:py-32 relative border-t border-[#E5E0D8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#2D6A4F] text-sm uppercase tracking-[0.3em] font-bold mb-4"
                    >
                        {t('SUSTAINABILITY_LABEL')}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] font-[family:var(--font-vintage)] italic"
                    >
                        {t('SUSTAINABILITY_TITLE')}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-24 h-1 bg-[#2D6A4F] mx-auto mt-8 rounded-full"
                    />
                </div>

                <div className="relative">
                    {/* The Connecting Flow Line (Visible mainly on lg screens) */}
                    <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] z-0 h-10 pointer-events-none">
                        <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                            <motion.path 
                                d="M 0,20 C 150,20 200,40 333,40 C 466,40 500,0 666,0 C 833,0 850,20 1000,20" 
                                fill="none" 
                                stroke="#2D6A4F" 
                                strokeWidth="1.5" 
                                strokeDasharray="6 6"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.4 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
                    {values.map((value, idx) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#E5E0D8] hover:border-[#2D6A4F]/40 group transition-colors duration-500 shadow-sm hover:shadow-md"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mb-6 group-hover:bg-[#2D6A4F] transition-colors duration-500">
                                <value.icon className="w-8 h-8 text-[#2D6A4F] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-playfair group-hover:text-[#2D6A4F] transition-colors">{value.title}</h3>
                            <p className="text-[#6B6B6B] text-sm leading-loose tracking-wide">{value.description}</p>
                        </motion.div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;
