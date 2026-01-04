import Logo from "@/components/ui/navbar/logo";
import { CONTACT_INFO } from "@/lib/constants";
import { InstagramIcon, MailIcon, TwitterIcon } from "lucide-react";
import { iconHoverVariants, itemVariants } from "./animation-variants";
import WhatsappIcon from "@/components/ui/whatsapp-icon";
import { MotionDiv } from "@/components/motion/motion-tags";
import { MotionLink } from "@/components/motion/motion-tags";

export const FooterAbout = () => {
  return (
    <MotionDiv
      className="mb-8 flex flex-col gap-4"
      variants={{ itemVariants }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Logo variants={itemVariants} />
      <p className="mb-2 text-sm text-gray-300">
        Transform your business with personalized web development, online stores
        & custom software.
      </p>
      <div className="flex space-x-4">
        <MotionLink
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-forge-accent text-gray-300 transition-colors"
          variants={iconHoverVariants}
          whileHover="hover"
        >
          <WhatsappIcon className="size-5" />
        </MotionLink>
        <MotionLink
          href={`mailto:${CONTACT_INFO.email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="hover:text-forge-accent text-gray-300 transition-colors"
          variants={iconHoverVariants}
          whileHover="hover"
        >
          <MailIcon className="size-5" />
        </MotionLink>
        <MotionLink
          href={CONTACT_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-forge-accent text-gray-300 transition-colors"
          variants={iconHoverVariants}
          whileHover="hover"
        >
          <InstagramIcon className="size-5" />
        </MotionLink>
        <MotionLink
          href={CONTACT_INFO.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-forge-accent text-gray-300 transition-colors"
          variants={iconHoverVariants}
          whileHover="hover"
        >
          <TwitterIcon className="size-5" />
        </MotionLink>
      </div>
    </MotionDiv>
  );
};
