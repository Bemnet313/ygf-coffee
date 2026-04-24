'use client';

import { motion } from 'framer-motion';

export interface TasteProfile {
    subject: string;
    value: number; // 0–100
}

interface TasteRadarChartProps {
    data: TasteProfile[];
    /** 'dark' for light backgrounds (default), 'light' for dark card backgrounds */
    variant?: 'dark' | 'light';
}

const SIZE = 180;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = 68;

/** Convert polar coords to cartesian */
function polarToXY(angle: number, r: number) {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
        x: CX + r * Math.cos(rad),
        y: CY + r * Math.sin(rad),
    };
}

export default function TasteRadarChart({ data, variant = 'dark' }: TasteRadarChartProps) {
    const count = data.length;
    const angleStep = 360 / count;

    const isLight = variant === 'light';

    // Colors based on variant
    const gridStroke = isLight ? 'rgba(255,255,255,0.12)' : 'rgba(45,106,79,0.15)';
    const axisStroke = isLight ? 'rgba(255,255,255,0.08)' : 'rgba(45,106,79,0.12)';
    const dataFill = isLight ? 'rgba(212,175,55,0.25)' : 'rgba(45,106,79,0.15)';
    const dataStroke = isLight ? 'rgba(212,175,55,0.9)' : 'rgba(45,106,79,0.85)';
    const dotFill = isLight ? '#D4AF37' : '#2D6A4F';
    const labelFill = isLight ? 'rgba(255,255,255,0.55)' : 'rgba(45,106,79,0.65)';

    // Build points for the spider axes grid (3 rings)
    const rings = [0.33, 0.66, 1].map((scale) =>
        data.map((_, i) => {
            const { x, y } = polarToXY(i * angleStep, RADIUS * scale);
            return `${x},${y}`;
        }).join(' ')
    );

    // Build the data polygon
    const dataPoints = data.map((d, i) => {
        const { x, y } = polarToXY(i * angleStep, RADIUS * (d.value / 100));
        return `${x},${y}`;
    }).join(' ');

    // Build axis lines from center to each vertex
    const axisLines = data.map((_, i) => {
        const { x, y } = polarToXY(i * angleStep, RADIUS);
        return { x, y };
    });

    // Label positions (slightly beyond the ring)
    const labels = data.map((d, i) => {
        const { x, y } = polarToXY(i * angleStep, RADIUS + 18);
        return { label: d.subject, x, y, value: d.value };
    });

    return (
        <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            width="100%"
            height={SIZE}
            aria-label="Taste profile chart"
        >
            {/* Grid rings */}
            {rings.map((pts, ri) => (
                <polygon
                    key={ri}
                    points={pts}
                    fill="none"
                    stroke={gridStroke}
                    strokeWidth={1}
                />
            ))}

            {/* Axis spokes */}
            {axisLines.map((pt, i) => (
                <line
                    key={i}
                    x1={CX}
                    y1={CY}
                    x2={pt.x}
                    y2={pt.y}
                    stroke={axisStroke}
                    strokeWidth={1}
                />
            ))}

            {/* Data shape — animated */}
            <motion.polygon
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
                points={dataPoints}
                fill={dataFill}
                stroke={dataStroke}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />

            {/* Data dots — animated */}
            {data.map((d, i) => {
                const { x, y } = polarToXY(i * angleStep, RADIUS * (d.value / 100));
                return (
                    <motion.circle
                        key={i}
                        initial={{ opacity: 0, r: 0 }}
                        whileInView={{ opacity: 1, r: 3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                        cx={x}
                        cy={y}
                        fill={dotFill}
                    />
                );
            })}

            {/* Labels */}
            {labels.map(({ label, x, y }, i) => (
                <text
                    key={i}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={labelFill}
                    fontSize={8}
                    letterSpacing="0.1em"
                    fontFamily="var(--font-sans, sans-serif)"
                >
                    {label.toUpperCase()}
                </text>
            ))}
        </svg>
    );
}
