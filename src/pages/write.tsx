import { useContext, useState } from 'react';
import PostPublish from '../components/write/PostPublish';
import Tap from '../components/write/Tap';
import ModalContext from '../context/modalContext';

export type WriteProps = {};

function Write({}: WriteProps) {
  const [isOpen, SetisOpen] = useState(false);

  return (
    <>
      <Tap isOpen={isOpen} SetisOpen={SetisOpen} />
      <PostPublish isOpen={isOpen} SetisOpen={SetisOpen} />
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
