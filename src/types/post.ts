// src/types/post.ts

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: {
    children: {
      text: string;
    }[];
  }[]; // body が配列の場合
}