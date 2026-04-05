import React from 'react';
import { SectionHeading, FadeIn, Button } from '../components/UI';
import { cn } from '../lib/utils';
import { Play, Shield, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="The Differentiator" 
            title="Why Brands Choose Lifelong Ads" 
          />
          
          <div className="space-y-32">
            {[
              {
                icon: <Play size={40} />,
                title: "Storytelling Through a Cinematic Lens",
                desc: "We do not just produce content; we create experiences. High-end film techniques elevate a brand from a service to a standard in its industry.",
                details: "Our production team utilizes cinema-grade equipment and advanced post-production workflows to ensure your brand's visual narrative is indistinguishable from high-end feature films."
              },
              {
                icon: <Shield size={40} />,
                title: "Values-Led Strategy",
                desc: "A brand should be a cohesive story. Every campaign should honor the brand identity while creating meaningful audience connections.",
                details: "We don't just follow trends. We build strategies that resonate with your brand's core values, ensuring long-term loyalty and authentic engagement across all digital touchpoints."
              },
              {
                icon: <Zap size={40} />,
                title: "Execution Without Compromise",
                desc: "From the first frame to the final edit, every detail meets a global benchmark through structured narratives and technical precision.",
                details: "Our rigorous quality control and project management frameworks ensure that every deliverable is polished to perfection and delivered on schedule, every time."
              }
            ].map((item, i) => (
              <FadeIn key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-accent mb-8">{item.icon}</div>
                  <h3 className="text-4xl font-serif mb-6">{item.title}</h3>
                  <p className="text-xl text-neutral-gray font-light leading-relaxed mb-6">{item.desc}</p>
                  <p className="text-neutral-gray leading-relaxed">{item.details}</p>
                </div>
                <div className={cn("aspect-video bg-primary overflow-hidden rounded-sm shadow-2xl", i % 2 === 1 ? "lg:order-1" : "")}>
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1492691527719-9d1e07e534b4' : i === 1 ? '1552664730-d307ca884978' : '1516321318423-f06f85e504b3'}?auto=format&fit=crop&q=80&w=1000`} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-secondary px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-serif">Experience the Premium Standard</h2>
          <p className="text-secondary/60 text-lg font-light">Join the ranks of forward-thinking brands that have transformed their market presence with Lifelong Ads.</p>
          <Button to="/contact" variant="gold">Start Your Journey</Button>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
