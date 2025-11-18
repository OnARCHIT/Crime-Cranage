import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';

const Article3 = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.from(imageRef.current, {
      opacity: 10,
      scale: 1.1,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from(contentRef.current?.children, {
      opacity: 100,
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

      <div ref={imageRef} className="relative h-[60vh] overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7DURjqsgYsE5_ePtxJb1RzjbFrJRjiJCDQ&s"
          alt="John Wayne Gacy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div ref={contentRef} className="bg-card border border-border rounded-lg shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[hsl(var(--primary))] text-primary-foreground">True Crime</Badge>
              <Badge variant="outline">USA</Badge>
              <Badge variant="outline">Serial Killers</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              The Double Life of John Wayne Gacy: The Killer Who Smiled Like a Clown
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>12 min read</span>
              </div>
              <span>•</span>
              <span>January 17, 2025</span>
              <span>•</span>
              <button className="flex items-center gap-1 hover:text-[hsl(var(--primary))] transition-colors">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In the quiet Chicago suburb of Norwood Park, neighbors believed they knew the man next door — a friendly
              contractor, a cheerful volunteer, a neighbor who dressed as a clown to entertain children. They called him
              John Wayne Gacy. Yet behind that painted smile lay one of the darkest double lives in criminal history —
              a truth that would one day shake America to its core.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">A Man Everyone Trusted</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              During the 1970s Gacy ran a contracting business, hired local young men, organized community events, and
              performed as "Pogo the Clown" at parties and hospitals. He cultivated trust, friendships, and a public
              persona so ordinary that suspicion rarely found purchase — until disappearances of young men around him
              started to stitch together into something far more sinister.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The First Cracks in the Mask</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rumors of missing boys and young men circulated quietly. Many who worked for him never returned; others
              vanished after being seen at his house. Gacy offered explanations — runaway, troublemaker — and his
              charisma kept most doubts at bay. That changed when a determined mother refused to accept that her son had
              simply disappeared.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Disappearance That Changed Everything</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The December 1978 disappearance of teenage Robert Piest pushed police to look closely at Gacy. Investigators
              found inconsistencies and, with a search warrant, began uncovering evidence no one expected — a smell, traces
              and then a crawl space that would lead to discoveries so horrific they stopped the nation.
            </p>

            <div className="my-8 p-6 bg-muted/20 border-l-4 border-[hsl(var(--primary))] rounded-r-lg">
              <p className="text-foreground italic">
                “He maintained his community persona even as the evidence mounted — a chilling demonstration of how deception can hide in plain sight.”
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Search That Uncovered a Nightmare</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Beneath his suburban home investigators uncovered a crawl space and, eventually, the remains of many young
              men. The scale of the crime — multiple victims, countless families shattered — revealed a predator who
              moved easily between two realities: the beloved neighbor and the calculated killer.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Calmness of a Monster</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When confronted, Gacy remained composed — calm, sometimes casual. Psychologists later described him as
              living in separate realities: one where he was Pogo the clown, and another where he committed unspeakable
              acts. His detached composure and ability to appear normal while hiding monstrous behavior alarmed both
              investigators and the public.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Trial That Captivated America</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Gacy’s trial became a media spectacle. Courtrooms filled as Americans tried to reconcile the image of a
              family-friendly entertainer with the horrors uncovered in his home. In 1980 he was convicted; in 1994 he was
              executed. Yet the questions his case raised about trust, deception, and missing victims continue to echo.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">A Legacy Written in Shadows</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              John Wayne Gacy’s story changed how communities view trust and the comforting figures among them. He became
              more than a criminal — a symbol of deception, a reminder that evil sometimes wears a painted smile. The
              image of the clown no longer feels wholly innocent to many; it bears the shadow of his crimes.
            </p>

            <div className="my-8 bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Name: John Wayne Gacy</li>
                <li>• Location: Norwood Park, Chicago, Illinois, USA</li>
                <li>• Active period: 1970s (major arrests 1978–1979)</li>
                <li>• Modus operandi: Lured young men, killed and concealed victims on property</li>
                <li>• Convicted: 1980 (multiple counts of murder)</li>
                <li>• Executed: 1994</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex justify-between items-center">
            <Link to="/article/jaishankar">
              <Button variant="outline" className="hover:bg-muted">
                <ArrowLeft size={16} className="mr-2" />
                Previous Article
              </Button>
            </Link>
            <Link to="/">
              <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-glow))] text-primary-foreground">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Article3;
