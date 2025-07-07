import Link from 'next/link';
import { client } from '@/lib/sanity';
import { Category } from '@/types/category';

const Sidebar = async ({ className }: { className?: string }) => {
  const categories: Category[] = await client.fetch(`*[_type == "category"]{ _id, title, slug }`);

  return (
    <aside className={`w-64 p-4 bg-gray-100 rounded-lg shadow-md ${className}`}>
      <h3 className="text-xl font-bold mb-4">Categories</h3>
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
    </aside>
  );
};

export default Sidebar;
