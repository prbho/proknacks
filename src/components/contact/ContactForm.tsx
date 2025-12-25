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
  { value: "construction", label: "New Construction" },
  { value: "kitchen", label: "Kitchen Remodeling" },
  { value: "bathroom", label: "Bathroom Remodeling" },
  { value: "custom-furniture", label: "Custom Furniture" },
  { value: "interior-design", label: "Interior Design" },
  { value: "maintenance", label: "Home Maintenance" },
  { value: "consultation", label: "Design Consultation" },
  { value: "other", label: "Other Project" },
];

const budgetOptions = [
  { value: "under-500k", label: "Under ₦500,000" },
  { value: "500k-1m", label: "₦500,000 - ₦1,000,000" },
  { value: "1m-2m", label: "₦1,000,000 - ₦2,000,000" },
  { value: "2m-5m", label: "₦2,000,000 - ₦5,000,000" },
  { value: "5m-plus", label: "₦5,000,000+" },
  { value: "not-sure", label: "Not Sure Yet" },
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

    // Check if form ID is available
    if (!formId || formId === "dummy-form-id") {
      setFormError(
        "Form submission is not configured. Please contact us directly."
      );
      return;
    }

    const form = e.currentTarget;
    const honeypot = form.querySelector(
      'input[name="_honeypot"]'
    ) as HTMLInputElement;

    if (honeypot?.value) {
      console.warn("Bot detected via honeypot");
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
      {/* Success Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border backdrop-blur-sm">
          <DialogHeader className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="flex justify-center"
            >
              <div className="p-3 bg-primary/10 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
            </motion.div>
            <DialogTitle className="text-2xl font-bold">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Thank you for contacting ProKnacks! We&apos;ve received your
              inquiry and will get back to you within 24 hours with detailed
              information.
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
              className="w-full"
            >
              <Calendar className="mr-2 w-4 h-4" />
              Book Consultation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-6 lg:p-8 shadow-2xl"
      >
        <div className="space-y-6">
          {/* Form Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
              Quick Quote or inquiry
            </span>
            <h2
              id="contact-form"
              className="text-xl lg:text-2xl font-bold text-amber-50 mb-2"
            >
              Get Your Free Quote
            </h2>
            <p className="text-amber-50/70">
              Fill out the form below and we&apos;ll get back to you with a
              personalized quote.
            </p>
          </div>

          <form onSubmit={handleFormSubmission} className="space-y-6">
            {/* Honeypot Field */}
            <div className="sr-only" aria-hidden="true">
              <Label htmlFor="_honeypot">Leave this field empty</Label>
              <Input
                type="text"
                id="_honeypot"
                name="_honeypot"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" aria-required>
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                  className="bg-gray-900/50 border-amber-400/20 text-amber-50 placeholder:text-amber-50/40 focus:border-amber-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" aria-required>
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="bg-gray-900/50 border-amber-400/20 text-amber-50 placeholder:text-amber-50/40 focus:border-amber-400"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" aria-required>
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-gray-900/50 border-amber-400/20 text-amber-50 placeholder:text-amber-50/40 focus:border-amber-400"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-destructive text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" aria-required>
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 317-452-3636"
                  className="bg-gray-900/50 border-amber-400/20 text-amber-50 placeholder:text-amber-50/40 focus:border-amber-400"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">
                <Home className="inline w-4 h-4 mr-2" />
                Project Location
              </Label>
              <Input
                id="location"
                name="location"
                placeholder="Enter your city or address"
                className="bg-gray-900/50 border-amber-400/20 text-amber-50 placeholder:text-amber-50/40 focus:border-amber-400"
              />
            </div>

            {/* Service & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <Select
                  name="service"
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="bg-gray-900/50 border-amber-400/20 text-amber-50">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-amber-400/20">
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Estimated Budget</Label>
                <Select
                  name="budget"
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData({ ...formData, budget: value })
                  }
                >
                  <SelectTrigger className="bg-gray-900/50 border-amber-400/20 text-amber-50">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-amber-400/20">
                    {budgetOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Timeline */}
            <div className="space-y-2">
              <Label htmlFor="timeline">Project Timeline</Label>
              <Select
                name="timeline"
                value={formData.timeline}
                onValueChange={(value) =>
                  setFormData({ ...formData, timeline: value })
                }
              >
                <SelectTrigger className="bg-gray-900/50 border-amber-400/20 text-amber-50">
                  <SelectValue placeholder="When do you want to start?" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-amber-400/20">
                  <SelectItem value="immediately">Immediately</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="3-months">Within 3 months</SelectItem>
                  <SelectItem value="6-months">Within 6 months</SelectItem>
                  <SelectItem value="planning">
                    Just planning/exploring
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              <Label htmlFor="message" aria-required>
                Project Details
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project, specific requirements, and any other details..."
                className="bg-gray-900/50 border-amber-400/20 text-amber-50 placeholder:text-amber-50/40 focus:border-amber-400 resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-destructive text-sm"
              />
              <p className="text-xs text-amber-50/50">
                Please include room dimensions, existing conditions, and any
                specific materials you prefer.
              </p>
            </div>

            {/* Form Error */}
            {formError && (
              <Alert
                variant="destructive"
                className="animate-in slide-in-from-top-1"
              >
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={state.submitting}
              size="lg"
              className="w-full py-6 text-base font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  Send Message & Get Free Quote
                </>
              )}
            </Button>

            {/* Privacy Note */}
            <p className="text-xs text-center text-amber-50/50">
              By submitting this form, you agree to our{" "}
              <a href="/privacy" className="text-amber-400 hover:underline">
                Privacy Policy
              </a>
              . We respect your privacy and will not share your information.
            </p>
          </form>
        </div>
      </motion.div>
    </>
  );
}
