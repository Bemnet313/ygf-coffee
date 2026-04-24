'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Activity, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function LeadToast() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [step, setStep] = useState<1 | 2>(1);
    const [volume, setVolume] = useState<string | null>(null);
    const [contactInfo, setContactInfo] = useState('');
    const [error, setError] = useState('');
    const [isDismissed, setIsDismissed] = useState(true); // Default to true to prevent hydration mismatch, set in useEffect
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem('ygf_toast_dismissed');
        const submitted = localStorage.getItem('ygf_toast_submitted');

        if (!dismissed && !submitted) {
            setIsDismissed(false);
        }

        const handleScroll = () => {
            const valuesSection = document.getElementById('values');
            const contactSection = document.getElementById('contact');

            if (valuesSection) {
                const valuesTop = valuesSection.getBoundingClientRect().top;
                const contactTop = contactSection ? contactSection.getBoundingClientRect().top : Infinity;

                // Show when 'values' section enters the viewport (top is less than 80% of window height)
                // Hide when 'contact' section is about to enter the viewport
                const shouldBeVisible = valuesTop < window.innerHeight * 0.8 && contactTop > window.innerHeight;
                setIsVisible(shouldBeVisible);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDismiss = () => {
        setIsDismissed(true);
        localStorage.setItem('ygf_toast_dismissed', 'true');
    };

    const handleVolumeSelect = (selectedVolume: string) => {
        setVolume(selectedVolume);
        setStep(2);
    };

    const validateContact = (info: string) => {
        // Requires domain.tld for email or 7+ digits for phone
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[0-9\s\-\(\)]{7,}$/;
        return emailRegex.test(info) || phoneRegex.test(info);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const cleanInfo = contactInfo.trim();
        if (!cleanInfo) {
            setError(t('TOAST_ERROR_EMPTY') || 'Please enter your contact info');
            return;
        }

        if (!validateContact(cleanInfo)) {
            setError(t('TOAST_ERROR_INVALID') || 'Please enter a valid email or phone number');
            return;
        }

        // In a real app, you would submit to an API here.
        // For now, we simulate a network request to FormSubmit or similar.

        try {
            await fetch('https://formsubmit.co/ajax/infoYFG@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Lead (Toast) - ${volume} Containers`,
                    Volume: volume,
                    ContactInfo: contactInfo,
                })
            });
        } catch (error) {
            console.error('Error submitting toast form', error);
        }

        setIsSubmitted(true);
        localStorage.setItem('ygf_toast_submitted', 'true');

        // Auto close after 3 seconds
        setTimeout(() => {
            setIsDismissed(true);
        }, 3000);
    };

    // Only render if within scroll bounds and not dismissed
    const shouldShow = isVisible && !isDismissed;

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[420px] z-[100] shadow-2xl"
                >
                    <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-stone-200 p-6 flex flex-col gap-4 shadow-2xl">

                        {/* Close button */}
                        <button
                            onClick={handleDismiss}
                            className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 border border-[#2D6A4F]/30 flex items-center justify-center">
                                        <Activity size={14} className="text-[#2D6A4F]" />
                                    </div>
                                    <div>
                                        <h4 className="text-stone-800 font-playfair font-semibold text-lg leading-tight">
                                            {step === 1 ? t('TOAST_STEP1_TITLE') : t('TOAST_STEP2_TITLE')}
                                        </h4>
                                        <p className="text-stone-500 text-sm mt-0.5">
                                            {step === 1 ? t('TOAST_STEP1_DESC') : `${volume} Containers`}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="grid grid-cols-3 gap-2"
                                            >
                                                {['1-5', '5-10', '10+'].map((vol) => (
                                                    <button
                                                        key={vol}
                                                        onClick={() => handleVolumeSelect(vol)}
                                                        className="py-2 px-1 text-center text-xs font-semibold tracking-wider text-stone-600 bg-stone-50 border border-stone-200 rounded-lg hover:bg-[#2D6A4F]/10 hover:border-[#2D6A4F]/30 hover:text-[#2D6A4F] transition-all"
                                                    >
                                                        {vol}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.form
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                onSubmit={handleSubmit}
                                                className="flex flex-col gap-3"
                                            >
                                                <div className="relative w-full">
                                                    <input
                                                        type="text"
                                                        value={contactInfo}
                                                        onChange={(e) => {
                                                            setContactInfo(e.target.value);
                                                            if (error) setError('');
                                                        }}
                                                        placeholder={t('TOAST_STEP2_PLACEHOLDER')}
                                                        required
                                                        autoFocus
                                                        className={`w-full bg-stone-50 border rounded-lg px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none transition-colors ${error ? 'border-red-500/50 focus:border-red-500' : 'border-stone-200 focus:border-[#2D6A4F]/50'}`}
                                                    />
                                                    <AnimatePresence>
                                                        {error && (
                                                            <motion.p
                                                                initial={{ opacity: 0, y: -5, height: 0 }}
                                                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                                exit={{ opacity: 0, y: -5, height: 0 }}
                                                                className="text-red-400 text-xs mt-2 ml-1"
                                                            >
                                                                {error}
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full flex items-center justify-center gap-2 bg-[#2D6A4F] text-white font-semibold text-sm py-3 rounded-lg hover:bg-[#1B4332] transition-colors"
                                                >
                                                    {t('TOAST_STEP2_BUTTON')}
                                                    <ChevronRight size={16} />
                                                </button>
                                            </motion.form>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-6 text-center gap-4"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#2D6A4F]/10 border border-[#2D6A4F]/30 flex items-center justify-center shadow-[0_0_15px_rgba(45,106,79,0.15)]">
                                    <Send size={22} className="text-[#2D6A4F] ml-1" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-stone-800 font-playfair text-xl">
                                        {t('TOAST_SUCCESS')}
                                    </h4>
                                    <p className="text-stone-500 text-sm">
                                        {t('TOAST_SUCCESS_DESC')}
                                    </p>
                                </div>
                            </motion.div>
                        )}

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
