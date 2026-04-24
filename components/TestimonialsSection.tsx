'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TestimonialsSection = () => {
    const { t } = useLanguage();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const testimonials = [
        {
            quote: t('TESTIMONIAL_Q1'),
            author: "Hiroshi Tanaka",
            role: "Head Roaster",
            company: "Tokyo Speciality",
            location: "Tokyo, Japan",
            initial: "TS"
        },
        {
            quote: t('TESTIMONIAL_Q2'),
            author: "Sarah Jenkins",
            role: "Director of Coffee",
            company: "Blueprint Roasters",
            location: "London, UK",
            initial: "BR"
        },
        {
            quote: t('TESTIMONIAL_Q3'),
            author: "Markus Weber",
            role: "Founder",
            company: "Kaffe Fabrik",
            location: "Berlin, Germany",
            initial: "KF"
        },
        {
            quote: t('TESTIMONIAL_Q4'),
            author: "Elena Rodriguez",
            role: "Head Buyer",
            company: "Tierra Cafe",
            location: "Madrid, Spain",
            initial: "TC"
        }
    ];

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    return (
        <>
            {/* Desktop: Horizontal Scroll */}
            <section ref={targetRef} className="relative h-[200vh] bg-[#FAF8F4] hidden md:block border-t border-stone-200">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 w-full mb-12">
                        <span className="text-[#D97706] text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block text-center">
                            Global Trust
                        </span>
                        <h2 className="text-5xl lg:text-7xl font-[family:var(--font-vintage)] italic font-black text-stone-800 uppercase text-center w-full block drop-shadow-md">
                            {t('TESTIMONIALS_TITLE')}<span className="text-[#2D6A4F]">{t('TESTIMONIALS_TITLE_HIGHLIGHT')}</span>
                        </h2>
                    </div>

                    <motion.div style={{ x }} className="flex gap-8 px-8 xl:px-32 w-max">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="w-[350px] lg:w-[450px] bg-white border border-stone-100 rounded-xl p-8 lg:p-10 shadow-xl flex flex-col justify-between shrink-0 relative hover:border-[#2D6A4F]/20 transition-all duration-500 group overflow-hidden"
                            >
                                {/* Background Decorative Initial */}
                                <span className="absolute -bottom-10 -right-5 text-[10rem] font-black text-stone-100/40 select-none group-hover:text-[#2D6A4F]/5 transition-colors duration-700">{t.initial}</span>

                                <div className="flex justify-between items-start relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F4] border border-stone-100 flex items-center justify-center text-[#2D6A4F] font-bold shadow-inner">
                                        {t.initial}
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D6A4F]/5 border border-[#2D6A4F]/10">
                                        <CheckCircle2 className="w-3 h-3 text-[#2D6A4F]" />
                                        <span className="text-[9px] font-bold text-[#2D6A4F] uppercase tracking-wider">Verified Partner</span>
                                    </div>
                                </div>

                                <p className="text-xl lg:text-2xl font-[family:var(--font-vintage)] italic font-light leading-relaxed mb-10 text-stone-700 mt-10 relative z-10 group-hover:text-stone-900 transition-colors duration-500">
                                    &quot;{t.quote}&quot;
                                </p>

                                <div className="border-t border-stone-100 pt-6 mt-auto relative z-10">
                                    <h4 className="font-bold text-lg text-stone-800 font-playfair">{t.author}</h4>
                                    <p className="text-stone-500 text-xs font-sans tracking-wide uppercase mt-1">
                                        {t.role}, <span className="text-[#2D6A4F] font-semibold">{t.company}</span>
                                    </p>
                                    <p className="text-stone-400 font-medium text-[10px] tracking-widest uppercase mt-2">
                                        {t.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mobile: Stacked Cards */}
            <section className="md:hidden bg-[#FAF8F4] py-20 px-4 border-t border-stone-200">
                <div className="max-w-sm mx-auto mb-12 text-center">
                    <span className="text-[#D97706] text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">
                        Global Trust
                    </span>
                    <h2 className="text-4xl font-[family:var(--font-vintage)] italic font-black text-stone-800 uppercase drop-shadow-md">
                        {t('TESTIMONIALS_TITLE')}<span className="text-[#2D6A4F]">{t('TESTIMONIALS_TITLE_HIGHLIGHT')}</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-8 max-w-sm mx-auto">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white border border-stone-100 rounded-xl p-8 shadow-xl relative overflow-hidden"
                        >
                             {/* Background Decorative Initial */}
                             <span className="absolute -bottom-8 -right-4 text-8xl font-black text-stone-100/50 select-none">{t.initial}</span>

                             <div className="flex justify-between items-start relative z-10 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-[#FAF8F4] border border-stone-100 flex items-center justify-center text-[#2D6A4F] font-bold shadow-inner text-sm">
                                    {t.initial}
                                </div>
                                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2D6A4F]/5 border border-[#2D6A4F]/10">
                                    <CheckCircle2 className="w-2.5 h-2.5 text-[#2D6A4F]" />
                                    <span className="text-[8px] font-bold text-[#2D6A4F] uppercase tracking-wider">Verified</span>
                                </div>
                            </div>

                            <p className="text-lg font-[family:var(--font-vintage)] italic font-light leading-relaxed mb-8 text-stone-700 relative z-10">
                                &quot;{t.quote}&quot;
                            </p>

                            <div className="border-t border-stone-100 pt-6 mt-auto relative z-10">
                                <h4 className="font-bold text-base text-stone-800 font-playfair">{t.author}</h4>
                                <p className="text-stone-500 text-[11px] font-sans tracking-wide uppercase mt-1">
                                    {t.role}, <span className="text-[#2D6A4F] font-semibold">{t.company}</span>
                                </p>
                                <p className="text-stone-400 font-medium text-[9px] tracking-widest uppercase mt-2">
                                    {t.location}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default TestimonialsSection;
