'use client';

import Link from 'next/link';
import Container from '../Container/Container';
import css from './Header.module.css';
import logo from '/public/Logo.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <Container className={css.section}>
        {' '}
        <Link className={`${css.link} ${css.logo_link}`} href="/" aria-label="Home">
          <Image className={css.logo} src={logo} alt="logo" fill priority />
        </Link>
        <nav className={css.desktop_menu}>
          <ul className={css.nav}>
            <li className={css.nav_item}>
              <Link
                href="/"
                className={`${css.nav_link} ${pathname === '/' ? css.active : ''}`}
                prefetch={false}
              >
                Home
              </Link>
            </li>
            <li className={css.nav_item}>
              <Link
                href="/catalog/filter/all"
                className={`${css.nav_link} ${pathname.startsWith('/catalog') ? css.active : ''}`}
                prefetch={false}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
