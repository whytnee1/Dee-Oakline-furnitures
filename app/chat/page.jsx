"use client";
import { RiArtboardLine, RiHammerLine, RiMessage3Line, RiWhatsappLine } from "react-icons/ri";
import { IoMdMail, IoMdCall, IoMdAlert, IoMdPerson, IoMdCreate } from "react-icons/io";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

// Import the official Firebase SDK blocks
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your updated active WhatsApp business number
const whatsappNumber = "2349053020238"; 

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBS86Xfyjt-wtYPY6Dz5irYYsjFxt-qZ-k",
  authDomain: "dee-oakline-furnitures.firebaseapp.com",
  projectId: "dee-oakline-furnitures",
  storageBucket: "dee-oakline-furnitures.firebasestorage.app",
  messagingSenderId: "878022671749",
  appId: "1:878022671749:web:42ab36412cee4c3f4318ec"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Validation Schema
const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required("Please identify yourself or your firm."),
    email: yup
        .string()
        .required("A contact email is required.")
        .email("Please input a valid email architecture format."),
    message: yup
        .string()
        .required("Please tell us about your custom space requirements or structural ideas.")
        .min(10, "Your design parameters must be at least 10 characters long.")
});

export default function WhatsAppChatPage() {
    const initialValues = {
        name: "",
        email: "",
        message: ""
    };

    const handleWhatsAppRedirect = async (values, { setSubmitting, setStatus, resetForm }) => {
        setStatus(null);

        try {
            // 1. Concurrent Backup: Store the client lead in Firestore
            const consultationsCollection = collection(db, "consultations");
            await addDoc(consultationsCollection, {
                name: values.name,
                email: values.email,
                message: values.message,
                timestamp: serverTimestamp(),
                contextSource: "Premium WhatsApp Desk"
            });

            // 2. Format a highly polished WhatsApp text manifest
            const formattedText = `*DEE OAK-LINE | DESIGN CONSULTATION*\n\n` +
                                  `• *Principal Contact:* ${values.name}\n` +
                                  `• *Digital Correspondence:* ${values.email}\n\n` +
                                  `*Project Brief / Spatial Request:* \n"${values.message}"`;
            
            const encodedText = encodeURIComponent(formattedText);
            
            // Clean up the string to ensure only numerical digits are passed to the URL API
            const cleanNumber = whatsappNumber.replace(/\D/g, "");
            
            // Dynamic web fallback link structures for both cross-platform desktop and native apps
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedText}`;

            setStatus({
                success: true,
                message: "A secure digital record was minted. Establishing a live connection to our design desk via WhatsApp..."
            });

            resetForm();

            // 3. Command immediate redirection safely in client runtime
            if (typeof window !== "undefined") {
                window.location.href = whatsappUrl;
            }
        } catch (err) {
            console.error("Transmission Error:", err);
            setStatus({
                success: false,
                message: err.message || "A framework interruption blocked your communications packet."
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-900 flex flex-col lg:flex-row">
            
            {/* LEFT PROFILE & BRAND DISPLAY GRID (STRIKING ARCHITECTURAL LOOK) */}
            <section className="lg:w-[45%] lg:h-screen lg:sticky lg:top-0 bg-slate-900 p-8 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 relative overflow-hidden shrink-0">
                
                {/* Background watermarked geometric grid accent */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none mix-blend-overlay">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="relative z-10 space-y-12">
                    {/* Brand Identifier */}
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400">
                            <RiArtboardLine size={20} />
                        </div>
                        <div>
                            <span className="font-mono text-xs tracking-widest font-black uppercase text-amber-500 block">DEE OAK-LINE</span>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500">Spatial Engineering</span>
                        </div>
                    </div>

                    {/* Creative Mission Header */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                            Connect Directly <br />
                            With Our Studio <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">On WhatsApp</span>
                        </h1>
                        <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed max-w-sm">
                            Skip standard corporate queuing lines. Broadcast your design parameters directly to MAZI for localized vetting, pricing estimations, and immediate blueprint intake tracking.
                        </p>
                    </div>

                    {/* Architectural Standard Meta Pillars */}
                    <div className="space-y-4 pt-4 max-w-sm">
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                            <RiWhatsappLine size={24} className="text-emerald-500" />
                            <div>
                                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Instant Routing</h3>
                                <p className="text-xs text-slate-500 font-light">Direct client communication path avoiding email delays.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                            <RiHammerLine size={24} className="text-amber-500" />
                            <div>
                                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Material Consultation</h3>
                                <p className="text-xs text-slate-500 font-light">Discuss structural wood preferences and joint micro-tolerances.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Micro Footer Block */}
                <div className="pt-12 lg:pt-0 border-t border-slate-800/60 lg:border-t-0 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1"><IoMdCall /> +234 (90) 530 20 238</span>
                    <span>Registry: #2022-DEEOAK</span>
                </div>
            </section>

            {/* RIGHT CONCEPTS COLLECTION DESK (CLEAN, MINIMALIST CONSULTING BRIEFING CONTAINER) */}
            <section className="lg:w-[55%] p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-slate-950">
                <div className="max-w-xl w-full mx-auto space-y-8">
                    
                    <div className="space-y-2">
                        <span className="text-sm font-mono text-slate-500 uppercase tracking-widest block">• Consultation Gate</span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Project Overview</h2>
                        <p className="text-slate-400 font-light text-sm md:text-lg">
                           Please provide your contact details and a short description of your project.
                        </p>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleWhatsAppRedirect}
                    >
                        {({ isSubmitting, errors, touched, status }) => (
                            <Form className="space-y-5">
                                
                                {/* Input: Client Identity */}
                                <div className="space-y-1.5">
                                    <label className="text-sm font-mono tracking-widest uppercase text-slate-400 block pl-1">Your Identity / Agency</label>
                                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 focus-within:border-amber-500/50 focus-within:bg-slate-900/50 transition-all shadow-inner">
                                        <IoMdPerson size={18} className="text-amber-500 shrink-0" />
                                        <Field 
                                            type="text" 
                                            name="name" 
                                            placeholder="Your Name / Enterprise Ltd"
                                            disabled={isSubmitting}
                                            className="w-full bg-transparent border-none text-xs text-slate-200 focus:outline-none placeholder-slate-700 disabled:opacity-50"
                                        />
                                    </div>
                                    {errors.name && touched.name && (
                                        <div className="text-rose-400 text-[11px] font-mono pl-1 flex items-center gap-1.5 animate-fadeIn">
                                            <IoMdAlert size={12} /> <span>{errors.name}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Input: Communication Return Line */}
                                <div className="space-y-1.5">
                                    <label className="text-sm font-mono tracking-widest uppercase text-slate-400 block pl-1">Email Address</label>
                                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 focus-within:border-amber-500/50 focus-within:bg-slate-900/50 transition-all shadow-inner">
                                        <IoMdMail size={18} className="text-amber-500 shrink-0" />
                                        <Field 
                                            type="text" 
                                            name="email" 
                                            placeholder="Name@dee-oakline.com"
                                            disabled={isSubmitting}
                                            className="w-full bg-transparent border-none text-xs text-slate-200 focus:outline-none placeholder-slate-700 disabled:opacity-50"
                                        />
                                    </div>
                                    {errors.email && touched.email && (
                                        <div className="text-rose-400 text-[11px] font-mono pl-1 flex items-center gap-1.5 animate-fadeIn">
                                            <IoMdAlert size={12} /> <span>{errors.email}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Input: Design Parameters / Scope */}
                                <div className="space-y-1.5">
                                    <label className="text-sm font-mono tracking-widest uppercase text-slate-400 block pl-1">Your Project Idea and Measurements</label>
                                    <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 focus-within:border-amber-500/50 focus-within:bg-slate-900/50 transition-all shadow-inner">
                                        <IoMdCreate size={18} className="text-amber-500 shrink-0 mt-0.5" />
                                        <Field 
                                            as="textarea" 
                                            name="message" 
                                            rows={5}
                                            placeholder="Share your project idea, preferred wood type, desired completion date, and any measurements or design plans you have..."
                                            disabled={isSubmitting}
                                            className="w-full bg-transparent border-none text-xs text-slate-200 focus:outline-none placeholder-slate-700 resize-none disabled:opacity-50 min-h-[100px]"
                                        />
                                    </div>
                                    {errors.message && touched.message && (
                                        <div className="text-rose-400 text-[11px] font-mono pl-1 flex items-center gap-1.5 animate-fadeIn">
                                            <IoMdAlert size={12} /> <span>{errors.message}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Submission & Redirect Button */}
                                <div className="pt-2">
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-slate-800 disabled:text-slate-600 font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-xl hover:shadow-amber-500/10 flex items-center justify-center gap-2 text-slate-950"
                                    >
                                        <RiMessage3Line size={16} />
                                        {isSubmitting ? "Syncing Studio Core..." : "Go TO WhatsApp"}
                                    </button>
                                </div>

                                {/* Form Status Banners */}
                                {status && status.success && (
                                    <div className="bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 text-xs py-3.5 px-4 rounded-xl flex items-center gap-2.5 shadow-md">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                                        <span className="leading-normal">{status.message}</span>
                                    </div>
                                )}

                                {status && !status.success && (
                                    <div className="bg-rose-950/30 border border-rose-500/30 text-rose-400 text-xs py-3.5 px-4 rounded-xl flex items-center gap-2.5 shadow-md">
                                        <IoMdAlert size={16} className="text-rose-400 shrink-0" />
                                        <span className="leading-normal">{status.message}</span>
                                    </div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </div>
    );
}