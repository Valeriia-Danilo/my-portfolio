'use client';

import Link from 'next/link';
import css from './Header.module.css';
import { useState } from 'react';
import Menu from '../Menu/Menu';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={css.header}>
        <div className={css.headerContainer}>
          <p className={css.logo}>VD</p>
          <button
            aria-label="Open menu"
            className={css.burgerButton}
            onClick={() => setBurgerOpen(true)}
            type="button"
          >
            <svg width="32" height="32" className={css.burgerIcon}>
              <use href="/sprite.svg#icon-menu" />
            </svg>
          </button>

          <nav className={css.nav}>
            <Link href="/" className={clsx(pathname === '/' && css.active)}>
              Home
            </Link>
            <Link
              href="/about"
              className={clsx(pathname === '/about' && css.active)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={clsx(pathname === '/projects' && css.active)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={clsx(pathname === '/contact' && css.active)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <Menu isOpen={burgerOpen} onClose={() => setBurgerOpen(false)} />
    </>
  );
};

export default Header;
