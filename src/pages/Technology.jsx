// src/pages/Technology.jsx
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const Technology = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Technology News (Times of India)
  useEffect(() => {
    const fetchTechNews = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://timesofindia.indiatimes.com/rssfeeds/66949542.cms"
        );
        const data = await res.json();
        setNews(data.items || []);
      } catch (err) {
        console.error("Error fetching tech news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTechNews();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      
      <Navbar />

      {/* HEADER */}
      <section className="py-10 text-center border-b border-[#222]">
        <h1 className="text-4xl font-bold text-blue-500">Technology News</h1>
        <p className="text-gray-400 mt-2">
          Latest updates from Times of India
        </p>
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-10">

        {/* LOADING */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-blue-500" size={40} />
          </div>
        )}

        {/* NEWS GRID */}
        {!loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 12).map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-[#111] border border-[#222] hover:border-blue-500 transition overflow-hidden rounded-lg">

                  {/* IMAGE */}
                  <div className="h-44 overflow-hidden">
                    <img
                      src={item.thumbnail || "https://source.unsplash.com/300x200/?technology"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-4">
                    <h3 className="text-white font-semibold text-sm line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-xs mt-2 line-clamp-2">
                      {item.description?.replace(/<[^>]+>/g, "")}
                    </p>
                  </CardContent>

                </Card>
              </a>
            ))}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default Technology;
