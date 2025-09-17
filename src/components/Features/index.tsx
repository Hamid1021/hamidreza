import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="مهارت‌های من"
            paragraph="هر خط کدی که می‌نویسم، حاصل سال‌ها تجربه، آزمون و اشتیاقه. از طراحی رابط‌های کاربری روان گرفته تا معماری امن و مقیاس‌پذیر، مهارت‌هام ترکیبیه از هنر و مهندسی. اینجا، جاییه که تخصص با خلاقیت گره می‌خوره."
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
