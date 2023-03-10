import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export type MenuToggleProps = {
  toggle: MouseEventHandler<HTMLButtonElement>;
  isOpen?: boolean;
};

export type VariantsProps = {
  closed?: { d?: string; opacity?: number };
  open: { d?: string; opacity?: number };
};

export type PathProps = {
  variants?: VariantsProps;
  d?: string;
  transition?: { duration: number };
  isOpen: boolean;
  isdark: string;
};

function Path(props: PathProps) {
  return (
    <>
      {props.isdark == 'dark' ? (
        <motion.path
          fill={props.isOpen ? '#fff' : '#e4e5e7'}
          strokeWidth="3"
          stroke={props.isOpen ? '#fff' : '#e4e5e7'}
          strokeLinecap="round"
          {...props}
        />
      ) : (
        <motion.path
          fill={props.isOpen ? '#fff' : '#ffff'}
          strokeWidth="3"
          stroke={props.isOpen ? '#fff' : '#212529'}
          strokeLinecap="round"
          {...props}
        />
      )}
    </>
  );
}

function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  const { isdark } = useSelector((state: RootState) => state.core);

  return (
    <button
      className={`flex outline-none items-center cursor-pointer flex z-[999] ${
        isOpen == false ? '' : 'pl-4 h-[56px] pt-[2.375rem]'
      } `}
      onClick={toggle}>
      <svg width="20" height="20" viewBox="0 0 23 23">
        <Path
          isdark={isdark}
          isOpen={isOpen}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          isdark={isdark}
          isOpen={isOpen}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          isdark={isdark}
          isOpen={isOpen}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}

export default MenuToggle;
