'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import MagneticButton from './ui/MagneticButton';

const RATE_LIMIT_KEY = 'ygf_form_submissions';
const MAX_SUBMISSIONS = 2;
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

function canSubmit(): boolean {
    if (typeof window === 'undefined') return true;
    try {
        const raw = localStorage.getItem(RATE_LIMIT_KEY);
        if (!raw) return true;
        const timestamps: number[] = JSON.parse(raw);
        const now = Date.now();
        const recent = timestamps.filter((ts) => now - ts < WINDOW_MS);
        return recent.length < MAX_SUBMISSIONS;
    } catch {
        return true;
    }
}

function recordSubmission() {
    if (typeof window === 'undefined') return;
    try {
        const raw = localStorage.getItem(RATE_LIMIT_KEY);
        const timestamps: number[] = raw ? JSON.parse(raw) : [];
        const now = Date.now();
        const recent = timestamps.filter((ts) => now - ts < WINDOW_MS);
        recent.push(now);
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
    } catch {
        // Silent fallback
    }
}

export default function ContactSection() {
    const { t } = useLanguage();
    const [volume, setVolume] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [rateLimited, setRateLimited] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!canSubmit()) {
            setRateLimited(true);
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch('https://formsubmit.co/ajax/infoYFG@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(Object.fromEntries(formData)),
            });
            recordSubmission();
            setSubmitted(true);
            form.reset();
            setVolume('');
        } catch {
            // Silent fallback
        }
    };

    return (
        <section id="contact" className="w-full py-16 md:py-32 px-6 border-b border-black/5 relative bg-[#F5F0E8] z-10 flex flex-col items-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col"
                >
                    <span className="text-stone-500 tracking-widest text-xs uppercase mb-4 block">{t('CONTACT_LABEL')}</span>
                    <h3 className="text-3xl md:text-5xl font-light tracking-[0.1em] text-stone-900 mb-8">{t('CONTACT_HERO_TITLE')}</h3>
                    <p className="text-stone-600 font-light leading-relaxed mb-12">
                        {t('CONTACT_DESC')}
                    </p>

                    <div className="space-y-8 text-sm mt-8 border-t border-stone-300 pt-8">
                        <div>
                            <p className="text-[#2D6A4F] uppercase tracking-widest mb-2 font-bold">{t('CONTACT_HQ')}</p>
                            <p className="text-stone-700 font-light text-lg">{t('CONTACT_HQ_VAL')}</p>
                        </div>
                        <div>
                            <p className="text-[#2D6A4F] uppercase tracking-widest mb-2 font-bold">{t('CONTACT_DIRECT')}</p>
                            <a href="https://wa.me/13122006812" target="_blank" rel="noopener noreferrer" className="text-stone-700 font-light text-lg hover:text-[#2D6A4F] transition-colors">
                                +1 (312) 200-6812
                            </a>
                        </div>
                        <div>
                            <p className="text-[#2D6A4F] uppercase tracking-widest mb-2 font-bold">{t('CONTACT_EMAIL_LABEL')}</p>
                            <a href="mailto:infoYFG@gmail.com" className="text-stone-700 font-light text-lg hover:text-[#2D6A4F] transition-colors">
                                infoYFG@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center h-full gap-6 text-center py-16"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#2D6A4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-2xl text-stone-900 font-light tracking-wide">{t('CONTACT_THANK_YOU')}</h4>
                            <p className="text-stone-500 font-light max-w-sm">{t('CONTACT_THANK_YOU_DESC')}</p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-4 text-[#2D6A4F]/70 text-sm uppercase tracking-widest hover:text-[#2D6A4F] transition-colors"
                            >
                                {t('CONTACT_SUBMIT_ANOTHER')}
                            </button>
                        </motion.div>
                    ) : rateLimited ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center h-full gap-6 text-center py-16"
                        >
                            <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center">
                                <svg className="w-8 h-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl text-stone-900 font-light tracking-wide">{t('CONTACT_RATE_LIMIT')}</h4>
                            <p className="text-stone-500 font-light max-w-sm">{t('CONTACT_RATE_LIMIT_DESC')}</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200 p-8 shadow-sm">
                            {/* Formsubmit.co configuration */}
                            <input type="hidden" name="_subject" value="New Wholesale Inquiry — YGF Coffee" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            {/* Company Name — max 100 chars */}
                            <div className="flex flex-col">
                                <label className="text-stone-500 text-xs uppercase tracking-widest mb-2">{t('CONTACT_FORM_COMPANY')}</label>
                                <input
                                    name="Company"
                                    type="text"
                                    required
                                    maxLength={100}
                                    className="min-h-[44px] bg-white rounded-lg border border-stone-200 px-4 py-3 text-stone-900 font-light outline-none focus:border-[#2D6A4F] transition-colors"
                                    placeholder={t('CONTACT_FORM_COMPANY_PLACEHOLDER')}
                                />
                            </div>

                            {/* Name & Location — max 80 chars each */}
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                    <label className="text-stone-500 text-xs uppercase tracking-widest mb-2">{t('CONTACT_FORM_FIRSTNAME')}</label>
                                    <input
                                        name="Name"
                                        type="text"
                                        required
                                        maxLength={80}
                                        className="min-h-[44px] bg-white rounded-lg border border-stone-200 px-4 py-3 text-stone-900 font-light outline-none focus:border-[#2D6A4F] transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-stone-500 text-xs uppercase tracking-widest mb-2">{t('CONTACT_FORM_LOCATION')}</label>
                                    <input
                                        name="Location"
                                        type="text"
                                        maxLength={100}
                                        className="min-h-[44px] bg-white rounded-lg border border-stone-200 px-4 py-3 text-stone-900 font-light outline-none focus:border-[#2D6A4F] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                    <label className="text-stone-500 text-xs uppercase tracking-widest mb-2">{t('CONTACT_FORM_EMAIL')}</label>
                                    <input
                                        name="Email"
                                        type="email"
                                        required
                                        maxLength={100}
                                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                        title="Please enter a valid email address (e.g. name@domain.com)"
                                        className="min-h-[44px] bg-white rounded-lg border border-stone-200 px-4 py-3 text-stone-900 font-light outline-none focus:border-[#2D6A4F] transition-colors"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-stone-500 text-xs uppercase tracking-widest mb-2">{t('CONTACT_FORM_PHONE')}</label>
                                    <input
                                        name="Phone"
                                        type="tel"
                                        inputMode="tel"
                                        maxLength={20}
                                        pattern="^\+?[0-9\s\-\(\)]{7,20}$"
                                        title="Please enter a valid phone number (e.g. +251 942 123 939)"
                                        className="min-h-[44px] bg-white rounded-lg border border-stone-200 px-4 py-3 text-stone-900 font-light outline-none focus:border-[#2D6A4F] transition-colors"
                                        placeholder={t('CONTACT_FORM_PHONE_PLACEHOLDER')}
                                    />
                                </div>
                            </div>

                            {/* Volume with Custom option */}
                            <div className="flex flex-col">
                                <label className="text-stone-500 text-xs uppercase tracking-widest mb-2">{t('CONTACT_FORM_VOLUME')}</label>
                                <select
                                    name="Volume"
                                    value={volume}
                                    onChange={(e) => setVolume(e.target.value)}
                                    className="min-h-[44px] bg-white rounded-lg border border-stone-200 px-4 py-3 text-stone-900 font-light outline-none focus:border-[#2D6A4F] transition-colors appearance-none"
                                >
                                    <option value="" className="bg-white">{t('CONTACT_FORM_VOLUME_PLACEHOLDER')}</option>
                                    <option value="1-5 Container Loads" className="bg-white">{t('CONTACT_VOLUME_1_5')}</option>
                                    <option value="5-10 Container Loads" className="bg-white">{t('CONTACT_VOLUME_5_10')}</option>
                                    <option value="10+ Container Loads" className="bg-white">{t('CONTACT_VOLUME_10_PLUS')}</option>
                                    <option value="custom" className="bg-white">{t('CONTACT_VOLUME_CUSTOM')}</option>
                                </select>
                            </div>

                            {/* Custom volume input — max 50 chars */}
                            {volume === 'custom' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex flex-col"
                                >
                                    <label className="text-stone-500 text-xs uppercase tracking-widest mb-2">{t('CONTACT_VOLUME_CUSTOM')}</label>
                                    <input
                                        name="Custom Volume"
                                        type="text"
                                        maxLength={50}
                                        className="min-h-[44px] bg-white rounded-lg border border-stone-200 px-4 py-3 text-stone-900 font-light outline-none focus:border-[#2D6A4F] transition-colors"
                                        placeholder={t('CONTACT_VOLUME_CUSTOM_PLACEHOLDER')}
                                    />
                                </motion.div>
                            )}

                            {/* Specifications — max 500 chars */}
                            <div className="flex flex-col">
                                <label className="text-stone-500 text-xs uppercase tracking-widest mb-2">{t('CONTACT_FORM_SPECS')}</label>
                                <textarea
                                    name="Specifications"
                                    rows={3}
                                    maxLength={500}
                                    className="min-h-[44px] bg-white rounded-lg border border-stone-200 px-4 py-3 text-stone-900 font-light outline-none focus:border-[#2D6A4F] transition-colors resize-none"
                                    placeholder={t('CONTACT_FORM_SPECS_PLACEHOLDER')}
                                />
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <MagneticButton className="self-start">
                                    <button type="submit" className="min-h-[44px] min-w-[44px] px-8 py-4 bg-[#2D6A4F] text-white rounded-lg uppercase tracking-widest text-sm hover:bg-[#1B4332] transition-colors duration-300">
                                        {t('CONTACT_FORM_SUBMIT')}
                                    </button>
                                </MagneticButton>
                                <div className="flex items-center gap-2 text-stone-400 text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <span>{t('CONTACT_FORM_TRUST_SECURE')}</span>
                                </div>
                            </div>
                        </form>
                    )}
                </motion.div>

            </div>
        </section>
    );
}
