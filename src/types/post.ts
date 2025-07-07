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

import { Category } from './category';

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: {
    asset: {
      url: string;
    };
  };
  publishedAt?: string;
  body: BodyBlock[];
  categories?: Category[];
}
