import FadeInSection from "@/components/FadeInSection";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const steps = [
  { step: 1, title: "Measure Ethanol", desc: "Accurately measure 20 ml of ethanol using a measuring cylinder." },
  { step: 2, title: "Add Distilled Water", desc: "Pour 20 ml of distilled water into the beaker." },
  { step: 3, title: "Add Hydrogen Peroxide", desc: "Carefully add 5 ml of hydrogen peroxide." },
  { step: 4, title: "Add Glycerol", desc: "Add 10 ml of glycerol for moisturizing properties." },
  { step: 5, title: "Add Aloe Vera Gel", desc: "Mix in aloe vera gel to improve texture and feel." },
  { step: 6, title: "Mix Thoroughly", desc: "Stir the solution using a stirring rod for 2-3 minutes." },
  { step: 7, title: "Store in Container", desc: "Transfer the sanitizer to a clean storage bottle." },
];

const explanations = [
  { name: "Ethanol", role: "Disinfectant — kills bacteria and viruses by denaturing proteins", color: "175 80% 45%" },
  { name: "Hydrogen Peroxide", role: "Removes bacterial spores and sterilizes the solution", color: "200 80% 50%" },
  { name: "Glycerol", role: "Acts as a humectant to moisturize and protect skin", color: "280 60% 55%" },
  { name: "Aloe Vera", role: "Improves texture, adds soothing properties to the formula", color: "140 60% 45%" },
];

const ProcedureSection = () => (
  <section id="procedure" className="section-padding">
    <FadeInSection>
      <SectionTitle title="Procedure" subtitle="Step-by-step preparation guide" />
    </FadeInSection>

    <div className="max-w-4xl mx-auto">
      {/* Steps timeline */}
      <div className="relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

        {steps.map((s, i) => (
          <FadeInSection key={s.step} delay={i * 0.08}>
            <motion.div
              whileHover={{ x: 8 }}
              className="relative flex gap-6 mb-6 group"
            >
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-display font-bold text-lg glass-card group-hover:glow-border transition-all"
                style={{ color: `hsl(175, 80%, 55%)` }}>
                {s.step}
              </div>
              <div className="glass-card-hover p-5 flex-1">
                <h4 className="font-display font-semibold text-foreground mb-1">{s.title}</h4>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>

      {/* Chemical Explanations */}
      <FadeInSection delay={0.2}>
        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold text-center gradient-text mb-8">Chemical Roles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {explanations.map((e, i) => (
              <motion.div
                key={e.name}
                whileHover={{ scale: 1.02 }}
                className="glass-card-hover p-5"
              >
                <div className="w-3 h-3 rounded-full mb-2" style={{ background: `hsl(${e.color})` }} />
                <h4 className="font-display font-semibold text-foreground">{e.name}</h4>
                <p className="text-muted-foreground text-sm mt-1">{e.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default ProcedureSection;
