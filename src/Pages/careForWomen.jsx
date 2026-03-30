import React from 'react';

// Import local assets
import womenCarousel from '../assets/careForWomenCouresel.png';
import womenOnChair from '../assets/womenOnPelvicChair.jpg';
import treatmentDiagram from '../assets/pelvicCareMachine.jpg';
import reducedLeaksImg from '../assets/reducedLeaks.png';
import sexualWellnessImg from '../assets/sexualwellness.png';
import menopauseImg from '../assets/menopause.png';

// Color Palette
// Dusty Rose: #C09696
// Background Muted Rose: #D6C5C5
// Dark Text: #4A4A4A
// Light Cream: #FFF9F3

const CareForWomen = () => {
  return (
    <div className="bg-white text-[#4A4A4A] font-sans selection:bg-[#C09696]/20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src={womenCarousel} 
          alt="Women smiling" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 bg-white/85 px-16 py-8 rounded-sm shadow-sm text-center">
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

      {/* --- WHO IS IT FOR GRID --- */}
      <section className="bg-[#D6C5C5] py-20 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-2">
            Who is Pelvic Treatment for?
          </h2>
          <p className="mb-12 text-gray-700">Our pelvic floor therapy is designed for:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "Women who experience **urinary leaks** (stress incontinence)" },
              { text: "Women who feel sudden, **strong urges to urinate** (urge incontinence)" },
              { text: "Women who suffer from **frequent bathroom trips** due to an **overactive bladder**" },
              { text: "Women who are **recovering after childbirth**" },
              { text: "Women who want to **improve core strength** and **sexual wellness**" },
              { text: "Women who want to prevent or manage **pelvic organ prolapse**" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/90 p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[180px]">
                <div className="w-12 h-12 bg-[#D6C5C5] rounded-full mb-4 flex items-center justify-center">
                   <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
                <p className="text-gray-600 leading-snug px-4">
                  {item.text.split('**').map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
                </p>
              </div>
            ))}
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
              the abdomen and pelvic floor, like when you cough, sneeze, laugh or lift heavy 
              objects.
            </p>
            <p>
              The treatment is based on targeted and deep stimulation of the pelvic floor 
              muscles to a 'supramaximal' level.
            </p>
            <p>
              By restoring tone and function to the pelvic floor, therapy can significantly 
              reduce involuntary leaks when laughing, sneezing, jumping, or exercising.
            </p>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: SEXUAL HEALTH --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-8">
              Improved <span className="text-[#C09696]">sexual health</span> and sensation
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-[16px]">
              <p>
                Our pelvic chair targets the pelvic floor muscles, including those within the vagina and vaginal canal. 
                Through deep muscle stimulation, these muscles contract and relax repeatedly — offering an effective 
                and non-invasive workout.
              </p>
              <p>
                This process strengthens the pelvic floor and encourages the natural production of 
                <strong> fibroblasts and collagen</strong>. As a result, the vaginal tissues — including the labia 
                and clitoris — may become more responsive and sensitive, enhancing sexual sensation.
              </p>
              <p>
                Over time, clients often notice improved vaginal tightness, heightened sensitivity, and increased 
                ease and intensity of orgasm. Many women report a boost in sexual pleasure, renewed confidence, 
                and a positive shift in their overall sexual well-being.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={sexualWellnessImg} alt="Sexual Wellness" className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- POSTPARTUM & PROLAPSE SECTION --- */}
      <section className="bg-[#FFF9F3] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-6">Support for <span className="text-[#C09696]">postpartum</span> recovery</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The effects that pregnancy and childbirth can have on the body are varied and can have a significant 
                impact on your life, both while you are pregnant and after you have given birth.
              </p>
              <p>
                During pregnancy, the weight of the baby pressing on the bladder can disrupt the way your bladder 
                and pelvic floor muscles usually work, leading to symptoms of stress incontinence.
              </p>
              <p>
                Vaginal birth can also affect the pelvic floor muscles due to the strain it puts on the pelvic floor. 
                An estimated half of women experience changes in continence after childbirth.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-6">Non-surgical treatment for <span className="text-[#C09696]">prolapse</span> symptoms</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pelvic organ prolapse occurs when pelvic organs shift out of place due to weakened support.
              </p>
              <p>
                Strengthening the pelvic floor can help reduce prolapse symptoms, relieve pressure or bulging 
                sensations, and may delay or even prevent the need for surgery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MENOPAUSE & GSM SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-8">Menopause</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Menopause brings about a natural drop in estrogen levels, which affects many parts of the body 
                — your skin, hair, metabolism and, importantly, your genitourinary system.
              </p>
              <p>
                As collagen decreases, the vaginal tissues become thinner and less elastic. This can lead to 
                uncomfortable symptoms such as vaginal dryness, a feeling of looseness (vaginal laxity), 
                and pain during intimacy.
              </p>
              <div className="bg-[#D6C5C5]/20 p-6 rounded-lg border-l-4 border-[#C09696]">
                <p className="font-medium text-[#4A4A4A]">Genitourinary Syndrome of Menopause (GSM)</p>
                <p className="text-sm mt-2">
                  GSM affects nearly half of all menopausal women. Weakening of the pelvic floor muscles 
                  is a key contributor to these symptoms and increased bladder leaks.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={menopauseImg} alt="Menopause Support" className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- ENDOMETRIOSIS SECTION --- */}
      <section className="bg-[#D6C5C5] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-8">
            Menstrual pain and <span className="font-bold italic">endometriosis</span>
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            <p>
              While the pelvic chair is best known for treating incontinence, it offers incredible 
              relief for women living with painful periods and endometriosis.
            </p>
            <p>
              By helping to relax the pelvic floor muscles and ease pressure on surrounding nerves, 
              we can significantly reduce the pain and discomfort associated with this condition.
            </p>
            <p className="font-medium text-[#4A4A4A] bg-white/50 py-4 px-8 rounded-full inline-block">
              Safe, effective, and side-effect free relief.
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