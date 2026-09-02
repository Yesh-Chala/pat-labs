import React, { useEffect } from 'react';
import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import Agenda from '@/components/Agenda';
import Methodology from '@/components/Methodology';
import Collective from '@/components/Collective';
import Featured from '@/components/Featured';
import Context from '@/components/Context';
import Footer from '@/components/Footer';
import { type PageBlockKey, useAnnouncementPost, useHomeSectionOrder, usePageBlock } from '@/content';

const SECTIONS: Record<PageBlockKey, React.FC | undefined> = {
  hero: Hero,
  agenda: Agenda,
  methodology: Methodology,
  collective: Collective,
  featured: Featured,
  context: Context,
  announcement: undefined,
  projects_intro: undefined,
  research_intro: undefined,
  blog_intro: undefined,
};

const FALLBACK_ORDER: PageBlockKey[] = [
  'hero',
  'agenda',
  'methodology',
  'collective',
  'featured',
  'context',
];

const Index = () => {
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));

    const handleClick = (event: Event) => {
      event.preventDefault();
      const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (target) {
        // Offset by the fixed header height.
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener('click', handleClick));
    return () => anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick));
  }, []);

  const order = useHomeSectionOrder();
  const announcement = usePageBlock('announcement');
  const announcementPost = useAnnouncementPost();
  const sections = order.length ? order : FALLBACK_ORDER;
  const hasAnnouncementBar = Boolean(announcement && (announcementPost || announcement.ctaLink));

  return (
    <main className="relative">
      <AnnouncementBar />
      <Header hasAnnouncementBar={hasAnnouncementBar} />
      {sections.map((key) => {
        const Section = SECTIONS[key];
        return Section ? <Section key={key} /> : null;
      })}
      <Footer />
    </main>
  );
};

export default Index;
