import React from 'react';

// Import local assets based on your directory
import manHero from '../assets/ManCouresel.png';
import manOnChair from '../assets/man-pelvic-chair.jpg';
import consultationImg from '../assets/consultation.png';
import sexualHealthImg from '../assets/holdingHands.png';

const CareForMen = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-100 overflow-hidden">
        <img 
          src={manHero} 
          alt="Men smiling and active" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative z-10 bg-white/80 p-8 text-center max-w-2xl mx-4 rounded-sm shadow-sm">
          <h1 className="text-4xl font-light tracking-wide text-gray-600">
            Pelvic Floor Therapy
          </h1>
          <p className="text-xl font-semibold text-gray-500 mt-2">for Men</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-[#b89494] font-semibold mb-2">
            Improve bladder control | Boost sexual performance
          </p>
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Strengthen Your Pelvic Floor</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The Pelvic Chair offers effortless, non-invasive pelvic floor therapy for men dealing with 
              urinary incontinence, erectile dysfunction, and other pelvic health concerns.
            </p>
            <p>
              Using advanced electromagnetic technology, this treatment stimulates and strengthens deep 
              pelvic muscles - without exercise, discomfort, or downtime.
            </p>
            <p className="font-medium text-gray-700 bg-[#f4eaea] p-4 border-l-4 border-[#b89494]">
              Each 30-minute session delivers more than 11,000 targeted muscle contractions, giving you 
              the benefits of thousands of Kegels while you sit comfortably, fully clothed.
            </p>
          </div>
          <button className="mt-8 bg-[#b89494] text-white px-8 py-3 rounded-sm hover:bg-[#a68282] transition shadow-md font-bold tracking-wider">
            BOOK NOW
          </button>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl border border-gray-100">
          <img 
            src={manOnChair} 
            alt="Man sitting comfortably on Pelvic Chair" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </section>

      {/* Who is it for - Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center font-bold text-gray-700 mb-2">Who is Pelvic Therapy for?</h2>
          <p className="text-center text-gray-500 mb-12">Our pelvic floor therapy is designed for:</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Urinary leaks", sub: "(stress incontinence)" },
              { title: "Strong urges", sub: "(urge incontinence)" },
              { title: "Frequent trips", sub: "due to overactive bladder" },
              { title: "Improve erectile function", sub: "and blood flow" },
              { title: "Premature ejaculation", sub: "struggles" },
              { title: "Post-prostate surgery", sub: "recovery support" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded shadow-sm text-center border-t-4 border-transparent hover:border-[#b89494] transition group">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-[#f4eaea] rounded-full flex items-center justify-center text-[#b89494] group-hover:bg-[#b89494] group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                  </div>
                </div>
                <p className="font-semibold text-gray-700">{item.title}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefit Rows */}
      <section className="py-16 space-y-24">
        {/* Row 1 - Bladder Health */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 rounded overflow-hidden shadow-lg">
             <img src={consultationImg} alt="Professional Consultation" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 border-b-2 border-[#b89494] inline-block pb-1">
              Reduced leaks and urgency
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Traditional treatments like medication or surgery can be invasive. The pelvic chair 
              offers a simple, non-invasive solution. By deeply strengthening the muscles, it improves 
              bladder control significantly, helping you regain control over your daily routine.
            </p>
            <p className="text-gray-500 italic text-sm">
              *Many men notice a difference after just a few sessions.
            </p>
          </div>
        </div>

        {/* Row 2 - Sexual Health */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="md:w-1/2 rounded overflow-hidden shadow-lg">
            <img src={sexualHealthImg} alt="Improved intimacy and health" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 border-b-2 border-[#b89494] inline-block pb-1">
              Improved sexual health
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Weak pelvic floor muscles often result in difficulty maintaining firmness or controlling ejaculation. 
              This treatment improves neuromuscular control and blood flow retention, leading to greater 
              confidence, better performance, and enhanced sensation.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-[#b89494] py-12 text-center text-white">
        <h2 className="text-2xl font-light mb-6">Ready to regain your strength and confidence?</h2>
        <button className="bg-white text-[#b89494] font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition">
          Schedule Your Consultation
        </button>
      </section>

    </div>
  );
};

export default CareForMen;