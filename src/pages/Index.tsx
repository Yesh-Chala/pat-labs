import React from 'react';
import Header from '@/components/Header';

const Index: React.FC = () => (
  <main className="relative isolate min-h-screen overflow-hidden bg-[#758071] text-white">
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <img src="/background.png" alt="" className="h-full w-full object-cover" />
    </div>

    <Header />

    <article className="relative mx-auto max-w-4xl px-6 pb-24 pt-36 sm:pt-40 md:px-10 md:pb-32 md:pt-44"
      style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.65), 0 2px 15px rgba(0, 0, 0, 0.35)" }}>
      <div className="space-y-7 text-lg leading-relaxed text-white/95 sm:text-xl sm:leading-[1.75]">
        <p>Patronus Labs is a frontier human lab. As the world’s largest companies race to make technology more capable, we study what that technology is doing to the people at the end of the line, so that progress can be steered toward a more human-centric world.</p>

        <p>We work under the principle that each major technological update sends out a ripple. Ripples meet other ripples, and while some fade out, others build into waves that change how people behave, feel, relate to each other and make meaning of their lives.</p>

        <p>Frontier technology labs bring rigorous research to bear on the technology itself. We bring that same rigor to the human counterpart, studying how advanced technologies are reflected on, used and lived with, and what that means for the kind of world we are building.</p>

        <p>We also build the tools to do this work. Along with our studies, we develop testbeds, metrics and evaluation tools that help us understand human behavior around technology and measure it better.</p>

        <p>Some of the questions and areas we’re focussed on right now.</p>

        <ul className="list-disc space-y-3 pl-6 marker:text-white/75">
          <li>Why are people struggling to build better digital habits, despite trying?</li>
          <li>How does advanced work focussed models change relationship building and kinship at the office?</li>
          <li>How do people navigate the stigma associated with the reliance and relationship with AI?</li>
        </ul>
      </div>
    </article>
  </main>
);

export default Index;
