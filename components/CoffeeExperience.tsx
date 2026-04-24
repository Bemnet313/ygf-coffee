'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const CoffeeExperience = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="YGF Coffee Hero Background"
                    fill
                    sizes="100vw"
                    priority
                    quality={90}
                    className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center -translate-y-10 px-4 w-full h-full">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center max-w-4xl mx-auto w-full text-center"
                >
                    {/* Logo Section */}
                    <div className="relative w-48 md:w-56 lg:w-64 h-auto mb-10 md:mb-14">
                         <Image
                            src="/images/ygf-logo-text.jpeg"
                            alt="YGF Coffee Collective"
                            width={800}
                            height={300}
                            priority
                            className="w-full h-auto object-contain drop-shadow-2xl rounded-sm mix-blend-multiply"
                        />
                    </div>
                    
                    {/* Hero Text */}
                    <h1 className="flex flex-col items-center gap-4 mb-14">
                        <span className="text-4xl md:text-5xl lg:text-6xl text-white font-playfair italic leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            Rooted In Ethiopia
                        </span>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-white/50" />
                            <span className="text-white text-xs md:text-sm lg:text-base font-sans font-semibold tracking-[0.35em] uppercase">
                                Traded Worldwide
                            </span>
                            <div className="w-8 h-[1px] bg-white/50" />
                        </div>
                    </h1>

                    <Link href="/#contact" className="inline-block">
                        <button className="px-10 py-4 bg-transparent border border-white/80 backdrop-blur-sm text-white font-[family:var(--font-vintage)] uppercase tracking-[0.2em] text-sm md:text-base font-semibold hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                            {t('CONTACT_TITLE')}
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
            >
                <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 font-medium drop-shadow-lg">
                    {t('SCROLL_TO_DISCOVER')}
                </div>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-[1px] h-10 bg-gradient-to-b from-white/80 to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default CoffeeExperience;
