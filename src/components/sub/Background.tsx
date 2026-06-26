import { motion } from "motion/react";

interface BackgroundProps {
  src: string;
  alt?: string;
  opacity?: number;
  className?: string;
  overlay?: boolean;
}

export default function Background({ 
  src, 
  alt = "Background", 
  opacity = 0.5, 
  className = "",
  overlay = true 
}: BackgroundProps) {
  return (
    <div className={`fixed inset-1 -z-10 h-full w-full overflow-hidden ${className}`}>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity }}
        transition={{ duration: 1 }}
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
      {overlay && (
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/30" />
      )}
    </div>
  );
}
