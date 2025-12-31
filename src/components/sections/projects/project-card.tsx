"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectVariants } from "./animation-variants";

type ProjectProps = {
  project: {
    title: string;
    description?: string;
    image: string;
    link: string;
    tags?: string[];
  };
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectProps) => {
  return (
    <motion.div
      custom={index}
      variants={{ projectVariants }}
      className={`${index % 3 === 1 ? "md:mt-12" : index % 3 === 2 ? "md:mt-24" : ""}`}
    >
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-tl from-blue-600/30 to-purple-600/30 opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:shadow-blue-500/20">
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={450}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h3 className="group-hover:text-forge-secondary text-xl font-semibold transition-colors duration-300">
              {project.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm text-neutral-400">
              {project.description ||
                "Innovative digital solution crafted with precision and creativity."}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {/* Simple tag display using project type */}
                {project.tags?.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-300"
                  >
                    {tag}
                  </span>
                )) || (
                  <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-300">
                    Case Study
                  </span>
                )}
              </div>

              <span className="text-forge-secondary text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View Project →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
