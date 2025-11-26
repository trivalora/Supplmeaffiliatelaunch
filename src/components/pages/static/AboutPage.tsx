'use client';

import Image from 'next/image';
import { 
  StaticPageTemplate, 
  ContentSection, 
  CardContent 
} from '@/components/templates/StaticPageTemplate';

interface FounderInfoProps {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

function FounderInfo({ name, title, imageUrl, bio }: FounderInfoProps) {
  // Special cropping for Sebastian's image
  const isSebastian = name === 'Sebastian';

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      {/* Founder Image */}
      <div className="shrink-0 w-full lg:w-60 h-[280px] rounded-[14px] overflow-hidden bg-transparent relative">
        <Image
          src={imageUrl}
          alt={`${name} - ${title}`}
          fill
          className="object-cover rounded-[14px]"
          style={isSebastian ? { objectPosition: '50% 23%' } : undefined}
          sizes="(min-width: 1024px) 240px, 90vw"
        />
      </div>

      {/* Founder Bio Card */}
      <div className="flex-1 w-full bg-card rounded-[14px] border border-secondary p-6">
        <p className="font-['Lora',serif] leading-7 text-primary text-[20px] mb-1">
          {name}
        </p>
        <p className="font-['Lato',sans-serif] font-normal leading-5 text-muted-foreground text-[14px] mb-4">
          {title}
        </p>
        <p className="font-['Lato',sans-serif] font-normal leading-6 text-foreground text-[14px]">
          {bio}
        </p>
      </div>
    </div>
  );
}

export function AboutPage() {
  const founders = [
    {
      name: 'Philipp',
      title: 'CEO',
      imageUrl: '/optimized/ba7f18652d239a86866cf8bd1f5919c913befa4b-640.webp',
      bio: 'Philipp loves supplements—very much. He spent hundreds of hours researching the ingredients that make sense, that are good quality, and where he can buy them for the best value. For years, he has been wishing for a reliable and beautiful tool where he can do the research and compare prices. suppl.me is the consequence of a year-long wish for a reliable ally in supplementation. suppl.me is built to remove all friction and doubt from your supplementation journey.',
    },
    {
      name: 'Brian',
      title: 'CTO',
      imageUrl: '/optimized/ba23c644c769aed69ee6d17f7866560f5794f544-640.webp',
      bio: 'Brian loves building. As the head of everything tech he brings the vision and the data to life with computer magic. Inspired by the vision to build a business where everyone wins while value and intention are crucial aspects of the company culture, his expertise makes the execution of this vision possible.',
    },
    {
      name: 'Sebastian',
      title: 'CFO',
      imageUrl: '/optimized/4cc7cdc6ba408e920883098378ddf5612fda349e-640.webp',
      bio: 'Sebastian loves data. He is the one that knows his way around in the realm of our work that makes us a reliable source for you– said data. As a clinical psychologist currently working on his dissertation, he sports years of experience in rigorous research and thousands of papers read. He leads the research methodology and ensures that every claim we make is backed by robust scientific evidence and discerning evaluation.',
    },
  ];

  return (
    <StaticPageTemplate
      title="About Us - Evidence-Based Supplement Guide"
      description="Meet the team behind the evidence-based supplement platform. Learn about our mission to provide transparent, science-backed supplement recommendations and price comparisons."
      keywords="about suppl.me, supplement research team, evidence-based supplements, transparent supplement guide, science-backed recommendations"
      heroTitle="Our Mission"
      heroSubtitle="Your evidence-backed supplement stack for less. In seconds."
      heroBackground="tertiary"
    >
      {/* Mission Statement */}
      <ContentSection background="tertiary">
        <CardContent>
          <div className="space-y-6">
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              suppl.me is the direct result of our own frustration. We experienced the time and mental tax of buying supplements firsthand.
            </p>
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              Researching evidence-aligned options for longevity and peak performance used to take way too much time. Sifting through hype and misleading claims creates a heavy cognitive load and a deep trust deficit. Finding the best value was a separate, frustrating task and a total time-sink.
            </p>
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              Our mission is to be your Trusted Filter. We built this platform to reduce friction, synthesizing complex, peer-reviewed studies into actionable information. We then normalize value to a metric you can directly compare: price per active mg.
            </p>
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              We are actively developing this platform. Please leave us feedback while we learn the ropes of providing you with the best possible supplement experience we can imagine.
            </p>
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              Thank you for riding with us.
            </p>
          </div>
        </CardContent>
      </ContentSection>

      {/* Meet Our Founders */}
      <ContentSection title="Meet Our Founders" background="secondary">
        <div className="flex flex-col gap-8">
          {founders.map((founder) => (
            <FounderInfo
              key={founder.name}
              name={founder.name}
              title={founder.title}
              imageUrl={founder.imageUrl}
              bio={founder.bio}
            />
          ))}
        </div>
      </ContentSection>
    </StaticPageTemplate>
  );
}