"use client"
import React, { useState, useEffect } from "react";

// Inline minimalist icon components to eliminate external dependency overhead
const ArtboardIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" className="text-amber-400">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 3v18M3 12h18" />
  </svg>
);

const CompassIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" className="text-amber-400">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const HammerIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" className="text-amber-400">
    <path d="m15 5 4 4M21.5 4.5a2.5 2.5 0 1 1-3.5 3.5L10 16H6v-4l7.5-7.5ZM16 16l-4-4M4 21l-2-2M7.5 13.5 9 15M10.5 10.5l1.5 1.5" />
  </svg>
);

const InnovationIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" className="text-amber-400">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const ArrowIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" className="inline ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function ManifestoLanding() {
    // Sync developer mode shortcut key (Ctrl + Shift + D) if embedded alongside the main gallery
    const [isDevMode, setIsDevMode] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
                e.preventDefault();
                setIsDevMode((prev) => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const pillars = [
        {
            icon: <CompassIcon />,
            title: "I. The Purpose of Space",
            text: "We believe a room is more than just an empty space to fill. It is a place where people live, work, and create memories. At Dee Oak-line, our goal is to bring together great design and comfortable living. Every space we create is designed to make everyday life better through quality craftsmanship, lasting beauty, and thoughtful design."
        },
        {
            icon: <HammerIcon />,
            title: "II. The Standard of Material & Craft",
            text: "We do not follow short-lived design trends. Instead, we focus on timeless materials, and other high-quality woodr. We carefully craft every piece so that the natural beauty of the wood blends perfectly with strong, durable structures in homes and workspaces."
        },
        {
            icon: <InnovationIcon />,
            title: "III. Beautiful Design, Smart Innovation",
            text: "We believe great craftsmanship combines traditional woodworking skills with modern design and technology. That's why we add warm LED lighting to our premium boards designs and use high-quality finishes to create spaces that feel both timeless and modern."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-900 flex flex-col justify-between relative overflow-hidden">
            
            {/* Background Aesthetic Line Elements */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none opacity-5 z-0">
                <ArtboardIcon />
            </div>

            {/* Top Navigation Layout Context */}
            <nav className="max-w-7xl w-full mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-slate-800/50">
                <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-amber-400 font-bold">
                    <span className="w-6 h-[1px] bg-amber-500"></span>
                    Dee Oak-line
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Document Ref // MNF-01
                </div>
            </nav>

            {/* Main Corporate Manifesto Content Arena */}
            <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative z-10 flex-grow flex flex-col justify-center">
                
                {/* Header Context Profile */}
                <div className="mb-12 max-w-3xl">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-4">
                        Corporate Core Philosophy
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-none mb-6">
                        The Dee Oak-line <br />Manifesto.
                    </h1>
                    <div className="h-[2px] w-20 bg-gradient-to-r from-amber-500 to-transparent mb-6"></div>
                    <p className="text-lg md:text-xl text-amber-100/80 font-light italic leading-relaxed">
                        &ldquo;Where Spatial Art Meets Master Craft.&rdquo;
                    </p>
                </div>

                {/* Grid Framework For Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {pillars.map((pillar, idx) => (
                        <div 
                            key={idx} 
                            className="bg-slate-800/30 border border-slate-800 p-6 rounded-xl hover:border-slate-700/80 transition-all duration-300 shadow-xl flex flex-col gap-4"
                        >
                            <div className="w-10 h-10 rounded-lg bg-slate-900/80 flex items-center justify-center border border-slate-700/50">
                                {pillar.icon}
                            </div>
                            <h2 className="text-lg font-bold tracking-tight text-slate-100">
                                {pillar.title}
                            </h2>
                            <p className="text-sm text-slate-400 font-light leading-relaxed">
                                {pillar.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* High Fidelity Statement Blockquote Overlay */}
                <section className="border-l-2 border-amber-500 bg-slate-800/20 p-6 md:p-8 rounded-r-xl max-w-4xl border border-y-slate-800 border-r-slate-800">
                    <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed italic">
                        &ldquo;True luxury is hidden in plain sight. It is found in the weight of a door, the grain match across a seamless credenza, and the absolute illusion of weightlessness in a floating platform. We do not manufacture furniture. We archive permanent spatial art.&rdquo;
                    </p>
                    <span className="block mt-4 text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold">
                        — Section IV. The Curated Archive Registry
                    </span>
                </section>

            </main>

            {/* Footer Workspace Infrastructure Controls Bar */}
            <footer className="max-w-7xl w-full mx-auto px-6 py-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 relative z-10">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isDevMode ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`}></span>
                    <span>System Status: Operational // Premium Catalog Verified</span>
                </div>
                <div className="flex items-center gap-6">
                    <a 
                        href="#gallery" 
                        className="group hover:text-amber-400 transition-colors flex items-center font-sans font-medium"
                    >
                        Explore Curated Collection Archive
                        <ArrowIcon />
                    </a>
                </div>
            </footer>

        </div>
    );
}