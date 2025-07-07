// src/app/post/[slug]/page.tsx
import { client } from '@/lib/sanity';
import { Post, BodyBlock } from '@/types/post';


export default async function PostPage(
  { params }: { params: { slug: string } }   // ← ここだけで OK
) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0]{ title, body }`;
  const post: Post | null = await client.fetch(query, { slug });

  if (!post) return <div>記事が見つかりませんでした。</div>;

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose prose-lg">
        {post.body?.map((block: BodyBlock) => (
          <p key={block._key}>{block.children[0]?.text}</p>
        ))}
      </div>
    </main>
  );
}
