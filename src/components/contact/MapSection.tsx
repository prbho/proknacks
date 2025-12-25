// components/contact/MapSection.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
            Find Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-50 mb-6">
            Visit Our Office
          </h2>
          <p className="text-lg text-amber-50/70 leading-relaxed">
            Schedule an in-person consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 border border-amber-400/20 aspect-[16/9]">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.621294522035!2d3.379275615759395!3d6.452940795333762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sIndianapolis%2C%20USA!5e0!3m2!1sen!2sng!4v1641234567890!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ProKnacks Office Location"
                className="absolute inset-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/5 via-transparent to-orange-500/5" />

              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg animate-pulse">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-gray-900/90 backdrop-blur-sm border border-amber-400/20 text-sm font-medium text-amber-50">
                    ProKnacks Office
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
