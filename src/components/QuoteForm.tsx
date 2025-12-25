// components/QuoteForm.tsx
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Shadcn UI Components
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertTriangle, RefreshCw, Loader2 } from "lucide-react";

interface QuoteFormProps {
  className?: string;
  accentColor?: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  captcha?: string;
  [key: string]: string | undefined;
}

const SERVICE_OPTIONS = [
  { value: "cabinet-making", label: "Cabinet Making" },
  { value: "painting", label: "Painting & Finishing" },
  { value: "repairs", label: "General Repairs" },
  { value: "custom", label: "Custom Project" },
  { value: "consultation", label: "Design Consultation" },
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QuoteForm({ className = "" }: QuoteFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || ""
  );

  const [formError, setFormError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<FormErrors>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [service, setService] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });

  const generateCaptcha = useCallback(() => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    });
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const validateForm = (formData: FormData): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    // First Name validation
    const firstName = formData.get("firstName") as string;
    if (!firstName?.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    } else if (firstName.length > 50) {
      errors.firstName = "First name must be less than 50 characters";
      isValid = false;
    }

    // Last Name validation
    const lastName = formData.get("lastName") as string;
    if (!lastName?.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    } else if (lastName.length > 50) {
      errors.lastName = "Last name must be less than 50 characters";
      isValid = false;
    }

    // Email validation
    const email = formData.get("email") as string;
    if (!email?.trim()) {
      errors.email = "Email address is required";
      isValid = false;
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    const message = formData.get("message") as string;
    if (!message?.trim()) {
      errors.message = "Project details are required";
      isValid = false;
    } else if (message.length < 10) {
      errors.message = "Please provide more details (at least 10 characters)";
      isValid = false;
    } else if (message.length > 1000) {
      errors.message = "Message must be less than 1000 characters";
      isValid = false;
    }

    // CAPTCHA validation
    const captchaInput = formData.get("captcha") as string;
    const captchaValue = parseInt(captchaInput);
    if (!captchaInput) {
      errors.captcha = "Please answer the security check";
      isValid = false;
    } else if (isNaN(captchaValue)) {
      errors.captcha = "Please enter a valid number";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length);
  };

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setValidationErrors({});

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("_honeypot") as string;

    // Honeypot check
    if (honeypot) {
      console.warn("Potential bot detected via honeypot");
      return;
    }

    // Validate form
    if (!validateForm(formData)) {
      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        element?.scrollIntoView({ behavior: "smooth", block: "center" });
        element?.focus();
      }
      return;
    }

    // CAPTCHA validation
    const captchaInput = formData.get("captcha") as string;
    const captchaValue = parseInt(captchaInput);
    if (captchaValue !== captcha.num1 + captcha.num2) {
      setFormError("Incorrect answer. Please try again.");
      generateCaptcha();
      return;
    }

    // Submit to Formspree
    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessModal(true);
      formRef.current?.reset();
      setFirstName("");
      setService("");
      setMessageLength(0);
      generateCaptcha();
    }
  }, [state.succeeded, generateCaptcha]);

  return (
    <>
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
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
              Request Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {firstName
                ? `Thank you, ${firstName}! We've received your ${
                    service
                      ? SERVICE_OPTIONS.find(
                          (s) => s.value === service
                        )?.label.toLowerCase()
                      : "quote"
                  } request and will contact you within 24 hours.`
                : "Thank you for your inquiry. Our team will review your request and respond promptly."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="w-full"
              variant="outline"
            >
              Close
            </Button>
            <Button
              onClick={() => {
                setShowSuccessModal(false);
                formRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full"
            >
              Submit Another Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn("w-full max-w-lg mx-auto", className)}
      >
        <Card className="relative overflow-hidden border-border/40 bg-card/80 backdrop-blur-sm shadow-xl">
          {/* Decorative element */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 blur-xl"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
            aria-hidden="true"
          />

          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Get Your Free Quote
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>
          </CardHeader>

          <CardContent>
            <form
              ref={formRef}
              onSubmit={handleFormSubmission}
              noValidate
              className="space-y-5"
            >
              {/* Honeypot field */}
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

              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" aria-required>
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={cn(
                      validationErrors.firstName && "border-destructive"
                    )}
                    aria-invalid={!!validationErrors.firstName}
                    aria-describedby={
                      validationErrors.firstName ? "firstName-error" : undefined
                    }
                  />
                  {validationErrors.firstName && (
                    <p
                      id="firstName-error"
                      className="text-destructive text-xs"
                    >
                      {validationErrors.firstName}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" aria-required>
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    placeholder="Doe"
                    className={cn(
                      validationErrors.lastName && "border-destructive"
                    )}
                    aria-invalid={!!validationErrors.lastName}
                    aria-describedby={
                      validationErrors.lastName ? "lastName-error" : undefined
                    }
                  />
                  {validationErrors.lastName && (
                    <p id="lastName-error" className="text-destructive text-xs">
                      {validationErrors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email" aria-required>
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="john@example.com"
                  className={cn(validationErrors.email && "border-destructive")}
                  aria-invalid={!!validationErrors.email}
                  aria-describedby={
                    validationErrors.email ? "email-error" : undefined
                  }
                />
                {validationErrors.email ? (
                  <p id="email-error" className="text-destructive text-xs">
                    {validationErrors.email}
                  </p>
                ) : (
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-destructive text-xs"
                  />
                )}
              </div>

              {/* Service selection */}
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <Select
                  name="service"
                  value={service}
                  onValueChange={setService}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="message" aria-required>
                    Project Details
                  </Label>
                  <span className="text-xs text-muted-foreground">
                    {messageLength}/1000
                  </span>
                </div>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project requirements, timeline, and any specific details..."
                  className={cn(
                    "resize-none",
                    validationErrors.message && "border-destructive"
                  )}
                  onChange={handleMessageChange}
                  aria-invalid={!!validationErrors.message}
                  aria-describedby={
                    validationErrors.message ? "message-error" : undefined
                  }
                />
                {validationErrors.message ? (
                  <p id="message-error" className="text-destructive text-xs">
                    {validationErrors.message}
                  </p>
                ) : (
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-destructive text-xs"
                  />
                )}
              </div>

              {/* CAPTCHA */}
              <div className="space-y-2">
                <Label htmlFor="captcha" aria-required>
                  Security Check: What is {captcha.num1} + {captcha.num2}?
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="captcha"
                    name="captcha"
                    type="number"
                    required
                    min="0"
                    max="20"
                    placeholder="Enter sum"
                    className={cn(
                      "grow",
                      validationErrors.captcha && "border-destructive"
                    )}
                    aria-invalid={!!validationErrors.captcha}
                    aria-describedby={
                      validationErrors.captcha ? "captcha-error" : undefined
                    }
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={generateCaptcha}
                    aria-label="Generate new math problem"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                {validationErrors.captcha && (
                  <p id="captcha-error" className="text-destructive text-xs">
                    {validationErrors.captcha}
                  </p>
                )}
              </div>

              {/* Form error alert */}
              {formError && (
                <Alert
                  variant="destructive"
                  className="animate-in slide-in-from-top-1"
                >
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>{formError}</AlertDescription>
                </Alert>
              )}

              {/* Form submission status */}
              {state.errors && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    There was an error submitting your form. Please try again.
                  </AlertDescription>
                </Alert>
              )}

              <CardFooter className="px-0 pb-0">
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-6 text-lg font-semibold"
                  size="lg"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </CardFooter>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                . We respect your privacy and will not share your information.
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
