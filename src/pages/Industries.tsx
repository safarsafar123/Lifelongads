import React from 'react';
import { SectionHeading, FadeIn, Button } from '../components/UI';
import { INDUSTRIES } from '../constants';

const Industries = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Expertise" 
            title="Industries We Serve" 
          />
          <p className="text-xl text-neutral-gray max-w-3xl font-light leading-relaxed mb-16">
            We work across diverse sectors, tailoring our storytelling, visuals, and communication to each industry's unique identity, audience, and objectives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
            {INDUSTRIES.map((industry, index) => (
              <FadeIn key={index} delay={index * 0.1} className="group">
                <div className="space-y-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-accent font-serif text-2xl italic">0{index + 1}</span>
                    <h3 className="text-3xl font-serif group-hover:text-accent transition-colors duration-300">{industry.title}</h3>
                  </div>
                  <div className="pl-12 space-y-4">
                    <p className="text-neutral-gray leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="pt-4 border-t border-accent/10">
                      <p className="text-xs uppercase tracking-widest font-bold text-primary/60 mb-2">Expected Outcomes</p>
                      <p className="text-sm text-neutral-gray italic">
                        {index === 0 ? "Elevated brand perception and emotional connection with high-net-worth audiences." : 
                         index === 1 ? "Increased footfall and brand loyalty through sensory-driven visual narratives." :
                         index === 2 ? "Strengthened market authority and clear communication of complex value propositions." :
                         "Strategic growth and measurable impact through industry-specific creative solutions."}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-secondary py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif">Don't See Your Industry?</h2>
          <p className="text-secondary/60 text-lg font-light">Our strategic approach is adaptable. We thrive on the challenge of bringing cinematic excellence to new sectors.</p>
          <Button to="/contact" variant="gold">Discuss Your Sector</Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
