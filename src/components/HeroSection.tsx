import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-lab.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Laboratory" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
    </div>

    {/* Floating elements */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-primary/20"
        style={{
          width: 20 + i * 15,
          height: 20 + i * 15,
          left: `${15 + i * 14}%`,
          top: `${20 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5,
        }}
      />
    ))}

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="inline-block glass-card px-5 py-2 mb-8">
          <span className="text-sm font-medium text-primary">🧪 Chemical Prototyping Project</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
      >
        <span className="gradient-text glow-text">Preparation of</span>
        <br />
        <span className="text-foreground">Ethanol-Based</span>
        <br />
        <span className="gradient-text glow-text">Hand Sanitizer</span>
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
      >
        An AI-powered chemical prototyping project demonstrating formulation,
        process design, and real-world applications.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link to="/materials" className="glass-card-hover px-8 py-3 font-display font-semibold text-primary glow-border">
          Explore Project →
        </Link>
        <Link to="/quiz" className="glass-card-hover px-8 py-3 font-display font-semibold text-accent-foreground">
          Take Quiz
        </Link>
        
      </motion.div>
    </div>

    {/* Wave bottom */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" className="w-full">
        <path
          fill="hsl(220, 25%, 6%)"
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1350,30 1440,60 L1440,120 L0,120 Z"
        >
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="M0,60 C360,120 720,0 1080,60 C1260,90 1350,30 1440,60 L1440,120 L0,120 Z;
                    M0,80 C360,20 720,100 1080,40 C1260,60 1350,80 1440,40 L1440,120 L0,120 Z;
                    M0,60 C360,120 720,0 1080,60 C1260,90 1350,30 1440,60 L1440,120 L0,120 Z" />
        </path>
      </svg>
    </div>
  </section>
);

export default HeroSection;
