"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TermsOfService = () => {
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
      variants={{ containerVariants }}
    >
      {/* Header */}
      <motion.div variants={{ itemVariants }} className="mb-10 text-center">
        <h1 className="from-forge-primary to-forge-secondary mb-4 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent">
          Terms of Service
        </h1>
        <p className="text-gray-400">Last updated: June 15, 2024</p>
      </motion.div>

      {/* Introduction */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          1. Introduction and Acceptance
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            Welcome to Project Fenrir. These Terms of Service
            (&quot;Terms&quot;) govern your use of our website, services, and
            products. By accessing or using our services, you agree to be bound
            by these Terms and our Privacy Policy.
          </p>
          <p>
            Please read these Terms carefully before using our services. If you
            do not agree with any part of these Terms, you may not use our
            services.
          </p>
        </div>
      </motion.section>

      {/* Definitions */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          2. Definitions
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <ul className="space-y-2 text-gray-300">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Company/We/Us:</strong>{" "}
              Refers to Project Fenrir, our employees, contractors, and
              representatives.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Services:</strong> Refers
              to any services provided by Project Fenrir, including but not
              limited to web development, application development, e-commerce
              solutions, consultation, and maintenance.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Client/You:</strong> Refers
              to individuals, businesses, or entities that engage our services
              or use our website.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Deliverables:</strong>{" "}
              Refers to the products, services, designs, code, or other
              materials developed by us for you as part of our services.
            </motion.li>
          </ul>
        </div>
      </motion.section>

      {/* Service Description */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          3. Description of Services
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            Project Fenrir provides professional web and application development
            services, including but not limited to:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>Custom website design and development</li>
            <li>E-commerce website development</li>
            <li>Mobile and web application development</li>
            <li>Website and application maintenance</li>
            <li>Technical consultation</li>
            <li>Hosting and domain registration assistance</li>
          </ul>
          <p className="mt-4">
            The specific services to be provided will be detailed in a written
            agreement or contract between you and Project Fenrir. These Terms
            apply in addition to any specific agreement.
          </p>
        </div>
      </motion.section>

      {/* Client Responsibilities */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          4. Client Responsibilities
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>As a client of Project Fenrir, you agree to:</p>
          <ul className="space-y-2 text-gray-300">
            <li>
              Provide accurate and timely information as required for the
              completion of services
            </li>
            <li>
              Review and provide feedback on deliverables within agreed
              timeframes
            </li>
            <li>
              Pay all fees as set forth in your agreement with Project Fenrir
            </li>
            <li>
              Obtain and maintain any necessary licenses, permissions, or
              consents required for us to perform the services
            </li>
            <li>Comply with all applicable laws and regulations</li>
            <li>
              Take responsibility for the content you provide to us, ensuring it
              does not violate any third-party rights
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Intellectual Property */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          5. Intellectual Property Rights
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>Unless otherwise specified in a written agreement:</p>
          <ul className="space-y-2 text-gray-300">
            <li>
              Upon full payment of all applicable fees, you will own the final
              deliverables specifically created for you
            </li>
            <li>
              Project Fenrir retains ownership of all pre-existing materials,
              proprietary tools, methods, and processes used to create the
              deliverables
            </li>
            <li>
              Project Fenrir may use general knowledge, skills, and experience
              acquired during the provision of services for other clients
            </li>
            <li>
              Project Fenrir reserves the right to display and link to completed
              projects as part of our portfolio and promotional materials
            </li>
          </ul>
          <p className="mt-4">
            Any third-party materials (such as open-source software, stock
            images, or plugins) incorporated into the deliverables are subject
            to their respective licenses and terms.
          </p>
        </div>
      </motion.section>

      {/* Payment Terms */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          6. Payment Terms
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>Our payment terms include:</p>
          <ul className="space-y-2 text-gray-300">
            <li>
              All prices are quoted in the currency specified in our proposal or
              agreement
            </li>
            <li>
              A non-refundable deposit (typically 30-50% of the total project
              fee) is required before commencement of work
            </li>
            <li>
              Payment schedules will be outlined in our agreement, typically
              including milestone payments for larger projects
            </li>
            <li>Invoices are due upon receipt unless otherwise specified</li>
            <li>
              Late payments may be subject to a fee of 2% per month on overdue
              amounts
            </li>
            <li>
              For ongoing services, we reserve the right to suspend services if
              payment is not received within 14 days after the due date
            </li>
          </ul>
          <p className="mt-4">
            Additional work requested beyond the scope of the original agreement
            will be quoted separately and requires your approval before
            commencement.
          </p>
        </div>
      </motion.section>

      {/* Limitation of Liability */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          7. Limitation of Liability
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>To the maximum extent permitted by law:</p>
          <ul className="space-y-2 text-gray-300">
            <li>
              Project Fenrir will not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of our services
            </li>
            <li>
              Our total liability for any claims arising from or related to our
              services shall not exceed the amount you paid us for the services
              giving rise to the claim
            </li>
            <li>
              We do not guarantee that our services will be error-free or
              uninterrupted, or that any defects will be corrected
            </li>
            <li>
              We are not responsible for any loss of data, revenue, or profits
              resulting from the use of our services
            </li>
          </ul>
          <p className="mt-4">
            These limitations apply even if we have been advised of the
            possibility of such damages.
          </p>
        </div>
      </motion.section>

      {/* Termination */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          8. Termination
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            Either party may terminate the services under the following
            conditions:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>By mutual agreement in writing</li>
            <li>
              If the other party breaches any material term of the agreement and
              fails to remedy such breach within 14 days of receiving notice
            </li>
            <li>
              If the other party becomes insolvent, bankrupt, or enters into
              liquidation or receivership
            </li>
          </ul>
          <p className="mt-4">Upon termination:</p>
          <ul className="space-y-2 text-gray-300">
            <li>
              You must pay for all services performed up to the date of
              termination
            </li>
            <li>
              Any advance payments for work not performed are non-refundable,
              unless specified otherwise in our agreement
            </li>
            <li>
              All rights and licenses granted will terminate, except as
              otherwise expressly stated in these Terms
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Governing Law */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          9. Governing Law and Dispute Resolution
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of Romania, without regard to its conflict of law
            provisions.
          </p>
          <p className="mt-4">
            Any dispute arising out of or relating to these Terms or our
            services shall first be attempted to be resolved through good faith
            negotiations. If such negotiations fail, both parties agree to
            submit to the exclusive jurisdiction of the courts in Romania.
          </p>
        </div>
      </motion.section>

      {/* Modifications */}
      <motion.section
        variants={{ sectionVariants }}
        className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          10. Modifications to Terms
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            Project Fenrir reserves the right to modify these Terms at any time.
            We will provide notice of significant changes by updating the date
            at the top of these Terms and potentially by other means, such as
            email.
          </p>
          <p className="mt-4">
            Your continued use of our services after such modifications
            constitutes your acceptance of the updated Terms. If you do not
            agree to the modified Terms, you should stop using our services.
          </p>
        </div>
      </motion.section>

      {/* Miscellaneous */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          11. Miscellaneous Provisions
        </h2>
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
              Severability
            </h3>
            <p className="text-gray-300">
              If any provision of these Terms is found to be unenforceable, the
              remaining provisions will remain in full force and effect.
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
              No Waiver
            </h3>
            <p className="text-gray-300">
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of such right or provision.
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
              Assignment
            </h3>
            <p className="text-gray-300">
              You may not assign any of your rights or obligations under these
              Terms without our prior written consent.
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
              Force Majeure
            </h3>
            <p className="text-gray-300">
              Neither party shall be liable for any failure or delay resulting
              from events beyond reasonable control.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={{ sectionVariants }}
        className="border-forge-primary/20 from-forge-primary/10 to-forge-secondary/10 mb-10 rounded-xl border bg-gradient-to-br p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">
          12. Contact Us
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <p className="flex items-center">
              <span className="mr-2">📧</span>
              <Link
                href="mailto:projectfenrir@yahoo.com"
                className="text-forge-primary hover:text-forge-secondary transition-colors"
              >
                projectfenrir@yahoo.com
              </Link>
            </p>
            <p className="flex items-center">
              <span className="mr-2">📱</span>
              <Link
                href="tel:+40727892022"
                className="text-forge-primary hover:text-forge-secondary transition-colors"
              >
                +40 727 892 022
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

export default TermsOfService;
