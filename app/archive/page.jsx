"use client";
import { RiArtboardLine } from "react-icons/ri";

export default function TermsOfArchive() {
    return (
        <div className="bg-slate-950 text-slate-400 font-sans min-h-screen selection:bg-amber-500/30 selection:text-amber-400">
            
            {/* Header / Navigation Context */}
            <header className="border-b border-slate-900 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3 font-bold text-lg tracking-tight group">
                        <RiArtboardLine className="text-amber-500 text-2xl group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-amber-500">Dee Oak-line</span>
                    </a>
                    <span className="text-xs font-mono text-slate-600 bg-slate-900 px-2.5 py-1 rounded border border-slate-800/60">
                        v1.4.2_release
                    </span>
                </div>
            </header>

            {/* Main Content Container */}
            <main className="max-w-4xl mx-auto px-6 py-16 sm:py-24 space-y-12">
                
                {/* Page Title Node */}
                <div className="space-y-4 border-b border-slate-900 pb-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
                        Legal Framework & Records
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                        Terms of Archive
                    </h1>
                    <p className="text-sm font-light text-slate-500 font-mono">
                        Last Structural Revision: June 2026
                    </p>
                </div>

                {/* Narrative Sections */}
                <div className="space-y-10 text-sm font-light leading-relaxed">
                    
                    {/* Section 1 */}
                    <section className="space-y-3">
                        <h2 className="text-slate-200 text-xs font-bold uppercase tracking-widest font-mono flex items-center gap-2">
                            <span className="text-amber-500">01 /</span> Scope of Architectural Record
                        </h2>
                        <p>
                            The Dee Oak-line website showcases our custom woodwork, design ideas, and project collections. By using our website, viewing our content, or subscribing to our updates, you agree to follow the terms and conditions described here.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-3">
                        <h2 className="text-slate-200 text-xs font-bold uppercase tracking-widest font-mono flex items-center gap-2">
                            <span className="text-amber-500">02 /</span> Intellectual Asset Protection
                        </h2>
                        <p>
                            All designs, photos, drawings, documents, and written content on this website are the property of Dee Oak-line Studio and are protected by intellectual property laws.
                        </p>
                        <blockquote className="border-l-2 border-amber-500/40 bg-slate-900/40 px-4 py-3 rounded text-slate-300 my-4 italic font-sans">
                            "You may not copy, recreate, or use any of our designs for commercial purposes without written permission from Dee Oak-line Studio."
                        </blockquote>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-3">
                        <h2 className="text-slate-200 text-xs font-bold uppercase tracking-widest font-mono flex items-center gap-2">
                            <span className="text-amber-500">03 /</span> Catalog Tracking & Registry data
                        </h2>
                        <p>
                            When you subscribe to our updates, the information you provide is securely stored in our Cloud Firestore database. We use this information to send you catalog updates, new material stories, and information about upcoming collections and design projects.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-3">
                        <h2 className="text-slate-200 text-xs font-bold uppercase tracking-widest font-mono flex items-center gap-2">
                            <span className="text-amber-500">04 /</span> Limitation of Spatial Liability
                        </h2>
                        <p>
                            
                        The custom wood designs and digital renderings shown here are created for inspiration and reference. While we work hard to ensure accuracy, final measurements, materials, and construction details may vary. Every project requires its own planning and engineering based on the specific space and requirements.
    
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-3">
                        <h2 className="text-slate-200 text-xs font-bold uppercase tracking-widest font-mono flex items-center gap-2">
                            <span className="text-amber-500">05 /</span> Changes and Unsubscribing
                        </h2>
                        <p>
                           Dee Oak-line Studio can change, hide, or stop sharing any of our design plans and architectural models whenever we want, without telling the public first. As a subscriber, you have the right to leave our email list at any time by contacting our support team.
                        </p>
                    </section>

                </div>

                {/* Footer Boundary Rule */}
                <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-light text-slate-500 font-mono">
                    <div>
                        <span>&copy; {new Date().getFullYear()} Dee Oak-line Studio. All structural variations reserved.</span>
                    </div>
                   
                </div>

            </main>
        </div>
    );
}