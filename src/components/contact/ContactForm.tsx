// components/contact/ContactForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Send,
  Loader2,
  Calendar,
  Home,
  Coffee,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

const serviceOptions = [
  { value: "renovation", label: "Home Renovation" },
  { value: "kitchen", label: "Kitchen Remodeling" },
  { value: "bathroom", label: "Bathroom Remodeling" },
  { value: "custom-furniture", label: "Custom Furniture" },
  { value: "interior-design", label: "Interior Design" },
  { value: "maintenance", label: "Home Maintenance" },
  { value: "consultation", label: "Just want advice" },
  { value: "other", label: "Something else" },
];

const budgetOptions = [
  { value: "under-500k", label: "Under $500,000" },
  { value: "500k-1m", label: "$500,000 - $1,000,000" },
  { value: "1m-2m", label: "$1,000,000 - $2,000,000" },
  { value: "2m-5m", label: "$2,000,000 - $5,000,000" },
  { value: "5m-plus", label: "$5,000,000+" },
  { value: "not-sure", label: "No clue (that's ok!)" },
];

export function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "";
  const [state, handleSubmit] = useForm(formId || "dummy-form-id");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    timeline: "",
  });

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    if (!formId || formId === "dummy-form-id") {
      setFormError(
        "Form not quite ready. Mind emailing us directly? hello@proknacks.com"
      );
      return;
    }

    const form = e.currentTarget;
    const honeypot = form.querySelector(
      'input[name="_honeypot"]'
    ) as HTMLInputElement;

    if (honeypot?.value) {
      console.warn("Bot detected");
      return;
    }

    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setDialogOpen(true);
      const form = document.querySelector("form") as HTMLFormElement;
      if (form) form.reset();
      setFormData({ service: "", budget: "", timeline: "" });
    }
  }, [state.succeeded]);

  return (
    <>
      {/* Success Dialog - Warm and friendly */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center"
            >
              <div className="p-3 bg-amber-100 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-amber-600" />
              </div>
            </motion.div>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Woohoo! Message sent! 🎉
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              Thanks for reaching out! We&apos;ll get back to you within 24
              hours (usually faster — we&apos;re excited to chat).
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={() => setDialogOpen(false)}
              className="w-full"
              variant="outline"
            >
              Close
            </Button>
            <Button
              onClick={() => {
                setDialogOpen(false);
                window.location.href = "/booking";
              }}
              className="w-full bg-amber-500 text-gray-900 hover:bg-amber-600"
            >
              <Calendar className="mr-2 w-4 h-4" />
              Schedule a call
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id="form"
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg"
      >
        <div className="space-y-5">
          {/* Form Header - Friendlier */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-3">
              <Coffee className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-medium text-amber-700">
                Let&apos;s do this
              </span>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              Tell us about your dream
            </h2>
            <p className="text-xs text-gray-500">
              No forms longer than necessary. We promise.
            </p>
          </div>

          <form onSubmit={handleFormSubmission} className="space-y-4">
            {/* Honeypot */}
            <div className="sr-only">
              <Label htmlFor="_honeypot">Leave this empty</Label>
              <Input
                type="text"
                id="_honeypot"
                name="_honeypot"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="firstName" className="text-xs text-gray-700">
                  First name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                  className="h-9 text-sm border-gray-300 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastName" className="text-xs text-gray-700">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="h-9 text-sm border-gray-300 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs text-gray-700">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="h-9 text-sm border-gray-300 focus:border-amber-400"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs text-gray-700">
                  Phone number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(317) 452-3636"
                  className="h-9 text-sm border-gray-300 focus:border-amber-400"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <Label
                htmlFor="location"
                className="text-xs text-gray-700 flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                Where&apos;s the project?
              </Label>
              <Input
                id="location"
                name="location"
                placeholder="City or address"
                className="h-9 text-sm border-gray-300 focus:border-amber-400"
              />
            </div>

            {/* Service & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="service" className="text-xs text-gray-700">
                  Whatcha need?
                </Label>
                <Select
                  name="service"
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="h-9 text-sm border-gray-300">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-sm"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="budget" className="text-xs text-gray-700">
                  Budget range
                </Label>
                <Select
                  name="budget"
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData({ ...formData, budget: value })
                  }
                >
                  <SelectTrigger className="h-9 text-sm border-gray-300">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-sm"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-1.5">
              <Label htmlFor="timeline" className="text-xs text-gray-700">
                When are you thinking?
              </Label>
              <Select
                name="timeline"
                value={formData.timeline}
                onValueChange={(value) =>
                  setFormData({ ...formData, timeline: value })
                }
              >
                <SelectTrigger className="h-9 text-sm border-gray-300">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately" className="text-sm">
                    ASAP! Let&apos;s go!
                  </SelectItem>
                  <SelectItem value="1-month" className="text-sm">
                    Within 1 month
                  </SelectItem>
                  <SelectItem value="3-months" className="text-sm">
                    Within 3 months
                  </SelectItem>
                  <SelectItem value="6-months" className="text-sm">
                    Within 6 months
                  </SelectItem>
                  <SelectItem value="planning" className="text-sm">
                    Just exploring ideas
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-xs text-gray-700">
                Tell us more (the fun part!)
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder="What are you dreaming of? Any special requests? We're all ears..."
                className="text-sm border-gray-300 focus:border-amber-400 resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-xs"
              />
            </div>

            {/* Form Error */}
            {formError && (
              <Alert variant="destructive" className="py-2 text-sm">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full h-10 bg-amber-500 text-gray-900 text-sm font-medium hover:bg-amber-600 hover:scale-105 transition-all rounded-lg"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 w-4 h-4" />
                  Send it our way →
                </>
              )}
            </Button>

            {/* Fun note */}
            <p className="text-xs text-center text-gray-400 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              No spam. Just good humans.
            </p>
          </form>
        </div>
      </motion.div>
    </>
  );
}
