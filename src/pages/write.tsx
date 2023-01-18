import PageLayout from '../components/layout/PageLayout';
import Tap from '../components/write/Tap';

export type WriteProps = {};

function Write({}: WriteProps) {
  return (
    <>
      <Tap />
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default Write;
