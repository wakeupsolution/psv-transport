import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Lowbed Trailers Segment - Heavy Clearance Logistics',
  description: 'High-tonnage 8-wheel and 16-wheel Lowbed Trailers for transporting heavy industrial machinery, construction excavators, and out-of-gauge equipment in Chennai.',
};

const lowbedVehicles = [
  {
    id: 1,
    name: "Lowbed Trailers",
    service: "Heavy Machinery & Low-Clearance Infrastructure Transit",
    description: "The industry standard for transporting tall, heavy-duty industrial vehicles and structural project shipments. Our lowbed trailer fleet features dropped bed elevations engineered to safely secure equipment with a high center of gravity. Perfect for moving construction earthmovers, piling rigs, crane blocks, industrial boilers, and massive factory equipment while effortlessly passing under overhead clearance barriers across state highways.",
    trailer_type: "Heavy Drop-Deck Platform",
    configs_title: "Available Lowbed Configurations",
    variants: [
      "8 Wheel Lowbed: 27 ft (L) × 10 ft (W) × 12 ft (H) | Payload Capacity: Up to 30 Tons",
      "16 Wheel Lowbed: 40 ft (L) × 11 ft (W) × 12 ft (H) | Payload Capacity: Up to 50+ Tons",
      "Heavy-Duty Lowbed: 40 ft (L) × 11 ft (W) × 12 ft (H) | Payload Capacity: Up to 75+ Tons"
    ],
    capabilities_title: "Key Cargo Capabilities",
    capabilities: [
      "Easily accommodates Over-Dimensional Cargoes (ODC)",
      "Engineered to support highly concentrated heavy Point Load Items",
      "Dropped-deck design offers maximized vertical clearance for exceptionally tall loads",
      "Ideal for construction excavators, industrial transformers, storage vessels, and massive manufacturing equipment"
    ],
    special_features: ["Ultra-Low Ground Clearance Bed", "Heavy-Duty Rear Loading Ramps", "High-Load Radial Tyre Arrays", "Multi-Point Tie-Down D-Rings"],
    image: "/serviceimage/low.jpg.jpeg", // Update with your actual Lowbed Trailer image path
  }
];

export default function LowbedTrailersPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-16 md:pt-20 pb-16 font-sans antialiased">
      
      {/* Corporate Page Header */}
      <div className="relative bg-slate-900 border-b border-gray-200 shadow-sm mb-12 md:mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/serviceimage//serviceimage/alterimage.jpg.jpeg" 
            className="w-full h-full object-cover opacity-30" 
            alt="Lowbed Trailers Fleet Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="text-[#0000fe] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
            Heavy Fleet Overview
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Lowbed <span className="text-[#fe0000]">Trailers</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Low-profile drop decks engineered for industrial scale vertical clearance, high-tonnage heavy machinery, and dense point loads.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {lowbedVehicles.map((vehicle) => (
          <div 
            key={vehicle.id} 
            className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 text-left"
          >
            {/* Left Column: Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white p-2 group">
                <div className="rounded-xl overflow-hidden bg-gray-50 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Text & Details Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
              
              {/* Badge & Title */}
              <div className="mb-4 text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-left">
                  {vehicle.name}
                </h2>
                
                <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-200 py-4 my-4 text-left">
                  <div>
                    <p className="text-gray-500 text-[11px] uppercase tracking-[2px] font-bold">
                      Maximum Capacity
                    </p>
                    <h4 className="text-gray-900 text-base font-extrabold">
                      Up to 75+ Tons
                    </h4>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[11px] uppercase tracking-[2px] font-bold">
                      Platform Width Range
                    </p>
                    <h4 className="text-red-500 text-base font-extrabold">
                      10 ft to 11 ft Deck Width
                    </h4>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              {/* <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed text-left">
                {vehicle.description}
              </p> */}

              {/* Box 1: Available Configurations */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-4 text-left">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  {vehicle.configs_title}
                </h4>
                <ul className="space-y-2.5">
                  {vehicle.variants.map((variant, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#0000fe] mt-2 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{variant}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 2: Core Engineering Capabilities */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-4 text-left">
                <h4 className="text-xs font-bold text-[#fe0000] uppercase tracking-wider mb-3">
                  {vehicle.capabilities_title}
                </h4>
                <ul className="space-y-2.5">
                  {vehicle.capabilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#fe0000] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 3: Technical Features Tag Strip */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6 text-left">
                <p className="text-gray-500 text-[11px] uppercase tracking-[2px] font-bold mb-2">
                  Specialized Lowbed Hardware
                </p>
                <div className="flex flex-wrap gap-2">
                  {vehicle.special_features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold transition-all duration-300 hover:bg-[#fe0000] hover:text-white hover:border-[#fe0000] cursor-default"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="text-left">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-[#fe0000] text-white px-8 py-3.5 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:bg-[#cc0000] hover:shadow-lg"
                >
                  Request a Lowbed Quote
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}