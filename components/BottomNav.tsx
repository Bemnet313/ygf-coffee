"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Coffee, Map, PhoneCall, ShoppingBag, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
    const { t } = useLanguage();

    const navItems = [
        { icon: Coffee, label: t("NAV_HOME"), href: "#hero" },
        { icon: Info, label: t("NAV_ABOUT"), href: "#about" },
        { icon: Map, label: t("NAV_ORIGINS"), href: "#origins" },
        { icon: ShoppingBag, label: t("NAV_PRODUCTS"), href: "#products" },
        { icon: PhoneCall, label: t("NAV_CONTACT"), href: "#contact" }
    ];

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-[#E5E0D8] pb-safe"
        >
            <nav className="flex items-center justify-around px-2 py-3">
                {navItems.map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        className="flex flex-col items-center justify-center min-h-[44px] min-w-[64px] gap-1 text-[#8A8A8A] hover:text-[#2D6A4F] transition-colors"
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
                    </a>
                ))}
            </nav>
        </motion.div>
    );
}
