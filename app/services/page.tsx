"use client";

import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Workflow,
  BarChart3,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Data Pipelines",
      icon: <Workflow />,
      desc: "Scalable ETL and ELT pipelines.",
    },
    {
      title: "Data Warehousing",
      icon: <Database />,
      desc: "Snowflake, BigQuery and Redshift.",
    },
    {
      title: "Cloud Migration",
      icon: <Cloud />,
      desc: "AWS and GCP migration services.",
    },
    {
      title: "Real-Time Analytics",
      icon: <BarChart3 />,
      desc: "Streaming architecture with Kafka.",
    },
    {
      title: "Data Platforms",
      icon: <Server />,
      desc: "Enterprise-grade data architecture.",
    },
    {
      title: "Data Quality",
      icon: <ShieldCheck />,
      desc: "Monitoring and validation systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-6xl font-bold mb-12">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="glass rounded-2xl p-8"
            >
              <div className="text-cyan-400">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-4">
                {service.title}
              </h3>

              <p className="text-slate-300 mt-3">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </section>
    </div>
  );
}