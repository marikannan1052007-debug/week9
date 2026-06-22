import Link from "next/link";
import { Database, Cloud, Workflow, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      icon: <Database className="h-10 w-10 text-cyan-400" />,
      title: "Data Warehousing",
      desc: "Modern analytics platforms with scalable storage.",
    },
    {
      icon: <Workflow className="h-10 w-10 text-cyan-400" />,
      title: "ETL Automation",
      desc: "Automated data ingestion and transformation pipelines.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-cyan-400" />,
      title: "Cloud Migration",
      desc: "Move your data workloads to AWS and GCP.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-cyan-400" />,
      title: "Analytics",
      desc: "Turn raw data into actionable business insights.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950">
        <div className="text-center max-w-5xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Build Reliable{" "}
            <span className="text-cyan-400">Data Pipelines</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Transform raw data into business intelligence using
            Spark, Kafka, Airflow, AWS and GCP.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button>Get Started</Button>
            </Link>

            <Link href="/services">
              <Button variant="outline">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-6">
          <div>
            <h2 className="text-5xl font-bold text-cyan-400">100+</h2>
            <p className="mt-2 text-slate-300">Pipelines</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400">50TB</h2>
            <p className="mt-2 text-slate-300">Data Processed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400">99%</h2>
            <p className="mt-2 text-slate-300">Success Rate</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400">25+</h2>
            <p className="mt-2 text-slate-300">Clients</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition"
              >
                {service.icon}

                <h3 className="text-xl font-semibold mt-4">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}