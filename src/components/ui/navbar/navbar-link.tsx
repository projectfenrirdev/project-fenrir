import { cn } from "@/lib/utils";
import Link from "next/link";

const NavbarLink = ({
  href,
  children,
  role,
  className,
}: {
  href: string;
  children: React.ReactNode;
  role?: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "transform text-neutral-300 transition-transform hover:translate-y-[-2px] hover:text-white",
        className,
      )}
      aria-label={children?.toString()}
      role={role}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
