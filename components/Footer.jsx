"use client";
import { useState } from "react";
import { RiArtboardLine, RiInstagramLine, RiPinterestLine, RiLinkedinBoxLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";

// Using relative path tracking to eliminate path alias resolution failures
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/config/firebase";

export default function GalleryFooter() {
    const [successMessage, setSuccessMessage] = useState("");

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Please provide a valid email address")
                .required("Email address is required"),
        }),
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                setSuccessMessage("");
                
                // Write transaction parameters directly to Cloud Firestore collection
                await addDoc(collection(db, "subscribers"), {
                    email: values.email.toLowerCase().trim(),
                    subscribedAt: serverTimestamp(),
                    status: "active",
                    source: "gallery_footer"
                });

                setSuccessMessage(`Thank you for subscribing to our luxury catalog updates: ${values.email}`);
                resetForm();
            } catch (error) {
                console.error("Firestore database storage failure:", error);
                alert("An error occurred while connecting to our registry. Please try again.");
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 font-sans mt-0">
            <div className="max-w-7xl mx-auto px-4 py-16">
                
                {/* Upper Structural Information Layout: Branding and Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/60">
                    
                    {/* Brand Meta Narrative Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3 font-bold text-lg tracking-tight">
                            <RiArtboardLine className="text-amber-500 text-2xl" />
                            <span className="text-amber-500">
                                Dee Oak-line
                            </span>
                        </div>
                        <p className="text-sm font-light leading-relaxed max-w-sm">
                            We are a group of artisans who combine traditional wood crafting with modern design. We build high-quality wood structures made for simple, peaceful living.
                        </p>
                        
                        {/* Social Interaction Handles Node */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-slate-900 border border-slate-800/80 rounded-md hover:text-amber-400 hover:border-amber-500/20 transition-all duration-300" title="Instagram Creative Profile">
                                <RiInstagramLine size={18} />
                            </a>
                            <a href="#" className="p-2 bg-slate-900 border border-slate-800/80 rounded-md hover:text-amber-400 hover:border-amber-500/20 transition-all duration-300" title="Pinterest Spatial Concept Inspo Boards">
                                <RiPinterestLine size={18} />
                            </a>
                            <a href="#" className="p-2 bg-slate-900 border border-slate-800/80 rounded-md hover:text-amber-400 hover:border-amber-500/20 transition-all duration-300" title="LinkedIn Professional Collective Channel">
                                <RiLinkedinBoxLine size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Structural Studio Navigation Matrix Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:col-span-3 gap-8">
                        <div>
                            <h4 className="text-slate-200 text-xs font-bold uppercase tracking-widest mb-4">
                                Navigation Menu
                            </h4>
                            <ul className="space-y-2.5 text-sm font-light">
                                <li>
                                    <a href="/about" className="block text-slate-400 hover:text-amber-400 transition-colors">
                                        About Our Studio
                                    </a>
                                </li>
                                <li>
                                    <a href="/manifesto" className="block text-slate-400 hover:text-amber-400 transition-colors">
                                        Our Manifesto
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="block text-slate-400 hover:text-amber-400 transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Interactive Digest Subscription Input Container */}
                    <div className="lg:col-span-4 space-y-4">
                        <h4 className="text-slate-200 text-xs font-bold uppercase tracking-widest">
                            Stay Updated with Our Latest Designs
                        </h4>
                        <p className="text-sm font-light leading-relaxed">
                           Subscribe to get early access to our new designs, material stories, and seasonal collections before they are available to the public.
                        </p>
                        
                        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2 w-full pt-1">
                            <div className="flex gap-2 w-full">
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Email specification" 
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full bg-slate-900 border rounded px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors ${
                                        formik.touched.email && formik.errors.email 
                                            ? "border-red-500 focus:border-red-500" 
                                            : "border-slate-800 focus:border-amber-500"
                                    }`}
                                    disabled={formik.isSubmitting}
                                />
                                <button 
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                    className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded shadow-md hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {formik.isSubmitting ? "Processing..." : "Track"}
                                </button>
                            </div>
                            
                            {/* Validation Error Feedback */}
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-400 text-xs font-mono mt-0.5">
                                    {formik.errors.email}
                                </div>
                            )}

                            {/* Dynamic Inline Success Notification */}
                            {successMessage && (
                                <div className="text-emerald-400 text-xs font-light bg-emerald-950/30 border border-emerald-900/40 p-3 rounded mt-2 transition-all">
                                    {successMessage}
                                </div>
                            )}
                        </form>
                    </div>

                </div>

                {/* Lower Boundary Rights and Legal Matrix Nodes */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-light text-slate-400">
                    <div className="flex flex-wrap items-center gap-2">
                        <span>&copy; {new Date().getFullYear()} Dee Oak-line Studio.</span>
                        <span className="hidden md:inline">&bull;</span>
                        <span>Architectural Precision & Design System.</span>
                    </div>
                    
                    <div className="flex gap-6 text-slate-400 text-sm font-mono">
                        <a href="/privacy" className="hover:text-slate-400 transition-colors">/privacy-policy</a>
                        <a href="/archive" className="hover:text-slate-400 transition-colors">/terms-of-archive</a>
                        <span className="text-slate-600 select-none">v1.4.2_release</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}