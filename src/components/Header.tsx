"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Home,
  Hammer,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    {
      name: "Home",
      href: "/",
      description: "Your journey starts here",
    },
    {
      name: "About",
      href: "/about",
      description: "Our story & values",
    },
    {
      name: "Services",
      href: "/services",
      description: "Our home improvement expertise",
    },

    {
      name: "Contact",
      href: "/contact",
      description: "Start your project",
    },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-amber-100 shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo with tagline */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Home"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt={`${SITE_CONFIG.name} Logo - Transforming houses into homes`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 40px, 40px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-tight">
                  ProKnacks
                </span>
                <span className="text-xs text-slate-600 hidden sm:block">
                  Transforming houses into homes
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                    isActive(item.href)
                      ? "text-amber-600"
                      : "text-slate-700 hover:text-amber-600"
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.name}
                    {isActive(item.href) && (
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    )}
                  </span>
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Contact */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Phone link */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors group"
                aria-label="Call us"
              >
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                  <Phone className="w-4 h-4 text-amber-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Call us</span>
                  <span className="font-semibold text-slate-900">
                    {SITE_CONFIG.phone}
                  </span>
                </div>
              </a>

              <Button
                asChild
                className="px-6 py-3 bg-amber-500 text-white font-semibold hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Free Consultation
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-amber-50 transition-colors flex-shrink-0"
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
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto shadow-2xl"
            >
              <div className="h-full flex flex-col">
                {/* Menu Header */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <Link
                      href="/"
                      className="flex items-center gap-3 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="relative w-10 h-10">
                        <Image
                          src="/logo.png"
                          alt="ProKnacks Logo"
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-slate-900">
                          ProKnacks
                        </span>
                        <span className="text-xs text-slate-600">
                          Home transformation experts
                        </span>
                      </div>
                    </Link>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-lg text-slate-700 hover:bg-amber-50 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Trust Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-lg mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-slate-900">
                      Licensed & Insured
                    </span>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-amber-50 transition-all group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200">
                        <Phone className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-600">
                          Call us now
                        </div>
                        <div className="text-base font-semibold text-slate-900">
                          {SITE_CONFIG.phone}
                        </div>
                      </div>
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-amber-50 transition-all group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200">
                        <svg
                          className="w-5 h-5 text-amber-600"
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
                        <div className="text-xs text-slate-600">Email us</div>
                        <div className="text-sm font-semibold text-slate-900 truncate">
                          {SITE_CONFIG.email}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-start gap-4 px-4 py-4 rounded-xl transition-all group",
                          isActive(item.href)
                            ? "bg-amber-50 text-amber-700"
                            : "hover:bg-slate-50 text-slate-700 hover:text-amber-600"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                            isActive(item.href)
                              ? "bg-amber-100"
                              : "bg-slate-100 group-hover:bg-amber-100"
                          )}
                        >
                          {item.name === "Home" && <Home className="w-5 h-5" />}
                          {item.name === "Services" && (
                            <Hammer className="w-5 h-5" />
                          )}
                          {item.name === "Projects" && (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              />
                            </svg>
                          )}
                          {item.name === "About" && (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          )}
                          {item.name === "Contact" && (
                            <MessageCircle className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold">{item.name}</div>
                          {item.description && (
                            <div className="text-sm text-slate-500 mt-1">
                              {item.description}
                            </div>
                          )}
                        </div>
                        {isActive(item.href) && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        )}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-slate-100">
                  <Button
                    asChild
                    className="w-full py-4 text-base font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-all duration-300 mb-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Start Your Project
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>

                  <p className="text-center text-sm text-slate-600">
                    Free design consultation • No-obligation quote
                  </p>

                  {/* Social links */}
                  {SITE_CONFIG.socials && SITE_CONFIG.socials.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <p className="text-sm text-slate-600 mb-3 text-center">
                        Follow our work
                      </p>
                      <div className="flex justify-center gap-4">
                        {SITE_CONFIG.socials.map((social) => (
                          <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
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
                            {social.name.toLowerCase() === "houzz" && (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm-3.75-7.5h2.25V9h-2.25v6zm4.5 0h2.25V9h-2.25v6z" />
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

      {/* Mobile sticky CTA */}
      {isMobile && isScrolled && !isMenuOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-40 lg:hidden"
        >
          <div className="flex gap-2">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <Button
              asChild
              className="flex-1 py-3 bg-amber-500 text-white font-semibold hover:bg-amber-600 shadow-lg hover:shadow-xl"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Quote</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
