"use client";
import { motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition:{
        duration:3
      }
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        variants={variants}
        initial="variant2" 
        animate="variant1"
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        drag 
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }} 
      ></motion.div>
    </div>
  );
};

export default TestPage;
