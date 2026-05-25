import React from "react";
import Link from "next/link";

export const metadata = {
  title: "SCV Segment - Light Commercial Vehicles",
  description:
    "Fleets providing in SCV Segment for Chennai Local and Annual Contracts.",
};

const scvVehicles = [
  {
    id: 1,
    name: "SCV Trucks (Small Commercial Vehicles)",
    service: "Chennai Local & Annual Contract",
    description:
      "The ideal compact truck for navigating narrow city streets. Perfect for FMCG distribution, e-commerce parcel deliveries, and daily intra-city logistics with excellent fuel efficiency.",
    body_type: "Open and Closed",
    size_range: "10ft & 2tons",
    payload_range: "Up to 2 Tons",
    variants: [
      "7 ft (L) × 4.5 ft (W) × 6 ft (H) | Payload: Up to 1 Ton",
      "8 ft (L) × 5 ft (W) × 6 ft (H) | Payload: Up to 1.5 Tons",
      "9-10 ft (L) × 5.5 ft (W) × 6 ft (H) | Payload: Up to 2 Tons",
    ],
    image: "/serviceimage/g1.jpg",
  },
];

export default function SCVSegmentPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-16 md:pt-20 pb-16 font-sans antialiased">
      {/* Corporate Page Header */}
      <div className="relative bg-slate-900 border-b border-gray-200 shadow-sm mb-12 md:mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/serviceimage/ser1.jpg.jpeg"
            className="w-full h-full object-cover opacity-70"
            alt="SCV Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="text-[#0000fe] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
            Fleet Overview
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Small Commercial <span className="text-[#fe0000]">Vehicles</span>{" "}
            (SCV)
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Reliable, fuel-efficient light commercial vehicles for swift local
            deliveries and dedicated corporate contract logistics in Chennai.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {scvVehicles.map((vehicle) => (
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
                      Body Type
                    </p>
                    <h4 className="text-gray-900 text-lg font-extrabold">
                      {vehicle.body_type}
                    </h4>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[11px] uppercase tracking-[2px] font-bold">
                      Max Range
                    </p>
                    <h4 className="text-[#fe0000] text-lg font-extrabold">
                      {vehicle.size_range}
                    </h4>
                  </div>
                </div>
              </div>

              {/* <p className="text-black-600 text-sm sm:text-base mb-6 leading-relaxed text-left">
                {vehicle.description}
              </p> */}

              {/* Simplified Layout Dimensions Line List */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6 text-left">
                <h4 className="text-xs font-bold text-slate-1200 uppercase tracking-wider mb-3">
                  Payload & Dimension Options
                </h4>
                <ul className="space-y-2.5">
                  {vehicle.variants.map((variant, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-900"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0000fe] mt-2 flex-shrink-0" />
                      <span className="font-medium">{variant}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Models Strip */}
              <div className="bg-white border  border-gray-200 rounded-xl p-5 shadow-sm mb-6 text-left">
                <p className="text-gray-500 text-[11px] uppercase tracking-[2px] font-bold mb-2">
                  Popular Handled Models
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Ape",
                    "Ace",
                    "Super Ace",
                    "Bolero",
                    "Dost",
                    "Bada Dost",
                    "Intra V30",
                    "Intra V50",
                  ].map((model, idx) => (
                    <span
                      key={idx}
                      className="px-2
                       py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-900 text-sm font-semibold transition-all duration-300 hover:bg-[#fe0000] hover:text-white hover:border-[#fe0000] cursor-default"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Button */}
              <div className="text-left">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-[#fe0000] text-white px-8 py-3.5 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:bg-[#cc0000] hover:shadow-lg"
                >
                  Request a Quote
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
