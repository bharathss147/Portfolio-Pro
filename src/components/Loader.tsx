import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "#06070a" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <motion.div
            className="font-display font-semibold grad-text select-none"
            style={{
              fontSize: "15vw",
              letterSpacing: "-0.03em",
            }}
            initial={{
              opacity: 0,
              letterSpacing: "0.3em",
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              letterSpacing: "-0.03em",
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 0.84, 0.44, 1],
            }}
          >
            BS
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
