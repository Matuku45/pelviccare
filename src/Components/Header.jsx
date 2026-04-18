import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper to highlight active link
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#f4f1ef] border-b border-gray-200 px-5 md:px-10 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link to="/" className="group">
          <h1 className="text-lg md:text-xl font-serif text-gray-800">
            Restore Pelvic  <span className="italic font-light"> Health</span>
          </h1>
          <p className="text-[9px] md:text-[10px] tracking-widest text-gray-500 group-hover:text-[#c89b9b] transition">
            MOVE WITH CONFIDENCE
          </p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-6 text-xs uppercase tracking-widest font-medium text-gray-600">
          <Link to="/" className={`hover:text-[#c89b9b] transition ${isActive('/') ? 'text-[#c89b9b]' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-[#c89b9b] transition ${isActive('/about') ? 'text-[#c89b9b]' : ''}`}>About</Link>
          <Link to="/women" className={`hover:text-[#c89b9b] transition ${isActive('/women') ? 'text-[#c89b9b]' : ''}`}>Care For Women</Link>
          <Link to="/men" className={`hover:text-[#c89b9b] transition ${isActive('/men') ? 'text-[#c89b9b]' : ''}`}>Care For Men</Link>
          <Link to="/chair" className={`hover:text-[#c89b9b] transition ${isActive('/chair') ? 'text-[#c89b9b]' : ''}`}>Pelvic Chair</Link>
          <Link to="/blog" className={`hover:text-[#c89b9b] transition ${isActive('/blog') ? 'text-[#c89b9b]' : ''}`}>Blog</Link>
          <Link to="/partner" className={`hover:text-[#c89b9b] transition ${isActive('/partner') ? 'text-[#c89b9b]' : ''}`}>Partner</Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link to="/book">
            <button className="bg-[#c89b9b] text-white text-[11px] uppercase tracking-tighter px-6 py-2.5 rounded-md hover:bg-[#b58383] shadow-sm transition transform hover:-translate-y-0.5">
              Book Now | Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#f4f1ef] border-t border-gray-200 px-6 py-8 space-y-4 shadow-xl flex flex-col animate-in slide-in-from-top duration-300">
          <Link onClick={() => setIsOpen(false)} to="/" className="text-sm font-bold uppercase tracking-widest text-gray-700">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="text-sm font-bold uppercase tracking-widest text-gray-700">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/women" className="text-sm font-bold uppercase tracking-widest text-gray-700">Care For Women</Link>
          <Link onClick={() => setIsOpen(false)} to="/men" className="text-sm font-bold uppercase tracking-widest text-gray-700">Care For Men</Link>
          <Link onClick={() => setIsOpen(false)} to="/chair" className="text-sm font-bold uppercase tracking-widest text-gray-700">Pelvic Chair</Link>
          <Link onClick={() => setIsOpen(false)} to="/blog" className="text-sm font-bold uppercase tracking-widest text-gray-700">Blog</Link>
          <Link onClick={() => setIsOpen(false)} to="/partner" className="text-sm font-bold uppercase tracking-widest text-gray-700">Partner</Link>
          
          <Link onClick={() => setIsOpen(false)} to="/book" className="pt-4">
            <button className="w-full bg-[#c89b9b] text-white py-4 rounded-md uppercase text-xs font-bold tracking-widest">
              Book Now | Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}