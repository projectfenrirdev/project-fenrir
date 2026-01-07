import { COMPANY_INFO } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY_INFO.name} - Professional Web Development`,
    short_name: COMPANY_INFO.shortName,
    description: COMPANY_INFO.description,
    start_url: "/",
    display: "standalone",
    background_color: "#111",
    theme_color: "#f78228", // Fenrir Orange
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
