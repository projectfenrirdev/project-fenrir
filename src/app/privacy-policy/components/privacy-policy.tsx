"use client";

import { CONTACT_INFO } from "@/lib/constants";
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
        <h1 className="from-forge-primary to-forge-secondary mb-4 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-400">Last updated: June 15, 2024</p>
      </motion.div>

      {/* Introduction */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          1. Introduction
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            At Project Fenrir, we respect your privacy and are committed to
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
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
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
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
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

      {/* Cookie Policy */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          6. Cookies and Similar Technologies
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
          7. Your Rights
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
        </div>
      </motion.section>

      {/* Changes to Policy */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          8. Changes to This Privacy Policy
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
      <motion.section
        variants={{ sectionVariants }}
        className="border-forge-primary/20 from-forge-primary/10 to-forge-secondary/10 mb-10 rounded-xl border bg-gradient-to-br p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          9. Contact Us
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
              >
                {CONTACT_INFO.email}
              </Link>
            </p>
            <p className="flex items-center">
              <span className="mr-2">📱</span>
              <Link
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-forge-primary hover:text-forge-secondary transition-colors"
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
          className="from-forge-primary focus:ring-forge-primary/50 to-forge-secondary inline-flex items-center justify-center rounded-lg bg-linear-to-r px-6 py-3 font-medium text-white transition-transform hover:scale-105 focus:ring-2 focus:outline-none"
        >
          ← Return to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyPolicy;
