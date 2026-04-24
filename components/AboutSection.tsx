'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
    const { t } = useLanguage();
    return (
        <section id="origins" className="min-h-screen w-full flex items-center justify-center py-16 md:py-32 px-6 border-b border-[#E5E0D8] relative bg-[#F5F2EC] z-10">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="w-16 h-[1px] bg-[#2D6A4F]/40 mb-8" />
                    <h3 className="text-3xl md:text-5xl font-light tracking-[0.1em] text-[#1A1A1A] leading-tight mb-8">
                        <span className="text-[#2D6A4F] font-[family:var(--font-vintage)] italic tracking-widest">{t('ABOUT_HERITAGE')}</span> &<br />{t('ABOUT_EXCELLENCE')}
                    </h3>
                    <p className="text-[#4A4A4A] text-lg font-light leading-loose mb-6 tracking-wide">
                        YGF is a family-run Ethiopian coffee export business, built on <span className="text-[#2D6A4F] font-medium">three generations</span> of knowledge and care. The name comes from our roots — <span className="text-[#2D6A4F] font-medium">Y</span> for <span className="text-[#2D6A4F] font-medium">Yishak</span>, <span className="text-[#2D6A4F] font-medium">Yacob</span>, and <span className="text-[#2D6A4F] font-medium">Yoseph</span>, <span className="text-[#2D6A4F] font-medium">G</span> for their father <span className="text-[#2D6A4F] font-medium">Girum</span>, and <span className="text-[#2D6A4F] font-medium">F</span> for their mother <span className="text-[#2D6A4F] font-medium">Faith</span>. Together, the <span className="text-[#2D6A4F] font-medium">Baleme family</span> brings Ethiopian specialty coffee to the world from our base in <span className="text-[#2D6A4F] font-medium">Addis Ababa</span>.
                    </p>
                    <p className="text-[#4A4A4A] text-lg font-light leading-loose tracking-wide">
                        We source <span className="text-[#2D6A4F] font-medium">Grade 1 through 5</span> green coffee from Ethiopia&apos;s most celebrated regions — <span className="text-[#2D6A4F] font-medium">Yirgacheffe</span>, <span className="text-[#2D6A4F] font-medium">Sidamo</span>, <span className="text-[#2D6A4F] font-medium">Guji</span>, <span className="text-[#2D6A4F] font-medium">Jimma</span>, <span className="text-[#2D6A4F] font-medium">Limu</span>, and <span className="text-[#2D6A4F] font-medium">Harrar</span>. Every lot is hand-selected, carefully processed, and traceable from farm to port. We are here to build lasting partnerships with roasters and importers who value quality, transparency, and a direct line to origin.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative h-[600px] w-full mt-8 md:mt-0"
                >
                    {/* Aesthetic container representing the highlands with generated image placeholder */}
                    <div className="absolute inset-0 rounded-xl border border-[#2D6A4F]/20 overflow-hidden shadow-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/highlands.png"
                            alt="Ethiopian Highlands"
                            className="absolute inset-0 w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-10">
                            <div className="w-full flex justify-between items-end border-t border-white/30 pt-6">
                                <span className="text-[#52B788] tracking-widest text-xs uppercase font-bold">{t('ABOUT_FOUNDED')}</span>
                                <span className="text-white/80 tracking-widest text-xs uppercase font-light">{t('ABOUT_LOCATION')}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
