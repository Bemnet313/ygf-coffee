'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}

export default function MagneticButton({ children, strength = 20, className = '', ...props }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * (strength / 100));
        y.set(middleY * (strength / 100));
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`relative inline-flex items-center justify-center transition-colors ${className}`}
            {...props as any}
        >
            {children}
        </motion.div>
    );
}

export function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.305-.888-.658-1.488-1.47-1.663-1.77-.175-.3-.018-.462.131-.611.135-.133.3-.341.45-.51.152-.168.204-.286.304-.476.102-.191.05-.357-.025-.506-.075-.15-.673-1.62-.922-2.215-.239-.569-.481-.492-.673-.501-.176-.008-.375-.011-.574-.011-.198 0-.523.074-.796.37-.274.296-1.049 1.02-1.049 2.49 0 1.47 1.074 2.89 1.223 3.09.15.195 2.105 3.208 5.1 4.5 2.505 1.082 3.003 1.157 3.551 1.092.65-.078 2.05-1.026 2.353-2.02.298-.994.298-1.84.205-2.02-.093-.18-.344-.283-.646-.432Z" />
            <path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0-8.529 15.228L2 22l4.908-1.393A10 10 0 0 0 22 12Z" />
        </svg>
    );
}
