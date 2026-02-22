import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="max-w-[850px] text-center">
            <h1 className="mb-6 text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              وبسایت شخصی حمیدرضا رضایی
            </h1>
            <p className="mb-12 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              سلام! من{" "}
              <span className="font-bold underline underline-offset-4">
                حمیدرضا رضایی
              </span>{" "}
              هستم 🚀✨. برنامه‌نویسی برای من فقط کدنویسی نیست—یه سفر و ماجراجویی تو دنیای بی‌پایان منطق و زیبایی 🌐💻.
              تخصصم در فریم‌ورک‌های{" "}
              <span className="font-semibold text-blue-500">Django</span> 🐍،{" "}
              <span className="font-semibold text-purple-500">ASP.NET</span> 🚀 و{" "}
              <span className="font-semibold text-pink-500">Next.js</span> 🌟 است و منو مجهز کرده تا تجربه‌های دیجیتال رو با ظرافت خلق کنم.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                target="_blank"
                href="https://github.com/Hamid1021"
                className="px-8 py-4 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                گیت‌هاب من
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 rounded-lg text-blue-500 dark:text-pink-400 font-semibold border-2 border-blue-500 dark:border-pink-400 hover:bg-blue-50 dark:hover:bg-pink-900 transition-colors duration-300"
              >
                تماس با من
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVG ها با opacity و blur */}
      <div className="absolute right-0 top-0 z-[-1] opacity-20 lg:opacity-60">
        {/* SVG اول */}
        <svg width="450" height="556" viewBox="0 0 450 556" fill="none">
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="-54" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1] opacity-20 lg:opacity-60">
        {/* SVG دوم */}
        <svg width="364" height="201" viewBox="0 0 364 201" fill="none">
          <circle cx="220" cy="63" r="43" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)">
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;