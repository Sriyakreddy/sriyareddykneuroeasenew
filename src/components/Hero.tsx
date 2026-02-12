export default function Hero() {
  return (
    <section
     id="home"
     className="
    pt-36 pb-28 px-6 text-center
    bg-gradient-to-br
    from-pink-100 via-purple-100 to-indigo-100
    dark:from-[#0B1120] dark:via-[#111827] dark:to-[#1E293B]
    text-gray-900 dark:text-gray-100
    transition-colors duration-500" >
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="block">
            AI That Understands
          </span>
          <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Your Mental Wellness
          </span>
        </h1>

        <p className="mt-6 text-gray-700 dark:text-gray-400 text-lg">
          NeuroEase helps you manage stress, track emotional patterns,
          and receive intelligent insights.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="px-8 py-3 rounded-full bg-purple-600 text-white hover:scale-105 transition">
            Get Started
          </button>

          <button className="px-8 py-3 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}