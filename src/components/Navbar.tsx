"use client";

export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-50
        bg-white
        border-b border-gray-200
        shadow-sm
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent ml-2">
          NeuroEase
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-purple-500 transition">
            Home
          </a>

          <a href="#features" className="hover:text-purple-500 transition">
            Features
          </a>

          <a href="#mood" className="hover:text-purple-500 transition">
            Mood
          </a>
        </div>

      </div>
    </nav>
  );
}