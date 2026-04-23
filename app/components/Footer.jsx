import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-xl font-black mb-4 tracking-tight">
              PSV PRAGADEESH<br/><span className="text-red-600">TRANSPORT</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A premier logistics provider based in Chennai, specializing in surface transportation, ODC movements, and custom fleet solutions across India since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 border-b border-red-600 w-fit pb-1 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-red-500 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Segments (Now Linked) */}
          <div>
            <h4 className="text-white font-bold mb-4 border-b border-red-600 w-fit pb-1 uppercase tracking-wider text-sm">Fleet Segments</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/hcv" className="hover:text-red-500 transition-colors">HCV Segment</Link></li>
              <li><Link href="/services/lcv" className="hover:text-red-500 transition-colors">LCV Segment</Link></li>
              <li><Link href="/services/icv" className="hover:text-red-500 transition-colors">ICV Segment</Link></li>
              <li><Link href="/services/scv" className="hover:text-red-500 transition-colors">SCV Segment</Link></li>
              
            </ul>
          </div>

          {/* Contact Details (Updated from Image) */}
          <div>
            <h4 className="text-white font-bold mb-4 border-b border-red-600 w-fit pb-1 uppercase tracking-wider text-sm">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-red-500 font-bold">A:</span>
                <span className="text-slate-400">Plot No.10, Vallalar Street, Aravind
Nagar, Govardhanagiri, Avadi, Chennai,
Tiruvallur, TN. Pincode - 600 071.</span>
              </li>
              <li className="flex flex-col gap-1.5">
                <div className="flex items-start">
                  <span className="mr-2 text-red-500 font-bold">E:</span> 
                  <a href="mailto:sales.psvtransport@gmail.com" className="hover:text-white transition-colors">sales.psvtransport@gmail.com</a>
                </div>
                <div className="pl-6">
                  <a href="mailto:info.psvtransport@gmail.com" className="hover:text-white transition-colors">info.psvtransport@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start mt-1">
                <span className="mr-2 text-red-500 font-bold">P:</span> 
                <a href="tel:+917010688410" className="hover:text-white transition-colors">+91 70106 88410</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Bottom Bar */}
       <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
          {/* Left Side: Copyright */}
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-xs text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} PSV Pragadeesh Transport. All Rights Reserved.
            </p>
          </div>

          {/* Right Side: Designed By */}
          <div className="flex items-center gap-2">
             <span className="text-xs text-slate-500">
               Designed by
             </span>
             <a href="https://wakeupsolution.in" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform duration-300">
               <Image 
                 src="/wakeup.png" 
                 alt="WakeUp Solution Logo" 
                 width={150} 
                 height={40} 
                 className="h-6 md:h-8 w-auto object-contain" 
               />
             </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;