"use client";

import {
  ADDRESS_INFO,
  COMPANY_INFO,
  CONTACT_INFO,
  LEGAL_INFO,
  LEGAL_REPRESENTATIVE,
} from "@/lib/constants";
import { trackEmailClick, trackPhoneClick } from "@/lib/gtm";
import { motion } from "framer-motion";
import Link from "next/link";

const LegalNotice = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="mx-auto max-w-4xl px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div variants={{ itemVariants }} className="mb-10 text-center">
        <h1 className="from-forge-primary to-forge-accent-DEFAULT mb-4 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent">
          Legal Notice / Impressum
        </h1>
        <p className="text-gray-400">Last updated: January 7, 2026</p>
      </motion.div>

      {/* Introduction */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          1. Information According to EU Law
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            In accordance with EU regulations and national laws of EU member
            states (particularly Germany and Austria, where an "Impressum" is
            mandatory), this legal notice provides information about the entity
            responsible for this website.
          </p>
        </div>
      </motion.section>

      {/* Company Information */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          2. Company Information
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p className="mb-4">
            <strong className="text-forge-primary">Company Name:</strong>{" "}
            {COMPANY_INFO.name}
          </p>
          <p className="mb-4">
            <strong className="text-forge-primary">Legal Form:</strong>{" "}
            {LEGAL_INFO.legalForm}
          </p>
          <p className="mb-4">
            <strong className="text-forge-primary">Registered Address:</strong>
            <br />
            {ADDRESS_INFO.street && `${ADDRESS_INFO.street}, `}
            {ADDRESS_INFO.locality}, {ADDRESS_INFO.region}
            <br />
            {ADDRESS_INFO.country}
            {ADDRESS_INFO.postalCode && (
              <>
                <br />
                {ADDRESS_INFO.postalCode}
              </>
            )}
          </p>
        </div>
      </motion.section>

      {/* Registration Details */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          3. Registration Details
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p className="mb-4">
            <strong className="text-forge-primary">
              Company Registration Number:
            </strong>{" "}
            {LEGAL_INFO.registrationNumber}
          </p>
          <p className="mb-4">
            <strong className="text-forge-primary">
              Trade Register (Registrul Comerțului):
            </strong>{" "}
            {LEGAL_INFO.tradeRegister}
          </p>
          <p className="mb-4">
            <strong className="text-forge-primary">
              VAT Number (CUI/CIF):
            </strong>{" "}
            {LEGAL_INFO.vatNumber}
          </p>
          <p className="mb-4">
            <strong className="text-forge-primary">Tax ID:</strong>{" "}
            {LEGAL_INFO.taxId}
          </p>
        </div>
      </motion.section>

      {/* Legal Representative */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          4. Legal Representative
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p className="mb-4">
            <strong className="text-forge-primary">Name:</strong>{" "}
            {LEGAL_REPRESENTATIVE.name}
          </p>
          <p className="mb-4">
            <strong className="text-forge-primary">Title:</strong>{" "}
            {LEGAL_REPRESENTATIVE.title}
          </p>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          5. Contact Information
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p className="mb-4">
            For inquiries, questions, or concerns, you can reach us at:
          </p>
          <ul className="space-y-2 text-gray-300">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Email:</strong>{" "}
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-forge-primary hover:text-forge-secondary transition-colors"
                onClick={() => trackEmailClick(CONTACT_INFO.email)}
              >
                {CONTACT_INFO.email}
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Phone:</strong>{" "}
              <Link
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-forge-primary hover:text-forge-secondary transition-colors"
                onClick={() => trackPhoneClick(CONTACT_INFO.phone)}
              >
                {CONTACT_INFO.phone}
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <strong className="text-forge-primary">WhatsApp:</strong>{" "}
              <Link
                href={CONTACT_INFO.whatsapp}
                className="text-forge-primary hover:text-forge-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT_INFO.phone}
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.section>

      {/* Hosting Provider */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          6. Hosting Provider
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p className="mb-4">This website is hosted by:</p>
          <p className="mb-2">
            <strong className="text-forge-primary">Vercel Inc.</strong>
          </p>
          <p className="mb-2">
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789
            <br />
            United States
          </p>
          <p className="mb-2">
            <strong className="text-forge-primary">Website:</strong>{" "}
            <Link
              href="https://vercel.com"
              className="text-forge-primary hover:text-forge-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com
            </Link>
          </p>
          <p className="mb-2">
            <strong className="text-forge-primary">Privacy Policy:</strong>{" "}
            <Link
              href="https://vercel.com/legal/privacy-policy"
              className="text-forge-primary hover:text-forge-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com/legal/privacy-policy
            </Link>
          </p>
        </div>
      </motion.section>

      {/* Professional Liability Insurance */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          7. Professional Liability Insurance
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            {/* TODO: Add professional liability insurance details if applicable */}
            [Professional Liability Insurance Information - To be completed if
            applicable]
          </p>
          <p className="mt-4">
            If professional liability insurance is required in your jurisdiction
            or industry, please ensure this section is completed with the
            insurance provider name, policy number, and coverage details.
          </p>
        </div>
      </motion.section>

      {/* Responsible for Content */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          8. Responsible for Content
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            The content of this website is the responsibility of{" "}
            {COMPANY_INFO.name} as stated above. We make every effort to ensure
            that the information provided is accurate and up-to-date. However,
            we cannot guarantee the completeness, accuracy, or timeliness of all
            information.
          </p>
          <p className="mt-4">
            External links to third-party websites are provided for convenience
            only. We have no control over the content of these external sites
            and assume no responsibility for their content, privacy practices,
            or availability.
          </p>
        </div>
      </motion.section>

      {/* Dispute Resolution */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          9. Dispute Resolution
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            For disputes arising from the use of this website or our services,
            please refer to our{" "}
            <Link
              href="/terms-of-service"
              className="text-forge-primary hover:text-forge-secondary transition-colors"
            >
              Terms of Service
            </Link>
            .
          </p>
          <p className="mt-4">
            As a business operating in the European Union, we are committed to
            resolving disputes amicably. If you are a consumer, you may also use
            the{" "}
            <Link
              href="https://ec.europa.eu/consumers/odr"
              className="text-forge-primary hover:text-forge-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              EU Online Dispute Resolution Platform
            </Link>{" "}
            for dispute resolution.
          </p>
        </div>
      </motion.section>

      {/* Copyright */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          10. Copyright and Intellectual Property
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of {COMPANY_INFO.name} or its
            content providers and is protected by Romanian and international
            copyright laws.
          </p>
          <p className="mt-4">
            Unauthorized reproduction, distribution, or use of any content from
            this website is prohibited without prior written permission from{" "}
            {COMPANY_INFO.name}.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          11. Questions About This Legal Notice
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            If you have any questions about this Legal Notice, please contact us
            at:
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <p className="flex items-center">
              <span className="mr-2">📧</span>
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-forge-primary hover:text-forge-secondary transition-colors"
                onClick={() => trackEmailClick(CONTACT_INFO.email)}
              >
                {CONTACT_INFO.email}
              </Link>
            </p>
            <p className="flex items-center">
              <span className="mr-2">📱</span>
              <Link
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-forge-primary hover:text-forge-secondary transition-colors"
                onClick={() => trackPhoneClick(CONTACT_INFO.phone)}
              >
                {CONTACT_INFO.phone}
              </Link>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Back to Home button */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link
          href="/"
          className="from-forge-primary focus:ring-forge-primary/50 to-forge-accent-DEFAULT inline-flex items-center justify-center rounded-lg bg-linear-to-r px-6 py-3 font-medium text-white transition-transform hover:scale-105 focus:ring-2 focus:outline-none"
        >
          ← Return to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default LegalNotice;
