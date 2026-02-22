import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { load_first_blogs } from "./actions";
import SingleBlog from "@/components/Blog/SingleBlog";
import BlogPaginator from "./components/BlogPaginator";

export const metadata: Metadata = {
  title: "حمیدرضا رضایی" + " | " + "پست ها",
  description: "سلام به همه! من حمیدرضا رضایی هستم. ✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ،  ASP.NET  و Next.js است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! ‍به دنیای دیجیتال خوش آمدید! ",
};

export const revalidate = 60

const Blog = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
  const page = parseInt((await searchParams).page || "1");
  const limit = 6;
  const offset = (page - 1) * limit;
  const { data, pagination } = await load_first_blogs(limit, offset);

  return (
    <>
      <Breadcrumb
        pageName="پست‌های من"
        description="اینجا جاییه که تجربه‌هام، چالش‌هام و کشف‌های روزانه‌م رو با شما به اشتراک می‌ذارم. از نکات فنی گرفته تا نگاه‌های فلسفی به دنیای کد، هر پست تلاشی‌ست برای ساختن ارتباطی واقعی و الهام‌بخش اوه تا یادم نرفته از خاطراتم هم براتون میگم."
      />

      <section className="pb-[120px] dark:text-blue-100">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {data.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
          <BlogPaginator currentPage={page} totalPages={Math.ceil(Number(pagination?.total) / limit)} hasMore={Boolean(pagination?.hasMore)} ></BlogPaginator>
        </div>
      </section>
    </>
  );
};

export default Blog;
