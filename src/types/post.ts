// src/types/post.ts

export interface Child {
  _key: string;
  _type: string;
  text: string;
}

export interface BodyBlock {
  _key: string;
  _type: string;
  children: Child[];
}

export interface Post {
  /** ← これを追加 */
  _id: string;

  title: string;
  slug: {
    current: string;
  };
  body: BodyBlock[];
}
