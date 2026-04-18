import React from 'react';

// Import local assets
import womenOnChair from '../assets/womenOnPelvicChair.jpg';
import treatmentDiagram from '../assets/pelvicCareMachine.webp';
import reducedLeaksImg from '../assets/reducedLeaks.png';
import sexualWellnessImg from '../assets/sexualwellness.png';
import menopauseImg from '../assets/menopause.webp';

// Color Palette
// Dusty Rose: #C09696
// Background Muted Rose: #D6C5C5
// Dark Text: #4A4A4A
// Light Cream: #FFF9F3

const CareForWomen = () => {
  return (
    <div className="bg-white text-[#4A4A4A] font-sans selection:bg-[#C09696]/20">
      
      {/* --- HERO SECTION (NO IMAGE) --- */}
      <section className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gradient-to-br from-[#D6C5C5] via-[#FFF9F3] to-white">
        <div className="bg-white/90 px-16 py-10 rounded-xl shadow-lg text-center border border-[#E8DADA]">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#4A4A4A]">
            Pelvic Floor Therapy
          </h1>
          <p className="text-lg text-gray-600 mt-2">for Women</p>
        </div>
      </section>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-[#C09696] font-medium tracking-widest uppercase">
        Home | Pelvic Floor Therapy for Women
      </div>

      {/* --- STRONGER PELVIC FLOOR SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-[#C09696] font-medium tracking-wide uppercase text-sm">
              Zero effort | Real results
            </span>
            <h2 className="text-4xl font-semibold text-[#4A4A4A] mt-2 mb-6">
              Stronger Pelvic Floor Muscles
            </h2>
            <div className="space-y-6 text-[17px] leading-relaxed text-gray-600 font-light">
              <p>
                Kegel exercises are often recommended to treat and prevent urinary incontinence - 
                but many women struggle to do them correctly or consistently. That's where the 
                Pelvic Chair comes in.
              </p>
              <p>
                Our pelvic floor therapy sessions use advanced electromagnetic stimulation to target 
                and strengthen the pelvic floor muscles. You sit - <strong>fully clothed</strong> - 
                while the chair does the work for you.
              </p>
              <p>
                Each 30-minute session delivers over 11,000 muscle contractions, giving you the 
                benefits of thousands of Kegels without the strain, discomfort, or guesswork.
              </p>
              <p className="font-semibold text-gray-800">Sit smart. Start healing.</p>
            </div>
            <button className="mt-8 bg-[#C09696] hover:bg-[#a87d7d] text-white font-bold py-3 px-10 rounded transition uppercase tracking-wider">
              Book Now
            </button>
          </div>

          <div className="lg:w-1/2">
            <img 
              src={womenOnChair} 
              alt="Woman using Pelvic Chair" 
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- DIAGRAM SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-[#FFF9F3] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-[#F3E6D9]">
          <div className="md:w-1/2">
            <p className="text-xl leading-relaxed text-gray-700">
              The Pelvic Floor Chair strengthens weak pelvic muscles through thousands 
              of contractions, helping restore bladder control and pelvic support.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={treatmentDiagram} 
              alt="Treatment Diagram" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* --- REDUCED LEAKS SECTION --- */}
      <section className="flex flex-col md:flex-row min-h-[500px]">
        <div className="md:w-1/2">
          <img 
            src={reducedLeaksImg} 
            alt="Reduced Leaks" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 bg-[#D6C5C5] p-12 lg:p-20 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-8">
            Reduced <span className="font-bold">leaks</span> and urgency
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-[16px]">
            <p>
              Stress incontinence occurs when stress is put on the abdomen and muscles around 
              the abdomen and pelvic floor.
            </p>
            <p>
              The treatment is based on targeted and deep stimulation of the pelvic floor muscles.
            </p>
            <p>
              Therapy can significantly reduce involuntary leaks when laughing, sneezing, or exercising.
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <div className="bg-[#E2D1D1] py-12 text-center">
        <p className="text-[#4A4A4A] text-2xl font-light tracking-wide px-4">
          Take control of your <span className="font-bold underline decoration-[#C09696]">confidence</span> today.
        </p>
        <button className="mt-8 bg-white text-[#C09696] font-bold py-3 px-12 rounded-full shadow-lg hover:shadow-xl transition-all">
          Book Your Session
        </button>
      </div>

    </div>
  );
};

export default CareForWomen;