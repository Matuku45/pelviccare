import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const Book = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ NEW: progress bar state
  const [progress, setProgress] = useState(0);

  const [formData, setFormData] = useState({
    bookingId: Date.now(),
    customerName: "Thabiso",
    email: "thabiso@email.com",
    phone: "0812345678",
    service: "Doctor Appointment",
    date: "2026-04-25",
    time: "14:30",
    status: "confirmed",
    location: ""
  });

  const locations = [
    {
      id: 1,
      name: "Pretoria North",
      coords: [-25.6707, 28.2086],
      address: "247 Burger St, Pretoria North, Pretoria, 0116",
      tel: "0761518353"
    }
  ];

  const filteredLocations = locations.filter(loc =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openBooking = (loc) => {
    setLoading(true);

    setTimeout(() => {
      setFormData({ ...formData, location: loc.address });
      setShowModal(true);
      setLoading(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ UPDATED SUBMIT (ONLY ADDING PROGRESS)
  const handleSubmit = async () => {
    setProgress(0);
    setLoading(true);

    // fake progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + 15;
      });
    }, 150);

    try {
      await fetch(
        `${import.meta.env.VITE_FIREBASE_URL}pelvic-booking.json`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      setProgress(100);

      setTimeout(() => {
        alert("Booking saved successfully!");
        setShowModal(false);
        setProgress(0);
      }, 500);

    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking.");
      setProgress(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">

      {/* HEADER */}
      <div className="bg-white border-b py-8 px-6">
        <h1 className="text-3xl font-light tracking-widest uppercase text-gray-700">
          Our Locations
        </h1>
      </div>

      {/* LOADING TOP BAR (UNCHANGED) */}
      {loading && (
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="h-1 bg-[#b89494] animate-pulse w-full"></div>
          <p className="text-center text-sm bg-white py-2 text-gray-600">
            Processing booking request...
          </p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <input
              type="text"
              placeholder="Search location..."
              className="w-full border rounded-lg p-2"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredLocations.map(loc => (
            <div key={loc.id} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-bold">{loc.name}</h3>

              <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                <MapPin size={12} /> {loc.address}
              </p>

              <button
                onClick={() => openBooking(loc)}
                className="mt-3 text-[#b89494] font-bold text-sm"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {!showModal && (
          <div className="lg:col-span-2 h-[500px] rounded-xl overflow-hidden border">
            <MapContainer
              center={[-25.6707, 28.2086]}
              zoom={14}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

              {filteredLocations.map(loc => (
                <Marker key={loc.id} position={loc.coords}>
                  <Popup>
                    <b>{loc.name}</b>
                    <p className="text-xs">{loc.address}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}

      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-[#b89494] text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">Book Appointment</h2>
              <button onClick={() => setShowModal(false)}>✕</button>
            </div>

            {/* ✅ PROGRESS BAR (NEW - INSIDE FORM) */}
            <div className="w-full bg-gray-200 h-2">
              <div
                className="h-2 bg-[#b89494] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2">

              {/* FORM (UNCHANGED) */}
              <div className="p-6 space-y-4">

                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input name="customerName" value={formData.customerName} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Service</label>
                  <input name="service" value={formData.service} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm mb-1">Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border p-2 rounded" />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full border p-2 rounded" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">Location</label>
                  <input value={formData.location} readOnly className="w-full border p-2 rounded bg-gray-100" />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#b89494] text-white py-2 rounded"
                >
                  {loading ? "Saving..." : "Confirm Booking"}
                </button>
              </div>

              {/* SUMMARY (UNCHANGED) */}
              <div className="bg-gray-100 p-6 text-sm text-gray-600">
                <h3 className="font-bold mb-2">Booking Summary</h3>
                <p><b>Name:</b> {formData.customerName}</p>
                <p><b>Email:</b> {formData.email}</p>
                <p><b>Phone:</b> {formData.phone}</p>
                <p><b>Service:</b> {formData.service}</p>
                <p><b>Date:</b> {formData.date}</p>
                <p><b>Time:</b> {formData.time}</p>
                <p><b>Location:</b> {formData.location}</p>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Book;