
import { HTMLMotionProps } from "framer-motion";

export const fadeIn = (delay: number = 0): HTMLMotionProps<"div"> => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.5,
    delay,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
});

export const scaleIn = (delay: number = 0): HTMLMotionProps<"div"> => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.4, 
    delay,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
});

export const slideInLeft = (delay: number = 0): HTMLMotionProps<"div"> => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.5, 
    delay,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
});

export const slideInRight = (delay: number = 0): HTMLMotionProps<"div"> => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.5, 
    delay,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};
