import 'modern-normalize';
import css from './page.module.css';
import Container from '@/components/Container/Container';
import Link from 'next/link';

export default function Home() {
  return (
    <Container className={css.container}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Link href="/catalog/filter/all">View Now</Link>
    </Container>
  );
}
