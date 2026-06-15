import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return [
    { id: "7" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProjectDetailClient id={resolvedParams.id} />;
}
