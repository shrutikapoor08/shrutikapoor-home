import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="top-0">
      <nav className="bg-white flex items-center justify-between flex-wrap bg-teal p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/talk">Talks</Link>
        </div>
      </nav>
    </header>
  );
}
