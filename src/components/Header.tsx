
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">私のブログ</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>
              <Link href="/about">このブログについて</Link>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
