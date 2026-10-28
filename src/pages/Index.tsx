import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';

const Index = () => (
  <main className="relative">
    <Header />
    <div className="relative isolate text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/background.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <section className="min-h-screen flex items-center py-32 md:py-40">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn delay={150}>
            <p className="text-sm tracking-widest uppercase text-white/75 mb-8">Patronus Labs</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight tracking-tight max-w-4xl">
              Technology is changing our world. How is it changing us?
            </h1>
          </FadeIn>
          <FadeIn delay={250}>
            <p className="mt-10 text-xl md:text-2xl leading-relaxed text-white/85 max-w-3xl">
              We study the place technology is taking in human life, and what it means for the people and societies living with it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="thesis" className="py-24 md:py-36">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-10">
              We keep asking what technology can do next. We also want to ask what it is doing to us.
            </h2>
            <div className="space-y-7 text-lg md:text-xl text-white/85 leading-relaxed">
              <p>Every day, we build more capable systems, find new uses for them, and bring them into more parts of our lives.</p>
              <p>Along the way, the ways we think, work, connect, make decisions and understand one another are changing too. Some of these changes are visible. Others take shape slowly, through the habits we form and the expectations we come to live with.</p>
              <p>We think these changes deserve to be studied, understood and talked about. That is why Patronus Labs exists.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="questions" className="py-24 md:py-36">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-white/65 mb-7">What we wonder about</p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-12">The questions keep growing.</h2>
            <div className="space-y-9 text-xl md:text-3xl font-serif leading-snug">
              <p>How does technology change the way we live with ourselves and with others?</p>
              <p>What happens when the tools we create begin to shape our choices, relationships and expectations?</p>
              <p>How do different people and communities experience the same technological changes?</p>
              <p>And how might a deeper understanding of all this help us build a future we actually want to live in?</p>
            </div>
            <p className="mt-12 text-lg text-white/75 leading-relaxed">
              From digital habits and wellbeing to AI, culture and social life, these questions guide the work we have done and the work we hope to explore.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-9 text-lg">
              <Link to="/research" className="underline underline-offset-8 decoration-white/60 hover:decoration-white">Explore our research</Link>
              <Link to="/projects" className="underline underline-offset-8 decoration-white/60 hover:decoration-white">See our projects</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="approach" className="py-24 md:py-36">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-white/65 mb-7">How we approach it</p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-10">Curiosity, grounded in people's experiences.</h2>
            <div className="space-y-7 text-lg md:text-xl text-white/85 leading-relaxed">
              <p>We are an independent, interdisciplinary research collective. Our work draws from behavioural science, human-computer interaction and the social sciences to investigate technology as part of everyday human life.</p>
              <p>We begin with questions, listen to people's experiences, and use research to understand the patterns and tensions behind them. We want to bring different perspectives into the conversation, especially those that are often left out.</p>
              <p>We hope what we learn can inform how technology is understood, designed and used, and contribute to a more thoughtful conversation about its place in society.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 md:py-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">There is still so much we do not understand.</h2>
            <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-10">
              We want to investigate it with people who are just as curious about the future of technology and human life.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg">
              <Link to="/about" className="underline underline-offset-8 decoration-white/60 hover:decoration-white">About Patronus Labs</Link>
              <Link to="/research" className="underline underline-offset-8 decoration-white/60 hover:decoration-white">Our research</Link>
              <Link to="/projects" className="underline underline-offset-8 decoration-white/60 hover:decoration-white">Our projects</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
    <Footer />
  </main>
);

export default Index;
