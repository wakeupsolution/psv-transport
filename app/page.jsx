"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- UTILITY: Animated Counter for Stats ---
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{value.includes('%') ? '%' : value.includes('+') ? '+' : ''}</>;
};

export default function HomePage() {
  // --- DATA ARRAYS ---
  const banners = [
    { 
      id: 1, 
      title: "REDEFINING SURFACE TRANSPORT", 
      sub: "Delivering Speed, Safety & Reliability",
      desktopImg: "/banner/desktopbanner1.png", // Wide image
      mobileImg: "/banner/mobilebanner1.png" // Tall image
    },
    { 
      id: 2, 
      title: "SPECIALIZED ODC MOVEMENT", 
      sub: " Handling up to 100 tons with precision.", 
      desktopImg: "/banner/desktopbanner2.png",
      mobileImg: "/banner/mobilebanner2.png" 
    },
    { 
      id: 3, 
      title: "PAN INDIA CONNECTIVITY", 
      sub: "Seamless transport between airport, seaport, and factory.", 
      desktopImg: "/banner/desktopbanner3.png",
      mobileImg: "/banner/mobilebanner3.png" 
    },
  ];

  const serviceData = [
    { id: 1, title: "HCV Segment", desc: "Heavy Commercial Vehicles for massive loads.", img: "/serviceimage/g4.jpg", colSpan: "lg:col-span-1", link: "/services/hcv" },
    { id: 2, title: "LCV Segment", desc: "Light Commercial Vehicles for faster city transit.", img: "/serviceimage/g7.jpg", colSpan: "lg:col-span-1", link: "/services/lcv" },
    { id: 3, title: "ICV Segment", desc: "Intermediate Commercial Vehicles for regional distribution.", img: "/serviceimage/g10.jpg", colSpan: "lg:col-span-1", link: "/services/icv" },
    { id: 4, title: "SCV Segment", desc: "Small Commercial Vehicles for last-mile delivery.", img: "/serviceimage/g1.jpg", colSpan: "lg:col-span-1", link: "/services/scv" },
    { id: 5, title: "Trailer Segment", desc: "Customizable trailers for specialized ODC transport.", img: "/serviceimage/g13.jpg", colSpan: "lg:col-span-1", link: "/services/trailer" },
  ];
  const reviews = [
    { id: 1, name: "Prabu Vathsala", time: "3 months ago", text: "Experience person timing management is excellent designing output super quality and quantity 💯", initial: "P" },
    { id: 2, name: "Prakash Jayachand...", time: "3 months ago", text: "We are very happy with the construction of our house. The quality of work is very good, and the team followed proper...", initial: "P" },
    { id: 3, name: "Elumalai .M", time: "1 year ago", text: "Excellent engineer ...response and work quality very nice...little costly...", initial: "E" },
    { id: 4, name: "Suresh Kumar", time: "2 months ago", text: "Professional logistics management. The team was very punctual and delivery was safe.", initial: "S" },
    { id: 5, name: "Rajesh Chen", time: "4 months ago", text: "Best in the business for heavy machinery transport. Highly recommended for ODC cargo.", initial: "R" },
    { id: 6, name: "Anita Wilson", time: "5 months ago", text: "Seamless port connectivity. Their tracking and support are top-notch.", initial: "A" },
  ];

  // --- STATE & EFFECTS ---
  const [currentBanner, setCurrentBanner] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
const [status, setStatus] = useState('idle');
  // Auto-run Banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  // Auto-run Testimonials
  const [itemsPerPage, setItemsPerPage] = useState(3);
 useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const nextSlide = () => {
    setReviewIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setReviewIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-play (Optional)
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [reviewIndex, totalPages]);
const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // 1. Gather all the data from the form inputs
    const formData = new FormData(e.target);
    
    // 2. Package the data, adding defaults for the API's required fields
    const data = {
  name: formData.get('name'),
  phone: formData.get('phone'),
  segment: 'Callback Request',
  message: 'User requested a quick callback from the website.',
};
    try {
      // 3. Send the data to your API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset(); // Clear the form
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        alert("Something went wrong. Please try again.");
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please check your connection.");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      
     {/* --- SECTION 1: HERO BANNER --- */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* 1. DESKTOP IMAGE (Increased opacity from 40 to 70 to decrease darkness) */}
            <Image 
              src={banners[currentBanner].desktopImg} 
              fill 
              className="hidden md:block object-cover opacity-70" 
              alt="Industrial Banner Desktop" 
              priority 
            />
            
            {/* 2. MOBILE IMAGE (Increased opacity from 40 to 70) */}
            <Image 
              src={banners[currentBanner].mobileImg} 
              fill 
              className="block md:hidden object-cover opacity-70" 
              alt="Industrial Banner Mobile" 
              priority 
            />
            
            {/* Lighter Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          
          {/* Subtitle - Delayed until after image starts loading (delay: 0.6) */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-white font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 drop-shadow-md">
              {banners[currentBanner].sub}
            </p>
          </motion.div>

          {/* Main Title - Delayed until after subtitle (delay: 0.9) */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] max-w-5xl drop-shadow-xl">
              {banners[currentBanner].title}
            </h1>
          </motion.div>

          {/* Dots Indicator - Fades in last */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.2 }}
            className="flex gap-3 mt-12"
          >
            {banners.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentBanner ? "bg-red-600 w-12" : "bg-white/40 w-6"}`} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: PREMIUM ABOUT SECTION --- */}
      <section className="py-24 max-w-[1300px] mx-auto px-6 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Image (Slides in from the Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] rounded-[1rem] overflow-hidden shadow-2xl group"
          >
            <Image 
              src="/serviceimage/g14.jpg" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="About PSV Pragadeesh" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            
            {/* Floating Experience Badge */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100">
              <div className="text-5xl font-black text-red-600 leading-none">
                <AnimatedNumber value="10+" />
              </div>
              <div className="border-l-2 border-slate-100 pl-4">
                <p className="text-[10px] font-black text-slate-800 uppercase tracking-widest leading-tight">Years of<br/>Rich Experience</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Text Content (Slides in from the Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-black uppercase tracking-widest text-[10px] rounded-md mb-4">
                Based in Chennai
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-slate-900">
              < span className="text-blue-600"> PSV </span> <span className="text-red-600">Pragadeesh</span> <span className="text-slate-900">Transport</span>
              </h2>
            </div>

            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed font-medium">
             Offering reliable surface transportation services by road across India. We deliver efficient and flexible logistics solutions tailored to handle even the most demanding industrial requirements.
            </p>

            {/* Key Capabilities List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-slate-700 text-sm font-medium"><strong className="text-slate-900">Massive Scale:</strong>We offer a wide range of vehicles with capacities varying from 1 Ton to 100 Tons.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-slate-700 text-sm font-medium"><strong className="text-slate-900">Versatile Cargo:</strong> We safely undertake both Breakbulk and Container transportation.</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-slate-700 text-sm font-medium"><strong className="text-slate-900">Engineering First:</strong> We undertake advanced route surveys, prepare proper reports, and provide cost-effective transportation models.</p>
              </div>
            </div>

            {/* Core Philosophy Blockquote */}
            <blockquote className="border-l-4 border-amber-500 pl-5 py-2 bg-amber-50/50 rounded-r-xl">
              <p className="text-slate-800 font-bold italic text-[15px] leading-snug">
                "We believe that the customer is our biggest asset. Instead of focusing on the competition, we focus on the customer."
              </p>
            </blockquote>

            {/* Learn More Button */}
            <div className="pt-4">
              <Link href="/about">
                <button className="group flex items-center gap-3 bg-slate-900 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all duration-300 shadow-xl shadow-slate-900/20 active:scale-95">
                  Learn More About Us
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: SERVICES SECTION --- */}
      <section className="py-24 bg-slate-50 font-sans border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-red-600 rounded-md text-white font-bold text-[11px] uppercase tracking-wider mb-5 shadow-sm">
            OUR SERVICES
          </div>
          <h2 className="text-[36px] md:text-[44px] font-black text-slate-900 leading-tight tracking-tight">
            Complete Logistics Solutions
          </h2>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* First 5 cards: The Services */}
          {serviceData.map((srv) => (
            <div 
              key={srv.id} 
              className={`group relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 min-h-[350px] md:min-h-[400px] flex flex-col justify-end ${srv.colSpan}`}
            >
              {/* Background Image */}
              <Image 
                src={srv.img} 
                fill 
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 opacity-70 group-hover:opacity-50" 
                alt={srv.title} 
              />
              
              {/* Permanent Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

              {/* Content Container */}
              <div className="relative z-10 p-8 w-full flex flex-col h-full justify-end">
                
                {/* Red Segment Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-600/90 text-white text-[9px] font-black uppercase tracking-widest backdrop-blur-sm">
                    Segment 0{srv.id}
                  </span>
                </div>
                
                {/* Always Visible Title */}
                <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 flex items-center gap-3">
                  {srv.title}
                  <span className="h-0.5 w-8 bg-red-600 rounded-full transition-all duration-300 group-hover:w-16"></span>
                </h3>
                
                {/* Description & Button (Expands on hover) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium mb-6 pt-2">
                      {srv.desc}
                    </p>

                    {/* ---> THE NEXT.JS LINK WRAPPER ADDED HERE <--- */}
                    <Link href={srv.link}>
                      <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-2.5 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-colors text-[11px] uppercase tracking-wider w-max">
                        View More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </button>
                    </Link>

                  </div>
                </div>
                
              </div>
            </div>
          ))}

          {/* THE 6TH CARD: Quick Enquiry Form */}
           <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 p-8 flex flex-col min-h-[350px] md:min-h-[400px]">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] z-0"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        
        {/* Header */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-4 text-red-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>

          <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
            Need a Custom Fleet?
          </h3>

          <p className="text-slate-500 text-sm font-medium">
            Get an instant quote for your logistical needs.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleCallbackSubmit} className="mt-auto space-y-3">
          
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-3.5 rounded-xl text-[11px] uppercase tracking-widest transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
          >
            {status === "submitting" ? "Sending..." : "Request Callback"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-600 text-xs">
              ✅ Request sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-xs">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </div>
        </div>
      </div>
    </section>

      {/* --- SECTION 4: CLIENT LOGO MARQUEE --- */}
      {/* --- SECTION 4: PREMIUM CLIENT LOGO MARQUEE --- */}
      {/* --- SECTION 4: PREMIUM CLIENT LOGO MARQUEE --- */}
      <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-100 relative">
        
        {/* Title (Styled exactly like your screenshot) */}
        <div className="text-center mb-16 relative z-20">
          <div className="inline-block px-4 py-1.5 bg-red-600 rounded-md text-white font-bold text-[11px] uppercase tracking-wider mb-5 shadow-sm">
            OUR PARTNERS
          </div>
          <h2 className="text-[36px] md:text-[44px] font-black text-slate-900 leading-tight tracking-tight">
            Trusted By Industrial Giants
          </h2>
        </div>

        {/* Marquee Wrapper with Edge Fades */}
        <div className="relative flex max-w-[100vw] overflow-hidden">
          
          {/* Left/Right Gradient Masks for smooth fade-in/out */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track (Pauses on hover) */}
          <div className="flex w-[200%] gap-8 animate-marquee hover:[animation-play-state:paused] py-4 items-center">
            
            {/* Duplicated array for seamless infinite loop */}
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((idx, i) => (
              <div 
                key={i} 
                className="group relative w-48 h-24 md:w-56 md:h-28 flex-shrink-0 bg-white rounded-2xl flex items-center justify-center p-6 cursor-pointer border border-slate-100 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.12)] hover:-translate-y-1"
              >
                <div className="relative w-full h-full">
                  {/* Grayscale removed: Logos are now full color */}
                  <Image 
                    src={`/client/cli${idx}.jpg`} 
                    fill 
                    className="object-contain transition-transform duration-500 group-hover:scale-110" 
                    alt={`Partner Logo ${idx}`} 
                  />
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>
      
      {/* --- SECTION 6: EXACT TESTIMONIAL DESIGN --- */}
      <section className="py-20 bg-white font-sans border-y border-slate-100 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1.5 bg-red-600 rounded-md text-white font-bold text-[11px] uppercase tracking-wider mb-5">
            OUR TESTIMONIALS
          </div>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#4D4D4D] leading-tight">
            Client Satisfaction Speaks
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Google Summary Sidebar */}
          <div className="lg:w-[28%] flex flex-col items-center">
            <h3 className="text-[#FBB017] text-[28px] font-bold mb-2">EXCELLENT</h3>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-9 h-9 text-[#FBB017]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[15px] font-bold text-black mb-4">
              Based on <span className="font-black underline">{reviews.length} reviews</span>
            </p>
            <div className="relative w-[140px] h-[50px] flex items-center justify-center">
              <span className="font-bold text-2xl text-slate-800 tracking-tight">Google</span>
            </div>
            
            {/* Navigation Buttons for Desktop */}
            <div className="flex gap-3 mt-6">
                <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
          </div>

          {/* Testimonial Cards Slider */}
          <div className="lg:w-[72%] relative w-full overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIndex}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
              >
                {reviews.slice(reviewIndex * itemsPerPage, reviewIndex * itemsPerPage + itemsPerPage).map((rev) => (
                  <div key={rev.id} className="bg-[#F2F2F2] p-7 rounded-[22px] flex flex-col min-h-[340px] relative transition-all">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${rev.id % 2 === 0 ? 'bg-[#E84E1B]' : 'bg-[#0388D1]'}`}>
                           {rev.initial}
                        </div>
                        <div className="overflow-hidden">
                          <h4 className="font-bold text-[#1A1A1A] text-[15px] leading-tight truncate">{rev.name}</h4>
                          <p className="text-[12px] text-gray-500 mt-0.5">{rev.time}</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                         <svg className="w-5 h-5" viewBox="0 0 24 24">
                           <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                           <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                           <path fill="#FBBC05" d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z"/>
                           <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-[18px] h-[18px] text-[#FBB017]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="w-4 h-4 bg-[#2196F3] rounded-full flex items-center justify-center ml-0.5">
                         <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      </div>
                    </div>

                    <p className="text-[#333333] text-[13.5px] leading-[1.6] font-medium mb-4">{rev.text}</p>
                    
                    <div className="mt-auto">
                      <button className="text-[13px] font-bold text-gray-400 hover:text-amber-500 transition-colors">Read more</button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>

      {/* --- SECTION 7: FLEET GALLERY --- */}
      {/* --- SECTION 7: PORTFOLIO GALLERY --- */}
      <section className="py-20 bg-[#F8F9FA] overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6">
          
          {/* Title Section */}
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-1.5 bg-red-600 rounded-sm text-white font-bold text-[12px] uppercase tracking-wide mb-4">
              PORTFOLIO
            </div>
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#4D4D4D] leading-tight">
              Our Gallery
            </h2>
          </div>

         
          

        </div>

        {/* Scrolling Track */}
        <div className="relative flex max-w-[100vw] overflow-hidden">
          {/* Changed class to animate-gallery-continuous */}
          <div className="flex w-max gap-3 animate-gallery-continuous hover:[animation-play-state:paused] px-6">
            
            {/* Duplicated array for seamless one-way loop */}
            {[
              { id: 1, img: "/serviceimage/g1.jpg" },
              { id: 2, img: "/serviceimage/g2.jpg" },
              { id: 3, img: "/serviceimage/g3.jpg" },
              { id: 4, img: "/serviceimage/g4.jpg" },
              { id: 5, img: "/serviceimage/g5.jpg" },
              { id: 6, img: "/serviceimage/g6.jpg" },
              { id: 7, img: "/serviceimage/g7.jpg" },
              { id: 8, img: "/serviceimage/g8.jpg" },
              { id: 9, img: "/serviceimage/g9.jpg" },
              { id: 10, img: "/serviceimage/g10.jpg" },
              { id: 11, img: "/serviceimage/g11.jpg" },
              { id: 12, img: "/serviceimage/g12.jpg" },
              { id: 13, img: "/serviceimage/g13.jpg" },
              { id: 14, img: "/serviceimage/g14.jpg" },
              { id: 15, img: "/serviceimage/g15.jpg" },
              // Duplicated images
              { id: 16, img: "/serviceimage/g1.jpg" },
              { id: 17, img: "/serviceimage/g2.jpg" },
              { id: 18, img: "/serviceimage/g3.jpg" },
              { id: 19, img: "/serviceimage/g4.jpg" },
              { id: 20, img: "/serviceimage/g5.jpg" },
              { id: 21, img: "/serviceimage/g6.jpg" },
              { id: 22, img: "/serviceimage/g7.jpg" },
              { id: 23, img: "/serviceimage/g8.jpg" },
              { id: 24, img: "/serviceimage/g9.jpg" },
              { id: 25, img: "/serviceimage/g10.jpg" },
              { id: 26, img: "/serviceimage/g11.jpg" },
              { id: 27, img: "/serviceimage/g12.jpg" },
              { id: 28, img: "/serviceimage/g13.jpg" },
              { id: 29, img: "/serviceimage/g14.jpg" },
              { id: 30, img: "/serviceimage/g15.jpg" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative min-w-[280px] md:min-w-[340px] h-[220px] md:h-[260px] border-2 border-red-600 overflow-hidden bg-white flex-shrink-0 cursor-pointer"
              >
                <Image 
                  src={item.img} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                  alt={`Gallery Image ${item.id}`} 
                />
              </div>
            ))}
          </div>
        </div>

        
      </section>
      {/* --- GLOBAL CSS ANIMATIONS --- */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
       
        .animate-marquee { animation: marquee 25s linear infinite; }
        @keyframes galleryContinuous {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-gallery-continuous { 
            animation: galleryContinuous 50s linear infinite; /* 'alternate' removed */
          }
      `}</style>
    </div>
  );
}