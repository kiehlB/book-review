import clsx from 'clsx';
import * as React from 'react';
import { MdLockOutline } from 'react-icons/md';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface LabelInputProps extends InputProps {
  label: string;
  placeholder?: string;
  name?: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler;
  className?: string;
  type?: string;
  id?: string;
  helper: any;
}

const { useState, useCallback } = React;
const LabelInput: React.FC<LabelInputProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  disabled,
  className,
  type,
  id,
  helper,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <div className="form">
      <input
        type={type}
        id={id}
        className={className}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        placeholder=" "
        value={value}
        onChange={onChange}
        {...rest}
      />

      {disabled && <MdLockOutline />}

      <label
        htmlFor={label}
        className={clsx('form__label text-zinc-400 font-Roboto', {
          'text-[#17c964]': helper?.color == 'success',
          'text-[#f31260]': helper?.color == 'error',
        })}>
        {label}
      </label>
    </div>
  );
};

export default LabelInput;
