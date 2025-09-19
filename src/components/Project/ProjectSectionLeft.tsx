import Image from "next/image";

const ProjectSectionLeft = ({
  title,
  description,
  siteName,
  technologies,
  downloadUrl,
  imageLight,
  imageDark,
}: {
  title: string;
  description: string;
  siteName: string;
  technologies: string[];
  downloadUrl: string;
  imageLight: string | null;
  imageDark: string | null;
}) => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* متن سمت چپ */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                {title}
              </h3>
              <p className="mb-6 text-base text-body-color">{description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-black dark:text-white">Site Name:</h4>
                <p>{siteName}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-black dark:text-white">Technologies Used:</h4>
                <ul className="list-disc list-inside">
                  {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black dark:text-white">Download / Access:</h4>
                <a dir="ltr" href={downloadUrl} className="text-blue-600 underline" target="_blank">
                  {downloadUrl}
                </a>
              </div>
            </div>
          </div>

          {/* تصویر سمت راست */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image src={imageLight || "/None.jpg"} alt="project image" fill className="dark:hidden" />
              <Image src={imageDark || "/None.jpg"} alt="project image dark" fill className="hidden dark:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSectionLeft;
