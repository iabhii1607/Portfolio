import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-8 py-3 bg-white/20 backdrop-blur-md shadow-lg rounded-full border border-white/30 flex items-center justify-between w-[90%] max-w-2xl">
      <Link
        href="/"
        className="text-lg font-semibold text-gray-100 hover:text-blue-300 transition-colors duration-200"
      >
        🚀 MyPortfolio
      </Link>
      <div className="space-x-4 text-gray-100 text-sm font-medium">
        <Link href="/" className="hover:text-blue-300 transition-colors duration-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-300 transition-colors duration-200">
          About
        </Link>
        <Link href="/project" className="hover:text-blue-300 transition-colors duration-200">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-blue-300 transition-colors duration-200">
          Contact
        </Link>
      </div>
    </nav>
  );
}
