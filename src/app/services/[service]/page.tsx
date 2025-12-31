import ServiceDetail from "@/app/services/[service]/components/service-detail";
import { SERVICES } from "@/lib/constants";
import { generatePageMetadata, organizationSchema, websiteSchema } from "@/lib/schema";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ service: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found | Project Fenrir",
    };
  }

  return generatePageMetadata(
    `${service.text} | Project Fenrir`,
    service.longDescription || service.description || `Professional ${service.text.toLowerCase()} services`,
    [organizationSchema, websiteSchema],
    `/services/${service.slug}`,
  );
}

const ServicePage = async ({ params }: Props) => {
  const { service: serviceSlug } = await params;
  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
};

export default ServicePage;
