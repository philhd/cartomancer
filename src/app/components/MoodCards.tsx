// app/components/MoodCards.tsx
export default function MoodCards() {
    const cards = [
      { title: "Basic", description: "Only the popular hits – safe and mainstream." },
      { title: "Casual", description: "A mix of familiar tunes and hidden gems." },
      { title: "Energetic", description: "Upbeat tracks to get you moving." },
      { title: "Moody", description: "Introspective vibes for thoughtful moments." },
      { title: "Chill", description: "Relaxed and ambient sounds to unwind." },
      { title: "Underground", description: "Niche tracks for the adventurous listener." },
      { title: "Eclectic", description: "A diverse mix from various genres." },
      { title: "Hipster", description: "Like ordering a nitro cold brew—unconventional and off the beaten path." },
      { title: "Avant-Garde", description: "Experimental sounds for bold tastes." }
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">How are you feeling today?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  