import React from 'react';
import { SectionHeading, FadeIn } from '../components/UI';
import { Users, Heart, Zap, Shield } from 'lucide-react';

const TeamCulture = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Our People" 
            title="The Minds Behind the Memory" 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <p className="text-xl text-neutral-gray font-light leading-relaxed">
                Our team brings together strategists, filmmakers, designers, and digital specialists—all united by a shared commitment to excellence.
              </p>
              <div className="space-y-6 text-neutral-gray leading-relaxed">
                <p>
                  At Lifelong Ads, culture isn't just a buzzword; it's our competitive advantage. We foster an environment of collaboration, ownership, and creative freedom.
                </p>
                <p>
                  Every project is approached with a deep sense of responsibility. We believe that every success is shared, and every challenge is an opportunity for collective growth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-primary overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Team Collaboration" className="w-full h-full object-cover opacity-70" />
              </div>
              <div className="aspect-[3/4] bg-accent/20 overflow-hidden rounded-sm mt-8">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" alt="Creative Session" className="w-full h-full object-cover opacity-70" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users />, title: "Collaboration", desc: "Breaking silos to create integrated brand experiences." },
              { icon: <Heart />, title: "Ownership", desc: "Taking full responsibility for the quality of every output." },
              { icon: <Zap />, title: "Creative Freedom", desc: "Empowering our specialists to push creative boundaries." },
              { icon: <Shield />, title: "Responsibility", desc: "Approaching every client vision with integrity and care." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-10 border border-accent/10 hover:border-accent/40 transition-all">
                <div className="text-accent mb-6">{item.icon}</div>
                <h4 className="text-xl font-serif mb-4">{item.title}</h4>
                <p className="text-sm text-neutral-gray leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-secondary px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-serif italic text-accent">"Every success is shared."</h2>
          <p className="text-secondary/60 text-lg font-light">We are more than an agency; we are a collective of creative minds dedicated to building brand legacies.</p>
        </div>
      </section>
    </div>
  );
};

export default TeamCulture;
