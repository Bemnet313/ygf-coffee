'use client';

import React from 'react';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Logos = [
    { src: '/images/logos/hibret_bank.svg', alt: 'Hibret Bank', width: 140, height: 40 },
    { src: '/images/logos/amole.svg', alt: 'Amole', width: 100, height: 40 },
    { src: '/images/logos/awash_international_bank_no_text.svg', alt: 'Awash International Bank', width: 120, height: 40 },
    { src: '/images/logos/chapa_gradient.svg', alt: 'Chapa', width: 120, height: 40 },
    { src: '/images/logos/nyala_motors.svg', alt: 'Nyala Motors', width: 120, height: 40 },
];

const TrustedBySection = () => {
    const { t } = useLanguage();
    return (
        <section className="bg-[#F9F6F1] py-10 md:py-16 border-y border-black/5 overflow-hidden relative flex flex-col items-center justify-center">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9F6F1] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F6F1] to-transparent z-10 pointer-events-none" />

            {/* Premium text label above logos */}
            <p className="text-[#7C5C3E]/60 text-xs sm:text-sm tracking-[0.3em] font-medium uppercase text-center mb-10 z-20">
                {t('TRUSTED_BY')}
            </p>

            {/* Marquee container */}
            <div className="relative flex overflow-hidden group w-full">
                <div className="marquee-track flex shrink-0 items-center justify-center gap-16 sm:gap-24 md:gap-32 px-8">
                    {[...Logos, ...Logos].map((logo, i) => (
                        <div
                            key={`a-${i}`}
                            className="flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 shrink-0"
                        >
                            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="object-contain" />
                        </div>
                    ))}
                </div>
                <div className="marquee-track flex shrink-0 items-center justify-center gap-16 sm:gap-24 md:gap-32 px-8" aria-hidden="true">
                    {[...Logos, ...Logos].map((logo, i) => (
                        <div
                            key={`b-${i}`}
                            className="flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 shrink-0"
                        >
                            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .marquee-track {
                    animation: marquee 30s linear infinite;
                }
                .group:hover .marquee-track {
                    animation-play-state: paused;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .marquee-track { animation: none; }
                }
            `}</style>
        </section>
    );
};

export default TrustedBySection;
