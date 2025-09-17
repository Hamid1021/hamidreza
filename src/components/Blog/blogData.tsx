import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "چطور رابط‌های کاربری روان و زنده بسازیم؟",
    paragraph:
      "در این پست، تجربه‌هام از طراحی UIهایی که نه‌تنها زیبا بلکه حس‌برانگیز هستند رو به اشتراک می‌ذارم. از Tailwind تا React، همه چیز درباره‌ی حرکت و معناست.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "حمیدرضا رضایی",
      image: "/images/logoMe.png",
      designation: "Fullstack Developer",
    },
    tags: ["UI", "React", "Tailwind"],
    publishDate: "2025-09-01",
  },
  {
    id: 2,
    title: "امنیت در معماری Django و Next.js",
    paragraph:
      "چطور می‌تونیم معماری پروژه‌هامون رو طوری طراحی کنیم که هم مقیاس‌پذیر باشه و هم امن؟ اینجا درباره‌ی تجربه‌هام در طراحی سطوح دسترسی و جلوگیری از آسیب‌پذیری‌ها نوشتم.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "حمیدرضا رضایی",
      image: "/images/logoMe.png",
      designation: "Architectural Reviewer",
    },
    tags: ["Security", "Architecture", "Django", "Next.js"],
    publishDate: "2025-09-08",
  },
  {
    id: 3,
    title: "وقتی کد شاعر می‌شود: نگاهی فلسفی به برنامه‌نویسی",
    paragraph:
      "آیا کدنویسی فقط منطق و ساختار است؟ یا می‌تونه مثل شعر، حامل احساس و معنا باشه؟ در این پست، از تجربه‌های شخصی‌ام در برخورد با زیبایی در کد نوشتم.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "حمیدرضا رضایی",
      image: "/images/logoMe.png",
      designation: "Code Poet",
    },
    tags: ["Philosophy", "Coding", "Creativity"],
    publishDate: "2025-09-15",
  },
];
export default blogData;
