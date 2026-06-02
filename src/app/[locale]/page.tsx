import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Timeline from "@/components/Timeline";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import LeetCode from "@/components/LeetCode";
import ProjectSection from "@/components/ProjectSection";
import HomeOverview from "@/components/HomeOverview";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen font-sans">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      <HomeOverview />

      <Timeline>
        <Experience />
        <Education />
        <LeetCode />
        <Projects />
      </Timeline>

      <ProjectSection />
    </main>
  );
}
