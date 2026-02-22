"use client"; // ← حتما برای Framer Motion

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

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
      <div className="container mx-auto px-4">
        <motion.div
          className="-mx-4 flex flex-wrap items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* متن سمت چپ */}
          <motion.div variants={item} className="w-full px-4 lg:w-1/2 mb-10 lg:mb-0">
            <motion.div
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">{title}</h3>
              <p className="mb-6 text-base text-gray-700 dark:text-blue-100">{description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-black dark:text-white">نام سایت:</h4>
                <p>{siteName}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-black dark:text-white">تکنولوژی‌ها:</h4>
                <ul className="list-disc list-inside">
                  {technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black dark:text-white">لینک:</h4>
                <a
                  dir="ltr"
                  href={downloadUrl}
                  className="text-blue-600 underline hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {downloadUrl}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* تصویر سمت راست */}
          <motion.div variants={item} className="w-full px-4 lg:w-1/2 flex justify-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={imageLight || "/None.jpg"}
                alt="project image"
                width={4000}
                height={4000}
                className="dark:hidden w-full h-[500px] object-cover rounded-2xl"
              />
              <Image
                src={imageDark || "/None.jpg"}
                alt="project image dark"
                width={4000}
                height={4000}
                className="hidden dark:block w-full h-[500px] object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSectionLeft;