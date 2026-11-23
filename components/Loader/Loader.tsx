import css from './Loader.module.css';

interface LoaderProps {
  h2: string;
  p: string;
}

export default function Loader({ h2, p }: LoaderProps) {
  return (
    <>
      <div className={css.loader} role="status" aria-label="Loading" />
      <h2 className={css.h2}>{h2}</h2>
      <p>{p}</p>
    </>
  );
}
