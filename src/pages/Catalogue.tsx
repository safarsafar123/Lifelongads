import React, { useState } from 'react';
import { SectionHeading, FadeIn, Button } from '../components/UI';
import { VIDEO_SERVICES_DETAILED, STRATEGIC_MONTHLY_PACKAGES, PREMIUM_ADDONS, ADVERTISING_SERVICES_DETAILED } from '../constants';
import { Check, Download, ExternalLink, Play, Camera, Film, Radio, Plane } from 'lucide-react';
import { cn } from '../lib/utils';

const Catalogue = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'advertising'>('video');

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading 
            centered
            subtitle="The Lifelong Standard" 
            title="Our Service Catalogue" 
          />
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Premium, structured solutions designed to elevate your brand from a service to a standard.
          </p>

          <div className="flex justify-center gap-4 mb-24">
            <button 
              onClick={() => setActiveTab('video')}
              className={cn(
                "px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all border-b-2",
                activeTab === 'video' ? "border-accent text-primary" : "border-transparent text-neutral-stone hover:text-primary"
              )}
            >
              Video & Photography Service
            </button>
            <button 
              onClick={() => setActiveTab('advertising')}
              className={cn(
                "px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all border-b-2",
                activeTab === 'advertising' ? "border-accent text-primary" : "border-transparent text-neutral-stone hover:text-primary"
              )}
            >
              Advertisement & Media
            </button>
          </div>

          {activeTab === 'video' ? (
            <div className="space-y-40">
              {VIDEO_SERVICES_DETAILED.map((service, sIdx) => (
                <FadeIn key={sIdx} className="text-left">
                  <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",
                    sIdx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  )}>
                    <div className={cn(
                      "lg:col-span-4 space-y-6",
                      sIdx % 2 === 1 ? "lg:order-last" : ""
                    )}>
                      <div className="inline-block px-4 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                        Service 0{sIdx + 1}
                      </div>
                      <h3 className="text-4xl font-serif leading-tight">{service.title}</h3>
                      <p className="text-accent font-medium text-sm tracking-wide">{service.overview}</p>
                      <p className="text-neutral-gray font-light leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <div className="pt-6">
                        <Button to="/contact" variant="outline" className="w-full lg:w-auto">Inquire Now</Button>
                      </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {service.tiers.map((tier, tIdx) => (
                        <div 
                          key={tIdx} 
                          className={cn(
                            "p-8 border transition-all duration-500 flex flex-col h-full",
                            tIdx === 1 ? "border-accent bg-primary text-secondary shadow-xl scale-105 z-10" : "border-accent/10 bg-secondary text-primary hover:border-accent/30"
                          )}
                        >
                          <h4 className="text-xl font-serif mb-1">{tier.name}</h4>
                          <div className="space-y-1 mb-6">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{tier.details}</p>
                            <p className="text-[9px] font-bold uppercase tracking-widest opacity-50">Turnaround: {tier.turnaround}</p>
                          </div>
                          <ul className="space-y-3 mb-8 flex-grow">
                            {tier.deliverables.map((item, iIdx) => (
                              <li key={iIdx} className="flex gap-3 items-start text-[13px] leading-snug">
                                <Check size={14} className="text-accent shrink-0 mt-0.5" />
                                <span className={tIdx === 1 ? "text-secondary/80" : "text-neutral-gray"}>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Button 
                            to="/contact" 
                            variant={tIdx === 1 ? 'gold' : 'primary'} 
                            className="w-full text-[10px] py-3"
                          >
                            Book {tier.name.split(' ')[0]}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  {sIdx < VIDEO_SERVICES_DETAILED.length - 1 && (
                    <div className="mt-40 w-full h-px bg-accent/10" />
                  )}
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="space-y-40">
              {/* Core Service Categories */}
              <div className="space-y-40">
                {ADVERTISING_SERVICES_DETAILED.map((service, sIdx) => (
                  <FadeIn key={sIdx} className="text-left">
                    <div className={cn(
                      "grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",
                      sIdx % 2 === 1 ? "lg:flex-row-reverse" : ""
                    )}>
                      <div className={cn(
                        "lg:col-span-5 space-y-6",
                        sIdx % 2 === 1 ? "lg:order-last" : ""
                      )}>
                        <div className="inline-block px-4 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                          Category 0{sIdx + 1}
                        </div>
                        <h3 className="text-4xl font-serif leading-tight">{service.title}</h3>
                        <p className="text-neutral-gray font-light leading-relaxed">
                          {service.overview}
                        </p>
                        <div className="pt-6">
                          <Button to="/contact" variant="outline" className="w-full lg:w-auto">Request Details</Button>
                        </div>
                      </div>

                      <div className="lg:col-span-7 bg-secondary p-10 border border-accent/10 rounded-sm shadow-sm">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-8">Core Capabilities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {service.items.map((item, iIdx) => (
                            <div key={iIdx} className="flex gap-4 items-start group">
                              <Check size={16} className="text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                              <span className="text-sm text-primary/80 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="pt-24 pb-12">
                <div className="w-full h-px bg-accent/20 mb-24" />
                <SectionHeading 
                  centered
                  subtitle="Strategic Solutions" 
                  title="Monthly Marketing Packages" 
                />
                <p className="text-neutral-gray max-w-2xl mx-auto font-light leading-relaxed mb-16 text-center">
                  Comprehensive monthly marketing solutions tailored for every stage of brand growth in Dubai and the UAE.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {STRATEGIC_MONTHLY_PACKAGES.map((pkg, pIdx) => (
                    <div 
                      key={pIdx} 
                      className={cn(
                        "p-10 border transition-all duration-500 flex flex-col h-full relative",
                        pkg.isPopular ? "border-accent bg-primary text-secondary shadow-2xl scale-105 z-10" : "border-accent/10 bg-secondary text-primary hover:border-accent/30"
                      )}
                    >
                      {pkg.isPopular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full">
                          Most Popular
                        </div>
                      )}
                      <h4 className="text-2xl font-serif mb-2">{pkg.name}</h4>
                      <div className="space-y-1 mb-8">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{pkg.details}</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest opacity-50">{pkg.turnaround}</p>
                      </div>
                      <ul className="space-y-4 mb-10 flex-grow">
                        {pkg.deliverables.map((item, iIdx) => (
                          <li key={iIdx} className="flex gap-3 items-start text-[13px] leading-snug">
                            <Check size={14} className="text-accent shrink-0 mt-0.5" />
                            <span className={pkg.isPopular ? "text-secondary/80" : "text-neutral-gray"}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        to="/contact" 
                        variant={pkg.isPopular ? 'gold' : 'primary'} 
                        className="w-full text-[10px] py-4"
                      >
                        Select {pkg.name.split(' ')[0]}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="px-6 md:px-12 py-32 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl font-serif mb-6">Premium Add-ons</h3>
              <p className="text-secondary/60 mb-12 max-w-md">Enhance your production with our bespoke add-on services designed for multi-platform excellence.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PREMIUM_ADDONS.map((addon, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 border border-secondary/10 hover:border-accent/30 transition-all group">
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-medium tracking-wide">{addon}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-accent p-16 text-primary space-y-8 rounded-sm">
              <h3 className="text-4xl font-serif">Need a Custom Solution?</h3>
              <p className="text-lg font-light leading-relaxed opacity-90">For large-scale projects, enterprise requirements, or unique creative visions, we offer bespoke pricing and dedicated production teams.</p>
              <div className="pt-4">
                <Button to="/contact" variant="primary" className="px-12">Request Custom Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 bg-secondary text-center border-t border-accent/10">
        <div className="max-w-3xl mx-auto space-y-10">
          <SectionHeading centered subtitle="Get in Touch" title="Ready to Start Your Project?" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-4">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">WhatsApp</p>
              <p className="text-xl font-serif">+971 547 798 628</p>
            </div>
            <div className="w-px h-12 bg-accent/20 hidden md:block" />
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Location</p>
              <p className="text-xl font-serif">Dubai, UAE</p>
            </div>
          </div>
          <p className="text-neutral-gray italic">The Brand Memory Makers.</p>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;
