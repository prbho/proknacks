"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavigationItem {
  name: string;
  href: string;
  isButton?: boolean;
}

export function SpecialHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const mobileNavItemVariants = {
    closed: { y: 10, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  const containerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  return (
    <>
      <header
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-amber-50/95 backdrop-blur-lg border-b border-amber-400/10 shadow-xl"
            : "bg-white"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group flex-shrink-0"
              aria-label="Home"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3">
                <Image
                  src="/logo.png"
                  alt={`${SITE_CONFIG.name} Logo`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent whitespace-nowrap">
                {SITE_CONFIG.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive(item.href)
                      ? "text-black"
                      : "text-black/70 hover:text-amber-500 hover:bg-white/5"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-lg"
                      layoutId="active-nav-bg"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Contact */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Phone link - visible on desktop */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black hover:text-amber-300 transition-colors group"
                aria-label="Call us"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center group-hover:from-amber-400/20 group-hover:to-orange-500/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="hidden xl:inline text-black/80">
                  {SITE_CONFIG.phone}
                </span>
              </a>

              <Button
                asChild
                size="default"
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold hover:from-amber-500 hover:to-orange-600 hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-black/70 hover:bg-white/10 transition-colors flex-shrink-0"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-gray-950/95 backdrop-blur-lg z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-gray-900 to-gray-950 border-l border-amber-400/10 z-50 lg:hidden overflow-y-auto"
            >
              <div className="h-full flex flex-col">
                {/* Menu Header */}
                <div className="p-6 border-b border-amber-400/10">
                  <div className="flex items-center justify-between mb-6">
                    <Link
                      href="/"
                      className="flex items-center group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="relative w-10 h-10 mr-3">
                        <Image
                          src="/logo.png"
                          alt={`${SITE_CONFIG.name} Logo`}
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        {SITE_CONFIG.name}
                      </span>
                    </Link>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-lg text-amber-50 hover:bg-white/10 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 hover:border-amber-400/30 transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-xs text-amber-50/60">Call us</div>
                        <div className="text-base font-semibold text-black">
                          {SITE_CONFIG.phone}
                        </div>
                      </div>
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 hover:border-amber-400/30 transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400/15 to-orange-500/15 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-amber-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-amber-50/60">Email us</div>
                        <div className="text-sm font-semibold text-amber-50 truncate">
                          {SITE_CONFIG.email}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <motion.div
                    variants={containerVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="space-y-1"
                  >
                    {navigation.map((item) => (
                      <motion.div
                        key={item.name}
                        variants={mobileNavItemVariants}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between px-4 py-4 text-base font-medium rounded-lg transition-all",
                            isActive(item.href)
                              ? "text-white bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20"
                              : "text-amber-50/80 hover:text-white hover:bg-white/5"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          {isActive(item.href) && (
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-amber-400/10">
                  <Button
                    asChild
                    className="w-full py-6 text-base font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 hover:from-amber-500 hover:to-orange-600 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/contact">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  {/* Social links */}
                  {SITE_CONFIG.socials && SITE_CONFIG.socials.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-amber-400/10">
                      <p className="text-sm text-amber-50/60 mb-3">Follow us</p>
                      <div className="flex gap-2">
                        {SITE_CONFIG.socials.map((social) => (
                          <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-amber-50/60 hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-colors"
                            aria-label={`Follow on ${social.name}`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {social.name.toLowerCase() === "facebook" && (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                              </svg>
                            )}
                            {social.name.toLowerCase() === "instagram" && (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                              </svg>
                            )}
                            {social.name.toLowerCase() === "linkedin" && (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile sticky CTA (only shows when scrolled) */}
      {isMobile && isScrolled && !isMenuOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40 lg:hidden"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full shadow-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold hover:from-amber-500 hover:to-orange-600"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">Call Now</span>
            </Link>
          </Button>
        </motion.div>
      )}
    </>
  );
}
