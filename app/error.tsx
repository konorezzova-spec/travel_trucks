'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Помилка при завантаженні</h2>
      <p>Виникла непередбачена помилка.</p>
      <button onClick={reset}>Спробувати знову</button>
    </div>
  );
};

export default Error;
