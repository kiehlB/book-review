import Tap from '../components/write/Tap';
import Tiptap from '../components/write/Tiptap';

export type WriteProps = {};

function Write({}: WriteProps) {
  return (
    <div className="h-full">
      <Tap />
    </div>
  );
}

export default Write;
