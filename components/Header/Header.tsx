'use client';

import Link from 'next/link';
import css from './Header.module.css';
import { useState } from 'react';
import Menu from '../Menu/Menu';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

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
            <Link href="/" className={css.active}>
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <Menu isOpen={burgerOpen} onClose={() => setBurgerOpen(false)} />
    </>
  );
};

export default Header;
