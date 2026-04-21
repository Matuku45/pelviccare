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

// ✅ EMPTY FORM TEMPLATE (IMPORTANT FIX)
const emptyForm = {
  bookingId: Date.now(),
  customerName: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  status: "confirmed",
  location: ""
};

const Book = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // ✅ NOW FORM STARTS EMPTY
  const [formData, setFormData] = useState(emptyForm);

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
      // reset form every time user opens booking
      setFormData({
        ...emptyForm,
        location: loc.address
      });

      setShowModal(true);
      setLoading(false);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setProgress(0);
    setLoading(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + 15;
      });
    }, 120);

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
        setFormData(emptyForm); // reset after submit
        setProgress(0);
      }, 400);

    } catch (error) {
      console.error(error);
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

      {/* LOADING BAR */}
      {loading && (
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="h-1 bg-[#b89494] animate-pulse w-full"></div>
          <p className="text-center text-sm bg-white py-2 text-gray-600">
            Processing booking request...
          </p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

        {/* LEFT PANEL */}
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

        {/* MAP */}
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

            {/* PROGRESS BAR */}
            <div className="w-full bg-gray-200 h-2">
              <div
                className="h-2 bg-[#b89494] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="grid md:grid-cols-2">

              {/* FORM */}
              <div className="p-6 space-y-4">

                <input name="customerName" placeholder="Full Name"
                  value={formData.customerName} onChange={handleChange}
                  className="w-full border p-2 rounded" />

                <input name="email" placeholder="Email"
                  value={formData.email} onChange={handleChange}
                  className="w-full border p-2 rounded" />

                <input name="phone" placeholder="Phone"
                  value={formData.phone} onChange={handleChange}
                  className="w-full border p-2 rounded" />

                <input name="service" placeholder="Service"
                  value={formData.service} onChange={handleChange}
                  className="w-full border p-2 rounded" />

                <div className="grid grid-cols-2 gap-2">

                  <input type="date" name="date"
                    value={formData.date} onChange={handleChange}
                    className="w-full border p-2 rounded" />

                  <input type="time" name="time"
                    value={formData.time} onChange={handleChange}
                    className="w-full border p-2 rounded" />

                </div>

                <input
                  value={formData.location}
                  readOnly
                  placeholder="Location"
                  className="w-full border p-2 rounded bg-gray-100"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#b89494] text-white py-2 rounded"
                >
                  {loading ? "Saving..." : "Confirm Booking"}
                </button>

              </div>

              {/* SUMMARY */}
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