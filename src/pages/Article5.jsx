import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';

const Article5 = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 1.08,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from(contentRef.current?.children, {
      opacity: 0,
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
          src="https://upload.wikimedia.org/wikipedia/en/0/0c/Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg"
          alt="Jeffrey Dahmer mugshot"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div ref={contentRef} className="bg-card border border-border rounded-lg shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[hsl(var(--primary))] text-primary-foreground">Serial Killers</Badge>
              <Badge variant="outline">USA</Badge>
              <Badge variant="outline">Milwaukee</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Jeffrey Dahmer: The Quiet Man with a Deadly Secret
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>12 min read</span>
              </div>
              <span>•</span>
              <span>May 21, 1960 – Nov 28, 1994</span>
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
              In July 1991, a terrified man led Milwaukee police to Apartment 213 — and what officers found there was
              beyond anything imagined. Jeffrey Dahmer appeared quiet and polite on the outside, but his apartment
              concealed a house of horror.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Lonely Boy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Born May 21, 1960, in Milwaukee, Dahmer’s childhood was marked by loneliness and family turmoil. His
              mother struggled with mental health; his father worked long hours. He became fascinated with dead animals,
              dissecting and studying them — an early sign of troubling behaviour. Quiet and friendless at school, he
              later said that his isolation fed a craving for control that would become deadly.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The First Kill</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At 18, after his parents' divorce, Dahmer picked up hitchhiker Steven Hicks. When Hicks tried to leave,
              Dahmer panicked — he struck and strangled him with a dumbbell. The killing brought a disturbing calm and
              sense of power that would escalate into addiction.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Monster Inside</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For years Dahmer lived a double life: a chocolate-factory worker and polite neighbor by day, and a killer at
              night. He targeted young men from gay bars, luring them with money, drinks, or photos. He drugged, strangled,
              and kept their bodies — preserving parts, boiling flesh from bones, and attempting to create obedient, "zombie-like"
              victims so they would never leave.
            </p>

            <div className="my-8 p-6 bg-muted/20 border-l-4 border-[hsl(var(--primary))] rounded-r-lg">
              <p className="text-foreground italic">
                "I wanted to keep them with me forever." — Dahmer (on his motivation)
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Escape and Capture</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              On July 22, 1991, Tracy Edwards escaped and flagged down police. Inside Apartment 213, officers found
              Polaroids of dismembered victims, skulls, and human remains in the refrigerator. Dahmer was arrested on the spot,
              ending years of secret murders.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">Trial and Sentencing</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dahmer calmly confessed to 17 murders at trial. His defense argued insanity; the prosecution showed planning
              and control. In 1992 he was sentenced to 15 consecutive life terms, ensuring he would remain imprisoned.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">Death and Legacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In prison Dahmer remained largely emotionless. On Nov 28, 1994, he was beaten to death by inmate Christopher Scarver
              at Columbia Correctional Institution in Portage, Wisconsin. His crimes raised major questions about police
              procedures and how early complaints were missed. Dahmer’s case remains a chilling study in how childhood trauma,
              loneliness, and twisted desire can form a monstrous pattern.
            </p>

            <div className="my-8 bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Victims: 17 confirmed murders</li>
                <li>• Active years: 1978–1991</li>
                <li>• Location: Milwaukee, Wisconsin (primary)</li>
                <li>• Capture: July 22, 1991</li>
                <li>• Sentence: 15 consecutive life terms (1992)</li>
                <li>• Death: Nov 28, 1994 (killed in prison)</li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Jeffrey Dahmer’s story is a stark reminder that monstrous behaviour can hide behind a polite exterior.
              His crimes changed procedures and research into serial offenders, and his name remains one of the most infamous
              in criminal history.
            </p>
          </div>

          <Separator className="my-8" />

          <div className="flex justify-between items-center">
            <Link to="/article/chandrakant-jha">
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

export default Article5;
