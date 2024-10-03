import { forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(props, ref) {
  const { onClick, children, disabled, fullWidth } = props;

  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold cursor-pointer text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        disabled && "cursor-not-allowed bg-gray-400 text-gray-700 hover:bg-gray-400",
        fullWidth && "w-full",
      )}
    >
      {children}
    </button>
  );
});
