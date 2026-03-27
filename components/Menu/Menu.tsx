'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import clsx from 'clsx';
import css from './Menu.module.css';
import { IoClose } from 'react-icons/io5';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: Props) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={clsx(css.overlay, isOpen && css.show)}
        onClick={onClose}
      />

      <aside className={clsx(css.menu, isOpen && css.open)}>
        <button className={css.closeBtn} onClick={onClose}>
          <IoClose />
        </button>
        <nav className={css.nav}>
          <Link
            href="/"
            onClick={onClose}
            className={clsx(pathname === '/' && css.active)}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className={clsx(pathname === '/about' && css.active)}
          >
            About
          </Link>

          <Link
            href="/projects"
            onClick={onClose}
            className={clsx(pathname === '/projects' && css.active)}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className={clsx(pathname === '/contact' && css.active)}
          >
            Contact
          </Link>
        </nav>

        <div className={css.socials}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </aside>
    </>
  );
}
