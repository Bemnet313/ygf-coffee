'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
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
            role: "Head Roaster, Tokyo Speciality",
            location: "Tokyo, Japan"
        },
        {
            quote: t('TESTIMONIAL_Q2'),
            author: "Sarah Jenkins",
            role: "Director of Coffee, Blueprint Roasters",
            location: "London, UK"
        },
        {
            quote: t('TESTIMONIAL_Q3'),
            author: "Markus Weber",
            role: "Founder, Kaffe Fabrik",
            location: "Berlin, Germany"
        },
        {
            quote: t('TESTIMONIAL_Q4'),
            author: "Elena Rodriguez",
            role: "Head Buyer, Tierra Cafe",
            location: "Madrid, Spain"
        }
    ];

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    return (
        <>
            {/* Desktop: Horizontal Scroll */}
            <section ref={targetRef} className="relative h-[200vh] bg-[#FAF8F4] hidden md:block border-t border-stone-200">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 w-full mb-12">
                        <h2 className="text-5xl lg:text-7xl font-playfair font-black text-stone-800 uppercase italic text-center w-full block drop-shadow-md">
                            {t('TESTIMONIALS_TITLE')}<span className="text-[#2D6A4F]">{t('TESTIMONIALS_TITLE_HIGHLIGHT')}</span>
                        </h2>
                    </div>

                    <motion.div style={{ x }} className="flex gap-8 px-8 xl:px-32 w-max">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="w-[350px] lg:w-[450px] bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-md flex flex-col justify-between shrink-0 relative hover:border-[#2D6A4F]/40 transition-colors duration-500 group"
                            >
                                <Quote className="absolute top-6 right-6 lg:top-8 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 text-[#2D6A4F]/30 fill-[#2D6A4F]/10 group-hover:text-[#2D6A4F]/50 group-hover:fill-[#2D6A4F]/20 transition-all duration-500" />

                                <p className="text-xl lg:text-2xl font-[family:var(--font-vintage)] italic font-light leading-relaxed mb-10 text-stone-700 mt-6 relative z-10 group-hover:text-stone-900 transition-colors duration-500">
                                    &quot;{t.quote}&quot;
                                </p>

                                <div className="border-t border-stone-100 pt-6 mt-auto">
                                    <h4 className="font-bold text-lg text-stone-800 font-playfair">{t.author}</h4>
                                    <p className="text-stone-500 text-xs font-sans tracking-wide uppercase mt-1">
                                        {t.role}
                                    </p>
                                    <p className="text-[#2D6A4F] font-bold text-xs tracking-widest uppercase mt-2">
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
                    <h2 className="text-4xl font-playfair font-black text-stone-800 uppercase italic drop-shadow-md">
                        {t('TESTIMONIALS_TITLE')}<span className="text-[#2D6A4F]">{t('TESTIMONIALS_TITLE_HIGHLIGHT')}</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-6 max-w-sm mx-auto">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white border border-stone-200 rounded-2xl p-6 shadow-md relative"
                        >
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-[#2D6A4F]/20 fill-[#2D6A4F]/10" />

                            <p className="text-base font-[family:var(--font-vintage)] italic font-light leading-relaxed mb-6 text-stone-700 mt-2 relative z-10">
                                &quot;{t.quote}&quot;
                            </p>

                            <div className="border-t border-stone-100 pt-4 mt-auto">
                                <h4 className="font-bold text-base text-stone-800 font-playfair">{t.author}</h4>
                                <p className="text-stone-500 text-xs font-sans tracking-wide uppercase mt-1">
                                    {t.role}
                                </p>
                                <p className="text-[#2D6A4F] font-bold text-xs tracking-widest uppercase mt-1">
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
