import React, { useState } from 'react';
import Header from '@/components/Header';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Index: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStatus === 'sending') return;
    const form = event.currentTarget;
    const fields = new FormData(form);

    // Netlify Forms registers this form from the static HTML during deployment.
    const encoded = new URLSearchParams();
    for (const [key, value] of fields.entries()) {
      if (typeof value === 'string') encoded.append(key, value);
    }

    setFormStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      });
      if (!response.ok) throw new Error('Contact submission failed');
      setFormStatus('success');
      form.reset();
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <main className="relative isolate min-h-screen bg-[#152b26] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src="/background.png"
          alt=""
          className="h-full w-full object-cover object-center"
          style={{ filter: 'brightness(0.75)' }}
        />
      </div>

      <Header />

      <article className="mx-auto max-w-4xl px-7 pb-16 pt-36 sm:px-10 sm:pt-40 md:px-12 md:pt-44">
        <div className="space-y-7 font-sans text-[17px] font-medium leading-[1.8] text-white sm:text-[19px] sm:leading-[1.85]">
        <p>Patronus Labs is a frontier human lab. As the world’s largest companies race to make technology more capable, we study what that technology is doing to the people at the end of the line, so that progress can be steered toward a more human-centric world.</p>

        <p>We work under the principle that each major technological update sends out a ripple. Ripples meet other ripples, and while some fade out, others build into waves that change how people behave, feel, relate to each other and make meaning of their lives.</p>

        <p>Frontier technology labs bring rigorous research to bear on the technology itself. We bring that same rigor to the human counterpart, studying how advanced technologies are reflected on, used and lived with, and what that means for the kind of world we are building.</p>

        <p>We also build the tools to do this work. Along with our studies, we develop testbeds, metrics and evaluation tools that help us understand human behavior around technology and measure it better.</p>

        <p>Some of the questions and areas we’re focussed on right now.</p>

        <ul className="list-disc space-y-3 pl-6 marker:text-white/85">
          <li>Why are people struggling to build better digital habits, despite trying?</li>
          <li>How does advanced work focussed models change relationship building and kinship at the office?</li>
          <li>How do people navigate the stigma associated with the reliance and relationship with AI?</li>
        </ul>
        </div>
      </article>

      <section id="reach-out" className="mx-auto max-w-4xl scroll-mt-24 px-7 pb-24 sm:px-10 md:px-12">
        <div className="rounded-2xl bg-[#F5F0DF]/95 px-7 py-9 text-[#24463F] sm:px-10 sm:py-11">
          <h2 className="mb-3 font-serif text-3xl font-medium">Reach out</h2>
          <p className="mb-7 max-w-xl text-base leading-relaxed">
            Interested in our research or working together? Send us a message.
          </p>

          {formStatus === 'success' ? (
            <div role="status" className="rounded-lg border border-[#24463F]/25 px-5 py-4">
              Thank you. Your message has been submitted.
              <button type="button" onClick={() => setFormStatus('idle')} className="ml-2 underline underline-offset-4">
                Send another
              </button>
            </div>
          ) : (
            <form name="patronus-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="form-name" value="patronus-contact" />
              <p className="hidden" aria-hidden="true"><label>Do not fill this in: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">Name
                  <input name="name" required autoComplete="name" maxLength={120} className="mt-2 block w-full rounded-md border border-[#24463F]/25 bg-white/85 px-4 py-3 text-base text-[#24463F] outline-offset-2 focus:outline-[#24463F]" />
                </label>
                <label className="block text-sm font-medium">Email
                  <input name="email" type="email" required autoComplete="email" maxLength={254} className="mt-2 block w-full rounded-md border border-[#24463F]/25 bg-white/85 px-4 py-3 text-base text-[#24463F] outline-offset-2 focus:outline-[#24463F]" />
                </label>
              </div>
              <label className="block text-sm font-medium">Message
                <textarea name="message" required rows={5} maxLength={5000} className="mt-2 block w-full resize-y rounded-md border border-[#24463F]/25 bg-white/85 px-4 py-3 text-base text-[#24463F] outline-offset-2 focus:outline-[#24463F]" />
              </label>
              {formStatus === 'error' && <p role="alert" className="text-sm text-red-800">The message could not be sent. Please try again.</p>}
              <button type="submit" disabled={formStatus === 'sending'} className="rounded-md bg-[#24463F] px-7 py-3 font-medium text-white transition-colors hover:bg-[#16352E] disabled:cursor-wait disabled:opacity-60">
                {formStatus === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Index;
