'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { WhatsAppIcon } from './ui/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="relative overflow-hidden bg-[#0A0A0A] pt-24 pb-12 border-t border-primary/20 z-0">
            {/* Dark gradient mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#064e3b]/20 via-black to-black -z-10 blur-3xl opacity-50 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    <div className="flex flex-col">
                        <div className="mb-4">
                            <Link href="/">
                                <Image
                                    src="/images/ygf-logo.jpeg"
                                    alt="YGF Coffee"
                                    width={200}
                                    height={70}
                                    className="h-16 md:h-20 w-auto object-contain drop-shadow-lg cursor-pointer"
                                />
                            </Link>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed mb-6 font-sans">
                            {t('FOOTER_DESC')}
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://wa.me/13122006812" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 drop-shadow-[0_0_8px_rgba(6,78,59,0.2)] hover:drop-shadow-[0_0_15px_rgba(6,78,59,0.7)]" aria-label="WhatsApp">
                                <WhatsAppIcon className="w-5 h-5 group-hover:fill-current" />
                            </a>
                            <a href="mailto:infoYFG@gmail.com" className="group w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 drop-shadow-[0_0_8px_rgba(6,78,59,0.2)] hover:drop-shadow-[0_0_15px_rgba(6,78,59,0.7)]" aria-label="Email">
                                <Mail className="w-4 h-4 group-hover:fill-current" />
                            </a>
                            <a href="https://www.linkedin.com/in/bemnetmitiku" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 drop-shadow-[0_0_8px_rgba(6,78,59,0.2)] hover:drop-shadow-[0_0_15px_rgba(6,78,59,0.7)]" aria-label="LinkedIn">
                                <Linkedin className="w-4 h-4 group-hover:fill-current" />
                            </a>
                            <a href="https://www.instagram.com/whatsmynamebem_/" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 drop-shadow-[0_0_8px_rgba(6,78,59,0.2)] hover:drop-shadow-[0_0_15px_rgba(6,78,59,0.7)]" aria-label="Instagram">
                                <Instagram className="w-4 h-4 group-hover:fill-current" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-stone-200 font-bold tracking-widest text-sm uppercase mb-6 drop-shadow-md">{t('FOOTER_TRACEABILITY')}</h4>
                        <ul className="space-y-3">
                            <li><Link href="/#ceremony" className="text-stone-400 hover:text-primary transition-colors text-sm font-sans">{t('NAV_CEREMONY')}</Link></li>
                            <li><Link href="/#products" className="text-stone-400 hover:text-primary transition-colors text-sm font-sans">{t('NAV_PRODUCTS')}</Link></li>
                            <li><Link href="/#values" className="text-stone-400 hover:text-primary transition-colors text-sm font-sans">{t('NAV_SUSTAINABILITY')}</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-stone-200 font-bold tracking-widest text-sm uppercase mb-6 drop-shadow-md">{t('FOOTER_SUPPORT')}</h4>
                        <ul className="space-y-3">
                            <li><Link href="/#contact" className="text-stone-400 hover:text-primary transition-colors text-sm font-sans">{t('NAV_CONTACT')}</Link></li>
                            <li><Link href="/#contact" className="text-stone-400 hover:text-primary transition-colors text-sm font-sans">{t('CONTACT_FORM_SUBMIT')}</Link></li>
                            <li><Link href="/about" className="text-stone-400 hover:text-primary transition-colors text-sm font-sans">{t('NAV_ABOUT')}</Link></li>
                            <li><Link href="/faq" className="text-stone-400 hover:text-primary transition-colors text-sm font-sans">{t('FAQ_TITLE')}</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-stone-200 font-bold tracking-widest text-sm uppercase mb-6 drop-shadow-md">{t('FOOTER_NEWSLETTER')}</h4>
                        <p className="text-stone-400 text-sm mb-4 font-sans">
                            {t('FOOTER_NEWSLETTER_DESC')}
                        </p>
                        <form className="flex mt-2 relative group">
                            <input
                                type="email"
                                placeholder={t('FOOTER_EMAIL_PLACEHOLDER')}
                                className="bg-white/5 border border-white/10 px-4 py-4 w-full text-white placeholder:text-white/30 text-[13px] outline-none focus:border-accent focus:bg-white/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-none"
                            />
                            {/* Accent Glow on focus/hover */}
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 ease-out" />
                            <button type="submit" className="bg-primary text-white px-6 py-4 font-bold text-[11px] hover:bg-accent hover:text-[#0A0A0A] transition-colors duration-500 uppercase tracking-[0.15em] shrink-0">
                                {t('FOOTER_JOIN')}
                            </button>
                        </form>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:grid md:grid-cols-3 items-center gap-4 md:gap-0">
                    <p className="text-stone-500 text-xs font-sans text-center md:text-left">
                        &copy; 2025 YGF Global Coffee Collective. {t('FOOTER_RIGHTS')}
                    </p>

                    <div className="flex justify-center items-center w-full order-last md:order-none mt-4 md:mt-0">
                        <a
                            href="#"
                            className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-primary hover:text-white transition-all duration-500 drop-shadow-[0_0_6px_rgba(6,78,59,0.5)]"
                        >
                            {t('FOOTER_MADE_BY')}
                        </a>
                    </div>

                    <div className="flex space-x-4 lg:space-x-6 text-stone-500 text-xs uppercase tracking-widest justify-center md:justify-end">
                        <span className="hover:text-stone-300 transition-colors cursor-pointer">{t('FOOTER_PRIVACY')}</span>
                        <span className="hover:text-stone-300 transition-colors cursor-pointer">{t('FOOTER_TERMS')}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
