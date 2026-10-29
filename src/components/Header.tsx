import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  isDashboard?: boolean;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className={cn('absolute inset-x-0 top-0 z-50', isHome ? 'text-white' : 'bg-[#f8f8f5] text-[#24463F]', className)}>
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        <Link to="/" className="font-serif text-xl font-medium tracking-tight hover:opacity-80">Patronus Labs</Link>
        <a href={isHome ? '#reach-out' : '/#reach-out'} className="text-sm font-medium underline-offset-4 hover:underline">
          Reach out
        </a>
      </div>
    </header>
  );
};

export default Header;
