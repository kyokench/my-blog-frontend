// src/app/post/[slug]/page.tsx
import { client } from '@/lib/sanity';
import { Post } from '@/types/post';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default async function PostPage(
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0]{ title, publishedAt, mainImage{ asset->{ _id, url } }, body }`;
  const post: Post | null = await client.fetch(query, { slug });

  if (!post) return <div>記事が見つかりませんでした。</div>;

  const imageUrl = post.mainImage ? post.mainImage.asset.url : '/next.svg'; // 仮の画像
  const publishedAt = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('ja-JP') : '日付不明';

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4 text-center">公開日: {publishedAt}</p>
      <div className="mb-8">
        <Image
          src={imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </div>
    </main>
  );
}
