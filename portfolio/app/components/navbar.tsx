"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, Code2, Mail, Menu, X } from "lucide-react";
import { cn } from "../utils/animation-helper";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: "Home", icon: Home },
    { name: "About", icon: User },
    { name: "Projects", icon: Briefcase },
    { name: "Skills", icon: Code2 },
    { name: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);

      const sections = navItems.map((item) =>
        document.getElementById(item.name.toLowerCase())
      );
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-[#FFD7CC] py-3 px-6 transition-all duration-500",
          isScrolled && "md:translate-y-[-100%]"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-[#141414] font-bold text-xl">NR</h1>

            <ul className="hidden md:flex items-center gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.name.toLowerCase())}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full",
                      "font-medium transition-all duration-300",
                      activeSection === item.name.toLowerCase()
                        ? "bg-[#FFB5A1] text-white"
                        : "text-[#141414] hover:bg-[#FFB5A1]/50"
                    )}
                  >
                    <item.icon size={20} strokeWidth={2} />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            <button
              className="md:hidden text-[#141414]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Menu size={24} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#FFD7CC] pt-20 px-6 transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
        )}
      >
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.name.toLowerCase())}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-full w-full",
                  "font-medium transition-all duration-300",
                  activeSection === item.name.toLowerCase()
                    ? "bg-[#FFB5A1] text-white"
                    : "text-[#141414] hover:bg-[#FFB5A1]/50"
                )}
              >
                <item.icon size={24} strokeWidth={2} />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <aside
        className={cn(
          "fixed left-0 top-0 bottom-0 z-40 py-8 transition-all duration-500 hidden md:flex flex-col items-center",
          isScrolled
            ? "translate-x-0 w-[80px] hover:w-[180px]"
            : "translate-x-[-100%] w-0",
          "overflow-hidden"
        )}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <ul className="flex flex-col gap-8 items-center w-full mt-20">
          {navItems.map((item) => (
            <li key={item.name} className="w-full px-4">
              <button
                onClick={() => handleNavClick(item.name.toLowerCase())}
                onMouseEnter={() => setHoveredItem(item.name.toLowerCase())}
                className={cn(
                  "flex items-center py-3 px-3 rounded-full w-full bg-[#FFD7CC]",
                  "font-medium transition-all duration-300 relative",  
                  activeSection === item.name.toLowerCase()
                    ? "bg-[#FFB5A1] text-white"
                    : "text-[#141414] hover:bg-[#FFB5A1]",
                    hoveredItem === item.name.toLowerCase() ? "w-auto" : "w-[48px]",
                )}
              >
                <div className="flex-shrink-0">
                  <item.icon size={24} strokeWidth={2} />
                </div>

                <div
                  className={cn(
                    "ml-4 overflow-hidden transition-all duration-300",
                    hoveredItem === item.name.toLowerCase() ||
                      activeSection === item.name.toLowerCase()
                      ? "max-w-[100px] opacity-100"
                      : "max-w-0 opacity-0"
                  )}
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
