import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CARD_BACK_IMAGE } from "@/lib/tarot-data";
import type { TarotCardData } from "@/lib/tarot-data";

interface TarotCardProps {
  card?: TarotCardData;
  isRevealed: boolean;
  isReversed?: boolean;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function TarotCard({ 
  card, 
  isRevealed, 
  isReversed = false, 
  onClick, 
  className,
  size = "md" 
}: TarotCardProps) {
  const sizeClasses = {
    sm: "w-24 h-40",
    md: "w-48 h-80",
    lg: "w-64 h-[26rem]"
  };

  return (
    <div 
      className={cn(
        "relative perspective-1000 cursor-pointer group",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-700 ease-in-out shadow-2xl rounded-xl"
        animate={{ 
          rotateY: isRevealed ? 180 : 0,
          rotateZ: isRevealed && isReversed ? 180 : 0
        }}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border-2 border-primary/30 shadow-inner bg-card">
          <img 
            src={CARD_BACK_IMAGE} 
            alt="Card Back" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Card Front */}
        <div 
          className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden border-2 border-primary shadow-gold bg-card"
        >
          {card ? (
            <div className="relative w-full h-full">
              <img 
                src={card.image} 
                alt={card.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-center">
                <h3 className="text-white font-serif font-bold text-lg drop-shadow-md">
                  {card.name_cn}
                </h3>
                {isReversed && (
                  <span className="text-destructive font-medium text-xs uppercase tracking-widest drop-shadow-sm">
                    逆位
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">?</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
