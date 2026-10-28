import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';

const questions = [
  {
    number: '01',
    title: 'Digital life & wellbeing',
    description: 'How do the technologies we use every day shape our habits, attention, emotions and sense of control?'
  },
  {
    number: '02',
    title: 'Human-AI relationships',
    description: 'What happens to trust, decision-making and human relationships when AI becomes part of everyday life?'
  },
  {
    number: '03',
    title: 'Technology, culture & society',
    description: 'How do our cultures, communities and social expectations influence the way we adopt, use or reject technology?'
  },
  {
    number: '04',
    title: 'Human-centred evaluation',
    description: 'How can we better understand the effects of emerging technologies and use those insights to improve how they are designed?'
  }
];

const Index = () => (
  <main className="relative">
    <Header />
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="/background.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container mx-auto px-4 md:px-6 py-28 md:py-36 relative z-10 max-w-5xl">
        <FadeIn delay={150}>
          <p className="text-white/85 text-sm md:text-base mb-6 tracking-wide">PATRONUS LABS · INDEPENDENT RESEARCH COLLECTIVE</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-tight max-w-4xl mb-8">
            Technology is changing our world. How is it changing us?
          </h1>
        </FadeIn>
        <FadeIn delay={250}>
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mb-10">
            We investigate how digital technologies shape human behaviour, relationships, wellbeing and society.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/research" className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-sm font-medium hover:bg-gray-100 transition-colors">Explore our research</Link>
            <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 border border-white/80 text-white rounded-sm font-medium hover:bg-white/10 transition-colors">Our projects</Link>
          </div>
        </FadeIn>
      </div>
    </section>

    <section id="thesis" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn>
          <p className="text-sm font-medium text-orangery-500 mb-6">WHY WE EXIST</p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-10">We are building increasingly powerful technologies. Are we spending enough time understanding what they do to us?</h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>Every day, new models become more capable, AI agents take on more tasks, and digital technologies find their way into almost every part of our lives.</p>
            <p>They are changing how we work, communicate, learn, seek support and form relationships. And with those changes come new habits, expectations, opportunities and concerns.</p>
            <p className="text-foreground font-medium">We believe understanding these changes deserves as much attention as building the technologies themselves.</p>
          </div>
        </FadeIn>
      </div>
    </section>

    <section id="gap" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <FadeIn>
          <p className="text-sm font-medium text-orangery-500 mb-5">INTRODUCING PATRONUS LABS</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Understanding technology’s place in human life.</h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl">
            Patronus Labs is an independent, interdisciplinary research collective studying how people experience technology and how those experiences shape everyday life and society. We bring together behavioural science, human-computer interaction and social science to investigate the questions that emerge as technology evolves.
          </p>
        </FadeIn>
      </div>
    </section>

    <section id="founders" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <FadeIn>
          <p className="text-sm font-medium text-orangery-500 mb-5">WHAT WE STUDY</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Questions worth asking.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-14">Our work looks at technology through the people and communities living with it. These are some of the questions guiding our research.</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {questions.map((item, index) => (
            <FadeIn key={item.number} delay={100 + index * 70}>
              <div className="border border-gray-200 rounded-lg p-7 md:p-9 h-full">
                <p className="text-sm text-orangery-500 mb-6">{item.number}</p>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/research" className="text-orangery-500 font-medium hover:underline">See our research →</Link>
        </div>
      </div>
    </section>

    <section id="investment" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <FadeIn>
            <div className="rounded-lg overflow-hidden">
              <img src="/background-2.png" alt="Patronus Labs visual" className="w-full h-[360px] md:h-[480px] object-cover" />
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-sm font-medium text-orangery-500 mb-5">FROM QUESTIONS TO EVIDENCE</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-7">Research that stays connected to real life.</h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>We study the everyday experiences behind larger technological changes, from digital habits and wellbeing to trust, reliance and relationships with AI.</p>
              <p>Through interviews, surveys, experiments and interdisciplinary collaboration, we work to develop evidence that can inform better conversations, decisions and technology design.</p>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              <Link to="/research" className="text-orangery-500 font-medium hover:underline">Research →</Link>
              <Link to="/projects" className="text-orangery-500 font-medium hover:underline">Projects →</Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif mb-7">The future of technology is also a question about people.</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-9">We want to work with researchers, organisations and communities who are curious about these questions and want to investigate them together.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="inline-flex px-6 py-3 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-colors">Learn about us</Link>
            <Link to="/projects" className="inline-flex px-6 py-3 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">Explore our projects</Link>
          </div>
        </FadeIn>
      </div>
    </section>
    <Footer />
  </main>
);

export default Index;
