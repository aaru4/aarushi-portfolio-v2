'use client';

import { Award, BookOpen, Briefcase, FolderGit2, GraduationCap, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/', icon: Home, bg: 'var(--pink)' },
  { name: 'Education', href: '/eduPage', icon: GraduationCap, bg: 'var(--peach)' },
  { name: 'Experience', href: '/expPage', icon: Briefcase, bg: 'var(--mint)' },
  { name: 'Projects', href: '/projPage', icon: FolderGit2, bg: 'var(--teal)' },
  { name: 'Awards', href: '/awardPage', icon: Award, bg: 'var(--pink)' },
  { name: 'Publications', href: '/pubPage', icon: BookOpen, bg: 'var(--peach)' },
];

const ACTIVE_BG = 'rgba(33, 29, 28, 0.08)';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-soft)] bg-[var(--paper)]/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Link
          href="/"
          className="shrink-0 text-base font-bold tracking-tight text-[var(--ink)] transition-opacity hover:opacity-70 sm:text-lg"
        >
          <span className="sm:hidden">AA</span>
          <span className="hidden sm:inline">Aarushi Ammavajjala</span>
        </Link>

        <div className="flex min-w-0 items-center gap-1 overflow-x-auto sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-label={item.name}
                aria-current={isActive ? 'page' : undefined}
                title={item.name}
                className={`group flex shrink-0 items-center gap-2 rounded-full px-2.5 py-2 transition-all duration-300 sm:px-3 ${
                  isActive ? 'shadow-sm' : 'hover:-translate-y-0.5'
                }`}
                style={{ backgroundColor: isActive ? ACTIVE_BG : 'transparent' }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = `${item.bg}80`;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Icon size={18} strokeWidth={2} color="var(--ink)" />
                <span className="hidden text-sm font-medium text-[var(--ink)] md:inline">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
