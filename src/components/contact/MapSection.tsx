// components/contact/MapSection.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Coffee } from "lucide-react";

export function MapSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs font-medium text-gray-700">
              Come say hi
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            We&apos;d love to meet you
          </h2>
          <p className="text-sm text-gray-600">
            Coffee&apos;s always on. Just give us a heads up so we&apos;re not
            covered in sawdust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-[16/9] max-w-4xl mx-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.621294522035!2d3.379275615759395!3d6.452940795333762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sIndianapolis%2C%20USA!5e0!3m2!1sen!2sng!4v1641234567890!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="ProKnacks Office Location"
            className="absolute inset-0"
          />

          {/* Fun overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-amber-200 flex items-center gap-2 max-w-xs mx-auto">
            <Coffee className="w-4 h-4 text-amber-600" />
            <span className="text-xs text-gray-700">
              <span className="font-semibold">ProKnacks HQ</span> —
              coffee&apos;s ready ☕
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
