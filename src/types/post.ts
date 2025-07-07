// src/types/post.ts

export type Post = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: {
    [key: string]: any;
  }[];
};
