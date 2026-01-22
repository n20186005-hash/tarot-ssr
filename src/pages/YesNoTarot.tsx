import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, Zap } from "lucide-react";
import { Link } from "wouter";
import { TarotCard } from "@/components/TarotCard";
import { TAROT_DECK } from "@/lib/tarot-data";
import type { TarotCardData } from "@/lib/tarot-data";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";

export default function YesNoTarot() {
  const [step, setStep] = useState<"intro" | "shuffling" | "result">("intro");
  const [resultCard, setResultCard] = useState<{data: TarotCardData, isReversed: boolean} | null>(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "zh-Hant" ? "zh" : "en";

  const startReading = () => {
    setStep("shuffling");
    // Simulate shuffling time
    setTimeout(() => {
      drawCard();
    }, 2000);
  };

  const drawCard = () => {
    // True random selection
    const randomCard = TAROT_DECK[Math.floor(Math.random() * TAROT_DECK.length)];
    const isReversed = Math.random() > 0.5;
    
    setResultCard({
      data: randomCard,
      isReversed
    });
    setStep("result");
  };

  const resetReading = () => {
    setResultCard(null);
    setStep("intro");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 flex flex-col items-center justify-center relative overflow-hidden">
      <SEO title={t("yes_no.title")} description={t("yes_no.subtitle")} path="/yes-no-tarot" />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 flex items-center justify-between z-20">
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t("common.back_home")}
          </Button>
        </Link>
      </header>

      {/* Content */}
      <main className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold">
                {t("yes_no.title")}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                {t("yes_no.subtitle")}
              </p>
              
              <div className="pt-8">
                <Button 
                  size="lg" 
                  onClick={startReading}
                  className="h-16 px-12 text-xl rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-gold hover:scale-105 transition-all"
                >
                  {t("yes_no.draw_btn")}
                </Button>
              </div>
            </motion.div>
          )}

          {step === "shuffling" && (
            <motion.div
              key="shuffling"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-8 h-[60vh]"
            >
              <div className="relative w-48 h-80">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-xl border-2 border-primary/30 bg-card shadow-xl"
                    animate={{ 
                      x: [0, (i % 2 === 0 ? 40 : -40), 0],
                      y: [0, (i < 3 ? -10 : 10), 0],
                      rotate: [0, (i % 2 === 0 ? 5 : -5), 0],
                      zIndex: [i, 5-i, i]
                    }}
                    transition={{ 
                      duration: 0.8, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                  >
                    <div className="w-full h-full bg-[url(@/assets/card_back.jpeg)] bg-cover rounded-lg opacity-80" />
                  </motion.div>
                ))}
              </div>
              <p className="text-xl font-serif text-primary animate-pulse">
                {t("yes_no.connecting")}
              </p>
            </motion.div>
          )}

          {step === "result" && resultCard && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="flex flex-col items-center">
                <div className="mb-8 relative">
                   <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full" />
                   <TarotCard 
                     card={resultCard.data} 
                     isRevealed={true} 
                     isReversed={resultCard.isReversed}
                     size="lg"
                     className="shadow-2xl"
                   />
                </div>

                <div className="space-y-4 max-w-md">
                  <h2 className="text-3xl font-serif font-bold text-primary">
                    {resultCard.data.name[lang]} {resultCard.isReversed && `(${t("common.reversed")})`}
                  </h2>
                  
                  <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-lg font-bold mb-4">
                    {t("yes_no.answer")}: {getYesNoAnswer(resultCard.data, resultCard.isReversed)}
                  </div>
                  
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {resultCard.isReversed ? resultCard.data.meanings[lang].reversed : resultCard.data.meanings[lang].upright}
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <Button 
                  variant="outline" 
                  onClick={resetReading}
                  className="rounded-full px-8 py-6 border-primary/30 hover:bg-primary/10"
                >
                  <RefreshCw className="w-4 h-4 mr-2" /> {t("yes_no.ask_another")}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// Simple Yes/No logic (MVP)
// Positive cards: Sun, Star, World, Empress, etc.
// Negative cards: Tower, Devil, Death, 3/5/9/10 Swords
// Neutral: Hanged Man, Hermit
function getYesNoAnswer(card: TarotCardData, isReversed: boolean): string {
  // Simplified logic for demo
  const positiveIds = ["sun", "star", "world", "empress", "lovers", "strength", "chariot", "magician"];
  const negativeIds = ["tower", "devil", "death", "moon"];
  
  if (positiveIds.includes(card.id)) return isReversed ? "No (Obstacle)" : "Yes";
  if (negativeIds.includes(card.id)) return isReversed ? "Maybe (Turning Point)" : "No";
  
  return "Maybe";
}
