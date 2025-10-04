import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    amount: threshold,
    margin: "-50px 0px -50px 0px"
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: isInView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return { ref, isInView, fadeInUp, fadeIn, slideInLeft, slideInRight };
};