import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Asset Import
import faqHeroImg from '../assets/FAQ.png';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How many sessions will I need?",
      answer: "To see the full benefits, we recommend one session per week for six weeks. Many people begin to experience improvement after only 2–3 sessions, and periodic maintenance sessions will help sustain results."
    },
    {
      question: "How quickly will I see results?",
      answer: "Results vary by individual, but many clients report noticing improvements in bladder control or pelvic strength after the first few sessions."
    },
    {
      question: "Will I feel anything during treatment?",
      answer: "The treatment is non-invasive and painless. You will feel a tingling sensation and pelvic floor muscle contractions during the session, but it is generally quite comfortable."
    },
    {
      question: "Do I need to prepare?",
      answer: "No special preparation is required. You remain fully clothed during the entire 30-minute session."
    },
    {
      question: "What does it cost?",
      answer: "Pricing depends on the package selected. Please contact our clinic directly or use the 'Book Now' button for our current rates and special offers."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center bg-gray-200 overflow-hidden">
        <img 
          src={faqHeroImg} 
          alt="Pelvic Care Support" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Added a subtle gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 bg-white/90 px-12 py-10 text-center max-w-xl mx-4 shadow-xl border-t-4 border-[#b89494]">
          <h1 className="text-4xl font-serif text-gray-800 tracking-tight italic">
            Frequently Asked Question
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-4 font-bold">
            Everything you need to know
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-xs uppercase tracking-widest text-gray-400 mb-12">
          Home | <span className="text-gray-800 font-bold">FAQ</span>
        </nav>

        <h2 className="text-3xl text-center font-serif text-gray-800 mb-16 italic">
          Pelvic Care FAQs
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between py-6 text-left bg-white hover:pl-2 transition-all"
              >
                <span className={`text-lg font-medium tracking-tight ${openIndex === index ? 'text-[#b89494]' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-[#b89494]/10' : 'bg-transparent'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#b89494]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-300" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-gray-600 leading-relaxed pr-12">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-20 p-10 bg-[#fdfaf8] rounded-sm text-center border border-gray-100">
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Still have questions?</p>
          <button className="bg-black text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-all rounded-sm shadow-lg">
            Contact Our Specialists
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;