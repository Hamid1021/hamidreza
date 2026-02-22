type Author = {
  name: string;
  image: string;
  designation: string;
};

type Tag = {
  id: number;
  name: string;
}

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  publishDate: Date;
  author: Author;
  tags: Tag[];
  priority_show?: number;         // optional, default 10000000
  meta_description: string | null;      // optional
  meta_keyword?: string | null;          // optional
  slug: string | null;                 // optional
};