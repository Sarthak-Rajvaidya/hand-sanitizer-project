import FadeInSection from "@/components/FadeInSection";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const blockSteps = ["Materials", "Mixing", "Stirring", "Quality Check", "Packaging", "Final Product"];
const flowSteps = ["Start", "Measure", "Mix", "Add", "Stir", "Store", "End"];

const DiagramsSection = () => (
  <section id="diagrams" className="section-padding">
    <FadeInSection>
      <SectionTitle title="Process Diagrams" subtitle="Visual representations of the preparation workflow" />
    </FadeInSection>

    <div className="max-w-5xl mx-auto space-y-16">
      {/* Block Diagram */}
      <FadeInSection delay={0.1}>
        <div className="glass-card p-8">
          <h3 className="font-display text-xl font-semibold gradient-text mb-8 text-center">Block Diagram</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {blockSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="glass-card-hover px-4 py-3 text-center min-w-[100px]"
                  style={{ borderColor: `hsl(175, 80%, ${40 + i * 5}%, 0.4)` }}
                >
                  <span className="text-sm font-display font-semibold text-foreground">{step}</span>
                </motion.div>
                {i < blockSteps.length - 1 && (
                  <div className="text-primary mx-2 text-xl animate-pulse-glow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Process Flow */}
      <FadeInSection delay={0.2}>
        <div className="glass-card p-8">
          <h3 className="font-display text-xl font-semibold gradient-text mb-8 text-center">Process Flow Diagram</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: `0 0 20px hsl(175, 80%, 45%, 0.4)` }}
                  className={`glass-card-hover flex items-center justify-center font-display font-semibold text-sm ${
                    i === 0 || i === flowSteps.length - 1
                      ? "w-16 h-16 rounded-full text-primary"
                      : "px-5 py-3 rounded-lg text-foreground"
                  }`}
                >
                  {step}
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <svg className="w-8 h-4 text-primary/50 mx-1" viewBox="0 0 32 16">
                    <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="2" />
                    <polygon points="24,4 32,8 24,12" fill="currentColor" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default DiagramsSection;
