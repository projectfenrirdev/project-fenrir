"use client";

import { COMPANY_INFO, CONTACT_INFO } from "@/lib/constants";
import { trackEmailClick, trackPhoneClick } from "@/lib/gtm";
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
        <h1 className="from-forge-primary to-forge-accent-DEFAULT mb-4 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent">
          Terms of Service
        </h1>
        <p className="text-gray-400">Last updated: January 7, 2026</p>
      </motion.div>

      {/* Introduction */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          1. Introduction and Acceptance
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            Welcome to {COMPANY_INFO.name}. These Terms of Service
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
      <motion.section variants={{ sectionVariants }} className="mb-10">
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
              Refers to {COMPANY_INFO.name}, our employees, contractors, and
              representatives.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <strong className="text-forge-primary">Services:</strong> Refers
              to any services provided by {COMPANY_INFO.name}, including but not
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
            {COMPANY_INFO.name} provides professional web and application
            development services, including but not limited to:
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
            agreement or contract between you and {COMPANY_INFO.name}. These
            Terms apply in addition to any specific agreement.
          </p>
        </div>
      </motion.section>

      {/* Pre-Contract Information */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          3.1. Pre-Contract Information
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            In accordance with EU consumer protection laws, before entering into
            a contract, we will provide you with the following information:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong className="text-forge-primary">Total Price:</strong> The
              total price of the services, including all taxes and fees, will be
              clearly stated in our proposal or quotation.
            </li>
            <li>
              <strong className="text-forge-primary">Payment Terms:</strong>{" "}
              Payment schedule, accepted payment methods, and any deposit
              requirements will be outlined in the agreement.
            </li>
            <li>
              <strong className="text-forge-primary">Delivery Timeline:</strong>{" "}
              Estimated completion date and key milestones will be provided in
              the project proposal.
            </li>
            <li>
              <strong className="text-forge-primary">
                Cancellation Policy:
              </strong>{" "}
              Your rights to cancel the contract, including any applicable
              withdrawal periods, will be explained in the agreement.
            </li>
            <li>
              <strong className="text-forge-primary">Contract Duration:</strong>{" "}
              For ongoing services, the duration and renewal terms will be
              clearly stated.
            </li>
            <li>
              <strong className="text-forge-primary">
                Digital Content Restrictions:
              </strong>{" "}
              If applicable, any restrictions on the use of digital content
              (licensing, usage rights, etc.) will be specified.
            </li>
          </ul>
          <p className="mt-4">
            All proposals and quotations are valid for 30 days from the date of
            issue, unless otherwise specified.
          </p>
        </div>
      </motion.section>

      {/* Client Responsibilities */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          4. Client Responsibilities
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>As a client of {COMPANY_INFO.name}, you agree to:</p>
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
              Pay all fees as set forth in your agreement with{" "}
              {COMPANY_INFO.name}
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
              {COMPANY_INFO.name} retains ownership of all pre-existing
              materials, proprietary tools, methods, and processes used to
              create the deliverables
            </li>
            <li>
              {COMPANY_INFO.name} may use general knowledge, skills, and
              experience acquired during the provision of services for other
              clients
            </li>
            <li>
              {COMPANY_INFO.name} reserves the right to display and link to
              completed projects as part of our portfolio and promotional
              materials
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
      <motion.section variants={{ sectionVariants }} className="mb-10">
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

          <div className="border-forge-accent/10 bg-forge-surface/30 mt-6 rounded-lg border p-4">
            <h3 className="text-forge-primary mb-3 text-lg font-medium">
              Refund Policy
            </h3>
            <p className="mb-2 text-gray-300">
              Deposits are generally non-refundable as they secure our
              commitment to your project and cover initial planning and resource
              allocation. However, refunds may be available in the following
              circumstances:
            </p>
            <ul className="ml-4 space-y-1 text-gray-300">
              <li>
                <strong>{COMPANY_INFO.name}'s breach:</strong> If we materially
                breach the agreement and fail to remedy it within 14 days of
                notice, you may be entitled to a full or partial refund.
              </li>
              <li>
                <strong>Force majeure:</strong> If the project cannot be
                completed due to circumstances beyond either party's control
                (natural disasters, pandemics, etc.), refunds will be calculated
                based on work completed.
              </li>
              <li>
                <strong>Mutual agreement:</strong> If both parties agree to
                terminate the project early, refunds will be negotiated based on
                work completed and expenses incurred.
              </li>
              <li>
                <strong>Legal requirements:</strong> If required by applicable
                consumer protection laws, refunds will be provided in accordance
                with such laws.
              </li>
            </ul>
            <p className="mt-4 text-gray-300">
              All refund requests must be made in writing and will be processed
              within 30 days of approval.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Scope Changes */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          6.1. Scope Changes and Change Requests
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            We understand that project requirements may evolve during
            development. The following procedures apply to scope changes:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong className="text-forge-primary">
                Change Request Process:
              </strong>{" "}
              All scope changes must be requested in writing and will be
              evaluated for impact on timeline, budget, and technical
              feasibility.
            </li>
            <li>
              <strong className="text-forge-primary">Approval Required:</strong>{" "}
              No work on scope changes will commence until both parties have
              agreed in writing to the revised scope, timeline, and pricing.
            </li>
            <li>
              <strong className="text-forge-primary">Impact Assessment:</strong>{" "}
              We will provide a detailed impact assessment within 5 business
              days of receiving a change request, including estimated additional
              costs and timeline adjustments.
            </li>
            <li>
              <strong className="text-forge-primary">Minor Changes:</strong>{" "}
              Minor adjustments that do not affect timeline or budget may be
              accommodated without formal change orders, at our discretion.
            </li>
            <li>
              <strong className="text-forge-primary">Change Orders:</strong>{" "}
              Approved changes will be documented in a written change order that
              becomes part of the original agreement.
            </li>
          </ul>
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
              {COMPANY_INFO.name} will not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use of our services
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
      <motion.section variants={{ sectionVariants }} className="mb-10">
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
              Refunds for advance payments will be calculated based on work
              completed and expenses incurred, unless specified otherwise in our
              agreement or required by applicable law
            </li>
            <li>
              All rights and licenses granted will terminate, except as
              otherwise expressly stated in these Terms
            </li>
            <li>
              Each party will return or destroy confidential information
              belonging to the other party
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Project Delays */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          8.1. Project Delays and Remedies
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            While we strive to meet all project deadlines, delays may occur due
            to various factors:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong className="text-forge-primary">
                Client-Caused Delays:
              </strong>{" "}
              Delays caused by late provision of materials, delayed approvals,
              or scope changes requested by the client will extend the project
              timeline accordingly.
            </li>
            <li>
              <strong className="text-forge-primary">
                Third-Party Delays:
              </strong>{" "}
              Delays caused by third-party services (hosting, domain
              registration, etc.) are beyond our control and will extend the
              timeline.
            </li>
            <li>
              <strong className="text-forge-primary">Force Majeure:</strong>{" "}
              Delays due to circumstances beyond reasonable control (natural
              disasters, pandemics, etc.) will not constitute a breach.
            </li>
            <li>
              <strong className="text-forge-primary">Remedies:</strong> If
              delays are caused by {COMPANY_INFO.name} without reasonable
              excuse, we will work diligently to minimize the delay and may
              offer compensation such as extended support periods or reduced
              fees, as agreed between the parties.
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
            submit to the exclusive jurisdiction of the courts of Bucharest,
            Romania.
          </p>

          <div className="border-forge-accent/10 bg-forge-surface/30 mt-6 rounded-lg border p-4">
            <h3 className="text-forge-primary mb-3 text-lg font-medium">
              EU Online Dispute Resolution
            </h3>
            <p className="mb-2 text-gray-300">
              If you are a consumer or business located in the European Union,
              you may use the EU Online Dispute Resolution (ODR) platform to
              resolve disputes. The ODR platform is a web-based tool that allows
              consumers and traders to resolve disputes out-of-court.
            </p>
            <p className="mb-2 text-gray-300">
              You can access the ODR platform at:{" "}
              <Link
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forge-primary hover:text-forge-secondary transition-colors"
              >
                https://ec.europa.eu/consumers/odr
              </Link>
            </p>
            <p className="text-gray-300">
              Our email address for ODR purposes is: {CONTACT_INFO.email}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Modifications */}
      <motion.section variants={{ sectionVariants }} className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          10. Modifications to Terms
        </h2>
        <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
          <p>
            {COMPANY_INFO.name} reserves the right to modify these Terms at any
            time. We will provide notice of significant changes by updating the
            date at the top of these Terms and potentially by other means, such
            as email.
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
      <motion.section variants={{ sectionVariants }} className="mb-10">
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

export default TermsOfService;
