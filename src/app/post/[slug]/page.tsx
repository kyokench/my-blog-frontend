import { client } from '@/lib/sanity';
import { Post, BodyBlock } from '@/types/post';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0]{ title, body }`;
  const post: Post | null = await client.fetch(query, { slug });

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose prose-lg">
        {post.body && post.body.map((block: BodyBlock) => (
          <p key={block._key}>{block.children[0]?.text}</p>
        ))}
      </div>
    </main>
  );
}

// 以下を追加
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ slug }`;
  const posts: Post[] = await client.fetch(query);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}
