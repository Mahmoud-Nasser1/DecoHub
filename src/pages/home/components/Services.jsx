import FadeIn from "./../../../components/animation/FadeIn";
import { Home, Building, Sofa, PenTool } from "lucide-react"; // استيراد الأيقونات من lucide-react

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description:
      "Creating warm, personalized living spaces that reflect your unique style and enhance everyday comfort.",
  },
  {
    icon: Building,
    title: "Commercial Spaces",
    description:
      "Designing inspiring workplaces and retail environments that boost productivity and brand identity.",
  },
  {
    icon: Sofa,
    title: "Custom Furniture",
    description:
      "Handcrafted, bespoke furniture pieces tailored to your space and aesthetic preferences.",
  },
  {
    icon: PenTool,
    title: "Design Consultation",
    description:
      "Expert guidance to help you make informed decisions about colors, materials, and layouts.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Our Services
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const IconComponent = service.icon; // تعيين الأيقونة
            return (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-card hover:bg-accent transition-colors duration-500 cursor-pointer">
                  <div className="w-14 h-14 hexagon bg-accent group-hover:bg-sage flex items-center justify-center mb-6 transition-colors duration-500">
                    <IconComponent
                      className="text-accent-foreground group-hover:text-foreground transition-colors duration-500"
                      size={24}
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-accent-foreground mb-3 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground group-hover:text-accent-foreground/70 leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
