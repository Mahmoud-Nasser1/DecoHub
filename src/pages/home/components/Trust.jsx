import { CheckCircle2 } from "lucide-react";
import FadeIn from "../../../components/animation/FadeIn";
import { motion } from "framer-motion";

const whyUs = [
  "Tailored designs that reflect your personality",
  "Premium materials & sustainable sourcing",
  "On-time delivery with transparent pricing",
  "Post-project support & maintenance",
  "Award-winning creative team",
  "150+ successful projects across the region",
];

const Trust = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <FadeIn>
            <div>
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Why Deco Hub
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
                Why Clients Trust Us
              </h2>
              <div className="space-y-4">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="text-accent shrink-0 mt-0.5"
                      size={18}
                    />
                    <p className="font-body text-muted-foreground text-lg leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden aspect-[4/5] shadow-xl"
            >
              <img
                src="/Portifolio/img5.jpeg"
                alt="Elegant interior showcasing our work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Trust;
