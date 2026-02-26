import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

const ROOM_COLORS = [
  "#4F6F63", // accent
  "#A3BFAE", // primary
  "#E6D5C3", // secondary
];

const DoorAnimation = () => {
  const [doorOpen, setDoorOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDoorOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-48 h-64 md:w-56 md:h-72 mx-auto">
      {/* Door frame */}
      <div className="absolute inset-0 rounded-t-[50%] border-2 border-accent/30 bg-card/30 backdrop-blur-sm" />

      {/* Door */}
      <motion.div
        className="absolute inset-[3px] rounded-t-[48%] bg-accent/10 origin-left overflow-hidden"
        animate={{ rotateY: doorOpen ? -75 : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 800, transformStyle: "preserve-3d" }}
      >
        {/* Door panel details */}
        <div className="absolute inset-4 rounded-t-[40%] border border-accent/15" />
        {/* Handle */}
        <motion.div
          className="absolute right-4 top-1/2 w-2 h-6 rounded-full bg-accent/40"
          animate={{ opacity: doorOpen ? 0.2 : 0.6 }}
        />
      </motion.div>

      {/* Behind door - void */}
      <AnimatePresence>
        {doorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-[6px] rounded-t-[46%] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            >
              <Search className="text-accent/30" size={32} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.4, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-12 font-body text-xs text-muted-foreground"
            >
              nothing here…
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NotFound = () => {
  const location = useLocation();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    );
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/15"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0] }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent/[0.04]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-accent/[0.06]" />

      {/* Floating hexagons */}
      <motion.div
        className="absolute top-[12%] right-[18%] w-20 h-20 hexagon border border-accent/10"
        animate={{ rotate: 360, y: [0, -12, 0] }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-[18%] left-[12%] w-14 h-14 hexagon border border-accent/5"
        animate={{ rotate: -360, y: [0, 10, 0] }}
        transition={{
          rotate: { duration: 28, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-lg">
        {/* Giant faded 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        >
          <span className="font-heading text-[10rem] md:text-[13rem] font-bold leading-none bg-gradient-to-b from-accent/8 to-transparent bg-clip-text text-transparent">
            404
          </span>
        </motion.div>

        {/* Door illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <DoorAnimation />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
        >
          Wrong Door<span className="text-accent">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="font-body text-muted-foreground mb-2 leading-relaxed text-center max-w-sm"
        >
          The page{" "}
          <span className="text-foreground font-medium">
            {location.pathname}
          </span>{" "}
          doesn't exist in our design studio.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-body text-sm text-muted-foreground/70 mb-10 text-center"
        >
          But don't worry—every great space is just one door away.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2.5 bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide hover:bg-sage-deep transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            <Home
              size={16}
              className="transition-transform group-hover:-translate-y-0.5"
            />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2.5 bg-card text-foreground px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide border border-border hover:bg-muted transition-all duration-300"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Go Back
          </button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center gap-6 text-sm font-body"
        >
          <span className="text-muted-foreground">Explore:</span>
          {[
            { label: "About", to: "/about" },
            { label: "Contact", to: "/contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-accent hover:text-foreground transition-colors underline underline-offset-4 decoration-accent/30 hover:decoration-accent"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
