import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28 dark:text-blue-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="مهارت‌های من"
          paragraph="هر خط کدی که می‌نویسم، حاصل سال‌ها تجربه، آزمون و اشتیاقه. از طراحی رابط‌های کاربری روان گرفته تا معماری امن و مقیاس‌پذیر، مهارت‌هام ترکیبیه از هنر و مهندسی. اینجا، جاییه که تخصص با خلاقیت گره می‌خوره."
          center
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl rounded-xl p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <SingleFeature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;