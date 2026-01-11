"use client";

import { cn, scrollToSection, scrollToTop } from "@/lib/utils";

const NavbarLink = ({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const handleClick = () => {
    if (id.toLowerCase() === "home") {
      scrollToTop();
    } else {
      scrollToSection(id.toLowerCase());
    }
  };

  return (
    <div
      id={`navbar-link-${id}`}
      aria-label={children?.toString()}
      role="menuitem"
      itemType="link"
      itemRef={`navbar-link-${id}`}
      onClick={handleClick}
      className={cn(
        "transform cursor-pointer text-neutral-300 no-underline transition-transform hover:translate-y-[-2px] hover:text-white",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default NavbarLink;
