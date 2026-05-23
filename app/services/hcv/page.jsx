import React from "react";
import Link from "next/link";

export const metadata = {
  title: "HCV Segment - Heavy Commercial Vehicles",
  description:
    "High-capacity fleets providing in HCV Segment for heavy-duty long haul, industrial transit, and bulk corporate contracts in Chennai.",
};

const hcvVehicles = [
  {
    id: 1,
    name: "HCV Trucks (Heavy Commercial Vehicles)",
    service: "Bulk Transit & High-Tonnage Logistics",
    // description:
    //   "Engineered for heavy industrial shipping and massive corporate payload demands. Our Heavy Commercial Vehicle fleet offers high-torque performance, robust multi-axle chassis configurations, and maximum cargo integrity. Optimized to easily handle large-scale manufacturing output, raw materials, industrial machinery, and bulk retail supply chains out of Chennai's top industrial corridors.",
    size_range: "20 ft - 32 ft",

    // Closed & Open Configurations
    standard_title: "Open & Closed Configurations (6 to 10 Tyre)",
    standard_variants: [
      "6 Tyre: 20-24 ft (L) × 7 ft (W) × 7 ft (H) | Payload: Up to 12 Tons",
      "6 Tyre: 32 ft (L) × 8 ft (W) × 8 ft (H) | Payload: Up to 18 Tons",
      "10 Tyre: 22-24 ft (L) × 7.5 ft (W) × 7.5 ft (H) | Payload: Up to 19 Tons",
    ],

    // Heavy Duty Open Only Configurations
    heavy_title: "Heavy-Duty Configurations (Open Body Only)",
    heavy_variants: [
      "12 Tyre: 24-26 ft (L) × 7.5 ft (W) × 7.5 ft (H) | Payload: Up to 25 Tons",
      "14 Tyre: 26-28 ft (L) × 7.5 ft (W) × 7.5 ft (H) | Payload: Up to 30 Tons",
      "16 Tyre: 28-30 ft (L) × 7.5 ft (W) × 7.5 ft (H) | Payload: Up to 35 Tons",
      "18 Tyre: 30-32 ft (L) × 7.5 ft (W) × 7.5 ft (H) | Payload: Up to 40 Tons",
    ],

    special_variants: [
      "Hitech Body",
      "Side Angle Support",
      "Wood Platforms",
      "Steel Platforms",
    ],
    popular_models: [
      "TATA Prima",
      "Ashok Leyland AVTR",
      "Eicher Pro",
      "BharatBenz",
    ],
    image: "/serviceimage/g4.jpg",
  },
];

export default function HCVSegmentPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-16 md:pt-20 pb-16 font-sans antialiased">
      {/* Corporate Page Header */}
      <div className="relative bg-slate-900 border-b border-gray-200 shadow-sm mb-12 md:mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-40"
            alt="HCV Fleet Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="text-[#0000fe] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
            Fleet Overview
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Heavy Commercial <span className="text-[#fe0000]">Vehicles</span>{" "}
            (HCV)
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Engineered for extreme structural loads and industrial logistics.
            Our heavy-duty multi-axle trucks scale your capacity effortlessly up
            to 40 Tons.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {hcvVehicles.map((vehicle) => (
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
                      Payload Range
                    </p>
                    <h4 className="text-gray-900 text-lg font-extrabold">
                      12 to 40 Tons
                    </h4>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[11px] uppercase tracking-[2px] font-bold">
                      Max Length
                    </p>
                    <h4 className="text-[#fe0000] text-lg font-extrabold">
                      {vehicle.size_range}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Description */}
              {/* <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed text-left">
                {vehicle.description}
              </p> */}

              {/* Box 1: Open & Closed Fleet Configurations */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-4 text-left">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  {vehicle.standard_title}
                </h4>
                <ul className="space-y-2.5">
                  {vehicle.standard_variants.map((variant, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0000fe] mt-2 flex-shrink-0" />
                      <span className="font-medium">{variant}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 2: Heavy Duty Open Only Layouts */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-4 text-left">
                <h4 className="text-xs font-bold text-[#fe0000] uppercase tracking-wider mb-3">
                  {vehicle.heavy_title}
                </h4>
                <ul className="space-y-2.5">
                  {vehicle.heavy_variants.map((variant, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <span className="font-medium">{variant}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 3: Popular Specialized Variants */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-4 text-left">
                <p className="text-gray-500 text-[11px] uppercase tracking-[2px] font-bold mb-2">
                  Popular Custom Configurations
                </p>
                <div className="flex flex-wrap gap-2">
                  {vehicle.special_variants.map((variant, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold transition-all duration-300 hover:bg-[#fe0000] hover:text-white hover:border-[#fe0000] cursor-default"
                    >
                      {variant}
                    </span>
                  ))}
                </div>
              </div>

              {/* Box 4: Handled Brand OEM Models */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6 text-left">
                <p className="text-gray-500 text-[11px] uppercase tracking-[2px] font-bold mb-2">
                  Popular Handled Models
                </p>
                <div className="flex flex-wrap gap-2">
                  {vehicle.popular_models.map((model, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 cursor-default"
                    >
                      {model}
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
