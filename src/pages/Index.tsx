import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Agenda from '@/components/Agenda';
import Methodology from '@/components/Methodology';
import Collective from '@/components/Collective';
import Context from '@/components/Context';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          // Cleanup
        });
      });
    };
  }, []);

  return (
    <main className="relative">
      {/* Announcement bar: fixed at very top, above navbar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-stone-100/95 backdrop-blur-sm border-b border-stone-200/80">
        <Link
          to="/research/emotional-imbalances-in-everyday-life"
          className="block w-full py-4 px-4 md:py-5 md:px-6 text-center text-sm text-stone-700 hover:bg-stone-200/60 hover:text-stone-900 transition-colors font-sans"
        >
          <span className="font-medium">New:</span> Emotional Imbalances in Everyday Life — what we found about digital habits and everyday emotional life.{' '}
          <span className="inline-flex items-center text-stone-600 hover:text-stone-900">
            Read more
            <svg className="ml-1 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
      <Header hasAnnouncementBar />
      <Hero />
      <Agenda />
      <Methodology />
      <Collective />
      <Context />
      <Footer />
    </main>
  );
};

export default Index;
