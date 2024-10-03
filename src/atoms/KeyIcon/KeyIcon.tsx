import { twMerge } from "tailwind-merge";

type KeyIconVariant = "base" | "dark";

type Props = {
  children: string;
  variant?: KeyIconVariant;
};

export const KeyIcon = (props: Props) => {
  const { children, variant = "base" } = props;

  return (
    <span
      className={twMerge(`p-2 border rounded-md w-12 font-extralight`, variant === "dark" && "bg-gray-800 text-white")}
    >
      {children}
    </span>
  );
};
