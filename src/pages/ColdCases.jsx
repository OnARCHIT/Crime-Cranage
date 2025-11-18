// src/pages/ColdCases.jsx
import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye, Search, Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ColdCases = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.from(headerRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.9,
      ease: 'power3.out',
    });

    const cards = cardsRef.current?.querySelectorAll('.category-card');
    cards?.forEach((card, index) => {
      gsap.from(card, {
        opacity: 10,
        y: 38,
        duration: 0.75,
        delay: index * 0.08,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const cases = [
    {
      id: 1,
      title: 'The Aarushi Talwar Murder Mystery',
      description:
        'The unsolved murder of 14-year-old Aarushi Talwar and domestic help Hemraj in Noida, 2008.',
      image: 'https://images.unsplash.com/photo-1763136537699-14a835c8ffb1',
      yearUnsolved: 'Since 2008',
      location: 'Noida, India',
      link: '/article/aarushi-talwar',
      status: 'Controversial Verdict',
    },
    {
      id: 2,
      title: 'The Black Dahlia',
      description:
        'The brutal murder of Elizabeth Short in Los Angeles remains one of the most infamous unsolved cases.',
      image: 'https://images.pexels.com/photos/8382281/pexels-photo-8382281.jpeg',
      yearUnsolved: 'Since 1947',
      location: 'Los Angeles, USA',
      link: '/article/black-dahlia',
      status: 'Unsolved',
    },
    {
      id: 3,
      title: 'The Nithari Killings',
      description:
        'Serial murders of children and young women in Nithari village near Noida.',
      image: 'https://images.unsplash.com/photo-1718592168437-8382e5b97736',
      yearUnsolved: 'Partially Solved',
      location: 'Noida, India',
      link: '/article/nithari-killings',
      status: 'Convicted',
    },
    {
      id: 4,
      title: 'The Burari Deaths',
      description:
        '11 members of a family found dead in mysterious circumstances in Burari, Delhi.',
      image: 'https://images.unsplash.com/photo-1702628771524-25d5174e919b',
      yearUnsolved: 'Since 2018',
      location: 'Delhi, India',
      link: '/article/burari-deaths',
      status: 'Mass Suicide Ruled',
    },
    {
      id: 5,
      title: 'The Sheena Bora Murder',
      description:
        'The shocking murder of Sheena Bora and the subsequent high-profile trial.',
      image: 'https://images.pexels.com/photos/8382074/pexels-photo-8382074.jpeg',
      yearUnsolved: 'Ongoing Trial',
      location: 'Mumbai, India',
      link: '/article/sheena-bora',
      status: 'Under Trial',
    },
    {
      id: 6,
      title: 'The Stoneman Murders',
      description:
        'A serial killer who targeted homeless people in Mumbai and Kolkata in the 1980s.',
      image: 'https://images.unsplash.com/photo-1617906855223-a69f14c9841d',
      yearUnsolved: 'Since 1989',
      location: 'Mumbai/Kolkata, India',
      link: '/article/stoneman-murders',
      status: 'Unsolved',
    },
  ];

  const statusOptions = useMemo(() => {
    const s = new Set(cases.map((c) => c.status));
    return ['All', ...Array.from(s)];
  }, [cases]);

  const filteredCases = cases.filter((c) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === '' ||
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q);
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section
        ref={headerRef}
        className="relative bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--card))] py-12 border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-[hsl(var(--accent))] text-accent-foreground inline-flex items-center gap-2 mb-4 px-3 py-1">
              <Search size={14} />
              Unsolved Mysteries
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Cold Cases</h1>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Journey into the mysteries that continue to baffle investigators. These unsolved cases remain open,
              waiting for that crucial piece of evidence or witness testimony to finally bring closure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Search + filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center w-full sm:w-2/3 bg-card border border-border rounded-md px-3 py-2">
                <Search size={18} className="text-muted-foreground mr-2" />
                <input
                  aria-label="Search cold cases"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Search by title, location or keyword..."
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
                {statusOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`px-3 py-2 rounded-md text-sm border ${
                      statusFilter === s
                        ? 'bg-[hsl(var(--primary))] text-primary-foreground border-[hsl(var(--primary))]'
                        : 'bg-card text-muted-foreground border-border'
                    } transition-colors whitespace-nowrap`}
                    aria-pressed={statusFilter === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Cases Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={cardsRef}>
              {filteredCases.length === 0 ? (
                <div className="col-span-full text-center text-muted-foreground py-12">
                  No cases match your search. Try removing filters or searching different keywords.
                </div>
              ) : (
                filteredCases.map((caseItem) => (
                  <Link key={caseItem.id} to={caseItem.link} className="group">
                    <Card className="category-card bg-card border-border hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col overflow-hidden h-full">
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={caseItem.image}
                          alt={caseItem.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                        <div className="absolute top-3 right-3">
                          <Badge
                            variant="secondary"
                            className="bg-[hsl(var(--accent))]/95 text-accent-foreground px-2 py-1 text-xs"
                          >
                            {caseItem.status}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="px-4 pt-4">
                        <CardTitle className="text-xl font-semibold text-foreground line-clamp-2">
                          {caseItem.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                          {caseItem.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="px-4 mt-auto">
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>
                            <strong className="text-foreground">Location:</strong> {caseItem.location}
                          </p>
                          <p>
                            <strong className="text-foreground">Status since:</strong> {caseItem.yearUnsolved}
                          </p>
                        </div>
                      </CardContent>

                      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground px-4 py-3 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>9 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye size={16} />
                          <span>Investigate</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">About the Author</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Crime &amp; Carnage is curated by <strong>Arpit Dev Mishra</strong> — 3rd year Mass Com student,
                    CUJ, Ranchi. We investigate cold cases and amplify victims' stories.
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Mail size={16} />
                    <a href="mailto:devarpit04@gmail.com" className="hover:underline">devarpit04@gmail.com</a>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Phone size={16} />
                    <a href="tel:+917992405363" className="hover:underline">+91 79924 05363</a>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    Ranchi, CUJ, India
                  </div>

                  <div className="mt-4">
                    <Link to="/contact">
                      <Badge className="bg-[hsl(var(--primary))] text-primary-foreground px-4 py-2">Submit a Tip</Badge>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">Quick Reads</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link to="/article/forensics" className="hover:text-[hsl(var(--primary))]">Forensic breakthroughs that reopened cases</Link></li>
                    <li><Link to="/article/profiling" className="hover:text-[hsl(var(--primary))]">Criminal profiling: methods & limitations</Link></li>
                    <li><Link to="/article/legal" className="hover:text-[hsl(var(--primary))]">How evidence rules differ across states</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-5 text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Join the Investigation</h4>
                  <p className="text-sm text-muted-foreground mb-4">Share tips, documents, or leads — help bring closure to families.</p>
                  <Link to="/contact">
                    <Badge className="bg-[hsl(var(--primary))] text-primary-foreground px-4 py-2">Contact / Tips</Badge>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ColdCases;
