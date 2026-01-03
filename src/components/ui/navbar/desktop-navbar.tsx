import ContactButton from "@/components/ui/navbar/contact-button";
import NavbarLink from "@/components/ui/navbar/navbar-link";
import { NAVBAR_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

type Props = {
  itemVariants: {
    hidden: {
      opacity: number;
      y: number;
    };
    visible: {
      opacity: number;
      y: number;
    };
  };
};

const DesktopNavbar = ({ itemVariants }: Props) => {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      <motion.div
        variants={itemVariants}
        className="hidden items-center gap-8 lg:flex"
        role="menubar"
        aria-label="Desktop navigation"
      >
        {NAVBAR_LINKS.map((link) => (
          <NavbarLink key={link.href} href={link.href} role="menuitem">
            {link.text}
          </NavbarLink>
        ))}
      </motion.div>

      <ContactButton variants={itemVariants} />
    </div>
  );
};

export default DesktopNavbar;
