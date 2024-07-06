import Link from 'next/link';
import { getGlobalData } from '../utils/global-data';

export default function Header({ name }) {
  const globalData = getGlobalData();

  return (
    <header className="mt-5">
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6 menu">
        <div className="block text-xl flex-grow lg:flex lg:items-center lg:w-auto">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/talks">Talks</Link>
        </div>
      </nav>
    </header>
  );
}
