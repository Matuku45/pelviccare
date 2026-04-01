import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#a9a2a2] text-white px-10 pt-12 pb-6">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-serif">
            Pelvic <span className="italic font-light">Care</span>
          </h2>

          <div className="flex gap-4 mt-4 text-lg">
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">LOCATION</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Address: 247 Burger St Pretoria North, Pretoria, 0116</li>
          </ul>

      
        </div>

       
       
       
        <div>
          <h3 className="font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Pelvic Care Chair</li>
            <li>Pelvic Care for Women</li>
            <li>Pelvic Care for Men</li>
          </ul>

          <h3 className="font-semibold mt-6 mb-3">USEFUL LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Become a Partner</li>
            <li>Our Blog</li>
            <li>FAQs</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><strong>Phone : </strong> 0761518353</li>
           
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">LEGAL LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-200">
        <p>© 2026 Pelvic Care</p>
        <p className="text-center md:text-right">
          "Proverbs 16:3 - Commit to the Lord whatever you do..."
        </p>
      </div>

    </footer>
  );
}