'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const team = [
    {
        name: 'Dawit Mekonnen',
        role: 'Founder & CEO',
        initials: 'DM',
        bio: 'A third-generation coffee grower from Sidamo, Dawit founded YGF Global Coffee Collective with a singular vision: to bring the unmatched flavors of Ethiopian coffee directly to the world\'s finest roasters. With over a decade of experience in commodity trading and direct-trade sourcing, he has built a network spanning 15+ origin regions across Ethiopia.',
    },
    {
        name: 'Liya Hailu',
        role: 'Head of Quality & Cupping',
        initials: 'LH',
        bio: 'A certified Q-Grader with an exceptional palate, Liya oversees every lot that leaves our facilities. Her meticulous cupping protocols and uncompromising grading standards ensure that only the highest scoring beans carry the YGF name. She has trained over 40 quality technicians across our partner washing stations.',
    },
    {
        name: 'Samuel Desta',
        role: 'Export & Logistics Director',
        initials: 'SD',
        bio: 'Samuel manages our end-to-end shipping operations, from warehousing in Addis Ababa to port logistics in Djibouti. His expertise in Incoterms, cold-chain management, and international freight coordination ensures every shipment arrives in perfect condition, on time, every time.',
    },
];

export default function AboutPage() {
    return (
        <main className="w-full min-h-screen bg-[#FAF8F4]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 text-center border-b border-stone-200">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-[#2D6A4F] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
                        Our Story
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-stone-800 font-[family:var(--font-vintage)] italic leading-tight mb-8 drop-shadow-sm">
                        The People Behind <br />
                        <span className="text-[#2D6A4F]">the Bean</span>
                    </h1>
                    <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        YGF Global Coffee Collective was founded in 2012 in Addis Ababa with a simple mission: to share the unparalleled taste of Ethiopian specialty coffee with premium roasters across the globe. Every partner, every lot, every cup carries our commitment to heritage, transparency, and excellence.
                    </p>
                </motion.div>
            </section>

            {/* Team Grid */}
            <section className="py-24 px-6 border-b border-stone-100">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#2D6A4F] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
                            Leadership
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light text-stone-800 tracking-[0.1em] font-[family:var(--font-vintage)] italic">
                            Meet Our Team
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="bg-white border border-stone-200 hover:border-[#2D6A4F]/30 rounded-2xl p-8 flex flex-col items-center text-center group transition-colors duration-500 shadow-sm hover:shadow-md"
                            >
                                {/* Initials Avatar */}
                                <div className="w-20 h-20 rounded-full bg-[#2D6A4F]/10 border-2 border-[#2D6A4F]/30 flex items-center justify-center mb-6 group-hover:bg-[#2D6A4F]/20 group-hover:border-[#2D6A4F]/60 transition-all duration-500">
                                    <span className="text-[#2D6A4F] text-xl font-bold font-[family:var(--font-vintage)] tracking-wider">
                                        {member.initials}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-stone-800 mb-1 group-hover:text-[#2D6A4F] transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-[#2D6A4F] text-xs uppercase tracking-[0.2em] font-bold mb-4">
                                    {member.role}
                                </p>
                                <div className="w-8 h-[1px] bg-[#2D6A4F]/30 mb-4" />
                                <p className="text-stone-500 text-sm font-light leading-relaxed">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Strip */}
            <section className="py-16 px-6 bg-[#2D6A4F]">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { value: 'Est. 2012', label: 'Addis Ababa, Ethiopia' },
                        { value: '15+', label: 'Origin Regions Covered' },
                        { value: '10k+', label: 'Tons Exported Annually' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="py-4"
                        >
                            <span className="text-3xl md:text-4xl font-black text-white font-[family:var(--font-vintage)] block mb-2">
                                {stat.value}
                            </span>
                            <span className="text-white/70 text-sm uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
