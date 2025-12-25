// components/TestimonialsSection.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/siteData";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SWIPE_THRESHOLD = 50;
const AUTO_ADVANCE_INTERVAL = 8000; // 8 seconds

export function TestimonialsSection() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const paginate = useCallback((newDirection: number) => {
    setActiveIndex(([currentIndex]) => {
      let newIndex = currentIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return [newIndex, newDirection];
    });
  }, []);

  const goToTestimonial = useCallback(
    (index: number) => {
      const newDirection = index > activeIndex ? 1 : -1;
      setActiveIndex([index, newDirection]);
    },
    [activeIndex]
  );

  // Handle touch events for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > SWIPE_THRESHOLD;
    const isRightSwipe = distance < -SWIPE_THRESHOLD;

    if (isLeftSwipe) paginate(1);
    if (isRightSwipe) paginate(-1);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => paginate(1), AUTO_ADVANCE_INTERVAL);
    return () => clearInterval(interval);
  }, [paginate]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
      aria-labelledby="testimonials-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-400/3 to-orange-500/1 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-amber-500/2 to-transparent blur-3xl rounded-full" />

        {/* Quote icon pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4">
            <Quote className="w-48 h-48" />
          </div>
          <div className="absolute bottom-1/4 right-1/4">
            <Quote className="w-32 h-32" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
            Client Stories
          </span>

          <h2
            id="testimonials-heading"
            className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="block bg-gradient-to-r from-white/70 via-white to-white/70 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Trusted by Our Clients
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-amber-50/80 leading-relaxed">
            Hear from satisfied partners across Indiana and beyond about their
            experience working with our team.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Navigation - Left */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <Button
              size="lg"
              variant="outline"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="h-14 w-14 rounded-full border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:text-amber-300 hover:border-amber-400/50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          {/* Testimonial Content */}
          <div className="lg:col-span-3">
            <Card
              className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/30 transition-all duration-300 min-h-[400px] lg:min-h-[450px] overflow-hidden shadow-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <CardContent className="p-0 h-full">
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                  <Quote className="w-16 h-16 lg:w-20 lg:h-20 text-amber-400/5" />
                </div>

                <AnimatePresence
                  initial={false}
                  mode="popLayout"
                  custom={direction}
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 p-6 lg:p-10 xl:p-12 flex flex-col justify-between"
                  >
                    {/* Testimonial Content */}
                    <div className="flex-grow">
                      <blockquote className="text-lg lg:text-xl xl:text-2xl text-amber-50/90 leading-relaxed lg:leading-loose">
                        &quot;{activeTestimonial.content}&quot;
                      </blockquote>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-start gap-4 lg:gap-6">
                      <Avatar className="h-16 w-16 lg:h-20 lg:w-20 border-2 border-amber-400/20">
                        {activeTestimonial.image ? (
                          <AvatarImage
                            src={activeTestimonial.image}
                            alt={activeTestimonial.name}
                            className="object-cover"
                          />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center">
                            <span className="text-2xl lg:text-3xl font-bold text-amber-400">
                              {activeTestimonial.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </Avatar>

                      <div className="flex-grow">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                          <div>
                            <h4 className="text-lg lg:text-xl font-bold text-amber-50">
                              {activeTestimonial.name}
                            </h4>
                            <p className="text-amber-50/60 text-sm lg:text-base">
                              {activeTestimonial.role}
                            </p>
                          </div>

                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "w-4 h-4 lg:w-5 lg:h-5",
                                  i < activeTestimonial.rating
                                    ? "text-amber-400 fill-amber-400"
                                    : "text-amber-400/20"
                                )}
                              />
                            ))}
                            <span className="ml-2 text-sm text-amber-50/60">
                              {activeTestimonial.rating}/5
                            </span>
                          </div>
                        </div>

                        {/* Progress indicator dots - mobile only */}
                        <div className="flex justify-center gap-2 mt-4 lg:hidden">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => goToTestimonial(index)}
                              className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                activeIndex === index
                                  ? "bg-amber-400 w-4"
                                  : "bg-amber-400/30 hover:bg-amber-400/50"
                              )}
                              aria-label={`Go to testimonial ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>

          {/* Navigation - Right */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <Button
              size="lg"
              variant="outline"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="h-14 w-14 rounded-full border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:text-amber-300 hover:border-amber-400/50 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Progress indicator dots - desktop */}
        <div className="hidden lg:flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 relative group",
                activeIndex === index
                  ? "bg-amber-400 scale-125"
                  : "bg-amber-400/30 hover:bg-amber-400/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-amber-400 whitespace-nowrap">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
