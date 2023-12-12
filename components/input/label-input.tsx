import React, { forwardRef, useState } from 'react';
import Input, { type Props as InputProps } from './input';

interface Props extends InputProps {
  label: string;
}

const LabelInput = forwardRef<HTMLInputElement, Props>(
  ({ label, onBlur, onFocus, ...rest }: Props, ref) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(e);
      setFocused(true);
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
      setFocused(false);
    };

    return (
      <div className="flex flex-col">
        <label
          className={`duration-250 mb-2 text-base font-semibold leading-6 transition-colors ${
            focused ? 'text-primary' : 'text-gray-400'
          }`}>
          {label}
        </label>
        <Input onFocus={handleFocus} onBlur={handleBlur} {...rest} ref={ref} />
      </div>
    );
  },
);

LabelInput.displayName = 'LabelInput';

export default LabelInput;
