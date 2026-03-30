import React from 'react';

// Import local assets
import aboutCarousel from '../assets/aboutCouresel.png';
import chrismariImg from '../assets/Chrismari-de-Kock.jpg';
import pelvicChairImg from '../assets/pelvicCareMachine.jpg';

const About = () => {
  return (
    <div className="bg-white text-[#4A4A4A] font-sans">
      
      {/* --- HERO BANNER SECTION --- */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src={aboutCarousel} 
          alt="About Pelvic Care Group" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay Banner */}
        <div className="relative z-10 bg-white/80 px-12 py-6 rounded-sm shadow-sm">
          <h1 className="text-3xl md:text-4xl font-medium text-[#4A4A4A]">
            About Pelvic Care
          </h1>
        </div>
      </section>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-[#C09696]">
        Home | About Us
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-[#4A4A4A] mb-8">Pelvic Care</h2>
            <div className="space-y-6 text-[17px] leading-relaxed">
              <p>
                At Pelvic Care, we offer high-quality, non-invasive treatments for 
                incontinence, pelvic floor dysfunction, and sexual health problems - 
                for both women and men.
              </p>
              <p>
                We believe pelvic health is vital to overall well-being and are committed 
                to helping you feel confident, comfortable, and in control again. Your 
                health matters. Your dignity matters. And we’re here to help you restore both.
              </p>
            </div>
            
            <button className="mt-10 bg-[#C09696] hover:bg-[#a87d7d] text-white text-sm font-bold py-4 px-10 rounded transition duration-300 uppercase tracking-wider">
              More About Pelvic Floor Therapy
            </button>
          </div>
          
          {/* Right: Pelvic Chair Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src={pelvicChairImg} 
              alt="Pelvic Care Machine and Chair" 
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <hr className="border-gray-100 max-w-7xl mx-auto" />

      {/* --- MY STORY SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Story Text */}
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-8">My Story</h2>
            <div className="space-y-5 text-[16px] leading-relaxed text-gray-600">
              <p>
                I am <strong>Chrismari de Kock</strong>, mother to four wonderful children. My journey 
                with pelvic floor challenges began after the birth of my second child.
              </p>
              <p>
                It started with light bladder leaks when I sneezed. Like many women, I assumed it was 
                normal and suffered in silence. But the real turning point came one day while jumping 
                on the trampoline with my eldest. I completely lost control of my bladder. We had 
                guests over, and I had to run inside to change. I was horrified.
              </p>
              <p>
                Some years later, when I took up <span className="text-[#C09696] font-medium">CrossFit</span> to shed the baby weight, I realised jumping 
                rope was now impossible without leaking - so much so that I had to wear liners 
                during workouts. I felt defeated and gave up hope of ever jogging or jumping again.
              </p>
              <p>
                Determined to find a solution, I came across the <strong>Pelvic Chair</strong>. That’s when the idea for Pelvic Care was 
                born: a private, safe space where women and men can heal, restore their confidence, 
                and move carefree.
              </p>
            </div>

            {/* Results Checklist */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-6 text-gray-700">Today, I’m proud to say:</h3>
              <ul className="space-y-4">
                {[
                  "I birthed my fourth baby at 41 - with zero pelvic floor complications.",
                  "I own a jump rope and can join my kids on the trampoline.",
                  "My heavy periods have eased.",
                  "My sexual health has improved.",
                  "I can shop stress-free and drive long distances confidently."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#4A4A4A] rounded-full"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Personal Image */}
          <div className="lg:w-2/5">
            <div className="sticky top-10">
              <img 
                src={chrismariImg} 
                alt="Chrismari de Kock" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-20 space-y-6">
          <p className="text-lg text-gray-700">
            The Pelvic Chair changed how I live my life. That’s why we’ve grown into a 
            national branch network — so clients across South Africa can access safe, 
            affordable pelvic health sessions.
          </p>
          <p className="text-xl font-bold text-[#4A4A4A]">
            I know this works — because I’ve lived it. Now, I want to help you take 
            control of your body, your bladder, and your confidence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;