"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RiArtboardLine, RiCompass3Line } from "react-icons/ri";
import { IoMdMail, IoMdCall, IoMdAlert, IoMdTime } from "react-icons/io";
import * as yup from "yup";

// Import Firebase Modular SDK methods
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// --- FIREBASE CONFIGURATION ---
// Replace these with your actual project web app credentials from your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBS86Xfyjt-wtYPY6Dz5irYYsjFxt-qZ-k",
  authDomain: "dee-oakline-furnitures.firebaseapp.com",
  projectId: "dee-oakline-furnitures",
  storageBucket: "dee-oakline-furnitures.firebasestorage.app",
  messagingSenderId: "878022671749",
  appId: "1:878022671749:web:42ab36412cee4c3f4318ec"
};

// Initialize app singletons defensively for Next.js hot-reloading
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Validation schema using Yup
const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Your name or company designation is required."),
  email: yup
    .string()
    .required("An email address is required to route our reply.")
    .email("Please provide a structurally valid professional email format."),
  subject: yup
    .string()
    .required("Please select an inquiry classification context."),
  message: yup
    .string()
    .required("The conceptual dynamic brief message cannot be left blank.")
    .min(15, "Please offer a bit more detail (minimum 15 characters) regarding your space.")
});

export default function ContactPage() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  const handleContactSubmission = async (values, { setSubmitting, resetForm }) => {
    setStatus({ type: "idle", message: "" });
    console.log("Form submission process initiated with values:", values);

    try {
      // Reference the "contacts" collection in Firestore and add the data record
      const docRef = await addDoc(collection(db, "contacts"), {
        ...values,
        timestamp: new Date().toISOString(),
        registrySource: "Direct Contact Form Grid Portal"
      });

      console.log("Firestore Transmission Success! Document ID created:", docRef.id);

      setStatus({
        type: "success",
        message: "Your message has been received. Our team will contact you within 12 business hours."
      });
      
      resetForm();
    } catch (err) {
      // Detailed console error logging to expose rule rejections or bad credential strings
      console.error("--- FIREBASE TRANSMISSION FAILURE LOG ---");
      console.error("Error Code / Name:", err.name || "N/A");
      console.error("Detailed Error Message:", err.message);
      console.error("Full Error Object Details:", err);
      console.error("-----------------------------------------");

      setStatus({ 
        type: "error", 
        message: err.message || "An unexpected framework error halted transmission." 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8 flex items-center justify-center relative overflow-hidden selection:bg-amber-500 selection:text-slate-900">
      
      {/* Clean Client/Server Background Asset Node - Avoids inline pseudo compilation bugs */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none z-0" 
        style={{ backgroundImage: "url('/Oak-Logo.png')" }}
      />

      {/* Decorative Blueprint Vector Graphics Sync Layout Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex justify-between max-w-7xl mx-auto px-4 z-0">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      {/* Main Wrapper Grid: Balanced Smoke Glass Transparency */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 md:p-10 shadow-2xl relative z-10 backdrop-blur-md">
        
        {/* Left Segment: Spatial Context Studio Metadata Anchor details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12 relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <RiArtboardLine size={22} className="text-amber-500" />
              <span className="font-sans font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 text-lg">
                DEE OAK-LINE
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
              Establish <br />Connection.
            </h1>
            <p className="text-xs md:text-lg text-slate-400 font-light leading-relaxed max-w-sm">
              Planning a customized home or office project? Share your measurements and requirements below, and our design team will help bring your ideas to life.
            </p>
          </div>

          {/* Institutional Contact Methods Stream Stack */}
          <div className="space-y-4 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-3 bg-slate-950/40 border border-slate-800/50 p-3.5 rounded-xl backdrop-blur-sm">
              <IoMdCall size={18} className="text-amber-500 shrink-0" />
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Secure Studio Line</p>
                <p className="text-slate-200 text-lg mt-0.5 font-sans font-medium">+234 (90) 530 20 238</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-950/40 border border-slate-800/50 p-3.5 rounded-xl backdrop-blur-sm">
              <IoMdMail size={18} className="text-amber-500 shrink-0" />
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Direct Studio Email</p>
                <p className="text-slate-200 mt-0.5 font-sans text-lg font-medium">dee-oakline@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-950/40 border border-slate-800/50 p-3.5 rounded-xl backdrop-blur-sm">
              <IoMdTime size={18} className="text-amber-500 shrink-0" />
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Days Available</p>
                <p className="text-slate-200 text-lg mt-0.5 font-sans font-medium">Mon - Sat / 09:00 - 18:00 WAT</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600">
            <RiCompass3Line size={14} className="text-slate-500" />
            <span>High-Fi Spatial Design Registry ID: #2022-DEEOAK</span>
          </div>
        </div>

        {/* Right Segment: Translucent Form Input Field Module */}
        <div className="lg:col-span-7 bg-slate-950/40 border border-slate-800/60 rounded-xl p-6 space-y-6 backdrop-blur-md relative z-10">
          <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={handleContactSubmission}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm uppercase tracking-widest font-mono text-slate-400 block">Full Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="e.g., John Doe"
                      disabled={isSubmitting}
                      className={`w-full bg-slate-950/80 border rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-1 transition-all disabled:opacity-50 backdrop-blur-sm ${
                        touched.name && errors.name 
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/30" 
                          : "border-slate-800 focus:border-amber-500/50 focus:ring-amber-500/30"
                      }`}
                    />
                    <ErrorMessage name="name" component="div" className="text-rose-400 text-[11px] font-mono mt-1 pl-1" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm uppercase tracking-widest font-mono text-slate-400 block">Email</label>
                    <Field
                      type="text"
                      name="email"
                      placeholder="name@email.com"
                      disabled={isSubmitting}
                      className={`w-full bg-slate-950/80 border rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-1 transition-all disabled:opacity-50 backdrop-blur-sm ${
                        touched.email && errors.email 
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/30" 
                          : "border-slate-800 focus:border-amber-500/50 focus:ring-amber-500/30"
                      }`}
                    />
                    <ErrorMessage name="email" component="div" className="text-rose-400 text-[11px] font-mono mt-1 pl-1" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm uppercase tracking-widest font-mono text-slate-400 block">How Can We Help You?</label>
                  <div className="relative">
                    <Field
                      as="select"
                      name="subject"
                      disabled={isSubmitting}
                      className={`w-full bg-slate-950/80 border rounded-xl px-4 py-2.5 text-xs text-slate-400 focus:outline-none focus:ring-1 transition-all disabled:opacity-50 appearance-none cursor-pointer backdrop-blur-sm ${
                        touched.subject && errors.subject 
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/30" 
                          : "border-slate-800 focus:border-amber-500/50 focus:ring-amber-500/30"
                      }`}
                    >
                      <option value="" disabled hidden>Choose category...</option>
                      <option value="Living Room Design">Living Room Design</option>
                      <option value="Bed Room Design">Bed Room Design</option>
                      <option value="Kitchen design">Kitchen design</option>
                      <option value="WorkSpace Set">WorkSpace Set</option>
                      <option value="General Studio Consultation">General Studio Consultation</option>
                    </Field>
                  </div>
                  <ErrorMessage name="subject" component="div" className="text-rose-400 text-[11px] font-mono mt-1 pl-1" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm uppercase tracking-widest font-mono text-slate-400 block">Project Description</label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Enter your measurements, preferred wood type, and any project details..."
                    disabled={isSubmitting}
                    className={`w-full bg-slate-950/80 border rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-1 transition-all resize-none disabled:opacity-50 backdrop-blur-sm ${
                      touched.message && errors.message 
                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/30" 
                        : "border-slate-800 focus:border-amber-500/50 focus:ring-amber-500/30"
                    }`}
                  />
                  <ErrorMessage name="message" component="div" className="text-rose-400 text-[11px] font-mono mt-1 pl-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-700 disabled:cursor-not-allowed text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-lg active:scale-[0.99]"
                >
                  {isSubmitting ? "Syncing Manifest..." : "Submit Briefing"}
                </button>
              </Form>
            )}
          </Formik>

          {/* Interactive Operational Validation & Feedback Banner system */}
          {status.type === "success" && (
            <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs py-3 px-4 rounded-xl flex items-center gap-2 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>{status.message}</span>
            </div>
          )}

          {status.type === "error" && (
            <div className="bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs py-3 px-4 rounded-xl flex items-center gap-2 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
              <IoMdAlert size={16} className="text-rose-400 shrink-0" />
              <span>{status.message}</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}