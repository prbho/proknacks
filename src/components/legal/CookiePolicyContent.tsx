// components/legal/CookiePolicyContent.tsx
"use client";

import { motion } from "framer-motion";
import { Cookie, Settings, Shield, PieChart, Target } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function CookiePolicyContent() {
  const [cookies, setCookies] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true,
  });

  const lastUpdated = "January 1, 2024";

  const cookieTypes = [
    {
      id: "essential",
      name: "Essential Cookies",
      description: "Required for basic website functionality",
      icon: Shield,
      mandatory: true,
      examples: ["Session management", "Security features", "Load balancing"],
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact",
      icon: PieChart,
      mandatory: false,
      examples: ["Visitor statistics", "Page performance", "User behavior"],
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements",
      icon: Target,
      mandatory: false,
      examples: ["Ad targeting", "Campaign measurement", "Conversion tracking"],
    },
    {
      id: "preferences",
      name: "Preference Cookies",
      description: "Remember your settings and preferences",
      icon: Settings,
      mandatory: false,
      examples: ["Language settings", "Theme preferences", "Region settings"],
    },
  ];

  const handleCookieToggle = (id: string) => {
    if (id === "essential") return; // Essential cookies cannot be disabled
    setCookies((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof cookies],
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage/backend
    console.log("Cookie preferences saved:", cookies);
    alert("Cookie preferences saved successfully!");
  };

  const acceptAll = () => {
    const allAccepted = Object.keys(cookies).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {}
    );
    setCookies(allAccepted as typeof cookies);
    alert("All cookies accepted!");
  };

  const rejectAll = () => {
    const rejected = Object.keys(cookies).reduce(
      (acc, key) => ({
        ...acc,
        [key]: key === "essential", // Essential cookies cannot be rejected
      }),
      {}
    );
    setCookies(rejected as typeof cookies);
    alert("Non-essential cookies rejected!");
  };

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #fbbf24 1px, transparent 1px),
            linear-gradient(-45deg, #fbbf24 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 mb-6"
          >
            <Cookie className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-amber-600">
              Cookie Preferences
            </span>
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
        </div>

        {/* Quick Summary */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20">
          <div className="flex items-start gap-4">
            <Cookie className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                What Are Cookies?
              </h2>
              <p className="text-gray-700">
                Cookies are small text files that are stored on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences and understanding how
                you use our site.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Management */}
        <section className="mb-12 scroll-mt-20">
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Manage Your Cookie Preferences
                </h2>
                <p className="text-gray-600">
                  Control which cookies you allow on our website
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  Current Status:{" "}
                  {Object.values(cookies).filter((v) => v).length}/
                  {Object.keys(cookies).length} enabled
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {cookieTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.id}
                    className="p-6 rounded-xl border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400/10 to-orange-500/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {type.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {type.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {type.mandatory ? (
                          <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                            Always On
                          </span>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={cookies[type.id as keyof typeof cookies]}
                              onCheckedChange={() =>
                                handleCookieToggle(type.id)
                              }
                              disabled={type.mandatory}
                            />
                            <Label className="text-sm">
                              {cookies[type.id as keyof typeof cookies]
                                ? "Enabled"
                                : "Disabled"}
                            </Label>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pl-13">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Examples:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={savePreferences}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600"
                  >
                    Save Preferences
                  </Button>
                  <Button
                    onClick={acceptAll}
                    variant="outline"
                    className="border-green-600 text-green-700 hover:bg-green-50"
                  >
                    Accept All
                  </Button>
                </div>
                <Button
                  onClick={rejectAll}
                  variant="outline"
                  className="border-red-600 text-red-700 hover:bg-red-50"
                >
                  Reject Non-Essential
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <div className="space-y-12">
          {/* How We Use Cookies */}
          <section className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              How We Use Cookies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Website Functionality",
                  description: "Ensure proper website operation and security",
                  benefits: [
                    "Secure login",
                    "Form submissions",
                    "Load balancing",
                  ],
                },
                {
                  title: "User Experience",
                  description: "Personalize content and remember preferences",
                  benefits: [
                    "Language settings",
                    "Theme preferences",
                    "Layout choices",
                  ],
                },
                {
                  title: "Analytics",
                  description: "Understand how visitors use our website",
                  benefits: ["Page visits", "Time on site", "Navigation paths"],
                },
                {
                  title: "Marketing",
                  description: "Deliver relevant content and advertisements",
                  benefits: [
                    "Ad targeting",
                    "Campaign tracking",
                    "Conversion measurement",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-amber-400/5 to-orange-500/5 border border-amber-400/10"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="space-y-1">
                    {item.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Cookie Duration
            </h2>
            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    Session
                  </div>
                  <p className="text-sm text-gray-600">
                    Deleted when browser closes
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    24 Hours
                  </div>
                  <p className="text-sm text-gray-600">
                    Short-term preferences
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    1 Year
                  </div>
                  <p className="text-sm text-gray-600">
                    Long-term settings and analytics
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Third-Party Cookies
            </h2>
            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <p className="text-gray-700 mb-4">
                We may use third-party services that place cookies on your
                device. These services help us analyze website traffic, provide
                social media features, and deliver relevant advertisements.
              </p>
              <div className="space-y-3">
                {[
                  { name: "Google Analytics", purpose: "Website analytics" },
                  {
                    name: "Facebook Pixel",
                    purpose: "Advertising measurement",
                  },
                  { name: "Hotjar", purpose: "User experience analysis" },
                  { name: "Google Ads", purpose: "Advertising campaigns" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-900">
                      {service.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {service.purpose}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="scroll-mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Managing Your Cookies
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/10">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Browser Settings
                </h3>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to control cookies through their
                  settings. You can usually find these settings in the
                  &quot;Options&quot; or &quot;Preferences&quot; menu of your
                  browser.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Chrome", "Firefox", "Safari", "Edge"].map((browser) => (
                    <a
                      key={browser}
                      href={`https://www.google.com/search?q=how+to+manage+cookies+in+${browser}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-center text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 transition-colors"
                    >
                      {browser} Settings
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/10">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Opt-Out Tools
                </h3>
                <p className="text-gray-700 mb-4">
                  For advertising cookies, you can use industry opt-out tools:
                </p>
                <div className="space-y-2">
                  {[
                    {
                      name: "Your Online Choices",
                      url: "https://www.youronlinechoices.com/",
                    },
                    {
                      name: "Network Advertising Initiative",
                      url: "https://optout.networkadvertising.org/",
                    },
                    {
                      name: "Digital Advertising Alliance",
                      url: "https://optout.aboutads.info/",
                    },
                  ].map((tool, index) => (
                    <a
                      key={index}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-amber-600 hover:text-amber-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {tool.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Updates */}
          <section className="p-6 rounded-xl bg-white border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Policy Updates
            </h3>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time. We encourage
              you to review this page periodically for the latest information on
              our cookie practices.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Current Version:</span> v1.2 •
                Updated: {lastUpdated}
              </div>
              <div className="flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <Link href="/privacy">View Privacy Policy</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600"
                >
                  <Link href="/contact">Cookie Questions?</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            By continuing to use our website, you consent to our use of cookies
            as described in this policy.
          </p>
        </div>
      </div>
    </div>
  );
}
