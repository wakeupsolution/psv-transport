"use client";

import React from "react";

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
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 ">
            <span className="text-blue-500">PSV</span>{" "}
            <span className="text-red-500">PRAGADEESH</span> <br />
            TRANSPORT
          </h1>
          <p className="text-slate-300 text-xl max-w-xl font-medium leading-relaxed">
            A fast-growing Chennai-based transport company, building trust
            through reliable service and smart logistics solutions.
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
              <span className="text-3xl md:text-5xl font-black text-blue-700 group-hover:scale-110 transition-transform">
                10+
              </span>
              <div className="h-1 w-8 bg-blue-100 rounded-full mt-2"></div>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-3">
                Years Experience
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 md:p-10 text-center hover:bg-slate-50 transition-colors group">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-red-600 group-hover:scale-110 transition-transform">
                1T - 100T
              </span>
              <div className="h-1 w-8 bg-red-100 rounded-full mt-2"></div>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-3">
                Weight Capacity
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 md:p-10 text-center hover:bg-slate-50 transition-colors group">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-black text-slate-900 group-hover:scale-110 transition-transform">
                PAN
              </span>
              <div className="h-1 w-8 bg-slate-200 rounded-full mt-2"></div>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-3">
                India Network
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-6 md:p-10 text-center hover:bg-slate-50 transition-colors group">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-black text-blue-600 group-hover:scale-110 transition-transform">
                Road
              </span>
              <div className="h-1 w-8 bg-blue-100 rounded-full mt-2"></div>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-3">
                Mode
              </p>
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
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-black text-slate-900 leading-tight">
                    Certified Safe Transit
                  </span>
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Specializing in Breakbulk & Containerized cargo since 2014.
                </p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-red-600"></span>
                <span className="text-red-600 font-black uppercase tracking-[0.2em] text-sm">
                  About the Firm
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Reliable<span className="text-blue-600"> Heavy Transport</span>{" "}
                <br /> Solution.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="text-lg text-slate-600 leading-relaxed font-medium space-y-4">
                <p>
                  Situated in the heart of Tamil Nadu,{" "}
                  <span className="text-slate-900 font-bold">
                    PSV Pragadeesh Transport
                  </span>{" "}
                  is a fast-growing transport company specializing in heavy
                  equipment and project cargo movement.
                </p>
                <p>
                  Beyond regular transportation, we provide specialized{" "}
                  <span className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4">
                    trailer solutions for machinery shifting, oversized cargo
                    handling, and industrial logistics support.
                  </span>
                  . Our experienced team ensures every movement is planned
                  safely, executed efficiently, and delivered on time.
                </p>
              </div>
            </div>

            {/* Action Item / Signature */}
            <div className="pt-4 flex items-center gap-6">
              <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-black uppercase text-sm tracking-widest">
                  Chennai Headquartered
                </p>
                <p className="text-slate-500 text-sm">
                  Serving clients across the Indian Subcontinent.
                </p>
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
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                Experienced Team
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Skilled professionals with strong knowledge in transport and
                cargo handling.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-500 hover:border-red-500/50">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 4h3a1 1 0 011 1v3h-2a2 2 0 100 4h2v3a1 1 0 01-1 1h-3v-2a2 2 0 10-4 0v2H7a1 1 0 01-1-1v-3h2a2 2 0 100-4H6V5a1 1 0 011-1h3v2a2 2 0 104 0V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                Tailored Solutions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Right trailer and logistics solutions for every project
                requirement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-400/10 transition-all duration-500 hover:border-blue-400/50">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-400 group-hover:text-white transition-all duration-500 shadow-sm">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* India-like route map */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 3
       L11 2
       L14 4
       L15 7
       L17 9
       L16 12
       L18 15
       L16 18
       L13 21
       L10 20
       L8 17
       L7 14
       L5 11
       L6 8
       L7 5
       Z"
                  />

                  {/* Road Route */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    strokeDasharray="2 2"
                    d="M9 5
       C10 7, 12 8, 11 11
       C10 13, 13 14, 12 17
       C11 18, 12 19, 13 20"
                  />

                  {/* Route Points */}
                  <circle cx="9" cy="5" r="1" fill="currentColor" />
                  <circle cx="12" cy="17" r="1" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                PAN India Speed
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Reliable transport services across India with timely delivery.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-slate-400/10 transition-all duration-500 hover:border-slate-400/50">
              <div className="w-14 h-14 bg-slate-200 text-slate-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-800 group-hover:text-white transition-all duration-500 shadow-sm">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10l2-2a2.828 2.828 0 114 4l-3 3a2.828 2.828 0 01-4 0l-1-1m-2 0l-2 2a2.828 2.828 0 11-4-4l3-3a2.828 2.828 0 014 0l1 1m-2 2h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                Customer Commitment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Dedicated support with dependable service and quick response.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* 5. VISION & MISSION SECTION */}
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full -z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Mission Card */}
            <div className="relative p-10 md:p-16 bg-slate-900 rounded-[3rem] text-white shadow-2xl overflow-hidden group border border-slate-800">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  className="w-32 h-32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>

              <div className="relative z-10">
                <span className="text-blue-500 font-black uppercase tracking-widest text-xs">
                  Our Mission
                </span>
                <h2 className="text-4xl font-black mt-4 mb-6 tracking-tight">
                  Deliver Reliable <br />
                  Transport Solutions.
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  To provide safe, timely, and efficient transportation services
                  for machinery, project cargo, and industrial loads. We focus
                  on proper planning, dependable execution, and customer
                  satisfaction in every movement.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative p-10 md:p-16 bg-blue-600 rounded-[3rem] text-white shadow-2xl overflow-hidden group">
              <div className="absolute bottom-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                <svg
                  className="w-32 h-32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>

              <div className="relative z-10">
                <span className="text-blue-100 font-black uppercase tracking-widest text-xs">
                  Our Vision
                </span>
                <h2 className="text-4xl font-black mt-4 mb-6 tracking-tight">
                  To Grow as a Trusted <br />
                  Transport Brand.
                </h2>
                <p className="text-blue-50 text-lg leading-relaxed font-medium">
                  To become one of South India’s most dependable transport
                  companies, known for safety, service quality, and long-term
                  customer relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Minimalist Footer */}
          <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-slate-100 pt-16">
            <div className="text-center">
              <p className="text-2xl font-black text-slate-900">Integrity</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                Transparent Operations
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-slate-900">Safety</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                Zero-Damage Focus
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-slate-900">Innovation</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
               Smarter Transport Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
