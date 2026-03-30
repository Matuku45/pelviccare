import React from 'react';

// Import Assets from directory
import img15Mar from '../assets/15march.jpg';
import img04Mar from '../assets/04march.jpg';
import img24Feb from '../assets/24feb.jpg';
import img28Jan from '../assets/28jan.jpg';
import img21Jan from '../assets/21jan.jpg';
import img12Dec from '../assets/12dec.jpg';
import img23Nov from '../assets/23nov.jpg';
import img24Sep from '../assets/24sep.jpg';
import img22Sep from '../assets/22sep.jpg';
import img18Jul from '../assets/18jul.jpg';
import img01Jul from '../assets/01jul.jpg';
import img29May from '../assets/29may.jpg';
import img28May from '../assets/28may.jpg';
import img27May from '../assets/27may.jpg';
import img26May from '../assets/26may.jpg';
import img30Oct from '../assets/30oct.jpg';

const Blog = () => {
  const posts = [
    {
      day: "15", month: "Mar", category: "Pelvic Care",
      title: "Pilates and Pelvic Care: Q&A with Claudia Sugison",
      author: "Chrismari De Kock",
      excerpt: "Pilates is highly effective for pelvic care by strengthening the deep core, transverse abdominis, and glutes, which directly support the pelvic floor...",
      image: img15Mar
    },
    {
      day: "04", month: "Mar", category: "Pelvic Care",
      title: "Pelvic Floor Therapy Explained: Q&A with Physiotherapist Marna Snyman",
      author: "Chrismari De Kock",
      excerpt: "At Pelvic Care we are not only proud of the results that are achieved for clients who have completed sessions with our Pelvic Chair...",
      image: img04Mar
    },
    {
      day: "24", month: "Feb", category: "Pelvic Care",
      title: "Pelvic Floor Therapy in South Africa: Treatment for Postpartum Incontinence and Sexual Health",
      author: "Chrismari De Kock",
      excerpt: "Pelvic floor health is one of the most important and least discussed aspects of overall wellbeing. For many women and men in South Africa...",
      image: img24Feb
    },
    {
      day: "28", month: "Jan", category: "Pelvic Care",
      title: "Men’s Sexual Health and the Pelvic Floor",
      author: "Chrismari De Kock",
      excerpt: "Sexual health challenges affect many men at some point in their lives. While medication is often the first solution considered, it does...",
      image: img28Jan
    },
    {
      day: "21", month: "Jan", category: "Pelvic Care",
      title: "Male Bladder Control and the Pelvic Floor",
      author: "Chrismari De Kock",
      excerpt: "Bladder control issues in men are far more common than most people realise. From urine leakage during exercise or laughter to difficult...",
      image: img21Jan
    },
    {
      day: "12", month: "Dec", category: "Pelvic Care",
      title: "How Non-Invasive Pelvic Chair Therapy Transforms Your Pelvic Health",
      author: "Chrismari De Kock",
      excerpt: "Have you ever hear of Pelvic Chair Therapy? For many women, changes like a small leak when laughing or the sudden loss of bladder contr...",
      image: img12Dec
    },
    {
      day: "23", month: "Nov", category: "Pelvic Care",
      title: "Sexual Wellness and Pelvic Floor Health: Beyond urinary continence",
      author: "Chrismari De Kock",
      excerpt: "Beyond urinary continence, the functionality of the pelvic floor is closely tied to sexual wellness and health. Strong pelvic floor mus...",
      image: img23Nov
    },
    {
      day: "24", month: "Sep", category: "Pelvic Care",
      title: "How Pelvic Floor Therapy Changed My Life: Ané’s Story",
      author: "Chrismari De Kock",
      excerpt: "I’m Ané Kitshoff, and this is my journey with pelvic floor therapy. In 2022, I became a mom after years of struggling with endometri...",
      image: img24Sep
    },
    {
      day: "22", month: "Sep", category: "Pelvic Care",
      title: "Why the Pelvic Floor is the Most Neglected Part of Our Bodies",
      author: "Chrismari De Kock",
      excerpt: "When we think about health and fitness, we often focus on the muscles we can see - toned abs, strong legs, or a lean back. But hidd...",
      image: img22Sep
    },
    {
      day: "18", month: "Jul", category: "Pelvic Care",
      title: "How Runners Can Benefit from the Pelvic Chair",
      author: "Chrismari De Kock",
      excerpt: "Telling runners to take it easy is no small ask. Many of us are so passionate about running that we’ll push through shin splints, knee...",
      image: img18Jul
    },
    {
      day: "01", month: "Jul", category: "Pelvic Care",
      title: "Unlocking the Power of Pelvic Floor Muscles",
      author: "Chrismari De Kock",
      excerpt: "The pelvic floor muscles (PFM) play a crucial role in maintaining the health and functionality of our bodies. Unfortunately, factors su...",
      image: img01Jul
    },
    {
      day: "29", month: "May", category: "Pelvic Care",
      title: "The Long-Term Effects of Using the Kegel Training Chair",
      author: "Chrismari De Kock",
      excerpt: "In this blog post, we will explore the long-term effects of using the Kegel Training Chair offered by Pelvic Care. This innovative chai...",
      image: img29May
    },
    {
      day: "28", month: "May", category: "Pelvic Care",
      title: "Client Success Story: Overcoming Pediatric Incontinence",
      author: "Chrismari De Kock",
      excerpt: "Incontinence is a common issue that affects many individuals, causing embarrassment, discomfort, and a loss of confidence. But there is...",
      image: img28May
    },
    {
      day: "27", month: "May", category: "Pelvic Care",
      title: "How “the chair” is Revolutionizing Incontinence Treatment",
      author: "Chrismari De Kock",
      excerpt: "Pelvic floor dysfunction is a widespread issue impacting millions globally, leading to various symptoms such as incontinence, sexual dy...",
      image: img27May
    },
    {
      day: "26", month: "May", category: "Pelvic Care",
      title: "Chronic Pain and Endometriosis? Treat it today!",
      author: "Chrismari De Kock",
      excerpt: "Being a mom of three children, I totally get the struggles - mentally and physically - that come with having a little one. Post-baby re...",
      image: img26May
    },
    {
      day: "30", month: "Oct", category: "Pelvic Care",
      title: "Uncovering the Truth About Pelvic Floor Myths",
      author: "Chrismari De Kock",
      excerpt: "Pelvic floor health is crucial, yet it often doesn't get the attention it deserves. Many people are unaware of what the pelvic floor co...",
      image: img30Oct
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="py-16 border-b border-gray-100 bg-[#fcfaf8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-serif tracking-widest text-gray-800 uppercase italic">Blog</h1>
          <nav className="text-xs text-gray-400 mt-4 uppercase tracking-[0.3em] font-bold">Home | Blog</nav>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-6 shadow-sm border border-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-0 left-0 bg-white/90 backdrop-blur-sm p-3 text-center min-w-[65px] border-br border-gray-100">
                  <span className="block text-xl font-serif italic text-gray-800">{post.day}</span>
                  <span className="block text-[10px] uppercase font-black text-[#b89494] tracking-tighter">{post.month}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[1px] w-4 bg-[#b89494]"></span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#b89494] font-bold">{post.category}</span>
                </div>
                
                <h2 className="text-xl font-serif text-gray-800 leading-tight group-hover:text-[#b89494] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <div className="text-[11px] text-gray-400 uppercase tracking-widest font-medium">
                  By {post.author}
                </div>
                
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-800 group-hover:text-[#b89494] transition-all">
                    Read More
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#b89494] group-hover:border-[#b89494] transition-all">
                    <span className="text-gray-400 group-hover:text-white transition-colors text-xs">→</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* Newsletter / CTA */}
      <section className="bg-[#fcfaf8] py-24 text-center border-t border-gray-100">
        <h3 className="text-2xl font-serif italic text-gray-800 mb-4">Stay Updated</h3>
        <p className="text-gray-500 text-sm mb-8 tracking-wide">Join our community for the latest in pelvic health and wellness.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto px-6">
           <input type="email" placeholder="YOUR EMAIL" className="flex-1 bg-white border border-gray-200 px-6 py-4 text-xs tracking-widest outline-none focus:border-[#b89494]" />
           <button className="bg-black text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-all">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Blog;