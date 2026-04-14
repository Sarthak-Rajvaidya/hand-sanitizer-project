import FadeInSection from "@/components/FadeInSection";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const VideoSection = () => (
  <section className="section-padding">
    <FadeInSection>
      <SectionTitle 
        title="Video Demonstration" 
        subtitle="Visualization of the hand sanitizer preparation process"
      />
    </FadeInSection>

    <FadeInSection delay={0.1}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card overflow-hidden glow-border"
        >
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/3PmVJQUCm4E?autoplay=1&mute=1&loop=1&playlist=3PmVJQUCm4E"
            title="Hand Sanitizer Preparation"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          <div className="p-4 text-center">
            <p className="text-muted-foreground text-sm italic">
              Demonstration of ethanol-based hand sanitizer preparation using WHO guidelines
            </p>
          </div>
        </motion.div>
      </div>
    </FadeInSection>
  </section>
);

export default VideoSection;