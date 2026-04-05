import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  to,
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'gold'; 
  className?: string;
  to?: string;
  [key: string]: any;
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-primary text-secondary hover:bg-neutral-gray",
    secondary: "bg-secondary text-primary hover:bg-neutral-stone/10",
    outline: "border border-primary text-primary hover:bg-primary hover:text-secondary",
    gold: "bg-accent text-primary hover:bg-accent-light shadow-lg shadow-accent/20"
  };

  const content = (
    <>
      {children}
      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cn(baseStyles, variants[variant], "group", className)} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], "group", className)} {...props}>
      {content}
    </button>
  );
};

export const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
  light?: boolean;
}) => {
  return (
    <div className={cn("mb-16 space-y-4", centered ? "text-center" : "text-left")}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-serif leading-tight",
          light ? "text-secondary" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
    </div>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);
