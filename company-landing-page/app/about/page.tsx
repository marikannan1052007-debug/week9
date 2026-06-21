"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Workflow, BarChart3 } from "lucide-react";

export default function AboutPage() {
  const techs = [
    { icon: <Database size={40} />, name: "Apache Spark" },
    { icon: <Workflow size={40} />, name: "Apache Airflow" },
    { icon: <BarChart3 size={40} />, name: "Kafka" },
    { icon: <Cloud size={40} />, name: "AWS & GCP" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-8"
        >
          About <span className="gradient-text">DataFlow Analytics</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="text-xl text-slate-300 max-w-4xl"
        >
          We help organizations build scalable data platforms,
          automate ETL pipelines, and transform raw data into
          business intelligence.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              Our Mission
            </h2>

            <p className="text-slate-300">
              Build reliable and scalable data infrastructure
              for businesses worldwide.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-violet-400 mb-4">
              Our Vision
            </h2>

            <p className="text-slate-300">
              Become the leading cloud-native data engineering
              company globally.
            </p>
          </motion.div>

        </div>

        <h2 className="text-4xl font-bold mt-24 mb-10">
          Technologies We Use
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -10 }}
              className="glass rounded-xl p-6 text-center"
            >
              {tech.icon}
              <h3 className="mt-4">{tech.name}</h3>
            </motion.div>
          ))}

        </div>

      </section>
    </div>
  );
}