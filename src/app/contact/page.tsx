import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "حمیدرضا رضایی" + " | " + "تماس با من",
  description: "سلام به همه! من حمیدرضا رضایی هستم. ✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ،  ASP.NET  و Next.js است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! ‍به دنیای دیجیتال خوش آمدید! ",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="اگر سوالی دارید از فرم زیر استفاده نمایید"
        description="پاسخ شما به ایمیل شما ارسال خواهد شد"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
