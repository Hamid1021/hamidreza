import ProjectSectionLeft from "@/components/Project/ProjectSectionLeft";
import ProjectSectionRight from "@/components/Project/ProjectSectionRight";

import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import { getAllProjects } from "./actions";
import { Project } from "@prisma/client";

export const revalidate = 60

export const metadata: Metadata = {
  title: "حمیدرضا رضایی" + " | " + "پروژه ها",
  description:
    "در این صفحه مجموعه‌ای از پروژه‌های عمومی و منتخب من قرار گرفته که با استفاده از تکنولوژی‌های روز مثل Next.js، React، Prisma و TailwindCSS توسعه داده شده‌اند. هر پروژه هدف خاصی داشته و بخشی از مسیر یادگیری و تجربه‌ی من در دنیای برنامه‌نویسی بوده.",
};

const ProjectsPage = async () => {
  const projects = await getAllProjects();

  return (
    <>
      <section className="py-32">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
