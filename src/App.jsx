import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

// Import photos
import photo1 from "../photos/WhatsApp Image 2026-02-03 at 4.30.11 AM (1).jpeg";
import photo2 from "../photos/WhatsApp Image 2026-02-03 at 4.30.11 AM (2).jpeg";
import photo3 from "../photos/WhatsApp Image 2026-02-03 at 4.30.11 AM (3).jpeg";
import photo4 from "../photos/WhatsApp Image 2026-02-03 at 4.30.11 AM (4).jpeg";
import photo5 from "../photos/WhatsApp Image 2026-02-03 at 4.30.11 AM (5).jpeg";
import photo6 from "../photos/WhatsApp Image 2026-02-03 at 4.30.11 AM (6).jpeg";
import photo7 from "../photos/WhatsApp Image 2026-02-03 at 4.30.11 AM (7).jpeg";
import photo8 from "../photos/WhatsApp Image 2026-02-03 at 4.30.11 AM (8).jpeg";
import photo9 from "../photos/WhatsApp Image 2026-02-03 at 4.30.11 AM.jpeg";
import photo10 from "../photos/WhatsApp Image 2026-02-03 at 5.23.25 AM (1).jpeg";
import photo11 from "../photos/WhatsApp Image 2026-02-03 at 5.23.25 AM.jpeg";
import photo12 from "../photos/WhatsApp Image 2026-02-03 at 5.24.20 AM (1).jpeg";
import photo13 from "../photos/WhatsApp Image 2026-02-03 at 5.24.20 AM (2).jpeg";
import photo14 from "../photos/WhatsApp Image 2026-02-03 at 5.24.20 AM (3).jpeg";

// 
// 💖 Shubhra (Bubu) – Premium Romantic Proposal Website
// Redesigned with cinematic elegance, glassmorphism, and Valentine gradients
//

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const dummyImages = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
];

const defaultMemories = [
  { img: dummyImages[7], title: "That look", caption: "The moment I realized… you’re my favorite person." },
  { img: dummyImages[8], title: "Us being us", caption: "Silly, chaotic, and somehow perfect together." },
  { img: dummyImages[6], title: "Soft days", caption: "With you, even ordinary days feel special." },
  { img: dummyImages[2], title: "My comfort", caption: "You feel like home, Bubu." },
  { img: dummyImages[0], title: "My peace", caption: "You calm my mind and steal my heart." },
  { img: dummyImages[4], title: "Forever vibes", caption: "The best part? We’re just getting started." },
];

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const onResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

function HeartBg() {
  // Smooth, elegant floating hearts with controlled patterns
  const hearts = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => {
        // Create smooth, predictable patterns instead of random
        const baseDelay = (i * 0.8) % 4; // Staggered but predictable
        const baseLeft = (i * 8.33) % 100; // Even distribution across width
        const drift = Math.sin(i) * 15; // Smooth sine wave drift
        
        return {
        id: i,
          left: baseLeft,
          delay: baseDelay,
          duration: 12 + (i % 3) * 2, // More consistent durations
          size: 18 + (i % 4) * 3, // More controlled sizes
          opacity: 0.06 + (i % 3) * 0.03, // Subtle opacity variation
          drift: drift,
        };
      }),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute"
          style={{ left: `${h.left}%`, bottom: -40, opacity: h.opacity }}
          animate={{ 
            y: [0, -1000], 
            x: [0, h.drift],
            rotate: [0, h.id % 2 === 0 ? 5 : -5, 0], // Gentle rotation
          }}
          transition={{
            delay: h.delay,
            duration: h.duration,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1], // Smooth cubic bezier
          }}
        >
          <motion.div
            className="select-none drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]"
            style={{ fontSize: h.size }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [h.opacity, h.opacity * 1.3, h.opacity],
            }}
            transition={{
              duration: 3 + (h.id % 2),
            repeat: Infinity,
            ease: "easeInOut",
          }}
            aria-hidden
          >
            ❤️
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// Special heart background for memories section with warmer tones
function WarmHeartBg() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => {
        const baseDelay = (i * 1.2) % 5;
        const baseLeft = (i * 10) % 100;
        const drift = Math.cos(i) * 12;
        
        return {
          id: i,
          left: baseLeft,
          delay: baseDelay,
          duration: 14 + (i % 3) * 2,
          size: 16 + (i % 3) * 2,
          opacity: 0.03 + (i % 2) * 0.02,
          drift: drift,
        };
      }),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute"
          style={{ left: `${h.left}%`, bottom: -40, opacity: h.opacity }}
          animate={{ 
            y: [0, -1200], 
            x: [0, h.drift],
            rotate: [0, h.id % 2 === 0 ? 3 : -3, 0],
          }}
          transition={{
            delay: h.delay,
            duration: h.duration,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.div
            className="select-none drop-shadow-[0_0_6px_rgba(236,72,153,0.2)]"
            style={{ fontSize: h.size }}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 4 + (h.id % 2),
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          >
            ❤️
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// Glowing heart animation for proposal section
function GlowingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: 20 + (i * 10) + Math.random() * 10,
        top: 20 + (i % 3) * 30 + Math.random() * 20,
        size: 40 + Math.random() * 30,
        delay: i * 0.3,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[3rem]">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute"
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            fontSize: h.size,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            delay: h.delay,
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="select-none drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
            aria-hidden
          >
            ❤️
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Scroll-triggered reveal component for storytelling
function ScrollReveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Text reveal for paragraph-by-paragraph storytelling
function TextReveal({ children, delay = 0, className = "" }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.4, 0, 0.2, 1] 
      }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative w-full min-h-screen flex items-center overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
}

