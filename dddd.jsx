import React, { useState } from "react";
import { motion } from "framer-motion";
// Replace './logo.png' with your actual logo path or import the image you want to use
import Logo from "./logo.png";

export default function GeneticHotelLanding() {
  const [route, setRoute] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const rooms = [
    { id: 1, name: "Standard Room", price: 1999, img: "/images/room1.jpg", desc: "Cozy stay for single or double." },
    { id: 2, name: "Deluxe Room", price: 2999, img: "/images/room2.jpg", desc: "More space and premium view." },
    { id: 3, name: "Suite", price: 3999, img: "/images/room3.jpg", desc: "Best comfort and luxury amenities." },
  ];

  const positions = [
    {
      id: "receptionist",
      title: "Receptionist",
      about: "Greet guests, manage bookings and assist visitors.",
      requirements: ["Friendly", "Organised", "Good communication skills"],
    },
    {
      id: "bartender",
      title: "Bartender",
      about: "Serve drinks, maintain bar area and interact with guests.",
      requirements: ["18+ years old", "Knowledge of basic cocktails", "Customer service"],
    },
    {
      id: "tourguide",
      title: "Tour Guide",
      about: "Lead guests on tours around Los Santos and roleplay scenarios.",
      requirements: ["Outgoing", "Good knowledge of the city", "Clear communication"],
    },
  ];

  function formatPrice(p) {
    return `$${p.toLocaleString()}`;
  }

  function calcLongStay(price, nights) {
    if (nights > 30) return Math.round(price * 0.85);
    return price;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 text-slate-900">
      <header className="max-w-6xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={Logo} alt="The Generic Logo" className="w-14 h-14 object-contain" />
            <div className="hidden md:block">
              <h1 className="text-2xl font-extrabold text-blue-800">The Generic</h1>
              <p className="text-sm text-blue-700">Genetic Hotel — GTA:W Roleplay</p>
            </div>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => setRoute("prices")} className="hover:underline">Prices</button>
            <button onClick={() => setRoute("gallery")} className="hover:underline">Gallery</button>
            <button onClick={() => setRoute("career")} className="hover:underline">Career</button>
            <button onClick={() => setRoute("contact")} className="hover:underline">Contact</button>
            <a href="#book" onClick={() => setRoute("prices")} className="ml-2 px-4 py-2 bg-blue-700 text-white rounded-lg">Book</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="menu" className="p-2 bg-blue-600 text-white rounded-md">
              ☰
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mt-3 md:hidden bg-blue-50 rounded-lg p-4 shadow">
            <button onClick={() => { setRoute("prices"); setMobileOpen(false); }} className="block w-full text-left py-2">Prices</button>
            <button onClick={() => { setRoute("gallery"); setMobileOpen(false); }} className="block w-full text-left py-2">Gallery</button>
            <button onClick={() => { setRoute("career"); setMobileOpen(false); }} className="block w-full text-left py-2">Career</button>
            <button onClick={() => { setRoute("contact"); setMobileOpen(false); }} className="block w-full text-left py-2">Contact</button>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Home hero */}
        {route === "home" && (
          <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white/60 rounded-xl shadow-lg p-8 md:p-12">
            <div className="md:flex gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3">Welcome to Genetic Hotel</h2>
                <p className="text-blue-700 mb-4">A modern, roleplay-friendly hotel located in Los Santos. We offer comfortable rooms, on-site amenities and vehicle rental options. Perfect for long roleplay stays and short visits alike.</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-blue-800">
                  <li>• Small gym</li>
                  <li>• Conference room</li>
                  <li>• Bar</li>
                  <li>• Underground parking</li>
                  <li>• Pool</li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <a href="#book" onClick={() => setRoute("prices")} className="px-4 py-2 bg-blue-700 text-white rounded-md">Book a room</a>
                  <a href="#apply" onClick={() => setRoute("career")} className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md">Work with us</a>
                </div>

                <div className="mt-6 text-sm text-blue-600">
                  <p>Long stays &gt; 30 nights = 15% discount. Vehicle rental available for $500 / night.</p>
                </div>
              </div>

              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="rounded-lg overflow-hidden shadow-md">
                  {/* Placeholder for hotel image */}
                  <div className="bg-blue-100 h-64 flex items-center justify-center text-blue-300">Hotel image placeholder</div>
                </div>

                <div className="mt-4 rounded-lg overflow-hidden border border-blue-200">
                  {/* Map placeholder - center it on Vespucci Beach as a Los Santos stand-in */}
                  <iframe title="location map" className="w-full h-48" src="https://www.google.com/maps?q=vespucci+beach+los+santos&output=embed" />
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Prices */}
        {route === "prices" && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/60 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Rooms & Prices</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {rooms.map((r) => (
                <div key={r.id} className="bg-blue-50 rounded-lg p-4 shadow-sm">
                  <div className="h-40 bg-blue-100 rounded-md flex items-center justify-center">{r.name} photo</div>
                  <h3 className="mt-3 text-xl font-semibold text-blue-800">{r.name}</h3>
                  <p className="text-blue-700">{r.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-blue-600">Price / night</div>
                      <div className="text-2xl font-bold text-blue-900">{formatPrice(r.price)}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm">Long stay (31+ nights)</div>
                      <div className="text-lg font-semibold">{formatPrice(calcLongStay(r.price, 31))}</div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <a className="flex-1 px-3 py-2 bg-blue-700 text-white rounded-md text-center" href="#book" onClick={() => window.open('#', '_blank')}>Book (Discord)</a>
                    <button className="px-3 py-2 border border-blue-700 text-blue-700 rounded-md">View</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
              <h4 className="text-lg font-semibold text-blue-800">Vehicle rental</h4>
              <p className="text-blue-700">We offer vehicle rental for an additional {formatPrice(500)} / night. Add it during your booking on Discord.</p>
            </div>

          </motion.section>
        )}

        {/* Gallery */}
        {route === "gallery" && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/60 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Gallery (placeholders)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-40 bg-blue-100 rounded-lg flex items-center justify-center">Image {i + 1}</div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Career */}
        {route === "career" && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/60 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Careers</h2>
            <div className="grid gap-4">
              {positions.map((p) => (
                <div key={p.id} className="p-4 border border-blue-100 rounded-md bg-blue-50">
                  <h3 className="text-xl font-semibold text-blue-800">{p.title}</h3>
                  <p className="text-blue-700">{p.about}</p>
                  <ul className="text-blue-600 mt-2 list-disc list-inside">
                    {p.requirements.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <a className="px-3 py-2 bg-blue-700 text-white rounded-md" href="#apply" onClick={() => window.open('#', '_blank')}>Apply (Discord)</a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Contact */}
        {route === "contact" && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/60 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-800">Get in touch</h4>
                <p className="text-blue-700">We are available on Facebook and Discord. For urgent matters call the hotel phone number.</p>
                <ul className="mt-4 text-blue-700">
                  <li>FB: <a href="#" className="text-blue-800 underline">facebook.com/GenericHotel</a></li>
                  <li>Discord: <a href="#" className="text-blue-800 underline">Join our Discord</a></li>
                  <li>Phone: <a href="tel:+15555555555" className="text-blue-800 underline">+1 (555) 555-5555</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-800">Location</h4>
                <p className="text-blue-700">Genetic Hotel — Los Santos (Vespucci Beach area placeholder)</p>
                <div className="mt-3 border rounded overflow-hidden">
                  <iframe title="mini map" className="w-full h-48" src="https://www.google.com/maps?q=vespucci+beach+los+santos&output=embed" />
                </div>
              </div>
            </div>

          </motion.section>
        )}

        {/* Fallback / small note */}
        <div className="mt-8 text-sm text-blue-600">
          <p>This page is a demo. Replace placeholder images and external links with your real assets.</p>
        </div>
      </main>

      <footer className="bg-blue-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-12 h-12 object-contain bg-white/5 rounded-full p-1" />
            <div>
              <div className="font-bold">The Generic</div>
              <div className="text-sm text-blue-200">Genetic Hotel</div>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2">Follow us</div>
            <div className="flex justify-center gap-3">
              <a href="#" className="px-3 py-2 bg-blue-700 rounded-md">Facebook</a>
              <a href="#" className="px-3 py-2 bg-blue-700 rounded-md">Discord</a>
            </div>
          </div>

          <div className="text-right text-sm text-blue-200">
            <div>Address: Vespucci Beach, Los Santos (placeholder)</div>
            <div>Phone: +1 (555) 555-5555</div>
            <div className="mt-3 text-xs text-blue-100">This is a made-up hotel — page created for a GTA:W roleplay server.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
