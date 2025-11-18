import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight, Clock, Share2 } from 'lucide-react';

const Article2 = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.from(imageRef.current, {
      opacity: 10,
      scale: 1.06,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from(contentRef.current?.children, {
      opacity: 100,
      y: 30,
      duration: 0.8,
      stagger: 0.09,
      ease: 'power2.out',
      delay: 0.3,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div ref={imageRef} className="relative h-[60vh] overflow-hidden">
        <img
          src="https://static.toiimg.com/thumb/msid-121307273,width-1280,height-720,resizemode-72/121307273.jpg"
          alt="Dr. Devendra Sharma"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div ref={contentRef} className="bg-card border border-border rounded-lg shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[hsl(var(--primary))] text-primary-foreground">True Crime</Badge>
              <Badge variant="outline">Rajasthan</Badge>
              <Badge variant="outline">Organ Trade</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Dr. Death of India: The Dark Story of Devendra Sharma
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>11 min read</span>
              </div>
              <span>•</span>
              <span>June 11, 2024</span>
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
              In the crowded lanes of Rajasthan’s Aligarh district, people knew him simply as Dr. Devendra Sharma—an
              Ayurvedic practitioner with a calm smile, a soft voice, and the reassuring presence of a healer. Families
              trusted him, visited him, and believed he was a man who saved lives. But behind that calm smile, behind
              those doctor’s robes, lived a truth so twisted that when it finally surfaced, India would know him by a new
              name—“Dr. Death.”
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">A Doctor, A Dream… and A Fall From Grace</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Devendra Sharma began like many others from modest towns—ambitious, hopeful, eager to rise. He completed
              his BAMS degree in 1984 and opened a small clinic. For a while, he genuinely practiced medicine. But a
              failed investment cost him lakhs. Debt piled up. His clinic income wasn’t enough. Somewhere along that
              struggle—somewhere between desperation and temptation—Sharma crossed a line.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Gas Agency That Wasn’t About Gas</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              His first step into crime seemed harmless on the surface: a fake gas agency scam. He took deposits from
              hundreds of people, promising gas connections that never existed. By the time authorities caught wind,
              Sharma had already pocketed lakhs. But easy money is addictive. He wanted more. So he went deeper.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Organ Mafia’s New Recruit</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In the early 2000s, India’s illegal organ trade was a hidden underground network. Sharma didn’t just join
              it—he became one of its most efficient operators. He ran an illegal kidney transplant racket from 1994 to
              2004. People were lured, exploited, and operated on in secret. Sharma earned money with every kidney sold.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Highway Killings—Where Dr. Death Earned His Name</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Around 2002, Sharma discovered a horrifying opportunity. Long-distance taxi drivers often drove alone at
              night. They carried money. Their cars could be sold. With no passengers, their disappearance usually went
              unnoticed for days. Sharma posed as a passenger, chose isolated routes, killed the driver, dumped the body
              in crocodile-infested canals, and sold the taxi to a scrap mafia gang. The crocodiles erased the evidence.
              The scrap mafia erased the cars’ identity. Sharma erased his humanity.
            </p>

            <div className="my-8 p-6 bg-muted/20 border-l-4 border-[hsl(var(--primary))] rounded-r-lg">
              <p className="text-foreground italic">
                “There is someone on the highways… someone who hunts at night.” — whispered rumours from roadside dhabas
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Arrest That Shocked Everyone</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In 2004, a small tip changed everything. Police started connecting missing taxi drivers and cross-checking
              routes. Then, one night in Gurgaon, Sharma was caught while preparing to sell yet another stolen vehicle.
              What followed was the unraveling of one of India’s darkest crime stories. Sharma calmly confessed—no fear,
              no regret, no hesitation.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">Life Sentence… But Dr. Death Strikes Again</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sharma was sentenced to life imprisonment. But even prison couldn't tame him. In 2020, he was given parole.
              And just like that—he vanished. For days, panic crept into towns again. He was finally caught months later
              in Delhi, living quietly, blending into a neighborhood where nobody suspected a thing.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">A Mind That Defied Understanding</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Psychologists who studied Sharma described him in one disturbing word: “Emotionless.” He could perform
              surgeries, talk softly, eat calmly, and yet speak about killings as though they were minor inconveniences.
              His intelligence was high. His calculations precise. His motives cold. He wasn’t a man who lost control—
              he was a man who controlled everything—except his greed.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-10 mb-4">The Legend That Still Haunts Roads</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Even years later, truck drivers and taxi drivers in parts of Uttar Pradesh, Delhi NCR, and Rajasthan still
              share stories about him. Mothers warn their sons not to give lifts to strangers at night. Sharma didn’t
              just kill people. He killed trust—trust in strangers, trust in help, trust in the night.
            </p>

            <div className="my-8 bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Name: Devendra Sharma (aka "Dr. Death")</li>
                <li>• Regions affected: Uttar Pradesh, Rajasthan, Delhi NCR</li>
                <li>• Criminal activities: Organ trade, highway murders, fraud</li>
                <li>• Period active (noted): 1994–2004 (organ racket) / early 2000s (highway crimes)</li>
                <li>• Arrested: 2004 (Gurgaon)</li>
                <li>• Later parole & re-arrest: Parole in 2020 followed by subsequent capture</li>
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
            <Link to="/article/next">
              <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-glow))] text-primary-foreground">
                Next Article
                <ArrowRight size={16} className="ml-2" />
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

export default Article2;
