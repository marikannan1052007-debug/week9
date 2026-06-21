import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold gradient-text"
        >
          DataFlow Analytics
        </Link>

        <nav className="flex gap-8">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link href="/services" className="hover:text-cyan-400 transition">
            Services
          </Link>

          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>

          <Link href="/dashboard" className="hover:text-cyan-400 transition">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}