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
  author: Author;
  tags: Tag[];
  publishDate: Date;
};
