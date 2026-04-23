"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // 1. Gather all the data from the form inputs using their 'name' attributes
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      segment: formData.get('segment'),
      cargo: formData.get('cargo'),
    };

    try {
      // 2. Send the data to your new API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset(); // Clear the form
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        alert("Something went wrong. Please try again.");
        setFormStatus('idle');
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please check your connection.");
      setFormStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-red-200">
      
      {/* 1. PREMIUM HERO SECTION */}
      <div className="relative w-full h-[55vh] min-h-[450px] flex flex-col items-center justify-center pt-10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop" 
            alt="Logistics Fleet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/60 to-slate-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 -mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            24/7 Logistics Support
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4 drop-shadow-lg">
            Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Logistics</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Seamless supply chain solutions, from SCV local drops to extreme ODC haulage.
          </p>
        </div>
      </div>

      {/* 2. FLOATING INFO CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 p-8 border-t-4 border-red-600 transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
            <p className="text-slate-600 leading-relaxed font-medium">Plot No.10, Vallalar Street, Aravind Nagar, Govardhanagiri, Avadi, Chennai, Tiruvallur, TN. Pincode - 600 071</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 p-8 border-t-4 border-blue-600 transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Dispatch Center</h3>
            <p className="text-slate-600 font-bold text-lg mb-1">+91 70106 88410</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 p-8 border-t-4 border-red-600 transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center border-red-600 mb-6 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Support</h3>
            <p className="text-slate-600 font-bold mb-1 break-all">sales.psvtransport@gmail.com</p>
            <p className="text-slate-600 font-bold mb-1 break-all">info.psvtransport@gmail.com</p>
          </div>

        </div>
      </div>

      {/* 3. SPLIT SECTION: FORM & MAP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          
          {/* Left Side: Premium Form */}
          <div className="p-8 md:p-12 lg:pr-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Request a Quote</h2>
            <p className="text-slate-500 mb-8 font-medium">Fill out the details below and our logistics experts will get back to you immediately.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company / Name</label>
                  {/* ADDED name="name" */}
                  <input name="name" required type="text" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium" placeholder="Your Business Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  {/* ADDED name="phone" */}
                  <input name="phone" required type="tel" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium" placeholder="+91 XXXX XXXXX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                {/* ADDED name="email" */}
                <input name="email" required type="email" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium" placeholder="you@company.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Required Fleet Segment</label>
                <div className="relative">
                  {/* ADDED name="segment" */}
                  <select name="segment" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-bold text-slate-700 appearance-none cursor-pointer">
                    <option>SCV / LCV (Light Transport)</option>
                    <option>ICV / Open Trucks (Medium)</option>
                    <option>HCV / Haulage (Heavy Transport)</option>
                    <option>Trailers (ODC / Specialized loads)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Cargo Specifications</label>
                {/* ADDED name="cargo" */}
                <textarea name="cargo" required rows="4" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium resize-none" placeholder="Provide weight, dimensions, pickup & drop locations..."></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg shadow-blue-600/30 text-lg uppercase tracking-wider"
                >
                  {formStatus === 'submitting' ? 'Processing...' : 'Secure Your Fleet'}
                  {formStatus === 'success' ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Seamless Map */}
          <div className="relative min-h-[400px] lg:min-h-full bg-slate-100">
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] z-10"></div>
            <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </div>
              <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                Live Route Hub
              </span>
            </div>
            <iframe 
              src="https://maps.google.com/maps?q=Avadi,%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen=""
              loading="lazy"
              title="Pragadeesh Transport Location"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}