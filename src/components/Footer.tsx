// components/Footer.tsx
"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

const socialIcons = {
  facebook: <SiFacebook className="w-5 h-5" />,
  linkedin: <SiLinkedin className="w-5 h-5" />,
  instagram: <SiInstagram className="w-5 h-5" />,
  youtube: <SiYoutube className="w-5 h-5" />,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Footer() {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],
    services: [
      { name: "Custom Furniture", href: "/services/custom-furniture" },
      { name: "Home Renovation", href: "/services/home-renovation" },
      { name: "Commercial Projects", href: "/services/commercial" },
      { name: "Design Consultation", href: "/services/consultation" },
      { name: "Maintenance", href: "/services/maintenance" },
    ],
    resources: [
      { name: "Project Gallery", href: "/gallery" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "FAQs", href: "/faq" },
      { name: "Guides", href: "/guides" },
      { name: "Pricing", href: "/pricing" },
    ],
  };

  return (
    <footer
      className="relative bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden"
      role="contentinfo"
      aria-label="Website footer"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-400/3 to-transparent blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-orange-500/3 to-transparent blur-3xl rounded-full" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </h2>
            </Link>

            <p className="text-base leading-relaxed text-amber-50/80 max-w-md">
              Transforming spaces with precision craftsmanship and innovative
              design. Your vision, our expertise, exceptional results.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  SITE_CONFIG.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 hover:text-amber-50 transition-colors"
              >
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{SITE_CONFIG.address}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="group flex items-center gap-3 hover:text-amber-50 transition-colors"
              >
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm">{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group flex items-center gap-3 hover:text-amber-50 transition-colors"
              >
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              variants={itemVariants}
              custom={index}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-amber-50 tracking-wider">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-amber-50/70 hover:text-amber-400 transition-all duration-300"
                    >
                      <ChevronRight className="w-3 h-3 text-amber-400/50 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-amber-400/10 py-8 lg:py-10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <p className="text-sm text-amber-50/80">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
                reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2">
                <Link
                  href="/privacy"
                  className="text-xs text-amber-50/60 hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-xs text-amber-50/30">•</span>
                <Link
                  href="/terms"
                  className="text-xs text-amber-50/60 hover:text-amber-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <span className="text-xs text-amber-50/30">•</span>
                <Link
                  href="/cookies"
                  className="text-xs text-amber-50/60 hover:text-amber-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Social Media */}
              {SITE_CONFIG.socials && SITE_CONFIG.socials.length > 0 && (
                <div className="pt-4">
                  <div className="flex gap-2">
                    {SITE_CONFIG.socials.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-amber-50/60 hover:text-amber-400 bg-gray-900/50 hover:bg-amber-400/10 rounded-lg transition-all duration-300 group"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        {socialIcons[
                          social.name.toLowerCase() as keyof typeof socialIcons
                        ] || (
                          <span className="text-sm">
                            {social.name.charAt(0)}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
