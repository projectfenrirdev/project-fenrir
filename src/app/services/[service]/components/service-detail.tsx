"use client";

import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import type { ServiceType } from "@/data/types";
import { trackCTAClick, trackPhoneClick } from "@/lib/gtm";
import { ServicePageTracker } from "@/components/service-page-tracker";
import { motion } from "framer-motion";
import { DynamicIcon } from "lucide-react/dynamic";
import { ArrowLeftIcon, CheckIcon, MessageCircleMoreIcon } from "lucide-react";
import Link from "next/link";

type ServiceDetailProps = {
  service: ServiceType;
};

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <>
      <ServicePageTracker
        serviceSlug={service.slug}
        serviceCategory="services"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8"
      >
        {/* Back Button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/#services">
            <Button
              variant="ghost"
              className="group border-forge-primary hover:bg-forge-primary/10 text-white hover:text-white"
            >
              <ArrowLeftIcon className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Button>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="from-forge-accent/20 to-forge-accent-dark/20 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg">
              <DynamicIcon
                name={service.icon}
                className="text-forge-accent size-8"
                aria-hidden="true"
                focusable="false"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                {service.text}
              </h1>
              {service.description && (
                <p className="mt-2 text-xl text-gray-300">
                  {service.description}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Long Description */}
        {service.longDescription && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-300">
                {service.longDescription}
              </p>
            </div>
          </motion.div>
        )}

        {/* Features Section */}
        {service.features && service.features.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">Key Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="from-forge-accent to-forge-accent-DEFAULT flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br">
                    <CheckIcon className="size-4 text-white" />
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Use Cases Section */}
        {service.useCases && service.useCases.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">Use Cases</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="hover:border-forge-accent/30 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/8"
                >
                  <p className="text-gray-300">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-forge-accent/30 rounded-xl border bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur-sm"
        >
          <h2 className="mb-4 text-2xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-gray-300">
            Let&apos;s discuss how we can help you achieve your goals with our{" "}
            {service.text.toLowerCase()} services.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={{ pathname: "/", hash: "#contact" }}
              onClick={() =>
                trackCTAClick(
                  "Get in Touch",
                  `service-${service.slug}`,
                  "/#contact",
                )
              }
            >
              <Button className="border-forge-primary bg-forge-primary hover:bg-forge-primary/90 shadow-forge-primary/20 hover:shadow-forge-primary/40 w-full border-2 py-5 text-base font-medium text-white shadow-lg focus:ring-2 focus:outline-none sm:w-auto">
                Get in Touch
                <MessageCircleMoreIcon
                  className="ml-2 size-5"
                  role="img"
                  aria-label="Get in touch icon"
                />
              </Button>
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              onClick={() => trackPhoneClick(CONTACT_INFO.phone)}
            >
              <Button
                variant="outline"
                className="border-forge-primary bg-forge-primary/10 hover:bg-forge-primary/20 w-full border-2 py-5 text-base font-medium text-white hover:border-white/40 hover:text-white sm:w-auto"
              >
                Call Us
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ServiceDetail;
