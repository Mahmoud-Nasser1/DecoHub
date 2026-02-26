import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Home, User, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const navList = (
    <ul className="flex flex-col lg:flex-row items-center gap-6">
      {navItems.map(({ name, path, icon: Icon }) => (
        <li key={path}>
          <NavLink
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `relative flex items-center gap-2
            font-heading text-sm font-medium tracking-wide uppercase
            transition-all duration-300
            text-accent hover:text-sage-deep
            after:content-[''] after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:bg-accent
            after:transition-all after:duration-300
            ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
            }
          >
            <Icon size={16} />
            <span>{name}</span>
          </NavLink>
        </li>
      ))}

      <li>
        <Link
          to="/contact"
          className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full
        font-heading text-sm font-semibold tracking-wide
        hover:bg-sage-deep transition-all duration-300 text-white"
        >
          Get in Touch
        </Link>
      </li>
    </ul>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 w-full bg-background/90 backdrop-blur-md border-border`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Typography as="a" href="#" className="cursor-pointer font-medium">
          <img src="/logo.png" className="h-20 w-32" />
        </Typography>

        {/* Nav List Desktop */}
        <div className="hidden lg:block">{navList}</div>

        {/* Hamburger Icon */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Menu using Collapse */}
      <Collapse
        open={openNav}
        className="lg:hidden bg-background/95 border-border overflow-hidden backdrop-blur-md"
      >
        <div className="container mx-auto py-4 px-8 ">{navList}</div>
      </Collapse>
    </div>
  );
}
