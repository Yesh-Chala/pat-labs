import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  isDashboard?: boolean;
}

const links = [
  { to: '/blog', label: 'Blog' },
  { to: '/projects', label: 'Projects' },
  { to: '/research', label: 'Research' },
];

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      style={isHome ? { textShadow: '0 1px 8px rgba(0, 0, 0, 0.65)' } : undefined}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-200',
        isHome
          ? 'bg-transparent text-white'
          : 'border-b border-gray-200/70 bg-[#f8f8f5]/95 text-gray-950 backdrop-blur-md',
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-5 md:py-6">
        <NavLink to="/" className="font-serif text-xl font-medium tracking-tight hover:opacity-80">
          Patronus Labs
        </NavLink>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => cn(
                'text-sm font-medium transition-opacity hover:opacity-70',
                isActive ? 'underline underline-offset-8' : ''
              )}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(open => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="flex w-6 flex-col gap-1.5">
            <span className={cn('block h-0.5 w-6 bg-current transition-transform', menuOpen && 'translate-y-1 rotate-45')} />
            <span className={cn('block h-0.5 w-6 bg-current transition-transform', menuOpen && '-translate-y-1 -rotate-45')} />
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-gray-200 bg-[#f8f8f5] px-6 py-6 text-gray-950 md:hidden">
          <div className="flex flex-col gap-6">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className="text-lg font-medium">
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
