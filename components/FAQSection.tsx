'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const FAQSection = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: t('FAQ_Q1'),
            answer: t('FAQ_A1'),
        },
        {
            question: t('FAQ_Q2'),
            answer: t('FAQ_A2'),
        },
        {
            question: t('FAQ_Q3'),
            answer: t('FAQ_A3'),
        },
        {
            question: t('FAQ_Q4'),
            answer: t('FAQ_A4'),
        },
    ];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-24 px-6 bg-[#FAF8F4] border-t border-stone-200 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#2D6A4F] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
                        {t('FAQ_LABEL')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light text-stone-900 tracking-[0.1em] font-[family:var(--font-vintage)] italic">
                        {t('FAQ_TITLE')}
                    </h2>
                </motion.div>

                <div className="space-y-4 max-w-3xl mx-auto">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`border rounded-xl overflow-hidden transition-colors duration-500 ${isOpen
                                    ? 'border-[#2D6A4F]/30 bg-white'
                                    : 'border-stone-200 bg-stone-50 hover:border-stone-300'
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between px-6 md:px-8 py-6 text-left group cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className={`text-base md:text-lg font-medium pr-4 transition-colors duration-300 ${isOpen ? 'text-[#2D6A4F]' : 'text-stone-800 group-hover:text-stone-900'
                                            }`}
                                    >
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="shrink-0"
                                    >
                                        <ChevronDown
                                            className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-[#2D6A4F]' : 'text-stone-400'
                                                }`}
                                        />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-8 pb-6 pt-0">
                                                <div className="w-12 h-[1px] bg-[#2D6A4F]/30 mb-4" />
                                                <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-stone-400 text-sm mb-4 font-light">
                        {t('FAQ_CTA_TEXT')}
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block px-8 py-4 border border-[#2D6A4F]/50 text-[#2D6A4F] uppercase tracking-widest text-sm hover:bg-[#2D6A4F] hover:text-white transition-colors duration-500 rounded-full"
                    >
                        {t('FAQ_CTA_BUTTON')}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
