import { motion, useScroll, useTransform } from "framer-motion";
import portfolio3 from "/portfolio-3.jpg";
import FadeIn from "../../../components/animation/FadeIn";

const Last = () => {
  return (
    /* About Intro */
    <section className="py-24 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <FadeIn>
            <div>
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                About Deco Hub
              </span>

              <h2 className="font-heading text-3xl font-bold text-foreground mt-3 mb-6">
                Where Creativity Meets Craftsmanship
              </h2>

              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Founded in Cairo, Deco Hub was born from a belief that every
                space deserves to be thoughtfully designed. We don't just
                decorate rooms—we architect experiences, blending cultural
                heritage with contemporary innovation.
              </p>

              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Our multidisciplinary team brings together architects, artists,
                and strategists who collaborate to deliver interiors that are
                both beautiful and deeply functional. From boutique residences
                to landmark commercial projects, we approach each brief with
                fresh eyes.
              </p>

              <p className="font-body text-muted-foreground leading-relaxed">
                Sustainability isn't an afterthought—it's woven into our
                material choices, sourcing practices, and design longevity. We
                create spaces that stand the test of time.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="
                  rounded-2xl overflow-hidden
                  border-4 border-primary/30
                  shadow-lg
                "
            >
              <img
                src={portfolio3}
                alt="Deco Hub studio work"
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

export default Last;
