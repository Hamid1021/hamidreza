import { Blog } from "@/types/blog";
import Image from "next/image";
// import Link from "next/link";
import moment from 'moment-jalaali'
import Link from "next/link";


const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark h-full"
        data-wow-delay=".1s"
      >
        <Link
          href={`/blog-details/${blog.id}`}
          className="relative block aspect-[37/22] w-full"
        >
          {
            tags.length > 0 &&
            <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
              {tags[0].name}
            </span>
          }
          <Image src={image} alt="image" fill />
        </Link>
        {/* <div
          className="relative block aspect-[37/22] w-full"
        >
          {
            tags.length > 0 &&
            <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
              {tags[0].name}
            </span>
          }
          <Image src={image} alt="image" fill />
        </div> */}
        <div className="flex flex-col p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <div className="h-[80px]">
            <h3>
              <Link
                href={`/blog-details/${blog.id}`}
                className="mb-4 line-clamp-2 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              >
                {title}
              </Link>
              {/* <div
                className="mb-4 line-clamp-2 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              >
                {title}
              </div> */}
            </h3>
          </div>
          <p className="mb-6 h-[100px] line-clamp-4 text-base font-medium text-body-color dark:text-white" dangerouslySetInnerHTML={{ __html: paragraph }}>
          </p>
          <div className="flex items-center justify-between h-[60px] pt-4 border-t border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={author.image} alt="author" fill />
              </div>
              <div>
                <h4 className="text-sm font-medium text-dark dark:text-white">
                  {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-dark dark:text-white text-center">
                آخرین بروز رسانی
              </h4>
              <p className="text-xs text-body-color">{moment(publishDate).format('HH:m:ss jYYYY/jMM/jDD')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
