import Link from 'next/link';
import { client } from '@/lib/sanity';
import { Category } from '@/types/category';

const Sidebar = async ({ className }: { className?: string }) => {
  const categories: Category[] = await client.fetch(`*[_type == "category"]{ _id, title, slug }`);

  return (
    <aside className={`w-64 p-4 bg-gray-100 rounded-lg shadow-md ${className}`}>
      <h3 className="text-xl font-bold mb-4">カテゴリー</h3>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category._id} className="mb-2">
              {category.slug && category.slug.current ? (
                <Link href={`/category/${category.slug.current}`} className="text-blue-600 hover:underline">
                  {category.title}
                </Link>
              ) : (
                <span className="text-gray-500">{category.title} (No slug)</span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">著者について</h3>
        <div className="flex items-center mb-4">
          <img
            src="/ogp.png" // Replace with your actual profile image path
            alt="Author Profile"
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="font-semibold text-lg">あなたの名前</p> {/* Replace with your name */}
            <p className="text-gray-600 text-sm">簡単な自己紹介やキャッチフレーズ</p> {/* Replace with your bio */}
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          ここに著者に関するより詳細な説明を記述します。興味のあること、ブログの内容、読者と共有したいことなどを記述できます。
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
