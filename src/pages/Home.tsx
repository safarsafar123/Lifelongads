import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Button, SectionHeading, FadeIn } from "../components/UI";
import { SERVICES, INDUSTRIES, PROCESS } from "../constants";
import {
  Play,
  Star,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Instagram,
  Youtube,
} from "lucide-react";
import { db, auth, collection, onSnapshot, query, orderBy } from "../firebase";

const HERO_IMAGES = [
  "/Hero banner Image 1.jpg",
  "/Hero banner Image 2.jpg",
  "/Hero banner Image 3.jpg",
  "/Hero banner Image 4.jpg",
  "/Hero banner Image 5.jpg",
  "/HOME PAGE BANNER.jpg",
];

const Home = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "featured_videos"),
      orderBy("createdAt", "desc"),
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedVideos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (fetchedVideos.length > 0) {
          setVideos(fetchedVideos);
        } else {
          // Fallback to the user's provided video
          setVideos([
            {
              url: "/reel-preview.mp4",
             link: "https://www.instagram.com/reel/DWMT4nBDChg/",
              type: "instagram",
            },
          ]);
        }
      },
      (error) => {
        const errInfo = {
          error: error.message,
          authInfo: {
            userId: auth.currentUser?.uid,
            email: auth.currentUser?.email,
            emailVerified: auth.currentUser?.emailVerified,
          },
          operationType: "get",
          path: "featured_videos",
        };
        console.error("Firestore Error: ", JSON.stringify(errInfo));
        setVideos([
          {
            url: "/reel-preview.mp4",
           link: "https://www.instagram.com/reel/DWMT4nBDChg/",
            type: "instagram",
          },
        ]);
      },
    );

    return () => unsubscribe();
  }, []);

  const currentVideo = videos[currentVideoIndex];

  // Helper to get YouTube embed URL with autoplay and mute
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      let videoId = "";
      if (url.includes("embed/")) {
        videoId = url.split("embed/")[1]?.split("?")[0];
      } else if (url.includes("v=")) {
        videoId = url.split("v=")[1]?.split("&")[0];
      } else {
        videoId = url.split("/").pop() || "";
      }
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1&rel=0&playlist=${videoId}&loop=1`;
    }
    return url;
  };
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              key={currentHeroImageIndex}
              src={HERO_IMAGES[currentHeroImageIndex]}
              alt="Cinematic Production"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent font-bold uppercase tracking-[0.4em] text-xs"
          >
            Dubai's Premium Media House
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary leading-tight"
          >
            The Brand <br />{" "}
            <span className="text-accent italic">Memory Makers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-secondary/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Lifelong Ads crafts visually striking, emotionally engaging, and
            commercially effective brand experiences through cinematic
            storytelling and strategic creativity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <Button to="/contact" variant="gold">
              Start Your Project
            </Button>
            <Button to="/services" variant="secondary">
              Explore Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary/30 flex flex-col items-center gap-6"
        >
          <div className="flex gap-3">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHeroImageIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${idx === currentHeroImageIndex ? "bg-accent w-6" : "bg-secondary/20"}`}
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll to Explore
            </span>
            <div className="w-px h-12 bg-accent/30" />
          </div>
        </motion.div>
      </section>

      {/* Brand Introduction */}
      <section className="py-24 px-6 md:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-primary overflow-hidden rounded-sm shadow-2xl">
              <img
                src="/Home 1.jpg"
                alt="Cinematic Production Set"
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-accent p-10 hidden md:block z-10">
              <div className="text-primary space-y-2">
                <span className="text-4xl font-serif font-bold">100%</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Commitment to Excellence
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="order-1 lg:order-2">
            <SectionHeading
              subtitle="Our Essence"
              title="We Don't Create Content. We Create Brand Memory."
            />
            <div className="space-y-6 text-neutral-gray leading-relaxed text-lg">
              <p>
                Lifelong Ads is a premium media and advertising house that
                creates powerful brand stories through cinematic storytelling,
                strategic creativity, and refined visual production.
              </p>
              <p>
                We partner with forward-thinking brands to design media
                experiences that are visually striking, emotionally engaging,
                and commercially effective. Our work spans advertising films,
                brand identity, digital marketing, and content production,
                delivered with clarity, precision, and purpose.
              </p>
              <Button to="/about" variant="outline" className="mt-4">
                Learn Our Story
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 md:px-12 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            light
            centered
            subtitle="What We Do"
            title="Premium Solutions for Global Brands"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(SERVICES).map(([key, service], index) => (
              <FadeIn key={key} delay={index * 0.1}>
                <div className="group p-10 border border-secondary/10 hover:border-accent/50 transition-all duration-500 h-full flex flex-col">
                  <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                    {index === 0 ? (
                      <Play size={40} />
                    ) : index === 1 ? (
                      <Shield size={40} />
                    ) : index === 2 ? (
                      <TrendingUp size={40} />
                    ) : (
                      <Zap size={40} />
                    )}
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                  <p className="text-secondary/60 text-sm mb-8 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-accent text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    Explore Service <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Preview (Text Only) */}
      <section className="py-24 px-6 md:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            centered
            subtitle="Industries We Serve"
            title="Tailored Excellence Across Sectors"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {INDUSTRIES.slice(0, 4).map((industry, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <h4 className="text-xl font-serif mb-3 border-b border-accent/30 pb-2">
                  {industry.title}
                </h4>
                <p className="text-sm text-neutral-gray leading-relaxed">
                  {industry.description}
                </p>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button to="/industries" variant="outline">
              View All Industries
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-24 px-6 md:px-12 bg-primary text-secondary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading
                light
                subtitle="Why Lifelong Ads"
                title="The Art of Creative Excellence"
              />
              <div className="space-y-10">
                {[
                  {
                    icon: <Star />,
                    title: "Cinematic Storytelling",
                    desc: "We elevate content into experiences using high-end film techniques.",
                  },
                  {
                    icon: <Shield />,
                    title: "Strategic Thinking",
                    desc: "Every campaign is a cohesive story built on deep market insights.",
                  },
                  {
                    icon: <Zap />,
                    title: "Execution Excellence",
                    desc: "Technical precision and structured narratives in every frame.",
                  },
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="flex gap-6">
                    <div className="text-accent shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                      <p className="text-secondary/60 text-sm">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <FadeIn delay={0.3} className="flex justify-center">
              <div className="w-full max-w-[320px] aspect-[9/16] bg-primary/10 border border-secondary/10 rounded-sm overflow-hidden shadow-2xl relative">
                {currentVideo?.type === "youtube" ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={getEmbedUrl(currentVideo.url)}
                    title="Featured Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : currentVideo?.type === "instagram" ? (
                  <a
                    href={currentVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-0 left-0 w-full h-full block"
                  >
                    <video
                      src={currentVideo.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-end justify-center pb-5 bg-black/20">
                      <div className="bg-white/90 text-black px-4 py-2 rounded-full font-semibold">
                        Watch on Instagram
                      </div>
                    </div>
                  </a>
                ) : (
                  <video
                    src={currentVideo?.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                )}

                {videos.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {videos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentVideoIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentVideoIndex ? "bg-accent w-4" : "bg-secondary/30"}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-secondary border-t border-primary/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-stone mb-12">
            Trusted By Forward-Thinking Brands
          </p>
          <div className="relative flex overflow-hidden">
            <div className="flex gap-6 animate-scroll whitespace-nowrap items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11].map((i) => (
                <div
                  key={i}
                  className="w-64 md:w-80 h-48 flex items-center justify-center p-2"
                >
                  <img
                    src={`/clients/client${i}.png`}
                    alt={`Client ${i}`}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              {/* Duplicate for seamless infinite scroll */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11].map((i) => (
                <div
                  key={i + 11}
                  className="w-64 md:w-80 h-48 flex items-center justify-center p-2"
                >
                  <img
                    src={`/clients/client${i}.png`}
                    alt={`Client ${i}`}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-accent text-primary text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Ready to Make Your Brand <br />{" "}
            <span className="italic">Unforgettable?</span>
          </h2>
          <p className="text-primary/80 text-lg font-light">
            Let's build a story that lasts a lifetime. Start your project with
            Dubai's premium media house today.
          </p>
          <div className="pt-4">
            <Button to="/contact" variant="primary">
              Let's Build Your Brand
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ArrowRight = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default Home;
