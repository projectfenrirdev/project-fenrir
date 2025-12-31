"use client";

import ClosedIcon from "@/components/ui/navbar/closed-icon";
import DesktopNavbar from "@/components/ui/navbar/desktop-navbar";
import Logo from "@/components/ui/navbar/logo";
import MobileNavbar from "@/components/ui/navbar/mobile-navbar";
import OpenedIcon from "@/components/ui/navbar/opened-icon";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024 && isMenuOpen) {
      setIsMenuOpen(false);

      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;

      document.body.style.overflow = newState ? "hidden" : "auto";

      return newState;
    });
  };

  const handleLogoClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  // Determine if navbar should have elevated style
  const isElevated = scrollPosition > 20;

  return (
    <>
      <Script
        id="navbar-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: ["Home", "About", "Services", "Portfolio", "Contact"],
            url: ["/", "/#about", "/#services", "/#portfolio", "/#contact"],
          }),
        }}
      />

      <header className="fixed top-0 right-0 left-0 z-40 w-full">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className={cn(
            "w-full transition-all",
            !isMenuOpen && "backdrop-blur-lg",
            isElevated ? "py-3" : "py-5",
          )}
          style={{
            borderBottom: isElevated
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid transparent",
            boxShadow: isElevated ? "0 4px 30px rgba(0, 0, 0, 0.3)" : "none",
          }}
          aria-label="Main Navigation"
        >
          <motion.div
            className="absolute inset-0 -z-10 transition-all"
            animate={{
              opacity: isElevated ? 1 : 0,
              background: isElevated
                ? "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(13, 6, 30, 0.75))"
                : "transparent",
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Accent line */}
          <motion.div
            className="from-forge-secondary/70 absolute bottom-0 left-0 h-[1px] bg-linear-to-r via-blue-500/50 to-transparent"
            animate={{
              width: isElevated ? "100%" : "0%",
            }}
            transition={{ duration: 0.6 }}
          />

          <div className="container mx-auto flex items-center justify-between px-4">
            <Logo variants={itemVariants} onClick={handleLogoClick} />

            {/* Mobile menu button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="z-50 lg:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20">
                <AnimatePresence mode="wait">
                  {isMenuOpen ? <ClosedIcon /> : <OpenedIcon />}
                </AnimatePresence>
              </div>
            </motion.button>

            <DesktopNavbar itemVariants={itemVariants} />

            <MobileNavbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          </div>
        </motion.nav>
      </header>
    </>
  );
};

export default Navbar;
