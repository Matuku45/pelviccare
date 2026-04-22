import React, { useState, useEffect } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔐 CHECK AUTH STATE
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  // 🚪 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();

    setIsLoggedIn(false);
    navigate("/login", { replace: true });
  };

  return (
    <header className="bg-[#f4f1ef] border-b border-gray-200 px-5 md:px-10 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* LOGO */}
        <Link to="/" className="group">
          <h1 className="text-lg md:text-xl font-serif text-gray-800">
            Restore Pelvic <span className="italic font-light">Health</span>
          </h1>
          <p className="text-[9px] md:text-[10px] tracking-widest text-gray-500 group-hover:text-[#c89b9b] transition">
            MOVE WITH CONFIDENCE
          </p>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex gap-6 text-xs uppercase tracking-widest font-medium text-gray-600">
          <Link to="/" className={isActive('/') ? 'text-[#c89b9b]' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'text-[#c89b9b]' : ''}>About</Link>
          <Link to="/women" className={isActive('/women') ? 'text-[#c89b9b]' : ''}>Care For Women</Link>
          <Link to="/men" className={isActive('/men') ? 'text-[#c89b9b]' : ''}>Care For Men</Link>
          <Link to="/chair" className={isActive('/chair') ? 'text-[#c89b9b]' : ''}>Pelvic Chair</Link>
          <Link to="/blog" className={isActive('/blog') ? 'text-[#c89b9b]' : ''}>Blog</Link>
          <Link to="/partner" className={isActive('/partner') ? 'text-[#c89b9b]' : ''}>Partner</Link>
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-4">

          {/* LOGIN / LOGOUT */}
          {!isLoggedIn ? (
            <Link to="/login">
              <button className="text-[11px] uppercase tracking-widest text-gray-600 hover:text-[#c89b9b]">
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-[11px] uppercase tracking-widest text-red-500 hover:text-red-700"
            >
              <LogOut size={14} /> Logout
            </button>
          )}

          {/* BOOK */}
          <Link to="/book">
            <button className="bg-[#c89b9b] text-white text-[11px] uppercase px-6 py-2.5 rounded-md hover:bg-[#b58383] transition">
              Book Now
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="xl:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#f4f1ef] border-t px-6 py-6 space-y-4 shadow-xl flex flex-col">

          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/women">Care For Women</Link>
          <Link onClick={() => setIsOpen(false)} to="/men">Care For Men</Link>
          <Link onClick={() => setIsOpen(false)} to="/chair">Pelvic Chair</Link>
          <Link onClick={() => setIsOpen(false)} to="/blog">Blog</Link>
          <Link onClick={() => setIsOpen(false)} to="/partner">Partner</Link>

          {/* LOGIN / LOGOUT MOBILE */}
          {!isLoggedIn ? (
            <Link onClick={() => setIsOpen(false)} to="/login">
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="text-red-500 text-left"
            >
              Logout
            </button>
          )}

          <Link onClick={() => setIsOpen(false)} to="/book">
            <button className="w-full bg-[#c89b9b] text-white py-3 rounded-md">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}