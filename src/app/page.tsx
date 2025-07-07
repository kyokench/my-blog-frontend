export const dynamic = "force-dynamic";

import { client } from '@/lib/sanity'
import { Post } from '@/types/post';
import PostCard from '@/components/PostCard';

export default async function Home() {
  const posts: Post[] = await client.fetch(`*[_type == "post"]{ _id, title, slug, publishedAt, mainImage{ asset->{ _id, url } }, body }`)

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">最新記事</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  )
}
