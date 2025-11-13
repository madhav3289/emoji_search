import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";

export default function Home() {
  const API_URL = "https://api.imgflip.com/get_memes";

  const [memes, setMemes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        const memeList = json?.data?.memes || [];
        setMemes(memeList);
        setFiltered(memeList);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!query) {
      setFiltered(memes);
      return;
    }

    const lower = query.toLowerCase();
    setFiltered(
      memes.filter((m) => m.name.toLowerCase().includes(lower))
    );
  }, [query, memes]);

  return (
    <div className="pt-20 pb-16">

      {/* ⭐ EVERYTHING inside SAME WIDTH CONTAINER */}
      <div className="max-w-6xl mx-auto px-4">

        <Navbar />

        <h1 className="text-4xl font-bold text-center mt-6 mb-6">
          Emoji Search
        </h1>

        <div className="mb-10">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {loading ? (
          <p className="text-center text-gray-700 mt-20 text-lg">
            Loading memes…
          </p>
        ) : (
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-5 
              gap-6
            "
          >
            {filtered.map((meme) => (
              <MemeCard key={meme.id} meme={meme} />
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
