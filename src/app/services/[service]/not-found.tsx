import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-5xl font-bold text-white">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-gray-300">
        Service Not Found
      </h2>
      <p className="mb-8 text-gray-400">
        The service you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/#services">
        <Button className="border-forge-primary bg-forge-primary hover:bg-forge-primary/90">
          <ArrowLeftIcon className="mr-2 size-4" />
          Back to Services
        </Button>
      </Link>
    </div>
  );
}
