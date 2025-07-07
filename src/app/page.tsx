export const dynamic = "force-dynamic";

import { client } from '@/lib/sanity'
import { Post } from '@/types/post';
import Image from "next/image";
import Link from 'next/link'

export default async function Home() {
  const posts: Post[] = await client.fetch(`*[_type == "post"]{ _id, title, slug, body }`)

  return (
    <main className="max-w-3xl mx-auto p-8">
      <div className="flex flex-col items-center sm:items-start gap-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-3xl font-bold mb-4">ブログ記事一覧</h1>

        <div className="grid gap-6 w-full">
          {posts.map((post: Post) => (
            <div key={post._id} className="p-4 border rounded shadow hover:bg-gray-50">
              <Link href={`/post/${post.slug.current}`}>
                <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-700">
                {post.body && post.body[0]?.children[0]?.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap items-center justify-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </div>
    </main>
  )
}
