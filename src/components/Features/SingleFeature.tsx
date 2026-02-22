import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full dark:text-blue-100">
      <div className="wow fadeInUp transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl rounded-xl p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
        <div className="relative mb-6 flex items-center justify-center">
          {/* <div className="absolute h-[125px] w-[125px] rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-30 blur-2xl"></div> */}
          <span className="h-[90px] w-[90px] text-white text-2xl animate-pulse">{icon}</span>
        </div>

        <h3 className="mb-3 text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-blue-100">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;