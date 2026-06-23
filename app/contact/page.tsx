"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white">
      <section className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-6xl font-bold mb-8">
          Let Build Together
        </h1>

        <p className="text-slate-300 text-lg mb-12">
          Tell us about your data challenges and we will help
          architect the solution.
        </p>

        {submitted ? (
          <div className="bg-green-500/10 border border-green-500 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              ✅ Consultation Scheduled!
            </h2>

            <p className="text-slate-300">
              Thank you for contacting DataFlow Analytics.
              Our team will reach out to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-3xl space-y-6"
          >
            <Input placeholder="Full Name" required />

            <Input
              type="email"
              placeholder="Email Address"
              required
            />

            <Input placeholder="Company Name" />

            <Textarea
              placeholder="Describe your project..."
              rows={6}
              required
            />

            <Button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700"
            >
              Schedule Consultation
            </Button>
          </form>
        )}

      </section>
    </div>
  );
}