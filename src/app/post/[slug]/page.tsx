import { client } from '@/lib/sanity'

type Props = {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = params

  const query = `*[_type == "post" && slug.current == $slug][0]{ title, body }`
  const post = await client.fetch(query, { slug })

  if (!post) {
    return <div>記事が見つかりませんでした。</div>
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose prose-lg">
        {post.body && post.body.map((block: any, i: number) => (
          <p key={i}>{block.children[0].text}</p>
        ))}
      </div>
    </main>
  )
}
