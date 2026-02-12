export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6 
      bg-gray-100 dark:bg-[#111827]
      text-black dark:text-white
      transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-purple-600">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Mood Tracking",
              desc: "Track emotional trends using AI-based behavioral insights.",
            },
            {
              title: "Smart Journaling",
              desc: "Discover patterns and receive personalized suggestions.",
            },
            {
              title: "Stress Analytics",
              desc: "Guided exercises and AI-based stress reduction techniques.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl 
              bg-white dark:bg-[#1E293B]
              hover:-translate-y-3 hover:shadow-xl 
              transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}