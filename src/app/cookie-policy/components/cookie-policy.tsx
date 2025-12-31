"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CookiePreferences from "./cookie-preferences";
import { CONTACT_INFO } from "@/lib/constants";

const CookiePolicy = () => {
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
          Cookie Policy
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
            This Cookie Policy explains what cookies are and how Project Fenrir
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses them on
            our website. We encourage you to read this policy in order to
            understand what cookies are, how we use them, the types of cookies
            we use, and how you can control them.
          </p>
          <p>
            By using our website, you consent to the use of cookies in
            accordance with this Cookie Policy. If you do not agree to our use
            of cookies, you should set your browser settings accordingly or not
            use our website.
          </p>
        </div>
      </motion.section>

      {/* What Are Cookies */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          2. What Are Cookies
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            Cookies are small text files that are placed on your computer,
            smartphone, or other device when you visit a website. They are
            widely used to make websites work more efficiently and provide
            information to the website owners.
          </p>
          <p className="mt-4">Cookies serve various functions, including:</p>
          <ul className="space-y-2 text-gray-300">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Authentication:</strong>{" "}
              Recognizing you when you return to our website
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Security:</strong>{" "}
              Supporting security features and detecting malicious activity
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Functionality:</strong>{" "}
              Remembering your preferences and settings
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Analytics:</strong> Helping
              us understand how visitors interact with our website
            </motion.li>
          </ul>
        </div>
      </motion.section>

      {/* Types of Cookies We Use */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          3. Types of Cookies We Use
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>We use the following types of cookies on our website:</p>

          <motion.div
            className="mt-6 grid gap-4 md:grid-cols-2"
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
                Essential Cookies
              </h3>
              <p className="text-gray-300">
                These cookies are necessary for the website to function
                properly. They enable core functionality such as security,
                network management, and account access. You cannot opt out of
                these cookies.
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
                Performance Cookies
              </h3>
              <p className="text-gray-300">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
                They help us improve the way our website works.
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
                Functionality Cookies
              </h3>
              <p className="text-gray-300">
                These cookies enable enhanced functionality and personalization,
                such as videos and live chat. They may be set by us or by
                third-party providers whose services we have added to our pages.
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
                Targeting Cookies
              </h3>
              <p className="text-gray-300">
                These cookies may be set through our site by our advertising
                partners. They may be used by those companies to build a profile
                of your interests and show you relevant advertisements on other
                sites.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Specific Cookies We Use */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          4. Specific Cookies We Use
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p className="mb-4">
            Here is a list of the main cookies we use and what we use them for:
          </p>

          <div className="overflow-x-auto">
            <table className="bg-forge-surface/30 border-forge-accent/10 min-w-full rounded-lg border">
              <thead>
                <tr className="border-forge-accent/10 border-b">
                  <th className="px-4 py-3 text-left text-white">
                    Cookie Name
                  </th>
                  <th className="px-4 py-3 text-left text-white">Type</th>
                  <th className="px-4 py-3 text-left text-white">Purpose</th>
                  <th className="px-4 py-3 text-left text-white">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-forge-accent/10 border-b">
                  <td className="px-4 py-3 text-gray-300">_ga</td>
                  <td className="px-4 py-3 text-gray-300">Performance</td>
                  <td className="px-4 py-3 text-gray-300">
                    Used by Google Analytics to distinguish users
                  </td>
                  <td className="px-4 py-3 text-gray-300">2 years</td>
                </tr>
                <tr className="border-forge-accent/10 border-b">
                  <td className="px-4 py-3 text-gray-300">_gid</td>
                  <td className="px-4 py-3 text-gray-300">Performance</td>
                  <td className="px-4 py-3 text-gray-300">
                    Used by Google Analytics to distinguish users
                  </td>
                  <td className="px-4 py-3 text-gray-300">24 hours</td>
                </tr>
                <tr className="border-forge-accent/10 border-b">
                  <td className="px-4 py-3 text-gray-300">_gat</td>
                  <td className="px-4 py-3 text-gray-300">Performance</td>
                  <td className="px-4 py-3 text-gray-300">
                    Used by Google Analytics to throttle request rate
                  </td>
                  <td className="px-4 py-3 text-gray-300">1 minute</td>
                </tr>
                <tr className="border-forge-accent/10 border-b">
                  <td className="px-4 py-3 text-gray-300">
                    cookieconsent_status
                  </td>
                  <td className="px-4 py-3 text-gray-300">Essential</td>
                  <td className="px-4 py-3 text-gray-300">
                    Remembers if you&apos;ve accepted our cookie policy
                  </td>
                  <td className="px-4 py-3 text-gray-300">1 year</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">session_id</td>
                  <td className="px-4 py-3 text-gray-300">Essential</td>
                  <td className="px-4 py-3 text-gray-300">
                    Maintains your session while browsing our site
                  </td>
                  <td className="px-4 py-3 text-gray-300">Session</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Add Cookie Preferences Component */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          5. Manage Your Cookie Preferences
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 mb-6 max-w-none">
          <p>
            You can update your cookie preferences at any time using the
            controls below. This allows you to choose which types of cookies you
            accept or reject while browsing our website.
          </p>
        </div>
        <CookiePreferences />
      </motion.section>

      {/* Third-Party Cookies */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          6. Third-Party Cookies
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            In addition to our own cookies, we may also use various third-party
            cookies to report usage statistics, deliver advertisements, and so
            on. These cookies may be placed by:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>Google Analytics</li>
            <li>Google Ads</li>
            <li>Facebook Pixel</li>
          </ul>
          <p className="mt-4">
            These third parties may have access to information about your use of
            our website. They may combine this information with other data they
            have collected independently about your online activities across
            different websites.
          </p>
          <p className="mt-4">
            We implement Google&apos;s Consent Mode v2 which ensures that
            Google&apos;s services respect your cookie preferences. Depending on
            your choices:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>If you accept Analytics cookies:</strong> Google Analytics
              will use cookies to collect data about your site usage.
            </li>
            <li>
              <strong>If you accept Marketing/Targeting cookies:</strong> Google
              may use cookies for advertising purposes, including ad
              personalization and user data processing.
            </li>
            <li>
              <strong>If you reject these cookies:</strong> Google services will
              respect your choice and limit data collection accordingly, though
              some basic site functionality measurement may still occur without
              using cookies.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Managing Cookies */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          7. Managing Your Cookie Preferences
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            Most web browsers allow you to manage your cookie preferences. You
            can:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>Delete cookies from your device</li>
            <li>
              Block cookies by activating the setting on your browser that
              allows you to refuse all or some cookies
            </li>
            <li>Set your browser to notify you when you receive a cookie</li>
          </ul>
          <p className="mt-4">
            Please note that if you choose to block all cookies (including
            essential cookies), you may not be able to access all or parts of
            our website and some features may not function properly.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-forge-primary mb-2 text-lg font-medium">
                Managing Cookies in Common Browsers
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong>Chrome:</strong> Settings &gt; Privacy and security
                  &gt; Cookies and other site data
                </li>
                <li>
                  <strong>Firefox:</strong> Options &gt; Privacy &amp; Security
                  &gt; Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies
                  and website data
                </li>
                <li>
                  <strong>Edge:</strong> Settings &gt; Cookies and site
                  permissions &gt; Cookies and site data
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cookie Consent */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          8. Cookie Consent
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            When you first visit our website, we will ask for your consent to
            set cookies. You can choose to accept all cookies, only essential
            cookies, or customize your preferences.
          </p>
          <p className="mt-4">
            You can change your cookie preferences at any time by clicking on
            the &quot;Cookie Settings&quot; link in the footer of our website.
          </p>
        </div>
      </motion.section>

      {/* Updates to Policy */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          9. Changes to This Cookie Policy
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in technology, regulation, or our business practices. Any
            changes will be posted on this page with an updated revision date.
          </p>
          <p className="mt-4">
            We encourage you to periodically review this Cookie Policy to stay
            informed about how we are using cookies.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={{ sectionVariants }}
        className="border-forge-primary/20 from-forge-primary/10 to-forge-secondary/10 mb-10 rounded-xl border bg-gradient-to-br p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          10. Contact Us
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            If you have any questions about this Cookie Policy or our data
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

export default CookiePolicy;
