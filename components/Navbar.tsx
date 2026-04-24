'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import MagneticButton from './ui/MagneticButton';

const Navbar = () => {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { nameKey: 'NAV_HOME', href: '/' },
        { nameKey: 'NAV_ABOUT', href: '/#about' },
        { nameKey: 'NAV_ORIGINS', href: '/#origins' },
        { nameKey: 'NAV_CEREMONY', href: '/#ceremony' },
        { nameKey: 'NAV_PRODUCTS', href: '/#products' },
        { nameKey: 'NAV_CONTACT', href: '/#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="sticky top-0 inset-x-0 z-50 bg-[#FAFAF9]/60 backdrop-blur-2xl border-b border-primary/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <Link href="/" className="flex-shrink-0 cursor-pointer">
                            <Image
                                src="/images/ygf-logo.jpeg"
                                alt="YGF Coffee"
                                width={180}
                                height={62}
                                className="h-14 md:h-16 w-auto object-contain drop-shadow-md"
                                priority
                            />
                        </Link>

                        <div className="hidden sm:block">
                            <LanguageToggle />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.nameKey}
                                href={link.href}
                                className="relative group text-foreground/80 hover:text-primary transition-colors duration-500 text-[12px] tracking-[0.15em] uppercase font-bold font-sans"
                            >
                                {t(link.nameKey)}
                                {/* Elegant underline micro-interaction */}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                            </Link>
                        ))}

                        {/* Sticky "Request Sample" CTA Button */}
                        <AnimatePresence>
                            {scrolled && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                >
                                    <Link href="/#contact">
                                        <MagneticButton>
                                            <button className="min-h-[44px] min-w-[44px] px-6 py-2 bg-primary text-white font-serif uppercase tracking-[0.15em] text-[11px] font-bold hover:bg-primary/90 transition-colors duration-500 shadow-[0_0_20px_rgba(6,78,59,0.15)] hover:shadow-[0_0_30px_rgba(6,78,59,0.3)] border border-primary/20">
                                                {t('PRODUCT_SAMPLE') || 'Request Sample'}
                                            </button>
                                        </MagneticButton>
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center space-x-4 md:hidden">
                        <div className="sm:hidden">
                            <LanguageToggle />
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-heading hover:text-primary transition-colors duration-300 focus:outline-none"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-[72px] inset-x-0 bg-background/95 backdrop-blur-xl z-40 md:hidden border-b border-primary/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1 shadow-2xl">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.nameKey}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-3 py-4 text-heading text-center tracking-[0.15em] font-serif uppercase italic text-lg hover:bg-black/5 hover:text-primary transition-colors duration-300"
                                >
                                    {t(link.nameKey)}
                                </Link>
                            ))}
                            {/* Mobile Request Sample CTA */}
                            <div className="pt-4 px-3">
                                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full py-4 bg-primary text-white font-serif uppercase tracking-[0.15em] text-xs font-bold hover:bg-primary/90 transition-colors duration-500">
                                        {t('PRODUCT_SAMPLE') || 'Request Sample'}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
