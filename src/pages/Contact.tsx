import React from 'react';
import { SectionHeading, FadeIn, Button } from '../components/UI';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <FadeIn>
              <SectionHeading 
                subtitle="Get in Touch" 
                title="Let's Create Something Worth Remembering" 
              />
              <p className="text-xl text-neutral-gray font-light leading-relaxed mb-12">
                Whether you need cinematic brand storytelling, identity design, or performance-driven media strategy, Lifelong Ads is ready to help shape your next chapter.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-1">Email Us</h4>
                    <a 
                      href="mailto:marketing@lifelongads.com" 
                      className="text-lg font-serif hover:text-accent transition-colors"
                    >
                      marketing@lifelongads.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-1">Call Us</h4>
                    <a 
                      href="tel:+971547798628" 
                      className="text-lg font-medium hover:text-accent transition-colors" 
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                      +971 547798628
                    </a>
                    <br />
                    <a 
                      href="https://wa.me/971547798628" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-accent hover:text-accent-light transition-colors text-sm font-bold uppercase tracking-widest"
                    >
                      <MessageCircle size={16} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-1">Visit Us</h4>
                    <p className="text-lg font-serif">Dubai, UAE</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, url: "https://www.instagram.com/lifelongads.media" },
                  { icon: <Facebook size={20} />, url: "https://www.facebook.com/share/1CX8qbEmqT/?mibextid=wwXIfr" },
                  { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/company/lifelongads/" },
                  { icon: <MessageCircle size={20} />, url: "https://wa.me/971547798628" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-secondary p-10 md:p-16 border border-accent/10 rounded-sm shadow-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-accent/20 py-3 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-accent/20 py-3 focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Service Interested In</label>
                  <select className="w-full bg-transparent border-b border-accent/20 py-3 focus:border-accent outline-none transition-colors appearance-none">
                    <option>Cinematic Production</option>
                    <option>Brand Identity</option>
                    <option>Digital Marketing</option>
                    <option>Full Package</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-accent/20 py-3 focus:border-accent outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
                </div>
                <div className="pt-6">
                  <Button variant="primary" className="w-full">Send Inquiry</Button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto h-[400px] bg-primary/5 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin size={40} className="text-accent mx-auto" />
              <p className="text-xs font-bold uppercase tracking-widest text-primary/40">Dubai, United Arab Emirates</p>
            </div>
          </div>
          {/* In a real app, embed Google Maps here */}
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" alt="Dubai Map" className="w-full h-full object-cover opacity-20" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
