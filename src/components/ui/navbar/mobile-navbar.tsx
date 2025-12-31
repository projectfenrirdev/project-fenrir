"use client";

import ContactButton from "@/components/ui/navbar/contact-button";
import NavbarLink from "@/components/ui/navbar/navbar-link";
import { NAVBAR_LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MobileNavbar = ({ isMenuOpen, toggleMenu }: Props) => {
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
          className="fixed inset-0 h-screen w-screen bg-gradient-to-b from-black/90 to-forge-accent-darker/90 backdrop-blur-md lg:hidden"
          aria-hidden={!isMenuOpen}
          onClick={toggleMenu}
        >
          <motion.div
            className="flex h-full flex-col items-center justify-center gap-8 p-6"
            role="menu"
            aria-label="Mobile navigation"
          >
            {NAVBAR_LINKS.map((link) => (
              <motion.div
                variants={mobileItemVariants}
                whileTap={{ scale: 0.95 }}
                className="relative"
                key={link.href}
              >
                <NavbarLink
                  href={link.href}
                  role="menuitem"
                  className="text-2xl font-medium"
                >
                  {link.text}
                </NavbarLink>
                <motion.div
                  className="bg-forge-accent absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2"
                  whileHover={{ width: "80%" }}
                />
              </motion.div>
            ))}

            <ContactButton variants={mobileItemVariants} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
