import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import SectionTitle from "@/components/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const questions = [
  {
    q: "What is the primary disinfectant in hand sanitizer?",
    options: ["Glycerol", "Ethanol", "Aloe Vera", "Water"],
    answer: 1,
  },
  {
    q: "What is the role of hydrogen peroxide in the formulation?",
    options: ["Moisturizer", "Fragrance", "Removes bacterial spores", "Colorant"],
    answer: 2,
  },
  {
    q: "Which ingredient acts as a moisturizer?",
    options: ["Ethanol", "Hydrogen Peroxide", "Glycerol", "Distilled Water"],
    answer: 2,
  },
  {
    q: "What concentration of ethanol is recommended by WHO?",
    options: ["40%", "60-80%", "95%", "10%"],
    answer: 1,
  },
  {
    q: "Why is aloe vera gel added to the sanitizer?",
    options: ["For color", "To kill bacteria", "To improve texture", "As a preservative"],
    answer: 2,
  },
];

const QuizSection = () => {
  const [revealed, setRevealed] = useState<Record<number, number | null>>({});

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (revealed[qIdx] !== undefined) return;
    setRevealed((prev) => ({ ...prev, [qIdx]: oIdx }));
  };

  return (
    <section id="quiz" className="section-padding">
      <FadeInSection>
        <SectionTitle title="Quiz" subtitle="Test your knowledge about hand sanitizer preparation" />
      </FadeInSection>

      <div className="max-w-3xl mx-auto space-y-6">
        {questions.map((q, qi) => (
          <FadeInSection key={qi} delay={qi * 0.08}>
            <div className="glass-card p-6">
              <h4 className="font-display font-semibold text-foreground mb-4">
                <span className="text-primary mr-2">Q{qi + 1}.</span>
                {q.q}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt, oi) => {
                  const selected = revealed[qi];
                  const isCorrect = oi === q.answer;
                  const isSelected = selected === oi;
                  const isRevealed = selected !== undefined;

                  let borderStyle = "border-border/30";
                  if (isRevealed && isCorrect) borderStyle = "border-green-500/60";
                  else if (isRevealed && isSelected && !isCorrect) borderStyle = "border-red-500/60";

                  return (
                    <motion.button
                      key={oi}
                      whileHover={!isRevealed ? { scale: 1.02 } : undefined}
                      whileTap={!isRevealed ? { scale: 0.98 } : undefined}
                      onClick={() => handleSelect(qi, oi)}
                      className={`p-3 rounded-lg border text-left text-sm font-medium transition-all flex items-center gap-2 ${borderStyle} ${
                        !isRevealed
                          ? "hover:border-primary/40 cursor-pointer bg-muted/20 text-foreground"
                          : "cursor-default"
                      } ${isRevealed && isCorrect ? "bg-green-500/10 text-green-400" : ""}
                        ${isRevealed && isSelected && !isCorrect ? "bg-red-500/10 text-red-400" : ""}
                        ${isRevealed && !isCorrect && !isSelected ? "text-muted-foreground" : ""}`}
                    >
                      <AnimatePresence>
                        {isRevealed && isCorrect && (
                          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          </motion.span>
                        )}
                        {isRevealed && isSelected && !isCorrect && (
                          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <XCircle className="h-4 w-4 text-red-400" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {opt}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default QuizSection;
