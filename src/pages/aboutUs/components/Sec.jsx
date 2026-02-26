import { Target, Eye, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "../../../components/animation/FadeIn";
import portfolio3 from "/portfolio-3.jpg";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To transform ordinary spaces into extraordinary experiences by merging timeless aesthetics with modern functionality, creating environments that inspire and elevate daily life.",
    delay: 0,
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the region's most trusted interior design studio—known for bold creativity, sustainable practices, and an unwavering commitment to craft that sets new standards in the industry.",
    delay: 0.15,
  },
  {
    icon: Lightbulb,
    title: "Our Philosophy",
    description:
      "We believe every space has a soul. Our role is to uncover it through deep listening, thoughtful material selection, and designs that age gracefully while remaining fresh.",
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: "Our Strategy",
    description:
      "We follow a human-centered design process: Discover, Define, Design, Deliver. Each phase involves close collaboration with clients to ensure alignment at every step.",
    delay: 0.45,
  },
];

const Sec = () => {
  return (
    <>
      <section className="py-24 bg-background">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Built on Purpose
              </h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar) => (
              <FadeIn key={pillar.title} delay={pillar.delay}>
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px -12px hsl(var(--accent) / 0.25)",
                  }}
                  transition={{ duration: 0.35 }}
                  className="
                    group rounded-2xl p-8
                    bg-card text-card-foreground
                    border border-border
                    hover:border-accent/40
                    transition-colors duration-500
                  "
                >
                  {/* ===== Hexagon Icon ===== */}
                  <div
                    className="
                      w-14 h-14 mb-6
                      bg-sage-deep
                      flex items-center justify-center
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                    style={{
                      clipPath:
                        "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                    }}
                  >
                    <pillar.icon size={22} className="text-cream" />
                  </div>

                  <h3 className="font-heading font-bold text-xl mb-3">
                    {pillar.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sec;
