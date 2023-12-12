import { forwardRef } from 'react';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string | null;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ errorMessage, ...rest }: Props, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={`
            focus:border-primary h-12 rounded-md border border-gray-200  
            px-4 py-2 text-base text-gray-500 placeholder-gray-400
            outline-none transition
            disabled:bg-gray-100 disabled:text-gray-300 
          `}
          {...rest}
        />
        {errorMessage && (
          <div className="mt-2 text-sm text-red-500 dark:text-red-400">
            {errorMessage}
          </div>
        )}
      </>
    );
  },
);

Input.displayName = 'Input';

export default Input;
