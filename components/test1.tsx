import Test2 from './test2';
import NestedServer from './test3';

export default function Test1() {
  const isClientRender = typeof window !== 'undefined';

  if (isClientRender) {
    console.log('Client-side rendering (CSR)');
  } else {
    console.log('Server-side rendering (SSR)');
  }

  return (
    <div>
      <div>test1</div>
      <Test2>
        <NestedServer />
      </Test2>
    </div>
  );
}
