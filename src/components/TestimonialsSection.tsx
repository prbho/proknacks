// components/TestimonialsSection.tsx - Real home transformation stories
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote, Home, MapPin } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah & Michael Johnson",
    location: "Austin, TX",
    project: "Whole-House Renovation",
    content:
      "ProKnacks transformed our 1950s ranch into our dream family home. Their attention to detail and understanding of our needs was incredible. They truly care about creating spaces that work for real life.",
    image: "/testimonial-1.jpg",
    beforeAfter:
      "Added open concept, custom kitchen, and energy-efficient upgrades",
  },
  {
    name: "David Chen",
    location: "San Francisco, CA",
    project: "Kitchen & Bath Remodel",
    content:
      "The craftsmanship is exceptional. Our kitchen isn't just beautiful—it's perfectly functional. Every drawer, every cabinet feels premium. ProKnacks delivered beyond our expectations.",
    image: "/testimonial-2.jpg",
    beforeAfter:
      "Complete layout redesign with custom cabinetry and smart home integration",
  },
  {
    name: "The Rodriguez Family",
    location: "Miami, FL",
    project: "Multi-Room Addition",
    content:
      "We expanded our home to accommodate our growing family. ProKnacks made the process smooth and stress-free. Their team became like family, and the results are stunning.",
    image: "/testimonial-3.jpg",
    beforeAfter: "Added master suite, home office, and expanded living space",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-32 bg-gradient-to-b bg-stone-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-6">
            See How We&apos;ve Transformed Homes
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Real stories from families who trusted ProKnacks with their most
            important investment.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border bg-white border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-amber-400/30 mb-4" />

                {/* Testimonial content */}
                <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Project details */}
                <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                    <Home className="w-4 h-4" />
                    <span className="font-medium">Project:</span>{" "}
                    {testimonial.project}
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="font-medium">Transformation:</span>{" "}
                    {testimonial.beforeAfter}
                  </div>
                </div>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-amber-100">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </Avatar>
                  <div>
                    <div className="font-bold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <MapPin className="w-4 h-4" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before/After Gallery CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Want to See More Transformations?
            </h3>
            <p className="text-slate-300 mb-6">
              Browse our complete gallery of before-and-after home
              transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-600 transition-all duration-300"
              >
                View Project Gallery
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                Book a Virtual Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
