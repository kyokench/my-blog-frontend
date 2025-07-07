
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const imageUrl = post.mainImage ? post.mainImage.asset.url : '/next.svg'; // 仮の画像
  const publishedAt = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('ja-JP') : '日付不明';

  return (
    <Link href={`/post/${post.slug.current}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={imageUrl}
        alt={post.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm mb-2">{publishedAt}</p>
        <p className="text-gray-700 text-base line-clamp-3">
          {post.body && post.body[0]?.children[0]?.text}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
