import { Feature } from "@/types/feature";
import Image from "next/image"

const featuresData: Feature[] = [
  // --- Backend & Python ---
  {
    id: 1,
    icon: <Image src={"/icons/Python.svg"} alt="Python" width={300} height={300} />,
    title: "Python",
    paragraph: "زبان برنامه‌نویسی چندمنظوره با اکوسیستم گسترده در وب، داده و هوش مصنوعی."
  },
  {
    id: 2,
    icon: <Image src={"/icons/Django.svg"} alt="Django" width={300} height={300} />,
    title: "Django",
    paragraph: "فریم‌ورک قدرتمند پایتون برای توسعه اپلیکیشن‌های وب مقیاس‌پذیر و امن."
  },
  {
    id: 3,
    icon: <Image src={"/icons/DjangoRESTAPI.svg"} alt="Django REST Framework" width={300} height={300} />,
    title: "Django REST Framework",
    paragraph: "ساخت APIهای استاندارد، ایمن و مقیاس‌پذیر با Django."
  },
  {
    id: 4,
    icon: <Image src={"/icons/DjangoORM.svg"} alt="Django ORM" width={300} height={300} />,
    title: "Django ORM",
    paragraph: "مدیریت پایگاه داده با نگاشت شیء-رابطه‌ای برای ساده‌سازی کوئری‌ها."
  },
  {
    id: 5,
    icon: <Image src={"/icons/FASTAPI.svg"} alt="FastAPI" width={300} height={300} />,
    title: "FastAPI",
    paragraph: "فریم‌ورک سریع و مدرن برای ساخت API با پشتیبانی از Async و تایپ‌هینت‌ها."
  },

  // --- Data Processing & AI ---
  {
    id: 6,
    icon: <Image src={"/icons/BeautifulSoup.svg"} alt="BeautifulSoup" width={300} height={300} />,
    title: "BeautifulSoup",
    paragraph: "ابزاری برای وب‌اسکرپینگ و پردازش داده‌های HTML و XML."
  },
  {
    id: 7,
    icon: <Image src={"/icons/Regex.svg"} alt="Regex" width={300} height={300} />,
    title: "Regex",
    paragraph: "ابزاری برای جستجو، فیلتر و پردازش متن با الگوهای انعطاف‌پذیر."
  },

  // --- Databases & Caching ---
  {
    id: 9,
    icon: <Image src={"/icons/SQLite.svg"} alt="SQLite" width={300} height={300} />,
    title: "SQLite",
    paragraph: "پایگاه داده سبک و ساده برای پروژه‌های کوچک و تستی."
  },
  {
    id: 10,
    icon: <Image src={"/icons/MySQL.svg"} alt="MySQL" width={300} height={300} />,
    title: "MySQL",
    paragraph: "پایگاه داده رابطه‌ای قدرتمند و پرکاربرد."
  },
  {
    id: 11,
    icon: <Image src={"/icons/MongoDB.svg"} alt="MongoDB" width={300} height={300} />,
    title: "MongoDB",
    paragraph: "پایگاه داده NoSQL برای ذخیره‌سازی منعطف و مقیاس‌پذیر."
  },
  {
    id: 12,
    icon: <Image src={"/icons/Redis.svg"} alt="Redis" width={300} height={300} />,
    title: "Redis",
    paragraph: "پایگاه داده درون‌حافظه‌ای برای کشینگ و صف‌های پردازش سریع."
  },

  // --- Frontend ---
  {
    id: 13,
    icon: <Image src={"/icons/HTML5.svg"} alt="HTML5" width={300} height={300} />,
    title: "HTML5",
    paragraph: "زبان استاندارد برای ساختاردهی محتوای صفحات وب."
  },
  {
    id: 14,
    icon: <Image src={"/icons/CSS3.svg"} alt="CSS3" width={300} height={300} />,
    title: "CSS3",
    paragraph: "ابزار قدرتمند برای استایل‌دهی و طراحی وب."
  },
  {
    id: 15,
    icon: <Image src={"/icons/TailwindCSS.svg"} alt="TailwindCSS" width={300} height={300} />,
    title: "TailwindCSS",
    paragraph: "فریم‌ورک CSS برای طراحی سریع، واکنش‌گرا و ماژولار."
  },
  {
    id: 16,
    icon: <Image src={"/icons/Bootstrap.svg"} alt="Bootstrap" width={300} height={300} />,
    title: "Bootstrap",
    paragraph: "فریم‌ورک CSS محبوب برای طراحی سریع رابط‌های کاربری."
  },
  {
    id: 17,
    icon: <Image src={"/icons/JavaScript.svg"} alt="JavaScript" width={300} height={300} />,
    title: "JavaScript",
    paragraph: "زبان اصلی وب برای ایجاد تعامل و پویایی."
  },
  {
    id: 18,
    icon: <Image src={"/icons/TypeScript.svg"} alt="TypeScript" width={300} height={300} />,
    title: "TypeScript",
    paragraph: "نسخه تایپ‌دار جاوااسکریپت برای توسعه امن‌تر و مقیاس‌پذیرتر."
  },
  {
    id: 19,
    icon: <Image src={"/icons/ReactJS.svg"} alt="ReactJS" width={300} height={300} />,
    title: "ReactJS",
    paragraph: "کتابخانه‌ای برای ساخت رابط‌های کاربری پویا و ماژولار."
  },
  {
    id: 20,
    icon: <Image src={"/icons/Nextjs.svg"} alt="Next.js" width={300} height={300} />,
    title: "Next.js",
    paragraph: "فریم‌ورک React برای SSR و ساخت وب‌سایت‌های بهینه و سریع."
  },
  {
    id: 21,
    icon: <Image src={"/icons/ReactNative.svg"} alt="React Native" width={300} height={300} />,
    title: "React Native",
    paragraph: "توسعه اپلیکیشن‌های موبایل کراس‌پلتفرم با قدرت React."
  },
  {
    id: 22,
    icon: <Image src={"/icons/AJAX.svg"} alt="AJAX" width={300} height={300} />,
    title: "AJAX",
    paragraph: "ارتباط ناهمزمان با سرور برای تجربه کاربری روان."
  },

  // --- DevOps & Tools ---
  {
    id: 23,
    icon: <Image src={"/icons/Docker.svg"} alt="Docker" width={300} height={300} />,
    title: "Docker",
    paragraph: "کانتینرسازی اپلیکیشن‌ها برای توسعه و استقرار یکپارچه."
  },
  {
    id: 24,
    icon: <Image src={"/icons/Git.svg"} alt="Git" width={300} height={300} />,
    title: "Git",
    paragraph: "سیستم کنترل نسخه برای مدیریت و همکاری در پروژه‌ها."
  },
  {
    id: 25,
    icon: <Image src={"/icons/Linux.svg"} alt="Linux" width={300} height={300} />,
    title: "Linux",
    paragraph: "سیستم‌عامل قدرتمند و امن برای توسعه و دیپلوی اپلیکیشن‌ها."
  },

  // --- Microsoft Stack ---
  {
    id: 26,
    icon: <Image src={"/icons/CSharp.svg"} alt="C#" width={300} height={300} />,
    title: "C#",
    paragraph: "زبان برنامه‌نویسی شی‌گرا و قدرتمند برای توسعه اپلیکیشن‌های ویندوز، وب و موبایل."
  },
  {
    id: 27,
    icon: <Image src={"/icons/ASPNETCore.svg"} alt="ASP.NET Core" width={300} height={300} />,
    title: "ASP.NET Core",
    paragraph: "فریم‌ورک مدرن مایکروسافت برای توسعه اپلیکیشن‌های وب و API."
  },
  {
    id: 28,
    icon: <Image src={"/icons/ASPNETMVC.svg"} alt="ASP.NET MVC" width={300} height={300} />,
    title: "ASP.NET MVC",
    paragraph: "فریم‌ورکی برای ساخت وب‌اپلیکیشن‌ها بر پایه الگوی Model-View-Controller."
  },
  {
    id: 29,
    icon: <Image src={"/icons/WinForm.svg"} alt="WinForms" width={300} height={300} />,
    title: "WinForms",
    paragraph: "ساخت رابط‌های کاربری دسکتاپ با C#."
  },
];

export default featuresData;
