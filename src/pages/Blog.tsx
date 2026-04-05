import React, { useState, useEffect } from 'react';
import { SectionHeading, FadeIn, Button } from '../components/UI';
import { BLOG_POSTS as STATIC_POSTS } from '../constants';
import { Calendar, Tag, ArrowRight, Linkedin } from 'lucide-react';
import { db, auth, collection, onSnapshot, query, orderBy } from '../firebase';
import { BlogPost } from '../types';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as any[];
      
      // If no posts in Firestore, use static posts as fallback
      if (fetchedPosts.length === 0) {
        setPosts(STATIC_POSTS);
      } else {
        setPosts(fetchedPosts);
      }
      setLoading(false);
    }, (error) => {
      const errInfo = {
        error: error.message,
        authInfo: {
          userId: auth.currentUser?.uid,
          email: auth.currentUser?.email,
          emailVerified: auth.currentUser?.emailVerified,
        },
        operationType: 'get',
        path: 'blogs'
      };
      console.error("Firestore Error: ", JSON.stringify(errInfo));
      setPosts(STATIC_POSTS);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  const featuredPost = posts[0];

  return (
    <div className="pt-32 pb-24 bg-secondary">
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-accent/10 pb-12">
            <div className="max-w-2xl">
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">The Lifelong Journal</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight">Insights, Strategy & <span className="italic text-accent">Stories</span></h1>
            </div>
            <div className="flex items-center gap-4 p-4 bg-primary text-secondary rounded-sm">
              <div className="w-10 h-10 bg-accent text-primary flex items-center justify-center rounded-full">
                <Linkedin size={20} />
              </div>
              <div className="pr-4">
                <p className="text-[10px] font-bold uppercase tracking-widest">LinkedIn Integrated</p>
                <p className="text-[9px] opacity-60">Real-time professional insights</p>
              </div>
            </div>
          </div>

          {/* Uniform Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <FadeIn key={index} delay={index * 0.1} className="group">
                <div className="bg-white border border-accent/5 rounded-sm overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    {post.linkedinUrl && (
                      <div className="absolute top-4 right-4 z-10 bg-accent text-primary p-2 rounded-full shadow-lg">
                        <Linkedin size={14} />
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-grow space-y-4">
                    <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-neutral-gray leading-relaxed line-clamp-3 font-light flex-grow">{post.excerpt}</p>
                    <div className="pt-6 border-t border-accent/5 mt-auto">
                      {post.linkedinUrl ? (
                        <a 
                          href={post.linkedinUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-all group/link"
                        >
                          View on LinkedIn <ArrowRight size={14} className="text-accent group-hover/link:translate-x-2 transition-transform" />
                        </a>
                      ) : (
                        <button className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                          Read More <ArrowRight size={14} className="text-accent" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-secondary px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/Hero banner Image 1.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">Professional Network</span>
            <h2 className="text-4xl md:text-6xl font-serif">Join the Conversation</h2>
          </div>
          <p className="text-xl text-secondary/60 font-light leading-relaxed">Follow Lifelong Ads on LinkedIn for daily insights into cinematic production, brand strategy, and the future of advertising in Dubai.</p>
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/company/lifelongads/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-primary px-12 py-6 text-xs font-bold uppercase tracking-widest hover:bg-accent-light transition-all rounded-sm shadow-2xl"
            >
              <Linkedin size={20} /> Follow Our Agency
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
