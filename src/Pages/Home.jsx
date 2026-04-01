import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  MapPin, 
  Menu 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Import images from assets
import follow1 from '../assets/follow1.jpg';
import follow2 from '../assets/follow2.jpg';
import follow3 from '../assets/follow3.jpg';
import follow4 from '../assets/follow4.jpg';
import follow5 from '../assets/follow5.jpg';
import follow6 from '../assets/follow6.jpg';
import follow7 from '../assets/follow7.jpg';
import follow8 from '../assets/follow8.jpg';

// Core Page Assets
import homeHeroImg from '../assets/homeCouresel.png';
import homeSubImg from '../assets/homepictureAfterCouresel.png';
import comparisonImg from '../assets/chairvskegels.png';

const Home = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const followImages = [
    follow1, follow2, follow3, follow4, 
    follow5, follow6, follow7, follow8
  ];

  const services = [
    "Stress and urge incontinence",
    "Overactive bladder symptoms",
    "Postpartum pelvic floor recovery",
    "Sexual health for men (erectile dysfunction)",
    "Pelvic organ prolapse",
    "Menstruation or endometriosis pain",
    "Prostate surgery recovery",
    "Sexual health for women (decrease or loss of sensation)"
  ];

  const testimonials = [
    { 
      name: "Cherry Ferreira", 
      time: "5 months ago", 
      text: "My first consultation was incredibly informative and I now understand why I am suffering, shame GP's don't explain the various options that are available rather than just prescribe meds." 
    },
    { 
      name: "Janine Barnard", 
      time: "6 months ago", 
      text: "What a find! This intervention has been a game-changer for me and I've avoided unnecessary surgery. 💃" 
    },
    { 
      name: "Melissa Hartogh", 
      time: "7 months ago", 
      text: "I started at Winc Wellness 2 months ago... now after all my treatments/physio at Winc Wellness and Pelvic Centre I am walking without almost limping." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#707070] selection:bg-[#b48c8e]/20">
      
   

      {/* HERO SECTION */}
      <section className="relative h-[550px] flex items-center justify-center bg-[#f8f5f2]">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={homeHeroImg} 
            alt="Wellness Background" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
    
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10 italic">The Care Your Core Deserves</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>At Pelvic Care, we offer non-invasive treatments for bladder and bowel incontinence as well as sexual health concerns.</p>
            <p>Our practice was founded by a mom who faced the challenges of pelvic floor dysfunction first-hand.</p>
            <p className="font-serif text-2xl text-gray-800 italic pt-6 border-t border-gray-100">
              "You deserve to move freely, laugh confidently, and live without worry."
            </p>
          </div>
        </div>
        <div className="rounded-sm overflow-hidden shadow-2xl border-8 border-white">
          <img src={homeSubImg} alt="Lifestyle pelvic care" className="w-full h-auto" />
        </div>
      </section>

      {/* INFO GRID SECTION */}
      <section className="bg-[#fcfaf8] py-24 px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif text-black mb-6 underline decoration-[#b48c8e]/30 underline-offset-8">What is the Pelvic Chair?</h3>
              <p className="leading-relaxed mb-4 text-gray-600">The Pelvic Chair activates and strengthens the deep muscles of the pelvic floor. In just one 30-minute session, it delivers over <span className="font-bold text-black border-b-2 border-[#b48c8e]/30">11,000 powerful muscle contractions</span>.</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-black mb-6 underline decoration-[#b48c8e]/30 underline-offset-8">How does it work?</h3>
              <p className="leading-relaxed text-gray-600">Using high-intensity electromagnetic pulses, the chair causes muscles to contract and relax at a much higher intensity than traditional Kegels.</p>
            </div>
          </div>

          {/* Efficiency Card */}
          <div className="bg-white p-10 shadow-2xl border border-gray-50 rounded-sm text-center">
            <h4 className="font-bold text-black uppercase tracking-tighter text-2xl mb-2">High Efficiency</h4>
            <div className="border-y border-dashed border-gray-200 py-3 mb-8 uppercase text-[10px] tracking-widest font-black text-gray-400">
              30min session = 11,000 - 12,000 kegel exercises
            </div>
            <img src={comparisonImg} alt="Comparison chart" className="w-full rounded-sm shadow-md mb-8" />
            <div className="flex justify-center items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#b48c8e] animate-ping"></span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b48c8e]">Non-Invasive | Fully Clothed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-gray-400">Discover our core services</span>
          <h2 className="text-4xl font-serif text-black mt-4 mb-20 italic">What we do</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => (
              <div key={i} className="p-12 border border-gray-100 flex flex-col items-center justify-center bg-white hover:bg-[#fdfbf9] transition-all group min-h-[240px]">
                <CheckCircle className="text-[#b48c8e] mb-6 opacity-40 group-hover:opacity-100" size={26} />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <Link to="/book">
              <button className="bg-black text-white px-12 py-5 text-[12px] font-bold tracking-[0.3em] uppercase hover:bg-gray-800 transition-all shadow-xl rounded-sm">
                Book Your First Session Now
              </button>
            </Link>
            <div className="flex items-center justify-center gap-3 text-[11px] text-gray-400 mt-6 tracking-[0.1em] font-medium italic">
              <MapPin size={14} className="text-[#b48c8e]" /> Please enquire with your branch about current promotions
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / FOLLOW US SECTION */}
      <footer className="py-24 bg-white text-center border-t border-gray-100">
        <h3 className="text-xs font-bold tracking-[0.5em] uppercase mb-16 text-black">Follow Our Journey</h3>
        
        <div className="flex justify-center gap-3 flex-wrap mb-24 max-w-6xl mx-auto px-6">
          {followImages.map((img, i) => (
            <div key={i} className="w-24 h-24 md:w-36 md:h-36 bg-gray-50 overflow-hidden cursor-pointer rounded-sm border border-gray-100 hover:scale-105 transition-transform duration-300">
              <img 
                src={img} 
                alt={`Instagram update ${i+1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase font-medium">© 2026 Pelvic Care South Africa. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;