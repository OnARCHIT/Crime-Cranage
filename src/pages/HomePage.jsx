// src/pages/HomePage.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { BreakingNewsTicker } from "@/components/BreakingNewsTicker";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Clock, MapPin, ArrowRight, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const articlesRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(heroRef.current, {
      y: 60,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    const cards = articlesRef.current?.querySelectorAll(".article-card");
    cards?.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.08,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });

    if (mapRef.current) {
      gsap.from(mapRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 1,
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 75%",
        },
      });
    }
  }, []);

  const featuredArticles = [
    {
      id: 1,
      title: "Devendra Sharma: The Confession Killer",
      description: "A shocking story of a man who confessed to murdering his own family.",
      image: "https://static.toiimg.com/thumb/msid-121307273,width-1280,height-720,resizemode-72/121307273.jpg",
      category: "Court Judgments",
      readTime: "8 min",
      link: "/article/jaishankar",
    },
    {
      id: 2,
      title: "John Wayne Gacy: The Killer Clown",
      description: "The chilling double life of a friendly neighbour and hidden monster.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7DURjqsgYsE5_ePtxJb1RzjbFrJRjiJCDQ&s",
      category: "Serial Killers",
      readTime: "12 min",
      link: "/article/sharma",
    },
    {
      id: 3,
      title: "Jeffrey Dahmer: House of Horror",
      description: "A quiet man hiding unimaginable crimes behind closed doors.",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg",
      category: "Serial Killers",
      readTime: "12 min",
      link: "/article/jha",
    },
    {
      id: 4,
      title: "Chandrakant Jha: Delhi Butcher",
      description: "A serial killer who taunted police with staged murders.",
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201302/chandrakant_jha--1_660_021913115051.jpg",
      category: "True Crime",
      readTime: "9 min",
      link: "/article/gacy",
    },
    {
      id: 5,
      title: "M. Jaishankar: Cyanide Killer",
      description: "A charming personality masking deadly intentions.",
      image: "https://images.indianexpress.com/2018/03/jaishankar.jpg",
      category: "Serial Killers",
      readTime: "10 min",
      link: "/article/dahmer",
    },
  ];

  const recommendedReads = [
    "The Psychology of Serial Killers",
    "Forensic Science in Crime",
    "Unsolved Mysteries",
    "Death Penalty Debates",
    "Criminal Profiling",
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      <Navbar />
      <BreakingNewsTicker />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[85vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1504711434969-e33886168f5c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-6">
          <img src="/logo.png" className="h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-extrabold">S53 News</h1>
          <p className="mt-3 text-gray-300">
            Truth • Crime • Reality
          </p>

          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <Link to="/cases">
              <button className="bg-[#a00000] px-6 py-3 rounded-md hover:bg-[#8b0000]">
                Explore Cases
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-[#333] px-6 py-3 rounded-md hover:bg-[#111]">
                About
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        
        {/* LEFT */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Featured Cases</h2>

          <div ref={articlesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((a) => (
              <Link key={a.id} to={a.link} className="group">
                <Card className="article-card bg-[#111] border border-[#222] hover:border-[#a00000] transition rounded-lg overflow-hidden flex flex-col">

                  <div className="relative h-44">
                    <img src={a.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <Badge className="absolute top-2 right-2 bg-[#a00000]">{a.category}</Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white text-lg">{a.title}</CardTitle>
                    <CardDescription className="text-gray-300">{a.description}</CardDescription>
                  </CardHeader>

                  <CardFooter className="flex justify-between text-gray-400 text-sm">
                    <span className="flex items-center gap-1"><Clock size={14} />{a.readTime}</span>
                    <span className="flex items-center gap-1">Read <ArrowRight size={14} /></span>
                  </CardFooter>

                </Card>
              </Link>
            ))}
          </div>

          {/* MAP */}
          <section ref={mapRef} className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Crime Hotspots</h3>
            <Card className="bg-[#111] border border-[#222]">
              <CardContent>
                <iframe
                  src="https://www.google.com/maps?q=India&output=embed"
                  className="w-full h-[400px] rounded"
                />
                <p className="text-gray-400 text-sm mt-3 text-center">
                  <MapPin size={14} className="inline mr-1" />
                  Explore crime regions interactively
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          
          <Card className="bg-[#111] border border-[#222]">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-300 space-y-2">
              <p><strong>S53 News</strong> — Crime journalism platform.</p>
              <p><Mail size={14} className="inline mr-1" /> contact@s53.com</p>
              <p><Phone size={14} className="inline mr-1" /> +91 XXXXX XXXXX</p>
              <p><MapPin size={14} className="inline mr-1" /> Ranchi, India</p>
              <Button className="w-full bg-[#a00000] mt-3">Contact</Button>
            </CardContent>
          </Card>

          <Card className="bg-[#111] border border-[#222]">
            <CardHeader>
              <CardTitle>Recommended</CardTitle>
            </CardHeader>
            <CardContent>
              {recommendedReads.map((r, i) => (
                <p key={i} className="text-gray-300 hover:text-white cursor-pointer flex gap-2">
                  <ArrowRight size={14} /> {r}
                </p>
              ))}
            </CardContent>
          </Card>

        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
