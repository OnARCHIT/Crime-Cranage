// src/pages/article/ChandrakantJha.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight, Clock, Share2 } from 'lucide-react';

const Article4 = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Hero Image Animation
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 1.2,
      ease: 'power3.out',
    });

    // Content Animation
    gsap.from(contentRef.current?.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.3,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div ref={imageRef} className="relative h-[60vh] overflow-hidden">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201302/chandrakant_jha--1_660_021913115051.jpg"
          alt="Chandrakant Jha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div
          ref={contentRef}
          className="bg-card border border-border rounded-lg shadow-2xl p-8 md:p-12"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[hsl(var(--primary))] text-primary-foreground">
                Serial Killers
              </Badge>
              <Badge variant="outline">Delhi</Badge>
              <Badge variant="outline">Notorious Killers</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Chandrakant Jha — The Butcher Who Taunted Delhi Police
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>9 min read</span>
              </div>
              <span>•</span>
              <span>January 2025</span>
              <span>•</span>
              <button className="flex items-center gap-1 hover:text-[hsl(var(--primary))] transition-colors">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Body */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Delhi has seen some of the most disturbing crimes in India’s
              history, but very few cases shook the city the way Chandrakant
              Jha did. A man who lived among migrant laborers, worked ordinary
              jobs, and blended into the crowd—yet led a double life filled
              with unimaginable brutality.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">
              A Killer with a Message
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Between 2003 and 2007, Delhi Police regularly discovered body
              parts wrapped in plastic bags and dumped near Tihar Jail.  
              Each package came with a chilling handwritten note:
              <br />  
              <em>“Catch me if you can.”</em>
              <br />
              These taunts were signed with the name of the killer —
              <strong>Chandrakant Jha</strong>.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">
              How He Chose His Victims
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Jha targeted migrant workers—mostly young men who had no families
              in Delhi and were often unnoticed by society.  
              He befriended them, fed them, gave them shelter, and gained
              complete trust.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              But the smallest disagreements—arguments over food, minor thefts,
              or behaviour—could turn deadly. His murders were extremely violent
              and personal, involving strangulation, dismemberment, and later,
              the shocking act of leaving body parts in public areas.
            </p>

            <div className="my-8 p-6 bg-muted/20 border-l-4 border-[hsl(var(--primary))] rounded-r-lg">
              <p className="italic text-foreground">
                Police said Jha had a “father-like psychological hold” over
                victims. When they disobeyed him, he killed them not out of
                impulse—but to “punish betrayal.”
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">
              Capture and Interrogation
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In 2007, Jha was finally captured after his final killing.
              During interrogation, detectives were stunned by his calmness.
              He described murders as if he were talking about chores.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              He admitted to at least **three confirmed murders**, but hinted he
              might have killed more. His psychological profile showed a
              manipulative nature, deep resentment against society, and an
              obsession with control.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">
              Life Sentence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Jha was sentenced to death in 2013, but it was later commuted to
              life imprisonment.  
              He currently remains in prison, serving multiple life sentences.
            </p>

            <div className="my-8 bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Key Facts
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Known for leaving body parts near Tihar Jail</li>
                <li>• Murdered at least 3 confirmed victims</li>
                <li>• Taunted police with handwritten notes</li>
                <li>• Targeted migrant workers</li>
                <li>• Arrested in 2007</li>
                <li>• Serving multiple life sentences</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link to="/">
              <Button variant="outline" className="hover:bg-muted">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/article/dahmer">
              <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-glow))] text-primary-foreground">
                Next Article
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Article4;
