
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="明日劇場 Logo" width={40} height={40} />
          <span className="text-xl font-bold">明日劇場</span>
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-400 transition-colors">首页</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">关于我们</Link>
          <Link href="/media" className="hover:text-blue-400 transition-colors">媒体报道</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>首页</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>关于我们</Link>
            <Link href="/media" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>媒体报道</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

