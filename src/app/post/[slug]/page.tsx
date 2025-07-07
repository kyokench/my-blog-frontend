import { client } from '@/lib/sanity';
import { Post, BodyBlock } from '@/types/post'; // 型をインポート

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0]{ title, body }`;
  const post: Post | null = await client.fetch(query, { slug }); // 型を指定

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose prose-lg">
        {post.body && post.body.map((block: BodyBlock, i: number) => (
          <p key={block._key || i}>{block.children[0]?.text}</p>
        ))}
      </div>
    </main>
  );
}
