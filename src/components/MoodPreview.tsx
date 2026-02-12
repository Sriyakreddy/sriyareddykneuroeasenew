"use client";

import { useState, useRef } from "react";

export default function MoodPreview() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const moods = ["😊 Happy", "😐 Neutral", "😟 Stressed"];

  const playSound = (mood: string) => {
    // Stop previous sound if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    let audio;

    if (mood === "😊 Happy") {
      audio = new Audio("/sounds/happy.mp3");
    }

    if (mood === "😟 Stressed") {
      audio = new Audio("/sounds/calm.mp3");
    }

    if (audio) {
      audio.volume = 0.4;
      audio.play();
      audioRef.current = audio;
    }
  };

  return (
    <section
      id="mood"
      className="py-20 bg-white dark:bg-[#0B1120] text-black dark:text-white text-center transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold mb-8">
        How are you feeling today?
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => {
              setSelectedMood(mood);
              setInsight(null);
              setLoading(true);

              playSound(mood);

              setTimeout(() => {
                const insights = {
                  "😊 Happy":
                    "AI Insight: Great energy today! Consider journaling to capture positive patterns.",
                  "😐 Neutral":
                    "AI Insight: A short walk or light stretch could help elevate your mood.",
                  "😟 Stressed":
                    "AI Insight: Try a 5-minute breathing exercise to regulate stress levels.",
                };

                setInsight(
                  insights[mood as keyof typeof insights]
                );
                setLoading(false);
              }, 1500);
            }}
            className={`px-6 py-3 rounded-xl transition transform hover:scale-105
              ${
                selectedMood === mood
                  ? "bg-purple-700 text-white"
                  : "bg-purple-500 text-white hover:bg-purple-600"
              }
            `}
          >
            {mood}
          </button>
        ))}
      </div>

      {selectedMood && (
        <p className="mt-8 text-lg">
          You selected:{" "}
          <span className="font-semibold">{selectedMood}</span>
        </p>
      )}

      {loading && (
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Analyzing mood...
        </p>
      )}

      {insight && !loading && (
        <p className="mt-4 text-purple-600 dark:text-purple-400 font-medium max-w-xl mx-auto">
          {insight}
        </p>
      )}
    </section>
  );
}