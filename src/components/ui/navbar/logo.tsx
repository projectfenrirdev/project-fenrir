import { COMPANY_INFO } from "@/lib/constants";
import { MotionDiv } from "@/components/motion/motion-tags";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";

type Props = {
  variants: {
    hidden: {
      opacity: number;
      y: number;
    };
    visible: {
      opacity: number;
      y: number;
    };
  };
  onClick?: () => void;
};

const Logo = ({ variants, onClick }: Props) => {
  return (
    <MotionDiv variants={variants} className="z-50 flex items-center gap-2">
      <Link
        href="/"
        className="flex items-center gap-2"
        aria-label="Project Fenrir - Home"
        onClick={onClick}
      >
        <div className="from-forge-accent/80 to-forge-accent-DEFAULT/80 flex h-8 w-12 items-center justify-center rounded-md bg-gradient-to-br shadow-lg">
          <Image
            src={logo}
            alt={COMPANY_INFO.name}
            width={32}
            height={32}
            className="h-8 w-12 rounded-sm object-cover object-center"
          />
        </div>
        <span className="bg-linear-to-r from-white to-neutral-400 bg-clip-text text-xl font-bold text-transparent">
          {COMPANY_INFO.name}
        </span>
      </Link>
    </MotionDiv>
  );
};

export default Logo;
