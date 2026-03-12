// components/contact/ContactInfo.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    content: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    description: "Available Mon-Sat, 8AM-6PM",
    action: "Call now →",
    emoji: "📞",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    description: "Response within 24 hours",
    action: "Send email →",
    emoji: "✉️",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Indianapolis, USA",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      SITE_CONFIG.address
    )}`,
    description: "Come say hi (call first!)",
    action: "Get directions →",
    emoji: "📍",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Saturday",
    href: "#",
    description: "8:00 AM - 6:00 PM",
    action: "Closed Sunday (family day)",
    emoji: "⏰",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactInfo.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <a
              href={item.href}
              target={item.href !== "#" ? "_blank" : undefined}
              rel={item.href !== "#" ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <Card className="bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <span className="text-xs">{item.emoji}</span>
                      </div>
                      <p className="text-sm text-gray-700 font-medium mt-0.5">
                        {item.content}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.description}
                      </p>
                      <span className="text-xs text-amber-600 group-hover:text-amber-700 inline-block mt-2">
                        {item.action}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        );
      })}
    </div>
  );
}
