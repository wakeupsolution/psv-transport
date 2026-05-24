import Link from "next/link";

const allServices = [
  {
    title: "SCV Trucks",
    link: "/services/scv",
  },
  {
    title: "LCV Trucks",
    link: "/services/lcv",
  },
  {
    title: "HCV Trucks",
    link: "/services/hcv",
  },
  {
    title: "ODC Trucks",
    link: "/services/odc",
  },
  {
    title: "Flatbed Trailers",
    link: "/services/Flatbed",
  },
  {
    title: "Hydraulic",
    link: "/services/Hydraulic",
  },
  {
    title: "Lowbed",
    link: "/services/Lowbed",
  },
  {
    title: "Semibed",
    link: "/services/Semibed",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        All Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service, index) => (
          <Link key={index} href={service.link}>
            <div className="border rounded-xl p-6 hover:shadow-xl transition cursor-pointer">
              <h2 className="text-2xl font-semibold">
                {service.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}