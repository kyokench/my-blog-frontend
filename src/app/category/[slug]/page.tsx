import { client } from '@/lib/sanity';
import { Post } from '@/types/post';
import PostCard from '@/components/PostCard';

interface CategoryPageProps {
  params: { slug: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  // Sanity.ioからカテゴリに属する記事を取得するクエリ
  // ここでは、postドキュメントに'categories'という配列フィールドがあり、
  // それがcategoryドキュメントへの参照を持つと仮定しています。
  // categoryドキュメントには'slug'フィールドがあるはずです。
  const category = await client.fetch(`
    *[_type == "category" && slug.current == "${slug}"][0]{
      title
    }
  `);

  const posts: Post[] = await client.fetch(`
    *[_type == "post" && references(*[_type == "category" && slug.current == "${slug}"]._id)]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body
    }
  `);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">カテゴリ: {category?.title || slug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}