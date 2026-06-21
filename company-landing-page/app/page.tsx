"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";
import { Database, Cloud, Workflow, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950">

        <div className="text-center max-w-6xl px-6">

          <motion.h1
            initial={{ opacity:0,y:50 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration:0.8 }}
            className="text-7xl font-bold"
          >
            Build Reliable
            <span className="gradient-text">
              {" "}Data Pipelines
            </span>
          </motion.h1>

          <p className="mt-8 text-xl text-slate-300">
            Spark • Kafka • Airflow • AWS • GCP
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link href="/contact">
              <Button>
                Get Started
              </Button>
            </Link>

            <Link href="/services">
              <Button variant="outline">
                Explore Services
              </Button>
            </Link>

          </div>

        </div>
      </section>

      <section className="py-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div>
            <h2 className="text-5xl font-bold text-cyan-400">
              <CountUp end={100} />+
            </h2>
            <p>Pipelines</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400">
              <CountUp end={50} />TB
            </h2>
            <p>Data Processed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400">
              <CountUp end={99} />%
            </h2>
            <p>Success Rate</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400">
              <CountUp end={25} />+
            </h2>
            <p>Clients</p>
          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {[
            {
              icon:<Database />,
              title:"Data Warehousing"
            },
            {
              icon:<Workflow />,
              title:"ETL Automation"
            },
            {
              icon:<Cloud />,
              title:"Cloud Migration"
            },
            {
              icon:<BarChart3 />,
              title:"Analytics"
            }
          ].map((item)=>(
            <motion.div
              key={item.title}
              whileHover={{
                scale:1.05,
                y:-10
              }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}