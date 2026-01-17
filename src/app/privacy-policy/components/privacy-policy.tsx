"use client";

import { COMPANY_INFO, CONTACT_INFO } from "@/lib/constants";
import { trackEmailClick, trackPhoneClick } from "@/lib/gtm";
import { motion } from "framer-motion";
import Link from "next/link";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p className="text-gray-400">Last updated: January 7, 2026</p>
      </motion.div>

      {/* Introduction */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          1. Introduction
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            At {COMPANY_INFO.name}, we respect your privacy and are committed to
            protecting your personal data. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our
            website or use our services.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our
            website and services, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
        </div>
      </motion.section>

      {/* Data Collection */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          2. Information We Collect
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p className="mb-4">
            We may collect the following types of information:
          </p>
          <ul className="space-y-2 text-gray-300">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <strong className="text-forge-primary">
                Personal Information:
              </strong>{" "}
              Name, email address, phone number, and other similar contact data
              you provide through our contact forms or email communications.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Usage Data:</strong>{" "}
              Information about how you interact with our website, including the
              pages you visit, the time spent on each page, the links clicked,
              and other similar metrics.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Technical Data:</strong> IP
              address, browser type and version, time zone setting, browser
              plug-in types and versions, operating system, and platform.
            </motion.li>
          </ul>
        </div>
      </motion.section>

      {/* How We Use Data */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          3. How We Use Your Information
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="space-y-2 text-gray-300">
            <li>Provide, maintain, and improve our website and services</li>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Send you service-related communications</li>
            <li>
              Analyze how visitors use our website to improve user experience
            </li>
            <li>
              Protect against, identify, and prevent fraud and other illegal
              activities
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Data Sharing */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          4. Sharing Your Information
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              Service providers who perform functions on our behalf (e.g.,
              hosting, data analysis, payment processing)
            </li>
            <li>
              Professional advisors such as lawyers, auditors, and insurers
            </li>
            <li>Authorities when required by law or to protect our rights</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-forge-primary mb-3 text-lg font-medium">
              Data Processors
            </h3>
            <p className="mb-4 text-gray-300">
              In accordance with GDPR Article 28, we have Data Processing
              Agreements (DPAs) in place with the following third-party service
              providers who process personal data on our behalf:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong className="text-forge-primary">
                  Google Analytics & Google Tag Manager
                </strong>
                <br />
                Provider: Google LLC (United States)
                <br />
                Purpose: Website analytics and tracking
                <br />
                Data Processing Agreement:{" "}
                <Link
                  href="https://privacy.google.com/businesses/processorterms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forge-primary hover:text-forge-secondary transition-colors"
                >
                  Google Data Processing Amendment
                </Link>
                <br />
                Privacy Policy:{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forge-primary hover:text-forge-secondary transition-colors"
                >
                  Google Privacy Policy
                </Link>
              </li>
              <li>
                <strong className="text-forge-primary">
                  Vercel (Hosting Provider)
                </strong>
                <br />
                Provider: Vercel Inc. (United States)
                <br />
                Purpose: Website hosting and content delivery
                <br />
                Data Processing Agreement:{" "}
                <Link
                  href="https://vercel.com/legal/dpa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forge-primary hover:text-forge-secondary transition-colors"
                >
                  Vercel Data Processing Agreement
                </Link>
                <br />
                Privacy Policy:{" "}
                <Link
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forge-primary hover:text-forge-secondary transition-colors"
                >
                  Vercel Privacy Policy
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-gray-300">
              All data processors are contractually bound to process personal
              data only in accordance with our instructions and GDPR
              requirements. We regularly review our data processors to ensure
              continued compliance.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Data Security */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          5. Data Security
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized or unlawful
            processing, accidental loss, destruction, or damage. These measures
            include:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>Encryption of sensitive information</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication procedures</li>
            <li>Secure development practices</li>
          </ul>
          <p className="mt-4">
            While we strive to protect your personal information, no method of
            transmission over the Internet or electronic storage is 100% secure.
            We cannot guarantee absolute security.
          </p>
        </div>
      </motion.section>

      {/* Data Retention */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          6. Data Retention
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We retain your personal data only for as long as necessary to
            fulfill the purposes for which we collected it, including for the
            purposes of satisfying any legal, accounting, or reporting
            requirements.
          </p>
          <p className="mt-4">
            The following are our specific data retention periods:
          </p>
          <ul className="space-y-2 text-gray-300">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Contact Form Data:</strong>{" "}
              Retained for 2 years from the date of last contact, unless a
              longer retention period is required by law or for legitimate
              business purposes.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <strong className="text-forge-primary">
                Email Communications:
              </strong>{" "}
              Retained for 3 years from the date of last communication, unless
              required longer for legal or contractual purposes.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Analytics Data:</strong>{" "}
              Google Analytics data is retained according to Google's data
              retention settings (default: 14 months). We may configure longer
              retention periods up to 50 months for aggregated analytics.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <strong className="text-forge-primary">
                Cookie Consent Data:
              </strong>{" "}
              Retained for 1 year from the date of consent, after which consent
              will be requested again.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <strong className="text-forge-primary">
                Technical Data (IP addresses, browser info):
              </strong>{" "}
              Retained for 90 days for security and fraud prevention purposes.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <strong className="text-forge-primary">
                Legal and Accounting Records:
              </strong>{" "}
              Retained for 7 years as required by Romanian tax and accounting
              laws.
            </motion.li>
          </ul>
          <p className="mt-4">
            In some circumstances, we may anonymize your personal data so that
            it can no longer be associated with you, in which case we may use
            such information indefinitely without further notice to you.
          </p>
          <p className="mt-4">
            If you request deletion of your personal data, we will delete it
            within 30 days of your request, unless we are required to retain it
            for legal or legitimate business purposes.
          </p>
        </div>
      </motion.section>

      {/* Cookie Policy */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          7. Cookies and Similar Technologies
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We use cookies and similar tracking technologies to collect and
            track information about how you use our website. Cookies are small
            text files that websites place on your device to store information
            about your browsing session.
          </p>
          <p className="mt-4">We use cookies to:</p>
          <ul className="space-y-2 text-gray-300">
            <li>Understand and save your preferences for future visits</li>
            <li>
              Compile aggregate data about site traffic and site interactions
            </li>
            <li>Enhance your user experience on our website</li>
          </ul>
          <p className="mt-4">
            You can set your browser to refuse all or some browser cookies or to
            alert you when websites set or access cookies. If you disable or
            refuse cookies, please note that some parts of this website may
            become inaccessible or not function properly.
          </p>
        </div>
      </motion.section>

      {/* Your Rights */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          8. Your Rights
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding
            your personal data, including:
          </p>
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              className="bg-forge-surface/30 border-forge-accent/5 rounded-lg border p-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h3 className="text-forge-primary mb-2 text-lg font-medium">
                Access
              </h3>
              <p className="text-gray-300">
                The right to request copies of your personal data
              </p>
            </motion.div>
            <motion.div
              className="bg-forge-surface/30 border-forge-accent/5 rounded-lg border p-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h3 className="text-forge-primary mb-2 text-lg font-medium">
                Rectification
              </h3>
              <p className="text-gray-300">
                The right to request correction of inaccurate data
              </p>
            </motion.div>
            <motion.div
              className="bg-forge-surface/30 border-forge-accent/5 rounded-lg border p-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h3 className="text-forge-primary mb-2 text-lg font-medium">
                Erasure
              </h3>
              <p className="text-gray-300">
                The right to request deletion of your personal data
              </p>
            </motion.div>
            <motion.div
              className="bg-forge-surface/30 border-forge-accent/5 rounded-lg border p-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h3 className="text-forge-primary mb-2 text-lg font-medium">
                Restriction
              </h3>
              <p className="text-gray-300">
                The right to request limiting of processing your data
              </p>
            </motion.div>
          </motion.div>
          <p className="mt-6">
            To exercise any of these rights, please contact us using the
            information provided in the &quot;Contact Us&quot; section below.
          </p>
          <div className="border-forge-accent/10 bg-forge-surface/30 mt-6 rounded-lg border p-4">
            <h3 className="text-forge-primary mb-2 text-lg font-medium">
              Right to Lodge a Complaint
            </h3>
            <p className="mb-2 text-gray-300">
              You have the right to lodge a complaint with a supervisory
              authority if you believe that our processing of your personal data
              violates data protection laws.
            </p>
            <p className="mb-2 text-gray-300">
              <strong className="text-forge-primary">
                National Authority for the Supervision of Personal Data
                Processing (ANSPDCP)
              </strong>
            </p>
            <p className="mb-2 text-gray-300">
              B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București, Romania
            </p>
            <p className="text-gray-300">
              Website:{" "}
              <Link
                href="https://www.dataprotection.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forge-primary hover:text-forge-secondary transition-colors"
              >
                www.dataprotection.ro
              </Link>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Changes to Policy */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          9. Changes to This Privacy Policy
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We may update this Privacy Policy from time to time in response to
            changing legal, technical, or business developments. When we update
            our Privacy Policy, we will take appropriate measures to inform you,
            consistent with the significance of the changes we make.
          </p>
          <p className="mt-4">
            We encourage you to periodically review this page for the latest
            information on our privacy practices.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          10. Contact Us
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
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

export default PrivacyPolicy;
