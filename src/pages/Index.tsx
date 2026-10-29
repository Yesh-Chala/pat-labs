import React from 'react';
import Header from '@/components/Header';

const Index: React.FC = () => (
  <main className="relative isolate min-h-screen overflow-hidden bg-[#758071] text-[#24463F]">
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <img src="/background.png" alt="" className="h-full w-full object-cover" />
    </div>

    <Header />

    <article className="relative mx-auto mt-28 mb-16 max-w-4xl rounded-[20px] bg-[#F5F0DF]/90 px-7 py-9 backdrop-blur-[3px] sm:mt-32 sm:px-10 sm:py-12 md:mt-36 md:mb-24 md:px-12 md:py-14">
      <div className="space-y-7 font-sans text-[17px] font-medium leading-[1.85] text-[#24463F] sm:text-[19px] sm:leading-[1.85]">
        <p>Patronus Labs is a frontier human lab. As the world’s largest companies race to make technology more capable, we study what that technology is doing to the people at the end of the line, so that progress can be steered toward a more human-centric world.</p>

        <p>We work under the principle that each major technological update sends out a ripple. Ripples meet other ripples, and while some fade out, others build into waves that change how people behave, feel, relate to each other and make meaning of their lives.</p>

        <p>Frontier technology labs bring rigorous research to bear on the technology itself. We bring that same rigor to the human counterpart, studying how advanced technologies are reflected on, used and lived with, and what that means for the kind of world we are building.</p>

        <p>We also build the tools to do this work. Along with our studies, we develop testbeds, metrics and evaluation tools that help us understand human behavior around technology and measure it better.</p>

        <p>Some of the questions and areas we’re focussed on right now.</p>

        <ul className="list-disc space-y-3 pl-6 marker:text-[#24463F]">
          <li>Why are people struggling to build better digital habits, despite trying?</li>
          <li>How does advanced work focussed models change relationship building and kinship at the office?</li>
          <li>How do people navigate the stigma associated with the reliance and relationship with AI?</li>
        </ul>
      </div>
    </article>
  </main>
);

export default Index;
