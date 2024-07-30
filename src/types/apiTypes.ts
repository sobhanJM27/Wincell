type IdSchema = {
  _id: string;
};

type CommentStatus = "pending" | "approved" | "rejected";

export type Category = IdSchema & {
  title: string;
  type: "course" | "blog";
};

export type Episode = IdSchema & {
  title: string;
  time: {
    min: number | string;
    seconds: number | string;
  };
};

export type Chapter = IdSchema & {
  title: string;
  time: {
    hour: number | string;
    min: number | string;
  };
  episodes: Episode[];
};

export type CommentProduct = IdSchema & {
  title: string;
};

export type Comment = IdSchema & {
  comment: string;
  createdAt: string;
  updatedAt: string;
  show: boolean;
  isShowAdmin: boolean;
  user: {
    first_name: string;
    last_name: string;
  };
  answer: Omit<Comment, "answer">[];
  status: CommentStatus;
  product: CommentProduct;
};

export type imageSlide = IdSchema & {
  title: string;
  subTitle: string;
  description: string;
  image: string;
};

export type Course = IdSchema & {
  title: string;
  short_text: string;
  Description: string;
  category: string;
  images: string[];
  price: number;
  discount: number;
  priceAfterDiscount: number;
  sortByNumber: number;
  createdAt: string;
  neededTime: {
    hour: number;
    minute: number;
  };
  level: string;
  owner: {
    image: string;
    name: string;
  };
  rating: {
    rate: number;
    count: number;
  };
  chapters: Chapter[];
  comments: Comment[];
  related: Course[];
  language: string;
  prerequisitesTxt: string;
  prerequisites: Course[];
  type: "online" | "offline";
  spotPlayerID: string;
};

export type Article = IdSchema & {
  author: {
    image: string;
    name: string;
  };
  title: string;
  short_text: string;
  description: string;
  category: string;
  images: string[];
  sortByNumber: number;
  createdAt: string;
  likes: number;
  view: number;
  comments: Comment[];
  related: [];
  latest: [];
};

export type User = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  courses: Course[];
  likes: {
    courses: Course[];
    articles: Article[];
  };
} & IdSchema;

export type Certificate = IdSchema & {
  title: string;
  createdAt: string;
  description: string;
  downloadUrl: string;
  course: CommentProduct;
  user: User;
  status: CommentStatus;
};

export type GetCourses = [
  string | undefined,
  number | undefined,
  string | undefined
];
export type GetArticles = GetCourses;

export type SearchResponse = {
  blog: Article[];
  course: Course[];
};
