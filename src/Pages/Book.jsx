import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Phone, ExternalLink, Search } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icons
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
  const [selectedProvince, setSelectedProvince] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // ✅ ONLY YOUR LOCATION
  const locations = [
    {
      id: 1,
      name: "Pretoria North",
      province: "Gauteng",
      coords: [-25.6707, 28.2086],
      address: "247 Burger St, Pretoria North, Pretoria, 0116",
      tel: "0761518353"
    }
  ];

  const provinces = ["All", "Gauteng"];

  const filteredLocations = locations.filter(loc =>
    (selectedProvince === 'All' || loc.province === selectedProvince) &&
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">

      {/* Header */}
      <section className="bg-white border-b py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-light tracking-widest text-gray-700 uppercase">
              Our Locations
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Home | <span className="text-[#b89494]">Our Locations</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0 bg-[#b89494] text-white px-6 py-2 rounded-full font-bold text-sm">
            Total Branches: 1
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">

          {/* Search */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search branch name..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-1 focus:ring-[#b89494] outline-none"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Province Filter */}
            <div className="flex flex-wrap gap-2">
              {provinces.map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedProvince(p)}
                  className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border transition ${
                    selectedProvince === p
                      ? 'bg-[#b89494] text-white border-[#b89494]'
                      : 'bg-white text-gray-500 border-gray-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Branch List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-[500px] flex flex-col">
            <div className="p-4 bg-gray-50 border-b font-bold text-gray-700 text-sm">
              Available Branch ({filteredLocations.length})
            </div>

            <div className="overflow-y-auto flex-1">
              {filteredLocations.map(loc => (
                <div key={loc.id} className="p-4 border-b hover:bg-rose-50 transition group">
                  <h3 className="font-bold text-gray-800 group-hover:text-[#b89494]">
                    {loc.name}
                  </h3>

                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin size={12} /> {loc.address}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">
                      {loc.province}
                    </span>

                    <button className="text-[#b89494] text-xs font-bold hover:underline flex items-center gap-1">
                      Book Now <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-2 h-[650px] rounded-2xl overflow-hidden shadow-inner border-4 border-white">
          <MapContainer
            center={[-25.6707, 28.2086]}
            zoom={14}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {filteredLocations.map(loc => (
              <Marker key={loc.id} position={loc.coords}>
                <Popup>
                  <div className="p-1">
                    <h4 className="font-bold text-[#b89494]">{loc.name}</h4>
                    <p className="text-xs text-gray-600 mb-2">{loc.address}</p>

                    <a href={`tel:${loc.tel}`} className="text-xs font-bold flex items-center gap-1">
                      <Phone size={10} /> {loc.tel}
                    </a>

                    <button className="w-full bg-[#b89494] text-white text-[10px] py-1 mt-2 rounded uppercase font-bold">
                      Book Online
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      {/* Footer */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-light text-gray-700 uppercase tracking-[0.3em] mb-4">
          Visit Our Branch
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          247 Burger St, Pretoria North, Pretoria, 0116
        </p>

        <button className="border-2 border-[#b89494] text-[#b89494] px-10 py-3 rounded uppercase tracking-widest font-bold hover:bg-[#b89494] hover:text-white transition">
          Contact Support
        </button>
      </section>

    </div>
  );
};

export default Book;