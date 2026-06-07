"use client"
import React, { useState, useEffect } from "react";

// Minimalist, precise vector indicators mirroring professional layout schematics
const TermIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="22" width="22" className="text-amber-400">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ScalingIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="22" width="22" className="text-amber-400">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const SecurityIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="22" width="22" className="text-amber-400">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default function TermsOfService() {
    const [isDevMode, setIsDevMode] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    // Maintain unified development context key bindings across the digital showcase ecosystem
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

    const contractualClauses = [
        {
            icon: <TermIcon />,
            title: "01 // Proprietary Architectural Formats",
            caption: "Intellectual Properties & Frameworks",
            content: "All designs, drawings, 3D models, and custom layouts shown on the Dee Oak-line website belong to the company. Visitors are allowed to view these materials for personal reference only. Copying, recreating, or using our designs, layouts, or style elements for other projects without our permission is not allowed."
        },
        {
            icon: <ScalingIcon />,
            title: "02 // User Content Upload Limitations",
            caption: "Telemetry Parameters & File Allocation",
            content: "When you upload files, images, or design plans to our website, you confirm that you own them or have permission to use them. Dee Oak-line may review uploaded content to make sure it works properly with our design systems. We are not responsible for damaged files, incorrect file information, or delays caused by very large uploads."
        },
        {
            icon: <SecurityIcon />,
            title: "03 // Authorized Access & Workspace Breach",
            caption: "Administrative Boundary Protocol",
            content: "Certain website features and settings are only available to authorized team members. Trying to access restricted areas, change system settings, or use unauthorized scripts is not allowed and may be considered a violation of our platform rules. We monitor activity on the platform to help keep our website secure and protect our content."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-900 flex flex-col justify-between relative">
            
            {/* Top Navigation Frame */}
            <nav className="max-w-7xl w-full mx-auto px-8 py-6 flex justify-between items-center border-b border-slate-800/80 relative z-10">
                <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-amber-400 font-bold">
                    <span className="w-6 h-[1px] bg-amber-500"></span>
                    Dee Oak-line
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    System Protocol // TOS-2026
                </div>
            </nav>

            {/* Asymmetric Split Layout Framework */}
            <main className="max-w-7xl w-full mx-auto px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start flex-grow relative z-10">
                
                {/* Left Columns: Dynamic Content Controller Context */}
                <div className="lg:col-span-5 space-y-8 sticky top-12">
                    <div>
                        <span className="text-amber-400 text-xs font-mono uppercase tracking-widest block mb-3">
                            Platform Operational Terms
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4">
                            Terms of <br />Service.
                        </h1>
                        <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
                            Please take a moment to read the guidelines and policies that apply to our designs, digital content, and materials available on our platform.
                        </p>
                    </div>

                    {/* Interactive Clause Index Blocks */}
                    <div className="space-y-3">
                        {contractualClauses.map((clause, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSection(index)}
                                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                                    activeSection === index
                                        ? "bg-slate-800/60 border-amber-500/40 shadow-xl shadow-black/30"
                                        : "bg-slate-800/10 border-slate-800/60 hover:bg-slate-800/30 hover:border-slate-700/60"
                                }`}
                            >
                                <div className={`p-2.5 rounded-lg border transition-colors ${
                                    activeSection === index ? "bg-slate-900 border-amber-500/30" : "bg-slate-900/40 border-slate-800"
                                }`}>
                                    {clause.icon}
                                </div>
                                <div>
                                    <h3 className={`text-sm font-bold tracking-tight transition-colors ${
                                        activeSection === index ? "text-amber-400" : "text-slate-300"
                                    }`}>
                                        {clause.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-mono mt-0.5">{clause.caption}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Columns: High Fidelity Details Viewer */}
                <div className="lg:col-span-7 bg-slate-800/20 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl relative min-h-[380px] flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-slate-600 select-none">
                        PROT-NODE // 00{activeSection + 1}
                    </div>

                    <div className="space-y-6">
                        <div className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">
                            Legal Clause Content Verification
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-100">
                            {contractualClauses[activeSection].title}
                        </h2>
                        <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
                            {contractualClauses[activeSection].content}
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                        <span>Execution Status: Active</span>
                        <span>Dee Oak-line Core Registry</span>
                    </div>
                </div>

            </main>

            {/* Platform System Infrastructure Status Bar */}
            <footer className="max-w-7xl w-full mx-auto px-8 py-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 relative z-10">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isDevMode ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`}></span>
                    <span>System Protocol: Verified // 2026 Core Terms Online</span>
                </div>
                <div className="text-slate-400 font-sans text-sm">
                    By interacting with this network, you submit to verified spatial registry compliance parameters.
                </div>
            </footer>

        </div>
    );
}