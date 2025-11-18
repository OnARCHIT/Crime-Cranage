import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';

const Article4 = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.from(imageRef.current, {
      opacity: 10,
      scale: 1.08,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from(contentRef.current?.children, {
      opacity:100,
      y: 30,
      duration: 0.8,
      stagger: 0.09,
      ease: 'power2.out',
      delay: 0.28,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div ref={imageRef} className="relative h-[60vh] overflow-hidden">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201302/chandrakant_jha--1_660_021913115051.jpg?VersionId=sQGfN3y9HAjk9YyGqRzv1ZGrWYkhDpw8"
          alt="Chandrakant Jha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div ref={contentRef} className="bg-card border border-border rounded-lg shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[hsl(var(--primary))] text-primary-foreground">True Crime</Badge>
              <Badge variant="outline">Delhi</Badge>
              <Badge variant="outline">Dismemberment</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Chandrakant Jha: The Butcher Who Taunted Delhi
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>9 min read</span>
              </div>
              <span>•</span>
              <span>February 19, 2013</span>
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
              Delhi is a noisy city—crowded buses, narrow lanes, and millions of faces passing each other without a
              second glance. Inside this anonymity lived Chandrakant Jha, an unremarkable man with a soft voice and
              ordinary clothes, who would one day shake the city with fear. He worked small jobs, offered shelter to
              migrant boys, and appeared helpful — a façade that hid a storm of violence.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">A Childhood of Fury and Frustration</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Many details of his early life remain shadowy, but a pattern of anger and grievance emerged: fights,
              grudges, and a long-held sense of being cheated shaped Jha’s personality. That silent, controlled rage
              would later justify the horrors he committed.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Trap of Kindness</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Jha targeted young migrant men seeking work. He offered them food, shelter, and the warmth of brotherhood,
              earning the trust of those who called him “Bhai.” That trust became a psychological cage—arguments over
              money, alcohol, or chores could turn into violence. Victims often never realized they were living with a
              man who viewed human life as disposable.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The First Killing — Anger Becomes Ritual</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The first killing was not a spontaneous outburst but the start of a ritual. After strangling his victim,
              Jha calmly dismembered the body and dumped parts near Tihar Jail — an audacious message aimed straight at
              the heart of the city’s criminal justice system. That was the beginning of a pattern.
            </p>

            <div className="my-8 p-6 bg-muted/20 border-l-4 border-[hsl(var(--primary))] rounded-r-lg">
              <p className="text-foreground italic">
                “He staged the murders like performances — leaving notes, taunting the police, and choosing public places so the fear spread quickly.”
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Taunting Begins</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Jha didn’t just kill — he wanted attention. He left handwritten notes near corpses, mocking police and
              flaunting his perceived invincibility. By dumping bodies in public, he ensured rapid discovery and maximum
              terror. Each staged scene was a grim performance designed to let the city know he was watching.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">A City Terrified but Unaware</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Between murders he lived an ordinary life — shopping, joking, cooking, and visiting neighbors. People near
              him never suspected. His victims were often last seen walking with him, a chilling reminder of how easily a
              predator can hide in plain sight.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">Patterns Behind the Madness</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Investigators later identified rituals: victims he had lived with, systematic dismemberment, public dumping,
              and subtle clues left behind. The murders were personal — born from anger, betrayal, and the need for control.
              Jha derived satisfaction from the fear he created.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Mistake That Ended His Reign</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Arrogance — a serial killer’s weakness — betrayed him. Neighbors began noticing aggressive behaviour and
              suspicious disputes. When one young man’s remains were found and witnesses connected him to Jha, the mask
              began to crack and the police had enough to act.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">Arrest and Cold-Blooded Confession</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Police expected desperation at arrest — instead they found calmness bordering on pride. Jha confessed in a
              disturbingly casual tone, describing murders as “lessons” he taught victims. No guilt, no remorse — just a
              twisted logic that justified his acts.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Monster Behind the Smile</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Even after conviction, the question remained: what made Chandrakant Jha? Anger, ego, loneliness, or something
              deeper and darker that eluded understanding? He had the ability to laugh at tea stalls and erase lives in the
              same breath — a terrifying reminder that monsters sometimes walk among us wearing ordinary faces.
            </p>

            <div className="my-8 bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Name: Chandrakant Jha</li>
                <li>• Region: Delhi, India</li>
                <li>• Modus operandi: Lured migrant men, strangulation, dismemberment, public dumping</li>
                <li>• Signature: Taunting notes and public staging of bodies</li>
                <li>• Arrest: After eyewitnesses and forensic links (case build-up)</li>
                <li>• Behaviour: Calm, unrepentant confession</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex justify-between items-center">
            <Link to="/article/gacy">
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

export default Article4;
