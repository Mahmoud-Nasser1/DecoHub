import React from "react";
import FadeIn from "../../../components/animation/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Last = () => {
  return (
    <div>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="font-body text-foreground/70 text-lg max-w-xl mx-auto mb-8">
              Let's discuss your vision and bring it to life. Our team is ready
              to create something extraordinary for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide hover:bg-card transition-colors duration-300"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Last;
