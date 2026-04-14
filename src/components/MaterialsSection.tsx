import FadeInSection from "@/components/FadeInSection";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Beaker, Droplets, FlaskRound, Pipette, Leaf, TestTubes, Ruler, GlassWater, ArrowRightLeft, Filter, Package, Shield } from "lucide-react";

const chemicals = [
  { name: "Ethanol", amount: "20 ml", icon: FlaskRound, desc: "Primary disinfectant" },
  { name: "Distilled Water", amount: "20 ml", icon: Droplets, desc: "Dilution medium" },
  { name: "Hydrogen Peroxide", amount: "5 ml", icon: Beaker, desc: "Spore removal" },
  { name: "Glycerol", amount: "10 ml", icon: Pipette, desc: "Moisturizing agent" },
  { name: "Aloe Vera Gel", amount: "As needed", icon: Leaf, desc: "Texture enhancer" },
];

const equipment = [
  { name: "Measuring Cylinder", icon: Ruler },
  { name: "Beaker", icon: GlassWater },
  { name: "Stirring Rod", icon: ArrowRightLeft },
  { name: "Funnel", icon: Filter },
  { name: "Storage Bottle", icon: Package },
  { name: "Gloves & Goggles", icon: Shield },
];

const MaterialsSection = () => (
  <section id="materials" className="section-padding">
    <FadeInSection>
      <SectionTitle title="Materials Required" subtitle="Chemicals and equipment used in the formulation process" />
    </FadeInSection>

    <div className="max-w-6xl mx-auto">
      <FadeInSection delay={0.1}>
        <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
          <TestTubes className="h-5 w-5" /> Chemicals
        </h3>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {chemicals.map((item, i) => (
          <FadeInSection key={item.name} delay={0.1 + i * 0.08}>
            <motion.div whileHover={{ scale: 1.03 }} className="glass-card-hover p-6 group">
              <item.icon className="h-8 w-8 text-primary mb-3 group-hover:drop-shadow-[0_0_8px_hsl(175,80%,45%)] transition-all" />
              <h4 className="font-display font-semibold text-foreground">{item.name}</h4>
              <p className="text-primary text-sm font-mono">{item.amount}</p>
              <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
            </motion.div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={0.1}>
        <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
          <Beaker className="h-5 w-5" /> Equipment
        </h3>
      </FadeInSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {equipment.map((item, i) => (
          <FadeInSection key={item.name} delay={0.1 + i * 0.06}>
            <motion.div whileHover={{ scale: 1.05 }} className="glass-card-hover p-4 text-center group">
              <item.icon className="h-7 w-7 text-accent mx-auto mb-2 group-hover:drop-shadow-[0_0_8px_hsl(280,60%,55%)] transition-all" />
              <p className="text-sm font-medium text-foreground">{item.name}</p>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default MaterialsSection;
