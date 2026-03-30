import React from 'react';

// Asset Imports
import chairHero from '../assets/pelvicChair.png';
import comparisonImg from '../assets/chairvskegels.png';
import sessionExpectationImg from '../assets/expectedDuringSession.png';
// Using a placeholder or generic icon since specific small icons weren't in the list
// You can use a library like Lucide-React for these later
import pelvicIcon from '../assets/react.svg'; 

const PelvicChair = () => {
  const treatableConditions = [
    { title: "Urinary incontinence", sub: "or leakage" },
    { title: "Sudden and frequent", sub: "urges to urinate" },
    { title: "Postpartum", sub: "recovery" },
    { title: "Symptoms", sub: "of menopause" },
    { title: "Menstrual and", sub: "endometriosis pain" },
    { title: "Erectile", sub: "dysfunction" },
    { title: "Incontinence after", sub: "prostate surgery" },
  ];

  const contraindications = [
    "Pacemakers", "Metal hip implants", "Copper intrauterine devices (IUDs)",
    "Genital piercings", "Malignant tumours", "Heart conditions",
    "Medication pumps", "Pregnancy or menstruation"
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center bg-gray-100 overflow-hidden">
        <img 
          src={chairHero} 
          alt="The Pelvic Chair Treatment" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-10 bg-white/80 p-10 text-center max-w-xl shadow-sm border border-white/50 backdrop-blur-sm">
          <h1 className="text-4xl font-light text-gray-700 tracking-wide">The Pelvic Chair</h1>
        </div>
      </section>

      {/* Intro & How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <nav className="text-xs uppercase tracking-widest text-gray-400 mb-4">Home | Pelvic Floor Chair</nav>
          <h2 className="text-3xl font-bold text-gray-700 mb-6">What is the Pelvic Chair?</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              The Pelvic Chair activates and strengthens the deep muscles of the pelvic floor. 
              In just one 30-minute session, it delivers over <span className="font-bold text-[#b89494]">11,000 powerful muscle contractions</span>.
            </p>
            <h3 className="text-2xl font-bold text-gray-700 pt-4">How does it work?</h3>
            <p>
              Using <span className="text-[#b89494] font-medium">high-intensity electromagnetic pulses</span>, 
              the chair causes muscles to contract and relax at a much higher frequency than traditional Kegels.
            </p>
            <p className="text-sm border-l-4 border-[#b89494] pl-4 italic bg-gray-50 py-2">
              It’s a walk-in, walk-out treatment. You remain fully clothed and comfortably seated.
            </p>
          </div>
        </div>
        
        {/* Comparison Graphic Area */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-inner text-center">
          <h4 className="text-xl font-bold text-gray-700 mb-2 uppercase tracking-tight">High Efficiency</h4>
          <p className="text-sm text-gray-500 mb-8 font-medium">30min session = 11,000+ Kegel exercises</p>
          <img 
            src={comparisonImg} 
            alt="Chair vs Kegels comparison chart" 
            className="mx-auto rounded-lg shadow-md max-w-full h-auto" 
          />
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">What can it help with?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {treatableConditions.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center border-b-2 border-transparent hover:border-[#b89494]">
                 <div className="w-10 h-10 mb-4 flex items-center justify-center bg-[#fdf8f8] rounded-full p-2">
                    <img src={pelvicIcon} alt="condition icon" className="w-full opacity-60" />
                 </div>
                 <p className="font-bold text-gray-700 text-sm leading-tight mb-1">{item.title}</p>
                 <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Details & Contraindications */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-6">What to expect during a session</h3>
          <div className="mb-8 rounded-lg overflow-hidden shadow-md">
            <img src={sessionExpectationImg} alt="Treatment experience" className="w-full object-cover" />
          </div>
          <ul className="space-y-4 text-gray-600 mb-8">
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#b89494]"></span> Each session lasts around 30 minutes.</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#b89494]"></span> No pain, undressing, or invasive procedures.</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#b89494]"></span> Recommended: 1 session per week for 6 weeks.</li>
          </ul>
          
          <div className="bg-[#fdf8f8] p-6 rounded-lg border-l-4 border-[#b89494]">
            <h4 className="font-bold text-gray-700 mb-2">Costing</h4>
            <p className="text-gray-600 text-sm mb-4">Please enquire with your closest branch about current promotions.</p>
            <button className="bg-[#b89494] text-white px-6 py-4 rounded hover:bg-[#a68282] transition w-full md:w-auto uppercase text-xs font-bold tracking-widest shadow-lg">
              Book Your First Session Now
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg self-start">
          <h3 className="text-xl font-bold text-gray-700 mb-6">Who should avoid this treatment?</h3>
          <div className="grid grid-cols-1 gap-3">
            {contraindications.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-gray-600 py-2 border-b border-gray-200 last:border-0">
                <span className="text-[#b89494] font-bold">•</span> {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400 italic">
            *If you have concerns about a condition not listed here, please consult with your physician before booking.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PelvicChair;