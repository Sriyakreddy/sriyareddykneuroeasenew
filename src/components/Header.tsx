export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 
    bg-white 
    transition-colors duration-500 shadow-sm dark:shadow-none">

     <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
       NeuroEase
     </h1>

      <nav className="flex gap-8 text-gray-700 dark:text-gray-300">
        <a href="#features" className="hover:text-purple-600 transition">
          Features
        </a>
        <a href="#mood" className="hover:text-purple-600 transition">
          Mood
        </a>
        <a href="#contact" className="hover:text-purple-600 transition">
          Contact
        </a>
      </nav>
    </header>
  );
}