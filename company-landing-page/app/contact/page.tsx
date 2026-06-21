"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white">

      <section className="max-w-4xl mx-auto px-6 py-24">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-8"
        >
          Let Build Together
        </motion.h1>

        <p className="text-slate-300 text-lg mb-12">
          Tell us about your data challenges and well help
          architect the solution.
        </p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass p-10 rounded-3xl space-y-6"
        >
          <Input placeholder="Full Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Company Name" />
          <Textarea
            placeholder="Describe your project..."
            rows={6}
          />

          <Button className="w-full bg-violet-600 hover:bg-violet-700">
            Schedule Consultation
          </Button>
        </motion.form>

      </section>
    </div>
  );
}