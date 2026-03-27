'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import css from './Hero.module.css';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        const newText = current.slice(0, text.length + 1);
        setText(newText);

        if (newText === current) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        const newText = current.slice(0, text.length - 1);
        setText(newText);

        if (newText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.imageContainer}>
          <div className={css.image}>
            <Image
              src="/133994646257805288.jpg"
              alt="profile"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={css.textContainer}>
          <h1 className={css.title}>
            Hi, I am <span>Valeriia Danylo</span>
          </h1>

          <h2 className={css.typing}>
            I am <span>{text}</span>
          </h2>

          <p className={css.deskription}>
            I build modern, scalable and user-friendly web applications.
            Passionate about creating clean UI, smooth UX and high-performance
            solutions using React, Next.js and modern technologies.
          </p>

          <div className={css.buttonsContainer}>
            <a href="@ValeriiaDanylo" target="_blank" className={css.primary}>
              Contact me
            </a>

            <a href="/cv.pdf" download className={css.secondary}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
