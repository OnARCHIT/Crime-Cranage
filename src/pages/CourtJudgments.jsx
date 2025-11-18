import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye, Scale } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CourtJudgments = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });

    const cards = cardsRef.current?.querySelectorAll('.category-card');
    cards?.forEach((card, index) => {
      gsap.from(card, {
        opacity: 10,
        y: 50,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const judgments = [
    {
      id: 1,
      title: 'Devendra Sharma: The Confession Killer',
      description: 'Landmark judgment in family murder case highlighting mental health and criminal responsibility.',
      image: 'https://images.pexels.com/photos/8382281/pexels-photo-8382281.jpeg',
      verdict: 'Life Imprisonment',
      year: '2021',
      link: '/article/sharma',
      court: 'Delhi District Court',
    },
    {
      id: 2,
      title: 'Nirbhaya Case: Justice Delivered',
      description: 'Historic verdict in the 2012 Delhi gang rape case that shook the nation.',
      image: 'https://images.unsplash.com/photo-1702628771524-25d5174e919b',
      verdict: 'Death Penalty',
      year: '2020',
      link: '#',
      court: 'Supreme Court of India',
    },
    {
      id: 3,
      title: 'M. Jaishankar: Cyanide Killer Verdict',
      description: 'Fast-track court delivers death sentence to serial killer who murdered 20+ women.',
      image: 'https://images.unsplash.com/photo-1702252290459-711fcbe57298',
      verdict: 'Death Penalty',
      year: '2013',
      link: '/article/jaishankar',
      court: 'Karnataka High Court',
    },
    {
      id: 4,
      title: 'Aarushi-Hemraj Murder: Acquittal',
      description: 'Controversial acquittal of Aarushi\'s parents due to lack of conclusive evidence.',
      image: 'https://images.unsplash.com/photo-1763136537699-14a835c8ffb1',
      verdict: 'Acquitted',
      year: '2017',
      link: '#',
      court: 'Allahabad High Court',
    },
    {
      id: 5,
      title: 'Jessica Lal Murder: Justice After 7 Years',
      description: 'High-profile case where public pressure led to conviction after initial acquittal.',
      image: 'https://images.pexels.com/photos/8382074/pexels-photo-8382074.jpeg',
      verdict: 'Life Imprisonment',
      year: '2006',
      link: '#',
      court: 'Delhi High Court',
    },
    {
      id: 6,
      title: 'Bilkis Bano Case: Landmark Verdict',
      description: 'Supreme Court judgment in 2002 Gujarat riots case ensuring justice for survivors.',
      image: 'https://images.unsplash.com/photo-1617906855223-a69f14c9841d',
      verdict: 'Life Imprisonment',
      year: '2008',
      link: '#',
      court: 'Supreme Court of India',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section
        ref={headerRef}
        className="relative bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--card))] py-20 border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-[hsl(var(--secondary))] text-secondary-foreground mb-4">
            <Scale size={14} className="mr-1" />
            Legal Precedents
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Court Judgments
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore landmark verdicts that shaped criminal jurisprudence. From historic convictions to controversial
            acquittals, understand how justice is served in the courtroom.
          </p>
        </div>
      </section>

      {/* Judgments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={cardsRef} className="netflix-grid">
          {judgments.map((judgment) => (
            <Link key={judgment.id} to={judgment.link}>
              <Card className="crime-card category-card bg-card border-border hover:border-[hsl(var(--secondary))] overflow-hidden h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={judgment.image}
                    alt={judgment.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="secondary"
                      className={`backdrop-blur ${
                        judgment.verdict === 'Death Penalty'
                          ? 'bg-[hsl(var(--destructive))]/90 text-destructive-foreground'
                          : judgment.verdict === 'Acquitted'
                          ? 'bg-[hsl(var(--accent))]/90 text-accent-foreground'
                          : 'bg-[hsl(var(--secondary))]/90 text-secondary-foreground'
                      }`}
                    >
                      {judgment.verdict}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground line-clamp-2">
                    {judgment.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2">
                    {judgment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Court:</strong> {judgment.court}
                    </p>
                    <p>
                      <strong className="text-foreground">Year:</strong> {judgment.year}
                    </p>
                    <p>
                      <strong className="text-foreground">Verdict:</strong> {judgment.verdict}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>10 min read</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>Read Verdict</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourtJudgments;
