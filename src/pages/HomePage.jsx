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
    // Hero subtle reveal
    gsap.from(heroRef.current, {
      opacity: 1,
      y: 36,
      duration: 0.9,
      ease: "power3.out",
    });

    // Parallax-ish subtle move
    gsap.to(heroRef.current, {
      y: 70,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // Article cards appear on scroll
    const articleCards = articlesRef.current?.querySelectorAll(".article-card");
    articleCards?.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.06,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Map reveal
    if (mapRef.current) {
      gsap.from(mapRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 0.9,
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  // Featured articles — ordered as requested (Jaishankar, Sharma, Jha, Gacy, Dahmer)
  const featuredArticles = [
    {
      id: 1,
       title: "Devendra Sharma: The Confession Killer",
       description:
        "A shocking story of a man who confessed to murdering his own family in cold blood.",
      image:
        "https://static.toiimg.com/thumb/msid-121307273,width-1280,height-720,resizemode-72/121307273.jpg",
      category: "Court Judgments",
      readTime: "8 min",
      link: "/article/jaishankar",
    },
    {
      id: 2,
      title: "John Wayne Gacy: The Killer Who Smiled Like a Clown",
      description:
        "The chilling double life of a friendly neighbour and the monster beneath the paint.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7DURjqsgYsE5_ePtxJb1RzjbFrJRjiJCDQ&s",
      category: "Serial Killers",
      readTime: "12 min",
      link: "/article/sharma",
    },
    {
      id: 3,
       title: "Jeffrey Dahmer: The Quiet Man with a Deadly Secret",
      description:
        "A plain-looking neighbour whose apartment hid a house of horror — Dahmer's story.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/0c/Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg",
      category: "Serial Killers",
      readTime: "12 min",
      link: "/article/jha",
    },
    {
      id: 4,
      title: "Chandrakant Jha: The Butcher Who Taunted Delhi",
      description:
        "A predator who lived among migrant labourers and left the city reeling with staged murders.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201302/chandrakant_jha--1_660_021913115051.jpg",
      category: "True Crime",
      readTime: "9 min",
      link: "/article/gacy",
    },
    {
      id: 5,
      title: "M. Jaishankar: The Cyanide Killer of India",
      description: "How a charming NRI persona hid a brutal murderer.",
      image: "https://images.indianexpress.com/2018/03/jaishankar.jpg",
      category: "Serial Killers",
      readTime: "10 min",
      link: "/article/dahmer",
    },
  ];

  const indianCrimeHotspots = [
    { city: "Delhi", cases: 245, top: "42%", left: "42%" },
    { city: "Mumbai", cases: 189, top: "58%", left: "30%" },
    { city: "Bangalore", cases: 134, top: "70%", left: "46%" },
    { city: "Kolkata", cases: 167, top: "40%", left: "66%" },
    { city: "Chennai", cases: 123, top: "74%", left: "53%" },
  ];

  const recommendedReads = [
    "The Psychology of Serial Killers",
    "Forensic Science in Modern Crime",
    "Unsolved Mysteries of the 90s",
    "Death Penalty Debates in India",
    "Criminal Profiling Techniques",
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      <Navbar />
      <BreakingNewsTicker />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1617906855223-a69f14c9841d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 w-full max-w-5xl text-center px-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Crime &amp; Carnage
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            True stories of darkness — crime, courts, and the human stories behind them.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/cases" className="w-max">
              <button className="bg-[#a00000] hover:bg-[#8b0000] text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                Explore Cases <ArrowRight className="inline-block ml-2" size={16} />
              </button>
            </Link>

            <Link to="/about" className="w-max">
              <button className="border border-[#333] text-gray-200 px-5 py-3 rounded-md hover:bg-[#111] transition">
                About the Author
              </button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Created by <span className="font-semibold">Arpit Dev Mishra</span> — 3rd year Mass Com, CUJ, Ranchi.
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/60 pointer-events-none" />
      </section>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: main content */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Featured Cases</h2>
              <Badge className="bg-[#a00000] text-white px-3 py-1">Latest</Badge>
            </div>

            {/* cards grid */}
            <div ref={articlesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((a) => (
                <Link key={a.id} to={a.link} className="group">
                  <Card className="article-card bg-[#111] border border-[#222] overflow-hidden rounded-lg transform transition hover:-translate-y-1 hover:shadow-2xl h-full flex flex-col">
                    <div className="relative h-44">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-[#a00000] text-white">{a.category}</Badge>
                      </div>
                    </div>

                    <CardHeader className="px-4 pt-4">
                      <CardTitle className="text-lg font-semibold text-white line-clamp-2">{a.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-300 line-clamp-2">{a.description}</CardDescription>
                    </CardHeader>

                    <CardFooter className="px-4 py-3 mt-auto flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{a.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye size={14} />
                        <span>Read More</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>

            {/* MAP */}
            <section ref={mapRef} className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Crime Hotspots in India</h3>
              <Card className="bg-[#111] border border-[#222]">
                <CardContent>
                  <div className="relative h-[420px] rounded-lg overflow-hidden bg-[#0b0b0c]">
                    <img
                      src="https://images.unsplash.com/photo-1733094151451-4222a842cfd1"
                      alt="India map"
                      className="w-full h-full object-cover opacity-70"
                    />
                    {indianCrimeHotspots.map((s, i) => (
                      <div
                        key={i}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        style={{ top: s.top, left: s.left }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 rounded-full bg-[#a00000] animate-ping absolute" />
                          <div className="w-3 h-3 rounded-full bg-[#a00000] relative border-2 border-[#0b0b0c]" />
                        </div>

                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-[#0b0b0c] border border-[#222] rounded-lg px-3 py-2 shadow">
                            <p className="text-sm font-semibold">{s.city}</p>
                            <p className="text-xs text-gray-400">{s.cases} cases reported</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-400 mt-4 flex items-center gap-2 justify-center">
                    <MapPin size={14} />
                    Hover over markers to see city stats
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* RIGHT: sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="bg-[#111] border border-[#222]">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">About the Author</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-300">
                    Crime &amp; Carnage — created and maintained by <strong>Arpit Dev Mishra</strong>, 3rd year Mass Communication, CUJ Ranchi.
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Mail size={16} />
                    <a href="mailto:devarpit04@gmail.com" className="hover:underline text-gray-200">devarpit04@gmail.com</a>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Phone size={16} />
                    <a href="tel:+917992405363" className="hover:underline text-gray-200">+91 79924 05363</a>
                  </div>

                  <div className="text-sm text-gray-300">
                    <MapPin size={14} className="inline mr-2 -mt-1" />
                    Ranchi, CUJ, India
                  </div>

                  <div className="pt-3">
                    <Link to="/contact">
                      <Button className="w-full bg-[#a00000] hover:bg-[#8b0000] text-white">Contact / Tips</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#111] border border-[#222]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Recommended Reads</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {recommendedReads.map((r, i) => (
                      <li key={i}>
                        <a className="flex items-center gap-2 text-gray-300 hover:text-white" href="#">
                          <ArrowRight size={14} />
                          <span>{r}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#111] border border-[#222]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/serial-killers">
                      <Badge className="bg-transparent border border-[#333] text-gray-300 hover:bg-[#a00000] hover:text-white">Serial Killers</Badge>
                    </Link>
                    <Link to="/cold-cases">
                      <Badge className="bg-transparent border border-[#333] text-gray-300 hover:bg-[#a00000] hover:text-white">Cold Cases</Badge>
                    </Link>
                    <Link to="/court-judgments">
                      <Badge className="bg-transparent border border-[#333] text-gray-300 hover:bg-[#a00000] hover:text-white">Court Judgments</Badge>
                    </Link>
                    <Link to="/forensics">
                      <Badge className="bg-transparent border border-[#333] text-gray-300 hover:bg-[#a00000] hover:text-white">Forensics</Badge>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
