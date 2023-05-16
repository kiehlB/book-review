export default function NestedServer() {
  const isClientRender = typeof window !== 'undefined';

  if (isClientRender) {
    console.log(' test3 Client-side rendering (CSR)');
  } else {
    console.log('test 3 Server-side rendering (SSR)');
  }
  return (
    <div>
      <h3>Nested Server</h3>
      <p>Nested server content</p>
    </div>
  );
}
