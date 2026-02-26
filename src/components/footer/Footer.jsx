import React from "react";
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const LINKS = [
  {
    title: "Company",
    items: [
      { name: "About", path: "/about" },
      { name: "Info", path: "/about" },
      { name: "Overview", path: "/about" },
    ],
  },
  {
    title: "Contact",
    items: [
      { name: "Get in Touch", path: "/contact" },
      { name: "Careers", path: "/contact" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-accent text-accent-foreground mt-auto">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-12">
        {/* Top section: Logo + Links */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-20">
          {/* Logo + Description */}
          <div className="flex flex-col md:max-w-xs">
            <NavLink to="/" className="inline-block mb-2">
              <img
                src="/logo.png"
                className="h-28 w-44 object-contain"
                alt="Yas Agency"
              />
            </NavLink>

            {/* DecoHub text under the logo */}
            <Typography
              variant="h5"
              className="text-accent-foreground font-bold mb-4 md:text-2xl text-lg"
            >
              DecoHub
            </Typography>

            <p className="text-sm md:text-lg text-accent-foreground/70 leading-relaxed">
              Transforming spaces into inspiring environments. Based in Giza,
              serving clients worldwide.
            </p>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  className="mb-4 font-semibold uppercase tracking-wide md:text-xl text-sm"
                >
                  {title}
                </Typography>
                {items.map(({ name, path }) => (
                  <li key={name}>
                    <NavLink
                      to={path}
                      className="block py-1 text-sm md:text-lg  text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom section: copyright + social */}
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <Typography
            variant="small"
            className="text-sm md:text-base text-accent-foreground/50 tracking-wide"
          >
            &copy; {currentYear} DecoHub — All Rights Reserved
          </Typography>

          <div className="flex gap-6">
            {/* Facebook */}
            <NavLink
              to="https://www.facebook.com/share/183jaBNUCJ/"
              target="_blank"
              className="text-accent-foreground/70 hover:text-[#1877F2] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </NavLink>

            {/* Instagram */}
            <NavLink
              to="https://www.instagram.com/dot_gency?igsh=cGt6ZHdtaTU1N2Rk"
              target="_blank"
              className="text-accent-foreground/70 hover:text-[#E1306C] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.75 1.5a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            </NavLink>

            {/* WhatsApp */}
            <NavLink
              to="https://wa.me/01018565141"
              target="_blank"
              className="text-accent-foreground/70 hover:text-[#25D366] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.49 0 .2 5.29.2 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.37-1.67a11.86 11.86 0 005.69 1.45h.01c6.57 0 11.86-5.29 11.86-11.86 0-3.17-1.23-6.14-3.41-8.44zM12.07 21.6h-.01a9.7 9.7 0 01-4.95-1.36l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.7 9.7 0 01-1.49-5.1C2.27 6.32 6.53 2.06 12.06 2.06c2.58 0 5 1.01 6.83 2.84a9.64 9.64 0 012.83 6.96c0 5.53-4.26 9.74-9.65 9.74zm5.32-7.3c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.91 1.15-.17.2-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.49-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.04 2.83 1.18 3.03c.15.19 2.03 3.1 4.92 4.35.69.3 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.38-.07-.12-.26-.19-.55-.34z" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
