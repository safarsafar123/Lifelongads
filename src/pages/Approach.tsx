import React from 'react';
import { SectionHeading, FadeIn, Button } from '../components/UI';
import { PROCESS } from '../constants';

const Approach = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Our Methodology" 
            title="Every Campaign Begins with Insight" 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <h3 className="text-3xl font-serif italic text-accent">The Marketing Study</h3>
              <p className="text-xl text-neutral-gray font-light leading-relaxed">
                Our process is rooted in the "Marketing Study" concept. We combine deep research, audience analysis, and performance data with purposeful creative decision-making.
              </p>
              <p className="text-neutral-gray leading-relaxed">
                We don't just guess; we analyze market trends and audience behavior to ensure every creative choice serves a commercial objective. Strategy defines direction, creativity shapes emotion, and execution ensures excellence.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Research Driven</h4>
                  <p className="text-sm text-neutral-gray">Data-backed creative choices.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Purpose Focused</h4>
                  <p className="text-sm text-neutral-gray">Every frame has a goal.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-primary overflow-hidden rounded-sm">
              <img src="/Approach 1.jpg" alt="Strategy Session" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-accent text-center mb-16">The 7-Step Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS.map((step, index) => (
                <FadeIn key={index} delay={index * 0.1} className="p-8 border border-accent/10 hover:border-accent/40 transition-all duration-500 group">
                  <span className="text-4xl font-serif text-accent/20 group-hover:text-accent transition-colors duration-500 block mb-6">0{index + 1}</span>
                  <h4 className="text-xl font-serif mb-4">{step.title}</h4>
                  <p className="text-sm text-neutral-gray leading-relaxed">{step.description}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-24 px-6 md:px-12 text-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif">Ready to Start Your Marketing Study?</h2>
          <p className="text-lg font-light">Let's transform your brand vision into a strategic roadmap for success.</p>
          <Button to="/contact" variant="primary">Book a Consultation</Button>
        </div>
      </section>
    </div>
  );
};

export default Approach;
