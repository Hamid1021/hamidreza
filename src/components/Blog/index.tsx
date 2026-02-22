import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import Link from "next/link";
import { load_first_blogs } from "@/app/blog/actions";


const Blog = async () => {
  const { data: blogs } = await load_first_blogs(3, 0, true);

  return (
    <section
      id="blog"
      className="py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="پست‌های ثابت"
          paragraph="اینجا جاییه که تجربه‌هام، چالش‌هام و کشف‌های روزانه‌م رو با شما به اشتراک می‌ذارم. از نکات فنی گرفته تا نگاه‌های فلسفی به دنیای کد، هر پست تلاشی‌ست برای ساختن ارتباطی واقعی و الهام‌بخش اوه تا یادم نرفته از خاطراتم هم براتون میگم."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full dark:text-blue-100">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-6 flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Link
          href="/blog/"
          className="inline-block rounded-md shadow-md drop-shadow-lg bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
        >
          همه پست ها
        </Link>
      </div>
    </section>
  );
};

export default Blog;
