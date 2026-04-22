import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  Settings,
  LogOut,
  Edit3,
  Save,
  Loader2,
  Stethoscope,
  ClipboardCheck,
  Hash,
} from "lucide-react";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("bookings");
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  // ✅ AUTH GUARD
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const [admin, setAdmin] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [form, setForm] = useState({
    name: admin?.name || "",
    email: admin?.email || "",
    password: admin?.password || "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingRes = await fetch(
          "https://roomap-aa517-default-rtdb.firebaseio.com/pelvic-booking.json"
        );
        const bookingData = await bookingRes.json();

        if (bookingData) {
          const formatted = Object.keys(bookingData).map((key) => ({
            id: key,
            ...bookingData[key],
          }));
          setBookings(formatted.reverse());
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login", { replace: true });
  };

  const handleUpdate = async () => {
    const updatedUser = { ...admin, ...form };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setAdmin(updatedUser);
    setEditMode(false);

    if (admin?.id) {
      await fetch(
        `https://roomap-aa517-default-rtdb.firebaseio.com/users/${admin.id}.json`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex font-sans text-gray-900">
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-white border-r border-gray-200 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-8">
          <div className="flex items-center gap-3 text-[#c89b9b] mb-8">
            <div className="bg-[#c89b9b]/10 p-2 rounded-lg">
              <Stethoscope size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-800">Admin Panel</h1>
          </div>

          <div className="mb-10 p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="h-14 w-14 bg-[#c89b9b] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-xl border-4 border-white shadow-sm">
              {admin?.name?.charAt(0) || "A"}
            </div>
            <p className="font-bold text-gray-800 truncate">{admin?.name}</p>
            <p className="text-[10px] text-[#c89b9b] font-black uppercase tracking-widest mt-1">
              {admin?.role || "Administrator"}
            </p>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`flex items-center gap-3 p-4 w-full rounded-xl transition-all duration-200 ${
                activeTab === "bookings"
                  ? "bg-[#c89b9b] text-white shadow-lg shadow-[#c89b9b]/30 font-semibold"
                  : "hover:bg-gray-50 text-gray-500 hover:text-gray-800"
              }`}
            >
              <LayoutDashboard size={20} /> Dashboard
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-3 p-4 w-full rounded-xl transition-all duration-200 ${
                activeTab === "settings"
                  ? "bg-[#c89b9b] text-white shadow-lg shadow-[#c89b9b]/30 font-semibold"
                  : "hover:bg-gray-50 text-gray-500 hover:text-gray-800"
              }`}
            >
              <Settings size={20} /> Settings
            </button>
          </nav>
        </div>

        <div className="mt-auto p-8">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 p-4 w-full rounded-xl hover:bg-red-50 transition-colors font-bold"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">
              {activeTab === "bookings" ? "Patient Appointments" : "Profile Settings"}
            </h2>
            <p className="text-gray-500 mt-1">
              {activeTab === "bookings" 
                ? `Total Bookings Found: ${bookings.length}` 
                : "Manage your administrative account details."}
            </p>
          </div>
          <button 
            onClick={handleLogout}
            className="lg:hidden flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold text-sm shadow-sm"
          >
            <LogOut size={16} /> Logout
          </button>
        </header>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-96 gap-4">
            <Loader2 className="animate-spin text-[#c89b9b]" size={48} />
            <p className="text-gray-400 font-medium">Loading Appointment Data...</p>
          </div>
        ) : (
          <>
            {activeTab === "bookings" && (
              <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {bookings.map((b) => (
                  <div key={b.id} className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    {/* Top Stripe Status */}
                    <div className={`h-2 w-full ${b.status === 'confirmed' ? 'bg-green-400' : 'bg-orange-400'}`}></div>
                    
                    <div className="p-8">
                      {/* ID and Status Row */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Hash size={14} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">ID: {b.bookingId || b.id.slice(-8)}</span>
                        </div>
                        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          b.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                        }`}>
                          {b.status || "Pending"}
                        </span>
                      </div>

                      {/* Service Header */}
                      <div className="mb-8 bg-gray-50 p-4 rounded-2xl">
                        <label className="text-[9px] font-black uppercase text-[#c89b9b] block mb-1">Requested Service</label>
                        <h3 className="text-lg font-bold text-gray-800 leading-tight">
                          {b.service || "General Appointment"}
                        </h3>
                      </div>

                      {/* Main Data Points */}
                      <div className="space-y-5">
                        <div className="flex items-center gap-4">
                          <div className="bg-blue-50 p-2.5 rounded-xl text-blue-500"><User size={18}/></div>
                          <div>
                            <label className="text-[9px] font-black uppercase text-gray-400 block">Patient Name</label>
                            <p className="text-sm font-bold text-gray-700">{b.customerName || b.name}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-purple-50 p-2.5 rounded-xl text-purple-500"><Calendar size={18}/></div>
                            <div>
                              <label className="text-[9px] font-black uppercase text-gray-400 block">Appt. Date</label>
                              <p className="text-sm font-bold text-gray-700">{b.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="bg-orange-50 p-2.5 rounded-xl text-orange-500"><Clock size={18}/></div>
                            <div>
                              <label className="text-[9px] font-black uppercase text-gray-400 block">Appt. Time</label>
                              <p className="text-sm font-bold text-gray-700">{b.time}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-green-50 p-2.5 rounded-xl text-green-500"><MapPin size={18}/></div>
                          <div>
                            <label className="text-[9px] font-black uppercase text-gray-400 block">Meeting Location</label>
                            <p className="text-xs font-semibold text-gray-600 leading-relaxed italic">
                              {b.location || "No location provided"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action / Contact Footer */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <label className="text-[9px] font-black uppercase text-gray-400 block mb-3 text-center">Contact Information</label>
                        <div className="flex justify-center gap-3">
                          <a href={`tel:${b.phone}`} className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-[#c89b9b] hover:text-white p-3 rounded-xl transition-all text-gray-500 font-bold text-xs border border-gray-100">
                            <Phone size={14} /> Call
                          </a>
                          <a href={`mailto:${b.email}`} className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-[#c89b9b] hover:text-white p-3 rounded-xl transition-all text-gray-500 font-bold text-xs border border-gray-100">
                            <Mail size={14} /> Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "settings" && (
              <div className="max-w-xl">
                <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-bold text-gray-800">Admin Account</h3>
                    <button 
                      onClick={() => setEditMode(!editMode)} 
                      className={`px-6 py-2 rounded-full font-bold text-xs transition-all ${
                        editMode ? "bg-gray-100 text-gray-400" : "bg-[#c89b9b] text-white shadow-md shadow-[#c89b9b]/30"
                      }`}
                    >
                      {editMode ? "Cancel" : "Edit Profile"}
                    </button>
                  </div>

                  {editMode ? (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-gray-400">Full Administrator Name</label>
                        <input className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#c89b9b] outline-none font-bold" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-gray-400">Admin Email</label>
                        <input className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#c89b9b] outline-none font-bold" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-gray-400">Update Secure Password</label>
                        <input className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#c89b9b] outline-none font-bold" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                      </div>
                      <button onClick={handleUpdate} className="w-full bg-gray-800 text-white py-5 rounded-2xl font-black hover:bg-black transition-all flex items-center justify-center gap-3">
                        <Save size={20} /> Update Credentials
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <div className="flex items-center gap-5">
                        <div className="bg-[#c89b9b]/10 text-[#c89b9b] p-4 rounded-2xl"><User size={24}/></div>
                        <div>
                          <label className="text-[9px] font-black uppercase text-gray-400 block">Current Admin</label>
                          <p className="text-lg font-bold text-gray-700">{admin?.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="bg-[#c89b9b]/10 text-[#c89b9b] p-4 rounded-2xl"><Mail size={24}/></div>
                        <div>
                          <label className="text-[9px] font-black uppercase text-gray-400 block">Login Email</label>
                          <p className="text-lg font-bold text-gray-700">{admin?.email}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}