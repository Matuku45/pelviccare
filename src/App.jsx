import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import CareForWomen from "./Pages/careForWomen";
import CareForMen from "./Pages/careForMen";
import PelvicChair from "./Pages/pelvicChair";
import Blog from "./Pages/Blog";
import Partner from "./Pages/partner";
import Book from "./Pages/Book";
import Contact from "./Pages/contact";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";


// ===============================
// 🔐 PROTECTED ROUTE (AUTH GUARD)
// ===============================
function ProtectedRoute({ children }) {
  // We check for "token" because SignIn.js now sets it upon success
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


// ===============================
// 🧱 LAYOUT (NAVBAR + FOOTER CONTROL)
// ===============================
function Layout() {
  const location = useLocation();

  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Outlet />

      {!hideLayout && <Footer />}
    </>
  );
}


// ===============================
// 🚀 APP ROUTER
// ===============================
function App() {
  return (
    <Router>
      <Routes>

        {/* ===================== */}
        {/* PUBLIC + MAIN SITE */}
        {/* ===================== */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/women" element={<CareForWomen />} />
          <Route path="/men" element={<CareForMen />} />
          <Route path="/chair" element={<PelvicChair />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ===================== */}
        {/* AUTH ROUTES */}
        {/* ===================== */}
        <Route path="/login" element={<SignIn />} />

        {/* ===================== */}
        {/* PROTECTED DASHBOARD */}
        {/* ===================== */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}





export default App;