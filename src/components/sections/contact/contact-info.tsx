"use client";

import WhatsappIcon from "@/components/ui/whatsapp-icon";
import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { InstagramIcon, MailIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ContactItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}

const ContactItem = ({
  href,
  icon,
  label,
  value,
  external = false,
}: ContactItemProps): React.ReactElement => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center gap-4 overflow-hidden rounded-lg py-4 break-words sm:px-2",
        "hover:bg-forge-primary/5 focus:ring-forge-primary/50 focus:ring-2 focus:outline-none",
      )}
    >
      <div className="bg-forge-primary/10 text-forge-primary group-hover:bg-forge-primary/20 flex size-12 flex-shrink-0 items-center justify-center rounded-full">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-neutral-400">{label}</span>
        <span className="block text-base font-semibold wrap-anywhere">
          {value}
        </span>
      </div>
    </Link>
  );
};

const ContactInfo = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="mb-2 text-xl font-semibold">Get in touch</h3>

      <ContactItem
        href={CONTACT_INFO.whatsapp}
        icon={<WhatsappIcon className="size-6" />}
        label="Message us at"
        value={CONTACT_INFO.phone}
        external
      />

      <ContactItem
        href={`mailto:${CONTACT_INFO.email}`}
        icon={<MailIcon className="size-6" />}
        label="Email"
        value={CONTACT_INFO.email}
      />

      <ContactItem
        href={CONTACT_INFO.instagram}
        icon={<InstagramIcon className="size-6" />}
        label="Our Instagram"
        value="@projectfenrir.dev"
        external
      />

      <ContactItem
        href={CONTACT_INFO.twitter}
        icon={<TwitterIcon className="size-6" />}
        label="Follow on X"
        value="@projectfenrir"
        external
      />
    </div>
  );
};

export default ContactInfo;
