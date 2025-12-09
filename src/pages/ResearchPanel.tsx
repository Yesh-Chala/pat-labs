import React from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Shield, Users, TrendingUp, Heart, Brain, Zap, CheckCircle2, Lock, Eye, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const ResearchPanel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-black mb-6">
            Research Panel
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Patronus Labs is a behavioral research collective focused on understanding how people in India think, feel, and behave in the digital world.
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            We're building a long-term research foundation that produces reliable insights for policy, technology, and social development grounded in real human experiences.
          </p>
          <Link to="/join">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              Join Research Panel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-12 text-black">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Modern Data Collection</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use WhatsApp and Discord bots, qualitative AI agents, and large-scale opinion gathering to study real human behavior.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Digital Well-Being Research</h3>
                <p className="text-gray-600 leading-relaxed">
                  We explore digital habits, emotional well-being, AI adoption, trust, privacy, and everyday decision-making patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Actionable Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our research informs better product design, more effective policymaking, and truly human-centered technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Focus Areas */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-stone-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-4 text-black">
            Current Focus Areas
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">What We're Studying Now</p>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      01
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-black">Gen Z & AI Adoption</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      How Indian Gen Z is discovering, using, and integrating AI tools into their daily lives.
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <p className="text-emerald-900 font-medium mb-2">Building a Youth Panel</p>
                      <p className="text-emerald-800 text-sm leading-relaxed">
                        We're creating a youth-focused participant panel to understand real behavior at scale—moving beyond assumptions to capture authentic lived experiences and diverse perspectives.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      02
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-black">Emotional Support Networks</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Understanding how people choose sources of emotional and social support in digital spaces.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      03
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-black">Digital Habits & Life Satisfaction</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Examining the relationship between digital behavior patterns and overall well-being.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Need People */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-4 text-black">
            Why We Need People
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Your participation shapes the future. Every voice adds depth and accuracy to research that influences technology, policy, and social development in India.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Individual Stories</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understanding society begins with understanding individuals and their unique experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-pink-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Diverse Perspectives</h3>
                <p className="text-gray-600 leading-relaxed">
                  More participants mean more accurate, diverse, and representative insights across communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-cyan-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Real Patterns</h3>
                <p className="text-gray-600 leading-relaxed">
                  Participation helps us study authentic patterns, break myths, and build research grounded in reality.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/join">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white hover:from-emerald-800 hover:to-teal-900 px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Join Research Panel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's In It For Them */}
      <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-12 text-black">
            What's In It For You
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black">Financial Compensation</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Money is the obvious incentive, and yes, participants are paid fairly for their time and contributions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-amber-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black">You Shape the Rewards</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  As representatives, participants decide what else they want from the incentive pool. The structure is flexible and responsive to their needs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2 text-black">Research Exposure</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Want to learn research methods? We'll bring that experience directly to you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <Brain className="h-8 w-8 text-purple-600 mb-3" />
                <h4 className="font-semibold mb-2 text-black">Skill Building</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Need tutorials or guidance? We'll create skill-building sessions tailored to your interests.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-pink-600 mb-3" />
                <h4 className="font-semibold mb-2 text-black">Your Input Matters</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tell us what you need, and we'll shape the incentives around that.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-4 text-black">
            How We're Different
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            We are not a betting app, not a survey farm, and not a data-selling operation. All our studies follow strict ethical standards that prioritize your safety, privacy, and dignity.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-semibold mb-2 text-black">Informed Consent</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We take consent seriously at every stage. You always know what you're participating in and why.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-semibold mb-2 text-black">Data Protection</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We anonymize all data, encrypt sensitive information, and never share personal details.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="font-semibold mb-2 text-black">No Manipulation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We never use data for political targeting, manipulation, or any unethical purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-semibold mb-2 text-black">Full Transparency</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Everything we do is transparent and compliant with international research ethics standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-stone-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-12 text-black">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                Is this safe?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                Yes, approved by research ethics, confidential. All our studies follow strict ethical standards and your data is protected with encryption and anonymization.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                How do I get paid?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                Direct transfer to your bank after study completion. We ensure fair compensation for your time and contributions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                What studies are available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                Cognitive tasks, decision-making, perception studies. We cover a wide range of behavioral research topics including AI adoption, digital habits, and emotional support networks.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <Link to="/join">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Join Research Panel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPanel;

