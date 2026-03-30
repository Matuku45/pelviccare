import React from 'react';
import { CheckCircle, Mail, Phone, Globe, Share2, ArrowRight } from 'lucide-react';

// Asset Imports
import partnerHeroImg from '../assets/partnerCouresel.png';
import partnerWhoImg from '../assets/whoWePartnerWith.png';
import partnerTreatmentImg from '../assets/abouttreatmentonpartner.png';
import partnerGalleryImg from '../assets/picturesOnPrtners.png';

const Partner = () => {
  const practiceTypes = [
    "General Practitioners", "Physiotherapy Practices", "Biokineticists", 
    "Pilates Studios", "Yoga Studios", "Aesthetic & Wellness Clinics", 
    "Multi-disciplinary Health Centres", "Allied Healthcare Practices"
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
        <img 
          src={partnerHeroImg} 
          alt="Healthcare Partnership" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 bg-white/95 p-12 text-center max-w-3xl shadow-2xl mx-4 border-t-4 border-[#b89494]">
          <h1 className="text-5xl font-serif text-gray-800 tracking-tight mb-4 italic">
            Partner With Pelvic Care
          </h1>
          <p className="text-sm font-bold text-[#b89494] mb-4 uppercase tracking-[0.3em]">
            Add a High-Demand Service to Your Practice
          </p>
          <nav className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Home <span className="mx-2">|</span> <span className="text-gray-800">Become a Partner</span>
          </nav>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src={partnerTreatmentImg} 
              alt="Treatment overview" 
              className="rounded-sm shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#b89494] p-8 text-white hidden md:block">
              <p className="text-2xl font-serif italic">"Scale your practice effortlessly."</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-serif text-gray-800 mb-8 italic">Enhance Patient Outcomes Without Extra Overhead</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Pelvic floor dysfunction affects millions, yet many practices lack the specialized technology to treat it effectively.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 font-medium">
              Our Partner Programme allows you to integrate medical-grade Pelvic Chair treatments into your clinic with zero capital outlay.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                "No capital outlay", "No rebranding required", 
                "Full training provided", "Marketing support", 
                "Proven revenue model", "Ongoing tech support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-bold uppercase tracking-wider">
                  <CheckCircle size={20} className="text-[#b89494] flex-shrink-0" /> 
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-[#fdfaf8] p-8 border-l-4 border-[#b89494] shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Join 25+ South African Branches</h3>
              <p className="text-gray-500 mb-6 italic text-sm">Expanding your reach, improving their lives.</p>
              <button className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition shadow-lg">
                Request Partnership Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-[#fcfaf8] py-24 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif italic text-gray-800 mb-4">How it Works</h2>
            <div className="h-1 w-20 bg-[#b89494] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Comprehensive Training", desc: "We provide your staff with the clinical and technical expertise to operate the Pelvic Chair safely." },
              { num: "02", title: "Seamless Integration", desc: "The device is placed within your facility. We handle the logistics; you focus on your patients." },
              { num: "03", title: "Targeted Marketing", desc: "We deploy localized Google and Social Media campaigns to drive high-intent leads to your door." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-10 shadow-sm border border-gray-50 relative group hover:shadow-xl transition-all duration-500">
                <span className="text-5xl font-serif text-gray-100 absolute top-4 right-6 group-hover:text-[#b89494]/10 transition-colors">{step.num}</span>
                <h4 className="text-xl font-bold text-gray-800 mb-4 relative z-10 uppercase tracking-tighter">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Partner With - Visualized */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-serif italic text-gray-800 mb-6">Who We Partner With</h2>
            <p className="text-gray-500 mb-8">We collaborate with health and wellness professionals who are committed to holistic patient care.</p>
            <div className="grid grid-cols-1 gap-3">
              {practiceTypes.map((type, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2 border-b border-gray-50 text-xs font-bold uppercase tracking-widest text-gray-600">
                   <ArrowRight size={14} className="text-[#b89494]" /> {type}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 gap-4">
            <img src={partnerWhoImg} alt="Partner network" className="w-full h-full object-cover rounded-sm shadow-md" />
            <img src={partnerGalleryImg} alt="Clinic gallery" className="w-full h-full object-cover rounded-sm shadow-md" />
          </div>
        </div>
      </section>

      {/* Partner Form Section */}
      <section id="partner-form" className="max-w-6xl mx-auto px-6 py-20 mb-20">
        <div className="bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-5 items-stretch">
            <div className="lg:col-span-2 bg-black p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif italic mb-6">Let's Discuss Growth</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-10">Fill out the form and our partnership manager will reach out within 24 hours.</p>
                
                <div className="space-y-6">
                  <a href="tel:0848844608" className="flex items-center gap-4 text-sm hover:text-[#b89494] transition">
                    <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center">
                      <Phone size={16} />
                    </div>
                    (084) 884-4608
                  </a>
                  <a href="mailto:info@pelviccare.co.za" className="flex items-center gap-4 text-sm hover:text-[#b89494] transition">
                    <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center">
                      <Mail size={16} />
                    </div>
                    info@pelviccare.co.za
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-10">
                <Globe className="text-gray-500 hover:text-white cursor-pointer" size={20} />
                <Share2 className="text-gray-500 hover:text-white cursor-pointer" size={20} />
              </div>
            </div>

            <div className="lg:col-span-3 p-12">
              <form className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">First Name</label>
                    <input type="text" className="w-full p-4 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-[#b89494]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Last Name</label>
                    <input type="text" className="w-full p-4 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-[#b89494]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Email Address*</label>
                  <input type="email" className="w-full p-4 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-[#b89494]" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Practice Type / Province</label>
                  <select className="w-full p-4 bg-gray-50 border-none outline-none text-gray-500 focus:ring-1 focus:ring-[#b89494]">
                    <option>Select Province*</option>
                    {["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"].map(prov => (
                      <option key={prov}>{prov}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">How can we help?</label>
                  <textarea rows="4" className="w-full p-4 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-[#b89494]"></textarea>
                </div>
                <button className="bg-[#b89494] text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-black transition-all duration-300">
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;