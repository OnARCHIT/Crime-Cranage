import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Users, BookOpen, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef(null);

  const values = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'In-Depth Research',
      description: 'Every case is thoroughly researched using court documents, forensic reports and credible sources.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Truth & Justice',
      description: 'We prioritise facts and victims — seeking clarity, not sensationalism.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Ethical Reporting',
      description: 'We follow ethical guidelines to respect victims and families while informing the public.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Driven',
      description: 'Readers, tipsters and experts help us investigate and keep stories accurate.',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP reveal animation for image
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 10,
        scale: 0.96,
        duration: 1.1,
        ease: 'power3.out',
      });
    }

    // Content fade-in
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 100,
        y: 36,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.18,
      });
    }

    // Cards stagger animation
    const cards = cardsRef.current?.querySelectorAll('.value-card');
    cards?.forEach((card, index) => {
      gsap.from(card, {
        opacity: 100,
        y: 44,
        duration: 0.9,
        delay: 0.7 + index * 0.12,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero / Intro */}
      <section className="relative py-20 overflow-hidden">
        {/* subtle background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(var(--card))] to-background" aria-hidden />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div ref={contentRef} className="space-y-6">
              <Badge className="bg-[hsl(var(--primary))] text-primary-foreground">About</Badge>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Crime &amp; Carnage — Unveiling Truth Through Crime Journalism
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Crime &amp; Carnage is a dedicated true-crime platform focused on investigative reporting, forensic
                analysis and court-level coverage from India and around the world. Our aim is to present complex cases
                with clarity, respect and depth.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2020 by <strong>Arpit Dev Mishra</strong>, a Mass Communication student at CUJ, Ranchi, we
                combine journalistic rigor with empathy for victims and communities affected by crime.
              </p>

              <div className="flex gap-3 flex-wrap">
                <Link to="/contact" className="inline-flex">
                  <Badge className="bg-[hsl(var(--primary))] text-primary-foreground px-5 py-2 cursor-pointer">
                    Contact / Tipline
                  </Badge>
                </Link>

                <Link to="/subscribe" className="inline-flex">
                  <Badge variant="outline" className="px-5 py-2 cursor-pointer hover:bg-[hsl(var(--primary))] hover:text-primary-foreground transition-colors">
                    Subscribe
                  </Badge>
                </Link>
              </div>
            </div>

            {/* Author / Editorial Card with image */}
            <div ref={imageRef} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[3px] border-[hsl(var(--primary))] bg-card">
                {/* Use public image (place Arpit.png in public/) */}
                <img
                  src="/Arpit.png"
                  alt="Arpit Dev Mishra — Editor"
                  className="w-full h-[480px] object-cover"
                  style={{ filter: 'brightness(0.55)' }} // reduce brightness so overlay text pops
                />

                {/* gradient overlay for strong contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">Arpit Dev Mishra</h3>
                  <p className="text-sm text-muted-foreground mb-3">Founder &amp; Editor — Mass Communication (CUJ)</p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
                    <a href="mailto:devarpit04@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:underline">
                      <Mail className="w-4 h-4" /> devarpit04@gmail.com
                    </a>
                    <a href="tel:+917992405363" className="flex items-center gap-2 text-sm text-muted-foreground hover:underline">
                      <Phone className="w-4 h-4" /> +91 79924 05363
                    </a>
                  </div>

                  <div className="mt-3 text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Ranchi, CUJ, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our Mission</h2>
            <div className="w-20 h-1 bg-[hsl(var(--primary))] mx-auto" />
          </div>

          <Card className="bg-card border-border p-6 md:p-10">
            <CardContent className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                We aim to inform and educate through rigorous investigative reporting. Our articles dig into police
                records, court documents and forensic reports to present a balanced, factual narrative — always with
                sensitivity to victims and their families.
              </p>

              <p>
                We also strive to hold institutions accountable by exploring systemic failures, gaps in investigations,
                and areas where the justice system can improve.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our Core Values</h2>
            <div className="w-20 h-1 bg-[hsl(var(--primary))] mx-auto" />
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="value-card bg-card border-border hover:border-[hsl(var(--primary))] transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))]">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-2">500+</h3>
              <p className="text-lg text-muted-foreground">Cases Covered</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-2">100K+</h3>
              <p className="text-lg text-muted-foreground">Monthly Readers</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-2">5+</h3>
              <p className="text-lg text-muted-foreground">Years of Investigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join the Community</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get latest case updates, investigative reports and exclusive deep-dives — subscribe to our newsletter
            or follow us on social media.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <Link to="/subscribe">
              <Badge className="bg-[hsl(var(--primary))] text-primary-foreground px-6 py-2">Subscribe</Badge>
            </Link>
            <Link to="/contact">
              <Badge variant="outline" className="px-6 py-2 hover:bg-[hsl(var(--primary))] hover:text-primary-foreground transition-colors">Contact / Tips</Badge>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
