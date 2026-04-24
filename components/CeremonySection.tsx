'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const CeremonySection = () => {
    const { t } = useLanguage();
    return (
        <section id="ceremony" className="relative bg-[#FAF8F4] py-16 md:py-24 lg:py-32 overflow-hidden border-t border-[#2D6A4F]/10">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/beans.png')] bg-cover bg-center blend-overlay" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#2D6A4F]/20 group min-h-[520px]"
                    >
                        <Image
                            src="/images/coffee-ceremony.jpg"
                            alt="Ethiopian Coffee Ceremony"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-[center_85%] transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-8 right-8 text-white/90">
                            <p className="font-[family:var(--font-vintage)] text-[#2D6A4F] tracking-[0.2em] uppercase text-sm mb-1 italic">
                                {t('CEREMONY_JEBENA')}
                            </p>
                            <h3 className="text-2xl font-semibold font-playfair drop-shadow-lg">
                                {t('CEREMONY_BLESSING')}
                            </h3>
                        </div>
                    </motion.div>

                    {/* Right: Text Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col space-y-8"
                    >
                        <div>
                            <span className="text-[#2D6A4F] text-sm uppercase tracking-widest font-bold">
                                {t('CEREMONY_LABEL')}
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-800 mt-4 leading-tight font-[family:var(--font-vintage)] italic">
                                {t('CEREMONY_TITLE')}
                            </h2>
                        </div>

                        <div className="prose prose-lg prose-stone text-stone-600 max-w-none">
                            <p className="text-lg leading-relaxed">
                                {t('CEREMONY_P1')}
                            </p>
                            <p className="text-lg leading-relaxed">
                                {t('CEREMONY_P2')}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-4 border-t border-stone-200">
                            <div>
                                <h4 className="text-[#2D6A4F] font-playfair text-xl mb-2 font-bold">{t('CEREMONY_ABOL')}</h4>
                                <p className="text-sm text-stone-500">{t('CEREMONY_ABOL_DESC')}</p>
                            </div>
                            <div>
                                <h4 className="text-[#2D6A4F] font-playfair text-xl mb-2 font-bold">{t('CEREMONY_TONA')}</h4>
                                <p className="text-sm text-stone-500">{t('CEREMONY_TONA_DESC')}</p>
                            </div>
                            <div>
                                <h4 className="text-[#2D6A4F] font-playfair text-xl mb-2 font-bold">{t('CEREMONY_BARAKA')}</h4>
                                <p className="text-sm text-stone-500">{t('CEREMONY_BARAKA_DESC')}</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CeremonySection;
