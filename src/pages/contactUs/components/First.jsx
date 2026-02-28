import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "/portfolio-2.jpg";

const First = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const title = "Let's Create Together";

  return (
    <section
      ref={heroRef}
      className="relative h-[75vh] min-h-[500px] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <img
          src={heroImg}
          alt="Interior design inspiration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/65" />
      </motion.div>

      {/* Decorative hexagons */}
      <motion.div
        className="absolute top-24 left-[12%] w-14 h-14 hexagon border border-accent-foreground/8"
        animate={{ rotate: 360, y: [0, -8, 0] }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute bottom-28 right-[15%] w-20 h-20 hexagon border border-accent-foreground/8"
        animate={{ rotate: -360, y: [0, 10, 0] }}
        transition={{
          rotate: { duration: 22, repeat: Infinity, ease: "linear" },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Arch */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2
  w-[600px] md:w-[900px]
  h-[300px] md:h-[400px]
  border-t border-l border-r
  border-white/80
  rounded-t-full
  pointer-events-none
  z-0"
      />
      {/* Content */}
      <motion.div
        className="container mx-auto px-6 relative z-7"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-accent-foreground/50 mx-auto mb-8"
          />

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-xs uppercase tracking-[0.3em] text-accent-foreground/70 font-medium inline-block mb-6"
          >
            Get in Touch
          </motion.span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-accent-foreground mb-8 leading-[1.1]">
            {title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.4 + i * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-3"
                style={{ whiteSpace: "nowrap" }} // 👈 ده المهم
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="font-body text-lg md:text-xl text-accent-foreground/70 max-w-xl mx-auto"
          >
            Have a vision for your space? We'd love to bring it to life.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default First;
