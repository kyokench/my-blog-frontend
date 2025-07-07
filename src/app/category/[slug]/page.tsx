import { client } from '@/lib/sanity';
import { Post } from '@/types/post';
import PostCard from '@/components/PostCard';

export default async function CategoryPage({
  params,
}: { 
  params: { slug: string };
}) {
  const { slug } = params;

  const posts: Post[] = await client.fetch(
    `*[_type == "post" && $slug in categories[]->slug.current]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage{ asset->{ _id, url } },
      body
    }`,
    { slug }
  );

  const categoryTitle = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0].title`,
    { slug }
  );

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Category: {categoryTitle || slug}</h1>
        <p className="text-center">このカテゴリの記事は見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Category: {categoryTitle || slug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
