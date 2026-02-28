import portfolio3 from "/portfolio-3.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.4 + i * 0.035,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const First = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const title = "Crafting Spaces That Inspire";

  return (
    <section
      ref={heroRef}
      className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <img
          src={portfolio3}
          alt="Elegant commercial interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 relative z-7"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-heading px-4 sm:px-10 md:px-20 
             text-3xl sm:text-5xl md:text-7xl 
             font-bold text-accent-foreground 
             mb-8 leading-[1.1] flex flex-wrap justify-center"
            style={{ perspective: "600px" }}
          >
            {title.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-flex whitespace-nowrap mr-3"
              >
                {word.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + wordIndex * 10}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <p className="text-accent-foreground/70 text-lg max-w-2xl mx-auto">
            We believe that great design has the power to transform not just
            spaces, but lives.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default First;
