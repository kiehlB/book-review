import clsx from 'clsx';
import type { Variant } from 'framer-motion';
import { motion, useReducedMotion } from 'framer-motion';
import Link, { LinkProps } from 'next/link';
import { ElementState, useElementState } from '../../hooks/useElementState';
import { ArrowIcon } from '../../svg/arrow.icon';
import { H6 } from './Typography';

type ArrowIconProps = React.ComponentProps<typeof ArrowIcon>;

export const arrowVariants: Record<
  ArrowIconProps['direction'],
  Record<ElementState, Variant>
> = {
  down: {
    initial: { y: 0 },
    hover: { y: 4 },
    focus: {
      y: [0, 4, 0],
      transition: { repeat: Infinity },
    },
    active: { y: 12 },
  },
  up: {
    initial: { y: 0 },
    hover: { y: -4 },
    focus: {
      y: [0, -4, 0],
      transition: { repeat: Infinity },
    },
    active: { y: -12 },
  },
  left: {
    initial: { x: 0 },
    hover: { x: -4 },
    focus: {
      x: [0, -4, 0],
      transition: { repeat: Infinity },
    },
    active: { x: -12 },
  },
  right: {
    initial: { x: 0 },
    hover: { x: 4 },
    focus: {
      x: [0, 4, 0],
      transition: { repeat: Infinity },
    },
    active: { x: 12 },
  },
  'top-right': {
    initial: { x: 0, y: 0 },
    hover: { x: 4, y: -4 },
    focus: {
      x: [0, 4, 0],
      y: [0, -4, 0],
      transition: { repeat: Infinity },
    },
    active: { x: 12, y: -12 },
  },
};

type ArrowButtonBaseProps = {
  direction?: ArrowIconProps['direction'];
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  textSize?: 'small' | 'medium';
};

type ArrowLinkProps = {
  direction?: ArrowIconProps['direction'];
  click?: () => void;
} & ({ href?: string; to?: never } | { href?: never; to: string }) &
  ArrowButtonBaseProps & { prefetch?: 'intent' | 'render' | 'none' };

type ArrowButtonProps = {
  onClick?: JSX.IntrinsicElements['button']['onClick'];
  type?: JSX.IntrinsicElements['button']['type'];
} & ArrowButtonBaseProps;

function getBaseProps({ textSize, className }: ArrowButtonBaseProps) {
  return {
    className: clsx(
      'inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition',
      {
        'text-xl': textSize === 'medium',
        'text-lg': textSize === 'small',
      },
      className,
    ),
  };
}

function ArrowButtonContent({
  children,
  direction = 'right',
}: Pick<ArrowButtonBaseProps, 'children' | 'direction'>) {
  const circumference = 28 * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {children &&
      (direction === 'right' || direction === 'up' || direction === 'top-right') ? (
        <span className="mr-4 text-xl font-medium">{children}</span>
      ) : null}

      <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
        <div className="absolute">
          <svg width="60" height="60">
            <circle
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
            />

            <motion.circle
              className="text-[#f0b90b]"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
              style={{ strokeDasharray }}
              variants={{
                initial: { strokeDashoffset: circumference },
                hover: { strokeDashoffset: 0 },
                focus: { strokeDashoffset: 0 },
                active: { strokeDashoffset: 0 },
              }}
              transition={{
                damping: 0,
                ...(shouldReduceMotion ? { duration: 0 } : null),
              }}
            />
          </svg>
        </div>

        <motion.span
          transition={shouldReduceMotion ? { duration: 0 } : {}}
          variants={shouldReduceMotion ? {} : arrowVariants[direction]}>
          <ArrowIcon direction={direction} />
        </motion.span>
      </div>

      {children && (direction === 'left' || direction === 'down') ? (
        <span className="ml-8 text-xl font-medium">{children}</span>
      ) : null}
    </>
  );
}

function ArrowButton({ onClick, type, ...props }: ArrowButtonProps) {
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      onClick={onClick}
      type={type}
      {...getBaseProps(props)}
      ref={ref}
      animate={state}
      transition={shouldReduceMotion ? { duration: 0 } : {}}>
      <ArrowButtonContent {...props} />
    </motion.button>
  );
}

const MotionLink = motion(Link);

function ArrowLink({ to, href, click, ...props }: ArrowLinkProps) {
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          {...getBaseProps(props)}
          ref={ref}
          animate={state}
          onClick={click}
          transition={shouldReduceMotion ? { duration: 0 } : {}}>
          <ArrowButtonContent {...props} />
        </motion.div>
      </Link>
    );
  } else {
    return (
      <motion.a
        {...getBaseProps(props)}
        ref={ref}
        animate={state}
        onClick={click}
        transition={shouldReduceMotion ? { duration: 0 } : {}}>
        <ArrowButtonContent {...props} />
      </motion.a>
    );
  }
}

function BackLink({
  href,
  className,
  children,
}: { href: LinkProps['href'] } & Pick<
  ArrowLinkProps,
  'className' | 'children' | 'click'
>) {
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionLink
      href={href}
      className={clsx('text-black flex focus:outline-none items-center', className)}
      ref={ref}
      animate={state}
      transition={shouldReduceMotion ? { duration: 0 } : {}}>
      <motion.span
        className="flex items-center"
        variants={shouldReduceMotion ? {} : arrowVariants.left}
        transition={shouldReduceMotion ? { duration: 0 } : {}}>
        <ArrowIcon direction="left" className="dark:text-white" />
      </motion.span>
      <H6 as="span">{children}</H6>
    </MotionLink>
  );
}

function NextLink({
  href,
  className,
  children,
  click,
}: { href: LinkProps['href'] } & Pick<
  ArrowLinkProps,
  'className' | 'children' | 'click'
>) {
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionLink
      href={href}
      className={clsx('flex focus:outline-none items-center', className)}
      ref={ref}
      onClick={() => click()}
      animate={state}
      transition={shouldReduceMotion ? { duration: 0 } : {}}>
      <H6 as="span">{children}</H6>
      <motion.span
     
        variants={shouldReduceMotion ? {} : arrowVariants.right}
        transition={shouldReduceMotion ? { duration: 0 } : {}}>
        <ArrowIcon direction="right" />
      </motion.span>
    </MotionLink>
  );
}

export { ArrowButton, ArrowLink, BackLink, NextLink };
