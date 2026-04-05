import React from 'react';
import { SectionHeading, FadeIn, Button } from '../components/UI';
import { Shield, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Vision & Mission */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <SectionHeading 
                subtitle="Our Story" 
                title="Crafting Timeless Stories with Purpose" 
              />
              <p className="text-xl text-neutral-gray font-light leading-relaxed mb-8">
                Lifelong Ads was born from a simple belief: Strong brands are built through meaning, not noise.
              </p>
              <div className="space-y-6 text-neutral-gray leading-relaxed">
                <p>
                  Based in the heart of Dubai, we have established ourselves as a premium media and advertising house that sets new benchmarks in storytelling and visual excellence.
                </p>
                <p>
                  We don't chase trends; we craft timeless stories designed to be remembered. Our approach integrates innovation, strategic thinking, and cinematic precision into every creative output.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-secondary p-10 border border-accent/10 space-y-4">
                  <div className="text-accent"><Target size={32} /></div>
                  <h3 className="text-2xl font-serif">Mission</h3>
                  <p className="text-sm text-neutral-gray leading-relaxed">Deliver world-class media solutions that elevate brand perception and long-term value through trust and quality.</p>
                </div>
                <div className="bg-primary p-10 text-secondary space-y-4">
                  <div className="text-accent"><Eye size={32} /></div>
                  <h3 className="text-2xl font-serif">Vision</h3>
                  <p className="text-secondary/60 text-sm leading-relaxed">To become a leading premium media house, setting global benchmarks in storytelling and brand communication.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-primary text-secondary px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <SectionHeading 
            light 
            centered 
            subtitle="Our Philosophy" 
            title="Quality Over Volume. Depth Over Trends." 
          />
          <p className="text-2xl font-serif italic text-accent/80 leading-relaxed">
            "Every story begins with clarity of purpose and is shaped through disciplined creativity and thoughtful execution."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            {[
              { title: "Strategy", desc: "Defines the direction and ensures commercial effectiveness." },
              { title: "Creativity", desc: "Shapes emotion and builds deep audience connections." },
              { title: "Execution", desc: "Ensures excellence and technical precision in every frame." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{item.title}</h4>
                <p className="text-secondary/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered 
            subtitle="Our Values" 
            title="The Pillars of Our Success" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield />, title: "Trust", desc: "Building enduring partnerships through transparency and quality." },
              { icon: <Heart />, title: "Passion", desc: "A shared commitment to excellence in every project we touch." },
              { icon: <Target />, title: "Precision", desc: "Attention to detail from the first frame to the final edit." },
              { icon: <Zap />, title: "Innovation", desc: "Integrating AI and new technologies to push creative boundaries." }
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-10 bg-secondary border border-accent/10 hover:shadow-xl transition-all">
                <div className="text-accent mb-6">{value.icon}</div>
                <h4 className="text-xl font-serif mb-4">{value.title}</h4>
                <p className="text-sm text-neutral-gray leading-relaxed">{value.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Zap = ({ size }: { size?: number }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export default About;
