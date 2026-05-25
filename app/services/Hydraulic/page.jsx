import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Hydraulic Axle Trailers - Heavy Lift Logistics",
  description:
    "Super-heavy lift Hydraulic Axle Trailers (6 Row & 8 Row Axles) supporting up to 144 Tons with modular spacer length extensions in Chennai.",
};

const hydraulicVehicles = [
  {
    id: 1,
    name: "Hydraulic Axle Trailers",
    service: "Super-Heavy Lift & Modular Project Logistics",
    description:
      "The ultimate tier of heavy-lift engineering. Our multi-row hydraulic axle trailer fleet is specifically commissioned for high-tonnage infrastructure logistics, project cargo, and super-heavy out-of-gauge engineering blocks. Featuring synchronized hydraulic suspension setups that self-level over uneven terrain, these modular units guarantee weight distribution integrity for high-value industrial assets crossing complex transport lanes.",
    trailer_type: "Modular Hydraulic Platform",
    configs_title: "Available Modular Axle Configurations",
    variants: [
      "6 Row Axle: 30 ft (L) × 10 ft (W) × 12 ft (H) | Payload Capacity: 84 to 108 Tons",
      "8 Row Axle: 40 ft (L) × 10 ft (W) × 12 ft (H) | Payload Capacity: 112 to 144 Tons",
    ],
    capabilities_title: "Key Cargo Capabilities",
    capabilities: [
      "Easily accommodates heavy Over-Dimensional Cargoes (ODC)",
      "Engineered to withstand dense, concentrated industrial Point Load Items",
      "Modular Length Extension: Can seamlessly extend total deck lengths by integrating custom spacer beams",
      "Designed for power transformers, wind turbine components, heavy reactors, and mega structural casting blocks",
    ],
    special_features: [
      "Modular Spacer Beams",
      "Hydraulic Leveling & Suspension",
      "All-Axle Synchronized Steering",
      "High-Tensile Load Distribution",
    ],
    image: "/serviceimage/Hydraulic Axle.jpg.jpeg", // Update with your actual Hydraulic Axle Trailer image path
  },
];

export default function HydraulicAxlesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-16 md:pt-20 pb-16 font-sans antialiased">
      {/* Corporate Page Header */}
      <div className="relative bg-slate-900 border-b border-gray-200 shadow-sm mb-12 md:mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/serviceimage/ser1.jpg.jpeg"
            className="w-full h-full object-cover opacity-50"
            alt="Hydraulic Axle Fleet Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="text-[#0000fe] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
            Super-Heavy Fleet Overview
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hydraulic Axle <span className="text-[#fe0000]">Trailers</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            High-tonnage modular configurations built for extreme engineering
            loads, self-leveling stability, and custom spacer extensions.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {hydraulicVehicles.map((vehicle) => (
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
                      Up to 144 Tons
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe0000]/10 border border-[#fe0000]/20 text-[#fe0000] text-sm font-bold tracking-wide">
                      Equipped for ODC Loads
                    </span>
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
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0000fe] mt-2 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">
                        {variant}
                      </span>
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
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-[#fe0000] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 3: Technical Features Tag Strip */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6 text-left">
                <p className="text-gray-500 text-[11px] uppercase tracking-[2px] font-bold mb-2">
                  Heavy Lift Engineering Features
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
                  Request a Project Quote
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
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
