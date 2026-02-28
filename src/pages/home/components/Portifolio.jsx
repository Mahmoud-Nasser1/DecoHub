import React from "react";
import FadeIn from "../../../components/animation/FadeIn";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const portfolio = [
  {
    image: "/Portifolio/img1.jpeg",
    // title: "Serene Bedroom",
    // category: "Residential",
  },
  {
    image: "/Portifolio/img2.jpeg",
    // title: "Modern Kitchen",
    // category: "Residential",
  },
  {
    image: "/Portifolio/img3.jpeg",
    // title: "Executive Office",
    // category: "Commercial",
  },
  {
    image: "/Portifolio/img4.jpeg",
    // title: "Restaurant Lounge",
    // category: "Commercial",
  },
  {
    image: "/Portifolio/img5.jpeg",
    // title: "Spa Bathroom",
    // category: "Residential",
  },
  {
    image: "/Portifolio/img6.jpeg",
    // title: "Reading Nook",
    // category: "Residential",
  },

  {
    image: "/Portifolio/img7.jpeg",
    // title: "Hotel Lobby",
    // category: "Commercial",
  },
  {
    image: "/Portifolio/img8.jpeg",
    // title: "Cozy Living Room",
    // category: "Residential",
  },
  {
    image: "/Portifolio/img9.jpeg",
    // title: "Corporate Conference Room",
    // category: "Commercial",
  },
];
const Portifolio = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Our Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Portfolio
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {portfolio.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-500 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-heading text-[10px] uppercase tracking-wider text-primary">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-semibold text-sm text-background">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
