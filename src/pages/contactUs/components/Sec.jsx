import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "react-hot-toast";
import FadeIn from "./../../../components/animation/FadeIn";
import emailjs from "@emailjs/browser";

const Sec = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // إرسال البيانات عبر EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID",   // غيّرها بخدمة EmailJS الخاصة بك
        "YOUR_TEMPLATE_ID",  // غيّرها بالتمبلت ID الخاص بك
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"    // غيّرها بالمفتاح العام من حسابك
      )
      .then(
        (result) => {
          toast.success("Message Sent! We'll get back to you shortly.");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-heading text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-heading text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-heading text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="+20 123 456 789"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-heading text-sm font-medium text-foreground mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide hover:bg-sage-deep transition-colors duration-300"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </FadeIn>

          {/* Info + Map */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-5">
                  {/* Office */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 relative">
                      <div className="absolute inset-0 bg-card [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)] flex items-center justify-center text-accent">
                        <MapPin size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="font-heading font-medium text-sm text-foreground">
                        Our Office
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        Giza, Egypt
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 relative">
                      <div className="absolute inset-0 bg-card [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)] flex items-center justify-center text-accent">
                        <Phone size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="font-heading font-medium text-sm text-foreground">
                        Phone
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        +20 123 456 789
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 relative">
                      <div className="absolute inset-0 bg-card [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)] flex items-center justify-center text-accent">
                        <Mail size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="font-heading font-medium text-sm text-foreground">
                        Email
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        hello@decohub.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border h-64">
                <iframe
                  title="Deco Hub Location - Cairo, Egypt"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjgiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sen!2seg!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Sec;