function Pill({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center rounded-full border border-[#fbcfe8]/30 bg-gradient-to-r from-[#fdf2f8]/40 via-[#fce7f3]/40 to-[#fdf2f8]/40 px-4 py-1.5 text-xs font-medium text-[#831843] backdrop-blur-md shadow-[0_4px_20px_rgba(236,72,153,0.15)] font-sans"
    >
      {children}
    </motion.span>
  );
}

function Button({ children, onClick, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97] shadow-lg font-sans relative overflow-hidden group";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#ec4899] text-white hover:from-[#db2777] hover:via-[#ec4899] hover:to-[#f472b6] shadow-[0_8px_30px_rgba(236,72,153,0.4)] hover:shadow-[0_12px_40px_rgba(236,72,153,0.6)]"
      : variant === "ghost"
      ? "bg-white/10 text-white/90 hover:bg-white/20 border-2 border-white/30 backdrop-blur-md hover:border-white/50 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
      : "bg-zinc-900 text-white hover:bg-zinc-800";
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        y: -3,
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {/* Animated shimmer effect */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-200%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "linear" }}
        />
      )}
      
      {/* Sparkle particles effect */}
      {variant === "primary" && (
        <>
          <motion.div
            className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -10, -20]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="absolute top-3 right-6 w-1 h-1 bg-white rounded-full"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -10, -20]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
          />
          <motion.div
            className="absolute bottom-2 left-8 w-1 h-1 bg-white rounded-full"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, 10, 20]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
          />
        </>
      )}
      
      {/* Enhanced glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0"
        style={{
          background: variant === "primary" 
            ? "radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(244,114,182,0.3) 50%, transparent 80%)"
            : "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Pulsing ring effect for primary buttons */}
      {variant === "primary" && (
        <motion.div
          className="absolute -inset-1 rounded-2xl border-2 border-[#f9a8d4]/40"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

// Memories Carousel Component
function MemoriesCarousel({ memories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nickname = "Bubu";

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentMemory = memories[currentIndex];
  const progress = ((currentIndex + 1) / memories.length) * 100;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-[3rem] bg-white shadow-[0_20px_60px_rgba(236,72,153,0.2)] border-2 border-[#fbcfe8]/30">
        {/* Image section */}
        <div className="relative h-[28vh] max-h-[250px] min-h-[200px] overflow-hidden bg-gradient-to-br from-[#fdf2f8] to-[#fce7f3] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={currentMemory.img}
              alt={currentMemory.title}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </AnimatePresence>
          
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#831843]/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Navigation arrows with text labels */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md px-3 py-2 shadow-[0_8px_25px_rgba(131,24,67,0.2)] hover:shadow-[0_12px_35px_rgba(131,24,67,0.3)] border-2 border-[#fbcfe8]/30 hover:border-[#f9a8d4]/50 transition-all duration-300 group overflow-hidden"
            aria-label="Previous memory"
          >
            {/* Shimmer effect */}
      <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fbcfe8]/20 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
            />
            <svg className="w-4 h-4 text-[#831843] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-bold text-[#831843] hidden md:block relative z-10">Back, {nickname}</span>
          </motion.button>
          
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md px-3 py-2 shadow-[0_8px_25px_rgba(131,24,67,0.2)] hover:shadow-[0_12px_35px_rgba(131,24,67,0.3)] border-2 border-[#fbcfe8]/30 hover:border-[#f9a8d4]/50 transition-all duration-300 group overflow-hidden"
            aria-label="Next memory"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fbcfe8]/20 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
            />
            <span className="text-xs font-bold text-[#831843] hidden md:block relative z-10">Next, {nickname}</span>
            <svg className="w-4 h-4 text-[#831843] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Progress indicator */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-3/4 max-w-md">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div 
                className="h-full bg-gradient-to-r from-[#f472b6] via-[#ec4899] to-[#f472b6] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
        
        {/* Text content section */}
        <div className="p-3 md:p-4 bg-gradient-to-b from-white to-[#fdf2f8]/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center space-y-1"
            >
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
            <motion.h3 
                  className="text-lg md:text-xl font-bold text-[#831843] tracking-tight leading-tight font-serif"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  {currentMemory.title}
            </motion.h3>
            <motion.div 
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#f472b6] to-[#ec4899] flex items-center justify-center text-white text-xs md:text-sm font-bold shadow-[0_4px_15px_rgba(236,72,153,0.4)]"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              ❤️
            </motion.div>
        </div>
              
              <motion.p
                className="text-sm md:text-base text-[#be185d] leading-relaxed font-medium font-sans italic max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {currentMemory.caption}
              </motion.p>
              
              {/* Decorative line */}
        <motion.div 
                className="mt-2 h-px bg-gradient-to-r from-transparent via-[#fbcfe8] to-transparent max-w-md mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
        />
      </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-2">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-[#f472b6] to-[#ec4899]'
                    : 'w-3 h-3 bg-[#fbcfe8] hover:bg-[#f9a8d4]'
                }`}
                aria-label={`Go to memory ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WeddingSlides({ onFinish, partnerName = "Shubhra" }) {
  const slides = useMemo(
    () => [
      {
        kicker: "From today… to forever",
        title: `Bubu, this isn’t just Valentine’s.`,
        body: "It’s a tiny trailer for the life we’re about to start.",
        img: dummyImages[9],
      },
      {
        kicker: "We’re so close",
        title: `In a few months… you’ll be my wife, ${partnerName}.`,
        body: "And I still get butterflies saying that.",
        img: dummyImages[10],
      },
      {
        kicker: "I can’t wait for…",
        title: "The everyday forever stuff",
        body: "Waking up next to you • Cooking + chaos • Silly fights • Big hugs • Random dancing • Quiet comfort",
        img: dummyImages[11],
      },
      {
        kicker: "Marriage = beginning",
        title: "Not the end of the story",
        body: "It’s the first page of our forever book.",
        img: dummyImages[12],
      },
      {
        kicker: "A love letter",
        title: "You are my safest place",
        body: "Thank you for choosing me. I promise to choose you—every single day.",
        img: dummyImages[13],
      },
      {
        kicker: "One promise",
        title: "Let’s build a life we love",
        body: "Home, adventures, laughter, and a whole lot of love.",
        img: dummyImages[8],
      },
    ],
    [partnerName]
  );

  const [i, setI] = useState(0);

  const next = () => {
    if (i < slides.length - 1) setI((x) => x + 1);
    else onFinish?.();
  };

  const prev = () => setI((x) => Math.max(0, x - 1));

  const progress = ((i + 1) / slides.length) * 100;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#500724] to-[#831843] shadow-[0_20px_60px_rgba(236,72,153,0.2)] border-2 border-[#fbcfe8]/30">
        {/* Image section */}
        <div className="relative h-[50vh] max-h-[500px] min-h-[400px] overflow-hidden bg-gradient-to-br from-[#500724] to-[#831843] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
              key={i}
            src={slides[i].img}
            alt="slide background"
              className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </AnimatePresence>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent pointer-events-none" />
          
          {/* Navigation arrows */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            disabled={i === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-3 shadow-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 group overflow-hidden ${
              i === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'
            }`}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-[#831843] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-bold text-[#831843] hidden md:block relative z-10">Back</span>
          </motion.button>
          
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-3 shadow-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 group overflow-hidden opacity-90 hover:opacity-100"
            aria-label="Next slide"
          >
            <span className="text-sm font-bold text-[#831843] hidden md:block relative z-10">{i < slides.length - 1 ? 'Next' : 'Finish'}</span>
            <svg className="w-5 h-5 text-[#831843] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Progress indicator */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-3/4 max-w-md">
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
                className="h-full bg-gradient-to-r from-[#f472b6] via-[#ec4899] to-[#f472b6] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
            />
            </div>
          </div>
        </div>

        {/* Text content section */}
        <div className="p-8 md:p-12 bg-gradient-to-b from-black/80 via-black/75 to-black/80">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center space-y-6"
            >
              {/* Kicker */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-sm md:text-base font-semibold text-[#831843]/80 uppercase tracking-[0.3em] font-sans"
              >
                {slides[i].kicker}
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#831843] leading-tight"
              >
                {slides[i].title}
              </motion.h3>

              {/* Body text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg md:text-xl text-[#831843]/90 leading-relaxed max-w-3xl mx-auto font-sans"
              >
                {slides[i].body}
              </motion.p>
          </motion.div>
        </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setI(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === i
                    ? 'w-8 h-3 bg-gradient-to-r from-[#f472b6] to-[#ec4899]'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { width, height } = useWindowSize();

  const partnerName = "Shubhra";
  const nickname = "Bubu";

  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);

  const proposalBoxRef = useRef(null);

  const [accepted, setAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const memories = defaultMemories;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const go = (nextStep) => {
    // small delay so section exists before scroll
    setTimeout(() => scrollTo(nextStep), 50);
  };

  const dodgeNo = () => {
    const box = proposalBoxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();
    // Keep inside the proposal card area with more margin for movement
    const buttonWidth = 208; // w-52 = 208px
    const buttonHeight = 64; // h-16 = 64px
    const maxX = Math.max(0, rect.width - buttonWidth - 20);
    const maxY = Math.max(0, rect.height - buttonHeight - 20);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    setNoPos({ x, y });
    setNoAttempts((a) => a + 1);
  };

  const accept = () => {
    setAccepted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3500);
    go("wedding");
  };

  const softExit = () => {
    // A gentle, non-rejecting option: shows a sweet message and keeps journey going.
    setNoAttempts((a) => a + 1);
    go("memories");
  };

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    // Initial scroll position
    scrollTo("intro");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf2f8] via-[#fce7f3] to-[#fbcfe8] text-[#831843] overflow-x-hidden relative">
      {showConfetti ? <Confetti width={width} height={height} /> : null}

      {/* Shubhra Watermark - Background layer, doesn't affect layout */}
      <div 
        className="pointer-events-none fixed inset-0 z-0" 
        style={{ 
          height: '100vh', 
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(236, 72, 153, 0.01) 100px,
              rgba(236, 72, 153, 0.01) 200px
            )`
          }}
        >
          {/* Main centered watermark that stays visible */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              className="pointer-events-none text-[#fbcfe8]/2 font-serif font-bold"
              style={{
                fontSize: 'clamp(10rem, 25vw, 30rem)',
                letterSpacing: '0.15em',
                userSelect: 'none',
                whiteSpace: 'nowrap',
                transform: 'translate(-50%, -50%) rotate(-15deg)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                pointerEvents: 'none'
              }}
              animate={{
                opacity: [0.015, 0.025, 0.015],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Shubhra
            </motion.div>
          </div>
          
          {/* Additional watermarks at different positions */}
          <div 
            className="pointer-events-none absolute"
            style={{
              top: '25%',
              left: '15%',
              transform: 'rotate(-15deg)',
              fontSize: 'clamp(6rem, 15vw, 18rem)',
              color: 'rgba(251, 207, 232, 0.015)',
              fontFamily: 'serif',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              userSelect: 'none',
              whiteSpace: 'nowrap',
              pointerEvents: 'none'
            }}
          >
            Shubhra
          </div>
          <div 
            className="pointer-events-none absolute"
            style={{
              top: '75%',
              right: '15%',
              transform: 'rotate(-15deg)',
              fontSize: 'clamp(6rem, 15vw, 18rem)',
              color: 'rgba(251, 207, 232, 0.015)',
              fontFamily: 'serif',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              userSelect: 'none',
              whiteSpace: 'nowrap',
              pointerEvents: 'none'
            }}
          >
            Shubhra
          </div>
        </div>
      </div>
      
      {/* Additional watermark layer that scrolls with content - positioned absolutely, doesn't affect flow */}
      <div 
        className="pointer-events-none absolute z-0" 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: 'auto',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          pointerEvents: 'none'
        }}
      >
        {/* Create repeating watermarks throughout the page */}
        {[...new Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="pointer-events-none absolute w-full flex items-center justify-center"
            style={{ 
              position: 'absolute',
              top: `${i * 33.33}%`,
              left: 0,
              width: '100%',
              height: '33.33%',
              pointerEvents: 'none',
              margin: 0,
              padding: 0
            }}
          >
            <div
              className="pointer-events-none text-[#fbcfe8]/2 font-serif font-bold"
              style={{
                fontSize: 'clamp(7rem, 18vw, 22rem)',
                letterSpacing: '0.12em',
                userSelect: 'none',
                whiteSpace: 'nowrap',
                transform: 'rotate(-15deg)',
                opacity: i % 2 === 0 ? 0.015 : 0.01,
                pointerEvents: 'none'
              }}
            >
              Shubhra
            </div>
          </div>
        ))}
      </div>

      {/* Premium gradient overlays */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ec4899]/5 via-transparent to-[#ec4899]/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ec4899]/3 to-transparent" />
      </div>

      {/* Content wrapper with z-index to be above watermark */}
      <div className="relative z-10" style={{ position: 'relative', zIndex: 10 }}>
      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-20 border-b border-[#fbcfe8]/30 bg-gradient-to-b from-white/80 via-[#fdf2f8]/90 to-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(236,72,153,0.15)]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 md:px-12 lg:px-16 py-5">
          <div className="flex items-center gap-3 text-left">
            <span className="text-2xl drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">💖</span>
            <div className="font-serif font-bold tracking-tight text-[#831843] text-sm md:text-base text-left">
              For {partnerName} <span className="text-[#be185d]/80">({nickname})</span>
          </div>
        </div>
          <div className="flex items-center gap-1.5">
            {["intro", "memories", "proposal", "wedding"].map((id) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl px-4 py-2 text-xs font-medium text-[#831843]/90 hover:bg-[#ec4899]/20 hover:text-[#831843] transition-all duration-200 backdrop-blur-sm font-sans"
                onClick={() => scrollTo(id)}
              >
                {id === "intro" ? "Home" : id === "memories" ? "Memories" : id === "proposal" ? "Question" : "Forever"}
              </motion.button>
            ))}
      </div>
        </div>
      </motion.nav>

      {/* Heart emoji separator */}
      <div className="flex justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          className="text-4xl drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]"
        >
          ❤️
        </motion.div>
      </div>

      {/* Intro - Cinematic Hero - Love Letter Opening */}
      <Section id="intro" className="z-10 mb-24">
        <div className="relative mx-auto w-full max-w-6xl px-8 md:px-12 lg:px-16 py-48 md:py-64">
          {/* Cinematic background with depth */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#fce7f3]/40 via-[#fdf2f8]/30 to-[#fce7f3]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec4899]/8 via-transparent to-[#ec4899]/8 pointer-events-none" />
            <HeartBg />
          </div>

          {/* Premium glassmorphism container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="text-center space-y-12">
              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
              <Pill>Playful • Mischievous • Very serious about you</Pill>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <motion.h1 
                  className="font-serif text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl leading-[1.05]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-[#fce7f3] via-[#fbcfe8] to-[#fce7f3] bg-clip-text text-transparent block"
                    animate={{ 
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                Hey {nickname}…
                  </motion.span>
                  <motion.span 
                    className="block mt-8 text-[#831843] text-5xl md:text-7xl lg:text-8xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  >
                    I made you a tiny universe.
                  </motion.span>
                </motion.h1>
              </ScrollReveal>

              <ScrollReveal delay={0.7}>
                <TextReveal className="mx-auto max-w-2xl text-xl leading-relaxed text-[#831843]/90 md:text-2xl font-sans font-light">
                  It's part Valentine's, part chaos, part love story — and 100% you + me.
                </TextReveal>
              </ScrollReveal>

              <ScrollReveal delay={0.9}>
            <motion.div
                  className="flex flex-wrap justify-center gap-5 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <Button onClick={() => go("memories")} className="text-base px-10 py-5 text-lg">
                    Begin our story 👀
                  </Button>
                  <Button variant="ghost" onClick={() => go("proposal")} className="text-base px-10 py-5 text-lg">
                    Skip to the question 😈
                  </Button>
                </motion.div>
              </ScrollReveal>
              </div>
            </motion.div>
        </div>
      </Section>

      {/* Heart emoji separator */}
      <div className="flex justify-center py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-3xl drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]"
        >
          ❤️
        </motion.div>
      </div>

      {/* Memories - Our Story Unfolds - Pinterest Style Photo Wall */}
      <Section id="memories" className="z-10 mb-24">
        <div className="relative mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16 py-8 md:py-12">
          {/* Warm romantic background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fdf2f8] via-[#fce7f3]/80 to-[#fbcfe8]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fbcfe8]/10 via-transparent to-[#fbcfe8]/10" />
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <WarmHeartBg />
            </div>

          <div className="text-center space-y-2 mb-4">
            <ScrollReveal delay={0.2}>
              <Pill>Chapter One</Pill>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#831843] leading-tight">
                Little moments.
                <br />
                <span className="bg-gradient-to-r from-[#db2777] via-[#ec4899] to-[#db2777] bg-clip-text text-transparent">
                  Big love.
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              {/* <TextReveal className="mx-auto max-w-2xl text-xs text-[#be185d]/80 md:text-sm leading-relaxed font-sans">
                These are placeholders for now — but soon we'll swap them with *our* photos and captions.
              </TextReveal> */}
            </ScrollReveal>
          </div>

          {/* Memories Carousel */}
          <div className="mb-4">
            <MemoriesCarousel memories={memories} />
          </div>

          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" onClick={() => go("intro")} className="text-base px-6 py-3 bg-white/80 text-[#831843] hover:bg-white">
                Back
              </Button>
              <Button onClick={() => go("proposal")} className="text-base px-6 py-3">
                Continue the story →
              </Button>
          </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Heart emoji separator */}
      <div className="flex justify-center py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-3xl drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]"
        >
          ❤️
        </motion.div>
      </div>

      {/* Proposal - The Question */}
      <Section id="proposal" className="z-10 mb-48 md:mb-64 lg:mb-80">
        <div className="relative mx-auto w-full max-w-4xl px-8 md:px-12 lg:px-16 py-40 md:py-52">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#fce7f3]/50 via-[#fdf2f8]/40 to-[#fce7f3]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec4899]/10 via-transparent to-[#ec4899]/10" />
            <HeartBg />
          </div>

          <div className="text-center space-y-14">
            <ScrollReveal delay={0.2}>
              <Pill>Chapter Two</Pill>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2 className="font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-[#831843] leading-tight">
                Okay {nickname}…
                <br />
                <span className="bg-gradient-to-r from-[#be185d] via-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
                  important question
                </span>
                <span className="block mt-2">👀</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <TextReveal className="mx-auto max-w-2xl text-lg text-[#831843]/80 md:text-xl font-sans text-center">
              (Warning: one of the buttons is extremely shy.)
              </TextReveal>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <motion.div
              ref={proposalBoxRef}
                className="relative mx-auto max-w-4xl overflow-visible rounded-[4rem] border-2 border-[#f9a8d4]/50 bg-gradient-to-br from-white/25 via-[#fdf2f8]/20 to-white/25 p-14 shadow-[0_60px_200px_-40px_rgba(236,72,153,0.8)] backdrop-blur-2xl md:p-20"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Glowing heart animation behind card */}
                <GlowingHearts />
                
                {/* Enhanced cinematic glow effects */}
              <div className="absolute inset-0">
                  <motion.div 
                    className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#ec4899]/50 blur-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-[#f472b6]/45 blur-3xl"
                    animate={{ 
                      scale: [1, 1.15, 1],
                      opacity: [0.35, 0.55, 0.35]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.div 
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#f472b6]/25 blur-2xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
              </div>

                {/* Romantic card content */}
                <div className="relative space-y-12 text-center z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#fbcfe8]/30 via-[#f9a8d4]/30 to-[#fbcfe8]/30 border border-[#f9a8d4]/40 backdrop-blur-sm"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-xl"
                    >
                      💕
                    </motion.span>
                    <span className="text-[#fbcfe8] font-bold text-sm uppercase tracking-[0.3em] font-sans">The Question</span>
                    <motion.span
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="text-xl"
                    >
                      💕
                    </motion.span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-9xl text-[#831843] leading-[1.05] space-y-2"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="inline-block"
                    >
                      Will you be my{' '}
                    </motion.span>
                    <motion.span 
                      className="bg-gradient-to-r from-[#fbcfe8] via-[#f9a8d4] via-[#f472b6] to-[#fbcfe8] bg-clip-text text-transparent inline-block"
                      animate={{ 
                        backgroundPosition: ["0%", "100%", "0%"],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      Valentine{' '}
                    </motion.span>
                    <motion.span 
                      className="inline-block"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                    >
                      {nickname}? 
                      <motion.span 
                        className="text-6xl md:text-7xl lg:text-9xl inline-block ml-3"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >💖</motion.span>
                    </motion.span>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:items-center pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    {/* Irresistible YES button - Premium design */}
                    <motion.button
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                        boxShadow: "0 25px 100px rgba(236, 72, 153, 0.8)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={accept}
                      className="relative group inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-[#ec4899] via-[#f472b6] via-[#ec4899] to-[#f472b6] text-white text-2xl font-bold py-8 px-20 shadow-[0_20px_60px_rgba(236,72,153,0.6)] transition-all duration-300 overflow-hidden font-sans border-2 border-[#f9a8d4]/50"
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      {/* Animated gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#ec4899] via-[#f472b6] via-[#ec4899] to-[#f472b6]"
                        animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: "200% 200%" }}
                      />
                      {/* Animated shimmer effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5, ease: "linear" }}
                      />
                      {/* Pulsing glow ring */}
                      <motion.div 
                        className="absolute -inset-2 rounded-3xl ring-4 ring-[#f9a8d4]/70"
                        animate={{ 
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.08, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* Sparkle particles */}
                      <motion.div
                        className="absolute top-2 left-6 w-1.5 h-1.5 bg-white rounded-full"
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -15, -30]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="absolute top-3 right-8 w-1.5 h-1.5 bg-white rounded-full"
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -15, -30]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                      />
                      <span className="relative z-10 flex items-center gap-3">
                        <motion.span
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                        >
                          YES
                        </motion.span>
                        <motion.span 
                          className="text-3xl"
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          😌
                        </motion.span>
                      </span>
                    </motion.button>

                    {/* Mischievous NO with bounce */}
                    <div className="relative h-20 w-full sm:w-64 min-h-[80px] overflow-visible">
                    <motion.button
                      onMouseEnter={dodgeNo}
                      onFocus={dodgeNo}
                      onClick={dodgeNo}
                        animate={{ 
                          x: noPos.x, 
                          y: noPos.y,
                          scale: noPos.x !== 0 || noPos.y !== 0 ? [1, 0.95, 1] : 1,
                          rotate: noPos.x !== 0 || noPos.y !== 0 ? [0, -8, 8, 0] : 0
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 25,
                          scale: {
                            duration: 0.3,
                            times: [0, 0.5, 1]
                          }
                        }}
                        className="absolute left-0 top-0 inline-flex h-16 w-52 items-center justify-center rounded-2xl border-2 border-[#fbcfe8]/50 bg-gradient-to-r from-white/20 via-white/18 to-white/20 text-lg font-bold text-white hover:from-white/25 hover:via-white/22 hover:to-white/25 backdrop-blur-md shadow-[0_10px_30px_rgba(251,207,232,0.4)] hover:shadow-[0_15px_40px_rgba(251,207,232,0.6)] transition-all duration-300 font-sans overflow-hidden group z-50"
                    >
                      {/* Animated gradient background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/15 to-white/20"
                        animate={{ 
                          backgroundPosition: ["0%", "100%", "0%"]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: "200% 200%" }}
                      />
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                      />
                      {/* Pulsing glow */}
                      <motion.div
                        className="absolute -inset-1 rounded-2xl border-2 border-[#f9a8d4]/40"
                        animate={{ 
                          opacity: [0.5, 0.8, 0.5],
                          scale: [1, 1.03, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        <motion.span
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          NO
                        </motion.span>
                        <motion.span 
                          className="text-xl"
                          animate={{ rotate: [0, 20, -20, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          🙃
                        </motion.span>
                      </span>
                    </motion.button>
                  </div>

                  {/* Gentle non-rejection option */}
                    <Button variant="ghost" onClick={softExit} className="text-lg py-6 px-8">
                    I need a moment 🥺
                  </Button>
                  </motion.div>

                <AnimatePresence>
                  {noAttempts > 0 && !accepted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="rounded-2xl border border-[#fbcfe8]/20 bg-white/30 p-6 text-base text-[#831843]/90 backdrop-blur-md font-sans text-center"
                    >
                        <div className="font-semibold text-[#831843] text-lg text-center">{nickname}, that button is… unavailable 😈</div>
                        <div className="mt-2 text-[#831843]/80 text-center">
                        Attempt #{noAttempts}: It ran away because it knows the right answer.
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                {accepted ? (
                  <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        rotate: [0, -2, 2, -2, 0]
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200,
                        rotate: {
                          duration: 0.6,
                          times: [0, 0.25, 0.5, 0.75, 1]
                        }
                      }}
                      className="rounded-3xl border-2 border-[#f9a8d4]/40 bg-gradient-to-r from-[#ec4899]/30 via-[#f472b6]/30 to-[#ec4899]/30 p-10 backdrop-blur-md shadow-[0_20px_60px_rgba(236,72,153,0.4)] text-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                        className="font-serif text-4xl font-bold text-[#831843] mb-4 text-center"
                      >
                        YAYYYYY! 🥳
                      </motion.div>
                      <div className="text-xl text-[#831843] font-semibold font-sans text-center">Proceeding to the forever part… 💍</div>
                  </motion.div>
                ) : null}
              </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex justify-center gap-4 pt-16 pb-16 md:pb-24 lg:pb-32">
                <Button variant="ghost" onClick={() => go("memories")} className="text-base px-6 py-3">
                  ← Back
                </Button>
                <Button onClick={() => go("wedding")} className="text-base px-6 py-3">
                  Continue →
                </Button>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Heart emoji separator */}
      <div className="flex justify-center py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-3xl drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]"
        >
          ❤️
        </motion.div>
      </div>

      {/* Wedding slides - Our Future */}
      <Section id="wedding" className="z-10 mb-24 pt-32 md:pt-40 lg:pt-48">
        <div className="mx-auto w-full max-w-6xl px-8 md:px-12 lg:px-16 pt-16 md:pt-20 pb-40 md:pb-52">
          <div className="text-center space-y-10 mb-20">
            <ScrollReveal delay={0.2}>
              <Pill>Chapter Three</Pill>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <h2 className="font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-[#831843] leading-tight">
                From Valentine's to
                <br />
                <span className="bg-gradient-to-r from-[#be185d] via-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
                  forever
                </span>
                <span className="block mt-2">💍</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              {/* <TextReveal className="mx-auto max-w-2xl text-lg text-[#fce7f3]/75 md:text-xl leading-relaxed font-sans">
                A soft, emotional slideshow — we'll personalize every line once you share your real memories.
              </TextReveal> */}
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.8}>
            <WeddingSlides
              partnerName={partnerName}
              onFinish={() => {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 3500);
                go("finale");
              }}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-4 mt-12">
              <Button variant="ghost" onClick={() => go("proposal")} className="text-base px-6 py-3">
                ← Back
              </Button>
              <Button onClick={() => go("finale")} className="text-base px-6 py-3">
                Continue →
              </Button>
          </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Heart emoji separator */}
      <div className="flex justify-center py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-3xl drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]"
        >
          ❤️
        </motion.div>
      </div>

      {/* Finale - The Promise */}
      <Section id="finale" className="z-10 mb-24">
        <div className="relative mx-auto w-full max-w-4xl px-8 md:px-12 lg:px-16 py-40 md:py-52">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#fce7f3]/50 via-[#fdf2f8]/40 to-[#fce7f3]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec4899]/10 via-transparent to-[#ec4899]/10" />
            <HeartBg />
          </div>

          <div className="text-center space-y-14">
            <ScrollReveal delay={0.2}>
              <Pill>Final Chapter</Pill>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2 className="font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-[#831843] leading-tight">
                Bubu, I choose you.
                <br />
                <span className="bg-gradient-to-r from-[#be185d] via-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
                  Always.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <TextReveal className="mx-auto max-w-2xl text-xl leading-relaxed text-[#831843]/90 md:text-2xl font-sans">
                Shubhra, you're my best friend, my calm, my chaos partner, and my forever. I can't wait to marry you in a
              few months — and keep falling in love with you in a hundred small ways every day.
              </TextReveal>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <motion.div 
                className="mx-auto max-w-3xl rounded-3xl border-2 border-[#fbcfe8]/30 bg-gradient-to-br from-white/40 via-[#fdf2f8]/30 to-white/40 p-10 text-lg text-[#831843]/95 backdrop-blur-xl md:p-14 font-sans shadow-[0_30px_100px_-30px_rgba(236,72,153,0.3)] text-center"
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="font-bold text-[#831843] text-2xl mb-6 font-serif text-center"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  A tiny love letter:
                </motion.div>
                <motion.div 
                  className="leading-relaxed text-lg md:text-xl space-y-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="mb-4 text-center">
                    I promise to hold your hand in crowds, listen when you're quiet, laugh with you when things are weird,
                and build a home where you always feel safe — with me.
                  </p>
                  <p className="text-[#be185d] italic text-center">
                    Every day with you feels like the best day of my life. And the best part? Tomorrow will be even better.
                  </p>
                </motion.div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={1.0}>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                onClick={() => {
                  setShowConfetti(true);
                  setTimeout(() => setShowConfetti(false), 3500);
                }}
                  className="text-base px-8 py-4"
              >
                Celebrate 🎉
              </Button>
                <Button variant="ghost" onClick={() => go("memories")} className="text-base px-8 py-4">
                  Replay our story
                </Button>
                <Button variant="ghost" onClick={() => go("intro")} className="text-base px-8 py-4">
                  Back to beginning
                </Button>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-sm text-[#fbcfe8]/60 font-medium pt-8 font-sans text-center">
                Next: Upload your photos and I'll swap the dummy gallery + slideshow images and rewrite captions in your
              voice.
            </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

        <footer className="border-t border-[#fbcfe8]/30 bg-gradient-to-b from-white/60 to-[#fdf2f8]/40 py-12 px-8 md:px-12 lg:px-16 text-center text-sm text-[#831843]/70 backdrop-blur-sm font-sans">
        Made with <span className="text-[#f472b6]">❤️</span> for Shubhra (Bubu)
      </footer>
      </div>
    </div>
  );
}
