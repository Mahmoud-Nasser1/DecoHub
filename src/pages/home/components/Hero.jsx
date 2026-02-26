import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="/Hero.jpg"
          alt="Luxurious modern living room with sage green sofa and arched doorways"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div
            className="mb-8 bg-primary/80
             w-12 h-12          /* صغير للهواتف */
             sm:w-16 sm:h-16    /* متوسط للشاشات الصغيرة */
             md:w-20 md:h-20    /* أكبر للتابلت */
             lg:w-24 lg:h-24    /* أكبر للشاشات الكبيرة */
             xl:w-28 xl:h-28"
            style={{
              clipPath:
                "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
            }}
          />
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-background leading-tight mb-6">
            Transform Your Space with Deco Hub
          </h1>
          <p className="font-body text-background/80 text-lg md:text-xl mb-8 leading-relaxed">
            We blend creativity and functionality to craft interiors that
            inspire, comfort, and elevate your everyday living.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide hover:bg-sage-deep transition-colors duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="border border-background/50 text-background px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide hover:bg-background/10 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
