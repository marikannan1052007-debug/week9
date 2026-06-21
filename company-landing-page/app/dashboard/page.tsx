"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Database,
  Workflow,
  Activity,
  AlertTriangle,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Active Pipelines",
      value: 128,
      icon: <Workflow className="text-cyan-400" size={32} />,
    },
    {
      title: "Data Processed (TB)",
      value: 52,
      icon: <Database className="text-violet-400" size={32} />,
    },
    {
      title: "Success Rate (%)",
      value: 99,
      icon: <Activity className="text-green-400" size={32} />,
    },
    {
      title: "Failed Jobs",
      value: 3,
      icon: <AlertTriangle className="text-red-400" size={32} />,
    },
  ];

  const pipelines = [
    {
      name: "Customer ETL",
      status: "Running",
      records: "1.2M",
    },
    {
      name: "Sales Analytics",
      status: "Running",
      records: "890K",
    },
    {
      name: "Kafka Stream",
      status: "Delayed",
      records: "320K",
    },
    {
      name: "Inventory Pipeline",
      status: "Running",
      records: "1.8M",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-12"
        >
          Data Engineering Dashboard
        </motion.h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="
              backdrop-blur-md
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-6
              "
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-400 text-sm">
                    {stat.title}
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    <CountUp
                      end={stat.value}
                      duration={2}
                    />
                    {stat.title.includes("%")
                      ? "%"
                      : stat.title.includes("TB")
                      ? "TB"
                      : ""}
                  </h2>
                </div>

                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pipeline Table */}
        <div
          className="
          mt-16
          backdrop-blur-md
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-8
          "
        >
          <h2 className="text-3xl font-bold mb-6">
            Pipeline Monitoring
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">

              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4">
                    Pipeline
                  </th>

                  <th className="text-left py-4">
                    Status
                  </th>

                  <th className="text-left py-4">
                    Records Processed
                  </th>
                </tr>
              </thead>

              <tbody>
                {pipelines.map((pipeline) => (
                  <tr
                    key={pipeline.name}
                    className="border-b border-slate-800"
                  >
                    <td className="py-4">
                      {pipeline.name}
                    </td>

                    <td className="py-4">
                      <span
                        className={
                          pipeline.status === "Running"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }
                      >
                        {pipeline.status}
                      </span>
                    </td>

                    <td className="py-4">
                      {pipeline.records}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Activity Feed */}
        <div
          className="
          mt-12
          backdrop-blur-md
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-8
          "
        >
          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="p-4 rounded-xl bg-slate-900">
              ✅ Customer ETL completed successfully
            </div>

            <div className="p-4 rounded-xl bg-slate-900">
              🚀 New Kafka topic created
            </div>

            <div className="p-4 rounded-xl bg-slate-900">
              ⚠ Kafka Stream latency increased
            </div>

            <div className="p-4 rounded-xl bg-slate-900">
              📊 Daily analytics report generated
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}