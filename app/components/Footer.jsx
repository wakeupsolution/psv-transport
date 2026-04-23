import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 5 Columns on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-12">
          
          {/* 1. Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-black mb-4 tracking-tight">
              PSV PRAGADEESH<br/><span className="text-red-600">TRANSPORT</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A fast growing Chennai-based transport company, building trust through reliable service and smart logistics solutions provider across India since 2015.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 border-b border-red-600 w-fit pb-1 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-red-500 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/Company Profile - PSV Pragadeesh Transport.pptx.pdf" target="_blank" className="hover:text-red-500 transition-colors">Brochure</Link></li>
            </ul>
          </div>

          {/* 3. Fleet Segments (Restored) */}
          <div>
            <h4 className="text-white font-bold mb-4 border-b border-red-600 w-fit pb-1 uppercase tracking-wider text-sm">Fleet Segments</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/hcv" className="hover:text-red-500 transition-colors">HCV Segment</Link></li>
              <li><Link href="/services/lcv" className="hover:text-red-500 transition-colors">LCV Segment</Link></li>
              <li><Link href="/services/icv" className="hover:text-red-500 transition-colors">ICV Segment</Link></li>
              <li><Link href="/services/scv" className="hover:text-red-500 transition-colors">SCV Segment</Link></li>
            </ul>
          </div>

          {/* 4. Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-4 border-b border-red-600 w-fit pb-1 uppercase tracking-wider text-sm">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start mb-4">
  {/* The Label */}
  <span className="mr-2 text-red-600 font-bold leading-6">A:</span>
  
  {/* The Address Content */}
  <span className="flex-1 text-slate-300 leading-6">
    No. 40, Pillaiyar Kovil Street,<br />
    Govardhanagiri, Avadi,<br />
    Chennai, Tiruvallur,<br />
    Tamil Nadu - 600071.
  </span>
</li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500 font-bold">E:</span> 
                <a href="mailto:contact@psvpragadeesh.com" className="hover:text-white transition-colors">contact@psvpragadeesh.com</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500 font-bold">P:</span> 
                <a href="tel:+917010688410" className="hover:text-white transition-colors">+91 70106 88410</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500 font-bold">P:</span> 
                <a href="tel:+919638715223" className="hover:text-white transition-colors">+91 96387 15223</a>
              </li>
            </ul>
          </div>

          {/* 5. Google Map */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-4 border-b border-red-600 w-fit pb-1 uppercase tracking-wider text-sm">Location</h4>
            <div className="w-full h-32 rounded-lg overflow-hidden border">
              <iframe
                title="Google Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.007052894663!2d80.1111064!3d13.098739399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526358a8442b03%3A0x9998cd884215d52e!2sPSV%20PRAGADEESH%20TRANSPORT!5e0!3m2!1sen!2sin!4v1776949535786!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} PSV Pragadeesh Transport. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
             <span className="text-xs text-slate-500">Designed by</span>
             <a href="https://wakeupsolution.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
               <Image 
                 src="/wakeup.png" 
                 alt="WakeUp Solution Logo" 
                 width={100} 
                 height={30} 
                 className="h-6 w-auto object-contain" 
               />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;