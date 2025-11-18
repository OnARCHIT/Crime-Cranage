import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SerialKillers = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.from(headerRef.current, {
      opacity: 10,
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

  const articles = [
    {
      id: 1,
      title: 'Jeffrey Dahmer: The Milwaukee Cannibal',
      description: 'A chilling deep dive into one of America\'s most notorious serial killers.',
      image: 'https://media.gettyimages.com/id/544048382/photo/jeffrey-lionel-dahmer-aka-the-milwaukee-cannibal-is-an-american-serial-killer-and-sex-offender.jpg?s=612x612&w=0&k=20&c=sRSp3O0cNDy3vBApLO58JyTyoVBnsJdKmpKtYjipJnE=',
      readTime: '12 min',
      link: '/article/dahmer',
      tags: ['USA', 'Cannibalism', '17 Victims'],
    },
    {
      id: 2,
      title: 'M. Jaishankar: The Cyanide Killer',
      description: 'India\'s most cunning serial killer who used cyanide to murder dozens.',
      image: 'https://images.indianexpress.com/2018/03/jaishankar.jpg',
      readTime: '10 min',
      link: '/article/jaishankar',
      tags: ['India', 'Cyanide', '20+ Victims'],
    },
    {
      id: 3,
      title: 'Ted Bundy: The Charming Killer',
      description: 'The story of the charismatic serial killer who terrorized America.',
      image: 'https://images.unsplash.com/photo-1617906855223-a69f14c9841d',
      readTime: '15 min',
      link: '#',
      tags: ['USA', 'Manipulation', '30+ Victims'],
    },
    {
      id: 4,
      title: 'Aileen Wuornos: The Highway Killer',
      description: 'America\'s most infamous female serial killer and her tragic story.',
      image: 'https://images.pexels.com/photos/8382074/pexels-photo-8382074.jpeg',
      readTime: '11 min',
      link: '#',
      tags: ['USA', 'Female Killer', '7 Victims'],
    },
    {
      id: 5,
      title: 'Zodiac Killer: The Unsolved Mystery',
      description: 'The unidentified serial killer who terrorized Northern California.',
      image: 'https://images.unsplash.com/photo-1702252290459-711fcbe57298',
      readTime: '13 min',
      link: '#',
      tags: ['USA', 'Unsolved', 'Ciphers'],
    },
    {
      id: 6,
      title: 'John Wayne Gacy: The Killer Clown',
      description: 'The chilling tale of a children\'s entertainer who was a serial killer.',
      image: 'https://resizing.flixster.com/o7nELCaGUrKNSelp3ehwMgnnikg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21976576_b_h9_aa.jpg',
      readTime: '14 min',
      link: '#',
      tags: ['USA', 'Clown', '33 Victims'],
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
          <Badge className="bg-[hsl(var(--primary))] text-primary-foreground mb-4">Category</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 blood-drip">
            Serial Killers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the chilling stories of history's most notorious serial killers. From their twisted minds to their
            heinous crimes, uncover the darkness that lurks within humanity.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={cardsRef} className="netflix-grid">
          {articles.map((article) => (
            <Link key={article.id} to={article.link}>
              <Card className="crime-card category-card bg-card border-border hover:border-[hsl(var(--primary))] overflow-hidden h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>Read More</span>
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

export default SerialKillers;
