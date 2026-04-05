import React from 'react';
import { SectionHeading, FadeIn, Button } from '../components/UI';
import { SERVICES } from '../constants';
import { Play, TrendingUp, Zap, CheckCircle2, Shield } from 'lucide-react';

const Services = () => {
  const icons = [<Play />, <Shield />, <TrendingUp />, <Zap />];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Our Expertise" 
            title="Premium Media & Advertising Solutions" 
          />
          
          <div className="space-y-32">
            {Object.entries(SERVICES).map(([key, service], index) => (
              <FadeIn key={key} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 space-y-8">
                  <div className="w-16 h-16 bg-accent/10 flex items-center justify-center text-accent">
                    {React.cloneElement(icons[index] as React.ReactElement, { size: 32 })}
                  </div>
                  <h2 className="text-4xl font-serif leading-tight">{service.title}</h2>
                  <p className="text-lg text-neutral-gray font-light leading-relaxed">
                    {service.description}
                  </p>
                  <Button to="/contact" variant="outline">Request a Proposal</Button>
                </div>

                <div className="lg:col-span-7 bg-secondary p-8 md:p-12 border border-accent/10 rounded-sm shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-8">Core Deliverables</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <CheckCircle2 size={18} className="text-accent shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-primary/80 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-accent/10">
                    <p className="text-sm italic text-neutral-gray">
                      <span className="font-bold text-primary not-italic uppercase tracking-widest text-[10px] block mb-2">The Outcome</span>
                      {index === 0 ? "Cinematic content that builds strong emotional connections and elevates brand perception." :
                       index === 1 ? "A cohesive visual identity that communicates authority, trust, and long-term value." :
                       index === 2 ? "Measurable growth and performance through data-driven strategic marketing." :
                       "Refined marketing materials that maintain brand consistency across all platforms."}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Image Direction Note: Use medium size images for services as requested */}
      <section className="py-24 bg-primary text-secondary px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aspect-square bg-secondary/5 overflow-hidden rounded-sm">
            <img src="/Service 1.jpg" alt="Production" className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="aspect-square bg-secondary/5 overflow-hidden rounded-sm">
            <img src="/Service 2.jpg" alt="Strategy" className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="aspect-square bg-secondary/5 overflow-hidden rounded-sm">
            <img src="/Service 3.jpg" alt="Design" className="w-full h-full object-cover opacity-90" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
