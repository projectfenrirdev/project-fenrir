"use client";

import {
  ADDRESS_INFO,
  COMPANY_INFO,
  CONTACT_INFO,
  LEGAL_INFO,
} from "@/lib/constants";
import { trackEmailClick, trackPhoneClick } from "@/lib/gtm";
import { motion } from "framer-motion";
import Link from "next/link";

const GDPRCompliance = () => {
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
          GDPR Compliance
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
            At {COMPANY_INFO.name}, we are committed to protecting and
            respecting your privacy in compliance with the EU General Data
            Protection Regulation (GDPR). This GDPR Compliance Policy outlines
            how we collect, use, and protect your personal data.
          </p>
          <p>
            We have implemented appropriate technical and organizational
            measures to ensure that your data is processed in accordance with
            the GDPR principles. This page explains your rights under the GDPR
            and how you can exercise them.
          </p>
        </div>
      </motion.section>

      {/* Data Controller */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          2. Data Controller
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            {COMPANY_INFO.name} acts as the Data Controller for personal data
            collected through our website and services. As the Data Controller,
            we determine the purposes and means of processing your personal
            data.
          </p>
          <p className="mt-4">Our contact details are:</p>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong className="text-forge-primary">Company Name:</strong>{" "}
              {COMPANY_INFO.name}
            </li>
            <li>
              <strong className="text-forge-primary">Legal Form:</strong>{" "}
              {LEGAL_INFO.legalForm}
            </li>
            <li>
              <strong className="text-forge-primary">
                Registered Address:
              </strong>
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
              <br />
              {/* TODO: Add street address and postal code */}
              [Street Address, Postal Code - To be completed]
            </li>
            <li>
              <strong className="text-forge-primary">
                Company Registration Number:
              </strong>{" "}
              {/* TODO: Add company registration number */}
              [Company Registration Number - To be completed]
            </li>
            <li>
              <strong className="text-forge-primary">
                VAT Number (CUI/CIF):
              </strong>{" "}
              {/* TODO: Add VAT number if applicable */}
              [VAT Number - To be completed if applicable]
            </li>
            <li>
              <strong className="text-forge-primary">Email:</strong>{" "}
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-forge-primary hover:text-forge-secondary transition-colors"
                onClick={() => trackEmailClick(CONTACT_INFO.email)}
              >
                {CONTACT_INFO.email}
              </Link>
            </li>
            <li>
              <strong className="text-forge-primary">Phone:</strong>{" "}
              <Link
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-forge-primary hover:text-forge-secondary transition-colors"
                onClick={() => trackPhoneClick(CONTACT_INFO.phone)}
              >
                {CONTACT_INFO.phone}
              </Link>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Personal Data We Collect */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          3. Personal Data We Collect
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We may collect and process the following categories of personal
            data:
          </p>
          <ul className="space-y-2 text-gray-300">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Identity Data:</strong>{" "}
              First name, last name, username, or similar identifier
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Contact Data:</strong>{" "}
              Email address, telephone numbers, postal address
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Technical Data:</strong> IP
              address, browser type and version, time zone setting, operating
              system, and platform
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Usage Data:</strong>{" "}
              Information about how you use our website and services
            </motion.li>
          </ul>
        </div>
      </motion.section>

      {/* Purpose and Legal Basis */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          4. Purpose and Legal Basis for Processing
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We process your personal data for the following purposes and on the
            following legal bases:
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-forge-primary mb-2 text-lg font-medium">
                Contract Performance
              </h3>
              <p>
                Processing necessary for the performance of a contract with you
                or to take steps at your request before entering into a
                contract:
              </p>
              <ul className="ml-4 space-y-1 text-gray-300">
                <li>To provide our web development and application services</li>
                <li>To manage our relationship with you</li>
                <li>To process and deliver your order</li>
              </ul>
            </div>

            <div>
              <h3 className="text-forge-primary mb-2 text-lg font-medium">
                Legitimate Interests
              </h3>
              <p>
                Processing necessary for our legitimate interests, provided your
                interests and fundamental rights do not override those
                interests:
              </p>
              <ul className="ml-4 space-y-1 text-gray-300">
                <li>To improve our services and develop new features</li>
                <li>To analyze the use of our website</li>
                <li>
                  To protect our business against fraud and other illegal
                  activities
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-forge-primary mb-2 text-lg font-medium">
                Consent
              </h3>
              <p>Processing based on your consent:</p>
              <ul className="ml-4 space-y-1 text-gray-300">
                <li>To send you marketing communications</li>
                <li>To use cookies for non-essential purposes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-forge-primary mb-2 text-lg font-medium">
                Legal Obligation
              </h3>
              <p>Processing necessary to comply with our legal obligations:</p>
              <ul className="ml-4 space-y-1 text-gray-300">
                <li>To maintain business records for tax purposes</li>
                <li>To respond to requests from regulatory authorities</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Your Rights */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          5. Your Rights Under GDPR
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            Under the GDPR, you have the following rights regarding your
            personal data:
          </p>

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
                Right to Access
              </h3>
              <p className="text-gray-300">
                The right to request copies of your personal data that we hold
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
                Right to Rectification
              </h3>
              <p className="text-gray-300">
                The right to request that we correct any inaccurate or
                incomplete personal data
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
                Right to Erasure
              </h3>
              <p className="text-gray-300">
                The right to request that we delete your personal data in
                certain circumstances
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
                Right to Restriction
              </h3>
              <p className="text-gray-300">
                The right to request that we restrict the processing of your
                personal data
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
                Right to Data Portability
              </h3>
              <p className="text-gray-300">
                The right to request that we transfer your personal data to
                another organization or to you
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
                Right to Object
              </h3>
              <p className="text-gray-300">
                The right to object to the processing of your personal data in
                certain circumstances
              </p>
            </motion.div>
          </motion.div>

          <p className="mt-6">
            To exercise any of these rights, please contact us using the details
            provided in Section 9. We will respond to your request within one
            month. In certain circumstances, we may need to extend this period
            or charge a reasonable fee if your request is manifestly unfounded
            or excessive.
          </p>

          <div className="border-forge-accent/10 bg-forge-surface/30 mt-6 rounded-lg border p-4">
            <h3 className="text-forge-primary mb-2 text-lg font-medium">
              Right to Lodge a Complaint
            </h3>
            <p className="mb-2 text-gray-300">
              You have the right to lodge a complaint with a supervisory
              authority if you believe that our processing of your personal data
              violates the GDPR.
            </p>
            <p className="mb-2 text-gray-300">
              <strong className="text-forge-primary">
                National Authority for the Supervision of Personal Data
                Processing (ANSPDCP)
              </strong>
            </p>
            <p className="mb-2 text-gray-300">
              {LEGAL_INFO.dataProtectionAuthorityAddress}
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

      {/* Data Security */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          6. Data Security
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We have implemented appropriate technical and organizational
            measures to protect your personal data against unauthorized or
            unlawful processing, accidental loss, destruction, or damage. Our
            security measures include:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>Encryption of personal data where appropriate</li>
            <li>Regular security assessments of our systems and services</li>
            <li>Restricted access to personal data on a need-to-know basis</li>
            <li>
              Regular testing of the effectiveness of our security measures
            </li>
            <li>Staff training on data protection and security practices</li>
          </ul>
          <p className="mt-4">
            While we make every effort to protect your personal data, no method
            of transmission over the Internet or electronic storage is 100%
            secure. We cannot guarantee the absolute security of your data.
          </p>
        </div>
      </motion.section>

      {/* International Transfers */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          7. International Transfers
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We operate primarily within the European Economic Area (EEA).
            However, in some cases, your personal data may be transferred to,
            stored, or processed in countries outside the EEA where necessary
            for the provision of our services or other legitimate purposes.
          </p>
          <p className="mt-4">
            When we transfer personal data outside the EEA, we ensure that
            appropriate safeguards are in place to protect your data, such as:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              Transferring to countries that have been deemed to provide an
              adequate level of protection by the European Commission
            </li>
            <li>
              Using specific contracts approved by the European Commission that
              give personal data the same protection it has in Europe
            </li>
            <li>
              Implementing appropriate supplementary measures where necessary
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-forge-primary mb-3 text-lg font-medium">
              Third-Party Services Processing Data Outside the EEA
            </h3>
            <p className="mb-4 text-gray-300">
              The following third-party services may process your personal data
              outside the EEA:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong className="text-forge-primary">
                  Google Analytics & Google Tag Manager
                </strong>
                <br />
                Provider: Google LLC (United States)
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
                Safeguards: Standard Contractual Clauses (SCCs) approved by the
                European Commission
              </li>
              <li>
                <strong className="text-forge-primary">
                  Vercel (Hosting Provider)
                </strong>
                <br />
                Provider: Vercel Inc. (United States)
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
                Safeguards: Standard Contractual Clauses (SCCs) and Data
                Processing Agreement
              </li>
            </ul>
            <p className="mt-4 text-gray-300">
              All data processors have signed Data Processing Agreements (DPAs)
              with us, ensuring compliance with GDPR requirements for
              international data transfers.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Data Retention */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          8. Data Retention
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We retain your personal data only for as long as necessary to
            fulfill the purposes for which we collected it, including for the
            purposes of satisfying any legal, accounting, or reporting
            requirements.
          </p>
          <p className="mt-4">
            To determine the appropriate retention period for personal data, we
            consider:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>The amount, nature, and sensitivity of the personal data</li>
            <li>
              The potential risk of harm from unauthorized use or disclosure
            </li>
            <li>The purposes for which we process the data</li>
            <li>Whether we can achieve those purposes through other means</li>
            <li>Legal, regulatory, and contractual requirements</li>
          </ul>
          <p className="mt-4">
            In some circumstances, we may anonymize your personal data so that
            it can no longer be associated with you, in which case we may use
            such information without further notice to you.
          </p>

          <div className="mt-6">
            <h3 className="text-forge-primary mb-3 text-lg font-medium">
              Specific Data Retention Periods
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong className="text-forge-primary">
                  Contact Form Data:
                </strong>{" "}
                Retained for 2 years from the date of last contact, unless a
                longer retention period is required by law or for legitimate
                business purposes.
              </li>
              <li>
                <strong className="text-forge-primary">
                  Email Communications:
                </strong>{" "}
                Retained for 3 years from the date of last communication, unless
                required longer for legal or contractual purposes.
              </li>
              <li>
                <strong className="text-forge-primary">Analytics Data:</strong>{" "}
                Google Analytics data is retained according to Google's data
                retention settings (default: 14 months). We may configure longer
                retention periods up to 50 months for aggregated analytics.
              </li>
              <li>
                <strong className="text-forge-primary">
                  Cookie Consent Data:
                </strong>{" "}
                Retained for 1 year from the date of consent, after which
                consent will be requested again.
              </li>
              <li>
                <strong className="text-forge-primary">
                  Legal and Accounting Records:
                </strong>{" "}
                Retained for 7 years as required by Romanian tax and accounting
                laws.
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Data Breach Notification */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          9. Data Breach Notification
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            In the event of a personal data breach that is likely to result in a
            high risk to your rights and freedoms, we will notify you and the
            relevant supervisory authority without undue delay, and in any event
            within 72 hours of becoming aware of the breach, where feasible.
          </p>
          <p className="mt-4">Our notification will include:</p>
          <ul className="space-y-2 text-gray-300">
            <li>A description of the nature of the breach</li>
            <li>
              The categories and approximate number of individuals concerned
            </li>
            <li>The likely consequences of the breach</li>
            <li>
              The measures we have taken or propose to take to address the
              breach
            </li>
            <li>
              Recommendations for you to mitigate potential adverse effects
            </li>
          </ul>
          <p className="mt-4">
            We will notify you via email using the contact information you have
            provided, or through a prominent notice on our website if email
            notification is not possible.
          </p>
        </div>
      </motion.section>

      {/* Data Protection Officer */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          10. Data Protection Officer
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            {/* TODO: Update based on company size - DPO required if >250 employees or core activity is processing */}
            {COMPANY_INFO.name} does not currently have a designated Data
            Protection Officer (DPO) as we are not required to appoint one under
            GDPR Article 37. However, if you have any questions or concerns
            about data protection, please contact us using the information
            provided in Section 11.
          </p>
          <p className="mt-4">
            If we are required to appoint a DPO in the future due to changes in
            our operations or legal requirements, we will update this section
            accordingly.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          11. Contact Us
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            If you have any questions about this GDPR Compliance Policy or our
            data practices, or if you wish to exercise any of your rights under
            the GDPR, please contact us at:
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

      {/* Complaints */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          12. Complaints
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            If you have a concern about our privacy practices, including the way
            we have handled your personal data, you can report it to us using
            the contact details above.
          </p>
          <p className="mt-4">
            You also have the right to lodge a complaint with your local data
            protection authority. In {LEGAL_INFO.jurisdiction}, this is the{" "}
            {LEGAL_INFO.dataProtectionAuthority}
            the Supervision of Personal Data Processing (ANSPDCP).
          </p>
          <div className="mt-4">
            <p>
              <strong className="text-forge-primary">
                National Authority for the Supervision of Personal Data
                Processing
              </strong>
            </p>
            <p>B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București</p>
            <p>
              Website:{" "}
              <Link
                href="https://www.dataprotection.ro/"
                target="_blank"
                className="text-forge-primary hover:text-forge-secondary transition-colors"
              >
                www.dataprotection.ro
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

export default GDPRCompliance;
