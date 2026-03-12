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
  Coffee,
  Sparkles,
  Mail,
  Info,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  icon: React.ElementType;
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
      description: "Where it all begins",
      icon: Home,
    },
    {
      name: "About",
      href: "/about",
      description: "Who we are & what we stand for",
      icon: Info,
    },
    {
      name: "Services",
      href: "/services",
      description: "What we can do for your home",
      icon: Hammer,
    },
    {
      name: "Contact",
      href: "/contact",
      description: "Let's grab a coffee",
      icon: Coffee,
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
            ? "bg-white/95 backdrop-blur-lg border-b border-amber-100 shadow-sm"
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with tagline */}
            <Link
              href="/"
              className="flex items-center gap-2 group flex-shrink-0"
              aria-label="Home"
            >
              <div className="relative w-8 h-8 md:w-9 md:h-9">
                <Image
                  src="/logo.png"
                  alt={`${SITE_CONFIG.name} Logo`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 32px, 36px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                  ProKnacks
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 group",
                      isActive(item.href)
                        ? "text-amber-600"
                        : "text-gray-600 hover:text-amber-600"
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      {isActive(item.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      )}
                    </span>
                    <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA & Contact */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Phone link */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600 hover:text-amber-600 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Call us</span>
                  <span className="text-sm font-medium text-gray-900">
                    {SITE_CONFIG.phone}
                  </span>
                </div>
              </a>

              <Button
                asChild
                className="px-4 py-2 bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 hover:shadow-md transition-all duration-300 rounded-lg"
              >
                <Link href="/contact" className="flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5" />
                  Free consult
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-amber-50 transition-colors flex-shrink-0"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
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
              className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
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
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <Link
                      href="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="relative w-8 h-8">
                        <Image
                          src="/logo.png"
                          alt="ProKnacks Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-base font-bold text-gray-900">
                          ProKnacks
                        </span>
                        <span className="text-[10px] text-gray-500 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>home transformation experts</span>
                        </span>
                      </div>
                    </Link>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-1.5 rounded-lg text-gray-600 hover:bg-amber-50"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Trust Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 rounded-full">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-medium text-gray-900">
                      Licensed & Insured
                    </span>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center gap-2 p-2 bg-white rounded-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400">call</div>
                        <div className="text-xs font-medium text-gray-900">
                          {SITE_CONFIG.phone}
                        </div>
                      </div>
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center gap-2 p-2 bg-white rounded-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400">email</div>
                        <div className="text-xs font-medium text-gray-900 truncate max-w-[80px]">
                          {SITE_CONFIG.email}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-5">
                  <div className="space-y-1">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 px-3 py-3 rounded-xl transition-all",
                            isActive(item.href)
                              ? "bg-amber-50 text-amber-700"
                              : "hover:bg-gray-50 text-gray-700"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div
                            className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center",
                              isActive(item.href)
                                ? "bg-amber-100"
                                : "bg-gray-100"
                            )}
                          >
                            <Icon
                              className={cn(
                                "w-4 h-4",
                                isActive(item.href)
                                  ? "text-amber-600"
                                  : "text-gray-600"
                              )}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              {item.name}
                            </div>
                            <div className="text-[10px] text-gray-500">
                              {item.description}
                            </div>
                          </div>
                          {isActive(item.href) && (
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="p-5 border-t border-gray-100">
                  <Button
                    asChild
                    className="w-full py-3 bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 rounded-xl mb-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2"
                    >
                      <Coffee className="w-4 h-4" />
                      Grab a coffee on us
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>

                  <p className="text-center text-[10px] text-gray-500 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Free consult • No obligation • Just good vibes</span>
                  </p>
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
          className="fixed bottom-4 left-4 right-4 z-40 lg:hidden"
        >
          <div className="flex gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-gray-100">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-50 text-gray-900 font-medium rounded-lg text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <Button
              asChild
              className="flex-1 py-2.5 bg-amber-500 text-white text-xs font-medium hover:bg-amber-600 rounded-lg"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-1.5"
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>Get quote</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
