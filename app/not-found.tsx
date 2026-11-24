import { Metadata } from 'next';
import css from './not-found.module.css';
import Image from 'next/image';
import not_found from '/public/not-found.png';
import Container from '@/components/Container/Container';

export const metadata: Metadata = {
  title: '404 - Page not found | NoteHub',
  description: 'Sorry, the page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <Container className={css.section}>
      <div className={css.img_container}>
        <Image src={not_found} className={css.image} alt="" fill loading="eager" sizes="400" />
      </div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
    </Container>
  );
}
