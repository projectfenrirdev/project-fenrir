"use client";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion/motion-tags";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-12rem)] items-center justify-center px-4">
      <div className="mx-auto max-w-2xl text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Large 404 number */}
          <h1 className="text-forge-primary mb-6 text-8xl font-bold md:text-9xl">
            404
          </h1>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
            Page Not Found
          </h2>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="mb-8 text-lg text-gray-400 md:text-xl">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/">
            <Button
              variant="default"
              size="lg"
              className="bg-forge-primary hover:bg-forge-primary/90 text-white"
            >
              <HomeIcon className="mr-2 size-5" />
              Back to Home
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </div>
  );
}
