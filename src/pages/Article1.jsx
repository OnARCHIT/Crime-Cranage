import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight, Clock, Share2 } from 'lucide-react';


const Article1 = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Image fade-in
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity:10,
        scale: 1.08,
        duration: 1.2,
        ease: 'power3.out',
      });
    }

    // Content fade-in
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 100,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image — using classes from your CSS (hero + dark-overlay) */}
      <div
        ref={imageRef}
        className="hero dark-overlay relative h-[60vh] overflow-hidden"
        aria-hidden="false"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL91u8-97RQUMMKuyHWiQuamv-CwGVDi-Dwg&s')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* decorative only — actual content comes below */}
      </div>

      {/* Article Content */}
      <article
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10"
        aria-labelledby="article-title"
      >
        <div
          ref={contentRef}
          className="bg-card border border-border rounded-lg shadow-2xl p-8 md:p-12"
        >
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[hsl(var(--primary))] text-primary-foreground">
                Serial Killers
              </Badge>
              <Badge variant="outline">The Shadow of the South</Badge>
              <Badge variant="outline">South-India</Badge>
            </div>

            <h1
              id="article-title"
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
            >
              The Chilling Tale of M. Jaishankar
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>12 min read</span>
              </div>
              <span aria-hidden="true">•</span>
              <span>January 15, 2025</span>
              <span aria-hidden="true">•</span>
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="Share article"
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </header>

          <Separator className="mb-8" />

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In the quiet outskirts of Tamil Nadu’s Dharmapuri district, long before his name echoed across India’s crime files,
              M. Jaishankar was just another man walking through the dusty lanes—unnoticed, unremarkable, and unthreatening. No one
              could have imagined that beneath that ordinary exterior lived one of the most unsettling criminal minds South India had
              ever encountered. But every monster has an origin story… and so did he.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">Early Life and Background</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              It was the mid-2000s. A string of crimes in rural Tamil Nadu, then Karnataka, began to worry authorities. Women were
              disappearing, some found harmed, others never found again. At first, police believed they were unrelated incidents—
              random sparks in a large rural landscape. But a pattern slowly began to surface. Villagers whispered about a stranger
              roaming on foot. Someone with an unusual calmness, someone who slipped away before anyone could notice him.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The First Capture</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By 2009, the pattern became undeniable. Police teams across districts began comparing notes. The incidents were linked—
              by geography, by behaviour, and by a chilling psychological consistency. Finally, after intense combing operations,
              Jaishankar was arrested in 2009. Officers described him not as a raging, violent force but as disturbingly calm—someone
              who answered questions with eerie clarity and showed no trace of remorse.
            </p>

            <div className="my-8 p-6 bg-card-muted/60 border-l-4 border-[hsl(var(--primary))] rounded-r-lg">
              <p className="text-foreground italic mb-0">
                The Great Escape — A Criminal With a Predator’s Patience. In 2011, Jaishankar vanished from a high-security prison
                in a way that shocked both media and police. He scaled walls and melted into farmland as though he had memorized every
                inch of the facility.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">A Woman’s Bravery Ends the Fear</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Near Tumkur, a woman spotted a suspicious man matching the description and quietly alerted villagers. They confronted
              and detained the man until police arrived — and the man who had terrified two states was once again in custody.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">Inside the Mind of a Predator</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Psychologists who later studied him reported that he displayed traits of someone who could read people very well but had
              no emotional attachment to them. He observed, analyzed and predicted behaviour — but felt nothing for the consequences.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Final Chapter</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Years later, Jaishankar was found dead in his cell — his life ending under circumstances that left many questions.
              For some it was closure; for others it felt like a final, unsettling escape.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">A Legacy That Shadows Crime History</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The case of M. Jaishankar is still studied by criminologists. His calculated methods, escapes, and the fear he caused across
              communities provide lessons for investigators and remind society that danger can hide behind ordinary faces.
            </p>

            <div className="my-8 bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Victims: multiple confirmed and suspected (see case files)</li>
                <li>• Active years: 2000s – 2010s</li>
                <li>• Region: Tamil Nadu, Karnataka (South India)</li>
                <li>• Captured: 2009; escaped 2011; recaptured</li>
                <li>• Final status: died in custody (2018)</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Navigation */}
          <nav className="flex justify-between items-center" aria-label="Article navigation">
            <Link to="/">
              <Button variant="outline" className="hover:bg-muted">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>

            <Link to="/article/jaishankar">
              <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-glow))] text-primary-foreground">
                Next Article
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </nav>
        </div>
      </article>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Article1;
