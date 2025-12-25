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
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    description: "Response within 24 hours",
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: SITE_CONFIG.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      SITE_CONFIG.address
    )}`,
    description: "Indianapolis, USA",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Saturday",
    href: "#",
    description: "8:00 AM - 6:00 PM",
    action: "Closed Sunday",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Cards */}
      <div className="space-y-4">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-amber-400/15 hover:border-amber-400/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/15 to-orange-500/15 flex items-center justify-center group-hover:from-amber-400/25 group-hover:to-orange-500/25 transition-all">
                        <Icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col gap-2 items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-amber-50 group-hover:text-white transition-colors">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-amber-400 font-medium">
                              {item.content}
                            </p>
                            <p className="text-sm text-amber-50/60 mt-1">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-sm font-medium text-amber-400/70 group-hover:text-amber-400 transition-colors">
                            {item.action}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
