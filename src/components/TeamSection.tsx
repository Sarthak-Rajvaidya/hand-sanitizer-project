import FadeInSection from "@/components/FadeInSection";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import teamPhoto from "@/assets/team-photo.jpeg";

const team = [
  { name: "Sarthak Rajvaidya", id: "202401040066" },
  { name: "Tanmay Akotkar", id: "202401040063" },
  { name: "Ragini Telange", id: "202401040067" },
  { name: "Saniya Patel", id: "202401040074" },
];

const TeamSection = () => (
  <section className="section-padding">
    <FadeInSection>
      <SectionTitle title="Our Team" subtitle="The minds behind this chemical prototyping project" />
    </FadeInSection>

    <div className="max-w-4xl mx-auto">
      <FadeInSection delay={0.1}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass-card p-3 mb-10 glow-border overflow-hidden"
        >
          <img
            src={teamPhoto}
            alt="Team Photo — Sarthak, Saniya, Ragini, Tanmay"
            className="w-full rounded-lg object-contain max-h-[600px]"
          />
        </motion.div>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {team.map((member, i) => (
          <FadeInSection key={member.id} delay={0.1 + i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass-card-hover p-5 text-center"
            >
              <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-primary font-display font-bold text-lg"
                style={{ background: `linear-gradient(135deg, hsl(175 80% 45% / 0.2), hsl(280 60% 55% / 0.2))` }}>
                {member.name[0]}
              </div>
              <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary/70 font-mono">{member.id}</p>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
