"use client";
import { useState } from "react";
import { RiArtboardLine, RiHammerLine, RiCompass3Line, RiDoubleQuotesL } from "react-icons/ri";
import { IoMdMail, IoMdCall, IoMdAlert, IoMdCheckmarkCircle } from "react-icons/io";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

// Import the official Firebase SDK blocks
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBS86Xfyjt-wtYPY6Dz5irYYsjFxt-qZ-k",
  authDomain: "dee-oakline-furnitures.firebaseapp.com",
  projectId: "dee-oakline-furnitures",
  storageBucket: "dee-oakline-furnitures.firebasestorage.app",
  messagingSenderId: "878022671749",
  appId: "1:878022671749:web:42ab36412cee4c3f4318ec"
};

// Initialize Firebase safely without creating duplicate instances during Next.js Hot Reloads
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Form Validation Schema definition using Yup
const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required("An email address is strictly required to establish contact.")
        .email("Please provide a structurally valid professional email format.")
});

export default function AboutPage() {
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const initialValues = {
        email: ""
    };

    const handleConsultationSubmission = async (values, { setSubmitting, setStatus, resetForm }) => {
        // Clear out any previous alert status messages
        setStatus(null);
        setSubmissionSuccess(false);

        try {
            // Reference your targeted firestore collection
            const consultationsCollection = collection(db, "consultations");

            // Add document cleanly without handling raw JSON string value wrappers
            await addDoc(consultationsCollection, {
                email: values.email,
                timestamp: serverTimestamp(), // Best practice: Use server-side timestamps over client system clocks
                contextSource: "About Page Portfolio Portal"
            });

            // Set Formik status object with a success flag and custom message
            setStatus({
                success: true,
                message: "Thanks! We'll contact you within 12 business hours."
            });
            
            // Set component level state to trigger banner UI updates
            setSubmissionSuccess(true);
            
            // Clean out text inputs smoothly upon layout success
            resetForm();
        } catch (err) {
            // CRITICAL: Log the error explicitly to the browser inspection tab so you can read what Firestore says
            console.error("Firebase Submission Error Details:", err);

            // Capture runtime exceptions or networking blocks gracefully
            setStatus({
                success: false,
                message: err.message || "We couldn't submit your request. Please check your connection and try again."
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-900">
            
            {/* Artistic Curated Hero Header */}
            <header className="relative py-24 px-4 max-w-7xl mx-auto border-b border-slate-800">
                <div className="absolute top-12 right-4 animate-pulse pointer-events-none opacity-10">
                    <RiArtboardLine size={240} className="text-amber-500" />
                </div>
                
                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-8 h-[1px] bg-amber-500"></span>
                        Our Origin & Philosophy
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6">
                        Building Better <br />Living Spaces.
                    </h1>
                    <p className="text-base md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                        Founded in 2022, Dee Oak-line has grown from a small woodworking workshop into a luxury furniture company. We carefully transform quality raw materials into beautiful, long-lasting furniture and interior pieces designed to enhance any space.
                    </p>
                </div>
            </header>

            {/* Corporate Heritage & Core Values Section */}
            <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-800/60">
                
                {/* Left Side: Creative Narrative */}
                <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
                        Crafting Living Legacies Since 2022
                    </h2>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                        Dee Oak-line was created to bring quality, honesty, and craftsmanship back into interior design. Instead of mass-producing furniture, we focus on careful, detailed woodworking and custom-made pieces. Over the years, we have designed and built furniture for modern offices, kitchens, and homes, combining luxury with simplicity and functionality.
                    </p>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                        Every piece we create is carefully checked to ensure it fits perfectly and works as intended. We also preserve the natural beauty and unique patterns of the wood, allowing each project to have its own character and tell its own story within your space.
                    </p>

                    {/* Fast Stats Row */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                        <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-800 text-center">
                            <span className="block text-xl md:text-2xl font-mono font-bold text-amber-400">2022</span>
                            <span className="text-[10px] uppercase text-slate-500 tracking-wider">Established</span>
                        </div>
                        <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-800 text-center">
                            <span className="block text-xl md:text-2xl font-mono font-bold text-amber-400">100%</span>
                            <span className="text-[10px] uppercase text-slate-500 tracking-wider">Solid Timber</span>
                        </div>
                        <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-800 text-center">
                            <span className="block text-xl md:text-2xl font-mono font-bold text-amber-400">Bespoke</span>
                            <span className="text-[10px] uppercase text-slate-500 tracking-wider">Engineering</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: High Artistic Concept Showcase Image */}
                <div className="lg:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden group border border-slate-800 bg-slate-950 shadow-2xl">
                    <img 
                        src="/CEO.jpg" 
                        alt="Dee Oak-line studio architecture workshop"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-xs font-mono text-amber-400 tracking-widest block mb-1">DESIGN LAB MANIFESTO</span>
                        <p className="text-sm font-light text-slate-300 italic">"Quality materials are not optional; they are essential for building furniture that lasts."</p>
                        <p className="text-lg font-mono text-amber-400 uppercase tracking-widest mt-0.5">~MAZI~</p>
                    </div>
                </div>
            </section>

            {/* Executive Bio Segment: Njoagwuali Destiny Chukwuemeka */}
            <section className="max-w-7xl mx-auto px-4 py-20 border-b border-slate-800/60">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left: CEO Profile Representation (Artistic Asset) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-amber-500/30 bg-slate-950 shadow-xl group">
                            <img 
                                src="/Mazi.jpg" 
                                alt="Njoagwuali Destiny Chukwuemeka (MAZI)"
                                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-102"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 opacity-90"></div>
                            
                            {/* Signature overlay label */}
                            <div className="absolute bottom-5 left-5 right-5">
                                <h3 className="text-lg font-black tracking-wide text-slate-100">N. Destiny Chukwuemeka</h3>
                                <p className="text-lg font-mono text-amber-400 uppercase tracking-widest mt-0.5">MAZI</p>
                            </div>
                        </div>
                        <div className="bg-slate-800/20 border border-slate-800 p-4 rounded-lg flex items-center gap-3 text-xs text-slate-400">
                            <RiCompass3Line size={20} className="text-amber-500 shrink-0" />
                            <span>Guiding all structural design principles and global artisanal expansions at Dee Oak-line.</span>
                        </div>
                    </div>

                    {/* Right: Executive Deep-Dive Biography */}
                    <div className="lg:col-span-8 space-y-8">
                        <div>
                            <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">Executive Profile</div>
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                                The Creative Mind Behind the Design
                            </h2>
                            <p className="text-sm font-mono text-slate-500 mt-1">Founder / CEO & Creative Director</p>
                        </div>

                        {/* Blockquote Segment */}
                        <div className="relative bg-slate-800/40 p-6 rounded-xl border-l-4 border-amber-500 shadow-lg">
                            <RiDoubleQuotesL size={36} className="text-amber-500/20 absolute top-4 left-4 pointer-events-none" />
                            <p className="text-base text-slate-200 font-light leading-relaxed pl-4">
                                "Furniture is an intimate dialogue between human behavior and geometry. At Dee Oak-line, we design structural solutions meant to withstand generational timelines while commanding space elegantly."
                            </p>
                        </div>

                        {/* Biography Narrative text */}
                        <div className="space-y-4 text-sm md:text-base text-slate-400 font-light leading-relaxed">
                            <p>
                                As the CEO and Creative Director of Dee Oak-line, <strong className="text-slate-200 font-semibold">Njoagwuali Destiny Chukwuemeka</strong>—reverently recognized across professional and artistic guilds as <strong className="text-amber-400 font-medium">MAZI</strong>—has steered the Artistic and furniture world. He combines traditional woodworking craftsmanship with modern Scandinavian and industrial design. His style focuses on making furniture and structures look light and simple while keeping them highly practical and functional.
                            </p>
                            <p>
                               Under his leadership, the company has successfully installed architectural woodwork in both offices and homes. He is committed to using only high-quality wood and ensuring every piece is made with exceptional accuracy. This attention to quality and precision is reflected in every product created by the studio.
                            </p>
                            <p>
                                MAZI is actively involved in the day-to-day production and design process, making sure every piece is carefully checked and works perfectly before it is officially recorded and approved.
                            </p>
                        </div>

                        {/* Three Pillars Executive Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="p-5 rounded-lg border border-slate-800 bg-slate-950/40 flex items-start gap-3">
                                <RiHammerLine size={20} className="text-amber-400 mt-0.5 shrink-0" />
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-1">Artisanal Governance</h4>
                                    <p className="text-xs text-slate-500 font-light leading-normal">Direct material evaluation frameworks managed exclusively by our Creative Director to prevent wood grain degradation.</p>
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-slate-800 bg-slate-950/40 flex items-start gap-3">
                                <RiArtboardLine size={20} className="text-amber-400 mt-0.5 shrink-0" />
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-1">Bespoke Scalability</h4>
                                    <p className="text-xs text-slate-500 font-light leading-normal">Custom conceptualization workflows adaptable to broad modular workspaces and residential configurations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Inquiries & Consultations Portal */}
            <section className="max-w-4xl mx-auto px-4 py-24 text-center relative z-10">
                <div className="inline-flex p-3 rounded-full bg-slate-800/60 border border-slate-700/50 text-amber-400 mb-4 shadow-inner">
                    <RiArtboardLine size={24} />
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
                    Commission Custom Concepts
                </h2>
                <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto mb-8">
                    Collaborate directly with MAZI and our senior designing drafting team to structure premium legacy items aligned with your physical space and blueprint.
                </p>

                {/* Form Container */}
                <div className="max-w-md mx-auto space-y-4">
                    {submissionSuccess && (
                        <div className="bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs py-3 px-4 rounded-lg flex items-center gap-2.5 text-left mb-4 shadow-xl animate-fadeIn">
                            <IoMdCheckmarkCircle size={18} className="text-emerald-400 shrink-0" />
                            <span>Strategic secure connection line open. An architect will contact you within 12 business hours.</span>
                        </div>
                    )}

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleConsultationSubmission}
                    >
                        {({ isSubmitting, errors, touched, status }) => (
                            <Form className="space-y-4">
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-slate-950/60 p-2 rounded-lg border border-slate-800 shadow-2xl">
                                    <div className="flex items-center gap-2 pl-2 w-full text-slate-500">
                                        <IoMdMail size={16} className="text-amber-500 shrink-0" />
                                        <Field 
                                            type="text" 
                                            name="email"
                                            placeholder="Enter secure enterprise email address" 
                                            disabled={isSubmitting}
                                            className="w-full bg-transparent border-none text-xs text-slate-200 focus:outline-none placeholder-slate-600 py-1.5 disabled:opacity-50"
                                        />
                                    </div>
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 disabled:bg-amber-700 disabled:cursor-not-allowed text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded whitespace-nowrap transition-colors shadow-lg"
                                    >
                                        {isSubmitting ? "Syncing..." : "Initiate Briefing"}
                                    </button>
                                </div>

                                {/* Formik Input Validation */}
                                {errors.email && touched.email && (
                                    <div className="bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs py-3 px-4 rounded-lg flex items-center gap-2 text-left">
                                        <IoMdAlert size={16} className="text-rose-400 shrink-0" />
                                        <span>{errors.email}</span>
                                    </div>
                                )}

                                {/* Cloud Sync Failure Fallback Messaging */}
                                {status && !status.success && (
                                    <div className="bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs py-3 px-4 rounded-lg flex items-center gap-2 text-left">
                                        <IoMdAlert size={16} className="text-rose-400 shrink-0" />
                                        <span>{status.message}</span>
                                    </div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>

                {/* Secondary Meta details */}
                <div className="mt-8 flex items-center justify-center gap-6 text-lg text-slate-500 font-mono">
                    <span className="flex items-center gap-1"><IoMdCall className="text-slate-600" /> +234 (90) 530 20 238</span>
                    <span className="text-slate-700">|</span>
                    <span>Registry ID: #2022-DEEOAK</span>
                </div>
            </section>
        </div>
    );
}