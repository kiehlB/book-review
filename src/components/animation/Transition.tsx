import React from 'react';
import { useTransition, animated } from 'react-spring';

type ConditionTransitionProps = {
  visible: boolean;
  options: Record<string, unknown>;
  children: React.ReactNode;
};

export const ConditionTransition: React.FC<ConditionTransitionProps> = ({
  visible,
  options,
  children,
}) => {
  const transitions = useTransition(visible, {
    config: { mass: 2, tension: 280, friction: 24, clamp: true },
    ...options,
  });

  return (
    <>
      {transitions(
        (style, item) =>
          item && (
            <animated.div style={{ ...style, overflow: 'hidden' }}>
              {children}
            </animated.div>
          ),
      )}
    </>
  );
};
