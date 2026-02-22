"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-black border-t border-gray-200/50 dark:border-white/10">

      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              حمیدرضا رضایی
            </h3>

            <p className="text-body-color  dark:text-blue-100 dark:text-white/70 leading-relaxed">
              برنامه‌نویسی برای من فقط کدنویسی نیست؛
              ترکیبی از منطق، طراحی و تجربه کاربریه.
              با Django، ASP.NET و Next.js وب‌سایت‌هایی می‌سازم
              که هم سریع باشن هم حس خوب منتقل کنن.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-black dark:text-white">
              دسترسی سریع
            </h4>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-body-color  dark:text-blue-100 dark:text-white/70 hover:text-primary transition-all duration-300 hover:pr-2"
                >
                  پست‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-body-color  dark:text-blue-100 dark:text-white/70 hover:text-primary transition-all duration-300 hover:pr-2"
                >
                  درباره من
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-black dark:text-white">
                بیا همکاری کنیم 🚀
              </h4>
              <p className="text-body-color  dark:text-blue-100 dark:text-white/70 mb-6">
                اگر ایده‌ای داری یا پروژه‌ای تو ذهنته،
                خوشحال میشم درباره‌ش صحبت کنیم.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-block w-fit rounded-xl bg-primary px-6 py-3 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              شروع گفتگو
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-body-color  dark:text-blue-100 dark:text-white/60">
          <p>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>
          <p>توسعه داده شده با ❤️ توسط حمیدرضا رضایی</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;