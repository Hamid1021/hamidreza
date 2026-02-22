import Image from "next/image";

const ProjectSectionRight = ({
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
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image src={imageLight || "/None.jpg"} alt="project image" width={4000} height={4000} className="dark:hidden w-auto h-[500px]" />
              <Image src={imageDark || "/None.jpg"} alt="project image dark" width={4000} height={4000} className="hidden dark:block w-auto h-[500px]" />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                {title}
              </h3>
              <p className="mb-6 text-base text-body-color">{description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-black dark:text-white">نام سایت:</h4>
                <p>{siteName}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-black dark:text-white">تکنولوژی‌های استفاده شده:</h4>
                <ul className="list-disc list-inside">
                  {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black dark:text-white">لینک مستقیم:</h4>
                <a dir="ltr" href={downloadUrl} className="text-blue-600 underline" target="_blank">
                  {downloadUrl}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSectionRight;
