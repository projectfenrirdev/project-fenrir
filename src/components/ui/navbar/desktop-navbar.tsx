import { MotionDiv } from "@/components/motion/motion-tags";
import ContactButton from "@/components/ui/navbar/contact-button";
import NavbarLink from "@/components/ui/navbar/navbar-link";
import { NAVBAR_LINKS } from "@/lib/constants";

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
      <MotionDiv
        variants={itemVariants}
        className="hidden items-center gap-8 lg:flex"
        role="menubar"
        aria-label="Desktop navigation"
      >
        {NAVBAR_LINKS.map((link) => (
          <NavbarLink key={link.text} id={link.text}>
            {link.text}
          </NavbarLink>
        ))}
      </MotionDiv>

      <ContactButton variants={itemVariants} />
    </div>
  );
};

export default DesktopNavbar;
