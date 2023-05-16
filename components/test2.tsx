'use client';

export default function Test2({ children }: any) {
  const isClientRender = typeof window !== 'undefined';

  if (isClientRender) {
    console.log('child Client-side rendering (CSR)');
  } else {
    console.log('child erver-side rendering (SSR)');
  }

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
