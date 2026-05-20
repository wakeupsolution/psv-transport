import React from 'react';
import Link from 'next/link';
import { body } from 'framer-motion/client';

export const metadata = {
  title: 'SCV Segment - Light Commercial Vehicles',
  description: 'Fleets providing in SCV Segment for Chennai Local and Annual Contracts.',
};

const scvVehicles = [
  {
    id: 1,
    name: "SCV Trucks (Small Commercial Vehicles)",
    service: "Chennai Local & Annual Contract",
    description: "The ideal compact truck for navigating narrow city streets. Perfect for FMCG distribution, e-commerce parcel deliveries, and daily intra-city logistics with excellent fuel efficiency.",
    body_type: "Body Type: Open and Closed ",
    specs: [
  {
    length: "7 ft",
    width: "4.5 ft",
    height: "6 ft",
    payload: "Up to 1 Ton",
    popular_models: "Popular Models: Ape, Ace, Super Ace, Bolero, Dost, Bada Dost, Intra V30, Intra V50, Etc."
  },
  {
    length: "8 ft",
    width: "5 ft",
    height: "6 ft",
    payload: "Up to 1.5 Tons",
  },
  {
    length: "9-10 ft",
    width: "5.5 ft",
    height: "6 ft",
    payload: "Up to 2 Tons",
  },
],
    image: "/serviceimage/g1.jpg", 
  },
  // {
  //   id: 2,
  //   name: "ASHOK LEYLAND DOST",
  //   service: "Chennai Local & Annual Contract",
  //   description: "A robust and versatile light commercial vehicle. Built to handle slightly heavier local loads like hardware, agricultural produce, and consumer durables with superior suspension.",
  //   specs: { length: "8.7 ft", width: "5.3 ft", height: "6.0 ft", payload: "1.5 Ton" },
  //   image: "/serviceimage/g2.jpg", 
  // },
  // {
  //   id: 3,
  //   name: "MAHINDRA BOLERO",
  //   service: "Chennai Local & Annual Contract",
  //   description: "The undisputed king of rugged terrain. Designed for heavy-duty local transport, construction materials, and demanding annual contracts where durability is non-negotiable.",
  //   specs: { length: "9.0 ft", width: "5.5 ft", height: "6.0 ft", payload: "1.5 Ton" },
  //   image: "/serviceimage/g3.jpg", 
  // }
];

export default function SCVSegmentPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-20 pb-24 font-sans">
      
      {/* Corporate Page Header */}
     <div className="relative bg-slate-900 border-b border-gray-200 shadow-sm mb-20 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop" 
      className="w-full h-full object-cover"
      alt="SCV Background"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/60 to-slate-900/60"></div>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
    <span className="text-[#0000fe] font-bold tracking-widest uppercase text-sm mb-3 block">Fleet Overview</span>
    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
      Small Commercial <span className="text-[#fe0000]">Vehicles</span> (SCV)
    </h1>
    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
      Reliable, fuel-efficient light commercial vehicles for swift local deliveries and dedicated corporate contract logistics in Chennai.
    </p>
  </div>
</div>
      {/* Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {scvVehicles.map((vehicle, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={vehicle.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 bg-white p-2 group">
                  <div className="rounded-xl overflow-hidden bg-gray-50 relative aspect-[4/3]">
                     <img 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        className="object-cover w-full h-full mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                      />
                  </div>
                </div>
              </div>

              {/* Text & Details Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                
                {/* Badge & Title */}
                <div className="mb-6">
                
                  <h2 className="text-3xl md:text-4xl font-bold text-left red-500 mb-2">
                    {vehicle.name}
                  </h2>
                  <div className="space-y-2">

                  <p className="text-white/80 text-[11px] md:text-xs uppercase tracking-[4px] font-bold">
                    Body Type
                  </p>

                  <h4 className="text-red-500 text-2xl md:text-3xl font-black leading-tight">
                    {vehicle.body_type}
                  </h4>

  

</div>

                  
                </div>
                
                {/* Description */}
               

                {/* Professional Data Grid */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
                  <h4 className="text-sm font-bold text-[#000000] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                    Available Specifications
                  </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">

  {vehicle.specs.map((spec, index) => (
    <div
      key={index}
      className="group bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >

      <div className="flex items-center justify-between mb-4">

        <div className="w-10 h-10 rounded-xl bg-[#0000fe]/10 flex items-center justify-center">
          <span className="text-[#0000fe] font-bold text-sm">
            {index + 1}
          </span>
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#fe0000]">
          SCV
        </span>

      </div>

      <div className="space-y-3">

        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Length
          </p>

          <h4 className="text-xl font-extrabold text-gray-900">
            {spec.length}
          </h4>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Width
          </p>

          <h4 className="text-lg font-bold text-gray-800">
            {spec.width}
          </h4>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Height
          </p>

          <h4 className="text-lg font-bold text-gray-800">
            {spec.height}
          </h4>
        </div>

        <div className="pt-3 border-t border-gray-100">

          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Payload Capacity
          </p>

          <div className="inline-flex items-center bg-[#0000fe]/10 text-[#0000fe] px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap">
            {spec.payload}
          </div>

        </div>

      </div>

    </div>
  ))}

</div>
                </div>
                {/* Body Type & Popular Models */}
<div className="space-y-5 mb-8">



  {/* Popular Models Card */}
  <div className="bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300">

    <div className="flex items-start gap-4">

      <div className="w-14 h-14 rounded-2xl bg-[#fe0000]/10 flex items-center justify-center flex-shrink-0">

        <svg
          className="w-7 h-7 text-[#fe0000]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17V5m0 0L5 9m4-4l4 4m6 4v6m0 0l-4-4m4 4l4-4"
          />
        </svg>

      </div>

      <div className="flex-1">

        <p className="text-gray-500 text-xs uppercase tracking-[3px] font-semibold mb-2">
          Popular Models
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "Ape",
            "Ace",
            "Super Ace",
            "Bolero",
            "Dost",
            "Bada Dost",
            "Intra V30",
            "Intra V50",
          ].map((model, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-[#fe0000] hover:text-white text-gray-700 text-sm font-semibold transition-all duration-300 cursor-default"
            >
              {model}
            </span>
          ))}

        </div>

      </div>

    </div>

  </div>

</div>

                {/* Corporate Call to Action */}
                <div>
                  <Link href="/contact" className="inline-flex items-center justify-center bg-[#fe0000] text-white px-8 py-3.5 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:bg-[#cc0000] hover:shadow-lg">
                    Request a Quote
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}