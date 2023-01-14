import * as React from 'react';
import { Input } from '@nextui-org/react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface LabelInputProps extends InputProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler;
  className?: string;
  type?: string;
  id?: string;
}

const { useState, useCallback } = React;
const LabelInput: React.FC<LabelInputProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  className,
  type,
  id,
  ...rest
}) => {
  return (
    <Input
      width="100%"
      onChange={onChange}
      className={className}
      name={name}
      type={type}
      labelPlaceholder={placeholder}
      value={value}
    />
  );
};

export default LabelInput;
