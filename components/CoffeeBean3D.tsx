'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Float, ContactShadows, Environment, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import { useLanguage } from '@/context/LanguageContext';

const MAX_TILT = Math.PI / 8;

function BagMesh() {
    const texture = useTexture('/ygf-bag-new.webp');
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const targetX = state.pointer.x * MAX_TILT;
        const targetY = state.pointer.y * MAX_TILT;
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.1);
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.1);
    });

    return (
        <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.6}>
            <mesh ref={meshRef} receiveShadow castShadow>
                <planeGeometry args={[4, 4, 32, 32]} />
                <meshStandardMaterial
                    map={texture}
                    roughness={0.4}
                    metalness={0.6}
                    side={THREE.DoubleSide}
                    transparent={true}
                />
            </mesh>
        </Float>
    );
}

/* This component lives INSIDE <Canvas> so R3F hooks work */
function InCanvasLoader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-black/60 backdrop-blur-md border border-white/5 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full border-2 border-[#40916C] border-t-transparent animate-spin" />
                <span className="text-[#40916C]/70 text-xs tracking-widest uppercase">
                    Loading 3D Experience {progress.toFixed(0)}%
                </span>
            </div>
        </Html>
    );
}

export default function CoffeeBean3D() {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="relative w-full min-h-[80vh] bg-[#FAF8F4] flex items-center justify-center overflow-hidden py-12 lg:py-24 border-t border-stone-200">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FAF8F4]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#2D6A4F]/8 blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* 3D Viewer Canvas */}
                <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 group cursor-grab active:cursor-grabbing">

                    {/* Hover instructions */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 text-xs text-stone-600 z-10 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                        <span className="w-2 h-2 rounded-full bg-[#40916C] animate-pulse" />
                        {t('3D_INTERACT_PROMPT')}
                    </div>

                    <Canvas
                        shadows={{ type: THREE.PCFShadowMap }}
                        camera={{ position: [0, 0, 6], fov: 45 }}
                        dpr={isMobile ? [1, 1.5] : [1, 2]}
                        gl={{ antialias: true, alpha: true }}
                    >
                        <ambientLight intensity={1.4} />
                        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />
                        <spotLight position={[-10, 10, -10]} angle={0.2} penumbra={1} intensity={1} color="#ffffff" />
                        <pointLight position={[0, -5, 5]} intensity={0.8} />

                        <Suspense fallback={<InCanvasLoader />}>
                            <BagMesh />
                        </Suspense>

                        <ContactShadows position={[0, -2.5, 0]} opacity={0.15} scale={10} blur={3} far={4} color="#555555" />
                        <Environment preset="city" />
                    </Canvas>
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-start text-left lg:pl-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 text-[#40916C] text-xs font-medium uppercase tracking-wider mb-6">
                        {t('PACKAGING_LABEL')}
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-800 mb-6 leading-tight">
                        {t('PACKAGING_TITLE')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52B788] via-[#40916C] to-[#2D6A4F]">
                            {t('PACKAGING_TITLE_HIGHLIGHT')}
                        </span>
                    </h2>
                    <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                        {t('PACKAGING_DESC')}
                    </p>

                    <ul className="space-y-4 mb-10">
                        {[
                            t('PACKAGING_FEAT_1'),
                            t('PACKAGING_FEAT_2'),
                            t('PACKAGING_FEAT_3'),
                            t('PACKAGING_FEAT_4')
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-stone-700">
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#2D6A4F]/10 border border-[#2D6A4F]/30">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#40916C]" />
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="px-8 py-4 bg-[#2D6A4F] hover:bg-[#40916C] text-white font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(45,106,79,0.3)]">
                        {t('PACKAGING_CTA')}
                    </button>
                </div>
            </div>
        </section>
    );
}
