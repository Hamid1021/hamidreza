import Image from "next/image";
import moment from "moment-jalaali";
// import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { getBlogByIdAndSlug } from "./actions/actions";
import { Blog } from "@/types/blog";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string, id: string }>
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog: Blog | null = await getBlogByIdAndSlug(Number((await params).id), (await params).slug);

  if (!blog) {
    return {
      title: "پست یافت نشد | حمیدرضا رضایی",
      description: "پستی با این شناسه یافت نشد.",
    };
  }

  const {
    title,
    paragraph,
    image,
    meta_description,
    meta_keyword,
    id,
    slug,
    tags,
    publishDate,
    author,
  } = blog;

  const description =
    typeof meta_description == 'string' && meta_description?.trim() || paragraph?.slice(0, 160) || "";

  const keywords =
    meta_keyword ||
    (tags && tags.length > 0 ? tags.map((t) => t.name).join(", ") : "");

  const blogUrl = `https://hamidrezarezaii.ir/blog/${slug}/${id}`;

  return {
    metadataBase: new URL(blogUrl),
    title: `${title} | حمیدرضا رضایی`,
    description: description,
    keywords: keywords,
    authors: author ? [{ name: author.name }] : undefined,
    openGraph: {
      title: `${title} | حمیدرضا رضایی`,
      description: description,
      url: blogUrl,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "حمیدرضا رضایی",
      type: "article",
      publishedTime: publishDate.toISOString(),
      authors: author ? [author.name] : [],
      tags: tags?.map((t) => t.name) || [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | حمیدرضا رضایی`,
      description: description,
      images: [image],
    },
  };
}

const BlogDetailsPage = async ({ params }: { params: Promise<{ slug: string, id: string }> }) => {
  const blog: Blog | null = await getBlogByIdAndSlug(Number((await params).id), (await params).slug);

  if (!blog) return <div className="text-center py-20">این مطلب یافت نشد</div>;

  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <section className="pb-[120px] pt-[150px] dark:text-blue-100">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            {/* Title */}
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              {title}
            </h2>

            {/* Author + Date + Tags */}
            <div className="mb-4 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:text-blue-100 dark:border-opacity-10">
              <div className="flex flex-wrap items-center dark:text-blue-100">
                <div className="mb-5 ml-10 flex items-center">
                  <div className="ml-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image src={author.image} alt={author.name} fill />
                    </div>
                  </div>
                  <div className="w-full">
                    <span className="mb-1 text-base font-medium text-body-color  dark:text-blue-100">
                      توسط <span>{author.name}</span>
                    </span>
                    <p className="text-xs text-body-color  dark:text-blue-100">{author.designation}</p>
                  </div>
                </div>

                <div className="mb-5 flex items-center">
                  <p className="ml-5 flex items-center text-base font-medium text-body-color  dark:text-blue-100">
                    <span className="ml-3">
                      اخرین بروز رسانی
                    </span>
                    {moment(publishDate).format(" HH:MM jYYYY/jMM/jDD")}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Image */}
            {
              image != "/None.jpg" ?
                <div className="mb-4 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image src={image} alt={title} fill className="object-cover object-center" />
                  </div>
                </div>
                :
                ''
            }

            {/* Content */}
            <div
              className="prose prose-base sm:prose-lg mx-auto dark:text-blue-100 mb-8 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed"
              style={{
                fontFamily: 'Vazir, sans-serif',
                lineHeight: 2,
              }}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            ></div>

            {/* Tags + Share */}
            <div className="items-center justify-between sm:flex">
              <div className="mb-5">
                <h4 className="mb-3 text-sm font-medium text-body-color  dark:text-blue-100">
                  برچسب ها :
                </h4>
                <div className="flex items-center flex-wrap gap-2">
                  {tags.map((tag) => (
                    <TagButton key={tag.id} text={tag.name} />
                  ))}
                </div>
              </div>
              {/* <div className="mb-5">
                <h5 className="mb-3 text-sm font-medium text-body-color  dark:text-blue-100 sm:text-right">
                  Share this post :
                </h5>
                <div className="flex items-center sm:justify-end">
                  <SharePost />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;