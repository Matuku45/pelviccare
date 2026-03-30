import React, { useState } from 'react';
// Replaced Facebook and Instagram with Globe and Share2 to avoid export errors
import { Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', branch: '', message: ''
  });

  const branches = [
    { province: "Eastern Cape", locations: [
      { name: "East London", address: "11 Smartt Rd, Nahoon East London, 5241", tel: "072 829 5584", email: "eastlondon@pelviccare.co.za" },
      { name: "Port Elizabeth", address: "9 Jutland Crescent, Gqeberha, 6001", tel: "072 042 6309", email: "portelizabeth@pelviccare.co.za" },
      { name: "St Francis Bay", address: "9 Harley Street St Francis Bay, 6312", tel: "082 809 8118", email: "stfrancisbay@pelviccare.co.za" }
    ]},
    { province: "Gauteng", locations: [
      { name: "Centurion", address: "Unit 1, Highveld Medical Centre, 7 Charles de Gaulle Cres", tel: "012 685 5570", email: "centurion@pelviccare.co.za" },
      { name: "Moreleta Park", address: "813 Rubenstein Drive, Moreletapark Pretoria", tel: "066 235 4201", email: "moreletapark@pelviccare.co.za" }
    ]},
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-200">
        <img src="/path-to-contact-hero.jpg" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 bg-white/90 p-8 text-center shadow-lg">
          <h1 className="text-4xl font-light text-gray-700 uppercase tracking-widest">Book or Contact Us</h1>
          <p className="text-sm text-gray-400 mt-2 italic">Home | Contact us</p>
        </div>
      </section>

      {/* Form & Contact Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-700 mb-6 italic">Always on the edge of your seat?</h2>
          <p className="text-gray-600 text-lg mb-8">It's time to sit comfortably – with confidence.</p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-gray-600">
              <Phone className="text-[#b89494]" /> <span>(084) 884-4608</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <Mail className="text-[#b89494]" /> <span>info@pelviccare.co.za</span>
            </div>
            <div className="flex gap-4 pt-4">
              {/* Using Globe and Share2 as placeholders for social links */}
              <Globe className="text-[#b89494] cursor-pointer hover:opacity-70" />
              <Share2 className="text-[#b89494] cursor-pointer hover:opacity-70" />
            </div>
          </div>

          <form className="space-y-4 bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-3 border rounded w-full outline-none focus:ring-1 focus:ring-[#b89494]" />
              <input type="text" placeholder="Last Name" className="p-3 border rounded w-full outline-none focus:ring-1 focus:ring-[#b89494]" />
            </div>
            <input type="email" placeholder="Email Address*" className="p-3 border rounded w-full outline-none focus:ring-1 focus:ring-[#b89494]" required />
            <div className="grid md:grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone" className="p-3 border rounded w-full outline-none focus:ring-1 focus:ring-[#b89494]" />
              <select className="p-3 border rounded w-full text-gray-500 outline-none focus:ring-1 focus:ring-[#b89494]">
                <option>Select Branch*</option>
                {branches.flatMap(b => b.locations).map(loc => (
                  <option key={loc.name}>{loc.name}</option>
                ))}
              </select>
            </div>
            <textarea placeholder="Message*" rows="4" className="p-3 border rounded w-full outline-none focus:ring-1 focus:ring-[#b89494]"></textarea>
            <button className="bg-[#b89494] text-white w-full py-4 rounded uppercase tracking-widest font-bold hover:bg-[#a68282] transition shadow-sm">
              Submit Message
            </button>
          </form>
        </div>

        {/* Dynamic Branch List with scrolling */}
        <div className="h-[800px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#b89494]">
          <h3 className="text-2xl font-bold text-gray-700 mb-8 border-l-4 border-[#b89494] pl-4">Our Branches</h3>
          {branches.map((prov, idx) => (
            <div key={idx} className="mb-10">
              <h4 className="text-[#b89494] font-bold text-xl border-b pb-2 mb-6 uppercase tracking-wider">
                {prov.province}
              </h4>
              <div className="grid gap-6">
                {prov.locations.map((loc, lIdx) => (
                  <div key={lIdx} className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <h5 className="font-bold text-gray-800 text-lg mb-2">
                      Pelvic Care {loc.name}
                    </h5>
                    <p className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                      <MapPin size={16} className="mt-1 flex-shrink-0 text-[#b89494]" />
                      {loc.address}
                    </p>
                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                      <span className="flex items-center gap-2 font-medium text-gray-700"><Phone size={14} className="text-[#b89494]" /> {loc.tel}</span>
                      <span className="flex items-center gap-2"><Mail size={14} className="text-[#b89494]" /> {loc.email}</span>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button className="text-xs font-bold text-[#b89494] uppercase hover:underline">Book Online</button>
                      <span className="text-gray-300">|</span>
                      <button className="text-xs font-bold text-gray-400 uppercase hover:underline">Call to Book</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;