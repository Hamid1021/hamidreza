import ProjectSectionLeft from "@/components/Project/ProjectSectionLeft";
import ProjectSectionRight from "@/components/Project/ProjectSectionRight";
import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";
import { getAllProjects } from "./projects/actions";
import { Project } from "@prisma/client";

export const metadata: Metadata = {
  title: "حمیدرضا رضایی",
  description: "سلام به همه! من حمیدرضا رضایی هستم. ✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ،  ASP.NET  و Next.js است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! ‍به دنیای دیجیتال خوش آمدید! ",
};

export const revalidate = 60

export default async function Home() {
  const projects = await getAllProjects(3);
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <SectionTitle
        title="پروژه‌های من"
        paragraph="در این قسمت می تونید پروژه های عمومی من رو مشاهده کنید که هر کدوم با تکنولوژی‌های مختلف و هدف‌های متفاوت ساخته شدن."
        center
        mb="0"
      />

      {projects.map((project: Project, index: number) =>
        index % 2 === 0 ? (
          <ProjectSectionLeft
            key={project.url}
            title={project.title}
            description={project.description}
            siteName={project.siteName}
            technologies={project.technologies}
            downloadUrl={project.url}
            imageLight={project.imageLight}
            imageDark={project.imageDark}
          />
        ) : (
          <ProjectSectionRight
            key={project.url}
            title={project.title}
            description={project.description}
            siteName={project.siteName}
            technologies={project.technologies}
            downloadUrl={project.url}
            imageLight={project.imageLight}
            imageDark={project.imageDark}
          />
        )
      )}

      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 my-10">
        <Link
          href="/projects"
          className="inline-block rounded-md shadow-md drop-shadow-lg bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
        >
          همه پروژه ها
        </Link>
      </div>

      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
