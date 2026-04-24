"use client";

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100">
      
      {/* 1. HERO SECTION WITH PARALLAX EFFECT */}
      <div className="relative w-full h-[64vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/banner/about alter.jpg" 
            alt="Pragadeesh Transport Fleet" 
            className="w-full h-full object-cover scale-110"
          />
          {/* Professional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
       
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4">
            PSV <span className="text-blue-500">PRAGADEESH</span> <br />
            TRANSPORT
          </h1>
          <p className="text-slate-300 text-xl max-w-xl font-medium leading-relaxed">
            A premier Chennai-based transport powerhouse with a decade of mastery in moving India's industry.
          </p>
        </div>
      </div>

      {/* 2. CORE STATS BAR */}
      {/* 2. IMPROVED RESPONSIVE STATS BAR */}
      <div className="relative z-20 -mt-12 md:-mt-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100 divide-y divide-slate-100 sm:divide-y-0 sm:divide-x lg:divide-x">
          
          {/* Stat 1 */}
          <div className="p-6 md:p-10 text-center hover:bg-slate-50 transition-colors group">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-black text-blue-700 group-hover:scale-110 transition-transform">10+</span>
              <div className="h-1 w-8 bg-blue-100 rounded-full mt-2"></div>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-3">Years Experience</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 md:p-10 text-center hover:bg-slate-50 transition-colors group">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-black text-red-600 group-hover:scale-110 transition-transform">1T - 75T</span>
              <div className="h-1 w-8 bg-red-100 rounded-full mt-2"></div>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-3">Weight Capacity</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 md:p-10 text-center hover:bg-slate-50 transition-colors group">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-black text-slate-900 group-hover:scale-110 transition-transform">PAN</span>
              <div className="h-1 w-8 bg-slate-200 rounded-full mt-2"></div>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-3">India Network</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-6 md:p-10 text-center hover:bg-slate-50 transition-colors group">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-black text-blue-600 group-hover:scale-110 transition-transform">Road/Rail</span>
              <div className="h-1 w-8 bg-blue-100 rounded-full mt-2"></div>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-3">Dual Mode</p>
            </div>
          </div>

        </div>
      </div>

   
     {/* 3. REDESIGNED CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Side: Layered Images */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-50 rounded-2xl -z-10"></div>
            
            <div className="relative">
              {/* Main Image */}
              <img 
                src="/serviceimage/g16.jpg" 
                className="rounded-3xl shadow-2xl w-full object-cover z-10 relative" 
                alt="Logistics Operations" 
              />
              
              {/* Floating Experience Card */}
              <div className="absolute -bottom-10 -right-0 md:-right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-[240px] animate-float">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-blue-600 rounded-lg text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <span className="font-black text-slate-900 leading-tight">Certified Safe Transit</span>
                </div>
                <p className="text-sm text-slate-500 font-medium">Specializing in Breakbulk & Containerized cargo since 2014.</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-red-600"></span>
                <span className="text-red-600 font-black uppercase tracking-[0.2em] text-sm">About the Firm</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Redefining <span className="text-blue-600">Surface</span> <br /> Transportation.
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-slate-200 pl-6">
                "We believe the Customer is our biggest asset. Instead of focusing on the competition, we focus on the customer."
              </p>
              
              <div className="text-lg text-slate-600 leading-relaxed font-medium space-y-4">
                <p>
                  Situated in the heart of Chennai, <span className="text-slate-900 font-bold">PSV Pragadeesh Transport</span> is a logistics architecture firm, not just a trucking company. 
                </p>
                <p>
                  Beyond simple hauling, we provide specialized <span className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4">Route Surveys</span>. Our team prepares meticulous reports and cost-effective models to ensure your high-value cargo arrives via the most efficient path possible.
                </p>
              </div>
            </div>

            {/* Action Item / Signature */}
            <div className="pt-4 flex items-center gap-6">
               <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
               </div>
               <div>
                  <p className="text-slate-900 font-black uppercase text-sm tracking-widest">Chennai Headquartered</p>
                  <p className="text-slate-500 text-sm">Serving clients across the Indian Subcontinent.</p>
               </div>
            </div>
          </div>

        </div>
      </div>


      <div className="bg-slate-50 pt-24 pb-40 text-slate-900 overflow-hidden relative">
  {/* Subtler decorative blobs for light mode */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]"></div>
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-400/10 rounded-full blur-[120px]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-800">
        Why <span className="text-red-600">Choose</span> Us?
      </h2>
      <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      <p className="text-slate-500 mt-6 font-bold tracking-[0.3em] uppercase text-xs">
        We Growing with Every Successful Delivery
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="group bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-500/50">
        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 text-slate-800">Experienced Team</h3>
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          Skilled professionals with strong knowledge in transport and cargo handling.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-500 hover:border-red-500/50">
        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 text-slate-800">Tailored Solutions</h3>
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          We understand your requirements instantly and offer the right tailored solution.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-400/10 transition-all duration-500 hover:border-blue-400/50">
        <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-400 group-hover:text-white transition-all duration-500 shadow-sm">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 text-slate-800">PAN India Speed</h3>
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          Fast and safe service across our entire India network without compromising quality.
        </p>
      </div>

      {/* Card 4 */}
      <div className="group bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-slate-400/10 transition-all duration-500 hover:border-slate-400/50">
        <div className="w-14 h-14 bg-slate-200 text-slate-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-800 group-hover:text-white transition-all duration-500 shadow-sm">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 text-slate-800">Continuous Growth</h3>
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          We view customer service as a continuous learning process to better serve you.
        </p>
      </div>
    </div>
  </div>
</div>  {/* 5. VISION & MISSION SECTION */}
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full -z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Mission Card */}
            <div className="relative p-10 md:p-16 bg-slate-900 rounded-[3rem] text-white shadow-2xl overflow-hidden group border border-slate-800">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              </div>
              
              <div className="relative z-10">
                <span className="text-blue-500 font-black uppercase tracking-widest text-xs">Our Mission</span>
                <h2 className="text-4xl font-black mt-4 mb-6 tracking-tight">Driving Global <br/>Logistics Standards.</h2>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  To provide seamless, tech-enabled transportation solutions that empower Indian industries. We strive to bridge the gap between complex cargo requirements and efficient delivery through meticulous route planning and uncompromised safety.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative p-10 md:p-16 bg-blue-600 rounded-[3rem] text-white shadow-2xl overflow-hidden group">
               <div className="absolute bottom-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </div>

              <div className="relative z-10">
                <span className="text-blue-100 font-black uppercase tracking-widest text-xs">Our Vision</span>
                <h2 className="text-4xl font-black mt-4 mb-6 tracking-tight">The Future of <br/>Indian Freight.</h2>
                <p className="text-blue-50 text-lg leading-relaxed font-medium">
                  To be recognized as the most reliable "Logistics Architects" in Pan-India, setting the benchmark for safety, speed, and customer-centricity in surface transportation by the year 2030.
                </p>
              </div>
            </div>

          </div>

          {/* Core Values Minimalist Footer */}
          <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-slate-100 pt-16">
            <div className="text-center">
               <p className="text-2xl font-black text-slate-900">Integrity</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Honest Operations</p>
            </div>
            <div className="text-center">
               <p className="text-2xl font-black text-slate-900">Safety</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Zero-Damage Goal</p>
            </div>
            <div className="text-center">
               <p className="text-2xl font-black text-slate-900">Innovation</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Modern Logistics</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}