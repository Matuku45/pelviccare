import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Home, Loader2 } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://roomap-aa517-default-rtdb.firebaseio.com/users.json");
      const data = await res.json();

      if (!data) {
        setError("Database is empty or unreachable.");
        setLoading(false);
        return;
      }

      // Convert Firebase Object to Array
      const users = Object.entries(data).map(([key, value]) => ({
        firebaseId: key,
        ...value,
      }));

      // --- DEBUGGING LOGS (Open Inspect -> Console to see these) ---
      console.log("Checking for Email:", email.trim().toLowerCase());
      console.log("Checking for Password:", password.trim());
      console.log("Users found in DB:", users);
      // -------------------------------------------------------------

      const foundUser = users.find((u) => {
        // We use optional chaining (?) and fallback to empty string to prevent crashes
        const dbEmail = (u.email || "").toString().trim().toLowerCase();
        const dbPassword = (u.password || "").toString().trim();
        
        const inputEmail = email.trim().toLowerCase();
        const inputPassword = password.trim();

        return dbEmail === inputEmail && dbPassword === inputPassword;
      });

      if (foundUser) {
        localStorage.setItem("token", "logged-in-session-active");
        localStorage.setItem("user", JSON.stringify(foundUser));
        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f6f5] p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
        
        <div className="text-center mb-8">
          <div className="bg-[#c89b9b] w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg">
            <Lock size={24} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Admin Portal</h2>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">Restore Pelvic Health</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 border border-red-100 p-4 rounded-xl mb-6 text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Email Address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#c89b9b] outline-none transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#c89b9b] outline-none transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-white bg-gray-800 hover:bg-gray-900 shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign In"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full py-4 rounded-xl font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors"
            >
              <Home size={18} /> Return to Website
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}