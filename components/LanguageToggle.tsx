'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const isAmharic = language === 'am';

    return (
        <button
            onClick={() => setLanguage(isAmharic ? 'en' : 'am')}
            className="relative flex items-center w-[72px] h-[30px] rounded-full bg-[#F0EDE6] border border-[#E5E0D8] cursor-pointer transition-all duration-300 hover:border-[#2D6A4F]/40 focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]/30"
            aria-label={`Switch to ${isAmharic ? 'English' : 'Amharic'}`}
        >
            {/* Sliding pill indicator */}
            <motion.div
                className="absolute top-[2px] w-[32px] h-[24px] rounded-full bg-[#2D6A4F] shadow-[0_0_12px_rgba(250,204,21,0.4)]"
                animate={{ left: isAmharic ? 'calc(100% - 34px)' : '2px' }}
                initial={false}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />

            {/* EN label */}
            <span
                className={`relative z-10 flex-1 text-center text-[10px] font-bold tracking-wider transition-colors duration-300 ${!isAmharic ? 'text-white' : 'text-[#8A8A8A]'}
                    }`}
            >
                EN
            </span>

            {/* AM label */}
            <span
                className={`relative z-10 flex-1 text-center text-[11px] font-medium transition-colors duration-300 ${isAmharic ? 'text-white' : 'text-[#8A8A8A]'}
                    }`}
            >
                አማ
            </span>
        </button>
    );
}
