import FadeInSection from "@/components/FadeInSection";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Heart, Hospital, MapPin, Plane, ShieldCheck } from "lucide-react";

const apps = [
  { title: "Personal Hygiene", desc: "Daily hand sanitization for protection against germs and bacteria.", icon: Heart },
  { title: "Hospitals", desc: "Critical infection prevention tool in healthcare settings.", icon: Hospital },
  { title: "Public Places", desc: "Essential for sanitization in malls, schools, and offices.", icon: MapPin },
  { title: "Travel Use", desc: "Portable protection when soap and water aren't available.", icon: Plane },
  { title: "Infection Control", desc: "Key component in pandemic response and disease prevention.", icon: ShieldCheck },
];

const ApplicationsSection = () => (
  <section id="applications" className="section-padding">
    <FadeInSection>
      <SectionTitle title="Applications" subtitle="Real-world uses of ethanol-based hand sanitizer" />
    </FadeInSection>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {apps.map((app, i) => (
        <FadeInSection key={app.title} delay={i * 0.08}>
          <motion.div
            whileHover={{ scale: 1.04, y: -4 }}
            className="glass-card-hover p-6 group h-full"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:glow-border transition-all"
              style={{ background: `linear-gradient(135deg, hsl(175 80% 45% / 0.15), hsl(280 60% 55% / 0.15))` }}>
              <app.icon className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-display font-semibold text-foreground mb-2">{app.title}</h4>
            <p className="text-muted-foreground text-sm">{app.desc}</p>
          </motion.div>
        </FadeInSection>
      ))}
    </div>
  </section>
);

export default ApplicationsSection;
