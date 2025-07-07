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
  title: string;
  body: BodyBlock[];
  slug: {
    current: string;
  };
}
